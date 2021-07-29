import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TimesCircleSolid(props) {
    return (
        <Svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="times-circle"
            className="prefix__svg-inline--fa prefix__fa-times-circle prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <Path
                fill={props.color ? props.color : "#bcd13c"}
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
            />
        </Svg>
    )
}

export default TimesCircleSolid
