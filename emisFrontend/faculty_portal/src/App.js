import logo from './logo.svg';
import './App.css';
import Schedule from './Screens/Schedule'
import Profile from './Screens/FacultyProfile'
import EditProfile from './Screens/FacultyProfileEdit'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Welcome from './Components/Welcome';
import Module from './Screens/Modules';
import Logout from './Screens/Logout';
import Announcement from './Screens/Announcement';

function App() {
  return (
    <div>
       <BrowserRouter>
        <div>
          <div className="header">
            <Link to="/">
              <img
                className="headerlogo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kku8fuqJcv6a-qozkf-ohwwKnemNbndERquaP3kp4aQf6XlKdeKf9KT2fXTA4vB1NyM&usqp=CAU"
              />
            </Link>
            <div className="header_nav">
              <Link to='/profile' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Personal Info</span>
                </div>
              </Link>
              <Link to='/schedule' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Schedule</span>
                </div>
              </Link>
              <Link to='/module' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Module Information</span>
                </div>
              </Link>
              <Link to='/announcement' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Briefing</span>
                </div>
              </Link>
              <Link to='/logout' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Logout</span>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/edit" component={EditProfile} />
            <Route path="/welcome:id" component={Welcome} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/module" component={Module} />
            <Route path="/logout" component={Logout}/>
            <Route path="/announcement" component={Announcement}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

