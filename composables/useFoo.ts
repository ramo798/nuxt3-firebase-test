// import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';

// import firebase from '../plugins/firebase';

// export default function () {
//     const auth = getAuth(firebase);
//     const provider = new TwitterAuthProvider();
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const user = result.user;
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = TwitterAuthProvider.credentialFromError(error);
//             console.log(4, errorCode);
//             console.log(5, errorMessage);
//             console.log(6, email);
//             console.log(7, credential);
//         });
// }
