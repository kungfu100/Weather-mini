import React, {Component} from "react";

const TestButton = (props) => {
    const {classBtn="" ,children} = props;

    return(
        <>
            <button
                type="button"
                className={classBtn}
            >
                {children}
            </button>
        </>
    )
}

export default TestButton;