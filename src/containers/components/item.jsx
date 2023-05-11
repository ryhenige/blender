import React from 'react'

import { TextureLoader } from 'three'
import { useBox } from '@react-three/cannon'

import Produce from '../../images/produce/produce'

export default function Item({ ...props }) {

  const produce = Produce(props.item?.produce_id)

  const loader = new TextureLoader()
  const texture = loader.load(produce?.image)

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
    <sprite scale={produce?.scale} ref={ref} onClick={remove} >
      <spriteMaterial attach="material" map={texture}  />
    </sprite>
  )
}