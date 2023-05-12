import ECS from 'ecs'
import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import { World } from 'cannon-es'

export default function physicsSystem (world) {
    
    const onUpdate = function ({delta, scene, physicsWorld}) {

        
        for (const entity of ECS.getEntities(world, [ 'sprite', 'physics', 'collider'], 'added')) {
            
            const entityObj = scene.getObjectByProperty('entityId', entity.id)
            console.log(entityObj.ref)
            if(!entityObj.ref){
                continue
            }
            
        }
        
    }

    return { onUpdate }
}