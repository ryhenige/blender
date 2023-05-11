import React from 'react'

import { useBox } from '@react-three/cannon'
import { useDragConstraint } from '../helpers/Drag'

import bananaImg from '../../images/fruits/banana.glb'
import { useGLTF } from '@react-three/drei'

export const Banana = (props) => {

  const [ref] = useBox(() => ({position: props.pos, mass: 1,  linearDamping: 0.95, angularDamping: 0.95, args: [.2, .5, .75] , linearFactor: [1, 1, 0], rotation: [0, 90, 0],  onCollideBegin: Down, onCollideEnd: Up, ...props }))

  const bind = useDragConstraint(ref)
  
  const { nodes, materials } = useGLTF(bananaImg)

  const Down = (e) => {
    if(e.body?.name === 'blender'){
      ref.current.scale.set(.1, .1, .1)
    }
  }

  const Up = (e) => {
    if(e.body?.name === 'blender'){
      ref.current.scale.set(.2, .2, .2)
    }
  }

  return (
    <group
      {...bind}
      ref={ref}
      dispose={null}
      scale={.1}
      name={props.name}
      group='fruit'
      >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -1, -0.18]} rotation={[-0.63, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Material} />
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload(bananaImg)