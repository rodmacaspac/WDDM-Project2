import React from 'react';
import './MyStyle.css';
import navigation from './Assets/Navigation.png'
import word from './Assets/Word logo.png'
import skin from './Assets/SKIN logo.png'
import model from './Assets/Home model.png'

const App = () => {
    return (
        <div className="Rectangle-21">
            <header>
                <div className="navi">

                    <nav>

                        <img src={navigation} alt="Navigation" className="Navigation" />
                        <img src={word} alt="Word Logo" className="Word-logo" />
                        <img src={skin} alt="SKIN Logo" className="SKIN-logo" />

                        <div className="clicks">
                            <a href="Index.html" className="main">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a href="Services.html" className="services">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a href="Concerns.html" className="concerns">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a href="Products.html" className="products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a href="ContactUs.html" className="contact">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        </div>


                    </nav>
                </div>
            </header>

            <div>
                <div className="Rectangle-22">
                    <img src={model} alt="Home Model" className="Home-model" />
                    <span className="Your-hub-for-All-Skin-Care-Treatments">
                        YOUR HUB <br />
                        FOR ALL <br />
                        SKIN CARE <br />
                        TREATMENTS <br/>

                        
                        <span className="TESTIMONIALS">
                            TESTIMONIALS
                        </span>
                    </span>

                    

                </div>
            </div>

        </div>
    );
}

export default App;