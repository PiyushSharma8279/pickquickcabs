import React from 'react'
import Header from '../Components/Header/Header'
import HomeSlider from '../Components/Home/HomeSlider'
import CarSearchForm from '../Components/Home/Form'
import BookingForm from '../Components/Home/booking'

function Home() {
    return (
        <>
        <Header/>
        <HomeSlider/>
        <CarSearchForm/>
        <BookingForm/>
        
        </>
    )
}

export default Home
