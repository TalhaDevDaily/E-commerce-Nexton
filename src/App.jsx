import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { CheckOut } from "./pages/CheckOut";
import ProductDetails from "./pages/ProductDetails";
import LocalStorage from "./pages/LocalStorage";

const App = () => {
  const pageRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/product-details/:product" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/local" element={<LocalStorage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
};

export default App;
