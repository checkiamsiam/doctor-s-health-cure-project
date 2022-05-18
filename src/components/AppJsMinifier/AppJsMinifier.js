
import ScrollToTop from 'react-scroll-to-top';
import { FcUpload } from 'react-icons/fc'
import Home from '../Home/Home';
import About from '../About/About';
import AppointmentPage from '../AppointmentPage/AppointmentPage';
import Login from '../LogIn/Login';
import SignUp from '../SignUP/SignUp';
import Testimonial from '../Testimonial/Testimonial';
import Dashboard from '../Dashboard/Dashboard';
import { Route } from 'react-router-dom';
import RequireAuth from '../RequireAuth/RequireAuth';
import MyAppointment from '../Dashboard/MyAppointment';
import MyReview from '../Dashboard/MyReview';
import Users from '../Dashboard/Users';
import RequireAdmin from '../RequireAuth/RequireAdmin';


const publicRoutes = [
  { no: 1, path: '/', name: Home },
  { no: 2, path: '/about', name: About },
  { no: 3, path: '/login', name: Login },
  { no: 4, path: '/signup', name: SignUp },
  { no: 5, path: '/reviews', name: Testimonial },

]
const authRoutes = [
  { no: 1, path: '/appointment', name: AppointmentPage },

]


const GoTOP = () => {
  return (
    <ScrollToTop component={<FcUpload />} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.53)' }} smooth />
  );
};



const NestedDashboard =

  <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>}>
    <Route index element={<MyAppointment />} />
    <Route path='myreview' element={<MyReview />} />
    <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>} />
  </Route>
  ;



export { publicRoutes, GoTOP, authRoutes, NestedDashboard }