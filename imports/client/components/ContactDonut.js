import React from 'react';
import './ContactDonut.css';

class ContactDonut extends React.Component {
    render() {
        return(

            <div className="donut-contact">

                <div className="donut-contact-container">


                    <p>Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Vitae purus faucibus ornare suspendisse sed. Molestie at elementum eu facilisis sed odio morbi. </p>

                    <div className="phone-button">

                        <p>+008 045 0477 045</p>

                        <table className="Subscribe">

                        <tr className="Email-button">

                            <th className="Email"><input type="text" placeholder="Email"></input></th>
                            <th className="button-Subscribe"><button type="submit">Subscribe</button></th>

                        </tr>
                        
                        </table>

                    </div>

                    <div className="donut-trademark">

                        <h1>donut</h1>
                        <p>&trade;</p>

                    </div>

                </div>

            </div>

        );
    }
}

export default ContactDonut;