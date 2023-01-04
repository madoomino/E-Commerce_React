import ProductCard from "../ProductCard/ProductCard";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./CategoryPreview.styles";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
