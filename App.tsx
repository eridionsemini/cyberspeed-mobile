import React, {ReactElement, useEffect} from 'react';
import {LogBox, Platform} from 'react-native';

//@ts-ignore
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';

import RootNavi from 'navi/root';

LogBox.ignoreAllLogs();

const connectToRemoteDebugger = () => {
  NativeDevSettings.setIsDebuggingRemotely(true);
};

function App(): ReactElement {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      connectToRemoteDebugger();
    }
  }, []);
  return <RootNavi />;
}

export default App;
