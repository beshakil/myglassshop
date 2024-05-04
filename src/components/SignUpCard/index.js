import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../store/userSlice";
import { addUser } from "../../store/usersListSlice";

import "./index.css";

const SignUpCard = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    if (
      usernameInput !== "" &&
      emailInput !== "" &&
      passwordInput !== "" &&
      confirmPasswordInput !== ""
    ) {
      if (passwordInput === confirmPasswordInput) {
        setErrorMsg("");
        const createAccountButton = document.getElementById(
          "createAccountButton"
        );
        createAccountButton.textContent = "Creating Account...";
        createAccountButton.style.backgroundColor = "#073324";
        createAccountButton.style.fontWeight = "bolder";
        Cookies.set("jwtToken", "verified");
        const newUser = {
          id: uuidv4(),
          username: usernameInput,
          email: emailInput,
          password: passwordInput,
        };

        dispatch(setActiveUser(newUser));
        dispatch(addUser(newUser));

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setErrorMsg("Password is not same");
      }
    }
  };

  return (
    <>
      <section className="px-10 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
        <Link to="/">
          <h1 className="login-page-logo text-3xl">myglass</h1>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Sign up</h1>
          <form onSubmit={submitForm} className="flex flex-col gap-4 py-3">
            <label className="flex flex-col">
              <input
                type="text"
                required
                placeholder="Username"
                className="border rounded-md p-1.5 shadow-sm"
                value={usernameInput}
                onChange={(event) => setUsernameInput(event.target.value)} />
            </label>
            <label className="flex flex-col">
              <input
                className="border rounded-md p-1.5 shadow-sm"
                type="email"
                placeholder="Email"
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col relative">
              <input
                className="border rounded-md p-1.5 shadow-sm"
                type="password"
                placeholder="Password"
                value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col relative">
              <input
                className="border rounded-md p-1.5 shadow-sm"
                type="password"
                placeholder="Confirm Password"
                value={confirmPasswordInput}
                onChange={(event) => setConfirmPasswordInput(event.target.value)}
                required
              />
            </label>
            {errorMsg !== "" && <p className="sign-up-error-msg">{errorMsg}</p>}
            <button type="submit" id="loginButton" className="login-button bg-[#111827] hover:bg-[#1F2937] text-white px-10 pt-2 pb-1.5">
              Create Account
            </button>
            <p className="login-text">
              Already Have an Account ?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpCard;
