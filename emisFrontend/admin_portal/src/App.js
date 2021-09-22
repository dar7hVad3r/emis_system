import "./App.css";
// import Header from "./Header";
import Home from "./screens/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Student from "./screens/Student";
import Faculty from "./screens/Faculty";
import FacultyAdd from "./components/FacultyAdd";
import EditAdmin from "./components/EditAdmin";
import StudentAdd from "./components/StudentAdd";
import Welcome from "./screens/Welcome";
import StudentEdit from "./screens/StudentEdit";
import Marks from "./screens/Marks";
import Attendance from "./screens/Attendance";
import Logout from "./screens/Logout";
import FacultyEdit from "./screens/FacultyEdit";
import DeleteRedirector from "./components/deleteRedirector";
import Announcement from "./screens/Announcement";
import StudentSchedule from "./screens/StudentSchedule";
import AddModule from "./screens/AddModule";
import AddSchedule from "./screens/AddSchedule";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="header">
            <img
              className="headerlogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kku8fuqJcv6a-qozkf-ohwwKnemNbndERquaP3kp4aQf6XlKdeKf9KT2fXTA4vB1NyM&usqp=CAU"
            />
            <div className="header_nav">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <div className="header_option">
                  <span className="header_optionLineOne">Home</span>
                </div>
              </Link>
              <Link to="/student" style={{ textDecoration: "none" }}>
                <div className="header_option">
                  <span className="header_optionLineOne">Student</span>
                </div>
              </Link>
              <Link to="/faculty" style={{ textDecoration: "none" }}>
                <div className="header_option">
                  <span className="header_optionLineOne">Faculty</span>
                </div>
              </Link>
              <Link to="/marks" style={{ textDecoration: "none" }}>
                <div className="header_option">
                  <span className="header_optionLineOne">Marks</span>
                </div>
              </Link>
              <Link to="/attendance" style={{ textDecoration: "none" }}>
                <div className="header_option">
                  <span className="header_optionLineOne">Attendance</span>
                </div>
              </Link>
              <Link to="/logout" style={{ textDecoration: "none" }}>
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
              <Route path="/faculty" component={Faculty}></Route>
              <Route path="/student" component={Student}></Route>
              <Route path="/editadmin" component={EditAdmin}></Route>
              <Route path="/addfaculty" component={FacultyAdd}></Route>
              <Route path="/addstudent" component={StudentAdd}></Route>
              <Route path="/home" component={Home} />
              <Route path="/welcome:id" component={Welcome} />
              <Route path="/editStudent" component={StudentEdit} />
              <Route path="/editfaculty" component={FacultyEdit} />
              <Route path="/marks" component={Marks} />
              <Route path="/attendance" component={Attendance} />
              <Route path="/logout" component={Logout} />
              <Route path="/deletehandler" component={DeleteRedirector} />
              <Route path="/announcement" component={Announcement} />
              <Route path="/studentschedule" component={StudentSchedule} />
              <Route path="/addmodule" component={AddModule} />
              <Route path="/addschedule" component={AddSchedule} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
