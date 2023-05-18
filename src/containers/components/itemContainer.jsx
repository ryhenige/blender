import Item from './item'
import { useItemsStore } from '../stores'



export default function ItemContainer() {
  const allItems = useItemsStore((state) => state.items)

  return (
    allItems?.map(p => (
      <Item 
          key={p?.id}
          item={p} 
      />
    ))
  )
}