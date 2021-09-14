import React from 'react'
import "./TrackerBox.scss";
import EmployeeBox from '../EmployeeBox/EmployeeBox';

const TrackerBox = ({ teamArr }) => {
    return (
        <div className="trackerBox">
            <EmployeeBox teamArr={teamArr} />
        </div>
    )
}

export default TrackerBox
