import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.entries(categoriesMap).map(([title, products]) => (
        <CategoryPreview title={title} products={products} key={title} />
      ))}
    </Fragment>
  );
};
export default CategoriesPreview;
