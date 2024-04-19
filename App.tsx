import React, {ReactElement, useEffect} from 'react';
import {LogBox, Platform} from 'react-native';

import {MoviesSDK} from 'movies-sdk';
//@ts-ignore
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import {Provider} from 'react-redux';

import RootNavi from 'navi/root';

import {SDKContextProvider} from './src/context';

LogBox.ignoreAllLogs();

const client = new MoviesSDK();

const sdkStore = client.getStore();

const connectToRemoteDebugger = () => {
  NativeDevSettings.setIsDebuggingRemotely(true);
};

function App(): ReactElement {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      connectToRemoteDebugger();
    }
  }, []);

  return (
    <SDKContextProvider>
      <Provider store={sdkStore}>
        <RootNavi />
      </Provider>
    </SDKContextProvider>
  );
}

export default App;
