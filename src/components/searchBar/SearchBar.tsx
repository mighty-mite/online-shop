import { useDispatch } from 'react-redux';
import { setSearch } from '../filters/filterSettingsSlice';
import { AppDispatch } from '../../store';
import { resetOffset } from '../cardField/cardsSlice';

import './SearchBar.scss';
import lens from '../../assets/lens-button.svg';

function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search for products..."
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
          dispatch(resetOffset());
        }}
      />
      <button className="searchbar__show-button" type="button">
        <img src={lens} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
