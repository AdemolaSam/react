import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev')
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e)=> {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <Employee name="Ademola" role="Intern"/>
          <Employee name="Ola" role={role}/>
          <Employee/>
        </>
      ) : (
        <p>You can not see the employees</p>
      )}
    </div>
  );
}

export default App;
