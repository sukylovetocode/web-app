<template>
<div class="head_wrap">
    <div class="collapse_btn" @click="handleHideMenu"><i class="el-icon-s-unfold" v-if="isCollapse"></i><i class="el-icon-s-fold" v-else></i></div>
    <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">博客中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">购物中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项1</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">聊天室</a></el-menu-item>
    </el-menu>
    <div class="fullscreen" @click="handleFullscreen">
        <i class="el-icon-full-screen"></i>
    </div>
    <el-avatar :size="40" :src="require('../../static/images/logo.png')"></el-avatar>
    <div class="logout">
        <i class="el-icon-switch-button"></i>
        <span>退出</span>
    </div>
</div>
</template>

<script>
import _fullscreen from '@/assets/js/utils';

export default {
    name: 'MyHeader',
    data() {
        return {
            isCollapse: false,
            isFullscreen: false,
        };
    },
    mounted() {
        // this.$axios.get('/abc').then((response) => {
        //     console.log(response);
        // }).catch((err) => {
        //     console.log(err);
        // });
    },
    methods: {
        handleSelect($key) {
            console.log($key);
        },
        handleHideMenu() {
            this.isCollapse = !this.isCollapse;
            this.$emit('isCollapse', this.isCollapse);
        },
        handleFullscreen() {
            this.isFullscreen = !this.isFullscreen;
            _fullscreen(this.isFullscreen);
        },
    },
};
</script>

<style lang="scss">
.head_wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $BorderColor;

    .collapse_btn {
        margin: 20px;

        i {
            font-size: $IconSize;
        }
    }

    .el-menu {
        flex-grow: 1;
        border: 0;

        a {
            text-decoration: none;
        }
    }

    .fullscreen {
        margin: 20px;

        i {
            font-size: $IconSize;
        }
    }

    .logout {
        margin: 0 20px;
        font-size: $TextFontSize;
        display: flex;
        align-items: center;
        cursor: pointer;

        i {
            font-size: $IconSize;
            margin-right: 2px;
        }
    }
}
</style>
