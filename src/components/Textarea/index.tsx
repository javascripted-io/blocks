import type { TextareaHTMLAttributes } from "react"

import type { Base } from "../types"

// Types

interface Props extends Base<TextareaHTMLAttributes<HTMLTextAreaElement>> {}

// Component

export default (props: Props) => <textarea {...props} />
