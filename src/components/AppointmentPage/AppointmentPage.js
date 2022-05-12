import React , { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointmentOnDate from '../AvailableAppointmentOnDate.js/AvailableAppointmentOnDate';

const AppointmentPage = () => {
  const date = new Date()
  const [selectedDate, setSelectedDate] = useState(date);
  return (
    <div className='md:p-0 pt-10 container mx-auto'>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
      <AvailableAppointmentOnDate selectedDate={selectedDate}></AvailableAppointmentOnDate>
    </div>
  );
};

export default AppointmentPage;