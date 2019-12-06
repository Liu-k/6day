<template>
  <div class="default">
      <div class="swei">
        <van-swipe :autoplay="3000" indicator-color="green">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      </div>
      <div class="list">
        <span v-for="(item,index) in list" :key="index">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
       '成单奖励',
        '成单奖励1', '成单奖励2', '成单奖励3', '成单奖励4', '成单奖励5', '成单奖励6', '成单奖励7' ,'成单奖励8'
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.default{
  width: 100%;
  height: 100%;
  .swei{
    width: 100%;
    height: 200px;
    .van-swipe{
      width: 100%;
      height: 100%;
    }
    .van-swipe-item{
      background: pink;
    }
}
.list{
  width: 100%;
  height: 200px;
  span{
    display: inline-block;
    width: 25%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
}

</style>