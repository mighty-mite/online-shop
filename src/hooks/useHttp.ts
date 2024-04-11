/* eslint-disable no-useless-catch */
const useHttp = (query: string) => {
  const getAll = async (
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

      return data.products;
    } catch (e) {
      throw e;
    }
  };

  const getCategories = async (
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
