import React from 'react'

import Produce, { ProduceTypeCount } from '../../images/produce/produce'
import { useTexture } from '@react-three/drei'

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
)

const Sprite = (props) => {
  const produce = Produce(props?.id)
  const texture = useTexture(produce?.texture)
  return (
    <sprite key={produce?.id}>
      <spriteMaterial attach="material" map={texture}  />
    </sprite>
  )
}

export default function PreloadSprites({ ...props }) {
  return (
    arrayRange(1, ProduceTypeCount, 1).map(id => ( 
      <Sprite id={id} /> 
    ))
  )
}