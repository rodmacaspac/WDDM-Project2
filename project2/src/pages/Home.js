import {useState} from 'react';
const Home = () => {
      const [timeDemo,setTimeDemo] = useState("");
      const [details,setDetails] = useState("Click here for more details");

      const displayDate = () => {
            const currentTime = Date();
            setTimeDemo(currentTime); 
      }

      const showMoreDetails = () => {
            setDetails("Please go to Contact us tab for more details");
      }

      return (
            <>
                  <div>
                        <div className="Rectangle-22">
                              {/* <!--Added image on welcome page--> */}
                              <img src="Assets/Home model.png" className="Home-model" alt="description of image"/>

                              {/* <!-- Added Welcome page text --> */}
                              <span className="Your-hub-for-All-Skin-Care-Treatments">
                              YOUR HUB <br/>
                              FOR ALL <br/> 
                              SKIN CARE <br/>
                              TREATMENTS <br/> 
                        </span>
                        {/* <!--Muzzammil's Commitment No.1 (MouseEvent1)--> */}
                        <h5 onClick={showMoreDetails}>{details}</h5>
                              
                              {/* <!-- Added Testimonial page link --> */}
                              <a href="Testimonials.html">
                              <span className="TESTIMONIALS">
                              TESTIMONIALS
                              </span>
                              </a>
                        
                        </div>
                        {/* <!--Muzzammil's Commitment No.2 (MouseEvent2)--> */}
                              <p>Click the button to display current time.</p>
                              <button className= "timeButton" onClick={displayDate}>Show time</button>
                              <p id="timeDemo" className="timeDemo">{timeDemo}</p>
                  </div>

            </>
            );
}

export default Home;