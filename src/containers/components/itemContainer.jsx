import Item from './item';

function random(min, max) {
    return Math.random() * (max - min) + min;
}

export default function ItemContainer({ items, add, remove }) {
  const arr = [];

  items.forEach(p => {
    arr.push(
      <Item 
          key={p?.id}
          add={add} 
          remove={remove} 
          item={p} 
          position={[random(-1.2, -.8),1,-5.2]}
      />
    )
  })
  

  return <>{arr}</>;
}