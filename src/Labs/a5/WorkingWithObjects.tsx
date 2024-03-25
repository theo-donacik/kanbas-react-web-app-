import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: true, score: 0,
  });
  const [myModule, setModule] = useState({
    id: "1", name: "NodeJS Module",
    description: "My Module",
    course: "My Course"
  });

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment"
      className="btn btn-primary">
        Get Assignment
      </a>
      <a href="http://localhost:4000/a5/module"
      className="btn btn-primary">
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title"
      className="btn btn-primary">
        Get Title
      </a>
      <a href="http://localhost:4000/a5/module/name"
      className="btn btn-primary">
        Get Name
      </a>

      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <br/>

      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value) })}
        value={assignment.score}/>
      <br/>

      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked})}
            checked={assignment.completed}/>
      <br/>

      <a href={`http://localhost:4000/a5/module/name/${myModule.name}`}>
        Update Name 
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...myModule,
            name: e.target.value })}
        value={myModule.name}/>
      <br/>
      <a href={`http://localhost:4000/a5/module/description/${myModule.description}`}>
        Update Description
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...myModule,
            description: e.target.value })}
        value={myModule.description}/>
    </div>
  );
}
export default WorkingWithObjects;
