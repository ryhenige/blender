import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useTexture, Preload, Stats } from '@react-three/drei'

import Blender from './components/blender'
import { Plane } from './components/plane'
import ItemContainer from './components/itemContainer'
import PreloadSprites from './components/preloadSprites'

import { Debug, Physics } from '@react-three/cannon'
import Background from '../images/background.png'

export default function Three(props){

  const SkyBox = () => {
    const { scene } = useThree()
    const texture = useTexture(Background)
    scene.background = texture
    return null
  }

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
          <Preload all />
          <Physics allowSleep={false} iterations={15} gravity={[0, -9.8, 0]} >
            {/* <Debug color="black" scale={1.1}> */}
              <OrbitControls enabled={true}  />
              <ItemContainer />
              <Blender />
              <Plane />
            {/* </Debug> */}
          </Physics>

          <PreloadSprites />
          <ambientLight args={["#ffffff", 0.6]} />
          <directionalLight args={["#ffffff", .4]} position={[3,10,4]} castShadow/>
          <SkyBox />
          <Stats showPanel={false} />
        </Suspense>
      </Canvas>
    </>
  )
}

