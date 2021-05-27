<template>
  <div class="my-container">
    <div class="user-infor">
      <van-cell-group class="my-info mb-4">
        <van-cell
          class="base-info"
          title="单元格"
          value="内容"
          center
        >
          <van-image
            class="avatar"
            round
            slot="icon"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div
            class="name"
            slot="title"
          >{{currentUserInfo.name }}</div>
          <van-button
            class="updata-btn"
            size="small"
            round
          >
            编辑资料
          </van-button>
        </van-cell>

      </van-cell-group>
      <van-cell
        title="个人信息"
        is-link
        arrow-direction="down"
        value=""
        class="mb-4"
      />
      <van-cell title="专业">{{currentUserInfo.major}}</van-cell>
      <van-cell title="班级">{{currentUserInfo.classes}}</van-cell>
      <van-cell
        title="院系"
        class="mb-4"
      >{{currentUserInfo.department}}</van-cell>
      <van-cell
        class="logout"
        title="退出登录"
        @click="onLogout"
      />
    </div>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
import store from '@/store/'

export default {
  name: 'MyIndex',
  created () {
    if (store.state.UserInfo && store.state.UserInfo.length !== 0) {
      this.currentUserInfo = store.state.UserInfo
    } else {
      this.loadUserProfile()
    }
  },
  data () {
    return {
      currentUserInfo: {},
      loading: false,
      finished: false
    }
  },
  methods: {
    async loadUserProfile () {
      const { data } = await getUserProfile()
      this.currentUserInfo = data[0]
      this.$store.commit('setUserInfo', data[0])
    },
    onLogout () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', null)
          this.$router.push('/login')
          this.$store.commit('setCourseInfo', [])
          this.$store.commit('setSelectedCourse', [])
          this.$store.commit('setUserInfo', [])
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url('../../assets/bg.jpg') no-repeat;
    background-size: cover;
    .base-info {
      box-sizing: border-box;
      height: 240px;
      background-color: unset;
      padding-top: 38px;
      padding-bottom: 11px;
      .updata-btn {
        font-size: 15px;
        height: 16px;
        color: #666666;
      }
      .avatar {
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px soll #fff;
        margin-right: 11px;
      }
      .name {
        color: #fff;
        font-size: 15px;
      }
    }
  }
  .mb-4 {
    margin-bottom: 4px;
  }
}
.logout {
  text-align: center;
  color: #d86262;
}
</style>
