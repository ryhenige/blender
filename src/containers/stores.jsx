import { devtools } from "zustand/middleware"
import create from 'zustand'

import Produce from '../images/produce/produce'

export const useItemsStore = create(devtools((set) => ({
  items: [],
  blending: false,
  addItem: (id) => 
    set((state) => ({items: [...state.items, {id: Date.now(), produce_id: id, ...Produce(id)}]})),
  removeItem: (id) =>
    set((state) => { return { items: state.items.filter((item) => item.id !== id)}}),
  removeAllItems: () => set({ items: [] }),
  toggleBlending: () => set((state) => ({blending: !state.blending})),
  disableBlending: () => set({blending: false}),
})))
