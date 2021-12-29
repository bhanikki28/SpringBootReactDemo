import axios from 'axios'

const EMPLOYEE_API_URL = 'http://localhost:8095/igd/api/v1/employees';

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_URL);
    }

    addEmployee(employee){
        return axios.post(EMPLOYEE_API_URL,employee)
    }

    deleteEmployee(id){
        console.log('Delete Employee has been called')
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_URL + "/" + employeeId)
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_URL + "/" + employeeId, employee);
    }
}

export default new EmployeeService();
