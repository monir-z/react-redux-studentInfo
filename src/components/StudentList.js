import React, {Component} from 'react'
import StudentInfo from './StudentInfo'

export default class StudentList extends Component { 
    render() {
        const {items, clearAll} = this.props;
        return (
            <ul className = "list-group my-5">
                <h3 className = "text-capitalize text-center">
                    Students
                </h3>
                    {
                        items.map(student => {
                            return <StudentInfo key = {student.id} name = {student.name} email= {student.email} />
                        })
                    }
                <button type = "button" className = "btn btn-danger btn-block text-capitalize mt-5" onClick= {clearAll}>
                    Clear All
                </button>
            </ul>
            );
    }
}