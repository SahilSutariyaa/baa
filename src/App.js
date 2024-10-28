import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shope from './pages/Shope'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Certificate from './pages/Certificate'
import 'bootstrap/dist/css/bootstrap.min.css';
import WishList from './commen/WishList'
import Card from './commen/Card'
import DetailsPage from './commen/DetailsPage'
import PaymentDetails from './commen/PaymentDetails'
import PrivacyAndPolicy from './commen/PrivacyAndPolicy'
import Shipping from './commen/Shipping'
import Refund from './commen/Refund'
import Terms from './commen/Terms'
import FAQPage from './commen/FAQPage'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> } >
            <Route index element={ <Home /> } />
            <Route path='/shope' element={ <Shope /> } />
            <Route path='/aboutUs' element={ <AboutUs /> } />
            <Route path='/certificate' element={ <Certificate /> } />
            <Route path='/contactUs' element={ <ContactUs /> } />
            <Route path='/wishList' element={ <WishList /> } />
            <Route path='/card' element={ <Card /> } />
            <Route path='/details/:id' element={ <DetailsPage /> } />
            <Route path='/paymentDetails' element={ <PaymentDetails /> } />
            <Route path='/policy' element={ <PrivacyAndPolicy /> } />
            <Route path='/shipping' element={ <Shipping /> } />
            <Route path='/refund' element={ <Refund /> } />
            <Route path='/terms' element={ <Terms /> } />
            <Route path='/faq' element={<FAQPage/>}/>
          </Route>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
