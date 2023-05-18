
export const ArrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
)

export const Random = (min, max) => {
    return Math.random() * (max - min) + min
}