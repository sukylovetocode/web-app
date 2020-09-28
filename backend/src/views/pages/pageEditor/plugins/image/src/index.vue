<template>
<div class="my_img">
    <img :src="imageSrc" />
</div>
</template>

<script>
export default {
    name: 'MyImage',
    props: {
        imageSrc: {
            type: String,
            default: 'http://localhost:3000/uploads/1600762571255mainPage.jpg',
        },
    },
};
</script>

<style lang="scss">
.my_img {
    width: 100%;
    height: 100%;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
