import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import DemandSection from '../DemandSection/DemandSection';
import HomepageContact from '../HomepageContact/HomepageContact';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {
  return (
    <div className='container mx-auto px-5 md:py-0 py-14'>
      <Banner></Banner>
      <HomepageContact></HomepageContact>
      <ServicesSection></ServicesSection>
      <DemandSection></DemandSection>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;