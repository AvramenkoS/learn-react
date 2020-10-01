import React from 'react';
import '../App.scss';

const Search = (props) => {
    const {value, onChange, children} = props;

    return (
        <form className="App__form">
            {children}
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </form>
    )
}

export default Search