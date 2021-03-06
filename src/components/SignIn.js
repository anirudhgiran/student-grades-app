import React from 'react';

import firebase from 'firebase/app';

const SignIn = (props) => {

    const auth = props.auth;

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return(
        <button onClick={signInWithGoogle}>Sign In</button>
    )
}

export default SignIn;