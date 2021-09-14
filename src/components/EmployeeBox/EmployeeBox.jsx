import React from 'react';
import "./EmployeeBox.scss";

const EmployeeBox = ({ teamArr }) => {
    const teamList = teamArr.map((employee) => {
        return employee.name;
    });

    return (
        <div>
            {teamList}

        </div>
    )
}

export default EmployeeBox
