<template>
  <div>
    <el-container>
     <!-- <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width:60%">
        <el-select v-model="select" slot="prepend"  placeholder="请选择">
          <el-option label="A系统" value="1"></el-option>
          <el-option label="B系统" value="2"></el-option>
        </el-select>
        <el-button slot="append" @click="getTableList()" icon="el-icon-search"></el-button>
      </el-input>-->
     <!-- <el-button style="margin-left: 200px" @click="handleClick('createFrom')" >新建</el-button>-->
    <a-search  v-on:formData="getFormData"
      :searchFormFields = "searchFormFields"
    ></a-search>
    </el-container>
    <el-container>
      <a-table :tableData = "tableData"
               :tableColumn = "tableColumn"></a-table>
    </el-container>
    <el-container>
      <a-pagins :currentPage = "currentPage"
                :total = "total"
                @changePageNum="getPagerNum"
      ></a-pagins>
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
import ASearch from '_c/ASearch.vue'
import { getMenuList } from '@/api/menu'
export default {
  components: {
    ATable,
    APagins,
    ASearch
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: '',
      currentPage: 1, // 当前第几页
      total: 2000,
      tableData: [
      ],
      tableColumn: [
        {
          prop: 'sysname',
          label: '系统名称',
          width: '150'
        },
        {
          prop: 'parentMenu',
          label: '父菜单',
          width: '150'
        },
        {
          prop: 'menu',
          label: '菜单名称',
          width: '150'
        },
        {
          prop: 'url',
          label: '路径',
          width: '150'
        }
      ],
      searchFormFields: [
        {
          type: 'select',
          name: 'url',
          label: '系统',
          option: [
            {
              label: 'admin',
              value: '1'
            },
            {
              label: '系统二',
              value: '2'
            }
          ]
        },
        {
          type: 'text',
          name: 'menu',
          label: '菜单名称'
        }
      ]
    }
  },
  created () {
    var vid = 1
    getMenuList(vid).then(
      res => {
        console.log('res: ', res)
        this.tableData = res.data.lists
      }
    )
  },
  methods: {
    // 页面路由跳转
    handleClick (rout) {
      this.$router.replace({
        name: rout
      })
    },
    // 获取页码
    getPagerNum (pageNum) {
      this.currentPage = pageNum
    },
    // 获取页面数据
    getTableList () {
      console.log(this.currentPage)
      var vid = this.select
      getMenuList(vid).then(
        res => {
          console.log('res: ', res)
          this.tableData = res.data.lists
        }
      )
    },
    // 获取表单数据
    getFormData (formData) {
      console.log(formData)
    }
  }
}
</script>
