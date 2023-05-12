import { TextureLoader } from 'three/src/loaders/TextureLoader'


import acai from './acai-small.png'
import dragonFruit from './dragon-fruit-small.png'

const loader = new TextureLoader()

export default function Produce (produceId) {

    switch (produceId) {
        case 1:
            return { name: 'acai', texture: loader.load(acai), objType: 'fruit', colliderSize: [.2, .15, .2], scale: [.4,.4]}
        case 2:
            return { name: 'dragon fruit', texture: loader.load(dragonFruit), objType: 'fruit', colliderSize: [.2, .15, .2], scale: [.4,.4]}
        default:
            break;
    }

}