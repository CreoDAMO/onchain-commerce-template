import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { OnchainStoreContextType } from '../types';
import digitalProductImage from '../images/digital_product.jpg';
import type { Product } from 'src/types';

const emptyContext = {} as OnchainStoreContextType;

const OnchainStoreContext =
  createContext<OnchainStoreContextType>(emptyContext);

type OnchainStoreProviderReact = {
  children: ReactNode;
};

const products: Product[] = [
  { id: 'software1', name: `CRYPTO TRADING BOT PRO`, price: 0.05, image: digitalProductImage },
  {
    id: 'game1',
    name: `NEON RUNNER: ONCHAIN EDITION`,
    price: 0.02,
    image: digitalProductImage,
  },
  {
    id: 'nft1',
    name: `GENESIS BUILDER NFT`,
    price: 0.1,
    image: digitalProductImage,
  },
  {
    id: 'tool1',
    name: `DEVELOPER UTILITY SUITE`,
    price: 0.03,
    image: digitalProductImage,
  },
];

export function OnchainStoreProvider({ children }: OnchainStoreProviderReact) {
  const [quantities, setQuantities] = useState({});
  const value = useMemo(() => {
    return {
      quantities,
      setQuantities,
      products,
    };
  }, [quantities]);

  return (
    <OnchainStoreContext.Provider value={value}>
      {children}
    </OnchainStoreContext.Provider>
  );
}

export function useOnchainStoreContext() {
  return useContext(OnchainStoreContext);
}
