import ProductCard from "../ProductCard/ProductCard";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./CategoryPreview.styles";
import { useNavigate } from "react-router-dom";
const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <CategoryPreviewContainer>
        <Title onClick={() => navigate(title)}>{title.toUpperCase()}</Title>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
