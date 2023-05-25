import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesMenu from "./components/CategoriesMenu";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="w-full h-screen bg-stone-400 font-monserat text-xl">
      <div className="w-full h-full flex flex-col bg-stone-400 max-w-screen-lg mx-auto">
        <Header />
        <UserForm />
        <CategoriesMenu />
        <div className="flex-1 bg-stone-400 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
