import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';

import { firebaseInit } from './firebaseInit';

export const useFirestore = () => {
    const db = getFirestore(firebaseInit());

    const testDo = async () => {
        const q = query(
            collection(db, 'articles'),
            where('UserID', '==', 'testman999')
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    };
    return {
        testDo,
    };
};
