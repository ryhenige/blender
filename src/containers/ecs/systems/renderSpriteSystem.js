import { Box, Body, Vec3 } from 'cannon-es'
import ECS from 'ecs'
import { Sprite, SpriteMaterial, TextureLoader } from 'three'

export default function renderSpriteSystem (world) {
    
    const onUpdate = function ({delta, scene, physicsWorld}) {

        const loader = new TextureLoader()
        
        for (const entity of ECS.getEntities(world, [ 'sprite', 'position'], 'added')) {
            const texture = loader.load(entity?.sprite)
            const spriteMaterial = new SpriteMaterial({ map: texture })
            const sprite = new Sprite(spriteMaterial)
            
            sprite.scale.set(entity.scale.x, entity.scale.y, 1)
            sprite.position.set(entity.position.x, entity.position.y, entity.position.z)
            sprite.entityId = entity.id

            scene.add(sprite)

            const spriteShape = new Box(new Vec3(1, 1, 1))
            const spriteBody = new Body({
                mass: 1,
                position: new Vec3(0, 5, 0),
                shape: spriteShape,
            })

            physicsWorld.addBody(spriteBody)
        }
        
    }

    return { onUpdate }
}