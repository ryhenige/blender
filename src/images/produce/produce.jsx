import acai from './acai-small.png'
import dragonFruit from './dragon-fruit-small.png'

// update this to the total number of produce types. It is used to loop through and preload all the produce textures
export const ProduceTypeCount = 2

export default function Produce (produceId) {

    switch (produceId) {
        case 1:
            return { name: 'acai', texture: acai, objType: 'fruit', colliderSize: [.2, .15, .2], scale: [.4,.4]}
        case 2:
            return { name: 'dragon fruit', texture: dragonFruit, objType: 'fruit', colliderSize: [.2, .15, .2], scale: [.4,.4]}
        default:
            break;
    }

}