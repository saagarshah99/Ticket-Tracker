import React from 'react'
import "./TrackerBox.scss";
import EmployeeBox from '../EmployeeBox/EmployeeBox';
import team from "../../data/team"


const TrackerBox = () => {


    return (
        <div className="trackerBox">
            <EmployeeBox teamArr={team} />
        </div>
    )
}

export default TrackerBox
