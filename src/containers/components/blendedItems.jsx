import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useItemsStore } from '../stores'

const Container = styled.div`
    position: absolute;
    top: -135px;
    left: -45px;
    height: 250px;
    width: 150px;
    display: flex;
    flex-direction: column;
`
const Liquid = styled.div`
    width: 100%;
    height: ${props => props.percent}%;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 50%;
    border-radius: 5px;
    span {
        opacity: 100%;
    }
`

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

    return (
        <Container>
            {itemTypes?.map((type, i) => (
                <Liquid 
                    percent={type?.percentage} 
                    color={type?.color}>
                    {type?.count > 0 && 
                        <span>{type?.percentage}% {type?.type}</span>
                    }
                </Liquid>
            ))}
        </Container>
    )
}