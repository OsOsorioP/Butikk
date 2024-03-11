import React from 'react'
import { Presentation } from '../components/Presentation';
import { ProudProducts } from '../components/ProudProducts';
import { Banner } from '../components/Banner';
import { TrendingSlider } from '../components/TrendingSlider';
import { NewsLetter } from '../components/NewsLetter';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Presentation />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text=" Butikk Products are all made to standard sizes so that you can mix and match them freely."
      />
      <TrendingSlider />
      <NewsLetter />
      <Footer />
    </>
  )
}
