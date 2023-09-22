export const getFromLocal = (key, doParse) => {
    // key (string), doParse(Boolean)
    // Get Value from localStorage
    let result = localStorage.getItem(key);
    // Prop to check whether we need to parse the localvalue or not
    if(doParse){
        result = JSON.parse(result);
    }
    return result;
}

export const setInLocal = (key, value, doStringify= false) => {
    // key (string), doStringify(Boolean)
    // Check whether to convert to string for localstorage
    console.log("Inside setInLocal func : ", doStringify)
    if(doStringify){
        localStorage.setItem(key, JSON.stringify(value))
    }
    else{
        localStorage.setItem(key, value)
    }
}


// INPUT ---> Key value of LocalStorage
export const deleteFromLocal = (value) => {
    localStorage.removeItem(value);
}