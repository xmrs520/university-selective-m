<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 底部导航栏 -->
    <van-tabbar
      v-model="active"
      route
    >
      <van-tabbar-item
        to="/"
        icon="wap-home-o"
      >首页</van-tabbar-item>
      <van-tabbar-item
        to="/selection"
        icon="records"
      >选课</van-tabbar-item>
      <van-tabbar-item
        to="/management"
        icon="newspaper-o"
      >课程管理</van-tabbar-item>
      <van-tabbar-item
        to="/my"
        icon="user-o"
      >我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航栏 -->
  </div>

</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
</style>
