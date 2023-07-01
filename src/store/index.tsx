import { IProductProps } from '@/models/product';
import { create } from 'zustand';

type ActionProps = {
  addProduct: (product: IProductProps) => void;
};

type StoreProps = {
  state: {
    products: IProductProps[];
  };
  actions: ActionProps;
};

export const useProductsStore = create<StoreProps>(set => ({
  state: {
    products: [],
  },
  actions: {
    addProduct: product =>
      set(state => ({
        state: { products: [...state.state.products, product] },
      })),
  },
}));
