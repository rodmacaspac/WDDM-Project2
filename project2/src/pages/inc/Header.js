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
                    <img src={navImage} className="Navigation" alt="description of image"/>
                    <img src="Assets/Word logo.png" className="Word-logo" alt="description of image"/>
                    <img src="Assets/SKIN logo.png" className="SKIN-logo" alt="description of image"/> 
    
                    {/* <!-- Nav bar link to other pages --> */}
                    <div className="clicks">
                        <Link  to="/" onClick={() => setNavImage("Assets/Navigation.png")}  className="main">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link >
                        <Link  to="/services" onClick={() => setNavImage("Assets/Navigation-services.png")}  className="services">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</Link >
                        <a href="Concerns.html" className="concerns">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</a>
                        <a href="Products.html" className="products">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</a>
                        <a href="ContactUs.html" className="contact">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</a>
                    </div>
                    
                </nav>
            </div>
           </header>
          </>
    )
}
export default Header;

