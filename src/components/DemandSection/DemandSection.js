import React from 'react';
import img1 from '../../assets/images/whiting-carousal-imgs/whiting-car-img-1.png'
import img2 from '../../assets/images/whiting-carousal-imgs/whiting-car-img--2.png'
import img3 from '../../assets/images/whiting-carousal-imgs/whiting-car-img-3.png'
import img4 from '../../assets/images/whiting-carousal-imgs/whiting-car-img-4.png'
import img5 from '../../assets/images/whiting-carousal-imgs/whiting-car-img-5.png'
import img6 from '../../assets/images/whiting-carousal-imgs/whiting-car-img-6.png'
import img7 from '../../assets/images/whiting-carousal-imgs/whiting-car-img-7.png'

const DemandSection = () => {
  return (
    <div>
      <h1 className='text-primary md:text-5xl text-3xl text-center '><span className='border-b-2 border-dashed border-accent'>Highest Demand</span></h1>
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h-96 carousel carousel-vertical rounded-box ">
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-1' src={img1} width='350px'/>
            </div>
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-2' src={img2} width='350px'/>
            </div>
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-3' src={img3} width='350px'/>
            </div>
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-4' src={img4} width='350px'/>
            </div>
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-5' src={img5} width='350px' />
            </div>
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-6' src={img6} width='350px'/>
            </div>
            <div className="carousel-item h-full mb-2 rounded">
              <img alt='whiting-img-7' src={img7} width='350px'/>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <h1 className="md:text-5xl text-2xl font-bold text-[#36454F]">Is Teeth Whitening Safe For My Enamel?</h1>
            <p className="py-6 text-[#36454F]  font-mono "> The yellow discoloration of your teeth is the most common sign of damaged enamel. This begs the question “does teeth whitening damage the enamel?” The answer is no, teeth whitening doesn't damage your tooth enamel.</p>
            <a href="https://towerdentalassociates.com/does-teeth-whitening-damage-your-enamel/" className="btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent" target="_blank" >See Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandSection;