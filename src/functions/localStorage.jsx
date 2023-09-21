export const getFromLocal = ({key, doParse}) => {
    // key (string), doParse(Boolean)
    // Get Value from localStorage
    const result = localStorage.getItem(key);
    // Prop to check whether we need to parse the localvalue or not
    if(doParse){
        result = JSON.parse(result);
    }
    return result;
}

export const setInLocal = ({key, value, doStringify}) => {
    // key (string), doStringify(Boolean)
    // Check whether to convert to string for localstorage
    if(doStringify){
        localStorage.setItem(key, JSON.stringify(value))
    }
    else{
        localStorage.setItem(key, value)
    }
}