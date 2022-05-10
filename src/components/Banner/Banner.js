import React from 'react';
import chair from '../../assets/images/chair.png'
import baby from '../../assets/images/bady-special.jpg'
import Modern from '../../assets/images/morder-machine.png'
import Slider from 'react-slick/lib/slider';

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div className="container mx-auto mb-3 md:p-0 p-5 pt-0 bg-forBanner bg-cover bg-center">
      <Slider {...settings}>
        <div>
          <div className="hero bg-transparent md:min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
              <img src={Modern} alt='im' className="max-w-sm rounded-lg shadow-2xl " />
              <div className='lg:w-1/2'>
                <h1 className="text-5xl font-bold text-primary cursor-text">Modern Surgical Machines</h1>
                <p className="py-6 text-2xl text-accent font-mono cursor-text">We have the best quality of surgical machines for secure your surgery and a successful operation.</p>

              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="hero bg-transparent md:min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
              <img src={baby} alt='s' className="max-w-sm rounded-lg shadow-2xl " />
              <div className='lg:w-1/2'>
                <h1 className="text-5xl font-bold text-primary cursor-text">New Born Support.</h1>
                <p className="py-6 text-2xl text-accent font-mono cursor-text">Feel Free to give your new born baby for health care with unlimited support and oxygen bed for healthy baby</p>

              </div>
            </div>
          </div>


        </div>
        <div>
          <div className="hero bg-transparent md:min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
              <img src={chair} alt="Medical Chair" className="max-w-sm rounded-lg shadow-2xl " />
              <div className='lg:w-1/2'>
                <h1 className="text-5xl font-bold text-primary cursor-text">Your New Smile Starts Here</h1>
                <p className="py-6 text-2xl text-accent font-mono cursor-text">We care , Allah cure. Come to Share your health issue our experts will try their best to solve your problem</p>

              </div>
            </div>
          </div>
        </div>



      </Slider>
    </div>
  );
};

export default Banner;