import React from 'react';
import './Loading.css'


const Loading = () => {
  return (

    <div className='h-screen  flex justify-center items-center'>
      {/* <div className="wrapper">


        <div id="loader-wrapper">

          <div id="loader">
            <p className='loading-text'>LOADING</p>
            <div className="circ-one"></div><div className="circ-two"></div>

          </div>

          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>

        </div>
      </div> */}
      <button className="  btn loading"></button>
    </div>

  );
};

export default Loading;