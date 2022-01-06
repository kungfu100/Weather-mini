import React, {Component} from "react";

const DismissButton = (props) => {
    const {classDismiss="", onDismiss, children } = props;

    return(
        <button
            type = "button"
            className = {classDismiss}
            onClick = {onDismiss}
        >
            {children}
        </button>
    )
}


export default DismissButton;