import { devtools } from "zustand/middleware"
import create from 'zustand'

import Produce from '../images/produce/produce'
import { CalculatePercentToTen } from "./helpers"

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
                  {type: 'Fruit', count: fruitCount, percentage: CalculatePercentToTen(fruitCount, produceCount), color: '#fa0202'}, 
                  {type: 'Vegetable', count: vegetableCount, percentage: CalculatePercentToTen(vegetableCount, produceCount), color: '#19f705'}
              ]
      }})
      set({ items: [] })
  },
  reset : () => set({ items: [], itemTypes: [] }),
  toggleBlending: () => set((state) => ({blending: !state.blending})),
  disableBlending: () => set({blending: false})
})))
