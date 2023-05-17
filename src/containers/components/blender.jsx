import React from 'react'

import blenderImage from '../../images/appliances/blender.png'
import { useBox } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'

export default function Blender2({ ...props }) {

  const texture = useTexture(blenderImage)

  const [bottom] = useBox(() => ({type: 'Static',  position: [-1,-.7, -5], rotation: [0, 0, 0], args: [1, .05, 1], onCollideBegin: Down}))
  const [left] = useBox(() => ({type: 'Static',  position: [-1.4,.1, -5], rotation: [0, 0, .1], args: [.05, 1.5, 1], onCollideBegin: Down}))
  const [right] = useBox(() => ({type: 'Static',  position: [-.6,.1, -5], rotation: [0, 0, -.1], args: [.05, 1.5, 1], onCollideBegin: Down}))
  const [front] = useBox(() => ({type: 'Static',  position: [-1,.1, -4.85], rotation: [0, Math.PI / 2, .1 ], args: [.05, 1.5, 1], onCollideBegin: Down}))
  const [back] = useBox(() => ({type: 'Static',  position: [-1,.1, -5.3], rotation: [0, Math.PI / 2, -.1 ], args: [.05, 1.5, 1], onCollideBegin: Down}))

  const Down = (e) => {
    if(e.body?.group === 'fruit'){
      props.add(e.body.name)
    }
  }

  return (
    <>  
      <sprite scale={[1.5,2.5]} position={[-1, -.3, -5]}>
        <spriteMaterial attach="material" map={texture}  />
      </sprite>

     {/*  bottom platform, no sides yet */}
      <mesh ref={bottom} />
      <mesh ref={left} />
      <mesh ref={right} />
      <mesh ref={front} />
      <mesh ref={back} />

    </>
  )
}



