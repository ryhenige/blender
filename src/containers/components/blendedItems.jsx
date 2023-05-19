import React, { useEffect } from 'react'
import { useItemsStore } from '../stores'
import { useTexture } from '@react-three/drei'
import Rows from '../../images/appliances/fill/fillLayers'
import { ArrayRange } from '../../containers/helpers';

export default function BlendedItems({ ...props }) {

    const convertItems = useItemsStore((state) => state.convertItems)
    const blending = useItemsStore((state) => state.blending)
    const itemTypes = useItemsStore((state) => state.itemTypes)

    useEffect(() => {
        if(!blending) return
        const interval = setInterval(() => {
            convertItems()
        }, 4000)
        return () => {
        clearInterval(interval);
        }
    }, [blending])

    const ColorMap = () => {
        const colors = []
        itemTypes?.forEach((item) => {
            ArrayRange(1, item.percentage, 1).map(i =>
                colors.push(item.color)
            )
        })
        return colors.slice(0,10)
    }

    const FillLayer = (props) => {
        const rowTexture = useTexture(Rows[props.index + 1])
        return ( 
            <sprite scale={[1.1,.15]} position={[-.02, (1.4 - .15 * props.index), -.1]}>
                <spriteMaterial attach="material" opacity={.7} map={rowTexture} color={props.color} />
            </sprite>
        )
    }

    return (
        <>
            {ColorMap().map((c, i) => (
                <FillLayer color={c} index={i} />
            ))}
        </>
    )
}