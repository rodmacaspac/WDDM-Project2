
const ContactUs = () => {
    return (
        <>
            <div className="Rectangle-22">
                <div className="get-in">
                    <span className="GET-IN-TOUCH">
                        GET IN TOUCH
                    </span>
                </div>

                <div className="row-1">
                    <div className="cont-us-div">
                        <span className="CONTACT-US">
                            CONTACT US:
                        </span>
                        <span className="contact-deets">
                            <br />
                            For all inquiries including Consultation, <br/>Analysis, Treatment, Skincare, <br/>and Customer Service please call us,<br/> email us, or use the contact form below.
                        </span>
                    </div>
                    
                    <div className="visit-us-div">
                        <span className="VISIT-US">
                            VISIT US:
                        </span>
                        <span className="addr">
                            725 Groud flr. MEGALL, Julia vargas Mandaluyong, Philippines.
                        </span>
                        <span className="mon">
                            MON - SAT : 9AM - 10PM
                        </span>
                        <span className="sun">
                            SUN : 10AM - 5PM
                        </span>
                    </div>
                </div>

                <div className="row-2">
                    <span className="PHONE">
                        PHONE:
                    </span>
                    <div className="phone-div">
                        <span className="phone-num">
                            +1 (437) 234 5678
                        </span>
                        <label htmlFor="fname">Enter your first name for inquiry:</label>
                        <input type="text" id="fname" onInput={(e) => e.target.value = e.target.value.toUpperCase()} />
                        <label htmlFor="lname">Enter your last name:</label>
                        <input type="text" id="lname" onFocus={(e) => e.target.style.background = "yellow"} />
                    </div>
                    <h4 onMouseOver={(e) => e.target.style.color='red'} onMouseOut={(e) => e.target.style.color='black'}>
                    Skin Philippines - A name you can trust!
                </h4>
                </div>

               
            </div>
        </>
    );  
}

export default ContactUs;
