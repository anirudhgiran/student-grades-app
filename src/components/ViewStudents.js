import React from "react";

//React Router DOM Imports
import { Link } from "react-router-dom";

//React Firebase Hooks Imports
import { useCollectionData } from "react-firebase-hooks/firestore";

const ViewStudents = ({ auth, firestore }) => {
  const studentsRef = firestore.collection("students");
  const query = studentsRef.orderBy("createdAt");

  const [students] = useCollectionData(query, { idField: "id" });

  const deleteStudent = (id) =>{
    studentsRef.doc(id).delete();
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>
                  {/* <Link to={`/view/${student.id}`}>View</Link> */}
                  <Link to={`/view/${student.id}`}>View</Link>
                  <a href="#" onClick={() => deleteStudent(student.id)}>Delete</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
