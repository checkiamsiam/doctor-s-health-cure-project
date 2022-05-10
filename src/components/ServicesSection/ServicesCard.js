import React from 'react';

const ServicesCard = ({ icon, title, body }) => {
  return (
    <div className=" text-center text-[#36454F] rounded-md md:p-12 p-6 shadow-lg lg:w-1/3 my-6 " >
      <img className='mx-auto mb-5' src={icon} alt="" />

      <h3 className='font-bold uppercase '>{title}</h3>
      <p className='capitalize'>{body}</p>

    </div>
  );
};

export default ServicesCard;