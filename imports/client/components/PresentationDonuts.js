import React from 'react';
import './PresentationDonuts.css';


class PresentationDonuts extends React.Component {
    render() {
        return(

            <div className="Presentation_donuts">

                <div className="Presentation_donuts_container">

                    <img src="./images/presentation_donuts.jpg" alt="Logo"/>

                    <div className="Presentation-donuts-text">

                        <h1>Best donut in the city!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  
                        <div className="arrowBtn"></div>

                    </div>
                    
                </div>

            </div>

        );
    }
}

export default PresentationDonuts;