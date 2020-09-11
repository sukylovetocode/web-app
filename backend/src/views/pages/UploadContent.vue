<template>
<div class="upload_wrap">
    <h4>图片上传</h4>
    <el-upload class="upload-demo" drag action="/api/upload/pic" name="pic" :on-success="handleSuccess" :before-upload="beforeAvatarUpload">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <img v-if="imageUrl" :src="imageUrl" />
</div>
</template>

<script>
export default {
    name: 'UploadContent',
    data() {
        return {
            imageUrl: '',
        };
    },
    methods: {
        handleSuccess(response) {
            this.$message(response.msg);
            this.imageUrl = `http://localhost:3000/uploads/${response.file}`;
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
    },
};
</script>

<style lang="scss">
.upload_wrap {
    margin: $PrimaryGap;

    h4 {
        padding: $PrimaryGap 0;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>
