import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFOundPage/NotFoundPage';
import Layout from './Layout/Layout';
import { homeRoute, productRoute, adminRoute, accountRoute } from './Routes';
import LayoutAdmin from './Admin/LayoutAdmin/LayoutAdmin';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* User page */}
        <Route path='/' element={<Layout/>}>
            {homeRoute.map((route,index)=>{ return <Route key={index} path={route.path} element={<route.element/>} />})}
            {productRoute.map((route,index)=>{ return <Route key={index} path={route.path} element={<route.element/>} />})}
        </Route>
        {/* Account page */}
        <Route path='/Account'>
          {accountRoute.map((route,index)=>{ return <Route key={index} path={route.path} element={<route.element/>} />})}
        </Route>

        {/* Admin page */}
        <Route path='/admin' element={<LayoutAdmin/>}>
          {adminRoute.map((route,index)=>{return <Route key={index} path={route.path} element={<route.element/>}/>})}
        </Route>


        {/* Xử lý khi không có page */}
        <Route path='/*' element={<NotFoundPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
