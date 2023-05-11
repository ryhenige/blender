import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useBox, useCompoundBody } from '@react-three/cannon'

const Draggable = ({ children, position, mass = 1 }) => {
  const [ref, api] = useBox(() => ({
    mass,
    position,
    args: [0.5, 0.5, 0.5],
  }))

  const [isDragging, setIsDragging] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })

  const handlePointerDown = (event) => {
    setIsDragging(true)
    mousePosition.current.x = event.clientX
    mousePosition.current.y = event.clientY
    document.body.style.cursor = 'grabbing'
  }

  const handlePointerUp = () => {
    setIsDragging(false)
    document.body.style.cursor = 'grab'
  }

  useFrame(() => {
    if (isDragging) {
      const { x, y } = mousePosition.current
      const diffX = ( x) / 100
      const diffY = -(y) / 100
      api.velocity.set(diffX, diffY, 0)
    }
  })

  return (
    <mesh
      ref={ref}
      onClick={() => console.log('Clicked')}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {children}
    </mesh>
  )
}

export default Draggable
