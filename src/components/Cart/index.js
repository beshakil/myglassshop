import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProductCard from "../CartProductCard";
import BillCard from "../BillCard";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const renderEmptyCartView = () => (
    <div className="empty-cart-container">
      <img
        src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1691078035/Eyesome/ymsyydqtaszpds4wjxgb.png"
        alt="emptyCart"
      />
      <h1>Hey, it feels so light!</h1>
      <p>There's nothing in your bag. Let's add some items.</p>
      <Link to="/products" className="link-item m-4">
        <button type="button" className="empty-cart-button">
          Explore
        </button>
      </Link>
    </div>
  );

  const renderCartItem = () => {
    return (
      <>
        <h1 className="cart-view-title">Bag({cartProducts.length})</h1>
        <div className="cart-view-container">
          <ul className="cart-items-list-container">
            {cartProducts.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </ul>
          <BillCard />
        </div>
      </>
    );
  };

  if (cartProducts.length === 0) {
    return <>{renderEmptyCartView()}</>;
  }

  return <>{renderCartItem()}</>;
};

export default Cart;
