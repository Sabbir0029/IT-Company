import React from 'react';
import AboutUs from '../../AboutUS/AboutUs';
import OurServices from '../../OurServices/OurServices';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs></AboutUs>
            <OurServices/>
        </div>
    );
};

export default Home;