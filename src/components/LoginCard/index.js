import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import "./index.css";

const LoginCard = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checkLogin, setCheckLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const usersList = useSelector((state) => state.usersList);

  console.log(usersList);

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    if (emailInput !== "" && passwordInput !== "") {
      if (
        usersList.some(
          (user) => emailInput === user.email && passwordInput === user.password
        )
      ) {
        setErrorMsg("");
        const loginButton = document.getElementById("loginButton");
        loginButton.textContent = "Logging In...";
        loginButton.style.backgroundColor = "#9af775";
        loginButton.style.fontWeight = "bolder";
        Cookies.set("jwtToken", "verified");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setErrorMsg("Email OR Password are invalid");
      }
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>

      {/* <form className="login-form bg-white shadow-sm" onSubmit={submitForm}>
      <h1>Login to Your Account</h1>
      <label htmlFor="signUpEmail">Email</label>
      <input
        type="email"
        id="signUpEmail"
        value={emailInput}
        onChange={(event) => setEmailInput(event.target.value)}
        required
      />
      <label htmlFor="signUpPassword">Password</label>
      <input
        type="password"
        id="signUpPassword"
        value={passwordInput}
        onChange={(event) => setPasswordInput(event.target.value)}
        required
      />
      {errorMsg !== "" && <p className="login-error-msg">{errorMsg}</p>}
      <button type="submit" id="loginButton" className="login-button">
        Login
      </button>
      <button
        type="button"
        className="guest-button"
        onClick={() => {
          setEmailInput("shakil@gmail.com");
          setPasswordInput("shakil@123");
        }}
      >
        Login as Guest
      </button>
      <p
        className="create-account-text"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Create New Account
      </p>
    </form> */}
      <section className="px-7 py-10 rounded-md shadow-md bg-white/70 flex flex-col gap-6 w-full max-w-lg">
        <Link to="/">
            <h1 className="login-page-logo text-3xl">myglass</h1>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-3">Login to your account</h1>
          <form className="flex flex-col gap-3" onSubmit={submitForm}>
            <label className="flex flex-col">
              Email
              <input
                type="email"
                className="border rounded-md p-1.5 shadow-sm"
                id="signUpEmail"
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col">
              Password
              <input
                type="password"
                className="border rounded-md p-1.5 shadow-sm"
                id="signUpPassword"
                value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
                required
              />
            </label>
            {errorMsg !== "" && <p className="login-error-msg">{errorMsg}</p>}
            <div className="w-full py-2 flex flex-col gap-4 items-center">
              <button type="submit" id="loginButton" className="login-button bg-[#111827] hover:bg-[#1F2937] text-white px-10 pt-2 pb-1.5">
                Login
              </button>
              <button
                type="button"
                className="guest-button border border-black px-10 pt-2 pb-1.5"
                onClick={() => {
                  setEmailInput("shakil@gmail.com");
                  setPasswordInput("shakil@123");
                }}
              >
                Login as Guest
              </button>
              <Link to="/signup" className="underline text-gray-600">
                Create New Account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>

  );
};

export default LoginCard;
