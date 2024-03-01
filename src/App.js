import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      {
        name: "Ademola",
        role: "Developer",
        img: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg"
      },
      {
        name: "Jacob",
        role: "Teacher",
        img: "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg"
      },
      {
        name: "Fola",
        role: "Manager",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
      },
      {
        name: "Biodun",
        role: "Engineer",
        img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"
      },
      {
        name: "Sherif",
        role: "Intern",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      {
        name: "Jose",
        role: "Developer",
        img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg"
      },
      {
        name: "Salim",
        role: "HR",
        img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
      },
      {
        name: "Ofia",
        role: "Analyst",
        img: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg"
      },
      {
        name: "Simon",
        role: "Intern",
        img: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg"
      }
    ]
  )

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
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
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
