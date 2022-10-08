import { useEffect, useState } from "react"

import { bind } from "../utils"

export default (element: HTMLElement | null) => {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (!element) return
        return bind(
            [element, "mouseenter", () => setHovered(true)],
            [element, "mouseleave", () => setHovered(false)]
        )
    }, [element])

    return hovered
}
