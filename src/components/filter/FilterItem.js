import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Popover, PopoverHeader, PopoverBody, Overlay } from "react-bootstrap";
import FilterOptionPanel from './FilterOptionPanel';
import { filterByType } from '../../services/filterOptionsService';

function FilterItem(props) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [classList, setClassList] = useState(['fitler-item']);
    const ref = useRef(null);
    const selectedOptions = useSelector(state => filterByType(state.selectedFiltersOptions, props.type));

    const onItemClick = (event) => {
        setShow(!show)
        setTarget(event.target); 
    }

    const closePopover = () =>{
        setShow(false);
    }

    useEffect(() => {
        if(show || (selectedOptions && selectedOptions.length > 0)){
            setClassList(['fitler-item', 'fitler-item-selected'])
        }else{
            setClassList(['fitler-item'])
        }
    }, [show]);

    return (
        <div ref={ref} className="fiter-item-container">
            <button className={classList.join(' ')} 
            onClick={onItemClick}>
                {props.label} 
                {selectedOptions && selectedOptions.length > 0?'('+selectedOptions.length+')': ''}
            </button>       
            <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20} 
            onHide={()=>setShow(false)}
            rootClose={true} rootCloseEvent='click'>
            <Popover id="popover-positioned-bottom">
                <Popover.Body>
                    <FilterOptionPanel type={props.type} closePopover={closePopover}></FilterOptionPanel>
                </Popover.Body>
            </Popover>
            </Overlay> 
        </div>
    );
  }
  
  export default FilterItem;
  