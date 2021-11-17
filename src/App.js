import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound'
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddServices from './Pages/AddServices/AddServices';
import ManageServices from './Pages/ManageService/ManageServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <PrivateRoute path="/service/:serviceId"><Booking /></PrivateRoute>
            <Route path="/login"><Login /></Route>
            <Route path="/addService"><AddServices /></Route>
            <Route path="/manageServices"><ManageServices/></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
