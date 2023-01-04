import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.entries(categoriesMap).map(([title, products]) => (
        <CategoryPreview title={title} products={products} key={title} />
      ))}
    </Fragment>
  );
};
export default CategoriesPreview;
