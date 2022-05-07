import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Share/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Share/Header/Header';
import SubHeaders from './Pages/Home/SubHeader/SubHeader';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Form/Login/Login';
import Register from './Pages/Form/Register/Register';
import { ToastContainer } from 'react-toastify';
import MngInventories from './Pages/ManageInventory/MngInventories/MngInventories';
import RequireAuth from './Pages/Other/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import { Rotate } from 'react-reveal';
import AddItem from './Pages/AddItem/AddItem';


function App() {
  return (
    <div >
      <SubHeaders></SubHeaders>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/mngInventory' element={<RequireAuth>
          <MngInventories></MngInventories>
        </RequireAuth>}></Route>
        <Route path='/products/:productsId' element={<RequireAuth>
          <ServiceDetail></ServiceDetail>
        </RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
     
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
