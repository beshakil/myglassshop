import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useState, useEffect } from "react";
import { dummyAddress } from "../../eyesomeData";
import {
  addAddressItem,
  removeAddressItem,
  editAddressItem,
  setPrimaryAddress,
} from "../../store/userSlice";
import { v4 as uuidv4 } from "uuid";

import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTabId, setActiveTabId] = useState("profile");
  const [id, setId] = useState(uuidv4());
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { username, email, primaryAddress, addressList } = user;
  const navigate = useNavigate();

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
    } else if (editAddress) {
      dispatch(editAddressItem(newAdd));
    }

    cancelAddAddress();
  };

  const onClickButton = (event) => {
    document.getElementById(activeTabId).classList.remove("profile-active");
    event.target.classList.add("profile-active");
    setActiveTabId(event.target.id);
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
    setEditAddress(false);
  };

  const setEditAddressValues = (address) => {
    setId(address.id);
    setFullName(address.name);
    setMobile(address.mobile);
    setAddressLine1(address.firstLine);
    setAddressLine2(address.secondLine);
    setCity(address.city);
    setPincode(address.pincode);
  };

  const logoutUser = () => {
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.textContent = "Logging Out...";
    logoutButton.style.fontWeight = "bolder";
    Cookies.remove("jwtToken");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const renderUserProfile = () => (
    <div className="profile-details">
      <p className="profile-username">
        <span>Username: </span>
        {username}
      </p>
      <p className="profile-username pb-4">
        <span>Email: </span>
        {email}
      </p>
      <hr />
      <button
        type="button"
        id="logoutButton"
        className="profile-logout-button"
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );

  const renderUserAddress = () => (
    <>
      <button
        type="button"
        className="profile-add-address-button"
        onClick={() => {
          setAddNewAddress(true);
        }}
      >
        + Add New Address
      </button>
      {(editAddress || addNewAddress) && renderAddressForm()}
      {addressList &&
        addressList.map((address) => (
          <li key={address.id} className="address-card">
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
              <div>
                <button
                  type="button"
                  className="address-button address-update"
                  onClick={() => {
                    setEditAddressValues(address);
                    setEditAddress(true);
                  }}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="address-button address-remove"
                  onClick={() => {
                    dispatch(removeAddressItem(address.id));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </>
  );

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

  return (
    <div className="profile-container">
      <section className="profile-buttons-container">
        <button
          type="button"
          className="profile-button profile-active"
          id="profile"
          onClick={onClickButton}
        >
          Profile
        </button>
        <button
          type="button"
          className="profile-button"
          id="address"
          onClick={onClickButton}
        >
          Address
        </button>
      </section>
      {activeTabId === "profile" && renderUserProfile()}
      {activeTabId === "address" && renderUserAddress()}
    </div>
  );
};

export default Profile;
