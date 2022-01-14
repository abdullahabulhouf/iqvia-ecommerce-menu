import { useEffect, useState } from 'react';
import { getFilterOptions} from '../../services/filterOptionsService';
import FilterOption from './FilterOption';
import { useDispatch } from "react-redux";
import { selectOption, unSelectOption } from '../../store/actions/filterOption';

function FilterOptionPanel(props) {
  const [filterOptions] = useState(getFilterOptions(props.type));
  const [reset, SetReset] = useState(false);
  const [clickedOptions, setClickedOptions] = useState([]);
  const dispatch = useDispatch();
 
  const onCancelClick = (event) => {
    setClickedOptions([]);
    SetReset(true);
  }

  const onApplyClick = (event) => {
    clickedOptions.forEach(item => {
      if(!item.selected){
        dispatch(unSelectOption({id: item.option.id, title: item.option.title, filterType: props.type}));
      }else{
        dispatch(selectOption({id: item.option.id, title: item.option.title, filterType: props.type}));
      }
    });
    props.closePopover();
  }

  const onOptionClick = (selected, option) => {
    setClickedOptions([...clickedOptions, {selected: selected, option: option}]);
  }

  const anyOptionSelected = () => {
    if(clickedOptions && clickedOptions.length > 0){
      if(clickedOptions.find(o => o.selected === true)){
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if(reset){
      SetReset(false); 
    }
  }, [reset]);

    return (
      <div className={props.height?'filter-option-panel remove-height':'filter-option-panel'}>
        {
          filterOptions.map(option => {
            return <FilterOption key={'fo-'+option.id} 
            option={option} type={props.type} reset={reset} 
            onOptionClick={onOptionClick}></FilterOption>
          })
        }
        <div className={props.height?'hide':''}>
          <hr/>
        </div>
        <div className='mb-2 mt-1'>
          {anyOptionSelected() && <button className='filter-option me-2 float-start' 
          onClick={onCancelClick}>Cancel</button>}
          <button className='filter-option float-end' 
          onClick={onApplyClick}>Apply</button>
          <div className='clearfix'></div>
        </div>
      </div>
    );
  }
  
  export default FilterOptionPanel;
  