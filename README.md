<h1 align="center" id="title">Welcome to the "Myglass Shop"</h1>

<h2>🚀 Demo: https://myglassshop.vercel.app/</h2>

<p align="center">
    <img src="https://i.ibb.co/1R0WdCL/My-Glass-Shop.png" alt="project-screenshot">
</p>

### Introduction

In this project, I build a **Myglass App** similar to Lenskart - Clone.
Myglass App is your one-stop destination for all your eyewear needs, bringing the convenience of online shopping to the world of eyewear. Inspired by the success of Lenskart, Myglass App offers a seamless and user-friendly e-commerce platform designed for purchasing eyewear online. Whether you're looking for stylish eyeglasses, fashionable sunglasses, Myglass App has you covered.

This README provides essential information about Myglass App, guiding you through its features, installation, and usage. For a user looking to make the most of the app, this document serves as your comprehensive guide.
<br />
<details>
    <summary>Route Names</summary>
<br />

- Login Route
- Signup Route
- Home Route
- Products Route
- Product Details Route
- Cart Route
- Wishlist Route
- Profile Route
- Checkout Route
- Error Route

</details>
<br />

<details>
    <summary>Tech Stack Used / Third Party Libraries</summary>
<br />

- HTML
- CSS
- JavaScript
- JSX
- React JS
- Redux Toolkit
- React Router
- React Hooks
- Fetch
- Bootstrap / React Bootstrap
- React Icons
- js-cookies
- Git version control
- Netlify
- uuid

</details>
<br />

<details>
    <summary>Approach to Develop the App</summary>
<br />

- **Project Setup:**

  - Used a tool Create React App to set up a new React.js project.
  - Install the necessary dependencies, including Redux Toolkit, React Redux, React Router and other relevant packages.

- **Design and Wireframing:**

  - Started by creating wireframes or mockups for mobile app's user interface. This helped me plan the layout and design.
  - I prioritize a clean and intuitive design for small screens, ensuring a seamless user experience on mobile devices.

- **Mobile-First Component Development:**

  - Developed individual React components with a mobile-first mindset. Started with the smallest screen size (e.g., mobile phones) and progressively enhance for larger screens (tablets and desktops).
  - Utilized responsive design techniques, such as CSS media queries, to adjust component layouts and styles for different screen sizes.

- **Responsive Styling:**

  - Implemented a mobile-first approach in styles by defining the default styles for mobile screens and then using media queries to apply styles for larger screens.

- **React Router for Navigation:**

  - Implemented React Router to handle navigation within the app.
  - Defined routes and route components, ensuring that the navigation flows smoothly on both small and large screens.

- **Redux Setup and State Management:**

  - Configured the Redux store using Redux Toolkit. Created slices to manage different parts of the application's state such as userSlice, CartSlice, wishlistSlice, usersListSlice, filtersSlice, productsSlice, productDetailsSlice etc.
  - Created different methods to add, remove, update, delete the different states.

- **API Integration:**

  - Used HTTP fetch method to connect the mobile app to the backend API for fetching data and performing CRUD operations.
  - Implemented Redux actions and reducers to manage the application's data flow.
  - Here in this case used fake API's to fetch the data and based on response status (pending, success, failure) implemented the locally available data to render the UI.

- **Debugging and Debug Tools:**

  - Used browser developer tools and React DevTools for debugging and inspecting component states.
  - Implemented logging and error handling to catch and handle issues gracefully.

- **Deployment:**

  - Prepared the app for deployment by configuring build scripts, optimizing assets, and setting up a production environment.
  - Choosed a hosting platform Netlify for deploying Myglass App.

</details>
<br />

<details>
    <summary>Functionality</summary>
<br />

- Following are the features implemented to the app

- **Feature 1**

  - When an unauthenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the Login Route using the protected route
  - When an authenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the respective route using the protected route

- **Feature 2**

  - When an authenticated user opens the Products Route,
    - An HTTP GET request should be made to productsApiUrl and parameters gender="All", priceRange=4999, category as empty array, rating, priceSort, searchInput, with initial values as empty strings
    - loader should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
    - If the HTTP GET request made is unsuccessful, then the Failure view should be displayed
    - Make an HTTP GET request to the URL productsApiUrl with query parameter category with value as the id of the category clicked
    - loader should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
    - When the Rating/Gender/Price Range/Search Input is changed products should be filtered based on the values of the mentioned variables.
    - When the Clear Filters button is clicked all the filters applied should be reset to initial values
    - If the HTTP GET request made is unsuccessful, then the Failure view should be displayed

- **Feature 3**

  - When an authenticated user opens the Cart Route and tries to add the same product multiple times
    - The quantity of the product should be updated accordingly, and the count of the cart items in the header should be remained same
  - The total amount and number of items in the cart should be displayed in the **Cart** Route
  - In each cart item in the cart
    - When the plus icon is clicked, then the quantity of the product should be incremented by one
    - When the minus icon is clicked, then the quantity of the product should be decremented by one
    - When the quantity of the product is one and the minus icon is clicked, then the respective product should be removed from the cart
    - When wishlist icon clicked, then product should be added to the wishlist and icon should change to red coloured icon
    - Based on the quantity of the product, the product price and the Cart Summary, i.e the total cost should be updated accordingly
  - When an authenticated user clicks on the remove button, cart item should be removed from the cart list

- **Feature 4**

  - When an unauthenticated user, tries to access the Product Details Route, then the page should be navigated to Login Route
  - When an authenticated user clicks on a product in the Products Route, then the page should be navigated to Product Details route
  - When an authenticated user opens the Product Details Route,
    - An HTTP GET request should be made to productDetailsApiUrl with product id as path parameter
    - loader should be displayed while fetching the data
    - After the data is fetched successfully, display the product details
    - If the HTTP GET request made is unsuccessful, then the Failure view should be displayed
    - When the Explore button in the Failure view is clicked, then the page should be navigated to Products Route
    - When Add to Cart button is clicked product should be added to cart and cart product count should be incremented and displayed over cart icon and button text should be change to Go to Cart
    - When Add to Wishlist Item button is clicked product should be added to wishlist and wishlist product count should be incremented and displayed over wishlist icon and button text should be change to Remove from Wishlist

- **Feature 5**

  - When an unauthenticated user tries, to access the Checkout Route, then the page should be navigated to Login Route
  - When an authenticated user clicks on Add Address button an address form should be displayed.
  - After filling the appropriate values and Save button is clicked new address should be added to address list and selected by default address.
  - When Fill Dummy Values button is clicked, then preset values should be filled in the address form, then Save button is clicked new address should be added to address list and selected by default address.
  - When Cancle button is clicked, then address form disappeared from the route.
  - When Place Order button is clicked, then Order Summary pop-up is displayed, further if Confirm Order is clicked, then Payment pop-up is displayed.
  - Within Payment pop-up multiple payment options selecting particular payment option and filling in the details and clicking Pay Now button, a payment success pop-up is displayed.

</details>

<br />
