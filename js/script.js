'use strict';

class Employee {

    static holiday = 18;

    constructor (firsName, lastName, age, jobPosition, salary) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }

    get fullName () {
        return `${this.firsName} ${this.lastName}`;
    }

    isAnnualSalary () {
        console.log(this.salary * 12);
    }
}

const employeeOne = new Employee ('Mike', 'Vakovski', 91, 'Manager', 3053);

console.log(employeeOne);
console.log(employeeOne.fullName);
employeeOne.isAnnualSalary();

const employeeTwo = new Employee ('Bob', 'Marli', 31, 'Singer', 35);

console.log(employeeTwo);
console.log(employeeTwo.fullName);
employeeTwo.isAnnualSalary();