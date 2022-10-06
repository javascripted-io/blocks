import { createContext } from "react"

import lightTheme from "./lightTheme"
import type { ThemeContext } from "./types"

// TODO: Move to @javascripted/utils
const noop = () => {}

export default createContext<ThemeContext>({ theme: lightTheme, set: noop })
