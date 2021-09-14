import React from 'react';
import "./EmployeeBox.scss";
import Counter from "../../container/Counter/Counter"


const EmployeeBox = ({ teamArr }) => {
    // const teamList = teamArr.map((employee) => {
    //     return employee.name;
    // });

    return teamArr.map(({ name, role, numberOfTickets }) => {

        return (
            <div className="employeeBox">
                <p>Name: {name}</p>
                <p>Role: {role}</p>
                
                <div className="employeeBox__Counter">
                    <Counter numberOfTickets= {numberOfTickets} />
                </div>
            </div>
        )
    });
}

export default EmployeeBox
