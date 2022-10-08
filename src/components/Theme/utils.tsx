import { isString } from "@javascripted/utils"

import type { PartialTheme } from "./types"

const append = (prefix: string, key: string) => `${prefix}-${key}`
const name = (context: string, id: number) => `--blocks-${id}-${context}`

export const generateCssVars = (acc: string[], partial: PartialTheme, prefix: string, id: number) => {
    Object.entries(partial).forEach(([key, value]) => {
        const extendedPrefix = append(prefix, key)
        if (isString(value)) {
            acc.push(`${name(extendedPrefix, id)}: ${value};`)
        } else {
            generateCssVars(acc, value, extendedPrefix, id)
        }
    })
}

export const replaceWithVars = (partial: PartialTheme, prefix: string, id: number) =>
    Object.entries(partial).reduce((acc, [key, value]) => {
        const extendedPrefix = append(prefix, key)
        acc[key] = isString(value) ? `var(${name(extendedPrefix, id)})` : replaceWithVars(value, extendedPrefix, id)
        return acc
    }, {} as PartialTheme)
