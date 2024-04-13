import { ICard, FilterSettings } from './types';

const filterCards = (cards: ICard[], filters: FilterSettings): ICard[] => {
  return cards.filter((card) => {
    // Check category filter
    if (
      filters.category.length > 0 &&
      !filters.category.includes(card.category)
    ) {
      return false;
    }
    // Check brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(card.brand)) {
      return false;
    }
    // Check price filter
    if (card.price < filters.minPrice || card.price > filters.maxPrice) {
      return false;
    }
    // Check search filter
    if (
      filters.search &&
      !card.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !card.brand.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
};

export default filterCards;
