import './Burger.scss';
import burger from '../../assets/burger.svg';

function Burger() {
  return (
    <button className="burger" type="button">
      <img src={burger} alt="" />
    </button>
  );
}

export default Burger;
