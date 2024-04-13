import { useDispatch } from 'react-redux';
import { setSearch } from '../filters/filterSettingsSlice';

import './SearchBar.scss';
import lens from '../../assets/lens-button.svg';

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search for products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <button className="searchbar__show-button" type="button">
        <img src={lens} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
