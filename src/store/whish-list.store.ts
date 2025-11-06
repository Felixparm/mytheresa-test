import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export type WishlistItem = { id: string; title: string };

export interface WishlistState {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const wishlistStoreCreator: StateCreator<WishlistState> = (set, get) => ({
  items: [],

  addToWishlist: (item) =>
    set((state) =>
      state.items.some((i) => i.id === item.id)
        ? {} 
        : { items: [...state.items, item] }
    ),

  removeFromWishlist: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  isInWishlist: (id) => get().items.some((item) => item.id === id),
});

export const useWishlistStore = create<WishlistState>()(
  persist(wishlistStoreCreator, {
    name: 'wishlist-storage',
  })
);

