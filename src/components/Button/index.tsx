import { ButtonHTMLAttributes, CSSProperties, useState } from "react"

import type { Base, Color } from "../types"

import { cssVar } from "../Theme"
import useHovered from "../../hooks/useHovered"

// Enums

export enum Variant {
    Contained,
    Outline,
    Text
}

// Types

export interface Props extends Base<ButtonHTMLAttributes<HTMLButtonElement>> {
    color?: Color
    variant?: Variant
}

export interface Theme extends Pick<CSSProperties, "backgroundColor" | "borderColor" | "borderStyle"> {
    hoveredBackgroundColor: CSSProperties["backgroundColor"]
}

// Utils

const css = (key: keyof Theme) => cssVar(`button-${key}`)

const backgroundColor = (hovered: boolean, variant?: Variant) => {
    if (hovered) return css("hoveredBackgroundColor")
    if (variant === Variant.Text) return "transparent"
    return css("backgroundColor")
}

// Component

export default ({ color, style, variant, ...rest }: Props) => {
    const [element, setElement] = useState<HTMLButtonElement | null>(null)
    const hovered = useHovered(element)

    return (
        <button
            {...rest}
            ref={setElement}
            style={{
                backgroundColor: backgroundColor(hovered, variant),
                boxSizing: "border-box",
                borderColor: css("borderColor"),
                borderStyle: css("borderStyle"),
                borderWidth: variant === Variant.Text ? 0 : 1,
                cursor: "pointer",
                minHeight: 36,
                paddingLeft: 10,
                paddingRight: 10,
                ...style
            }}
        />
    )
}

