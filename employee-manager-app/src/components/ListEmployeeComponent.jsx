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

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res  => {
            this.setState({
                employees : this.state.employees.filter(employee => employee.id !== id)
            });
        });
    }


    render() {
        return (
            <div>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                </div>
                <h2 className = "text-centre" > IGD Employees List </h2>
                <div></div>
                <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead className="header">
                        <tr>
                            <td> First Name</td>
                            <td> Last Name </td>
                            <td> Designation </td>
                            <td> Email ID</td>
                            <td colSpan="3"> Actions </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id} >
                                    <td> {employee.firstName}   </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.jobTitle} </td>
                                    <td> {employee.emailAddress}    </td>
                                    <td>              
                                        <button className = "btn btn-info" onClick={ () => this.editEmployee(employee.id)} > Update </button>    
                                    </td>
                                    <td>              
                                        <button style={{ marginLeft: "10px"}}className = "btn btn-info" onClick={ () => this.deleteEmployee(employee.id)} > Delete </button>    
                                    </td>
                                    <td>              
                                        <button className = "btn btn-info" onClick={ () => this.editEmployee(employee.id)} > LinkedIn </button>    
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