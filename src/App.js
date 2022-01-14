
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './component/PrivateRoute.jsx';
//components
import TopNav from "./component/TopNav.jsx";
import Home from './booking/Home.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Dashboard from './user/Dashboard.jsx';
import DashboardSeller from './user/DashboardSeller.jsx';
import NewHotel from './hotels/NewHotel.jsx'


function App() {
  return (
    <BrowserRouter>
    <TopNav/>
      <ToastContainer position='top-center'/>
    <Switch>
      <Route exact path="/" component={Home} />
         <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard/Seller" component={DashboardSeller} />
            <PrivateRoute exact path="/hotels/new" component={NewHotel} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
