import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            jobTitle : '',
            phoneNo : '',
            emailAddress : '',
            employeeCode : ''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmployeeCodeHandler = this.changeEmployeeCodeHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changeJobTitleHandler = this.changeJobTitleHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }

    changeEmailAddressHandler = (event) => {
        this.setState({emailAddress : event.target.value});
    }

    changeEmployeeCodeHandler = (event) => {
        this.setState({employeeCode : event.target.value});
    }

    changeJobTitleHandler = (event) => {
        this.setState({jobTitle : event.target.value});
    }

    changePhoneNoHandler = (event) => {
        this.setState({phoneNo : event.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName , lastName: this.state.lastName , emailAddress: this.state.emailAddress , phoneNo: this.state.phoneNo, jobTitle: this.state.jobTitle, employeeCode:this.state.employeeCode};
        console.log('employee =>' + JSON.stringify(employee));
        EmployeeService.addEmployee(employee);
    }
    
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card-col-md-6 offset-md-3 offset-md-3"></div>
                        <h3 className = "text-center">New Employee Form</h3>
                        <div className = "card-body">
                            <form>

                                <div className = "form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Job Title:</label>
                                    <input placeholder="Job Title" name="jobTilte" className="form-control"
                                            value={this.state.jobTitle} onChange={this.changeJobTitleHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Phone No:</label>
                                    <input placeholder="Phone No" name="phoneNo" className="form-control"
                                            value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Email Address:</label>
                                    <input placeholder="Email Address" name="emailAddress" className="form-control"
                                            value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Employee Code:</label>
                                    <input placeholder="Employee Code" name="employeeCode" className="form-control"
                                            value={this.state.employeeCode} onChange={this.changeEmployeeCodeHandler}/>
                                    
                                </div>
                                <button className = "btn btn-success" onClick={this.saveEmployee} > Save </button>
                                <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style = {{marginLeft : "10px" }}> Cancel </button>

                            </form>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateEmployeeComponent;