// const school = {
//     classes: [
//       {
//         className: "Math",
//         students: [
//           {
//             name: "Mahesh",
//             grades: [85, 92, 88],
//           },
//           {
//             name: "Hema",
//             grades: [78, 81, 85],
//           },
//           {
//             name: "Suresh",
//             grades: [90, 87, 91],
//           },
//         ],
//       },
//       {
//         className: "Science",
//         students: [
//           {
//             name: "Naresh",
//             grades: [92, 85, 89],
//           },
//           {
//             name: "Uma",
//             grades: [88, 91, 92],
//           },
//           {
//             name: "Priya",
//             grades: [84, 78, 80],
//           },
//         ],
//       },
//     ],
//   };

  // // // Output:
  // class Name is Math
  // class Name is Science
 
// OutPut: 
// Maths students 1 is Mahesh
// Maths students 2 is Hema
// Maths students 3 is Suresh
// Science students 1 is Naresh
// Science students 2 is Uma
// Science students 3 is Priya

const school = {
    classes: [
      {
        className: "Math",
        students: [
          {
            name: "Mahesh",
            grades: [85, 92, 88],
          },
          {
            name: "Hema",
            grades: [78, 81, 85],
          },
          {
            name: "Suresh",
            grades: [90, 87, 91],
          },
        ],
      },
      {
        className: "Science",
        students: [
          {
            name: "Naresh",
            grades: [92, 85, 89],
          },
          {
            name: "Uma",
            grades: [88, 91, 92],
          },
          {
            name: "Priya",
            grades: [84, 78, 80],
          },
        ],
      },
    ],
  };
  
  // Process the data using filter, map, and reduce with arrow functions
  school.classes
    .filter(classObj => classObj.students && classObj.students.length > 0)  // Filter classes with students
    .map(classObj => {
      console.log(`class Name is ${classObj.className}`);
      
      classObj.students
        .map((student, index) => {
          const gradeSum = student.grades.reduce((total, grade) => total + grade, 0);  // Reduce to calculate total grades
          return `${classObj.className} students ${index + 1} is ${student.name} with total grades: ${gradeSum}`;
        })
        .forEach(output => console.log(output));  // Log each student information
    });
  