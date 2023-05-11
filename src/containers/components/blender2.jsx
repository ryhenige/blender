import React from 'react'

import blenderImage from '../../images/appliances/blender.png'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useBox } from '@react-three/cannon'

export default function Blender2({ ...props }) {
  const loader = new TextureLoader()
  const texture = loader.load(blenderImage)

  const [ref1] = useBox(() => ({type: 'Static',  position: [-.9,-.45, -5], rotation: [0, 0, 0], args: [1, .1, 1], onCollideBegin: Down, onCollideEnd: Up }))

  const Down = (e) => {
    if(e.body?.group === 'fruit'){
      props.add(e.body.name)
    }
  }

  const Up = (e) => {
    if(e.body?.group === 'fruit'){
      props.remove(e.body.name)
    }
  }

  return (
    <>  
      <sprite scale={[1.5,2.5]} position={[-1, -.3, -5]}>
        <spriteMaterial attach="material" map={texture}  />
      </sprite>

      <mesh ref={ref1}>
        <boxGeometry args={[1, .1, 1]} />
        <meshStandardMaterial opacity={0.2} color={'orange'} transparent/>
      </mesh>
    </>
  )
}



