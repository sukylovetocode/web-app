<template>
<div class="user_wrap">
    <el-button type="primary"><i class="el-icon-plus"></i> 新增</el-button>
    <el-table :data="tableData" style="width: 100%" id="my-table">
        <el-table-column prop="date" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="name" label="角色" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
                <el-button type="text">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
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
        };
    },
};
</script>

<style lang="scss">
.user_wrap {
    margin: $PrimaryGap;
}
</style>
