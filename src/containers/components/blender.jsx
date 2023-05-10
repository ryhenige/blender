import React, { useRef } from 'react'

import blenderModel from '../../images/appliances/blender.glb'
import { useGLTF } from '@react-three/drei'

export function Blender({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(blenderModel)
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -100, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow geometry={nodes.Cube001_blender_0.geometry} material={materials.blender} />
            <mesh castShadow receiveShadow geometry={nodes.Cube001_Glass_0.geometry} material={materials.Glass} />
            <mesh castShadow receiveShadow geometry={nodes.Cube001_Metal_0.geometry} material={materials.Metal} />
              <meshPhongMaterial color={'white'}/>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(blenderModel)


