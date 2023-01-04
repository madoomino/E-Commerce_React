import { BackgroundImage, Body, CategoryContainer } from "./Category.styles";
const Category = ({ title, imageUrl }) => {
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body to={`shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default Category;
