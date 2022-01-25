import React, {Component} from "react";
import "./index.css";

import { DismissButton } from "../Buttons";
import TableTop from "./TableTop";
import TableBottom from "./TableBottom";

class Table extends Component {
   
    render() {
        const {list, dailyList, onDismiss, classTable=""} = this.props;

        return(
            <div className={classTable}>
                {list.map(item => {
                    const {id, main, weather, name} = item;

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
                            <DismissButton
                                classDismiss="btn-dismiss"
                                onDismiss={() => onDismiss(id)}
                            >
                                <i className="fas fa-times btn-i"></i>
                            </DismissButton>
                        </TableTop>
                        
                        <TableBottom
                            classTableBottom="table-bottom table-flex table-flex-j-sb"
                            dailyList={dailyList}
                        >

                        </TableBottom>
                    </div>
                 )})
                }       
            </div>
    )}
}

export default Table;
