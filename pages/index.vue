import { useFireAuth } from '../composables/useFireAuth';
<script setup lang="ts">
const f = useFirestore();
</script>

<script lang="ts">
import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
const f1 = useFirestore();

export default {
    methods: {
        SignIn() {
            try {
                const auth = getAuth();
                const provider = new TwitterAuthProvider();
                signInWithPopup(auth, provider)
                    .then((result) => {
                        f1.testDo();
                        const user = result.user;
                        console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.email;
                        const credential =
                            TwitterAuthProvider.credentialFromError(error);
                        console.log(4, errorCode);
                        console.log(5, errorMessage);
                        console.log(6, email);
                        console.log(7, credential);
                    });
            } catch (e) {
                console.error(e);
            }
        },
    },
};
</script>

<template>
    <div>
        <p @click="f.testDo">Current : {{ f }}</p>
        <p @click="SignIn">aaaaaa</p>
    </div>
</template>
