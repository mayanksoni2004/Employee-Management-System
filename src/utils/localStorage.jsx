const employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare report",
                "taskDescription": "Compile the monthly sales report.",
                "taskDate": "2023-11-01",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project updates with the client.",
                "taskDate": "2023-10-20",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory check",
                "taskDescription": "Complete an inventory audit for Q4.",
                "taskDate": "2023-11-15",
                "category": "Audit"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Ishita",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team workshop",
                "taskDescription": "Organize a skills development workshop.",
                "taskDate": "2023-11-18",
                "category": "Training"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Budget review",
                "taskDescription": "Analyze department budget for adjustments.",
                "taskDate": "2023-11-05",
                "category": "Finance"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstname": "Kabir",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from recent project delivery.",
                "taskDate": "2023-11-10",
                "category": "Customer Service"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "System upgrade",
                "taskDescription": "Install software updates on all systems.",
                "taskDate": "2023-11-20",
                "category": "IT"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Safety training",
                "taskDescription": "Conduct a mandatory safety training session.",
                "taskDate": "2023-11-15",
                "category": "Compliance"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Meera",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Project planning",
                "taskDescription": "Create a project timeline for new client.",
                "taskDate": "2023-11-01",
                "category": "Project Management"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review applications",
                "taskDescription": "Screen resumes for open positions.",
                "taskDate": "2023-11-16",
                "category": "HR"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Social media campaign",
                "taskDescription": "Launch the holiday season marketing campaign.",
                "taskDate": "2023-11-20",
                "category": "Marketing"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Ananya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update documentation",
                "taskDescription": "Revise the product manuals.",
                "taskDate": "2023-11-22",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Performance review",
                "taskDescription": "Complete quarterly performance reviews.",
                "taskDate": "2023-11-03",
                "category": "HR"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "System maintenance",
                "taskDescription": "Address recent system performance issues.",
                "taskDate": "2023-11-10",
                "category": "IT"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}