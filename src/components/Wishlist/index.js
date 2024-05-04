import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const Wishlist = () => {
  const wishlistProducts = useSelector((state) => state.wishlist);

  const renderEmptyWishlistView = () => (
    <div className="empty-wishlist-container">
      <img
        src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1691474963/Eyesome/empty-wish.5af0d55ffd0f31b86c32_keionf.gif"
        alt="emptyCart"
      />
      <h1>Nothing to Show!</h1>
      <p>Unlock Your Shopping Desires. Fill Your Empty Wishlist.</p>
      <Link to="/products" className="link-item m-4">
        <button type="button" className="empty-wishlist-button">
          Explore
        </button>
      </Link>
    </div>
  );

  const renderWishlistItem = () => {
    return (
      <>
        <h1 className="wishlist-view-title">Wishlist</h1>
        <ul className="wishlist-items-list-container row">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </>
    );
  };

  if (wishlistProducts.length === 0) {
    return <>{renderEmptyWishlistView()}</>;
  }

  return <>{renderWishlistItem()}</>;
};

export default Wishlist;
