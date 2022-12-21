import categories from "../../../categories.json";
import classes from "./Categories.module.scss";
import Category from "../Category/Category";

const Categories = () => {
  return (
    <div className={classes["categories-container"]}>
      {categories.map((category) => (
        <Category {...category} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
