import { createRef, useCallback, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { usePointToPointConstraint, useSphere } from '@react-three/cannon'

const cursor = createRef()

function useDragConstraint(child) {
  const [, , api] = usePointToPointConstraint(cursor, child, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] })
  useEffect(() => void api.disable(), [])
  const onPointerUp = useCallback((e) => {
    document.body.style.cursor = 'grab'
    e.target.releasePointerCapture(e.pointerId)
    api.disable()
  }, [])
  const onPointerDown = useCallback((e) => {
    document.body.style.cursor = 'grabbing'
    e.stopPropagation()
    e.target.setPointerCapture(e.pointerId)
    api.enable()
  }, [])
  return { onPointerUp, onPointerDown }
}

function Cursor() {
  const [, api] = useSphere(() => ({ collisionFilterMask: 0, type: 'Kinematic', mass: 0, args: [0.3] }), cursor)
  const { viewport } = useThree()
  return useFrame(({mouse}) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    // to keep from going through the table
    if(y > -1.8){
      api.position.set(x, y, 0)
    }
  })
}

export { useDragConstraint, cursor, Cursor }
