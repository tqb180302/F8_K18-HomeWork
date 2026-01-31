interface  EmployeeI {
    getId: () => number
    getName: () => string
    setName: (name: string) => void
    getSalary: () => number
    setSalary: (salary: number) => void
    calculateSalary: () => number
}

abstract class Employee implements EmployeeI {
    private id: number
    private name: string
    private salary: number

    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.salary = 0
        this.setSalary(salary)
    }
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public setName(name: string){
        this.name = name
    }
    public getSalary(){
        return this.salary
    }
    public setSalary(salary: number){
        if (salary <= 0){
            console.log("Salary must be greater than 0")
        }
        else this.salary = salary
    }
    abstract calculateSalary(): number
}

class Developer extends Employee {
    private overtimeHours: number
    constructor(
        id: number,
        name: string,
        salary: number,
        overtimeHours: number
    ) {
        super(id, name, salary)
        this.overtimeHours = overtimeHours
    }
    getOvertimeHours(): number {
        return this.overtimeHours
    }
    setOvertimeHours(overtimeHours: number): void {
        this.overtimeHours = overtimeHours
    }

    calculateSalary(): number {
        return this.getSalary()+ this.overtimeHours * 50000
    }
}

class Manager extends Employee {
    private teamSize: number
    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary)
        this.teamSize = teamSize
    }
    getTeamSize(): number {
        return this.teamSize
    }
    setTeamSize(teamSize: number): void {
        this.teamSize = teamSize
    }

    calculateSalary(): number {
        return this.getSalary() + this.teamSize * 200000
    }
}

const dev:Developer = new Developer(1, "Nguyễn Văn Dev", 1000, 8)
console.log(dev.getName())
dev.setSalary(-10) //Salary must be greater than 0
dev.setSalary(1000)
console.log(dev.calculateSalary())

const manager:Manager = new Manager(2, "Trần Văn Sếp", 2000, 10)
console.log(manager.getName())
console.log(manager.calculateSalary())
