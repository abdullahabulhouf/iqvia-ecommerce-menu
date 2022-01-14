const selectedFiltersOptions = (state = [], action) => {
    switch (action.type) {
      case 'SELECT_OPTION':
        return [
          ...state,
          {
            id: action.option.id,
            title: action.option.title,
            filterType: action.option.filterType
          }
        ]
      case 'UN_SELECT_OPTION':
        const index = state.findIndex(s => s.id === action.option.id && s.filterType === action.option.filterType);
        if(index > -1){
            state.splice(index, 1);
            return [...state];
        }
        return [...state];
      case 'UN_SELECT_ALL_OPTIONS':
        let newState = state.filter(s => s.filterType !== action.filterType);
        return [...newState];
      default:
        return state
    }
  }
  
  export default selectedFiltersOptions
  