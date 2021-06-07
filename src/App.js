import React from 'react';
// USER PAGE
import Home from './page/HomePage/HomePage';
import Shop from './page/HomePage/ShopPage';
import ShopItem from './page/HomePage/ShopItemPage';
import About from './page/HomePage/AboutPage';
import Cart from './page/HomePage/CartPage';
import CheckOut from './page/HomePage/CheckOutPage';
import Contact from './page/HomePage/ContactPage';
import Thank from './page/HomePage/ThankPage';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';
import InfoAccount from './Component/Auth/InfoAccount';
import ChangePassword from './Component/Auth/ChangePassword';
import NotFoundPage from './page/HomePage/NotfoundPage';
import OrderPage from './page/HomePage/OderPage';
import Loading from './Component/Loading/index'
// ADMIN PAGE
import AdminAdvenrtismentPage from './page/AdminPage/AdminAdvertisementPage';
import AdminOrderPage from './page/AdminPage/AdminOrderPage';
import AdminTkPage from './page/AdminPage/AdminTkPage';
import AdminUserPage from './page/AdminPage/AdminUserPage';
import AddProduct from './Component/Auth/AddProduct';
import AdminProductPage from './page/AdminPage/AdminProductPage';
import EditProduct from './Component/Auth/EditProduct';
import AddAdvens from './Component/Auth/AddAdvens';
import AdminOrderDetailPage from './page/AdminPage/AdminOrderDetailPage';
import OrderDetailPage from './page/HomePage/OderDetail';
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
function App() {
 
  
  return (
        <Router>
          <Switch>         {/* ROUTE USER */}
             <Route path="/" exact component={Home}></Route>
             <Route path="/shop" exact  component={Shop}></Route>
             <Route path="/shop/:prodID" exact  render={()=>{
               return localStorage.getItem("token")  ? <ShopItem></ShopItem>  : <Redirect to="/signin"></Redirect>
             }}></Route>
             <Route path="/cart"   render={()=>{
              return localStorage.getItem("token")  ?  <Cart></Cart>: <Redirect to="/signin"></Redirect>
               }}></Route>
             {/* <Route path="/cart/:id" exact render={()=>{
              return localStorage.getItem("token") ? <Cart></Cart> : <Redirect to="/signin"></Redirect>
               }}></Route> */}
             <Route path="/checkout"  render={()=>{
              return localStorage.getItem("token")  ?   <CheckOut></CheckOut>  : <Redirect to="/signin"></Redirect>
               }}></Route>
            
              {/* <Route path="/contact" component={Contact}></Route> */}
             <Route path="/thank"  render={()=>{
                return localStorage.getItem("token")  ?   <Thank></Thank>  : <Redirect to="/signin"></Redirect>
               }}></Route>
              <Route path="/order" exact render={()=>{
                  return localStorage.getItem("token")  ?  <OrderPage></OrderPage> : <Redirect to="/signin"></Redirect>
             }}></Route>
            
             

             {/* ROUTE ADMIN */}

             <Route path="/admin" exact render={()=>{
                 return localStorage.getItem("token")  ?  <AdminProductPage></AdminProductPage> : <Redirect to="/signin"></Redirect>
             }}></Route>
               <Route path="/admin/editproduct/:slug" exact  render={()=>{
                 return localStorage.getItem("token")  ?  <EditProduct></EditProduct> : <Redirect to="/signin"></Redirect>
             }}></Route> 
              <Route path="/admin/advens" exact render={()=>{
                 return localStorage.getItem("token")  ?  <AdminAdvenrtismentPage></AdminAdvenrtismentPage> : <Redirect to="/signin"></Redirect>
             }}></Route>
              <Route path="/admin/order" exact render={()=>{
                 return localStorage.getItem("token")  ?  <AdminOrderPage></AdminOrderPage> : <Redirect to="/signin"></Redirect>
             }}></Route>
                <Route path="/admin/order/:slug"  render={()=>{
                 return localStorage.getItem("token")  ?  <AdminOrderDetailPage></AdminOrderDetailPage> : <Redirect to="/signin"></Redirect>
             }}></Route>
              <Route path="/admin/tk" render={()=>{
                 return localStorage.getItem("token")  ?  <AdminTkPage></AdminTkPage> : <Redirect to="/signin"></Redirect>
             }}></Route>

              <Route path="/admin/user" render={()=>{
                 return localStorage.getItem("token")  ?  <AdminUserPage></AdminUserPage> : <Redirect to="/signin"></Redirect>
             }}></Route>

              <Route path="/admin/addproduct" exact render={()=>{
                 return localStorage.getItem("token")  ?  <AddProduct></AddProduct> : <Redirect to="/signin"></Redirect>
             }}></Route>
              {/* <Route path="/admin/advens/add" exact render={()=>{
                 return localStorage.getItem("token")  ?  <AddAdvens></AddAdvens> : <Redirect to="/signin"></Redirect>
             }}></Route> */}
             {/* Route chung */}
             <Route path="/order/:slug" render={()=>{
                 return localStorage.getItem("token") ? <OrderDetailPage></OrderDetailPage>: <Redirect to="/"></Redirect> 
             }}></Route>
             <Route path="/signup" render={()=>{
                 return localStorage.getItem("token") ? <Redirect to="/"></Redirect> : <SignUp></SignUp>
             }}></Route>
              <Route path="/signin" exact render={()=>{
                  return localStorage.getItem("token") ? <Redirect to="/"></Redirect> : <SignIn></SignIn>
             }}></Route>
               <Route path="/info"  render={()=>{
                  return localStorage.getItem("token") ? <InfoAccount></InfoAccount>:  <Redirect to="/"></Redirect>
             }}></Route>
              <Route path="/changepassword" render={()=>{
                  return localStorage.getItem("token") ? <ChangePassword></ChangePassword>:  <Redirect to="/"></Redirect>
             }}></Route>
              <Route path="/about"   component={About}></Route>
              <Route component={NotFoundPage}></Route>
          </Switch>
          <Loading></Loading>
        </Router>
        
  );
}

export default App;
