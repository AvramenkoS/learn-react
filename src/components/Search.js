import React from 'react';
import '../App.scss';

const Search = (props) => {
    const {value, onChange, onSubmit, children} = props;

    return (
        <form onSubmit={onSubmit} className="App__form">
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
            <button
                type="submit"
                className="App__btn App__btn-search"
            >
                {children}
            </button>
        </form>
    )
}

export default Search