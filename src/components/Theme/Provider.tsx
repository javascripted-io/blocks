import type { ReactNode } from "react"
import { useEffect, useMemo, useRef, useState } from "react"

import type { PartialTheme, Theme } from "./types"
import { generateCssVars, replaceWithVars } from "./utils"

let NEXT_ID = 0

export default ({ children, theme }: { children: ReactNode, theme: Theme }) => {
    const [id] = useState(`blocks-theme-provider-${NEXT_ID++}`)

    // Generate theme object that replaces CSS values with CSS variables. This makes it so whenever the theme is
    // updated, we don't need to trigger a bunch of component renders throughout our tree and instead will rely on the
    // browsers ability to handle changing CSS variables over time (end components use CSS variables in inline styles).
    const themeVars = useMemo(() => replaceWithVars(theme as unknown as PartialTheme, "") as unknown as Theme, [theme])

    // Insert style into document head once for life cycle of component
    const styleRef = useRef(document.createElement("style"))
    useEffect(() => {
        document.head.append(styleRef.current)
        return () => styleRef.current.remove()
    }, [])

    // Write CSS variables to style element for theme and update whenever theme changes.
    useEffect(() => {
        const vars: string[] = []
        generateCssVars(vars, theme as unknown as PartialTheme, "")
        styleRef.current.innerText = `#${id} {${vars.join("")}}`
    }, [theme])

    return <div id={id} style={{ background: themeVars.colors.background }}>{children}</div>
}
