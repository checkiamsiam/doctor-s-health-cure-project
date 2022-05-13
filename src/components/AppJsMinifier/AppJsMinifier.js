
import ScrollToTop from 'react-scroll-to-top';
import { FcUpload } from 'react-icons/fc'
import Home from '../Home/Home';
import About from '../About/About';
import AppointmentPage from '../AppointmentPage/AppointmentPage';
import Login from '../LogIn/Login';
import SignUp from '../SignUP/SignUp';

const publicRoutes = [
  {no:1 , path: '/' , name:Home} ,
  {no:2 , path: '/about' , name:About} ,
  {no:3 , path: '/appointment' , name:AppointmentPage} ,
  {no:4 , path: '/login' , name:Login} ,
  {no:5 , path: '/signup' , name:SignUp} ,

]


const GoTOP = () => {
  return (
    <ScrollToTop component={<FcUpload />} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' , backgroundColor:'rgba(255,255,255,0.53)' }} smooth />
  );
};


export {publicRoutes , GoTOP}