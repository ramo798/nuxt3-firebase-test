import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import firebase from '../../plugins/firebase';

export interface Tasks {
    id: string;
    name: string;
}

export default async () => {
    const db = getFirestore(firebase);
    const q = query(collection(db, 'tasks'));
    const querySnapshot = await getDocs(q);

    // let tasks: Tasks[];
    const tasks: Tasks[] = [];

    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const task: Tasks = {
            id: doc.data().id,
            name: doc.data().name,
        };
        tasks.push(task);
    });

    return tasks;
};
