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

    get FullName () {
        console.log(`${this.firsName} ${this.lastName}`);
    }

    annualSalary () {
        console.log(this.salary * 12);
    }
}

const Employee1 = new Employee ('Mike', 'Vakovski', 91, 'Manager', 3053);

console.log(Employee1);
Employee1.FullName;
Employee1.annualSalary();

const Employee2 = new Employee ('Bob', 'Marli', 31, 'Singer', 35);

console.log(Employee2);
Employee2.FullName;
Employee2.annualSalary();