import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import {Apple} from './components/apple'
import {Banana} from './components/banana'
import {Blender} from './components/blender'
import Blender2 from './components/blender2'
import {Box} from './components/box'
import { Plane } from './components/plane'
import { Platform } from './components/platform'
import { Cursor } from './helpers/Drag'

import { Debug, Physics } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Background from '../images/background.png'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Three(props){

  const SkyBox = () => {
    const { scene } = useThree()
    const loader = new TextureLoader()
    const texture = loader.load(Background)
    scene.background = texture
    return null
  }

  const fruits = [
    {name: 'apple-1', pos: [0,2,-5], objType:'apple'},
    {name: 'apple-2', pos: [-2,1,-5], objType:'apple'},
    {name: 'banana-1', pos: [2,1,-5], objType:'banana'},
  ]

  return (
    <>
      <Canvas 
      linear
      flat
      shadows
      >
        <PerspectiveCamera
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            makeDefault
        />

        <Suspense fallback={null} >
          <Physics allowSleep={false} iterations={15} gravity={[0, -32, 0]}  >
            {/* <Debug color="black" scale={1.1}> */}
              <OrbitControls enabled={true}  />
              <Cursor />
              {fruits?.map(f => (
                f.objType == 'apple' ?
                  <Apple name={f.name} position={f.pos}/>
                : f.objType == 'banana' ?
                  <Banana name={f.name} position={f.pos}/>
                :
                <></>
                )
              )}
              {/* <Blender /> */}
              {/* <Box />  */}
              {/* <Platform /> */}
              <Blender2 add={props.add} remove={props.remove}/>
              <Plane />
            {/* </Debug> */}
          </Physics>

          <ambientLight args={["#ffffff", 0.6]} />
          <directionalLight args={["#ffffff", .4]} position={[3,10,4]} castShadow/>
          <SkyBox />
        </Suspense>
      </Canvas>
    </>
  )
}

