export const itemsStore = devtools(create((set) => ({
    items: [],
    addItem: (produceType) => 
      set((state) => ([...items, {id: Date.now(), produce_id: produceType}])
      ),
  })))