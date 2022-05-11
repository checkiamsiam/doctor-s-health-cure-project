import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import ContactUsSection from '../ContactUsSection/ContactUsSection';
import DemandSection from '../DemandSection/DemandSection';
import HomepageContact from '../HomepageContact/HomepageContact';
import ServicesSection from '../ServicesSection/ServicesSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className='container mx-auto px-5 md:py-0 py-14'>
      <Banner></Banner>
      <HomepageContact></HomepageContact>
      <ServicesSection></ServicesSection>
      <DemandSection></DemandSection>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <ContactUsSection></ContactUsSection>
    </div>
  );
};

export default Home;