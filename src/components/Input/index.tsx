import type { InputHTMLAttributes } from "react"

import type { Base } from "../types"

// Types

interface Props extends Base<InputHTMLAttributes<HTMLInputElement>> {}

// Component

export default (props: Props) => <input {...props} />
