import Item from './item'
import { useItemsStore } from '../stores'

function random(min, max) {
    return Math.random() * (max - min) + min
}

export default function ItemContainer() {
  const allItems = useItemsStore((state) => state.items)

  return (
    allItems?.map(p => (
      <Item 
          key={p?.id}
          item={p} 
          position={[random(-1.2, -.8),1,-5.2]}
      />
    ))
  )
}