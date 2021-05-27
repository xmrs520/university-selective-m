<template>
  <div class="hoem-container">
    <van-swipe
      class="my-swipe mb-4"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item class="img1"></van-swipe-item>
      <van-swipe-item class="img2"></van-swipe-item>
      <van-swipe-item class="img3"></van-swipe-item>
      <van-swipe-item class="img4"></van-swipe-item>
    </van-swipe>
    <van-notice-bar
      class="mb-4"
      left-icon="volume-o"
      text="新的一轮选课课开始了，请注意选课"
    />
    <van-cell>
      <van-count-down
        :time="time"
        format="DD 天 HH 时 mm 分 ss 秒"
        class="mb-4"
      />
    </van-cell>
    <van-cell
      title="消息提醒"
      value=""
      label="开始选课辽"
      class="mb-4"
    />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload)

export default {

  name: 'HomeIndex',
  data () {
    return {
      time: 30 * 60 * 60 * 1000,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
.hoem-container {
  .my-swipe {
    .img1 {
      width: 100%;
      height: 180px;
      background: url('../../assets/1.jpg') no-repeat;
      background-size: cover;
    }
    .img2 {
      width: 100%;
      height: 180px;
      background: url('../../assets/5.jpg') no-repeat;
      background-size: cover;
    }
    .img3 {
      width: 100%;
      height: 180px;
      background: url('../../assets/6.jpg') no-repeat;
      background-size: cover;
    }
    .img4 {
      width: 100%;
      height: 180px;
      background: url('../../assets/beijing.jpg') no-repeat;
      background-size: cover;
    }
  }
  .mb-4 {
    margin-bottom: 4px;
  }
}
</style>
