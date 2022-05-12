import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointmentCard from './AvailableAppointmentCard';

const AvailableAppointmentOnDate = ({ selectedDate }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <h1 className={`${selectedDate ? 'text-primary' : 'text-red-500'} text-center md:text-4xl text-2xl `}><span className='border-b-2 border-accent border-dashed'>{selectedDate ? `On ${format(selectedDate, 'PP')}  Available Appointments`
        : 'No Date Selected'
      } </span></h1>
      {selectedDate && <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map(service => <AvailableAppointmentCard key={service._id} selectedDate={selectedDate} name={service?.name} slots={service?.slots} />)}
      </div>}
    </div>
  );
};

export default AvailableAppointmentOnDate;