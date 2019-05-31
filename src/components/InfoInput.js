import React, {Component} from 'react'

export default class InfoInput extends Component { 
    render() {
        const {name, email, handleChangeName,handleChangeEmail, handleSubmit} = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit = {handleSubmit}>
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-fas fa-smile-beam"></i> 
                           </div>
                       </div>
                       <input type="text" className="form-control" placeholder = "Enter your name here!!!" required
                       value = {name}
                       onChange = {handleChangeName}
                       />

                    </div> 

                    <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-address-book"></i> 
                           </div>
                       </div>
                       <input type="email" className="form-control" placeholder = "Enter your email here!!!" required
                       value = {email}
                       onChange = {handleChangeEmail}
                       />
                       
                    </div> 
                    <button type = "submit" className = "btn btn-block btn-primary mt-3">Add Name and Email</button>
                </form>
            </div>
        );
    }
}