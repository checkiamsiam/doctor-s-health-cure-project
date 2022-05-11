import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import bg from '../../assets/images/appointment.png'

const Appointment = () => {
  return (
    <div className='relative bg-forAppointment lg:bg-transparent rounded lg:mt-32 container-full'>
      <img className='xl:h-[28rem]  w-full rounded lg:block hidden' src={bg} alt="" />
      <div className="hero  bg-transparent lg:absolute xl:bottom-0 lg:bottom-20 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={doctor} className=" rounded-lg  lg:block hidden w-1/2 " alt='doctor' />
          <div className='lg:relative xl:top-28 lg:top-24'>
            <h6 className='text-primary font-bold'>Appointment</h6>
            <h1 className="md:text-5xl text-3xl font-bold text-white my-5">Make an appointment Today</h1>
            <p className="pb-5 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
            <button className="btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Get Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;