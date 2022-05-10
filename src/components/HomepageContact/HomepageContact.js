import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { BsTelephoneOutbound } from 'react-icons/bs';
import HomepageContactCard from './HomepageContactCard';

const HomepageContact = () => {
  return (
    <div className=' lg:flex gap-5'>
      <HomepageContactCard icon={<FaRegClock></FaRegClock>} title="Opening Time" body="mon-fry -- from 8am to 10pm and sat-sun -- Only one hour before Magrib" bgc="bg-gradient-to-r from-primary to-accent"></HomepageContactCard>
      <HomepageContactCard icon={<GrLocation></GrLocation>} title="Location" body="Kajirgaon , Chandimath , Jatrabari , Dhaka-South-City , Bangladesh " bgc="bg-gradient-to-r from-accent to-secondary"></HomepageContactCard>
      <HomepageContactCard icon={<BsTelephoneOutbound></BsTelephoneOutbound>} title="24 Hour Support" body="01910072991 , 01304421285" bgc="bg-gradient-to-r from-primary to-accent"></HomepageContactCard>
    </div>
  );
};

export default HomepageContact;