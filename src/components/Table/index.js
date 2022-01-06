import React, {Component} from "react";
import "./index.css";

import { DismissButton } from "../Buttons";
import TableTop from "./TableTop";

const tableBottom = {
    minHeight:"230px",
    backgroundColor: "white",
    width:"100%",
}


class Table extends Component {
   
    render() {
        const {list, onDismiss, classTable=""} = this.props;

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
                        
                        <div 
                            className="table-bottom"
                            style={tableBottom}
                        >
                        </div>
                    </div>
                 )})
                }       
            </div>
    )}
}

export default Table;
