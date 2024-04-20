import React, {createContext, FC, ReactElement, ReactNode} from 'react';

import {MoviesSDK} from 'movies-sdk';
import {REACT_APP_MOVIES_API_KEY} from '@env';
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
