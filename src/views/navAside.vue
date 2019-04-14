<template>
    <div id="navAside">
        <el-container >
            <el-aside  >
                <el-menu background-color="#003366" text-color="#ffffff" style="height: 500px;width:200px">
                    <el-menu-item index="0">Problems</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-d-arrow-right"></i>
                            <span>Current Problem</span>
                        </template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-d-arrow-right"></i>
                            <span>Problem List</span>
                        </template>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-d-arrow-right"></i>
                            <span>Solved List</span>
                        </template>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-d-arrow-right"></i>
                            <span>Attempted List</span>
                        </template>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-footer style="background-color: #003300">
                    <h3 style="margin: 0 0 0 200px ;color:#ffffff">南昌航空大学壹壹团版权所有</h3>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "navAside"
    }
</script>

<style scoped>
 #navAside{
     margin: 1px 0 0 20px;
 }
</style>
