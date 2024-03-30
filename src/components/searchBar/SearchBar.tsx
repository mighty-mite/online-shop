import './SearchBar.scss';
import lens from '../../assets/lens-button.svg';

function SearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search for products..."
      />
      <button className="searchbar__show-button" type="button">
        <img src={lens} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
