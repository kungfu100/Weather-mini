import React, {Component} from "react";
import PropTypes from "prop-types";

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

DismissButton.propTypes = {
    classDismiss: PropTypes.string,
    onDismiss: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default DismissButton;