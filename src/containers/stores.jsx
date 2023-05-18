import { devtools } from "zustand/middleware"
import create from 'zustand'

import Produce from '../images/produce/produce'

export const useItemsStore = create(devtools((set) => ({
  items: [],
  itemTypes: [],
  blending: false,
  addItem: (id) => 
    set((state) => ({items: [...state.items, {id: Date.now(), produce_id: id, ...Produce(id)}]})),
  removeItem: (id) =>
    set((state) => { return { items: state.items.filter((item) => item.id !== id)}}),
  removeAllItems: () => set({ items: [] }),
  convertItems: () => {
    set({ blending: false })
    set((state) => { 
      const produceCount = state.items.length
      const fruitCount = state.items.filter((item) => item.produceType === 'fruit').length
      const vegetableCount = state.items.filter((item) => item.produceType === 'vegetable').length
      return { itemTypes: [
                  {type: 'Fruit', count: fruitCount, percentage: Math.round((fruitCount / produceCount) * 100), color: 'red'}, 
                  {type: 'Vegetable', count: vegetableCount, percentage: Math.round((vegetableCount / produceCount) * 100), color: 'green'}
              ]
      }})
      set({ items: [] })
  },
  reset : () => set({ items: [], itemTypes: [] }),
  toggleBlending: () => set((state) => ({blending: !state.blending})),
  disableBlending: () => set({blending: false})
})))
