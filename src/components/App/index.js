import React, {Component} from "react";
import axios from "axios";
import "./index.css";

import {
    APIkey,
    default_unit,
    default_lang,
    PATH_BASE,
    PATH_WEATHER,
    PATH_ONECALL,
    PARAM_SEARCH,
    PARAM_KEY,
    PARAM_UNIT,
    PARAM_LANG,
    PARAM_LAT,
    PARAM_LON,
    PARAM_EXCLUDE,
    DEFAUTL_QUERY,
    DEFAULT_EXCLUDE,
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
            dataCache:null,
            isLoading: false,
            error:"",
        };

        this.needToSearch = this.needToSearch.bind(this);
        
        this.updateWeatherCurrent = this.updateWeatherCurrent.bind(this);
        this.updateWeatherForecast = this.updateWeatherForecast.bind(this);
        
        this.getApiCurrent = this.getApiCurrent.bind(this);
        this.getApiForeCast = this.getApiForeCast.bind(this);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    needToSearch(search) {
        return !this.state.dataCache[search];
    }

    updateWeatherCurrent(dataCurrent) {
        this.setState(prevState => {
            const {searchKey, dataCache,} = prevState;

            const oldDataCache = dataCache ? dataCache : null 

            return {
               dataCache: {
                   ...oldDataCache,
                   [searchKey]: [dataCurrent,]
               }, 
               isLoading: false,
            }
        });
    }

    updateWeatherForecast(dataForecast) {
        this.setState(prevState => {
            const {dataCache, searchKey} = prevState;

            const oldDataCacheKey = dataCache && dataCache[searchKey] 
                ? dataCache[searchKey][0]
                : {}

            const updateDataCacheKey = [
                oldDataCacheKey,
                dataForecast
            ]

            return {
                dataCache: {
                    ...dataCache,
                    [searchKey]: updateDataCacheKey,
                }
            }   
        });
    }

    getApiCurrent(search) {
        this.setState({isLoading: true,})

        //------dataCurrent---------
        axios.get(`${PATH_BASE}${PATH_WEATHER}?${PARAM_SEARCH}${search}&${PARAM_UNIT}${default_unit}&${PARAM_LANG}${default_lang}&${PARAM_KEY}${APIkey}`)
         .then(res => this.updateWeatherCurrent(res.data))
         .then(() => {
            const {dataCache, searchKey} = this.state;
            const {coord} = dataCache[searchKey][0];

            this.getApiForeCast(coord);
         })
         .catch(error => this.setState({
            error: error.message,
            isLoading: false,
         }))
    }

    getApiForeCast(coord) {
        const {lat, lon} = coord;

        axios.get(`${PATH_BASE}${PATH_ONECALL}?${PARAM_LAT}${lat}&${PARAM_LON}${lon}&${PARAM_EXCLUDE}${DEFAULT_EXCLUDE}&${PARAM_UNIT}${default_unit}&${PARAM_LANG}${default_lang}&${PARAM_KEY}${APIkey}`)
         .then(res => this.updateWeatherForecast(res.data)) 
    }

    onChange(event) {
        this.setState({search: event.target.value});
    }

    onSubmit(event) {
        const {search,} = this.state;

        this.setState({
            searchKey: search, 
            error: "",
        });

        if(this.needToSearch(search)) {
          this.getApiCurrent(search);
        }

        event.preventDefault();
    }

    onDismiss(id) {
        const {dataCache, searchKey} = this.state;

        const isId = item => item.id !== id
        const updateList = dataCache[searchKey][0].filter(isId);

        const keyDataCache = Object.keys(dataCache);
        let updateDataCache = {...dataCache};
    
        keyDataCache.forEach(key => {
            if(updateDataCache[key][0].id === id) {
                delete updateDataCache[key];
            }
        })

        this.setState({
            dataCache: updateDataCache,
        });

        //nếu id truyền vào giống trong searchKey 
        //của dataCache thì xóa nó đi
    }

    componentDidMount() {
        const {search,} = this.state;

        this.setState({searchKey:search},);

        this.getApiCurrent(search);
    }

    render() {
        const {search, dataCache, isLoading, error} = this.state;
        console.log(this.state);

        const currentObj = null;
        const foreCastObj = null;

        const list = dataCache && dataCache[search] && dataCache[search][1]
            ? Object.values(dataCache)
            : []
        
        list.forEach((item, index) => {
            if(index === 1) {
                currentObj = 
            }
        })

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

                  {/*
                        list(value => {


                            return(
                             <div className="wrap-padding-bottom">
                                 <div className="table">
                                    <div className="table-top">
                                        {}
                                    </div>

                                    <div className="table-bottom">

                                    </div>
                                 </div>
                             </div>   
                        )})*/
                    }
                </main>
            </div>


            /*<div className="app">
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
                        dailyList={dataDaily}
                        isLoading={isLoading}
                        isError={error}
                        onDismiss={this.onDismiss}
                    />
                    
                </main>
            </div>*/
    )}
}

export default App;