import React from 'react';
import Banner from '../Banner/Banner';
import HomepageContact from '../HomepageContact/HomepageContact';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {
  return (
    <div className='container mx-auto px-5 md:py-0 py-14'>
      <Banner></Banner>
      <HomepageContact></HomepageContact>
      <ServicesSection></ServicesSection>
    </div>
  );
};

export default Home;