function random(min, max) {
    return Math.random() * (max - min) + min;
}

export const producePosition = () => ({x: random(-1.2, -.8), y: 1, z: -5.2})
