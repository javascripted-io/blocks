import { createContext } from "react"

import lightTheme from "./lightTheme"
import type { ThemeContext } from "./types"

export default createContext<ThemeContext>({ theme: lightTheme })
