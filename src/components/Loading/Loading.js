import React from 'react';
import './Loading.css'


const Loading = () => {
  return (

    <div>
      <div className="wrapper">

        <div id="loader-wrapper">

          <div id="loader">
            <p className='loading-text'>LOADING</p>
            <div className="circ-one"></div><div className="circ-two"></div>

          </div>

          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>

        </div>
      </div>
    </div>

  );
};

export default Loading;