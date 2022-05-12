import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { FcUpload } from 'react-icons/fc'
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AppointmentPage from './components/AppointmentPage/AppointmentPage';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<AppointmentPage></AppointmentPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ScrollToTop component={<FcUpload />} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' , backgroundColor:'rgba(255,255,255,0.53)' }} smooth />
    </div>
  );
}

export default App;
