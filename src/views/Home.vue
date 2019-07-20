<template>
  <div class="home">
    <div>{{ food }}</div>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">返回上二页</button>
    <button @click="handleClick('push')">替换</button>
    <button @click="getToken()">获取token</button>
    <button @click="getInfo()">请求</button>
    <button @click="getMenuList()">获取菜单列表</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
import { getToken } from '@/api/login'
import { getMenuList } from '@/api/menu'
import { setToken } from '@/lib/util'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'Apple'
    }
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      // else if (type === 'push') this.$router.push('/parent')
      // 两种形式
      else if (type === 'push') this.$router.push({
        name: 'argu', // 跳转到路由
        params: {
          name: 'niu'
        }
        // query: {
        //   name: 'niuxiongwen'
        // }
      })
      else if (type === 'replace') this.$router.replace({
        name: 'parent'
      })
    },
    getInfo () {
      getUserInfo({ token: "12" }).then(res => {
        console.log('res: ', res)
        this.url = res.img
        this.bgColor = res.color
      })
    },
    getMenuList () {
      getMenuList().then(
        res => {
          console.log('res: ', res)
          this.url = res.img
          this.bgColor = res.color
        }
      )
    },
    getToken () {
      getToken({ uname: "test", password: "test123456" }).then(res => {
        // console.log('res: ', res.data.token)
        setToken(res.data.token)
      })
    }
  }
}
</script>
<style>
  .home{
    text-align: center;
  }
</style>
