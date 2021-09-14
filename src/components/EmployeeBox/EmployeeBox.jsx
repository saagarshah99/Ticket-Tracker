import React from 'react';
import "./EmployeeBox.scss";
import Counter from "../../container/Counter/Counter"


const EmployeeBox = ({ teamArr }) => {
    const teamList = teamArr.map((employee) => {
        return employee.name;
    });

    return (
        <div className="employeeBox">

            {teamList}
            <div className="employeeBox__Counter">
                <Counter />
            </div>
        </div>
    )
}

export default EmployeeBox
