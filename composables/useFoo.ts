// import {
//     getAuth,
//     signInWithPopup,
//     TwitterAuthProvider,
//     signOut,
// } from 'firebase/auth';

// import firebase from '../plugins/firebase';

// export default async function () {
//     const auth = getAuth(firebase);
//     const provider = new TwitterAuthProvider();
//     await signInWithPopup(auth, provider)
//         .then((result) => {
//             // const credential = TwitterAuthProvider.credentialFromResul(result)
//             // const token = credential.accessToken
//             // const secret = credential.secret
//             const user = result.user;
//             console.log(user);
//             // commit('setLoginStatus', true);
//             // commit('setFirebaseUid', user.uid);
//             // commit('setFirebaseAccessToken', user.accessToken);
//             // commit('setFirebaseStsTokenManager', user.stsTokenManager);
//             // commit('setTwitterUid', user.providerData[0].uid);
//             // commit('setTwitterDispkayName', user.providerData[0].displayName);
//             // commit('setTwitterPhotoURL', user.providerData[0].photoURL);
//             // commit('setTwitterScreenName', user.reloadUserInfo.screenName);
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
