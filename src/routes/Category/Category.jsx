import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";
import { CategoryContainer, Title } from "./Category.styles";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  if (isLoading) {
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <Spinner />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
        </CategoryContainer>
      </Fragment>
    );
  }
};
export default Category;
