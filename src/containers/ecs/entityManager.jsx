import { useFrame } from '@react-three/fiber'
import ECS from 'ecs'
import { World } from 'cannon-es'

//systems
import renderSpriteSystem from './systems/renderSpriteSystem'

// entities
import { addItemEntity } from './entities'

export const world = ECS.createWorld()
export const physicsWorld = new World()

export const addItem = (produceId) =>  addItemEntity({world, produceId: produceId})

ECS.addSystem(world, renderSpriteSystem)


export default function EntityManager() {

    useFrame((state, delta) => {

        ECS.update(world, {delta: delta, scene: state.scene, state: state})
        ECS.cleanup(world)
        
    })

}