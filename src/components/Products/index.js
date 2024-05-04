import { BsFilterRight } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import ProductCard from "../ProductCard";
import FiltersGroup from "../FiltersGroup";
import "./index.css";
import { useEffect, useState } from "react";
import { statusCode } from "../../utils/statusCode";
import Loader from "../Loader";
import ErrorCard from "../ErrorCard";
import ScrollToTop from "../ScrollToTop";
import { updatePriceSort } from "../../store/filtersSlice";
import useApplyFilters from "../../utils/useApplyFilters";

const Products = () => {
  const [showArrow, setShowArrow] = useState(false);
  const { status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredData = useApplyFilters();

  useEffect(() => {
    const toggleShowArrow = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", toggleShowArrow);

    return () => {
      window.removeEventListener("scroll", toggleShowArrow);
    };
  }, []);

  const renderProductSuccessView = () => (
    <>
      <section>
        <img
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954279/Eyesome/bannerHero.b913ee7a0754b4966295_snyik1.jpg"
          className="products-hero-image"
          alt="heroImage"
        />
      </section>
      <section className="products-title-filters">
        <h2>Glasses for You!</h2>
        <div>
          <select
            className="select-filter px-[8px] py-1.5"
            onChange={(event) => {
              dispatch(updatePriceSort(event.target.value));
            }}
          >
            <option value="">Sort By Price</option>
            <option value="LOW_HIGH">Low to High</option>
            <option value="HIGH_LOW">High to Low</option>
          </select>
          <button
            type="button"
            className="filter-buttonn flex gap-2 items-center px-2.5 ml-2 rounded-[5px] bg-[#EFEFEF]"
            onClick={() => {
              document
                .getElementById("filtersGroup")
                .classList.remove("d-none");
            }}
          >
            <BsFilterRight /> <p className="mt-1">Filters</p>
          </button>
        </div>
      </section>

      <ul className="row product-list-container d-flex">
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <FiltersGroup />
      {showArrow && <ScrollToTop />}
    </>
  );

  const renderProductView = () => {
    switch (status) {
      case statusCode.pending:
        return <Loader />;
      case statusCode.success:
        return renderProductSuccessView();
      case statusCode.failure:
        return <ErrorCard />;
      default:
        return null;
    }
  };

  return renderProductView();
};

export default Products;
