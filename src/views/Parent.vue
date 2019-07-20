<template>
  <div>
    <el-container style="margin-bottom: 10px">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width:60%">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button style="margin-left: 200px" @click="handleClick('stucreate')" >新建</el-button>
    </el-container>
    <el-container>
      <a-table :tableData = "tableData"
        :tableColumn = "tableColumn"></a-table>
    </el-container>
    <el-container>
      <a-pagins></a-pagins>
    </el-container>
  </div>
</template>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<script>
import ATable from '_c/ATable.vue'
import APagins from '_c/APagins.vue'
export default {
  components: {
    ATable,
    APagins
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      tableColumn: [
        {
          prop: 'date',
          label: '日期',
          width: '150'
        },
        {
          prop: 'name',
          label: '姓名',
          width: '150'
        },
        {
          prop: 'province',
          label: '省份',
          width: '150'
        },
        {
          prop: 'city',
          label: '城市',
          width: '150'
        },
        {
          prop: 'address',
          label: '地址',
          width: '150'
        },
        {
          prop: 'zip',
          label: '邮编',
          width: '150'
        }
      ]
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
