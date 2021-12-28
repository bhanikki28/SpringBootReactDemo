import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }
    }

    componentDidMount(){

        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className = "text-centre"> Employees List </h1>
                <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td> Employee Code</td>
                            <td> First Name</td>
                            <td> Last Name </td>
                            <td> Designation </td>
                            <td> Email ID</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id} >
                                    <td> {employee.employeeCode}    </td>
                                    <td> {employee.firstName}   </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.jobTitle} </td>
                                    <td> {employee.emailAddress}    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
                </div>
                
            </div>
        );
    }
}

export default EmployeeComponent;