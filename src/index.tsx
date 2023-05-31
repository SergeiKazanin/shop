import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import ProductsByCategory from "./pages/ProductsByCategory";
import ProductsBy050 from "./pages/ProductsBy050";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "categoryrand",
        element: <ProductsBy050 />,
      },
      {
        path: "category/:id/:p",
        element: <ProductsByCategory />,
      },

      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
