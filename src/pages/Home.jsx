import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ImageGreed from '../components/home/ImageGreed'
import TextWithImage from '../components/home/TextWithImage'
import SliderGallary from '../components/home/SliderGallary'
import Benifits from '../components/home/Benifits'
import InfoData from '../components/home/InfoData'

const Home = () => {
    return (
        <>
            <HeroSection />
            <ImageGreed />
            <TextWithImage />
            <SliderGallary />
            <Benifits />
            <InfoData />
        </>
    )
}

export default Home
