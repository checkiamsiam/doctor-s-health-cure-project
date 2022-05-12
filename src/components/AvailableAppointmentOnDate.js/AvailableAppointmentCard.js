import React from 'react';

const AvailableAppointmentCard = ({ name, slots, selectedDate }) => {
  return (
    <div className=" text-center text-[rgb(54,69,79)] rounded-md md:p-12 p-6 shadow-lg w-full my-6 " >
      <h1 className='text-primary text-2xl mb-3'>{name}</h1>
      <p className={`uppercase text-sm ${slots.length > 0 || 'text-red-500'}`}>{slots.length > 0 ? `${slots[0]}` : 'No Spaces Available'}</p>
      <p className={`uppercase text-sm ${slots.length > 0 || 'text-red-500'}`}>{slots.length > 0 ? `${slots?.length} spaces available` : 'Try Another Date'}</p>
      <button className="uppercase mt-3 btn bg-gradient-to-r from-primary to-accent text-white self-end disabled={slots.length > 0}">Book Appointment</button>
    </div >
  );
};

export default AvailableAppointmentCard;