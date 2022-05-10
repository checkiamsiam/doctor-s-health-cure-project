import React from 'react';
import ServicesCard from './ServicesCard';
import teeth from '../../assets/images/whitening.png'
import flouride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'

const ServicesSection = () => {
  return (
    <div>
      <h5 className='font-bold text-center text-primary md:text-2xl uppercase'>Dental Services</h5>
      <h1 className='text-center text-accent  md:text-4xl text-2xl'>Top Dental Services Of Us</h1>
      <div className='lg:flex gap-5'>
        <ServicesCard icon={Cavity} title="Cavity Filup" body="Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure."></ServicesCard>
        <ServicesCard icon={flouride} title="Fluoride Treatment" body="Professional treatments containing a high concentration of fluoride that a dentist  will apply to a person's teeth to improve health and reduce the risk of cavities"></ServicesCard>
        <ServicesCard icon={teeth} title="Teeth Whitening" body="Beautifully whitening your teeth and save your teeth from cavity and your teeth will looks ultra white "></ServicesCard></div>
    </div>
  );
};

export default ServicesSection;