<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <!--<el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>-->
    <el-form-item v-for="(item,index) in searchFormFields" :key="index" :label="item.label">
      <el-input v-if="item.type == 'text'" v-model="formInline[item.name]"></el-input>
      <el-select v-if="item.type == 'select'" v-model="formInline[item.name]" placeholder="活动区域">
        <el-option v-for="itemOp in item.option" :label="itemOp.label" :value="itemOp.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="onSubmit">新建</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'ASearch',
  props: {
    searchFormFields: {
      type: Array
    }
  },
  data () {
    return {
      formInline: {
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('formData', this.formInline)
    }
  }
}
</script>

<style scoped>

</style>
