import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Footer from './inc/Footer';
const Services = () => {

    const [heading1,setHeading1] = useState("");
    const [heading2,setHeading2] = useState("");
    const [heading3,setHeading3] = useState("");
    const [paragraph,setParagraph] = useState("");
    const [demo,setDemo] = useState("");
 
    useEffect(() => {
          console.log("useEffect Hook call");
          const currentTime = new Date();
          setTimeout(() => {
                setHeading1(currentTime.toLocaleTimeString());
                setHeading2(currentTime.toLocaleDateString());
                setHeading3(currentTime.toLocaleString());   
                setParagraph(currentTime.toString());    
                setDemo(currentTime.toTimeString());                  


          },1000)
  
      });

    return(
        <>
               <div className="Rectangle-22">
            
                    {/* <!-- added Services image links --> */}
                    <div className="services">
                        <Link  to="/targetedfacial">
                        <img src="Assets/Targeted Facials.png" className="Targeted-Facials" alt="TF"/>
                        </Link>

                        <img src="Assets/dermasound.png" className="dermasound" alt="DS"/>
                        
                        <Link  to="/microcurrent">
                        <img src="Assets/Microcurrent.png" className="Microcurrent" alt="MC"/>
                        </Link>
                        <img src="Assets/microbleeding.png" className="microbleeding" alt="MB"/>
                    </div>
                    
                    {/* <!-- Title for Services page --> */}
                    <span className="adv-skin-treat">
                    ADVANCED SKIN CARE TREATMENTS
                    </span>

                    
                    {/* <!-- Title for Services page --> */}
                    <div className="services-div">
                        <span className="services-desc">
                            SKIN MANILA provides you with a combination of customized skincare
        treatments and the most innovative technologies
                        </span>
                    </div>
                
                </div>    


                <div className="Rectangle-23">
                 {/* <!-- Vyomesh's Commitment - Different HTML Tags --> */}
                 <section id="media-section ">
                        <h2 className="media-section-title">Media Elements</h2>

                        <div className="allinone">
                        <video width="700" height="400" controls>
                              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                              <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
                              Your browser does not support the video tag.
                        </video>

                        <audio controls>
                              <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
                              Your browser does not support the audio element.
                        </audio>
                        </div>
                  </section>
                  </div>
                  <div className='allinfo'>
                        <h1 id="heading1" className="heading">{heading1}</h1>
                        <h2 id="heading2" className="heading">{heading2}</h2>
                        <h3 id="heading3" className="heading">{heading3}</h3>
                        <p id="paragraph" className="text">{paragraph}</p>
                        <span className="demo">{demo}</span>
                  </div>
                 
                  <Footer/>


        </>
    )
}

export default Services;

