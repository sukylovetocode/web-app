<template>
<div class="asi_wrap">
    <h5 class="asi_title">{{isCollapse? "CMS":"后台管理平台"}}</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'MyAside',
    methods: {
        handleSelect($key) {
            console.log($key);
        },
    },
    props: {
        isCollapse: Boolean,
    },
};
</script>

<style lang="scss">
@import "@/assets/css/global.scss";

.asi_wrap {
    height: 100%;
    background: $MainBG;
    box-sizing: border-box;

    .el-menu-vertical-demo {
        &:not(.el-menu--collapse) {
            width: 250px;
        }
    }

    ul {
        background: $MainBG;
        box-sizing: border-box;
        border: 0;
    }

    .el-menu-item {
        color: $SecondaryTextColor;

        &:hover {
            background: $MainColor;
            color: $PrimaryTextColor;
        }
    }

    .el-submenu__title {
        color: $SecondaryTextColor;

        &:hover {
            background: $MainColor;
            color: $PrimaryTextColor;
        }
    }

    .asi_title {
        color: $SecondaryTextColor;
        font-size: $TitleFontSize;
        text-align: center;
        padding: 20px;
        font-weight: 600;
    }
}
</style>
