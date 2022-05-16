import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { publicRoutes, GoTOP, authRoutes } from './components/AppJsMinifier/AppJsMinifier';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointment from './components/Dashboard/MyAppointment';
import MyReview from './components/Dashboard/MyReview';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {
          publicRoutes.map(route => <Route key={route.no} path={route.path} element={<route.name />}></Route>)
        }
        {
          authRoutes.map(route => <Route key={route.no} path={route.path} element={<RequireAuth>
            <route.name />
          </RequireAuth>}></Route>)
        }
        <Route path='/dashboard' element={<RequireAuth> <Dashboard/> </RequireAuth>}>
        <Route index element={<MyAppointment/>} />
        <Route path='myreview' element={<MyReview/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
      <GoTOP />
      <Toaster />
    </div>
  );
}

export default App;
