<template>
<div>
    {{text}}
</div>
</template>

<script>
export default {
    name: 'MyText',
    props: {
        text: {
            type: String,
            default: '这是一段文字',
        },
    },
};
</script>
