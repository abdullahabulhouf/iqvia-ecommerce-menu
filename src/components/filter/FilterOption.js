import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterByType, findOption } from '../../services/filterOptionsService';

function FilterOption(props) {
  const initialClasses = 'filter-option me-2 mb-2';
  const [selected, setSelected] = useState(false);
  const [classList, SetClassList] = useState([initialClasses]);
  const selectedOptions = useSelector(state => filterByType(state.selectedFiltersOptions, props.type));

  const onOptionClick = (evnet) => {
    props.onOptionClick(!selected, props.option);
    setSelected(!selected);
  }

  useEffect(() => {
    if(selected || findOption(selectedOptions, props.option)){
      SetClassList([initialClasses, 'selected']);
    }else{
      SetClassList([initialClasses]);
    }
  },[selected])

  useEffect(() => {
    if(props.reset){
      setSelected(false);
    }
  },[props.reset])

    return (
      <button onClick={onOptionClick} className={classList.join(' ')}>{props.option.title}</button>
    );
  }
  
  export default FilterOption;
  