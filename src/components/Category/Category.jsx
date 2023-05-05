import { BackgroundImage, Body, CategoryContainer } from "./Category.styles";
import { useNavigate } from "react-router-dom";
const Category = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={() => navigate(`shop/${title}`)}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default Category;
