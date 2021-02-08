import React from 'react';

const EmployeeCard = ({employee}) => {
    return (
        <tr>
            <td><img src={employee.picture.medium} alt={`${employee.name.first} profile picture`}/></td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.cell}</td>
            <td>{employee.gender}</td>
        </tr>
    )
}

export default EmployeeCard;