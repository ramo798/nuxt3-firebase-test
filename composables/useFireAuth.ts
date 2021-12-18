import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { firebaseInit } from './firebaseInit';

export const useFireAuth = () => {
    // const auth123 = getAuth(firebaseInit());

    const testAuth = async () => {
        console.log(123);
    };

    // const testAuth = async () => {
    //     const provider = new TwitterAuthProvider();
    //     await signInWithPopup(auth123, provider)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             const email = error.email;
    //             const credential =
    //                 TwitterAuthProvider.credentialFromError(error);
    //             console.log(4, errorCode);
    //             console.log(5, errorMessage);
    //             console.log(6, email);
    //             console.log(7, credential);
    //         });
    // };

    return {
        testAuth,
    };
};
