import React, {Component} from "react";
import PropTypes from "prop-types";

const TableBottom = (props) => {
    const {daily, classTableBottom="", children} = props;

    return( 
       <div 
            className={classTableBottom}
        >   
        {
            daily.slice(1,4).map(value => {
                const urlImg = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
                const {dt} = value;

                let date = new Date(dt * 1000);
            
                // checkt --> use toDateString() =>> date month day year; 

                return(
                    <div className="text-center">
                        <div>
                            <img src={urlImg} alt="icon-weather" />
                        </div>
            
                        <div>
                            <p>{value.weather[0].description.toUpperCase()}</p>
                        </div>
            
                        <div className="table-flex">
                            <p>
                                Day {value.temp.day}<span>&#8451;</span>
                            </p>

                            <p>
                                Night {value.temp.night}<span>&#8451;</span>
                            </p>
                        </div>
            
                        <div>
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
    classTableBottom: PropTypes.string,
    children: PropTypes.node,
}

export default TableBottom;