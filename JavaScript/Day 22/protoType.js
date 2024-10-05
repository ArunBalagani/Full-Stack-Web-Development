// let student = {}
// console.log(student)

// let student = {
//     name:"Mahesh"
// }
// console.log(student)
// console.log(student.hasOwnProperty("age"))

// function Person(name){
//     this.Name = name
// }
// let person1 = new Person("Mahesh")
// console.log(person1)


function CricketCoach(name, age){
    this.Name = name,
    this.Age = age,
    this.Player = function(){
        return `Player name is ${this.Name} and age is ${this.Age} `
    }
}
let player1 = new CricketCoach("Mahesh",20)
let player2 = new CricketCoach("Hema",12)

// player2.skill = "Batting";
CricketCoach.prototype.skill = "Batting";
CricketCoach.prototype.Food = function(){
    return `Providing Food items`
}


// console.log(player1.Food())
// console.log(player2)


function ChildCoach(name, fruit){
    this.Name = name;
    this.Fruit = fruit;
}

let childPlayer = new ChildCoach("Ram","Apple");
ChildCoach.prototype.Book = "Run";
ChildCoach.prototype.Role = function(name){
    return `${name} Child Coach reading Book`;
}
// console.log(childPlayer.Role())
"Hema Child Coach reading Book"
// ChildCoach.prototype.__proto__ = CricketCoach.prototype;
CricketCoach.prototype.__proto__ = ChildCoach.prototype;

console.log(player1.Book)
console.log(player1.Role("Hema"))

console.log(childPlayer)
// console.log(player1)
// console.log(player1)
// console.log(childPlayer)
// console.log(childPlayer.skill)
// console.log(childPlayer.Food())