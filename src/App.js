import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { publicRoutes, GoTOP } from './components/AppJsMinifier/AppJsMinifier';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {publicRoutes.map(route => <Route key={route.no} path={route.path} element={<route.name />}></Route>)}
      </Routes>
      <Footer></Footer>
      <GoTOP />
    </div>
  );
}

export default App;
