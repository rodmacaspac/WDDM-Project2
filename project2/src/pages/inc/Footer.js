

import {useState} from 'react';

const Footer = () => {

   const [mouseEventOutput,setMouseEventOutput] = useState("");
   const [mouseEventClickCount,setmouseEventClickCount] = useState(1);

   const mouseEventOver = () => {
          console.log("onMouseEnter");
          let mouseEventOutput = "<p>Mouse over event detected.</p>";
          setMouseEventOutput(prevState  => prevState + mouseEventOutput )
    }
    const mouseEventOut = () => {
         console.log("onMouseLeave");
         let mouseEventOutput = "<p>Mouse out event detected.</p>";   
         setMouseEventOutput(prevState  => prevState + mouseEventOutput )     
    }
    const mouseEventClick = () => {
        setmouseEventClickCount(c => c + 1);
        let mouseEventClickCountHtml = `<p>Mouse clicked ${mouseEventClickCount} times.</p>`;
        setMouseEventOutput(prevState  => prevState + mouseEventClickCountHtml )
    }

    return (
        <>
         <footer>
            <button className="timeButton" id="mouseEventButton"  
                    onMouseEnter={mouseEventOver}
                    onMouseLeave={mouseEventOut}
                    onClick={mouseEventClick}
                    >Various Mouse Events</button>
            <div className="output allinfo" id="mouseEventOutput" dangerouslySetInnerHTML={{ __html: mouseEventOutput }}></div>
         </footer>
        </>
    )
}
export default Footer;