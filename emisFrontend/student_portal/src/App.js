import logo from './logo.svg';
import './App.css';
import  {BrowserRouter, Link, Route, Switch, useParams} from 'react-router-dom'
import StudentProfile from './Screens/StudentProfile'
import StudentProfileEdit from './Screens/StudentProfileEdit'
import announcement from './Screens/Announcement';
import AcademicInfo from './Screens/AcademicInfo';
import Schedule from './Screens/Schedule';
import Report from './Screens/Report';
import Announcement from './Screens/Announcement';
import Logout from './Screens/logout';
import EditAcademics from './Screens/EditAcademics';
import Attendance from './Screens/Attendance';
import UploadPhoto from './Screens/Upload';
import ReloadComponent from './components/ReloadComponent';


function App() {
  return (
    <div className='my-application'>
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
                  <span className="header_optionLineOne">Personal</span>
                </div>
              </Link>
              <Link to='/academicinfo' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Academics</span>
                </div>
              </Link>
              <Link to='/schedule' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Schedule</span>
                </div>
              </Link>
              <Link to='/report' style={{textDecoration:'none'}}>
                <div className="header_option">
                  <span className="header_optionLineOne">Report</span>
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
            <Route path="/profile" component={StudentProfile} />
            <Route path="/edit" component={StudentProfileEdit} />
            <Route path="/academicinfo" component={AcademicInfo} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/report" component={Report} />
            <Route path="/announcement:id" component={Announcement} />
            <Route path="/announcement" component={Announcement} />
            <Route path="/logout" component={Logout} />
            <Route path="/editacademic" component={EditAcademics} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/upload" component={UploadPhoto} />
            <Route path="/reload" component={ReloadComponent} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;