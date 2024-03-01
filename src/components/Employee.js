function Employee(props){
    return (
        <>
          <h3>Employee {props.name}</h3>
          <p>Role: {props.role ? props.role : "No role"}</p>
        </>
    );
}

export default Employee;