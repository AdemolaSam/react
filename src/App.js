import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("Showing Employees")
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee/>
          <Employee/>
          <Employee/>
        </>
      ) : (
        <p>You can not see the employees</p>
      )}
    </div>
  );
}

export default App;
