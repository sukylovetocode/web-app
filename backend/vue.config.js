module.exports = {
    css:{
        extract: false,
        sourceMap: true,
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/assets/css/global.scss";'
            }
        }
    },
    devServer: {
        proxy: 'http://localhost:3000'
    },
    runtimeCompiler: true,
}