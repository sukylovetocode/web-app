<template>
<div class="table_wrap">
    <el-button type="primary" @click="handleXlsx">xlsx下载</el-button>
    <el-button type="primary" plain @click="handleCsv">csv下载</el-button>
    <el-table :data="tableData" style="width: 100%" id="my-table">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import XLSX from 'xlsx';
import Json2csv from 'json2csv';

export default {
    name: 'TableToExcel',
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
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            }],
        };
    },
    methods: {
        createDownLoadClick(content, fileName) {
            const link = document.createElement('a');
            link.href = encodeURI(content);
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        // 判断是否IE浏览器
        MyBrowserIsIE() {
            let isIE = false;
            if (navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1) {
                // ie浏览器
                isIE = true;
            }
            if (navigator.userAgent.indexOf('Trident') > -1) {
                // edge 浏览器
                isIE = true;
            }
            return isIE;
        },
        handleXlsx() {
            const table = document.getElementById('my-table');
            const worksheet = XLSX.utils.table_to_sheet(table);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet');
            // 以上四行也可以直接一行搞定，如果不需要对表格数据进行修改的话
            // let workbook = XLSX.utils.table_to_book(document.getElementById('my-table'));
            try {
                XLSX.writeFile(workbook, 'text.xlsx');
            } catch (e) {
                console.log(e, workbook);
            }
        },
        handleCsv() {
            // csv 其实是个纯文本，中间用逗号或换行符进行拼接
            try {
                const result = Json2csv.parse(
                    this.tableData, {
                        fields: ['date', 'name', 'address'],
                        excelStrings: true,
                    },
                );
                if (this.MyBrowserIsIE()) {
                    // IE10以及Edge浏览器
                    const BOM = '\uFEFF';
                    // 文件转Blob格式
                    const csvData = new Blob([BOM + result], {
                        type: 'text/csv',
                    });
                    navigator.msSaveBlob(csvData, 'text.csv');
                } else {
                    const csvContent = `data:text/csv;charset=utf-8,\uFEFF${result}`;
                    this.createDownLoadClick(csvContent, 'text.csv');
                }
            } catch (e) {
                console.log(e);
            }
        },
        handlePdf() {

        },
    },
};
</script>

<style lang="scss">
.table_wrap {
    margin: 20px;
}
</style>
