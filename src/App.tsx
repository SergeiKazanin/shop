import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesMenu from "./components/CategoriesMenu";

function App() {
  return (
    <div className="flex flex-col w-full h-screen  bg-stone-400 font-monserat text-xl">
      <div className="h-full w-full max-w-screen-lg mx-auto">
        <Header />
        <CategoriesMenu />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
