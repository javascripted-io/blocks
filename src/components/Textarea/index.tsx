import type { TextareaHTMLAttributes } from "react"

import type { Base } from "../types"

interface Props extends Base<TextareaHTMLAttributes<HTMLTextAreaElement>> {}

export default (props: Props) => <textarea {...props} />
