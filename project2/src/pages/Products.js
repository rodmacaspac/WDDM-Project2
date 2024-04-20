import React from 'react';

const Products = () => {
    // Event handlers for mouse events
    const handleMouseDown = (event) => {
        event.target.style.backgroundColor = "#1ec5e5";
        event.target.innerHTML = "Visit us";
    }

    const handleMouseUp = (event) => {
        event.target.style.backgroundColor = "#D94A38";
        event.target.innerHTML = "Thank You";
    }

    // Function to display alert on page load
    React.useEffect(() => {
        alert("Page Load Successfully");
    }, []);

    return (
        <>
  
            <div className="Rectangle-22-products">
                <span className="title-products">PRODUCTS</span>

                {/* Mouse event div */}
                <div
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    className="mouse-event-div"
                >
                    Hello
                </div>

                <div>
                    <img src="Assets/Cleanser.png" alt="Cleanser" className="Cleanser" />
                </div>
                <div>
                    <img src="Assets/Serum.png" alt="Serum" className="Serum" />
                </div>
                <div>
                    <img src="Assets/Moisturiser.png" alt="Moisturiser" className="Moisturiser" />
                </div>
            </div>
        </>
    );
}

export default Products;
