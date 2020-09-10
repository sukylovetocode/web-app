<template>
<el-container>
    <my-aside :isCollapse="isCollapse" />
    <el-container>
        <el-header>
            <my-header @isCollapse="handleMenuCollapse" />
        </el-header>
        <el-main>
            <breadCrumb />
            <router-view />
        </el-main>
    </el-container>
</el-container>
</template>

<script>
import MyHeader from '@/views/layouts/_header.vue';
import MyAside from '@/views/layouts/_aside.vue';
import BreadCrumb from '@/views/layouts/_breadcrumb.vue';

export default {
    name: 'MyBase',
    components: {
        MyHeader,
        MyAside,
        BreadCrumb,
    },
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {
        handleMenuCollapse(isCollapse) {
            this.isCollapse = isCollapse;
        },
    },
};
</script>
