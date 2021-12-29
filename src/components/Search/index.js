import React, {Component} from "react";

const Search = (props) => {
    const {onSubmit, onChange, value,} = props;

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />

                <button
                    type="submit"
                >
                    <i className='fas fa-search'></i>
                </button>
            </form>
        </div>
    )
}

export default Search;