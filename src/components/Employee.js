import React from 'react'
import EmployeeCard from './EmployeeCard'

const Employee = ({employees}) => {
    return (
        <div>
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>Profile Picture</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map((employee, i) => {
                    return <EmployeeCard employee={employee} key={i}/>
                })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Employee;