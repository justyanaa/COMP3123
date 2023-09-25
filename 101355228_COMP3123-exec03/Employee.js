let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

const getAllEmployees = () => {
    return employees;
};

const getEmployeeNames = () => {
    return employees.map(employee => `${employee.firstName} ${employee.lastName}`);
};

const getTotalSalary = () => {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary, 0);
    return { total_salary: totalSalary };
};

module.exports = {
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
};