import React from "react";

//React Router DOM Imports
import { Link } from "react-router-dom";

//React Firebase Hooks Imports
import { useDocumentData } from "react-firebase-hooks/firestore";

const StudentDetails = (props) => {
  const docId = props.match.params["id"];
  const auth = props.auth;
  const firestore = props.firestore;

  const studentsRef = firestore.collection("students");
  const query = studentsRef.doc(docId);

  const [student] = useDocumentData(query,{idField: docId});

  return (
    <section>
      <p>
        Name: {student.name}
        <br />
        Email: {student.email}
      </p>
      <Link to="/view">Back</Link>
    </section>
  );
};
export default StudentDetails;
