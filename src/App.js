import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=50').then(function (response) {
      const employeeData = response.data.results;
      setEmployees(employeeData);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  const sortByLastName = (employee) => {
    let sortedEmployees = [...employee];

    sortedEmployees.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    })

    // Sort the employees
    setEmployees(sortedEmployees);
  }

  const filterFemales = (employee) => {
    let femaleEmployees = [...employee]
    
    const filteredFemales = femaleEmployees.filter(employ => employ.gender === 'female');

    setEmployees(filteredFemales);
  }

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <div>
      <button onClick={() => {
        sortByLastName(employees)    
      }}>Sort By Last Name</button>
      <button onClick={() => {
        filterFemales(employees);
      }}>Filter Female</button>
      </div>
      <Employee employees={employees}/>
    </div>
  );
}

export default App;
