import React from 'react'

import { useSphere } from '@react-three/cannon'
import { useDragConstraint } from '../helpers/Drag'

import apple from '../../images/fruits/apple.glb'
import { useGLTF } from '@react-three/drei'

export const Apple = (props) => {

  const [ref] = useSphere(() => (
    { 
      position: props.position, 
      args: [.2], 
      mass: 1,  
      linearDamping: 0.95, 
      angularDamping: 0.95, 
      linearFactor: [1, 1, 0], 
      onCollideBegin: Down, 
      onCollideEnd: Up,  
      ...props 
    }
  ))

  const bind = useDragConstraint(ref)

  const { nodes, materials } = useGLTF(apple)

  const Down = (e) => {
    if(e.body?.name === 'blender'){
      ref.current.scale.set(.005, .005, .005)
    }
  }

  const Up = (e) => {
    if(e.body?.name === 'blender'){
      ref.current.scale.set(.01, .01, .01)
    }
  }

  return (
    <group
      ref={ref}
      {...bind}
      dispose={null}
      scale={.005}
      name={props.name}
      group='fruit'
      >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[24.37, -39.75, -43.15]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <group position={[24.37, 43.15, 39.75]}>
              <mesh geometry={nodes['apple_low_obj_Material_#35_0'].geometry} material={materials.Material_35} castShadow receiveShadow />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(apple)