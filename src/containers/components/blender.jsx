import React from 'react'
import styled from 'styled-components'

import blenderImage from '../../images/appliances/blender.png'
import blenderLidImage from '../../images/appliances/blender-lid.png'
import { useBox } from '@react-three/cannon'
import { useTexture, Html } from '@react-three/drei'
import { useItemsStore } from '../stores'

const StyledButton = styled.div`
  position: absolute;
  top: 70px;
  left: -37px;
  font-weight: 700;
  background-color: gray;
  border-radius: 4px 4px 10px 10px;
  width: 75px;
  padding: 0 0px 3px 0;
  &:hover {
    background: gray;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
       -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
            box-shadow: inset 0px 0px 5px #c1c1c1;
     outline: none;
    cursor: pointer;
  }
`
const ServingBox = styled.div`
  position: absolute;
  top: 25px;
  left: -37px;
  width: 75px;
  height: 40px;
  background-color: black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: 14px;
  pointer-events: none;
`
const Text = styled.span`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  color: white;
  text-shadow: 0px -1px 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`
const Onlight = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  top: 30px;
  left: 27px;
  background-color: ${props => props.blending ? '#35e035' : 'red'};
  box-shadow: 0px 0px 4px 2px ${props => props.blending ? '#35e035' : 'red'};
`
export default function Blender2({ ...props }) {

  const allItems = useItemsStore((state) => state.items)
  const blending = useItemsStore((state) => state.blending)
  const toggleBlending = useItemsStore((state) => state.toggleBlending)

  const texture = useTexture(blenderImage)
  const lidTexture = useTexture(blenderLidImage)

  const [bottom] = useBox(() => ({type: 'Static',  position: [-1,-.7, -5], rotation: [0, 0, 0], args: [1, .05, 1]}))
  const [left] = useBox(() => ({type: 'Static',  position: [-1.4,.1, -5], rotation: [0, 0, .1], args: [.05, 1.5, 1]}))
  const [right] = useBox(() => ({type: 'Static',  position: [-.6,.1, -5], rotation: [0, 0, -.1], args: [.05, 1.5, 1]}))
  const [front] = useBox(() => ({type: 'Static',  position: [-1,.1, -4.85], rotation: [0, Math.PI / 2, .1 ], args: [.05, 1.5, 1]}))
  const [back] = useBox(() => ({type: 'Static',  position: [-1,.1, -5.3], rotation: [0, Math.PI / 2, -.1 ], args: [.05, 1.5, 1]}))
  
  const ToggleBlender = () => {
    toggleBlending()
  }
  
  const Lid = () => {
    const [top] = useBox(() => ({type: 'Static',  position: [-1,.85, -5], rotation: [0, 0, 0], args: [1, .05, 1]}))
    return (
      <>
        <sprite scale={[1.5,.3]} position={[-1, .95, -5]}>
          <spriteMaterial attach="material" map={lidTexture}  />
        </sprite>
        < mesh ref={top} />
      </>
    )
  }

  return (
    <>  
      {!!blending &&
        <Lid />
      }
      
      <sprite scale={[1.5,2.5]} position={[-1, -.3, -5]}>
        <spriteMaterial attach="material" map={texture}  />
      </sprite>

     {/*  bottom platform, no sides yet */}
      <mesh ref={bottom} >
        <Html>
          <ServingBox>
            <Text>{allItems?.length}</Text>
            <Text>Servings</Text>
          </ServingBox>
          <Onlight blending={blending} />
          <StyledButton onClick={ToggleBlender}>Blend</StyledButton>
        </Html>
      </mesh>
      <mesh ref={left} />
      <mesh ref={right} />
      <mesh ref={front} />
      <mesh ref={back} />

    </>
  )
}



