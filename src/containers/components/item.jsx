import React, { useEffect } from 'react'
import { useBox } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'

import Produce from '../../images/produce/produce'
import { useItemsStore } from '../stores'
import { Random } from '../helpers'

export default function Item({ ...props }) {

  const removeItem = useItemsStore((state) => state.removeItem)
  const blending = useItemsStore((state) => state.blending)
  let bool = true
  
  const produce = Produce(props.item?.produce_id)
  const texture = useTexture(produce?.texture)

  const [ref, api] = useBox(() => ({
    mass: 1, 
    position: [Random(-1.2, -.8),1,-5.2], 
    args: produce?.colliderSize, 
  }))

  const Pulse = () => {
    const direction = bool ? [-4, 3, 0] : [4, -1, 0];
    api.applyImpulse(direction, [0, 0, 0])
    bool = !bool
  }

  useEffect(() => {
    if(!blending) return
    const interval = setInterval(() => {
      Pulse()
    }, 500)
    return () => {
      clearInterval(interval);
    }
  }, [blending])

  const remove = () => {
    removeItem(props.item?.id)
  }

  return (
    <sprite scale={produce?.scale} ref={ref} onClick={remove} key={produce?.id}>
      <spriteMaterial attach="material" map={texture}  />
    </sprite>
  )
}