<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="系统名称" prop="sysname">
      <el-select v-model="sysname" placeholder="请选择">
        <el-option
          v-for="item in arrsysname"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="上级菜单" prop="parentMenu">
      <el-select v-model="parentMenu" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="菜单名称" prop="menu">
      <el-input v-model="menu" placeholder="请输入内容" style="width: 14%"></el-input>
    </el-form-item>
    <el-form-item label="路径" prop="url">
      <el-input v-model="url" placeholder="请输入内容" style="width: 14%"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
      <el-button>返回</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { addMenu } from '@/api/menu'
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: '0',
        label: '无'
      }],
      arrsysname: [{
        value: '1',
        label: 'A系统'
      }],
      parentMenu: '',
      sysname: '',
      menu: '',
      url: ''
    }
  },
  methods: {
    onSubmit () {
      var sysname = this.sysname
      var parentMenu = this.parentMenu
      var menu = this.menu
      var url = this.url

      var params = new URLSearchParams()
      params.append('sysname', sysname)
      params.append('parentMenu', parentMenu)
      params.append('menu', menu)
      params.append('url', url)
      addMenu({ params }).then(res => {
        console.log('res: ', res)
        this.url = res.img
        this.bgColor = res.color
      })
      console.log('submit!')
    }
  }
}
</script>
