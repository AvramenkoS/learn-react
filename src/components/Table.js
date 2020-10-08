import React from "react";
import '../App.scss';
import Button from "./Button";

const Table = ({hits, onDismiss}) => {
    return (
        <div className="App__items">
            {hits.map(item =>
                <div className="App__item"
                     key={item.objectID}>
                    <div className="item__header">
                        <h3>
                            <a href={item.url}>{item.title}</a>
                        </h3>
                        <span>{item.author}</span>
                    </div>
                    <div className="item__body">
                        <span>comments: {item.num_comments}</span>
                        <span>points: {item.points}</span>
                    </div>
                    <span>
                            <Button
                                onDismiss={() => onDismiss(item.objectID)}
                                className="App__btn"
                            >
                                Dismiss
                            </Button>
                        </span>
                </div>
            )}
        </div>
    )
}

export default Table