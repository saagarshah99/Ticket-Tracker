const randomNumberOfTickets = () => Math.floor(Math.random() * 100);

const team = [
    {
        id: 1,
        name: "Wei-Tong Tang",
        role: "Wizard Developer",
    },
    {
        id: 2,
        name: "Saagar Shah",
        role: "Junior Wizard Developer",
    },
    {
        id: 3,
        name: "Henley Myers",
        role: "Junior Software Developer",
    },
    {
        id: 4,
        name: "Celyn Sanders",
        role: "Software Developer",
    },
    {
        id: 5,
        name: "Effie Mohamed",
        role: "Software Developer",
    },
    {
        id: 6,
        name: "Karam Lees",
        role: "Senior Software Developer",
    },
    {
        id: 7,
        name: "Eleanor Dowling",
        role: "Project Manager",
    },
    {
        id: 8,
        name: "Haris Grey",
        role: "Tester",
    },
    {
        id: 9,
        name: "Sohaib Farley",
        role: "Tester",
    },
    {
        id: 10,
        name: "Phillip Mitchell",
        role: "Hard Man",
    },
];
team.forEach(employee => employee.numberOfTickets = randomNumberOfTickets());


export default team;