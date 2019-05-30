import React, {Component} from 'react'
import StudentInfo from './StudentInfo'

export default class StudentList extends Component { 
    render() {
        return (
            <ul className = "list-group my-5">
                <h3 className = "text-capitalize text-center">
                    Students
                </h3>
                < StudentInfo />
                <button type = "button" className = "btn btn-danger btn-block text-capitalize mt-5">
                    Clear All
                </button>
            </ul>
            );
    }
}