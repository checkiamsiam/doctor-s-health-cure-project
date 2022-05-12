import React from 'react';
import bannerImg from '../../assets/images/doctor-appointment.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selectedDate , setSelectedDate}) => {

  let footer = <p className='text-primary text-center'>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p >Your Selected date .</p>;
  }
  return (
    <div className='bg-forBanner bg-cover bg-center bg-no-repeat pt-12 mb-8'>
      <div className="hero  flex items-center justify-center">
        <div className="hero-content flex-col md:flex-row md:px-10 md:gap-20 gap-5">
          <img src={bannerImg} className="max-w-sm w-full rounded-lg md:order-1 order-2" alt='doctors appointment' />
          <div className='md:w-1/2 h-[350px]  md:order-2 order-1'>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;