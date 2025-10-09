import React, {useEffect} from 'react'
import Header from '../Components/Header/Header'
import HomeSlider from '../Components/Home/HomeSlider'
import CarSearchForm from '../Components/Home/Form'
import BookingForm from '../Components/Home/booking'
import Content from '../Components/Home/Content'
import NumbersSpeak from '../Components/Home/NumbersSpeak'
import TaxiModels from '../Components/Home/TaxiModels'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import Footer from '../Components/Footer/Footer'
import useSEO from '../Hooks/UseSeo'
import PricingTable from '../Components/Home/PricingTable'
import Offering from '../Components/Home/Offerrings'

function Home() {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
            useSEO({
            title: "Reliable Cab/Taxi Rental Service in Delhi | Pick Quick Cabs",
            description:
              "Looking for a hassle-free ride? Try our trusted Cab / Taxi Rental Service in Delhi. Affordable, quick, and easy booking for every trip. Book Now.",
            url: "https://www.pickquickcabs.com/",
          });
    
    return (
        <>
        <Header/>
        <HomeSlider/>
        <BookingForm/>
        <Content/>
        <Offering/>
        
        <NumbersSpeak/>
        <TaxiModels/>
        <WhyChooseUs/>
        <PricingTable/>
        <Footer/>
    
        
        </>
    )
}

export default Home
