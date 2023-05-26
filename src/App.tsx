import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesMenu from "./components/CategoriesMenu";
import UserForm from "./components/UserForm";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useActions } from "./hooks/actions";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { snakeOn } = useActions();
  const { snake } = useAppSelector((store) => store.shop);

  return (
    <div className="w-full min-h-screen bg-neutral-700 text-neutral-400 font-monserat text-xl">
      <div className="w-full min-h-screen flex flex-col bg-neutral-700 max-w-screen-lg mx-auto">
        <Header />
        <UserForm />
        <div className="flex flex-1 bg-neutral-700">
          <CategoriesMenu />
          <Outlet />
        </div>
        <Footer />
        <Snackbar
          open={snake}
          autoHideDuration={3000}
          onClose={() => snakeOn(false)}
        >
          <Alert severity="success">Success</Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default App;
