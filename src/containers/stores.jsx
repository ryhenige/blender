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
      const redCount   = state.items.filter((item) => item.color === 'red').length
      const greenCount = state.items.filter((item) => item.color === 'green').length
      const blueCount  = state.items.filter((item) => item.color === 'blue').length
      return { itemTypes: [
                  {type: 'red', count: redCount, percentage: CalculatePercentToTen(redCount, produceCount), color: '#EC4730'}, 
                  {type: 'green', count: greenCount, percentage: CalculatePercentToTen(greenCount, produceCount), color: '#81CA4C'},
                  {type: 'blue', count: blueCount, percentage: CalculatePercentToTen(blueCount, produceCount), color: '#44ACFA'}
              ]
      }})
      set({ items: [] })
  },
  reset : () => set({ items: [], itemTypes: [] }),
  toggleBlending: () => set((state) => ({blending: !state.blending})),
  disableBlending: () => set({blending: false})
})))
