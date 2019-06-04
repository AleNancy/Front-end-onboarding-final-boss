import React, {Component} from 'react';
import Header from '../../components/Header';
import Login from '../users/Login';
import Register from '../users/Register';
import './Home.css';
import PresentationDonuts from '../../components/PresentationDonuts';
import TextDescriptionDonuts from '../../components/TextDescriptionDonuts';
import DonutsCreate from '../donuts/DonutsCreate';
import DonutsList from '../donuts/DonutsList';
import ListsDonuts from '../../components/ListsDonuts';
import ContactDonut from '../../components/ContactDonut';

class Home extends Component {
    render() {
        return (
            <main className="Home">

                <Header />

                <div className="Login-Register">

                    <div className="Login-Register-container">

                        <Login />
                        <Register />
                        
                    </div>
                </div>

                <PresentationDonuts />
                <TextDescriptionDonuts />
                <DonutsCreate />
                <ListsDonuts />
                <ContactDonut />


            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
