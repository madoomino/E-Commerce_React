import { Fragment } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {Object.entries(categoriesMap).map(([title, products]) => (
          <CategoryPreview title={title} products={products} key={title} />
        ))}
      </Fragment>
    );
  }
};
export default CategoriesPreview;
