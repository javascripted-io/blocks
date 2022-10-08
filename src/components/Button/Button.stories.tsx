import type { ComponentMeta, ComponentStoryFn } from "@storybook/react"
import { ButtonVariant } from "../.."

import { Button, ThemeProvider } from "../../index"
import darkTheme from "../Theme/darkTheme"
import lightTheme from "../Theme/lightTheme"

export default {
    component: Button,
    title: "Button"
} as ComponentMeta<typeof Button>

const Common = () => (
    <>
        <Button variant={ButtonVariant.Contained}>Contained</Button>
        <Button variant={ButtonVariant.Outline}>Outline</Button>
        <Button variant={ButtonVariant.Text}>Text</Button>
    </>
)

export const Variant: ComponentStoryFn<typeof Button> = () => (
    <>
        <ThemeProvider theme={lightTheme}>
            <Common />
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
            <Common />
        </ThemeProvider>
    </>
)
