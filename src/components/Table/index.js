import React, {Component} from "react";
import "./index.css";

import TableTop from "./TableTop";

const tableBottom = {
    minHeight:"300px",
    backgroundColor: "white",
    width:"100%",
}

class Table extends Component {

    render() {
        const {data, cTable=""} = this.props;
        const {main, weather, name} = data;

        return(
            <div className={cTable}>
                <div className="table table-flex table-flex-di">
                    <TableTop
                        classTable="table-top table-flex"
                        main={main}
                        weather={weather}
                        name={name}
                    />
                    
                    <div 
                        className="table-bottom"
                        style={tableBottom}
                    >

                    </div>
                </div>
            </div>
    )}
}

export default Table;
