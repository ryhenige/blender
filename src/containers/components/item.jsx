import React from 'react'

import { useBox } from '@react-three/cannon'

import Produce from '../../images/produce/produce'

export default function Item({ ...props }) {

  const produce = Produce(props.item?.produce_id)

  const [ref] = useBox(() => ({
      mass: 1, 
      position: props.position, 
      rotation: props.rotation, 
      args: produce?.colliderSize, 
   }))

  const remove = () => {
    props.remove(props.item?.id)
  }

  return (
    <sprite scale={produce?.scale} ref={ref} onClick={remove} key={produce?.id}>
      <spriteMaterial attach="material" map={produce?.texture}  />
    </sprite>
  )
}