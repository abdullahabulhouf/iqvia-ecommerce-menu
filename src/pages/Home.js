import AppliedFilters from "../components/filter/AppliedFilters";
import FilterBar from "../components/filter/FilterBar";
import { Provider } from 'react-redux';
import store from '../store';


function Home(props) {
  return (
    <div>
      <Provider store={store}>
        <FilterBar></FilterBar>
        <AppliedFilters></AppliedFilters>
      </Provider>
    </div>
  );
}

export default Home;
