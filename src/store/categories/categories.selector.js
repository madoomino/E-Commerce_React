import { createSelector } from "reselect";

const categoriesReducerSelector = (state) => state.categories;
const categoriesSelector = createSelector(
  [categoriesReducerSelector],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [categoriesSelector],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
