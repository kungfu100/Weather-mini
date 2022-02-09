import React, {Component} from "react";
import PropTypes from "prop-types";

const TableBottom = (props) => {
    const {daily, classTableBottom="", children} = props;

    return( 
       <div 
            className={classTableBottom}
        >   
        {
            daily.slice(1,4).map((value, index) => {
                const {weather, dt, temp} = value;

                const urlImg = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

                let date = new Date(dt * 1000);
            
                // check --> use toDateString() =>> date month day year; 

                return(
                    <div 
                        key={index}
                        className="text-center"
                    >
                        <div>
                            <img src={urlImg} alt="icon-weather" />
                        </div>
            
                        <div>
                            <p>{weather[0].description.toUpperCase()}</p>
                        </div>
            
                        <div className="table-flex">
                            <p>
                                <span className="text-blue-sd">Day</span> {temp.day}<span>&#8451;</span>
                            </p>

                            <p>
                                <span className="text-blue-sd">Night</span> {temp.night}<span>&#8451;</span>
                            </p>
                        </div>
            
                        <div className="text-right text-red-light">
                            <p>{date.toDateString()}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

TableBottom.propTypes = {
    daily: PropTypes.arrayOf(
        PropTypes.shape({
            weather: PropTypes.array,
            dt: PropTypes.number,
            temp: PropTypes.object,
        })
    ).isRequired,
    classTableBottom: PropTypes.string,
    children: PropTypes.node,
}

export default TableBottom;