import React, {Component} from 'react'
export default class InfoInput extends Component { 
    render() {

        return ( 
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6>the mid-night rider</h6>
                <div>
                    <span className ="mx-2 text-success">
                        <i className="fas fa-pen"></i> 
                    </span>
                    <span className ="mx-2 text-success">
                        <i className="fas fa-trash"></i> 
                    </span>
                </div>
            </li>
        );

    }
}