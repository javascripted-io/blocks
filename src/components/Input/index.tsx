import type { InputHTMLAttributes } from "react"

import type { Base } from "../types"

interface Props extends Base<InputHTMLAttributes<HTMLInputElement>> {}

export default (props: Props) => <input {...props} />
