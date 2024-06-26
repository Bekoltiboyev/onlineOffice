import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Companiya from './Components/Companiya';
import FoydaComp from './Components/FoydaComp';
import Xizmatlar from './Components/Xizmatlar';
import Tarif from './Components/Tarif';



function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Companiya/>
            <FoydaComp/>
            <Xizmatlar/>
            <Tarif/>
            <Footer />
            
        </>
    );
}

export default Home;