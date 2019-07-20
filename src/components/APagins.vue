<template>
  <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[50, 100]"
      :page-size="50"
      layout="total, prev, pager, next, jumper"
      :total="total">
  </el-pagination>
</template>
<script>
export default {
  name: 'pagin',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      sizeNum: 1
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('changePageNum', val)
    }
  }
}
</script>
