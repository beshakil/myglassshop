import { BrowserRouter, Routes, Route, matchPath, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Products from "./components/Products";
import ProductDetailsCard from "./components/ProductDetailsCard";
import Profile from "./components/Profile";
import ErrorCard from "./components/ErrorCard";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import CheckoutPage from "./components/CheckoutPage";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {

  // Determine if Navbar should be displayed based on current path
  // const showNavbar = location.pathname !== "/login" && location.pathname !== "/signup";

  const location = useLocation();
  const showNavbar = location.pathname !== "/login" && location.pathname !== "/signup";
  const showFooter = location.pathname !== "/login" && location.pathname !== "/signup";
  return (
    <Provider store={store}>
        {showNavbar && <Navbar />}
        <div className="main-container">
          <div className="responsive-container">
            <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/signup" element={<SignUpPage />} />
              <Route
                exact
                path="/"
                element={
                  <Home />
                }
              />
              <Route
                exact
                path="/products"
                element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/product/:id"
                element={
                  <ProtectedRoute>
                    <ProductDetailsCard />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/not-found"
                element={
                  <ProtectedRoute>
                    <ErrorCard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
        {showFooter && <Footer />}
    </Provider>
  );
}

export default App;
