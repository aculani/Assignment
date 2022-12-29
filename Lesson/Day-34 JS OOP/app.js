class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}
class Student extends Person {
    constructor() {
        super('SedErdene', 'male', 17);
        this.courseName = 'PineCone';
        this.favouriteColor = 'blue';
        this.heigth = '165cm';
        this.weigth = '65kg';
    }

}
const student2 = new Student();
console.log(student2);