import request from '@/utils/request'
export default {
  /* 获取全部分页讲师*/
  getAllLimitTeacher(page,limit) {
    return request({
      url: `/eduservice/api/teacher/limitSelectTeacher/${page}/${limit}`,
      method: 'get',
    })
  },
   /* 获取讲师详情和当前讲师的课程*/
   getTeacherAndCourse(id) {
     return request({
       url: `/eduservice/api/teacher/selectTeacherAndCourse/${id}`,
       method: 'get',
     })
   },
 }
