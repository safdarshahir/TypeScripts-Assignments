class Student{

    //declare fields
    studId:number = 0;
    stuName:string = "";
    stuAge:number = 0;
    stuStandard:number = 0;
    stuRollNo: number = 0;
    stuAddress: string ="";
    stuContact:number = 0;

    //constructor
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

    // concrete methods
    displayStudent(){
        console.log(this);
    }
}

var id:number = 0;
var studentname;
var age;
var standard = 0;
var rollNo = 0;
var address = '';
var contact = 0;

//creating student arrays
let students = [];

//getting values from user
for(let i =0;i<1;i++){

    id = Number(window.prompt("Enter student id:"));
    studentname = String(window.prompt("Enter student Name:"));
    age = Number(window.prompt("Enter student Id:"));
    standard = Number(window.prompt("Enter student standard:"));
    rollNo = Number(window.prompt("Enter student roll No.:"));
    address = String(window.prompt("Enter address:"));
    contact = Number(window.prompt("Enter contact no:"));

    //adding student to students array
    students.push( new Student(id,studentname,age,standard,rollNo,address,contact))
}

//printing each students on the console
for(let student of students){
    console.log(student);
}