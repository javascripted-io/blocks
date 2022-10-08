import { isString } from "@javascripted/utils"

import type { PartialTheme } from "./types"

const append = (prefix: string, key: string) => `${prefix}${prefix ? "-" : ""}${key}`
const name = (context: string) => `--blocks-${context}`
export const cssVar = (key: string) => `var(${name(key)})`

export const generateCssVars = (acc: string[], partial: PartialTheme, prefix: string) => {
    Object.entries(partial).forEach(([key, value]) => {
        const extendedPrefix = append(prefix, key)
        if (isString(value)) {
            acc.push(`${name(extendedPrefix)}: ${value};`)
        } else {
            generateCssVars(acc, value, extendedPrefix)
        }
    })
}

export const replaceWithVars = (partial: PartialTheme, prefix: string) =>
    Object.entries(partial).reduce((acc, [key, value]) => {
        const extendedPrefix = append(prefix, key)
        acc[key] = isString(value) ? cssVar(extendedPrefix) : replaceWithVars(value, extendedPrefix)
        return acc
    }, {} as PartialTheme)
