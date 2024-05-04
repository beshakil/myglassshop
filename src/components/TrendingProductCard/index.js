import { Link } from "react-router-dom";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { TbCurrencyTaka } from "react-icons/tb";
import "./index.css";

const TrendingProductCard = (props) => {
  const { id, name, image, price, category } = props.product;
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <Link to={`product/${id}`} className="link-item">
        <div className="trending-product-card bg-[#ECEBE8]">
          <section className="trending-product-details">
            <h3 className="trending-product-title">{name}</h3>
            <div className="trending-product-info">
              <div className="flex gap-1">
                <TbCurrencyTaka className="text-xl" />
                <div className="text-[18px] -ml-1">
                  {price}
                </div>
                <TbSquareRoundedPlusFilled className="text-[17px] mt-[2px] text-[#A16207]" />
              </div>
              <div className="pl-1">
                <strong className="text-gray-500">{category}</strong>
              </div>
            </div>
          </section>
          <section className="trending-product-image-container">
            <img
              src={image}
              alt="trendingProduct"
              className="trending-product-image"
            />
          </section>
        </div>
      </Link>
    </div>
  );
};

export default TrendingProductCard;
