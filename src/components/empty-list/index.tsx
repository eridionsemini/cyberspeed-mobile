import React, { FC, ReactElement } from 'react';
import { Text, View } from 'react-native';

import { getMargins } from '__root/src/utils';

import styles from './styles';

export const MoviesListEmptyComponent: FC = (): ReactElement => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Oooopsssss!</Text>
            <Text style={[styles.info, getMargins({ top: 'sm' })]}>No results matching your search</Text>
            <Text style={[styles.info, getMargins({ top: 'sm' })]}>
                Type something to explore your favourite movies
            </Text>
        </View>
    );
};

export const FavouriteMoviesListEmptyComponent: FC = (): ReactElement => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Hhhhmmmmm!</Text>
            <Text style={[styles.info, getMargins({ top: 'sm' })]}>
                Is seems there are no movies here
            </Text>
            <Text style={[styles.info, getMargins({ top: 'sm' })]}>
                Go to movies page and get the party started
            </Text>
        </View>
    );
};
