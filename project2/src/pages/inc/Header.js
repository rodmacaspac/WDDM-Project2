import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const  [navImage,setNavImage] = useState("Assets/Navigation.png");

    return(
          <>
           <header>
            <div className="navi">
                <nav>
                    {/* <!-- Added Logo on Navigation area --> */}
                    <img src={navImage} className="Navigation" alt="nav"/>
                    <img src="Assets/Word logo.png" className="Word-logo" alt="worl logo"/>
                    <img src="Assets/SKIN logo.png" className="SKIN-logo" alt="skin logo"/> 
    
                    {/* <!-- Nav bar link to other pages --> */}
                    <div className="clicks">
                        <Link  to="/" onClick={() => setNavImage("Assets/Navigation.png")}  className="main">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link >
                        <Link  to="/services" onClick={() => setNavImage("Assets/Navigation-services.png")}  className="services">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link >
                        <Link to="/concerns" onClick={() => setNavImage("Assets/Navigation-Concerns.png")}  className="concerns">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link>
                        <Link to="/products" onClick={() => setNavImage("Assets/Navigation-Products.png")} className="products">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link>
                        <Link to="/contact" onClick={() => setNavImage("Assets/Navigation-contact.png")} className="contact">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link>
                    </div>
                    
                </nav>
            </div>
           </header>
          </>
    )
}  
export default Header;

