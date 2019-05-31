import React, {Component} from 'react'
import InfoInput from './components/InfoInput';
import StudentList from './components/StudentList';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
class App extends Component {

    state = {
    items: [],
    id: uuid(), 
    name: '',
    email: '',
    editItem: false
    };
    handleChangeName = e =>{
      this.setState(
        {
          name: e.target.value
        }
      );
    };
    handleChangeEmail = e =>{
      this.setState(
        {
          email: e.target.value
        }
      );
    };
    handleSubmit= e  => {
      e.preventDefault();

      const newItem = {
        id: this.state.id,
        name: this.state.name, 
        email: this.state.email
      }
      console.log(newItem);
      const updatedItems = [...this.state.items, newItem];
      this.setState(
        {
          items: updatedItems, 
          name: '', 
          email: '',
          id: uuid(), 
          editItem: false

        }
      )
    }
    clearAll = () => {
      this.setState(
        {items: []}
      );
    }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center">Student Info Input</h2>
            <InfoInput
            
            name = {this.state.name}
            email = {this.state.email}
            handleChangeName = {this.handleChangeName}
            handleChangeEmail = {this.handleChangeEmail}

            handleSubmit = {this.handleSubmit}
            />

            <StudentList 
              items= {this.state.items}
              clearAll = {this.clearAll}
            /> 

          </div>
        </div>
      </div>


    );
  }
}

export default App;
