import { useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import FilterItemMore from "./FilterItemMore";
import { getFilterList } from "../../services/filterOptionsService";
import useWindowSize from "../shared/useWindowSize";

function FilterBar() {
  const itemSize = 160;
  const [filterList, setFilterList] = useState(getFilterList());
  const [showMore, setShowMore] = useState(false);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [itemsToHide, setItemsToHide] = useState([]);
  const [width, height] = useWindowSize();

  const calculateAndApplyList = () => {
    const noumberOfItemsAvailable = Math.floor((width - 65) / itemSize);
    console.log('noOfItemsAvailable', true, noumberOfItemsAvailable, filterList.length);
    if(noumberOfItemsAvailable >= filterList.length){
      setItemsToShow(filterList);
      setShowMore(false);
    }else{
      const numberOfItemsToHide = filterList.length - noumberOfItemsAvailable + 1;
      const itemsToHideList = filterList.slice(noumberOfItemsAvailable -1, filterList.length);
      const itemsToShowList = filterList.slice(0, noumberOfItemsAvailable - 1);
      console.log('items', numberOfItemsToHide, itemsToHideList, itemsToShowList)
      setItemsToHide(itemsToHideList);
      setItemsToShow(itemsToShowList);
      setShowMore(true);
    }
  }

  useEffect(() => {
    //console.log('size', width, height);
    calculateAndApplyList();
  }, [width, height]);

    return (
      <div className="filter-bar">
        {
          itemsToShow.map((filter, index) => {
            return <FilterItem key={'fit-'+index} className="me-2" 
            label={filter.label} type={filter.type}></FilterItem>
          })
        }
        {
          showMore && <FilterItemMore itemsToShow={itemsToHide}></FilterItemMore>
        }
        {/* <FilterItem label="Size" type="size"></FilterItem>
        <FilterItem label="Color" type="color" className="me-2"></FilterItem>
        <FilterItem label="Room" type="room" className="me-2"></FilterItem>
        <FilterItem label="Price" type="price" className="me-2"></FilterItem>
        <FilterItem label="Material" type="material" className="me-2"></FilterItem>
        <FilterItem label="Construction" type="construction" className="me-2"></FilterItem>
        <FilterItem label="Style" type="style" className="me-2"></FilterItem> */}
      </div>
    );
  }
  
  export default FilterBar;
  