import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FreeNowLogo(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 40 40"
            {...props}
        >
            <Path fill={"#01567b"} d="M14.23 15.448L0 7.388h6.883l10.754 6.093v11.006L35.146 7.388H40L14.23 32.612z" />
        </Svg>
    )
}

export default FreeNowLogo
