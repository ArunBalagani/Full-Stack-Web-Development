// function ObjParent(name){
//     // this.Name = name
// }
// let objParent = new ObjParent("Hema");
// ObjParent.prototype.role = "Developer"
// console.log(objParent)

class ParentClass {
    constructor(name) {
      this.Name = name,
        this.getName = function () {
          return `My name is ${this.Name}`;
        };
    }
    getRole() {
      return "My role is Developer";
    }
    static city = "HYD";
    static sayHi() {
      return "Welcome to class...";
    }
  }
  
  let parentClass1= new ParentClass("Hema")
  console.log(parentClass1)
  // console.log(parentClass1.getName())
  // console.log(parentClass1.getRole())
  // console.log(parentClass1.city)
  // console.log(ParentClass.city)
  // console.log(ParentClass.sayHi())
  
  class ChildClass extends ParentClass{
      constructor(name,role,salary){
          super(name,salary)
          this.Role = role,
          this.Salary = salary
      }
  }
  
  let childClass1 = new ChildClass("Mahesh","Tester","Salary")
  console.log(childClass1)
  
  class GrandChildClass extends ChildClass{
      constructor(name,role,salary,finace){
          super(name,role,salary)
          this.finace = finace
      }
  }
  
  let grandChildClass1 = new GrandChildClass("Ram","DevOps","Salary","Finace")
  console.log(grandChildClass1)
  
  class PrivateClass extends GrandChildClass{
      #Name1;
      constructor(name,role,salary,finace,company)
      {
          super(name,role,salary,finace)
          this.#Name1 = company
      }
  
  }
  let privateClass = new PrivateClass("Ram","DevOps","Salary","Finace","Tata")
  console.log(privateClass)