import type { ButtonHTMLAttributes } from "react"

import { useTheme } from "../Theme"
import type { Base, Color } from "../types"

export enum Variant {
    Contained,
    Outline,
    Text
}

interface Props extends Base<ButtonHTMLAttributes<HTMLButtonElement>> {
    color?: Color
    variant?: Variant
}

export default ({ color, style, variant, ...rest }: Props) => {
    const { colors: { primary } } = useTheme()

    return (
        <button
            {...rest}
            style={{
                backgroundColor: variant === Variant.Text ? "transparent" : "white",
                boxSizing: "border-box",
                borderColor: primary,
                borderStyle: "solid",
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
