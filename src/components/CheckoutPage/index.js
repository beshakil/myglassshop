import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { dummyAddress } from "../../eyesomeData";
import { addAddressItem, setPrimaryAddress } from "../../store/userSlice";
import { v4 as uuidv4 } from "uuid";
import ErrorCard from "../ErrorCard";

import "./index.css";
import PaymentPage from "../PaymentPage";
import PaymentSuccessCard from "../PaymentSuccessCard";

const CheckoutPage = () => {
  const [id, setId] = useState(uuidv4());
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDisplayPayment, setShowDisplayPayment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { primaryAddress, addressList } = user;
  const cartProducts = useSelector((state) => state.cart);
  let total = 0;
  let totalProduct = 0;
  let totalDiscount = 0;
  let subtotal = 0;
  cartProducts.forEach((product) => {
    total += product.qty * product.newPrice;
    totalProduct += product.qty;
    totalDiscount += product.qty * (product.price - product.newPrice);
    subtotal += product.qty * product.price;
  });

  const updateDisplayPayment = (value) => {
    setShowDisplayPayment(value);
  };

  const updatePaymentSuccess = (value) => {
    setShowPaymentSuccess(value);
  };

  const submitAddressForm = (event) => {
    event.preventDefault();
    const newAdd = {
      id,
      name: fullName,
      mobile,
      firstLine: addressLine1,
      secondLine: addressLine2,
      city,
      pincode,
    };

    dispatch(setPrimaryAddress(newAdd));

    if (addNewAddress) {
      dispatch(addAddressItem(newAdd));
    }

    cancelAddAddress();
  };

  const setDummyValues = () => {
    setId(uuidv4());
    setFullName(dummyAddress.fullName);
    setMobile(dummyAddress.mobile);
    setAddressLine1(dummyAddress.addressLine1);
    setAddressLine2(dummyAddress.addressLine2);
    setCity(dummyAddress.city);
    setPincode(dummyAddress.pincode);
  };

  const setNullValues = () => {
    setId(uuidv4());
    setFullName("");
    setMobile("");
    setAddressLine1("");
    setAddressLine2("");
    setCity("");
    setPincode("");
  };

  const cancelAddAddress = () => {
    setNullValues();
    setAddNewAddress(false);
  };

  const renderAddressForm = () => (
    <form onSubmit={submitAddressForm} className="address-form">
      <section className="input-name">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          required
        />
      </section>
      <section className="input-mobile">
        <label htmlFor="mobile" className="form-label">
          Mobile
        </label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}
          required
        />
      </section>
      <section className="input-address">
        <label htmlFor="addressLine1" className="form-label">
          Flat,House No, Building
        </label>
        <input
          type="text"
          id="addressLine1"
          value={addressLine1}
          onChange={(event) => {
            setAddressLine1(event.target.value);
          }}
          required
        />
      </section>
      <section className="input-address">
        <label htmlFor="addressLine2" className="form-label">
          Area, Colony, Street
        </label>
        <input
          type="text"
          id="addressLine2"
          value={addressLine2}
          onChange={(event) => {
            setAddressLine2(event.target.value);
          }}
          required
        />
      </section>
      <section className="input-city">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
          required
        />
      </section>
      <section className="input-pincode">
        <label htmlFor="pincode" className="form-label">
          Pincode
        </label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={(event) => {
            setPincode(event.target.value);
          }}
          required
        />
      </section>
      <div className="address-form-buttons-container">
        {addNewAddress && (
          <button
            type="button"
            className="address-form-button"
            onClick={setDummyValues}
          >
            Fill Dummy Values
          </button>
        )}
        <button
          type="button"
          className="address-form-button"
          onClick={cancelAddAddress}
        >
          Cancel
        </button>
        <button type="submit" className="address-form-button">
          Save
        </button>
      </div>
    </form>
  );

  const renderUserAddress = () => (
    <>
      <h1 className="checkout-container-address">Address</h1>
      <button
        type="button"
        className="profile-add-address-button mt-0"
        onClick={() => {
          setAddNewAddress(true);
        }}
      >
        + Add New Address
      </button>
      {addNewAddress && renderAddressForm()}
      {addressList &&
        addressList.map((address) => (
          <li key={address.id} className="address-card mb-3 !bg-[#F9FAFB]">
            <input
              type="radio"
              id={address.id}
              name="address"
              checked={address.id === primaryAddress.id}
              onChange={() => {
                dispatch(setPrimaryAddress(address));
              }}
            />
            <div className="d-flex flex-column">
              <label htmlFor={address.id} className="address-label">
                <h3>{address.name}</h3>
                <p>
                  {address.firstLine}, {address.secondLine}
                </p>
                <p>
                  {address.city}, {address.pincode}
                </p>
                <p>
                  Mobile: <span>{address.mobile}</span>
                </p>
              </label>
            </div>
          </li>
        ))}
    </>
  );

  const renderOrderSummary = () => (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id} className="order-summary-product mb-3">
            <img src={product.image} alt={product.name} />
            <section>
              <div>
                <p className="order-summary-product-title">{product.name}</p>
                <p className="order-summary-product-title">
                ৳ {product.newPrice}
                  <del>৳ {product.price}</del>
                </p>
              </div>
              <p className="order-summary-product-title">x{product.qty}</p>
            </section>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <p>Total Products</p>
        <span>{totalProduct}</span>
      </div>
      <div>
        <p>Subtotal</p>
        <span>৳ {subtotal}</span>
      </div>
      <div>
        <p>Discount</p>
        <span>-৳ {totalDiscount}</span>
      </div>
      <div>
        <p>Delivery Charges</p>
        <span>Free</span>
      </div>
      <hr />
      <div>
        <p className="order-summary-total">Total</p>
        <span className="order-summary-total">৳ {total}</span>
      </div>
      <button
        type="button"
        className="bill-checkout-button"
        onClick={() => {
          setShowConfirm(true);
        }}
      >
        Place Order
      </button>
    </div>
  );

  const renderConfirmOrderCard = () => (
    <div className="eyesome-modal">
      <div className="confirm-order-card">
        <header>
          <h2>Order Summary</h2>
          <button
            type="button"
            className="confirm-order-cross-button"
            onClick={() => {
              setShowConfirm(false);
            }}
          >
            X
          </button>
        </header>
        <hr />
        <div className="p-2 confirm-order-card-details">
          <h1 className="confirm-order-card-address-title">Address</h1>
          <section className="confirm-order-card-address">
            <h3>{primaryAddress.name}</h3>
            <p>
              {primaryAddress.firstLine}, {primaryAddress.secondLine}
            </p>
            <p>
              {primaryAddress.city}, {primaryAddress.pincode}
            </p>
            <p>
              Mobile: <span>{primaryAddress.mobile}</span>
            </p>
          </section>
          <hr />
          <div>
            <p>Total Products</p>
            <span>{totalProduct}</span>
          </div>
          <div>
            <p>Subtotal</p>
            <span>৳ {subtotal}</span>
          </div>
          <div>
            <p>Discount</p>
            <span>-৳ {totalDiscount}</span>
          </div>
          <div>
            <p>Delivery Charges</p>
            <span>Free</span>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <span>৳ {total}</span>
          </div>
        </div>
        <button
          type="button"
          className="bill-checkout-button"
          onClick={() => {
            setShowConfirm(false);
            setShowDisplayPayment(true);
          }}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );

  if (cartProducts.length === 0) {
    return <ErrorCard />;
  }

  return (
    <div className="checkout-container">
      <section>{renderUserAddress()}</section>
      <section>{renderOrderSummary()}</section>
      {showConfirm && renderConfirmOrderCard()}
      {showDisplayPayment && (
        <PaymentPage
          updateDisplayPayment={updateDisplayPayment}
          updatePaymentSuccess={updatePaymentSuccess}
        />
      )}
      {showPaymentSuccess && (
        <PaymentSuccessCard updatePaymentSuccess={updatePaymentSuccess} />
      )}
    </div>
  );
};

export default CheckoutPage;
