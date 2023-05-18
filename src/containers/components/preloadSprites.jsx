import React from 'react'
import { useTexture } from '@react-three/drei'

import Produce, { ProduceTypeCount } from '../../images/produce/produce'
import { ArrayRange } from '../helpers'


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
    ArrayRange(1, ProduceTypeCount, 1).map(id => ( 
      <Sprite id={id} /> 
    ))
  )
}