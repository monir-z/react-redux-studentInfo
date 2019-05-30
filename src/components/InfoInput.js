import React, {Component} from 'react'

export default class InfoInput extends Component { 
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-info"></i> 
                           </div>
                       </div>
                       <input type="text" className="form-control" placeholder = "Enter your name here!!!"/>
                       
                    </div> 

                    <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-info"></i> 
                           </div>
                       </div>
                       <input type="text" className="form-control" placeholder = "Enter your email here!!!"/>
                       
                    </div> 
                </form>
            </div>
        );
    }
}