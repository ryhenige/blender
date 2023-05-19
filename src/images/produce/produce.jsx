import acai from './acai-small.png'
import dragonFruit from './dragon-fruit-small.png'
import wakame from './wakame-small.png'

// update this to the total number of produce types. It is used to loop through and preload all the produce textures
export const ProduceTypeCount = 3

export default function Produce (produceId) {

    switch (produceId) {
        case 1:
            return { name: 'Acai', texture: acai, produceType: 'fruit', colliderSize: [.12], scale: [.4,.4], color: 'blue'}
        case 2:
            return { name: 'Dragon Fruit', texture: dragonFruit, produceType: 'fruit', colliderSize: [.12], scale: [.4,.4], color: 'red'}
        case 3:
            return { name: 'Wakame', texture: wakame, produceType: 'vegetable', colliderSize: [.12], scale: [.4,.4], color: 'green'}
        default:
            break;
    }

}