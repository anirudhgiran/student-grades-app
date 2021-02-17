import "./App.css";

//Firebase Imports
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//React Firebase Hooks Imports
import { useAuthState } from "react-firebase-hooks/auth";

//React Component Imports 
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Menu from './components/Menu';


firebase.initializeApp({
  apiKey: "AIzaSyBEJQUEprd3VWtGH6Pm0iM3cWZZj-j4w5g",
  authDomain: "crud-practice-24ce9.firebaseapp.com",
  projectId: "crud-practice-24ce9",
  storageBucket: "crud-practice-24ce9.appspot.com",
  messagingSenderId: "126736814837",
  appId: "1:126736814837:web:79d290484c899a7d93ebbc",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>Student Grade App</h1>
        </div>
        <nav>
          <SignOut auth={auth}/>
        </nav>
      </header>
      <main>
        {user ? <Menu auth={auth} firestore={firestore} /> : <SignIn auth={auth} />}
      </main>
    </div>
  );
}

export default App;
