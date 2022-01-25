import React, {Component} from "react";
import PropTypes from "prop-types";

const TableBottom = (props) => {
    const {dailyList, classTableBottom="", children} = props;

    return( 
       <div 
            className={classTableBottom}
        >   
        {dailyList.map(item => {
                return(
                item.slice(1,4).map(daily => {
                    const urlImg = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;
                    const {dt} = daily;
                    let date = new Date(dt * 1000);
                
                    // checkt --> use toDateString() =>> date month day year; 

                    return(
                        <div className="text-center">
                            <div>
                                <img src={urlImg} alt="icon-weather" />
                            </div>
                
                            <div>
                                <p>{daily.weather[0].description.toUpperCase()}</p>
                            </div>
                
                            <div className="table-flex">
                                <p>
                                    Day {daily.temp.day}<span>&#8451;</span>
                                </p>

                                <p>
                                    Night {daily.temp.night}<span>&#8451;</span>
                                </p>
                            </div>
                
                            <div>
                                <p>{date.toDateString()}</p>
                            </div>
                        </div>
                )})
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