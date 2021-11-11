import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/NavBar/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import MoreProduct from './Pages/Home/MoreProducts/MoreProduct';

import NotFounds from './Pages/404/NotFounds';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Registration/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Pay from './Pages/DashBoard/Pay/Pay';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';

import Reviews from './Pages/DashBoard/Review/Reviews';
import ManageOrders from './Pages/DashBoard/ManageOrders/ManageOrders';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import AddProducts from './Pages/DashBoard/AddProduct/AddProducts';
import ManageProduct from './Pages/DashBoard/ManageProduct/ManageProduct';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/exploreMore">
            <MoreProduct />
          </Route>
          <PrivateRoute exact path="/placeorder/:serviceId">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute exact path="/pay">
           <Pay/>
          </PrivateRoute>
          <PrivateRoute exact path="/myorders">
          <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/review">
           <Reviews/>
          </PrivateRoute>
          <PrivateRoute exact path="/manageorders">
           <ManageOrders/>
          </PrivateRoute>
          <PrivateRoute exact path="/makeadmin">
           <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute exact path="/addproduct">
           <AddProducts/>
          </PrivateRoute>
          <PrivateRoute exact path="/manageproduct">
           <ManageProduct/>
          </PrivateRoute>
          <Route exact path="*">
            <NotFounds />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>

  );
}

export default App;
