import { Student, type StudentI } from "./Student"

export interface ClassRoomI {
    getName: () => string
    setName: (name: string) => void
    addStudent: (student: Student) => void
    removeStudent: (studentName: string) => void
    notify: (msg: string) => void
    postAnnouncement: (msg: string) => void
}

export class ClassRoom implements ClassRoomI {
    private name: string
    private students: StudentI[]

    constructor(name: string) {
        this.name = name
        this.students = []
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    addStudent(student: Student): void {
        this.students.push(student)
    }

    removeStudent(studentName: string) {
        const index = this.students.findIndex((s: StudentI) => s.getName() === studentName)
        if (index === -1) {
            console.log(`Student ${studentName} not found !`)
            return
        }
        this.students.splice(index, 1)
    }

    notify(msg: string) {
        if (this.students.length === 0) {
            console.log(`The class ${this.getName()} has no students yet`)
            return
        }
        this.students.forEach(student => student.update(msg))
    }

    postAnnouncement(msg: string) {
        console.log(`${this.name} new notification`)
        this.notify(msg)
    }
}