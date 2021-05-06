<template>
    <div>
        <el-container style="height: 1000px; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

            <el-menu router :default-openeds="['0','1']"> <!-- 使用循环动态生成sidebar, 加入router绑定router属性用来点击后换页面, v-if判断页面打开与否 -->
              <el-submenu v-for="(item, index) in $router.options.routes" :index="index+''" v-if="item.show">
                <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template> <!-- 生成按钮 -->
                <el-menu-item v-for="(sub_item, sub_index) in item.children" :index="sub_item.path"
                :class="$route.path == sub_item.path ? 'is-active': ''"> <!-- is-active使得目前页面的按钮高亮，这里加入条件判断，当route path = sub_item paths=时，高亮 -->
                    <template slot="title">{{sub_item.name}}</template> <!-- 生成子按钮 -->
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
              <router-view></router-view>
          </el-main>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>