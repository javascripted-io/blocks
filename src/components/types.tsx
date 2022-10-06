import type { HTMLAttributes } from "react"

export enum Color { Error, Primary, Success }
export type Base<T extends HTMLAttributes<unknown>> = Omit<T, "className" | "color">
