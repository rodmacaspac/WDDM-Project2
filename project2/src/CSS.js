import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const MyComponentWrapper = styled.div`
    /* Your CSS styles here */
    max-width: 100%;
    overflow-x: hidden;
`;

const Rectangle21 = styled.div`
    width: 1440px;
    height: 1024px;
    padding: 33px 0 39px 22px;
    background-image: linear-gradient(306deg, #f9d3ab, #f9d6b0ee, #fff0);
    position: relative;
`;

// Define other styled components similarly

const YourHubText = styled.span`
    width: 725px;
    height: 352px;
    margin: 57px 500px 34px 0;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 96px;
    font-weight: 200;
    font-stretch: condensed;
    font-style: normal;
    line-height: 2.3cm;
    letter-spacing: 19.2px;
    text-align: left;
    color: #000;
    position: relative;
    animation: ${fadeInOut} 2s infinite alternate;
`;

const Testimonials = styled.span`
    width: 352px;
    height: 37px;
    margin: 34px 465px 171px 408px;
    font-family: "Questrial", sans-serif;
    font-size: 32px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 5cm;
    letter-spacing: 6.4px;
    text-align: left;
    color: #000;
    position: relative;
    text-decoration: underline;
`;

// Define other styled components similarly

const MyCSS = () => {
    return (
        <MyComponentWrapper>
            <Rectangle21>
                {/* Rest of your JSX */}
                <YourHubText>
                    YOUR HUB <br />
                    FOR ALL <br />
                    SKIN CARE <br />
                    TREATMENTS
                </YourHubText>

                <a href="Testimonials.html">
                    <Testimonials>
                        TESTIMONIALS
                    </Testimonials>
                </a>
            </Rectangle21>
            {/* Rest of your JSX */}
        </MyComponentWrapper>
    );
}

export default MyCSS;