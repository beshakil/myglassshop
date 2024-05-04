import { Link } from "react-router-dom";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import TrendingProductCard from "../TrendingProductCard";
import CategoryCard from "../CategoryCard";

import "./index.css";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../store/productsSlice";
import { categoriesList } from "../../eyesomeData";
import { statusCode } from "../../utils/statusCode";
import Loader from "../Loader";
import ErrorCard from "../ErrorCard";
import ScrollToTop from "../ScrollToTop";
import CarouselComponent from './CarouselComponent'

const Home = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [showArrow, setShowArrow] = useState(false);

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

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.products);
  const trendingProductsData = data.filter(
    (product) => product.trending === true
  );

  const scrollToCategories = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const renderHomeBanner = () => (
    <section className="home-banner">
      <div className="w-[40%]">
        <h1 className="home-banner-title">Glasses <br /> & Lens</h1>
        <p className="home-banner-caption pb-3">
          Buy the best high-quality sunglasses from us.
          <br />
          More than 100 types of assortment.
        </p>
        <Link to="/products" className="link-item">
          <button type="button" className="text-white bg-black font-medium rounded-lg text-base px-3 pt-2.5 pb-2 me-2 mb-2">Start Shopping</button>
        </Link>
        <a href="#categoriesSection" onClick={scrollToCategories}>
          <button type="button" className="text-black font-medium rounded-lg text-base px-3 pt-2.5 pb-2 text-center inline-flex items-center">
            Explore More
            <BsArrowDownRightCircle className="ml-2 text-lg" />
          </button>
        </a>

      </div>
      {/* <div className="home-banner-image-container flex">
        <img
          className="home-banner-image"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1690882963/Eyesome/bannerImg.712fc34e6a2084115f10_rtidnd.png"
          alt="homeBanner"
        />
      </div> */}
      <div className="w-[60%]">
        <CarouselComponent />
      </div>


    </section>
  );

  const renderHomeTrendingView = () => (
    <section className="home-trending-view row">
      <div className="home-trending-title-container col-12 col-sm-6 col-lg-4 col-xl-3">
        <h2 className="home-trending-title text-5xl ml-2">Trending Products</h2>
      </div>
      {trendingProductsData.map((product) => (
        <TrendingProductCard key={product.id} product={product} />
      ))}
    </section>
  );

  const renderCategoriesList = () => (
    <section className="home-categories-view row">
      <div className="home-categories-title-container col-12" ref={ref}>
        <h2 className="home-trending-title text-center mb-2 text-4xl">Categories</h2>
      </div>
      {categoriesList.map((category) => (
        <CategoryCard key={category.id} categoryDetails={category} />
      ))}
    </section>
  );

  const renderHomeSuccessView = () => (
    <>
      {renderHomeBanner()}
      {renderHomeTrendingView()}
      {renderCategoriesList()}
      {showArrow && <ScrollToTop />}
    </>
  );

  const renderHomeView = () => {
    switch (status) {
      case statusCode.pending:
        return <Loader />;
      case statusCode.success:
        return renderHomeSuccessView();
      case statusCode.failure:
        return <ErrorCard />;
      default:
        return null;
    }
  };

  return renderHomeView();
};

export default Home;
