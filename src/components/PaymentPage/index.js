import { useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";

const PaymentPage = (props) => {
  const { updateDisplayPayment, updatePaymentSuccess } = props;
  const [displayUpi, setDisplayUpi] = useState(false);
  const [displayDebit, setDisplayDebit] = useState(false);
  const [displayCredit, setDisplayCredit] = useState(false);
  const [displayNetBanking, setDisplayNetBanking] = useState(false);
  const [inputCardNumber, setInputCardNumber] = useState("");
  const [inputCardHolderName, setInputCardHolderName] = useState("");
  const [inputCvv, setInputCvv] = useState("");
  const [inputExpiry, setInputExpiry] = useState("");
  const [inputUserId, setInputUserId] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const cartProducts = useSelector((state) => state.cart);
  let total = 0;
  cartProducts.forEach((item) => {
    total += item.newPrice * item.qty;
  });

  const renderUpiView = () => (
    <section className="upi-container">
      <button type="button">
        <img
          className="upi-option"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1694840792/Eyesome/1220356_paytm_icon_tlxkqj.png"
          alt="paytm"
        />
      </button>
      <button type="button">
        <img
          className="upi-option"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1694840792/Eyesome/phonepay_tuqitg.png"
          alt="phonepay"
        />
      </button>
      <button type="button">
        <img
          className="upi-option"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1694840792/Eyesome/7123945_logo_pay_google_gpay_icon_r8lj3z.png"
          alt="googlepay"
        />
      </button>
      <button type="button">
        <img
          className="upi-option"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1694840792/Eyesome/bhim_st6uma.png"
          alt="bhim"
        />
      </button>
    </section>
  );

  const renderCardDetailsView = () => (
    <section className="card-details-container">
      <h2>Add New Card</h2>
      <form className="row">
        <label className="col-12 col-sm-8">
          Card Number
          <br />
          <input
            type="text"
            placeholder="000000000000"
            value={inputCardNumber}
            onChange={(event) => {
              setInputCardNumber(event.target.value);
            }}
          />
        </label>
        <label className="col-12 col-sm-4">
          Expiry Date
          <br />
          <input
            type="text"
            placeholder="00/00"
            value={inputExpiry}
            onChange={(event) => {
              setInputExpiry(event.target.value);
            }}
          />
        </label>

        <label className="col-12 col-sm-8">
          Card Holder's Name
          <br />
          <input
            type="text"
            placeholder="Rakesh Roshan"
            value={inputCardHolderName}
            onChange={(event) => {
              setInputCardHolderName(event.target.value);
            }}
          />
        </label>

        <label className="col-12 col-sm-4">
          CVV
          <br />
          <input
            type="text"
            placeholder="000"
            value={inputCvv}
            onChange={(event) => {
              setInputCvv(event.target.value);
            }}
          />
        </label>
      </form>
    </section>
  );

  const renderNetBankingView = () => (
    <section className="card-details-container">
      <h2>Enter New Banking Details</h2>
      <form className="row">
        <label className="col-12">
          UserID
          <br />
          <input
            type="text"
            placeholder="00000000"
            value={inputUserId}
            onChange={(event) => {
              setInputUserId(event.target.value);
            }}
          />
        </label>

        <label className="col-12">
          Password
          <br />
          <input
            type="text"
            placeholder="********"
            value={inputPassword}
            onChange={(event) => {
              setInputPassword(event.target.value);
            }}
          />
        </label>
      </form>
    </section>
  );

  return (
    <div className="eyesome-modal">
      <div className="payment-container">
        <header>
          <h2>Payments</h2>
          <button
            type="button"
            className="payment-cross-button"
            onClick={() => {
              updateDisplayPayment(false);
            }}
          >
            X
          </button>
        </header>
        <section>
          <li>
            <label htmlFor="credit">
              <input
                type="radio"
                id="credit"
                name="paymentMethod"
                onChange={() => {
                  setDisplayCredit(true);
                  setDisplayUpi(false);
                  setDisplayDebit(false);
                  setDisplayNetBanking(false);
                }}
              />
              Credit Card
            </label>
            {displayCredit && renderCardDetailsView()}
          </li>
          <li>
            <label htmlFor="debit">
              <input
                type="radio"
                id="debit"
                name="paymentMethod"
                onChange={() => {
                  setDisplayDebit(true);
                  setDisplayCredit(false);
                  setDisplayUpi(false);
                  setDisplayNetBanking(false);
                }}
              />
              Debit Card
            </label>
            {displayDebit && renderCardDetailsView()}
          </li>
          <li>
            <label htmlFor="netBanking">
              <input
                type="radio"
                id="netBanking"
                name="paymentMethod"
                onChange={() => {
                  setDisplayNetBanking(true);
                  setDisplayDebit(false);
                  setDisplayCredit(false);
                  setDisplayUpi(false);
                }}
              />
              Net Banking
            </label>
            {displayNetBanking && renderNetBankingView()}
          </li>
          <li>
            <label htmlFor="cod">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                onChange={() => {
                  setDisplayNetBanking(false);
                  setDisplayDebit(false);
                  setDisplayCredit(false);
                  setDisplayUpi(false);
                }}
                defaultChecked
              />
              Cash On Delivery
            </label>
          </li>
        </section>
        <footer>
          <h2>৳ {total}</h2>
          <button
            type="button"
            className="payment-confirm-button"
            onClick={() => {
              updateDisplayPayment(false);
              updatePaymentSuccess(true);
            }}
          >
            Pay Now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPage;
