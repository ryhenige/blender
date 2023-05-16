import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import Blender from './components/blender'
import { Plane } from './components/plane'
import ItemContainer from './components/itemContainer'

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
          <Physics allowSleep={false} iterations={15} gravity={[0, -9.8, 0]}  >
            {/* <Debug color="black" scale={1.1}> */}
              <OrbitControls enabled={true}  />
              <ItemContainer />
              <Blender add={props.add} />
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

