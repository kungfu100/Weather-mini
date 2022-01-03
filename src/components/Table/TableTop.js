import React, {Component} from "react";

const TableTop = (props) => {
    const {main, weather, name, classTable=""} = props;
    const {temp, temp_min, temp_max} = main;
    
    /*const temp = main.temp || Number();
    const temp_min = main.temp_min || Number();
    const temp_max = main.temp_max || Number();*/

    return(
        <div className={classTable}>
            <div className="table-item-left">
                <div>
                    <h3 className="text-white text-size">
                        {temp}
                        <span>&#8451;</span>
                    </h3>
                    
                    {weather.map(value => 
                        <p 
                            className="text-white-dark text-spacing"
                            key={value.id}
                        >
                            {value.description.toUpperCase()}
                        </p>
                    )}
                </div>

                <div className="table-flex table-flex-j ">
                    <p className="text-white-dark">
                        {temp_min}
                        <span>&#8451;</span>
                        <i className='fas fa-long-arrow-alt-down text-i text-down'></i>
                    </p>

                    <p className="text-white-dark">
                        {temp_max}
                        <span>&#8451;</span>
                        <i className='fas fa-long-arrow-alt-up text-i text-up'></i>
                    </p>
                </div>
            </div>

            <div className="table-item-right">
                <h2 className="text-white text-city">
                    {name.toUpperCase()}
                </h2>
            </div>
        </div>
    )
}

export default TableTop;