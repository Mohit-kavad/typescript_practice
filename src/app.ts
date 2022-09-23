// classes

class Department {
  // privaye readonly id :string;   //--> readonly keyword just like private public by this Kword can not write
  // public name: string;
  // private employees: string[] = []; //array Type->string[] &  can accessible only inside this class
  protected employees: string[] = [];
  static fiscalYear =2022;
  constructor(private readonly id: string, public name: string) {
    //  ^---short method to declare propertice with access modifire &
    // this.name = n;
  }
  discribe() {
    console.log(`Depatment (${this.id}): ${this.name}`);
  }
  static createEmployee(name:string){
    return {name : name}
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees); // print the array
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); // super() tacks the argument of parentclass constructor
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
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
console.log(employeeName,Department.fiscalYear);

