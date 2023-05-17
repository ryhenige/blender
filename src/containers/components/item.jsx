import React from 'react'
import { useBox } from '@react-three/cannon'

import Produce from '../../images/produce/produce'
import { useItemsStore } from '../stores'
import { useTexture } from '@react-three/drei'

export default function Item({ ...props }) {

  const removeItem = useItemsStore((state) => state.removeItem)
  const produce = Produce(props.item?.produce_id)
  const texture = useTexture(produce?.texture)

  const [ref] = useBox(() => ({
      mass: 1, 
      position: props.position, 
      rotation: props.rotation, 
      args: produce?.colliderSize, 
   }))

  const remove = () => {
    removeItem(props.item?.id)
  }

  return (
    <sprite scale={produce?.scale} ref={ref} onClick={remove} key={produce?.id}>
      <spriteMaterial attach="material" map={texture}  />
    </sprite>
  )
}