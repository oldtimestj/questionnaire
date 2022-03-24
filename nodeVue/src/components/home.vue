<!--
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2022-03-22 09:29:24
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-24 22:06:44
-->
<template>
  <div class="top-block">
    <img
      src="../assets/logo.gif"
      width="200px"
      style="float: left;margin-top:-40px"
    />
    <div class="right">
      <el-dropdown @command="handleCommandUser">
        <div class="el-dropdown-link">
          <i class="el-icon-user-solid" style="margin-right:10px"></i>您好，{{
            user
          }}
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userinfo">用户信息</el-dropdown-item>
          <el-dropdown-item command="about">关于我们</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="title">欢迎访问，问卷系统</div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      user: sessionStorage.getItem('name'),
    };
  },
  methods: {
    handleCommandUser(val) {
      if (val === 'logout') {
        location.href = '/login';
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('isAdmin');
      } else if (val === 'userinfo') {
        location.href = '/userinfo';
      } else {
        window.open(
          'http://www.swhygh.com/gyjt/group.jsp?classid=0001000200010001'
        );
      }
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 30px;
  color: black;
  font-weight: bold;
}
.right {
  float: right;
  top: -50px;
  right: 20px;
}
</style>
