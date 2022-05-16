
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';


const AvailableAppointmentCard = ({ service, selectedDate, modalService, setModalService, refetch }) => {
  const { name, slots } = service;
  return (
    <div className=" text-center text-neutral rounded-md md:p-12 p-6 shadow-lg w-full my-6 " >
      <h1 className='text-primary text-2xl mb-3'>{name}</h1>
      <p className={`uppercase text-sm ${slots.length > 0 || 'text-red-500'}`}>{slots.length > 0 ? `${slots[0]}` : 'No Spaces Available'}</p>
      <p className={`uppercase text-sm ${slots.length > 0 || 'text-red-500'}`}>{slots.length > 0 ? `${slots?.length} spaces available` : 'Try Another Date'}</p>

      <label onClick={() => setModalService(service)} htmlFor="appointment-modal" className="btn modal-button uppercase mt-3  bg-gradient-to-r from-primary to-accent text-white" disabled={slots.length === 0}
      >Book Appointment</label>

      <AppointmentModal modalService={modalService} refetch={refetch} selectedDate={selectedDate}></AppointmentModal>

    </div>
  );
};


const AppointmentModal = ({ modalService, selectedDate, refetch }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = modalService;

  const handleAppointment = (e) => {
    e.preventDefault();

    const postItem = { treatmentName: name, date: format(selectedDate, 'PP'), time: e.target.slot.value, email: user.email, bookedBy: user?.displayName, phone: parseInt(e.target.phone.value) };

    fetch('http://localhost:5000/booked', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postItem)
    })
      .then(res => res.json())
      .then(data => {
        toast(data.message)
        refetch()
      })

  }





  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor="appointment-modal" className="btn btn-accent btn-sm btn-circle absolute right-3 top-3">✕</label>
          <h3 className="font-bold text-lg text-left text-primary mb-7">{name}</h3>
          <form onSubmit={handleAppointment} className=' form-control'>
            <input type="text" placeholder="Date" value={format(selectedDate, 'PP')} className="input w-full mb-3 bg-[#E6E6E6]" readOnly />
            <select name="slot" className="select input w-full mb-3 bg-[#E6E6E6]">
              {slots?.length > 0 && slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)}
            </select>
            <input type="text" value={user?.displayName} placeholder="Name" className="input  w-full mb-3 bg-[#E6E6E6]" readOnly />
            <input type="text" value={user?.email} placeholder="Email Adress" className="input w-full mb-3 bg-[#E6E6E6]" readOnly />
            <input type="text" name='phone' placeholder="Phone Number" className="input  w-full mb-3 bg-[#E6E6E6]" />
            <input type="submit" value="BOOk" className='btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent' />
          </form>

        </div>
      </div>
    </div>
  );
};


export default AvailableAppointmentCard;