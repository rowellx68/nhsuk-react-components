import { createContext, useContext } from 'react';

export type DoDontListContextValue = {
  modifier: 'cross' | 'tick';
  hidePrefix?: boolean;
};

const DoDontListContext = createContext<DoDontListContextValue>({
  modifier: 'tick',
});

export const useDoDontListContext = () => useContext(DoDontListContext);
export const DoDontListContextProvider = DoDontListContext.Provider;
