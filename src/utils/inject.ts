export const inject = (target: unknown, key: string, value: unknown) =>
    Object.defineProperty(target, key, { value, writable: false })
