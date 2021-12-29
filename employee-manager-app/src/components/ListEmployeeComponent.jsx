import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
    

class ListEmployeeComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount(){

        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees: response.data})
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }


    render() {
        return (
            <div>
                <h2 className = "text-centre" > Employees List </h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                </div>
                <div></div>
                <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td> Employee Code</td>
                            <td> First Name</td>
                            <td> Last Name </td>
                            <td> Designation </td>
                            <td> Email ID</td>
                            <td> Actions </td>
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
                                    <td>              
                                        <button className = "btn btn-info" onClick={ () => this.editEmployee(employee.id)} > Update </button>    
                                    </td>
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

export default ListEmployeeComponent;