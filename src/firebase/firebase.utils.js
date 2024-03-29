  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  const config = {
    apiKey: "AIzaSyB_2N_ChLQbjC1lOGBi_tBgg8usvUn_gN0",
    authDomain: "balbatross-db.firebaseapp.com",
    databaseURL: "https://balbatross-db.firebaseio.com",
    projectId: "balbatross-db",
    storageBucket: "",
    messagingSenderId: "149311769116",
    appId: "1:149311769116:web:19291bfd7a873b5444edd9"
  }

  export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
        console.log("error createing user", error.message);
    }
  }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ Prompt: 'Select Account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
