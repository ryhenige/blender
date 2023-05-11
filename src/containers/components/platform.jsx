import React from 'react'

import { useBox } from '@react-three/cannon'


export const Platform = (props) => {
    const [ref] = useBox(() => ({type: 'Static', position: [0, -.5, -6], rotation:[0, 0, 0], args: [1.5,.1,1.5],  ...props }))


    return (
        <>
            <mesh  
            rotation={[0, 0, 0]}
            ref={ref}
            name='blender'
            >
                <boxGeometry args={[1,.1,1]}  rotation={[0, 0, 0]}/>
                <meshPhongMaterial opacity={0} color={'blue'} />
            </mesh>
        </>
    )
}
