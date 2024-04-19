import React, {createContext, FC, ReactElement, ReactNode} from 'react';

import {MySDK} from 'movies-sdk';

interface SDKContextProps {
  children: ReactNode;
}

const {getActions, getSelectors, getStore} = new MySDK();

export const SDKContext = createContext({getActions, getSelectors, getStore});

export const SDKContextProvider: FC<SDKContextProps> = ({children}): ReactElement => {
  return (
    <SDKContext.Provider value={{getActions, getSelectors, getStore}}>
      {children}
    </SDKContext.Provider>
  );
};
