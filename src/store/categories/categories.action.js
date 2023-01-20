import CATEGORIES_ACTION_TYPES from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categories) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStarted());
  try {
    const data = await getCategoriesAndDocuments();
    return dispatch(fetchCategoriesSuccessful(data));
  } catch (error) {
    return dispatch(fetchCategoriesFailed(error));
  }
};

function fetchCategoriesStarted() {
  return createAction(CATEGORIES_ACTION_TYPES.GET_ITEMS_STARTED);
}

function fetchCategoriesSuccessful(items) {
  return createAction(CATEGORIES_ACTION_TYPES.GET_ITEMS_SUCCESSFUL, items);
}

function fetchCategoriesFailed(error) {
  return createAction(CATEGORIES_ACTION_TYPES.GET_ITEMS_FAILED, error);
}
