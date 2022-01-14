import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Popover, PopoverHeader, PopoverBody, Overlay } from "react-bootstrap";
import FilterOptionPanel from './FilterOptionPanel';
import { filterByType } from '../../services/filterOptionsService';

function FilterItemMore(props) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [classList, setClassList] = useState(['fitler-item']);
    const ref = useRef(null);

    const onItemClick = (event) => {
        setShow(!show)
        setTarget(event.target); 
    }

    const closePopover = () =>{
        setShow(false);
    }

    useEffect(() => {
        if(show){
            setClassList(['fitler-item', 'fitler-item-selected'])
        }else{
            setClassList(['fitler-item'])
        }
    }, [show]);


    return (
        <div ref={ref} className="fiter-item-container">
            <button className={classList.join(' ')} 
            onClick={onItemClick}>
                More Filters
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
                    {
                        props.itemsToShow.map((item, index) => {
                            return <div key={'itshow-'+index}>
                                <div>{item.label}</div>
                                <div >
                                    <FilterOptionPanel 
                                    type={item.type} height={true} 
                                    closePopover={closePopover}>
                                    </FilterOptionPanel>
                                </div>
                                <div>
                                    <hr/>
                                </div>
                                </div>
                        })
                    }
                    
                </Popover.Body>
            </Popover>
            </Overlay> 
        </div>
    );
  }
  
  export default FilterItemMore;
  