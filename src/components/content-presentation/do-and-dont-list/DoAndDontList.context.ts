import { createContext, useContext } from 'react';

export type DoAndDontListContextValue = {
  variant: 'do' | 'dont';
};

const DoAndDontListContext = createContext<DoAndDontListContextValue>({
  variant: 'do',
});

export const useDoAndDontListContext = () => useContext(DoAndDontListContext);
export const DoAndDontListContextProvider = DoAndDontListContext.Provider;
