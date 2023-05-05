import { createSelector } from "reselect";

const categoriesReducerSelector = (store) => store.categories;

const categoriesSelector = createSelector(
  [categoriesReducerSelector],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectIsLoading = createSelector(
  [categoriesReducerSelector],
  (categoriesSlice) => categoriesSlice.isLoading
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
