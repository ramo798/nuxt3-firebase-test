import { initializeApp } from 'firebase/app';

export const firebaseInit = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyC7FYkARD9eOMVbzUEvoeIMSRGciOOHuOk',
        authDomain: 'sabusuku-f9330.firebaseapp.com',
        projectId: 'sabusuku-f9330',
        storageBucket: 'sabusuku-f9330.appspot.com',
        messagingSenderId: '985918835776',
        appId: '1:985918835776:web:6fd2ee3ddf0e925b5ce3a5',
        measurementId: 'G-TZ7D1GK03F',
    };

    const firebase = initializeApp(firebaseConfig);

    return firebase;
};
