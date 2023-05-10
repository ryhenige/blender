import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import {Apple} from './components/apple'
import {Banana} from './components/banana'
import {Blender} from './components/blender'
import {Box} from './components/box'
import { Plane } from './components/plane'
import { Platform } from './components/platform'
import { Cursor } from './helpers/Drag'

import { Debug, Physics } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Kitchen from '../images/table/Kitchen.jpg'
import { OrbitControls, Sky } from '@react-three/drei'
export default function Three(props){

  const SkyBox = () => {
    const { scene } = useThree()
    const loader = new TextureLoader()
    const texture = loader.load(Kitchen)
    scene.background = texture
    return null
  }

  const fruits = [
    {name: 'apple-1', pos: [-3,4,0], objType:'apple'},
    {name: 'apple-2', pos: [-2,4,0], objType:'apple'},
    {name: 'banana-1', pos: [-1,3,0], objType:'banana'},
  ]

  return (
    <>
      <Canvas 
      linear
      flat
      shadows
      >
        <Suspense fallback={null} >
          <Physics allowSleep={false} iterations={15} gravity={[0, -10, 0]}  >
            {/* <Debug color="black" scale={1.1}> */}
              <OrbitControls enabled={false}  />
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
              <Blender />
              <Box /> 
              <Platform />
              <Plane />
            {/* </Debug> */}
          </Physics>
          <ambientLight args={["#ffffff", 0.6]} />
          <directionalLight args={["#ffffff", .4]} position={[3,10,4]} castShadow/>
          <SkyBox />
          {/* <Sky distance={450000} sunPosition={[0, 2, 0]} inclination={0} azimuth={0.25} {...props} /> */}
        </Suspense>
      </Canvas>
    </>
  )
}

