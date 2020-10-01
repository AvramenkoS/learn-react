import React from "react";
import '../App.scss';

const Button = (props) => {
    const {onDismiss, className, children} = props
    return (
        <div className="App__btn-block">
            <button
                onClick={onDismiss}
                className={className}
                type="button"
            >
                {children}
            </button>
        </div>
    )
}

export default Button