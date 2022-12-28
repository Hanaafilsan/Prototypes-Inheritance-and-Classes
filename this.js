/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. windo binding
* 2. implicit binding
* 3. explicit binding
* 4. new binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var Name="filsan"
var Name="hanaa"
console.log(this.Name)
// Principle 2

// code example for Implicit Binding
const student0={
    myName:"hanaa",
    city:"mogadishu",
    sayHi:function(){
        console.log(`Hi, my name is ${this.myName}`)
    }
}
student0.sayHi();
// Principle 3

// code example for New Binding
function Student(myName,location){
    this.myName=myName;
    this.location=location
}

const student2=new Student("Ahmed","hargaysa")
console.log(student2.location)

// Principle 4

// code example for Explicit Binding
function student(){
    console.log(this.myName)
}
const student1={
    myName: "faiza",
    location:"ohio"
}
student.call(student1)
