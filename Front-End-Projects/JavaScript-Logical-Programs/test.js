const school = {
    classes: [
      {
        className: "Math",
        students: [
          { name: "Mahesh", grades: [85, 92, 88] },
          { name: "Hema", grades: [78, 81, 85] },
          { name: "Suresh", grades: [90, 87, 91] },
        ],
      },
      {
        className: "Science",
        students: [
          { name: "Naresh", grades: [92, 85, 89] },
          { name: "Uma", grades: [88, 91, 92] },
          { name: "Priya", grades: [84, 78, 80] },
        ],
      },
    ],
  };

  // Displaying class names
school.classes.forEach((classItem) => {
    console.log(`class Name is ${classItem.className} `);
  });

  // Displaying students with their indices
school.classes.forEach((classItem) => {
    classItem.students.forEach((student, index) => {
      console.log(`${classItem.className} students ${index + 1} is ${student.name} `);
    });
  });


// Calculating the sum of grades for each student
school.classes.forEach((classItem) => {
    classItem.students.forEach((student) => {
      const gradesSum = student.grades.reduce((acc, grade) => acc + grade, 0);
      console.log(`${student.name}'s total grades sum is ${gradesSum} `);
    });
  });



// Todo App Project Structure Using MERN (Multiple Roles)

// Blog Platform Project Structure Using MERN (Multiple Roles)

// E-commerce Website Project Structure Using MERN (Multiple Roles)

// Social Media App Project Structure Using MERN (Multiple Roles)

// Real-time Chat Application Project Structure Using MERN (Multiple Roles)

// Job Board Project Structure Using MERN (Multiple Roles)

// Online Learning Platform Project Structure Using MERN (Multiple Roles)

// Portfolio Website Project Structure Using MERN (Multiple Roles)

// Fitness Tracker Project Structure Using MERN (Multiple Roles)

// Movie Review App Project Structure Using MERN (Multiple Roles)

// Recipe Sharing App Project Structure Using MERN (Multiple Roles)

// Project Management Tool Project Structure Using MERN (Multiple Roles)

// Expense Tracker Project Structure Using MERN (Multiple Roles)

// Weather App Project Structure Using MERN (Multiple Roles)

// Music Streaming Platform Project Structure Using MERN (Multiple Roles)

// Event Booking System Project Structure Using MERN (Multiple Roles)

// Travel Booking App Project Structure Using MERN (Multiple Roles)

// Restaurant Reservation System Project Structure Using MERN (Multiple Roles)

// Online Quiz App Project Structure Using MERN (Multiple Roles)

// Task Management System Project Structure Using MERN (Multiple Roles)

// Customer Relationship Management (CRM) Project Structure Using MERN (Multiple Roles)

// Content Management System (CMS) Project Structure Using MERN (Multiple Roles)

// Online Forum Project Structure Using MERN (Multiple Roles)

// Inventory Management System Project Structure Using MERN (Multiple Roles)

// Document Collaboration Tool Project Structure Using MERN (Multiple Roles)

// Video Streaming Platform Project Structure Using MERN (Multiple Roles)

// Car Rental System Project Structure Using MERN (Multiple Roles)

// Marketplace for Freelancers Project Structure Using MERN (Multiple Roles)

// Book Review and Sharing App Project Structure Using MERN (Multiple Roles)

// Personal Finance Management System Project Structure Using MERN (Multiple Roles)

// Team Collaboration Tool Project Structure Using MERN (Multiple Roles)

// Hotel Booking System Project Structure Using MERN (Multiple Roles)

// Donation Platform Project Structure Using MERN (Multiple Roles)

// Health Monitoring App Project Structure Using MERN (Multiple Roles)

// Ticket Booking System Project Structure Using MERN (Multiple Roles)

// Stock Trading Platform Project Structure Using MERN (Multiple Roles)

// Online Voting System Project Structure Using MERN (Multiple Roles)

// Real Estate Platform Project Structure Using MERN (Multiple Roles)

// Online Food Ordering System Project Structure Using MERN (Multiple Roles)

// Pet Adoption Platform Project Structure Using MERN (Multiple Roles)

// Event Management System Project Structure Using MERN (Multiple Roles)

// Ride-Sharing App Project Structure Using MERN (Multiple Roles)

// Online Auction Platform Project Structure Using MERN (Multiple Roles)

// News Aggregator Project Structure Using MERN (Multiple Roles)

// Classroom Management System Project Structure Using MERN (Multiple Roles)

// Fitness and Nutrition App Project Structure Using MERN (Multiple Roles)

// Online Library System Project Structure Using MERN (Multiple Roles)

// Language Learning Platform Project Structure Using MERN (Multiple Roles)

// User Authentication System Project Structure Using MERN (Multiple Roles)

// Password Manager Project Structure Using MERN (Multiple Roles)