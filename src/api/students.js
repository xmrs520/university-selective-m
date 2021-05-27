/**
 * 学生端接口请求
 */
import request from '@/utils/request'
import store from '@/store/'

/**
 * 获取选课表
 */
export const getStudentSelectedCourseInfo = () => {
  return request({
    method: 'GET',
    url: '/getStudentSelectedCourseInfo',
    params: {
      stu_id: store.state.user.userId
    }
  })
}
/**
 * 选课
 */
export const selectedCourse = (data) => {
  return request({
    method: 'POST',
    url: 'users/selectedCourse',
    params: {
      stu_id: store.state.user.userId,
      course_id: data
    }
  })
}
/**
 * 学生查询已选课程
 */
export const getSelectedCourseInfo = () => {
  return request({
    method: 'GET',
    url: '/getSelectedCourseInfo',
    params: {
      stu_id: store.state.user.userId
    }
  })
}

/**
 * 课程退订
 */
export const courseUnsubscribe = (data) => {
  return request({
    method: 'POST',
    url: 'users/courseUnsubscribe',
    params: {
      stu_id: store.state.user.userId,
      course_id: data
    }
  })
}
