import React from "react";
import '../App.scss';

const Button = (props) => {
    return (
        <div>
            <button
                onClick={props.onDismiss}
                className={props.className}
                type="button"
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button