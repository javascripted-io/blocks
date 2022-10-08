export const bind = (
    ...configs: ([
        HTMLElement,
        Parameters<HTMLElement["addEventListener"]>[0],
        Parameters<HTMLElement["addEventListener"]>[1],
        Parameters<HTMLElement["addEventListener"]>[2]
    ] | [
        HTMLElement,
        Parameters<HTMLElement["addEventListener"]>[0],
        Parameters<HTMLElement["addEventListener"]>[1]
    ])[]
) => {
    configs.forEach(([element, type, listener, options]) => {
        element.addEventListener(type, listener, options)
    })

    return () => {
        configs.forEach(([element, type, listener, options]) => {
            element.removeEventListener(type, listener, options)
        })
    }
}