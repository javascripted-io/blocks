interface Colors {
    background: string
    error: string
    primary: string
    success: string
}

export type PartialTheme = { [key: string]: PartialTheme | string }

export interface Theme {
    colors: Colors
}

export interface ThemeContext {
    theme: Theme
}
