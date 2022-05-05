export const saveToLocal = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
    console.log('Value Added To Local Storage');
}

export const loadFromLocal = (key) => {
    try{
        let localData = JSON.parse(localStorage.getItem(key));
        return localData || undefined;
    }
    catch(err){console.log(err)}
}

export const removeFromLocal = (key) => {
    try{
        localStorage.removeItem(key);
        console.log('key removed from Local Storage');
    }
    catch(err){
        console.log(err);
    }
}