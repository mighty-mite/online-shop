import { ICard } from '../service/types';

const useHttp = () => {
  const getAll = async (
    query = 'https://dummyjson.com/products?limit=100&skip=0',
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    const response = await fetch(query, { method, body, headers });

    if (!response.ok) {
      throw new Error(`Could not fetch ${query}, status: ${response.status}`);
    }

    const data = await response.json();

    const brands = Array.from(
      new Set(data.products.map((item: ICard) => item.brand)) as Set<string>
    );

    const categories = Array.from(
      new Set(data.products.map((item: ICard) => item.category)) as Set<string>
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
      prices: {
        from: minPrice,
        to: maxPrice,
      },
      brands,
      categories,
    };
  };

  const getSingleProduct = async (
    id: string,
    query = `https://dummyjson.com/products/${id}`,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    const response = await fetch(query, { method, body, headers });

    if (!response.ok) {
      throw new Error(`Could not fetch ${query}, status: ${response.status}`);
    }

    const data = await response.json();
    return data as ICard;
  };

  return {
    getAll,
    getSingleProduct,
  };
};

export default useHttp;
