<template>
<my-base />
</template>

<script>
// @ is an alias to /src
import MyBase from '@/views/layouts/_base.vue';

export default {
    name: 'Home',
    components: {
        MyBase,
    },
};
</script>
