import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Ademola",
        role: "Developer",
        img: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg"
      },
      {
        id: 2,
        name: "Jacob",
        role: "Teacher",
        img: "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg"
      },
      {
        id: 3,
        name: "Fola",
        role: "Manager",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
      },
      {
        id: 4,
        name: "Biodun",
        role: "Engineer",
        img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"
      },
      {
        id: 5,
        name: "Sherif",
        role: "Intern",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        id: 6,
        name: "Jose",
        role: "Developer",
        img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg"
      }
    ]
  )

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
        if (id === employee.id) {
          return {...employee, name: newName, role:newRole}
        }

        return employee
    })
    setEmployees(updatedEmployees)
    
  } 

  const showEmployees = true;
  
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e)=> {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map(employee => {
              console.log(employee)
              // console.log(uuidv4())
              return(
                <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can not see the employees</p>
      )}
    </div>
  );
}

export default App;
