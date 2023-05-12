import { useFrame } from '@react-three/fiber'
import ECS from 'ecs'
import { World } from 'cannon-es'

//systems
import renderSpriteSystem from './systems/renderSpriteSystem'
import physicsSystem from './systems/physicsSystem'

// entities
import { addItemEntity } from './entities'

export const world = ECS.createWorld()
export const physicsWorld = new World()

export const addItem = (produceId) =>  addItemEntity({world, produceId: produceId})

ECS.addSystem(world, renderSpriteSystem)
// ECS.addSystem(world, physicsSystem)


export default function EntityManager() {

    useFrame((state, delta) => {

        ECS.update(world, {delta: delta, scene: state.scene, state: state, physicsWorld: physicsWorld})
        ECS.cleanup(world)

        physicsWorld.step(1/60, delta)
        console.log(state.scene)
        
    })

}