import { createContext, useContext } from 'react';

export type DoAndDontListContextValue = {
  modifier: 'do' | 'dont';
};

const DoAndDontListContext = createContext<DoAndDontListContextValue>({
  modifier: 'do',
});

export const useDoAndDontListContext = () => useContext(DoAndDontListContext);
export const DoAndDontListContextProvider = DoAndDontListContext.Provider;
