<template>
    <Navbar/>
    <data-binding />
    <computed />
    <Parent />
    <vuetify />
</template>
<script setup>
import DataBinding from '../components/DataBinding.vue';
import computed from '../components/computed.vue';
import Parent from '../components/Props-Emit/Parent.vue';
import vuetify from '../components/vuetify.vue';
import Navbar from '../components/Navbar.vue';
</script>