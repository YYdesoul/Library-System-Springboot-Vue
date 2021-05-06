<template>
    <div>
        <!-- 通过 :model绑定变量, :rules绑定校验规则, ref是传给script中方法的变量参数(formName) -->
        <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="book name" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="author" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">upload</el-button>
                <el-button @click="resetForm('ruleForm')">reset</el-button>
<!--                <el-button @click="test()">test</el-button>-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: { //绑定ruleForm
                    name: '',
                    author: ''
                },
                rules: {
                    name: [
                        //required 表示是否为必填项， message 没填就提示，trigger是触发规则
                        { required: true, message: 'The book name is required.', trigger: 'blur' },
                    ],
                    author: [
                        { required: true, message: 'The author is required.', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$alert(this.ruleForm.name + ' has been successfully added into the library!'
                            , 'Congratulation!', {
                            confirmButtonText: '确定',
                            callback: action => {

                            }
                        });
                        axios.post('http://localhost:8181/book/save', this.ruleForm).then(function(resp){
                            console.log(resp) //回调
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            test(){
                console.log(this.ruleForm)
            }
        }
    }
</script>

<style scoped>

</style>

