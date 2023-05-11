import React from 'react'

import { useBox } from '@react-three/cannon'
import { Html } from '@react-three/drei'
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    selected: '',
})

export const Box = (props) => {
    const [ref] = useBox(() => ({type: 'Static', position: [0, .5, 0], onCollideBegin: onCollideBegin, onCollideEnd: onCollideEnd, isTrigger: true, ...props }))
    const { selected } = useSnapshot(state)

    const onCollideBegin = (e) => {
        if(e.body?.name){
            state.selected = e.body.name
        }
    }
    const onCollideEnd = (e) => {
        state.selected = ''
    }

    return (
        <>
            <mesh  
            rotation={[0, 0, 0]}
            ref={ref}
            name='blender'
            >
                <boxGeometry args={[1,1.8,1]} rotation={[-Math.PI / 2, 0, 0]}/>
                <meshPhongMaterial opacity={0}  color={'blue'} transparent/>
                <Html as='div' rotation={[0, 0, 0]} position={[0, -1.7, 1]} scale={.3}  transform  >
                    <span style={{color:'white'}} children={selected}></span>
                </Html>
            </mesh>
        </>
    )
}
