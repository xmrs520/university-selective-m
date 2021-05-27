<template>
  <div class="select-container">
    <van-nav-bar
      title="选课"
      left-arrow
      @click-left="$router.back()"
    />
    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >
      你可以选择以下课程
    </van-notice-bar>
    <van-checkbox-group v-model="multipleSelection">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list>
          <van-cell
            v-for="item in CourseInfo"
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
      @click="postSelectedCourse"
    >提交选课</van-button>
  </div>
</template>

<script>
import { Toast, Notify } from 'vant'
import { getStudentSelectedCourseInfo, selectedCourse } from '@/api/students'
import store from '@/store/'

export default {
  name: 'SelectionIndex',
  created () {
    if (store.state.CourseInfo && store.state.CourseInfo.length > 0) {
      this.CourseInfo = store.state.CourseInfo
    } else {
      this.loadStudentSelectedCourseInfo()
    }
  },
  data () {
    return {
      isLoading: false,
      CourseInfo: [],
      multipleSelection: []
    }
  },
  methods: {
    onRefresh () {
      this.loadStudentSelectedCourseInfo()
      Toast('刷新成功')
      this.isLoading = false
    },
    async loadStudentSelectedCourseInfo () {
      try {
        const { data } = await getStudentSelectedCourseInfo()
        this.CourseInfo = data
        this.$store.commit('setCourseInfo', data)
      } catch (err) {
        console.log(err)
      }
    },
    async postSelectedCourse () {
      try {
        for (const item of this.multipleSelection) {
          const res = await selectedCourse(item.course_id)
          if (res.status === 200) {
            Notify({ type: 'success', message: '选课成功' })
          } else {
            Notify({ type: 'danger', message: '选课失败' })
          }
        }
      } catch (err) {
        Notify({ type: 'danger', message: '课程已选' })
      }
    },
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style scoped lang="less">
</style>
