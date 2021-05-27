/**
 * 老师端接口请求
 */
import request from '@/utils/request'
/**
 * 老师查询已选课程学生信息
 */

export const getSelectedCourseStudentInfo = () => {
  const { userId } = JSON.parse(window.sessionStorage.getItem('user'))
  return request({
    method: 'GET',
    url: '/getSelectedCourseStudentInfo',
    params: {
      teacher_id: userId
    }
  })
}
