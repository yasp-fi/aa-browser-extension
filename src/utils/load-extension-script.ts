

export function loadExtensionScript(
    id: string,
    src: string,
    attributes: Record<string, string> = {},
): Promise<void> {
    return new Promise((resolve) => {
        const container = document.head || document.documentElement
        const script = document.createElement('script')

        script.id = id
        script.src = src

        Object.keys(attributes).map((attribute) => {
            script.setAttribute(attribute, attributes[attribute])
        })

        script.addEventListener('load', () => {
            container.removeChild(script)
            resolve()
        })

        container.insertBefore(script, container.children[0])
    });
}
