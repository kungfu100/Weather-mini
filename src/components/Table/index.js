import React, {Component} from "react";
import "./index.css";

import { DismissButton } from "../Buttons";
import TableTop from "./TableTop";
import TableBottom from "./TableBottom";

/*
<DismissButton
    classDismiss="btn-dismiss"
    onDismiss={() => onDismiss(id)}
>
    <i className="fas fa-times btn-i"></i>
</DismissButton>
*/

class Table extends Component {
   
    render() {
        const {list, onDismiss, classTable=""} = this.props;

        return(
            <div className={classTable}>
                {list.map(item => {
                    const {id, main, weather, name} = item[0]; // item[0] of current
                    const {daily} = item[1]; // item[1] of daily

                 return(
                    <div
                        key={id}
                        className="table table-flex table-flex-di"
                    >
                        <TableTop
                            classTableTop="table-top table-flex wrap-position"
                            main={main}
                            weather={weather}
                            name={name}
                        >
    
                        </TableTop>
                        
                        <TableBottom
                            classTableBottom="table-bottom table-flex table-flex-j-sb"
                            daily = {daily}
                        >

                        </TableBottom>
                    </div>
                 )})
                }       
            </div>
    )}
}

export default Table;
