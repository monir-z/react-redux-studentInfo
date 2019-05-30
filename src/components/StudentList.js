import React, {Component} from 'react'
import StudentInfo from './StudentInfo'

export default class StudentList extends Component { 
    render() {
        return (
            <div>
                <h1>This is Student List</h1>
                <StudentInfo />
            </div>
            );
    }
}