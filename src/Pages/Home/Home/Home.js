import React from 'react';
import Banner from '../Banner/Banner';
import BestSell from '../BestSell/BestSell';
import Facilities from '../Facillities/Facilities';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Services></Services>
            <Facilities></Facilities>
            <BestSell></BestSell>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;