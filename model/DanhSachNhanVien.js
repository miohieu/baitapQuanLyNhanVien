class EmployeesList {
  employeeList = [];
  addEmployee(employee) {
    this.employeeList.push(employee);
  }
  findEmployee(username) {
    const len = this.employeeList.length;
    let index = -1;
    for (let i = 0; i < len; i++) {
      let employeeUsername = this.employeeList[i].username;
      if (username === employeeUsername) {
        index = i;
      }
    }
    return index;
  }
  deleteEmployee(key) {
    let employeeKey = this.findEmployee(key);
    this.employeeList.splice(employeeKey, 1);
  }
    updateEmployee(employee){
        let employeeKey = this.findEmployee(employee.username)
           employeeKey !== -1 ? this.employeeList[employeeKey] = employee : -1;
        
    }
}
