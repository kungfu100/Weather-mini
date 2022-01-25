export const APIkey = "4bee44025394752ae99d314c5aa462be";
export const default_unit = "metric";
export const default_lang = "en";

export const PATH_BASE = "https://api.openweathermap.org/data/2.5";
export const PATH_WEATHER = "/weather";
export const PATH_ONECALL = "/onecall";

export const PARAM_SEARCH = "q=";
export const PARAM_KEY = "appid="
export const PARAM_UNIT = "units=" 
export const PARAM_LANG = "lang="

export const PARAM_LAT = "lat=";
export const PARAM_LON = "lon=";
export const PARAM_EXCLUDE= "exclude=";

export const DEFAUTL_QUERY = "london";
export const DEFAULT_EXCLUDE = "current,minutely,hourly,alerts";

export const withEither = (conditionFn, ComponentEither) => (Component) => (props) =>
    conditionFn(props)
    ? <ComponentEither {...props} />
    : <Component {...props} />


