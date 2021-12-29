import React, {Component} from "react";

const TableTop = (props) => {
    const {main, weather, name, classTable=""} = props;
    const {temp, temp_min, temp_max} = main;

    return(
        <div className={classTable}>
            <div className="table-item-left table-flex-di">
                <div>
                    <h2 className="text-white">
                        {temp}
                        <span>&#8451;</span>
                    </h2>
                    
                    {weather.map(value => 
                        <h3 
                            className="text-white-dark"
                            key={value.id}
                        >
                            {value.description.toUpperCase()}
                        </h3>
                    )}
                </div>

                <div>
                    <p className="text-white-dark">
                        {temp_min}
                        <i className='fas fa-long-arrow-alt-down'></i>
                    </p>

                    <p className="text-white-dark">
                        {temp_max}
                        <i className='fas fa-long-arrow-alt-up'></i>
                    </p>
                </div>
            </div>

            <div className="table-item-right">
                <h2 className="text-white">
                    {name.toUpperCase()}
                </h2>
            </div>
        </div>
    )
}

export default TableTop;