import React from 'react';
import AboutUs from '../../AboutUS/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';
import OurServices from '../../OurServices/OurServices';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs></AboutUs>
            <OurServices/>
            <ContactUs/>
        </div>
    );
};

export default Home;