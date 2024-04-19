import React, {ReactElement, useEffect} from 'react';
import {LogBox, Platform} from 'react-native';

//@ts-ignore
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MySDK} from 'movies-sdk';

import RootNavi from 'navi/root';

import {persistedStore, store} from './src/store';

LogBox.ignoreAllLogs();

const client = new MySDK();


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
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <RootNavi />
      </PersistGate>
    </Provider>
  );
}

export default App;
