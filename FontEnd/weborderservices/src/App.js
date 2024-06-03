import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFOundPage/NotFoundPage';
import Layout from './Layout/Layout';
import { homeRoute, productRoute } from './Routes';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
            {homeRoute.map((route,index)=>{ return <Route key={index} path={route.path} element={<route.element/>} />})}
            {productRoute.map((route,index)=>{ return <Route key={index} path={route.path} element={<route.element/>} />})}
        </Route>
        {/* Xử lý khi không có page */}
        <Route path='/*' element={<NotFoundPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
