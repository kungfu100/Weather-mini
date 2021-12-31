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
    constructor(props) {
        super(props);

        this.state = {
            search: DEFAUTL_QUERY,
            searchKey:"",
            data: null,
            isLoading: false,
            error:"",
        };

        this.updateData = this.updateData.bind(this);
        this.getApi = this.getApi.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateData(data) {
        this.setState({data, isLoading:false, error:""});
    }

    getApi(search) {
        axios.get(`${PATH_BASE}?${PARAM_SEARCH}${search}&${PARAM_UNIT}${default_unit}&${PARAM_LANG}${default_lang}&${PARAM_KEY}${APIkey}`)
         .then(res => this.updateData(res.data))
         .catch(error => this.setState({error: error.message}))
    }

    onChange(event) {
        this.setState({search: event.target.value});
    }

    onSubmit(event) {
        const {search} = this.state;

        this.getApi(search);
        this.setState({searchKey: search, isLoading:true,});

        event.preventDefault();
    }

    componentDidMount() {
        const {search} = this.state;

        this.setState({searchKey:search, isLoading: true,});

        this.getApi(search);
    }

    render() {
        const {search, data, isLoading, error} = this.state;
        console.log(this.state);

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

                    {isLoading
                     ? <div>Loading ...</div>
                     : error
                        ? <div>FAIL</div>
                        : data 
                        && <Table 
                                data={data} 
                                cTable="wrap"
                           />
                    }

                    <TestButton
                    >
                        Test
                    </TestButton>
                </main>
            </div>
    )}
}

export default App;