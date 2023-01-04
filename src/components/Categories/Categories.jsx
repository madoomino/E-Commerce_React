import categories from "../../../categories.json";
import Category from "../Category/Category";
import { CategoriesContainer } from "./Categories.styles";

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
