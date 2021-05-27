/**
 * 管理员端接口请求
 */
import request from '@/utils/request'

/**
 *   ,// 修改学生信息
 */
export const editSudentInfo = (data) => {
  const { stu_id: id, name, sex, major, classes, department, password } = data
  return request({
    method: 'POST',
    url: 'users/editSudentInfo',
    params: {
      stu_id: id,
      name,
      sex,
      major,
      classes,
      department,
      password
    }
  })
}

/**
 *   ,// 修改老师信息
 */
export const editTeacherInfo = (data) => {
  const { teacher_id: id, name, sex, department, password } = data
  return request({
    method: 'POST',
    url: 'users/editTeacherInfo',
    params: {
      teacher_id: id,
      name,
      sex,
      department,
      password
    }
  })
}

/**
 *   ,// 修改课程信息
 */
export const setCourseInfo = (data) => {
  const { course_id: id, coursename, teacher, teacher_id: teacherId, department, numberlimit } = data
  return request({
    method: 'POST',
    url: 'users/setCourseInfo',
    params: {
      id,
      coursename,
      teacher,
      teacher_id: teacherId,
      department,
      numberlimit
    }
  })
}

/**
 *   ,// 修改课程限选
 */
export const setCourseLimitInfo = (data) => {
  const { course_id: id, majorlimit, classlimit } = data
  return request({
    method: 'POST',
    url: 'users/setCourseLimitInfo',
    params: {
      id,
      majorlimit,
      classlimit
    }
  })
}

/**
 *   // 查询课程详情
 */
export const getCourseAllInfo = () => {
  return request({
    method: 'GET',
    url: '/getCourseAllInfo'
  })
}

/**
 *   ,// 获取所有学生分页
 */
export const getAllStudentInfo = (data) => {
  const { page, num } = data
  return request({
    method: 'GET',
    url: '/getAllStudentInfo',
    params: {
      page,
      num
    }
  })
}

/**
 *   ,// 获取所有老师分页
 */
export const getAllTeachersInfo = (data) => {
  const { page, num } = data
  return request({
    method: 'GET',
    url: '/getAllTeachersInfo',
    params: {
      page,
      num
    }
  })
}

/**
 * ,  // 课程删除
 */
export const removeCoue = (data) => {
  return request({
    method: 'POST',
    url: 'users/removeCoue',
    params: {
      id: data
    }
  })
}

/**
 * 删除学生
 */
export const removeStudents = (data) => {
  return request({
    method: 'POST',
    url: 'users/removeStudents',
    params: {
      id: data
    }
  })
}

/**
 *  删除老师
 */
export const removeTeachers = (data) => {
  return request({
    method: 'POST',
    url: 'users/removeTeachers',
    params: {
      id: data
    }
  })
}

/**
 * 老师查询已选课程学生信息
 */
export const getSelectedCourseStudentInfo = () => {
  return request({
    method: 'GET',
    url: '/getSelectedCourseStudentInfo',
    params: {
    }
  })
}

/**
 * ,// 添加学生
 */
export const addStudents = (data) => {
  const { stu_id: id, name, sex, major, classes, department, password } = data
  return request({
    method: 'POST',
    url: 'users/addStudents',
    params: {
      id,
      name,
      sex,
      major,
      classes,
      department,
      password
    }
  })
}

/**
 *   ,// 添加老师
 */
export const addTeachers = (data) => {
  const { teacher_id: id, name, sex, department, password } = data
  return request({
    method: 'POST',
    url: 'users/addTeachers',
    params: {
      id,
      name,
      sex,
      department,
      password
    }
  })
}

/**
 *   ,// 添加课程
 */
export const addCourse = (data) => {
  const { id, coursename, teacher_id: teacherId, teacher, department, numberlimit } = data
  return request({
    method: 'POST',
    url: 'users/addCourse',
    params: {
      id,
      coursename,
      teacher_id: teacherId,
      teacher,
      department,
      numberlimit
    }
  })
}

/**
 *   ,// 课程限选
 */
export const addCourseLimit = (data) => {
  const { id, majorlimit, classlimit } = data
  return request({
    method: 'POST',
    url: 'users/addCourseLimit',
    params: {
      id,
      majorlimit,
      classlimit
    }
  })
}

/**
 *   // 获取用户信息
 */
export const getUserInfo = (id, role) => {
  return request({
    method: 'GET',
    url: '/getUserInfo',
    params: {
      id,
      role
    }
  })
}
