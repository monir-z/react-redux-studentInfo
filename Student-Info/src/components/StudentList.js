import React, { Component } from 'react';
import { connect,} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import 'antd/dist/antd.css';
import { Input, Button,List  } from 'antd';

import {
  getNameChangeAction, 
  getEmailChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitListAction
} from '../store/createActions'


class StudentList extends Component{

  componentDidMount(){
    // get init data
    this.props.getInitList()
  }
  
  render () {
    const {name,email,list ,nameChange,emailChange, handleAddItem, handleDeleteItem} = this.props
    //console.log("Student List", list)
    return (

      <div className = " mx-auto centered">
        <div className = "container">
          <h4>Enter Student Name and Email</h4>
          <div className = "input-group">
            <Input 
              placeholder="Student Name" 
              required
              style={{width:400, marginRight:10}}
              value={name}
              onChange={nameChange}
            />
          </div >
          <div className = "input-group">
            <Input 
              placeholder="Student Email" 
              style={{width:400, marginRight:10}}
              value={email}
              onChange={emailChange}
            />
          </div>
          <div className= "input-group">
            <Button className = "btn btn-primary btn-blue" style={{cursor:'pointer'}} onClick={handleAddItem}>ADD STUDENT</Button>
          </div>
        </div>

        <div className = "container">
        <List
          style={{width:400,marginTop:10, cursor:'pointer'}}
          bordered
          dataSource={list}
          renderItem={(item,index) => (<List.Item onClick={() => {handleDeleteItem(index)}}>Name : {item[0]} , Email : {item[1]}</List.Item>)}
        />
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    email: state.email,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nameChange(e) {
      const action = getNameChangeAction(e.target.value)
      dispatch(action)
    },
    emailChange(e) {
      const action = getEmailChangeAction(e.target.value)
      dispatch(action)
    },
    handleAddItem() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    },
    getInitList() {
      const action = getInitListAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)