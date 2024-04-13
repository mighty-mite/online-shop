/* eslint-disable no-useless-catch */
import { ICard } from '../service/types';

const useHttp = () => {
  const getAll = async (
    query = 'https://dummyjson.com/products?limit=100&skip=0',
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

      const brands = Array.from(
        new Set(data.products.map((item: ICard) => item.brand)) as Set<string>
      );

      const categories = Array.from(
        new Set(
          data.products.map((item: ICard) => item.category)
        ) as Set<string>
      );

      const minPrice = Math.min(
        ...Array.from(
          new Set(data.products.map((item: ICard) => item.price) as Set<number>)
        )
      );
      const maxPrice = Math.min(
        ...Array.from(
          new Set(data.products.map((item: ICard) => item.price) as Set<number>)
        )
      );
      return {
        data: data.products,
        minMaxPrice: {
          from: minPrice,
          to: maxPrice,
        },
        brands,
        categories,
      };
    } catch (e) {
      throw e;
    }
  };

  // const getCategories = async (
  //   method = 'GET',
  //   body = null,
  //   headers = { 'Content-Type': 'application/json' }
  // ) => {
  //   try {
  //     const response = await fetch(query, { method, body, headers });
  //     if (!response.ok) {
  //       throw new Error(`Could not fetch ${query}, status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (e) {
  //     throw e;
  //   }
  // };
  return {
    getAll,
    // getCategories,
  };
};

export default useHttp;
