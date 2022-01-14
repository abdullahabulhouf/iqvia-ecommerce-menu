import { unSelectOption } from '../../store/actions/filterOption';
import { useDispatch } from "react-redux";

function AppliedFilterItem(props) {
    const dispatch = useDispatch();
    const onRemoveFilterItem = (event) => {
      dispatch(unSelectOption({id: props.option.id, title: props.option.title, filterType: props.option.filterType}));
    }

    return (
      <div className="applied-filter-item">
        <div className="float-start">{props.option.title}</div>
        <div className="float-end">
            <button className='remove-item' onClick={onRemoveFilterItem}>X</button>
        </div>
        <div className='clearfix'></div>
      </div>
    );
  }
  
  export default AppliedFilterItem;
  