import React, {Component} from "react";
import "./index.css";

import TableTop from "./TableTop";

class Table extends Component {

    render() {
        const {data} = this.props;
        const {main, weather, name} = data;

        return(
            <div>
                <div className="table table-flex table-flex-di">
                    <TableTop
                        classTable="table-top table-flex table-blue"
                        main={main}
                        weather={weather}
                        name={name}
                    />

                </div>
            </div>
    )}
}

export default Table;
