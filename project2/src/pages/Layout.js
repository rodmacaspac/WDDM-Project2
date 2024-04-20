import { Outlet, Link } from "react-router-dom";
import Header from "./inc/Header";

const Layout = () => {
    return (
        <>
          <div className="Rectangle-21">
             <Header />
               <Outlet />           
          </div>        
        </>
    )  
}  

export default Layout;