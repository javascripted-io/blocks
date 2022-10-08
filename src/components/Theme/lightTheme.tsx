import type { Theme } from "./types"

const lightTheme: Theme = {
    button: {
        backgroundColor: "#eee",
        borderColor: "var(--blocks-colors-primary)",
        borderStyle: "solid",
        hoveredBackgroundColor: "#ddd"
    },
    colors: {
        background: "white",
        error: "red",
        primary: "blue",
        success: "green"
    }
}

export default lightTheme