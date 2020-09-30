import React from "react";

const dismiss = (props) => {
    const {objectID} = props.params
    return (
        <div>
            <button
                onClick={() => props.onDismiss(objectID)}
                type="button"
            >
                Отбросить
            </button>
        </div>
    )
}

export default dismiss