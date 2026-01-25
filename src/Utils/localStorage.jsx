export const employees = [
  {
    id: 1,
    firstName: "Taro",
    email: "employee1@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Fix login bug",
        description: "Resolve login issue on employee portal",
        date: "2025-01-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "UI update",
        description: "Improve dashboard UI",
        date: "2025-01-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "API testing",
        description: "Test authentication APIs",
        date: "2025-01-05",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstName: "Kenji",
    email: "employee2@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 4,
      completed: 3,
      failed: 3
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Create reports",
        description: "Generate monthly sales reports",
        date: "2025-01-09",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Client meeting",
        description: "Discuss requirements with client",
        date: "2025-01-07",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Data cleanup",
        description: "Clean old database entries",
        date: "2025-01-04",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Hiroshi",
    email: "employee3@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Write documentation",
        description: "Prepare API documentation",
        date: "2025-01-11",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Code review",
        description: "Review pull requests",
        date: "2025-01-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Deploy app",
        description: "Deploy new build to server",
        date: "2025-01-03",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstName: "Satoshi",
    email: "employee4@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Security check",
        description: "Perform security audit",
        date: "2025-01-12",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Bug fixing",
        description: "Fix reported bugs",
        date: "2025-01-08",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Server backup",
        description: "Backup production server",
        date: "2025-01-02",
        category: "Infrastructure",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "Yuki",
    email: "employee5@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Market research",
        description: "Analyze competitor apps",
        date: "2025-01-13",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Presentation",
        description: "Prepare project presentation",
        date: "2025-01-09",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Survey analysis",
        description: "Analyze customer survey data",
        date: "2025-01-01",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

export const admin = [
  {
    id: 1,
    firstName: "Masato",
    email: "admin@company.com",
    password: "123"
  }
];


 
//SetLocalStorage function local storage me data set kar raha hai 
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
//getlocalstorage function us data ko console mei show kar waega use effect k throw jo humne app.jsx mei banai hai 
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(admin,employees)
  // yaha console na karke mei return kar raha hun phir ye data kahi bhi use kar sakte hai

  return { employees, admin }
}