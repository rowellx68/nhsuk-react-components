import { createContext, useContext } from 'react';
import type { CardVariant } from './Card';

export type CardContextValue = {
  variant?: CardVariant;
  clickable?: boolean;
};

const CardContext = createContext<CardContextValue>({});

export const useCardContext = () => useContext(CardContext);
export const CardProvider = CardContext.Provider;
