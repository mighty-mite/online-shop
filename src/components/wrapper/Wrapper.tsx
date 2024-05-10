import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../cardField/cardsSlice';
import { AppDispatch } from '../../store';
import { addItem } from '../../pages/cartPage/cartSlice';

function Wrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const localStorageArray = Object.keys(localStorage);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    localStorageArray.forEach((key) => {
      const itemRetrieved = localStorage.getItem(key);
      if (itemRetrieved) {
        const item = JSON.parse(itemRetrieved);
        dispatch(addItem(item));
      }
    });
  }, [dispatch, localStorageArray]);

  return <div className="app-wrapper">{children}</div>;
}

export default Wrapper;
