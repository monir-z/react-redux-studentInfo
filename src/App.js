import React, {Component} from 'react'
import InfoInput from './components/InfoInput';
import StudentList from './components/StudentList';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
import { connect } from 'react-redux';
//console.log()
class App extends Component {

    state = {id: uuid(), name: '', email: ''}
    
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
    handleSubmit = e  => {
      e.preventDefault();
      this.props.addStudent(this.state);
      return this.setState(
        {
          name: '', 
          email: '',
          id: uuid()
        }
      )
      
    }
  render() {
    //console.log(this.props);
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
            <StudentList /> 
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state.items
});
//console.log(this.props.items)
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (newItem) => {
      dispatch({type: 'ADD', payload: { value: newItem }})
    },
    deleteStudent: (id) => {
      dispatch({type: 'DELETE', payload: { value: id }})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);