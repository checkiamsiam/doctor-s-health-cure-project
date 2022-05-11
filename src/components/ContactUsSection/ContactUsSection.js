import React from 'react';

const ContactUsSection = () => {
  return (
    <div className='bg-forAppointment py-10 px-3 rounded'>
      <div>
        <div className='text-center mb-5'>
          <h1 className='text-primary font-bold'>Contact Us</h1>
          <h5 className='md:text-3xl text-xl text-white'>Stay Connected , Stay Secure</h5>
        </div>
        <div className='flex items-center justify-center'>
          <form className='flex flex-col w-full max-w-md'>
          <input type="email" placeholder="Your Email" className="input input-bordered input-success w-full mb-4" />
          <input type="text" placeholder="Subject" className="input input-bordered input-success w-full mb-4" />
          <textarea className="textarea textarea-success mb-5" placeholder="Massage"></textarea>
          <input className='btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent max-w-md' type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;