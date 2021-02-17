import React, { useState } from "react";

//React Router DOM Imports
import { Link } from "react-router-dom";

//Firebase Imports
import firebase from "firebase/app";

const AddStudent = ({ auth, firestore }) => {
  //Form States
  const [name, setName] = useState("");
  const [std, setStd] = useState();
  const [eng, setEng] = useState();
  const [sci, setSci] = useState();
  const [math, setMath] = useState();
  const [social, setSocial] = useState();
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const studentsRef = firestore.collection("students");

  const addStudent = async (e) => {
    e.preventDefault();

    if (name && std > 0 && gender && email) {
      if (!eng >= 0) setEng(0);
      if (!sci >= 0) setSci(0);
      if (!math >= 0) setMath(0);
      if (!social >= 0) setSocial(0);

      const { uid } = auth.currentUser;

      await studentsRef.add({
        name: name,
        standard: std,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        gender: gender,
        email: email,
        grades: {
          english: eng,
          mathematics: math,
          science: sci,
          "social studies": social,
        },
        uid,
      });

      setName("");
      setStd(undefined);
      setEng(undefined);
      setMath(undefined);
      setSci(undefined);
      setSocial(undefined);
      setEmail("");
      setGender("");
    } else alert("Invalid inputs");
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <form onSubmit={addStudent}>
        <h4>Add Student</h4>
        <div className="row row-1">
          <label>
            Name:{" "}
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Standard:{" "}
            <input value={std} onChange={(e) => setStd(e.target.value)} />
          </label>
        </div>

        <div className="row row-2">
          <label>
            Email: <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </label>

          <label>
            Gender: <input value={gender} onChange={(e)=> setGender(e.target.value)}/>
          </label>
        </div>

        <div className="row row-3">
          <label>
            Science:{" "}
            <input value={sci} onChange={(e) => setSci(e.target.value)} />
          </label>
          <label>
            Mathematics:{" "}
            <input value={math} onChange={(e) => setMath(e.target.value)} />
          </label>
        </div>

        <div className="row row-4">
          <label>
            English:{" "}
            <input value={eng} onChange={(e) => setEng(e.target.value)} />
          </label>
          <label>
            Social Studies:{" "}
            <input value={social} onChange={(e) => setSocial(e.target.value)} />
          </label>
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
