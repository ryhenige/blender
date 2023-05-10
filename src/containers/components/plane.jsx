import React from 'react'

import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Wood from '../../images/table/wood.jpg'

export const Plane = (props) => {
  const [ref] = useBox(() => ({type: 'Static', mass: 10,  position: [0,-2, 0], rotation: [-Math.PI / 2, 0, 0], args: [8,5,.1], ...props }))
  const colorMap = useLoader(TextureLoader, Wood)

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[8, 5, .1]} />
      <meshStandardMaterial  map={colorMap}/>
    </mesh>
  )
}
