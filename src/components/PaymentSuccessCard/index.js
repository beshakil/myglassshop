import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../store/cartSlice";

import "./index.css";

const PaymentSuccessCard = (props) => {
  const { updatePaymentSuccess } = props;
  const dispatch = useDispatch();

  return (
    <div className="eyesome-modal">
      <div className="payment-success-container">
        <img
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1694864373/Eyesome/animation_lmlygj9e_small_yepuwp.gif"
          alt="paymentSuccess"
        />

        <h1>Payment Successful!</h1>
        <p>Thank You!!</p>
        <Link to="/products" className="link-item m-4">
          <button
            type="button"
            className="payment-success-button"
            onClick={() => {
              updatePaymentSuccess(false);
              dispatch(emptyCart());
            }}
          >
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessCard;
