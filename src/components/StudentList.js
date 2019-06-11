import React, {Component} from 'react'
import StudentInfo from './StudentInfo'
import { connect } from 'react-redux';
import uuid from "uuid";
 class StudentList extends Component { 
    render() {
        const {items} = this.props;
        //console.log(items)
        return (
            <ul className = "list-group my-5">
                <h3 className = "text-capitalize text-center">
                    Students
                </h3>
                    {
                        items.map(student => {
                            //console.log(student.email)
                            return <StudentInfo key = {uuid()} name = {student.name} email= {student.email} />
                        })
                    }
            </ul>
            );
    }
}
const mapStateToProps = state => ({
    items: state.items
  });
export default connect(mapStateToProps)(StudentList);