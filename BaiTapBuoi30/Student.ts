export interface StudentI {
    getName: () => string
    setName: (name: string) => void
    update: (msg: string) => void
    receiveMsg: (msg: string) => void
}

export class Student implements StudentI {
    private name: string
    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    update(msg: string) {
        console.log(`Student ${this.getName()} get: ${msg}`)
    }

    receiveMsg(msg: string) {
        this.update(msg)
    }
}