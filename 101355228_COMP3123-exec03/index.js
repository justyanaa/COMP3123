const http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//const employees =  require('getAllEmployees');
const EmployeeModule = require("./Employee");
//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    var isSuccess = false;
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>");
            isSuccess = true;
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(EmployeeModule.getAllEmployees()));
            isSuccess = true;
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            var employeeNames = EmployeeModule.getEmployeeNames().sort();
            res.write(JSON.stringify(employeeNames));
            isSuccess = true;
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.write(JSON.stringify(EmployeeModule.getTotalSalary()));
            isSuccess = true;
    }
        if(!isSuccess){
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
        } else {
            res.end();
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
