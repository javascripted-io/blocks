import type { Theme } from "./types"

const darkTheme: Theme = {
    button: {
        backgroundColor: "#222",
        borderColor: "var(--blocks-colors-primary)",
        borderStyle: "solid",
        hoveredBackgroundColor: "#333"
    },
    colors: {
        background: "#000",
        error: "#f00",
        primary: "#00f",
        success: "#0f0"
    }
}

export default darkTheme