<template>
<div class="role_wrap">
    <el-button type="primary" @click="dialogFormVisible = true"><i class="el-icon-plus"></i> 新增</el-button>
    <el-table :data="tableData" style="width: 100%" id="my-table">
        <el-table-column prop="name" label="角色名" width="180">
        </el-table-column>
        <el-table-column prop="desc" label="角色描述" width="380">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
                <el-button type="text">编辑</el-button>
                <el-button @click="handleClick(scope.row)" type="text">权限管理</el-button>
                <el-button @click="handleClick(scope.row)" type="text">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" title="新增角色">
        <el-form :model="roleForm" ref="roleForm">
            <el-form-item label="角色名字" prop="name" :rules="[
                { required: true, message: '角色名字不能为空'}
            ]">
                <el-input v-model="roleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="角色描述" prop="desc">
                <el-input v-model="roleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleNewRole">确定</el-button>
                <el-button @click="dialogFormVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
</div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
            }],
            dialogFormVisible: false,
            roleForm: {
                name: '',
                desc: '',
            },
        };
    },
    methods: {
        handleNewRole() {
            this.$refs.roleForm.validate((valid) => {
                console.log(valid);
                if (!valid) {
                    console.log(valid);
                    return false;
                }
                this.$axios.post('/api/role/new', this.roleForm).then((response) => {
                    console.log(response);
                }).catch((err) => {
                    console.log(err);
                });
                return true;
            });
        },
    },
};
</script>

<style lang="scss">
.role_wrap {
    margin: $PrimaryGap;
}
</style>
