<template>
<div class="login_wrap">
    <div class="login_content">
        <h4>后台管理系统</h4>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.passwd" type="password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                passwd: '',
                validateCode: '',
            },
        };
    },
    methods: {
        handleLogin() {
            this.$router.push('/admin/user');
        },
    },
};
</script>

<style lang="scss">
.login_wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login_content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid $BorderColor;
        padding: 20px;
        border-radius: 5px;

        h4 {
            font-size: $TitleFontSize;
            font-weight: 600;
            padding-bottom: 20px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>
