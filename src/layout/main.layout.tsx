import { Outlet } from "react-router-dom"; 
import AppFooter from "./includes/footer/appFooter";
import AppHeader from "./includes/header/appHeader";

const AppLayout = () => {
  return (<div>
    <AppHeader/>
      <Outlet />
    <AppFooter />
  </div>
  )
}

export default AppLayout;