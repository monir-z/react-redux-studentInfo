import React from 'react';
import InfoInput from './components/InfoInput';
import StudentList from './components/StudentList';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h2 className="text-capitalize text-center">Student Info Input</h2>
          <InfoInput />
          <StudentList /> 

          </div>
        </div>
      </div>


  );
}

export default App;
