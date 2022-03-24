<!--
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2022-03-22 10:25:49
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-23 08:53:07
-->
<template>
  <div>
    <el-table border :data="listData" v-loading="isLoading">
      <!-- <el-table-column label="序号" type="index" width="50" /> -->
      <el-table-column label="用户名" prop="name" />
      <el-table-column label="邮箱" prop="email" min-width="100px" />
      <el-table-column label="电话" prop="mobile" min-width="100px" />
      <el-table-column label="是否是管理员" prop="isAdmin" min-width="100px">
        <template slot-scope="scope">
          {{ scope.row.isAdmin === 0 ? "否" : "是" }}
        </template>
      </el-table-column>

      <!-- <el-table-column label="操作" min-width="180" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="clickEdit(scope.row)">编辑</el-button>
            <el-button type="text" @click="lookModules(scope.row)">查看模块</el-button>
            <el-button type="text" class="delete-class" @click="clickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "userinfo",
  data() {
    return {
      isLoading: false,
      listData: []
    };
  },
  async created() {
    this.handleUserinfo();
  },
  methods: {
    async handleUserinfo() {
      this.isLoading = true;
      const name = sessionStorage.getItem("name");
      const isAdmin = sessionStorage.getItem("isAdmin");
      const res = await axios.post("/users/userinfo", { name, isAdmin });
      console.log("res", res.data);
      const { msg, status, result } = res.data;
      if (status == "0") {
        this.isLoading = false;
        this.listData = result;
        console.log("1111", this.listData);
      } else {
        this.isLoading = false;
        return;
      }
    }
  }
};
</script>
