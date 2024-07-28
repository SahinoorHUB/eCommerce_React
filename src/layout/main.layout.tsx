import { Outlet } from "react-router-dom"; 
import AppFooter from "./includes/footer/appFooter";
import AppHeader from "./includes/header/appHeader";
import cartStore from "../store/cart.store";
import { useEffect } from "react";

const AppLayout = () => {
  const { refreshCart } = cartStore();

  useEffect(() => {
    refreshCart()
  }, [])
  
  return (<div>
    <AppHeader/>
      <Outlet />
    <AppFooter />
  </div>
  )
}

export default AppLayout;