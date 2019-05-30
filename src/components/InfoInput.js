import React, {Component} from 'react'

export default class InfoInput extends Component { 
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-fas fa-smile-beam"></i> 
                           </div>
                       </div>
                       <input type="text" className="form-control" placeholder = "Enter your name here!!!"/>
                       
                    </div> 

                    <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-address-book"></i> 
                           </div>
                       </div>
                       <input type="text" className="form-control" placeholder = "Enter your email here!!!"/>
                       
                    </div> 
                    <button type = "button" className = "btn btn-block btn-primary mt-3">ADD</button>
                </form>
            </div>
        );
    }
}