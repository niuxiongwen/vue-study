<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
       v-for="item in tableColumn"
       :prop = "item.prop"
       :label = "item.label"
       :width = "item.width">
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
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array
    },
    tableColumn: {
      type: Array
    }
  },
  methods: {
    handleClick (rout) {
      this.$router.replace({
        name: rout
      })
    }
  }
}
</script>
