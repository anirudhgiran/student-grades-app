import React from "react";

//React Component Imports
import ViewStudents from './ViewStudents';
import AddStudent from './AddStudent';
import StudentDetails from './StudentDetails';

//React Router DOM Imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Menu = ({ auth, firestore }) => {
  return (
    <Router>
      <section>
        <h3>Welcome to student grade app!</h3>

        <Route path="/" exact>
          <Link to="/add">Add New Student</Link>
          <Link to="/view">View Students</Link>
        </Route>
        
        <Route path="/view" exact >
          <ViewStudents auth={auth} firestore={firestore}/>
        </Route>
        <Route path="/add" exact >
          <AddStudent auth={auth} firestore={firestore}/>
        </Route>

        <Route path="/view/:id" render={(props) => <StudentDetails {...props} auth={auth} firestore={firestore}/>}/>
        
      </section>
    </Router>
  );
};

export default Menu;
