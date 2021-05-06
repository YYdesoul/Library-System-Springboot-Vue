<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="id"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="author"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加页码-->
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="total"
                @current-change="page"> <!-- 检测目前的page数 -->
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage){
                // alert(currentPage)
                const _this = this
                axios.get('http://localhost:8181/book/findAll/'+currentPage+'/6').then(function (resp) {  //resp就是返回的结果
                    _this.tableData = resp.data.content
                    _this.total = resp.data.totalElements
                })
            },
        },
        created() {
            // alert(1)
            const _this = this
            axios.get('http://localhost:8181/book/findAll/1/6').then(function (resp) {  //resp就是返回的结果
                // console.log(resp.data)
                _this.tableData = resp.data.content
                _this.total = resp.data.totalElements
            })
        },

        data() {
            return {
                total: null,
                tableData: [
                    // {
                    // id: '1',
                    // name: '西游记',
                    // author: '吴承恩',
                    // },
                    // {
                    //     id: '2',
                    //     name: '信息传',
                    //     author: '吴军',
                    // }
                ]
            }
        }
    }
</script>