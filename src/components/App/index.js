import React, {Component} from "react";
import axios from "axios";
import "./index.css";

import {
    APIkey,
    default_unit,
    default_lang,
    PATH_BASE,
    PARAM_SEARCH,
    PARAM_KEY,
    PARAM_UNIT,
    PARAM_LANG,
    DEFAUTL_QUERY,
} from "../../constants";

import Table from "../Table";
import Search from "../Search";

import {
    TestButton,
} from "../Buttons";

class App extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            search: DEFAUTL_QUERY,
            searchKey:"",
            data: null,
            error:"",
        };

        this.updateData = this.updateData.bind(this);
        this.getApi = this.getApi.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateData(data) {
        this.setState({data});
    }

    getApi(search) {
        axios(`${PATH_BASE}?${PARAM_SEARCH}${search}&${PARAM_UNIT}${default_unit}&${PARAM_LANG}${default_lang}&${PARAM_KEY}${APIkey}`)
         .then(res => this._isMounted && this.updateData(res.data))
         .catch(error => this._isMounted && this.setState({error}))
    }

    onChange(event) {
        this.setState({search: event.target.value});
    }

    onSubmit(event) {
        const {search} = this.state;

        this.getApi(search);
        this.setState({searchKey: search});

        event.preventDefault();
    }

    componentWillMount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;

        const {search} = this.state;

        this.getApi(search);

        this.setState({searchKey:search});
    }

    render() {
        const {search, data, error} = this.state;
        console.log(this.state);
        console.log(data);

        if(!data) {return null};

        return(
            <div className="app">
                <Search
                    value={search}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                >
                </Search>

                <main>
                    <header>
                        <h1>Daily Weather</h1>
                    </header>

                    {/*error
                        ? <div>FAIL</div>
                        : <Table data={data} />
                    */}

                    <TestButton
                    >
                        Test
                    </TestButton>
                </main>
            </div>
    )}
}

export default App;