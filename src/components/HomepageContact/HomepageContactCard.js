import React from 'react';

const HomepageContactCard = ({icon , title , body , bgc}) => {
  return (
    <div className={`${bgc} flex gap-5 items-center justify-center text-white rounded-md md:p-12 p-6 shadow-sm lg:w-1/3 my-6`}>
      <div className='text-7xl '>{icon}</div>
      <div>
        <h3 className='font-bold uppercase mb-3'>{title}</h3>
        <p className='capitalize'>{body}</p>
      </div>
    </div>
  );
};

export default HomepageContactCard;