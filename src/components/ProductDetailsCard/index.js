import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { addCartItem } from "../../store/cartSlice";
import { addWishlistItem, removeWishlistItem } from "../../store/wishlistSlice";
import { useEffect, useState } from "react";
import { BiSolidBookmarkHeart } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../store/productDetailsSlice";
import Loader from "../Loader";
import ErrorCard from "../ErrorCard";
import { statusCode } from "../../utils/statusCode";

import "./index.css";

const ProductDetailsCard = (props) => {
  const productId = useParams("id");
  const dispatch = useDispatch();

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const cartProducts = useSelector((state) => state.cart);
  const wishlistProducts = useSelector((state) => state.wishlist);

  const { data, status } = useSelector((state) => state.productDetails);
  const {
    id,
    brand,
    category,
    gender,
    description,
    name,
    image,
    newPrice,
    price,
    rating,
    weight,
  } = data;

  useEffect(() => {
    setIsAddedToCart(cartProducts.some((product) => product.id === id));
  }, [cartProducts, id]);

  useEffect(() => {
    setIsAddedToWishlist(wishlistProducts.some((product) => product.id === id));
  }, [wishlistProducts, id]);

  useEffect(() => {
    dispatch(getProductDetails(productId.id));
  }, [dispatch, productId.id]);

  const addToCart = () => {
    dispatch(addCartItem({ ...data, qty: 1 }));
    setIsAddedToCart(true);
  };

  const addToWishlist = () => {
    dispatch(addWishlistItem(data));
    setIsAddedToWishlist(true);
  };

  const removeFromWishlist = () => {
    dispatch(removeWishlistItem(id));
    setIsAddedToWishlist(false);
  };

  const renderProductDetailsCardSuccessView = () => (
    <div className="product-details-card gap-5 pt-8">
      <div className="relative h-[85%] p-7 bg-black/[0.075] flex items-center justify-center rounded-lg">
        <img
          className="product-details-card-image"
          src={image}
          alt="productImage"
        />
      </div>
      <div className="p-4 product-details-card-description">
        <h1 className="product-details-card-title">{name}</h1>
        <p className="product-details-card-info">{description}</p>
        <div className="flex gap-1 py-2">
          <p className="product-details-card-rating flex">
            <AiFillStar className="color-yellow" />
            <AiFillStar className="color-yellow" />
            <AiFillStar className="color-yellow" />
            <AiFillStar className="color-yellow" />
            <AiFillStar className="color-yellow" />

          </p>
          <div>
            <span className="text-gray-400">({rating}) Rating</span>
          </div>
        </div>
        <p className="about-product-text pt-2">About Product</p>
        <div className="about-product-details">
          <li>
            <span>Brand: </span>
            {brand}
          </li>
          <li>
            <span>Gender: </span>
            {gender}
          </li>
          <li>
            <span>Category: </span>
            {category}
          </li>
          <li>
            <span>Weight: </span>
            {weight}
          </li>
        </div>
        <p className="product-details-card-price">
          <span>Price: </span> ₹{newPrice} <del>₹{price}</del>
        </p>
        <div className="product-details-card-buttons">
          {!isAddedToCart && (
            <button
              type="button"
              className="product-details-card-cart-button"
              onClick={addToCart}
            >
              <span>
                <BsHandbagFill />
              </span>{" "}
              Add to Cart
            </button>
          )}
          {isAddedToCart && (
            <Link
              to="/cart"
              className="link-item product-details-card-cart-button"
            >
              <span>
                <BsHandbagFill />
              </span>
              Go to Cart
            </Link>
          )}
          {!isAddedToWishlist && (
            <button
              type="button"
              className="product-details-card-cart-button"
              onClick={addToWishlist}
            >
              <span>
                <BiSolidBookmarkHeart />
              </span>{" "}
              Wishlist Item
            </button>
          )}
          {isAddedToWishlist && (
            <button
              type="button"
              className="product-details-card-cart-button"
              onClick={removeFromWishlist}
            >
              <span>
                <BiSolidBookmarkHeart />
              </span>
              Remove from Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderProductDetailsCardView = () => {
    switch (status) {
      case statusCode.pending:
        return <Loader />;
      case statusCode.success:
        return renderProductDetailsCardSuccessView();
      case statusCode.failure:
        return <ErrorCard />;
      default:
        return null;
    }
  };

  return renderProductDetailsCardView();
};

export default ProductDetailsCard;
