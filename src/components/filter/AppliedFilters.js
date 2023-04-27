import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppliedFilterItem from "./AppliedFilterItem";

function AppliedFilters() {
  const selectedOptions = useSelector(state => state.selectedFiltersOptions);
  
    return (
      <div className="mt-2">
        <div>Applied Filters: {(!selectedOptions || selectedOptions.length === 0) && <strong> - None -</strong>}</div>
        {
          selectedOptions.map(option => {
            return <AppliedFilterItem key={'afi-'+option.id} option={option}></AppliedFilterItem>
          })
        }
      </div>
    );
  }
  
  export default AppliedFilters;
  