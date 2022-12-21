import classes from "./Category.module.scss";
const Category = ({ title, imageUrl }) => {
  return (
    <div className={classes["category-container"]}>
      <div
        className={classes["background-image"]}
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className={classes["category-body-container"]}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
