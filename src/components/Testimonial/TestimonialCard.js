import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const TestimonialCard = ({ img, name, adress, review, linkedin }) => {
  return (
    <div>
      <div className="card hover:shadow-sm hover:shadow-accent bg-base-100 h-full shadow-xl text-neutral">
        <div className="card-body">
          <p className='capitalize mb-3 italic'>{review}</p>
          <div className="card-actions flex items-center gap-5">
            <a href={linkedin} alt="user's-linkedin" className="avatar online" target="_blank">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="user's img" />
              </div>
            </a>
            <div>
              <h1>{name}</h1>
              <h2 className='flex items-center'><HiLocationMarker></HiLocationMarker>{adress}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;