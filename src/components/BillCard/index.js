import { useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const BillCard = () => {
  const cartProducts = useSelector((state) => state.cart);
  let total = 0;
  cartProducts.forEach((product) => {
    total += product.qty * product.newPrice;
  });

  return (
    <div className="bill-card-container !bg-white !shadow-sm">
      <h2>Price Details</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id} className="bill-item">
            <p>
              {product.name} ({product.qty})item
            </p>
            <div className="flex gap-1">
              <TbCurrencyTaka className="text-xl" />
              <div className="text-xl font-semibold -ml-1">
                {product.qty * product.newPrice}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <p>Total</p>
        <div className="flex gap-1">
          <TbCurrencyTaka className="text-2xl" />
          <div className="text-2xl font-semibold -ml-1">
            {total}
          </div>
        </div>
      </div>
      <Link to="/checkout" className="link-item text-center">
        <button type="button" className="bill-checkout-button">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default BillCard;
