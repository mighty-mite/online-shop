/* eslint-disable no-useless-catch */
import { ICard } from './types';

const getMinMaxPrice = async (
  query = 'https://dummyjson.com/products?limit=0&skip=0',
  method = 'GET',
  body = null,
  headers = { 'Content-Type': 'application/json' }
) => {
  try {
    const response = await fetch(query, { method, body, headers });

    if (!response.ok) {
      throw new Error(`Could not fetch ${query}, status: ${response.status}`);
    }

    const data = await response.json();

    const minPrice = Math.floor(
      Math.min(
        ...Array.from(
          new Set(data.products.map((item: ICard) => item.price) as Set<number>)
        )
      )
    );
    const maxPrice = Math.round(
      Math.max(
        ...Array.from(
          new Set(data.products.map((item: ICard) => item.price) as Set<number>)
        )
      )
    );
    return {
      minPrice,
      maxPrice,
    };
  } catch (e) {
    throw e;
  }
};

export default getMinMaxPrice;
