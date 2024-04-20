import React, {createContext, FC, ReactElement, ReactNode} from 'react';

import {REACT_APP_MOVIES_API_KEY} from '@env';
import {MoviesSDK} from 'movies-sdk';
interface SDKContextProps {
  children: ReactNode;
}

const {getActions, getSelectors, getStore} = new MoviesSDK();

export const SDKContext = createContext({
  getActions,
  getSelectors,
  getStore,
  apiKey: REACT_APP_MOVIES_API_KEY,
});

export const SDKContextProvider: FC<SDKContextProps> = ({children}): ReactElement => {
  return (
    <SDKContext.Provider
      value={{getActions, getSelectors, getStore, apiKey: REACT_APP_MOVIES_API_KEY}}>
      {children}
    </SDKContext.Provider>
  );
};
