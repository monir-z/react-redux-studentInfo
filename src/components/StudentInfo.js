import React, {Component} from 'react'
export default class Studentinfo extends Component { 
    render() {
        const {name, email} = this.props;
        console.log(email)
        return ( 
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6>{name}</h6>
                <h6>{email}</h6>
                <div>
                    <span className ="mx-4 text-success">
                        <i className="fas fa-trash" style={{cursor:'pointer'}}></i> 
                    </span>
                </div>
            </li>
        );

    }
}