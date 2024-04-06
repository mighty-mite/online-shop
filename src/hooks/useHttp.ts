/* eslint-disable no-useless-catch */
const useHttp = () => {
  const getAll = async (
    url = 'https://dummyjson.com/products',
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data.products;
    } catch (e) {
      throw e;
    }
  };

  const getCategories = async (
    url = 'https://api.escuelajs.co/api/v1/categories',
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };
  return {
    getAll,
    getCategories,
  };
};

export default useHttp;
