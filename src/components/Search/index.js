import React, {Component} from "react";
import "./index.css";

const Search = (props) => {
    const {onSubmit, onChange, value,} = props;

    return(
        <div className="wrap search">
            <form onSubmit={onSubmit} className="table-flex">
                <input
                    className="search-input"
                    type="text"
                    value={value}
                    onChange={onChange}
                />

                <button
                    className="search-btn"
                    type="submit"
                >
                    <i className='fas fa-search search-i'></i>
                </button>
            </form>
        </div>
    )
}

export default Search;