"use strict";
// classes
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // privaye readonly id :string;   //--> readonly keyword just like private public by this Kword can not write
        // public name: string;
        // private employees: string[] = []; //array Type->string[] &  can accessible only inside this class
        this.employees = [];
        //  ^---short method to declare propertice with access modifire &
        // this.name = n;
    }
    discribe() {
        console.log(`Depatment (${this.id}): ${this.name}`);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees); // print the array
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); // super() tacks the argument of parentclass constructor
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("1", ["mohit"]);
console.log(it);
it.discribe();
it.addEmployee("Mohit");
it.addEmployee("Khushal");
it.addEmployee("Ayush");
// it.employees[2] = "Mihir"  // we can change arrays value outside of the class if property is not private
it.printEmployeeInformation();
//accounting department
const accounting = new AccountingDepartment("2", []);
accounting.addEmployee("Mihir");
accounting.addEmployee("ashish");
accounting.addEmployee("Max"); // will not print method overridding
accounting.addReport("somthing went wrong");
accounting.addReport("Page 404 not Found");
accounting.printReports();
accounting.printEmployeeInformation();
console.log(accounting);
// using static method 
const employeeName = Department.createEmployee('Jonas');
console.log(employeeName, Department.fiscalYear);
