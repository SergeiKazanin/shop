import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesMenu from "./components/CategoriesMenu";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-700 text-neutral-400 font-monserat text-xl">
      <div className="w-full h-full flex flex-col bg-neutral-700 max-w-screen-lg mx-auto">
        <Header />
        <UserForm />
        <div className="flex-1 flex bg-neutral-700">
          <CategoriesMenu />
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
