<template>
  <div class="home">
    <div class="main">
      <router-view>
      </router-view>
    </div>
    <div class="footer">
      <router-link v-for="(item,index) in list" :key='index' :to='item.path' tag='span' active-class='active'>
        {{item.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      list:[
        {
          name:'首页',
          path:'/default'
        },
        {
          name:'我的',
          path:'/my'
        }
      ]
    }
  },
  name: 'home',
  components: {
   
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100%;
    height: 46px;
    display: flex;
    span{
      flex: 1;
      text-align: center;
      line-height: 46px;
    }
    .active{
      background: cadetblue;
    }
  }
}
</style>
