import React from "react";

const User = (props) => {
    const {title, url, author, num_comments, points} = props.params
    return (
        <div>
            <span>
                <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
        </div>
    )
}

export default User