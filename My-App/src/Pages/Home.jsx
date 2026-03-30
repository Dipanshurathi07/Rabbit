import React, { useEffect, useState } from 'react'
import Hero from '../Components/Layouts/Hero'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import GenderCollection from '../Components/Products/GenderCollection'
import NewArrivals from '../Components/Products/NewArrivals'
import BestSaller from '../Components/Products/BestSaller'
import FeaturedCollection from '../Components/Products/FeaturedCollection'
import FeatureSection from '../Components/Products/FeatureSection'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Home = () => {
  const dispatch = useDispatch();
  const [bestSeller,setBestSeller]=useState(null);
  useEffect(()=>{
    const fetchBestSeller = async()=>{
     try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
      setBestSeller(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchBestSeller();
  },[dispatch])
  return (
    <>
    <Hero></Hero>
    <GenderCollection></GenderCollection>
    <NewArrivals></NewArrivals>
    <h2 className="text-2xl font-bold text-center mt-6">Best Saller</h2>
    {bestSeller ? <BestSaller productId={bestSeller._id}></BestSaller> : <h1 className='text-center'>Loading...</h1>}
    <FeaturedCollection></FeaturedCollection>
    <FeatureSection></FeatureSection>
    </>
  )
}

export default Home