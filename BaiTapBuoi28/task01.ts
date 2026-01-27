interface Partime {
    id: number
    name: string
    salary: number
    hoursWorked: number
}

const partTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
}

const newHoursWorked: Partime = {
    ...partTime,
    hoursWorked: 45
}

console.log(newHoursWorked)
