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
    withEither,
} from "../../constants";

import Table from "../Table";
import Search from "../Search";

//---------------------------------------------
const Error = () => {
    return(
        <div>
            <p>Sorry, No Result Found</p>
        </div>
)}
const isError = (props) =>  props.isError 

const Loading = () => <div className="load"></div>
const isLoading = (props) => props.isLoading

const withError = withEither(isError, Error);
const withLoading = withEither(isLoading, Loading);

const TableWithCondition = withError(withLoading(Table));

//---------------------------------------------
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: DEFAUTL_QUERY,
            searchKey:"",
            data: null,
            dataCache:null,
            list:[],
            isLoading: false,
            error:"",
        };

        this.needToSearch = this.needToSearch.bind(this);
        this.updateData = this.updateData.bind(this);
        this.getApi = this.getApi.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    updateData(data) {

        this.setState(prevState => {
            const {searchKey,} = this.state;
            const {dataCache, list} = prevState;

            return {
                data, 
                dataCache: {
                    ...dataCache,
                    [searchKey]: {...data}
                },
                list:[
                    ...list,
                    data
                ],
                isLoading:false, 
                error:""
            }
        });
    }

    needToSearch(search) {
        return !this.state.dataCache[search];
    }

    getApi(search) {
        this.setState({isLoading: true,})

        axios.get(`${PATH_BASE}?${PARAM_SEARCH}${search}&${PARAM_UNIT}${default_unit}&${PARAM_LANG}${default_lang}&${PARAM_KEY}${APIkey}`)
         .then(res => this.updateData(res.data))
         .catch(error => this.setState({
            error: error.message
         }))
    }

    onChange(event) {
        this.setState({search: event.target.value});
    }

    onSubmit(event) {
        const {search,} = this.state;

        this.setState({
            searchKey: search, 
            error: "",
            isLoading: false,
        });

        if(this.needToSearch(search)) {
          this.getApi(search);
        }

        event.preventDefault();
    }

    onDismiss(id) {
        const {list} = this.state;

        const isId = item => item.id !== id
        const updateList = list.filter(isId);

        const keyDataCache = Object.keys(this.state.dataCache);
        let updateDataCache = {...this.state.dataCache};
    
        keyDataCache.forEach(key => {
            if(updateDataCache[key].id === id) {
                delete updateDataCache[key];
            }
        })

        this.setState({
            list:updateList, 
            dataCache: updateDataCache
        });

        //nếu id truyền vào giống trong searchKey 
        //của dataCache thì xóa nó đi
    }

    componentDidMount() {
        const {search,} = this.state;

        this.setState({searchKey:search});

        this.getApi(search);
    }

    render() {
        const {search, list, isLoading, error} = this.state;
        console.log(this.state);

        const _list = list || [];
 
        return(
            <div className="app">
                <Search
                    value={search}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                
                <main>
                    <header>
                        <h1>Daily Weather</h1>
                    </header>

                    
                    <TableWithCondition 
                        classTable="wrap-padding-bottom"
                        list={_list}
                        isLoading={isLoading}
                        isError={error}
                        onDismiss={this.onDismiss}
                    />
                    
                </main>
            </div>
    )}
}

export default App;