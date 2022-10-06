import { useCallback, useState } from "react"

import Button from "../Button"
import darkTheme from "./darkTheme"
import lightTheme from "./lightTheme"
import useSetTheme from "./useSetTheme"

export default () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const setTheme = useSetTheme()
    const click = useCallback(() => {
        setIsDarkMode(prev => {
            setTheme(prev ? lightTheme : darkTheme )
            return !prev
        });
    }, []);

    return (
        <Button onClick={click}>{isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}</Button>
    )
}