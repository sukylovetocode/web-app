<template>
<div class="asi_wrap">
    <h5 class="asi_title">{{isCollapse? "CMS":"后台管理平台"}}</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
        <el-submenu :index="item.path" v-for="item in menu" :key="item.name">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group v-if="item.children">
                <el-menu-item :index="a.path" v-for="a in item.children" :key="a.name">{{ a.meta.title }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'MyAside',
    methods: {
        handleSelect($key) {
            this.$router.push($key);
        },
    },
    props: {
        isCollapse: Boolean,
    },
    computed: {
        menu() {
            return this.$store.getters.get_menu;
        },
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
