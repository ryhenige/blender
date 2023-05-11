import React from 'react'

import { useBox } from '@react-three/cannon'


export const Plane = (props) => {
  
  const [ref] = useBox(() => ({type: 'Static',  position: [0,-1.5, -5], rotation: [0, 0, 0], args: [10, .1, 1], ...props }))

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <boxGeometry args={[10, .1, 1]} />
        <meshStandardMaterial opacity={0} color={'orange'} transparent/>
      </mesh>
    </>
  )
}
