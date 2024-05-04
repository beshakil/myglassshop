import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/filtersSlice";

const CategoryCard = (props) => {
  const { displayText, imageUrl } = props.categoryDetails;
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-4 mb-4">
      <Link
        to="products"
        className="link-item"
        onClick={() => {
          dispatch(addCategory(displayText));
        }}
      >
        <div
          className="category-card"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <p className="!text-6xl">{displayText}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
