import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  updateGender,
  updatePriceRange,
  addCategory,
  removeCategory,
  updateRating,
} from "../../store/filtersSlice";
import "./index.css";

const FiltersGroup = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const { gender, priceRange, category, rating } = filters;

  const renderGenderFilter = () => (
    <div className="filter">
      <h3>Gender</h3>
      <section className="row">
        <div className="col-6">
          <button
            id="ALL"
            type="button"
            className={
              gender === "All"
                ? "filters-button active-gender"
                : "filters-button"
            }
            value="All"
            onClick={(event) => {
              dispatch(updateGender(event.target.value));
            }}
          >
            All
          </button>
        </div>
        <div className="col-6">
          <button
            id="MEN"
            type="button"
            className={
              gender === "Men"
                ? "filters-button active-gender"
                : "filters-button"
            }
            value="Men"
            onClick={(event) => {
              dispatch(updateGender(event.target.value));
            }}
          >
            Men
          </button>
        </div>
        <div className="col-6">
          <button
            id="WOMEN"
            type="button"
            className={
              gender === "Women"
                ? "filters-button active-gender"
                : "filters-button"
            }
            value="Women"
            onClick={(event) => {
              dispatch(updateGender(event.target.value));
            }}
          >
            Women
          </button>
        </div>
        <div className="col-6">
          <button
            id="UNISEX"
            type="button"
            className={
              gender === "Unisex"
                ? "filters-button active-gender"
                : "filters-button"
            }
            value="Unisex"
            onClick={(event) => {
              dispatch(updateGender(event.target.value));
            }}
          >
            Unisex
          </button>
        </div>
      </section>
    </div>
  );

  const renderPriceRangeFilter = () => (
    <div className="filter">
      <h3>Price Range</h3>
      <input
        id="priceRange"
        type="range"
        min="0"
        max="4999"
        value={priceRange}
        onChange={(event) => {
          dispatch(updatePriceRange(event.target.value));
        }}
      />
      <div className="filters-range-label">
        <span>0</span>
        <span>2499</span>
        <span>4999</span>
      </div>
    </div>
  );

  const renderCategoriesFilter = () => (
    <div className="filter">
      <h3>Categories</h3>
      <label htmlFor="vision">
        <input
          type="checkbox"
          value="Vision"
          id="vision"
          onChange={(event) => {
            event.target.checked
              ? dispatch(addCategory(event.target.value))
              : dispatch(removeCategory(event.target.value));
          }}
          checked={category.includes("Vision")}
        />
        Vision
      </label>
      <label htmlFor="sunglasses">
        <input
          type="checkbox"
          value="Sunglasses"
          id="sunglasses"
          onChange={(event) => {
            event.target.checked
              ? dispatch(addCategory(event.target.value))
              : dispatch(removeCategory(event.target.value));
          }}
          checked={category.includes("Sunglasses")}
        />
        Sunglasses
      </label>
      <label htmlFor="sports">
        <input
          type="checkbox"
          value="Sports"
          id="sports"
          onChange={(event) => {
            event.target.checked
              ? dispatch(addCategory(event.target.value))
              : dispatch(removeCategory(event.target.value));
          }}
          checked={category.includes("Sports")}
        />
        Sports
      </label>
    </div>
  );

  const renderRatingFilter = () => (
    <div className="filter">
      <h3>Rating</h3>
      <label htmlFor="1Star">
        <input
          type="radio"
          name="rating"
          id="1Star"
          value="1"
          checked={rating === "1"}
          onChange={(event) => {
            dispatch(updateRating(event.target.value));
          }}
        />
        1 Stars & Above
      </label>
      <label htmlFor="2Star">
        <input
          type="radio"
          name="rating"
          id="2Star"
          value="2"
          checked={rating === "2"}
          onChange={(event) => {
            dispatch(updateRating(event.target.value));
          }}
        />
        2 Stars & Above
      </label>
      <label htmlFor="3Star">
        <input
          type="radio"
          name="rating"
          id="3Star"
          value="3"
          checked={rating === "3"}
          onChange={(event) => {
            dispatch(updateRating(event.target.value));
          }}
        />
        3 Stars & Above
      </label>
      <label htmlFor="4Star">
        <input
          type="radio"
          name="rating"
          id="4Star"
          value="4"
          checked={rating === "4"}
          onChange={(event) => {
            dispatch(updateRating(event.target.value));
          }}
        />
        4 Stars & Above
      </label>
    </div>
  );

  return (
    <div id="filtersGroup" className="eyesome-modal d-none">
      <div className="filters-card !z-20">
        <header>
          <h1>Filter Products</h1>
          <RxCross2
            className="filters-cross"
            onClick={() => {
              document.getElementById("filtersGroup").classList.add("d-none");
            }}
          />
        </header>
        <button
          type="button"
          className="filters-button"
          onClick={() => {
            dispatch(clearFilters());
          }}
        >
          Clear Filters
        </button>
        {renderGenderFilter()}
        {renderPriceRangeFilter()}
        {renderCategoriesFilter()}
        {renderRatingFilter()}
      </div>
    </div>
  );
};

export default FiltersGroup;
