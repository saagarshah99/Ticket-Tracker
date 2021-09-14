const randomNumberOfTickets = () => {
    return Math.floor(Math.random() * 100);
}

const team = [
    {
      id: 1,
      name: "Alima Miller",
      role: "Junior Software Developer",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 2,
      name: "Evelyn Rodgers",
      role: "Junior Software Developer",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 3,
      name: "Henley Myers",
      role: "Junior Software Developer",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 4,
      name: "Celyn Sanders",
      role: "Software Developer",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 5,
      name: "Effie Mohamed",
      role: "Software Developer",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 6,
      name: "Karam Lees",
      role: "Senior Software Developer",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 7,
      name: "Eleanor Dowling",
      role: "Project Manager",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 8,
      name: "Haris Grey",
      role: "Tester",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 9,
      name: "Sohaib Farley",
      role: "Tester",
      numberOfTickets: randomNumberOfTickets()
    },
    {
      id: 10,
      name: "Phillip Mitchell",
      role: "Hard Man",
      numberOfTickets: randomNumberOfTickets()
    },
  ]
  export default team;