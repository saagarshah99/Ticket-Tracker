import React from 'react';
import "./EmployeeBox.scss";
import Counter from "../../container/Counter/Counter"


const EmployeeBox = ({ teamArr }) => {
    // const teamList = teamArr.map((employee) => {
    //     return employee.name;
    // });

    return teamArr.map(({ name, role, numberOfTickets }) => {

        let status = "You're getting a promotion!";
        let statusClass = "employeeBox__status-success";

        if(numberOfTickets < 70) {
            status = "You're average!";
            statusClass = "employeeBox__status-average"
        }
        if(numberOfTickets < 30) {
            status = "You're getting fired!";
            statusClass = "employeeBox__status-fail"
        }
        
        return (
            <div className="employeeBox">
                <p>{name}</p>
                <p>{role}</p>
                <p className={statusClass}>{status}</p>

                <div className="employeeBox__Counter">
                    <Counter numberOfTickets={numberOfTickets} />
                </div>
            </div>
        )
    });
}

export default EmployeeBox
