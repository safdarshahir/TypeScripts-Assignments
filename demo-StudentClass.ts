class Student{

    studId:number = 0;
    stuName:string = "";
    stuAge:number = 0;
    stuStandard:number = 0;
    stuRollNo: number = 0;
    stuAddress: string ="";
    stuContact:number = 0;

    constructor(id:number,
                name:string,
                age:number,
                standard:number,
                rollNo:number,
                address:string,
                contact:number){

                    this.studId = id;
                    this.stuName = name;
                    this.stuAge = age;
                    this.stuStandard = standard;
                    this.stuRollNo = rollNo;
                    this.stuAddress = address;
                    this.stuContact = contact;
    }

    displayStudent(){
        console.log(this);
    }
}

let studentOne = new Student(1,"tyui",24,12,4,"TVM",43984938493);
let studentTwo = new Student(2,"rewui",24,12,5,"COK",98394348);
let studentThree = new Student(3,"qwert",23,11,6,"KAN",384638643);
let studentFour = new Student(4,"asdf",23,11,7,"FKO",3947399473);
let studentFive = new Student(5,"zxcv",20,10,8,"KSG",9739277232);

let students = [];

students.push(studentOne,studentTwo,studentThree,studentFour,studentFive);

for(let student of students){
    console.log(student);
}