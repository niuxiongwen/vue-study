<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-header>
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="opIndex" >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>DOME</template>
            <el-menu-item @click="handleClick('home')" index="1-4">home</el-menu-item>
            <el-menu-item @click="handleClick('about')" index="1-1">about</el-menu-item>
            <el-menu-item @click="handleClick('table')" index="1-2">table</el-menu-item>
            <el-menu-item @click="handleClick('form')"  index="1-3">form</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
            <el-menu-item @click="handleClick('tableList')" index="2-1">菜单</el-menu-item>
            <el-menu-item index="2-2">角色</el-menu-item>
            <el-menu-item index="2-3">用户</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: right;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<script>
export default {
  methods: {
    handleClick (rout) {
      this.$router.replace({
        name: rout
      })
    }
  },
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["medium"],
      isCollapse: true,
      opIndex: ["1"]
    }
  }
}
</script>
