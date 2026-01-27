// 1 create interface
interface Employee {
    id: number
    name: string
    salary: number
    getSalary(): number
}

// 2 create class FullTimeEmployee implements Employee

class FullTimeEmployee implements Employee {
    id: number
    name: string
    salary: number
    getSalary(): number {
        return this.salary
    }
}

// 3 create class PartTimeEmployee implements Employee
class PartTimeEmployee implements Employee {
    id: number
    name: string
    salary: number
    hoursWorked: number
    getSalary(): number {
        return this.salary * this.hoursWorked
    }
}

function calculateTotalSalary(employees: Employee[]): number {
    let totalSalary = 0
    for (const employee of employees) {
        totalSalary += employee.getSalary()
    }
    return totalSalary
}


const fullTimeEmployee = new FullTimeEmployee()
fullTimeEmployee.id = 1
fullTimeEmployee.name = "Nguyen Van A"
fullTimeEmployee.salary = 1000
fullTimeEmployee.getSalary()

const partTimeEmployee = new PartTimeEmployee()
partTimeEmployee.id = 2
partTimeEmployee.name = "Tran Van B"
partTimeEmployee.salary = 500
partTimeEmployee.hoursWorked = 5

const employees: Employee[] = [fullTimeEmployee, partTimeEmployee]
console.log(`Total Salary: ${calculateTotalSalary(employees)}`)