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

  

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <Employee employees={employees}/>
    </div>
  );
}

export default App;
