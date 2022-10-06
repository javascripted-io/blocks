import type { ComponentMeta, ComponentStoryFn } from "@storybook/react"
import { ButtonVariant } from "../.."

import { Button, ThemeChooser, ThemeProvider } from "../../index"

export default {
    component: Button,
    title: "Button"
} as ComponentMeta<typeof Button>

export const Variant: ComponentStoryFn<typeof Button> = () => (
    <ThemeProvider>
        <ThemeChooser />
        <Button variant={ButtonVariant.Contained}>Contained</Button>
        <Button variant={ButtonVariant.Outline}>Outline</Button>
        <Button variant={ButtonVariant.Text}>Text</Button>
    </ThemeProvider>
)
