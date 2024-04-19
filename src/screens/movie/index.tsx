import React, {FC, ReactElement, useCallback, useContext, useEffect} from 'react';
import {BackHandler, RefreshControl, SafeAreaView, ScrollView, Text, View} from 'react-native';

import {SDKContext} from '__root/src/context';
import {CommonActions} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {useAppDispatch, useAppSelector} from 'hooks';
import {convertStringToArray, getMargins, isFavourite} from 'utils';

import {Heart, NavigationBar, Spinner} from 'components/';

import styles from './styles';
import {MovieProps} from './types';

import commonStyles from 'assets/styles/common';

export const Movie: FC<MovieProps> = ({
  navigation,
  route: {
    params: {id},
  },
}): ReactElement | null => {
  const {getActions, getSelectors} = useContext(SDKContext);
  const dispatch = useAppDispatch();
  const {favouritesSelector, movieDetailsSelector} = getSelectors();
  const {addMovieToFavourites, removeMovieFromFavourites, clearMovieDetails, refreshMovieDetails} =
    getActions();
  const {details: movie, refreshing, loading} = useAppSelector(movieDetailsSelector);
  const {data: fav} = useAppSelector(favouritesSelector);

  const handleLeftContentPress = useCallback(() => {
    navigation.dispatch(CommonActions.goBack());
    dispatch(clearMovieDetails());
  }, [navigation, dispatch, clearMovieDetails]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      handleLeftContentPress();
      return true;
    });
  }, [handleLeftContentPress]);

  if (loading) {
    return <Spinner absCenter />;
  }

  if (!movie) {
    return null;
  }

  const actors = convertStringToArray(movie.Actors);
  const keywords = convertStringToArray(movie.Genre);
  const isFav = isFavourite(fav, movie.imdbID);

  const handleHeartPress = () => {
    const m = {
      imdbID: movie.imdbID,
      Year: movie.Year,
      Poster: movie.Poster,
      Type: movie.Type,
      Title: movie.Title,
    };
    if (isFav) {
      dispatch(removeMovieFromFavourites(m));
      return;
    }
    dispatch(addMovieToFavourites(m));
  };

  const onRefresh = () => {
    dispatch(clearMovieDetails());
    dispatch(refreshMovieDetails({i: id}));
  };

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar handleLeftContentPress={handleLeftContentPress} title="Movie Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: movie.Poster, priority: FastImage.priority.high}}
          style={styles.image}>
          <Heart isFavourite={isFav} onPress={handleHeartPress} />
        </FastImage>
        <Text style={[getMargins({top: 'md'}), styles.title]}>{movie.Title}</Text>
        <Text style={[getMargins({top: 'md'}), styles.plot]}>{movie.Plot}</Text>

        <View style={styles.info}>
          <View style={styles.infoWrapper}>
            <Text style={[styles.infoTitle, getMargins({top: 'sm', bottom: 'sm'})]}>Actors</Text>
            {actors.map((actor, index) => (
              <Text key={index.toString()} style={[styles.infoText, getMargins({bottom: 'sm'})]}>
                {actor}
              </Text>
            ))}
          </View>
          <View style={styles.infoWrapper}>
            <Text style={[styles.infoTitle, getMargins({top: 'sm', bottom: 'sm'})]}>Keywords</Text>
            {keywords.map((keyword, index) => (
              <Text key={index.toString()} style={[styles.infoText, getMargins({bottom: 'sm'})]}>
                {keyword}
              </Text>
            ))}
          </View>
          <View style={styles.infoWrapper}>
            <Text style={[styles.infoTitle, getMargins({top: 'sm', bottom: 'sm'})]}>Ratings</Text>
            {movie.Ratings.map((rating, index) => (
              <Text key={index.toString()} style={[styles.infoText, getMargins({bottom: 'sm'})]}>
                {rating.Source}
                <Text style={[styles.rating]}> ({rating.Value})</Text>
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
