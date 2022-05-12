import { format } from 'date-fns';
import React from 'react';

const AvailableAppointmentCard = ({ service, selectedDate, modalService, setModalService }) => {
  const { name, slots } = service;
  return (
    <div className=" text-center text-[rgb(54,69,79)] rounded-md md:p-12 p-6 shadow-lg w-full my-6 " >
      <h1 className='text-primary text-2xl mb-3'>{name}</h1>
      <p className={`uppercase text-sm ${slots.length > 0 || 'text-red-500'}`}>{slots.length > 0 ? `${slots[0]}` : 'No Spaces Available'}</p>
      <p className={`uppercase text-sm ${slots.length > 0 || 'text-red-500'}`}>{slots.length > 0 ? `${slots?.length} spaces available` : 'Try Another Date'}</p>

      <label onClick={() => setModalService(service)} htmlFor="appointment-modal" className="btn modal-button uppercase mt-3  bg-gradient-to-r from-primary to-accent text-white" disabled={slots.length === 0}
        >Book Appointment</label>

      <AppointmentModal modalService={modalService} selectedDate={selectedDate}></AppointmentModal>

    </div>
  );
};


const AppointmentModal = ({ modalService, selectedDate }) => {
  const { name, slots } = modalService;

  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor="appointment-modal" className="btn btn-accent btn-sm btn-circle absolute right-3 top-3">✕</label>
          <h3 className="font-bold text-lg text-left text-primary mb-7">{name}</h3>
          <form className=' form-control'>
            <input type="text" placeholder="Date" value={format(selectedDate, 'PP')} className="input w-full mb-3 bg-[#E6E6E6]" readOnly />
            <select className="select input w-full mb-3 bg-[#E6E6E6]">
              {slots?.length > 0 && slots.map(slot => <option key={slot}>{slot}</option>)}
            </select>
            <input type="text" placeholder="Name" className="input  w-full mb-3 bg-[#E6E6E6]" />
            <input type="text" placeholder="Phone Number" className="input  w-full mb-3 bg-[#E6E6E6]" />
            <input type="text" placeholder="Email Adress" className="input w-full mb-3 bg-[#E6E6E6]" />
            <input type="submit" value="BOOk" className='btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent' />
          </form>

        </div>
      </div>
    </div>
  );
};


export default AvailableAppointmentCard;