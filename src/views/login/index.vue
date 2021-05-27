<template>
  <div class="login-container">

    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="login">
      <van-form
        @submit="onLogin"
        class="cell-group"
      >
        <van-field
          v-model="user.id"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          left-icon="smile-o"
          right-icon="warning-o"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          clearable
          left-icon="music-o"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-radio-group
          v-model="user.radio"
          direction="horizontal"
          class="radio"
        >
          <van-radio name="1">学生</van-radio>
          <van-radio name="2">老师</van-radio>
        </van-radio-group>
        <div class="login-btn-wrap">
          <van-button
            native-type="submit"
            class="login-btn"
            type="info"
            block
          >登录</van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        id: '',
        password: '',
        radio: '1' // 1学生 2老师 0管理员
      }
    }
  },
  methods: {
    async onLogin () {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await login(this.user)
        // 保存登录状态
        const saveUser = {
          userId: this.user.id,
          userRole: this.user.radio,
          token: data.token
        }
        Toast.success('登录成功')
        this.$store.commit('setUser', saveUser)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        Toast.fail('登录失败,用户名或密码错误')
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .login {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .radio {
      justify-content: flex-start;
      height: 54px;
      font-size: 10px;
      margin: 10px 20px;
    }
    .cell-group {
      margin: 20px 16px;
    }
    .login-btn-wrap {
      padding: 26px 16px;
      .login-btn {
        border: 1px solid rgb(96, 213, 200);
        background-color: rgb(96, 213, 200);
      }
    }
  }
}
</style>
