import PropTypes from "prop-types";
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

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
}

export default Search;