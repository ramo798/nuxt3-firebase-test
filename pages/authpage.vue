<script setup lang="ts">
console.log('hello script setup');
const msg = 'Hello!';
const test = () => {
    console.log('aaaa');
};
</script>

<template>
    <div>
        <p>sasa</p>
        <div @click="test">{{ msg }}</div>
    </div>
</template>
