import { Fragment } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";

import { CategoriesContainer } from "./CategoriesPreview.styles";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {

        isLoading ? (<Spinner />) : (
          <Fragment>
            {Object.entries(categoriesMap).map(([title, products]) => (
              <CategoryPreview title={title} products={products} key={title} />
            ))}
          </Fragment>
        )
      }
    </>
  )
};
export default CategoriesPreview;
