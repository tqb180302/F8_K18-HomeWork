import {ClassRoom} from "./ClassRoom"
import {Student} from "./Student"

const ClassK18 = new ClassRoom("F8 K18")

const Bao = new Student("Bao")
const Quoc = new Student("Quoc")


ClassK18.addStudent(Bao)
ClassK18.postAnnouncement("Mai kiểm tra OOP")