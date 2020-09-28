<template>
<div class="page_editor">
    <div class="components">
        <h4>组件库</h4>
        <div class="components_item" @click="handleAddElement('MyImage')"><i class="el-icon-picture"></i>图片按钮</div>
        <div class="components_item" @click="handleAddElement('MyText')"><i class="el-icon-edit"></i>文字按钮</div>
    </div>
    <div class="editor_wrap">编辑页面
        <div @click="setActiveElement(item)" v-for="(item, index) in page.elements" :key="index">
            <vue-drag-resize>
                <component :is="item.elName"></component>
            </vue-drag-resize>
        </div>
    </div>
    <div class="props_wrap">属性编辑
        <component :is="props" />
    </div>
</div>
</template>

<script>
import {
    mapState,
} from 'vuex';
import Vue from 'vue';
import VueDragResize from 'vue-drag-resize';
import BaseProps from './components/baseProps.vue';

Vue.component('vue-drag-resize', VueDragResize);

export default {
    name: 'PageEditor',
    data() {
        return {
            props: 'BaseProps',
        };
    },
    methods: {
        handleAddElement(type) {
            // 得到 动态元素所需得所有props
            this.$store.dispatch('addElement', type);
        },
        handleChangePic() {

        },
        setActiveElement(item) {
            this.$store.dispatch('setActiveElement', item);
        },
    },
    computed: {
        ...mapState({
            page: (state) => state.page,
            activeElement: (state) => state.activeElement,
        }),
    },
    components: {
        VueDragResize,
        BaseProps,
    },
};
</script>

<style lang="scss">
.page_editor {
    display: flex;

    .components_item {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        line-height: 100px;
        border: 1px solid #ebebeb;
        cursor: pointer;
    }

    .editor_wrap {
        margin-left: 50px;
        width: 320px;
        height: 675px;
        background: #e6d2d5;
    }

    .props_wrap {
        margin-left: 50px;
    }
}
</style>
