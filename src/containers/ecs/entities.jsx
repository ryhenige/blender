import ECS from 'ecs'
import { nanoid } from 'nanoid'
import Produce from '../../images/produce/produce'
import { producePosition } from './components'

export const addItemEntity = ({world, id = nanoid(), produceId}) => {
    const item = ECS.createEntity(world)
    const produce = Produce(produceId)

    ECS.addComponentToEntity(world, item, 'id', id)
    ECS.addComponentToEntity(world, item, 'name', produce.name)
    ECS.addComponentToEntity(world, item, 'type', produce.type)
    ECS.addComponentToEntity(world, item, 'sprite', produce.image)
    ECS.addComponentToEntity(world, item, 'position', producePosition())
    ECS.addComponentToEntity(world, item, 'gravity', true)
    ECS.addComponentToEntity(world, item, 'collider', produce.colliderSize)
    ECS.addComponentToEntity(world, item, 'scale', {x: produce.scale[0], y: produce.scale[1]})

}
