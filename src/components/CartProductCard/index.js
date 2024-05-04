import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BiSolidBookmarkHeart } from "react-icons/bi";
import { useState } from "react";
import { removeCartItem, decreaseCartItemCount, increaseCartItemCount } from "../../store/cartSlice";
import { addWishlistItem, removeWishlistItem } from "../../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./index.css";
import { TbCurrencyTaka } from "react-icons/tb";

const CartProductCard = (props) => {
  const { product } = props;
  const { id, name, image, newPrice, price, qty } = product;
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const wishlistProducts = useSelector((state) => state.wishlist);

  useEffect(() => {
    setIsAddedToWishlist(wishlistProducts.some((product) => product.id === id));
  }, [wishlistProducts, id]);

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeCartItem(id));
  };
  const addToWishlist = () => {
    setIsAddedToWishlist(true);
    dispatch(addWishlistItem(product));
  };

  const removeFromWishlist = () => {
    setIsAddedToWishlist(false);
    dispatch(removeWishlistItem(id));
  };

  const increaseItem = () => {
    dispatch(increaseCartItemCount(id));
  };

  const decreaseItem = () => {
    qty === 1
      ? dispatch(removeCartItem(id))
      : dispatch(decreaseCartItemCount(id));
  };

  return (
    <li className="cart-product-card shadow-sm">
      <img className="cart-product-image" src={image} alt="productName" />
      <div className="cart-product-details">
        <h1>{name}</h1>
        <p>
          Quantity:{" "}
          <AiFillMinusCircle
            className="cart-product-update-icon"
            onClick={decreaseItem}
          />{" "}
          <span>{qty}</span>{" "}
          <AiFillPlusCircle
            className="cart-product-update-icon"
            onClick={increaseItem}
          />
        </p>
        <div>
          <button
            type="button"
            className="cart-product-remove-button"
            onClick={removeFromCart}
          >
            Remove
          </button>
          {!isAddedToWishlist && (
            <BiSolidBookmarkHeart
              className="cart-product-bookmark-button"
              onClick={addToWishlist}
            />
          )}
          {isAddedToWishlist && (
            <BiSolidBookmarkHeart
              className="cart-product-bookmark-button color-red"
              onClick={removeFromWishlist}
            />
          )}
        </div>
      </div>
      <div className="cart-product-price-container">
        {/* <p>₹{newPrice}</p> */}
        <div className="flex gap-1">
          <TbCurrencyTaka className="text-xl" />
          <div className="text-xl font-semibold -ml-1">
            {newPrice}
          </div>
        </div>
        <div className="flex gap-1 ml-3">
          <TbCurrencyTaka className="text-sm text-gray-400" />
          <div className="text-sm font-semibold -ml-1 text-gray-400">
            <del>{price}</del>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProductCard;
