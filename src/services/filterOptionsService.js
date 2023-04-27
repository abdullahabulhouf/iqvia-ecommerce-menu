import filterOptions from "../data/optionsData";
import filterList from "../data/filterList";

export const getAllFilterOptions = () => {
    return filterOptions;
}

export const getFilterOptions = (type) => {
    if(filterOptions[type]){
        return filterOptions[type];
    }
    return null;
}

export const filterByType = (state, filterType) => {
    if(state && state.length > 0){
        return state.filter(s => s.filterType === filterType)
    }
    return null;
}

export const findOption = (state, option) => {
    if(state && state.length > 0){
        return state.find(s => s.id === option.id);
    }
    return null;
}

export const getFilterList = () => {
    return filterList;
}