import React from 'react'
import Header from '../Components/Header/Header'
import HomeSlider from '../Components/Home/HomeSlider'
import CarSearchForm from '../Components/Home/Form'
import BookingForm from '../Components/Home/booking'
import Content from '../Components/Home/Content'
import NumbersSpeak from '../Components/Home/NumbersSpeak'
import TaxiModels from '../Components/Home/TaxiModels'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import Footer from '../Components/Footer/Footer'
import TaxiFares from '../Components/Home/TaxiFares'

function Home() {
    return (
        <>
        <Header/>
        <HomeSlider/>
        <CarSearchForm/>
        <BookingForm/>
        <Content/>
        <NumbersSpeak/>
        <TaxiModels/>
        <WhyChooseUs/>
        <TaxiFares/>
        <Footer/>
    
        
        </>
    )
}

export default Home
