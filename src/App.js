import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { publicRoutes, GoTOP, authRoutes, NestedDashboard } from './components/AppJsMinifier/AppJsMinifier';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';
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
        {NestedDashboard}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <GoTOP />
      <Toaster />
    </div>
  );
}

export default App;
