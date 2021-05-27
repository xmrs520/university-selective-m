<template>
  <div class="mangement-container">
    <van-nav-bar
      title="课程管理"
      right-text=""
      left-arrow
      @click-left="$router.back()"
    />

    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >
      你已选择以下课程
    </van-notice-bar>
    <van-checkbox-group v-model="Unsubscribe">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-cell
          class="isEmpty"
          v-if="isEmpty"
        >

          <h3>暂时还没有获取到你的选课</h3>
          <h4>
            下拉刷新一下
          </h4>
          <h2>
            <van-icon name="replay" />
          </h2>
        </van-cell>
        <van-list>
          <van-cell
            v-for="item in selectedCourse"
            :key="item.course_id"
            :title="item.coursename"
            :label="
          `${item.teacher} 已选 ${item.selectednumber} 限选 ${item.numberlimit}`"
          >
            <template #right-icon>
              <van-checkbox
                :disabled="item.numberlimit == item.selectednumber?true:false"
                :name="item"
                ref="checkboxes"
              />
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>

    </van-checkbox-group>
    <van-button
      type="primary"
      style="marginBottom:45px"
      block
      @click="postCourseUnsubscribe"
    >课程退订</van-button>
  </div>
</template>

<script>

import { Toast, Notify } from 'vant'
import { getSelectedCourseInfo, courseUnsubscribe } from '@/api/students'
import store from '@/store/'

export default {
  name: 'ManagementIndex',
  created () {
    console.log(store.state.SelectedCourse.length)
    if (store.state.SelectedCourse && store.state.SelectedCourse.length > 0) {
      this.selectedCourse = store.state.SelectedCourse
      this.isEmpty = false
    } else if (store.state.SelectedCourse.length === 0) {
      this.isEmpty = true
    } else {
      this.loadSelectedCourseInfo()
    }
  },
  data () {
    return {
      isEmpty: true,
      isLoading: false,
      selectedCourse: [],
      Unsubscribe: []
    }
  },
  methods: {
    onRefresh () {
      this.loadSelectedCourseInfo()
      Toast('刷新成功')
      this.isLoading = false
    },
    async loadSelectedCourseInfo () {
      try {
        const { data } = await getSelectedCourseInfo()
        this.selectedCourse = data
        this.$store.commit('setSelectedCourse', data)
      } catch (err) {
        console.log(err)
      }
    },
    async postCourseUnsubscribe () {
      try {
        for (const item of this.Unsubscribe) {
          const res = await courseUnsubscribe(item.course_id)
          if (res.status === 200) {
            Notify({ type: 'success', message: '课程退订成功' })
            this.loadSelectedCourseInfo()
          }
        }
      } catch (err) {
        console.log(err)
        Notify({ type: 'danger', message: '课程退订失败' })
      }
    },
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style scoped lang="less">
.mangement-container {
  .isEmpty {
    height: 480px;
    font-size: 20px;
    text-align: center;
  }
  h3,
  h4,
  h2 {
    text-align: center;
  }
}
</style>
