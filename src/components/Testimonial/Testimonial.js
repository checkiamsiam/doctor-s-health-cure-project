import React from 'react';
import TestimonialCard from './TestimonialCard';
import ali from '../../assets/images/users-avatar/ali.png'
import sakib from '../../assets/images/users-avatar/sakib.png'
import siam from '../../assets/images/users-avatar/siam.png'

const Testimonial = () => {
  return (
    <div className='my-10'>
      <div className='py-10 bg-forTestimonial bg-no-repeat bg-right-top bg-contain'>
        <h5 className='uppercase text-primary font-bold font-mono md:text-xl'>Testimonial</h5>
        <h1 className='md:text-4xl text-2xl font-thin text-neutral '>Patients Review</h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:mt-20 mt-10'>
        <TestimonialCard img={ali} name="Mohammad Ali" adress="Sarulia , Demra" review="it's a very care-able hospital it help me to re-white my teeth and now my teeth is much whiter then before" linkedin="https://www.linkedin.com/in/itsproali/"></TestimonialCard>
        <TestimonialCard img={siam} name="Sheikh Shahariar Siam" adress="Lobon-Factory , Jatrabari" review="some time ago , for a accident my one teeth was damaged and i came here they build me a new teeth and now i am feel comfort with that" linkedin="https://www.linkedin.com/in/checkiamsiam/"></TestimonialCard>
        <TestimonialCard img={sakib} name="Akram Sakib" adress="Rasulnagar , Demra" review="i was in a deep problem of cavity then i came here and they treat me or suggest me something now i am feel good . no pain" linkedin="https://www.linkedin.com/in/akram-sakib-a7742a214/"></TestimonialCard>
      </div>
    </div>
  );
};

export default Testimonial;