import request from '@/utils/request'
export default {
  /* 课程分类*/
  getCourseTree() {
    return request({
      url: `/eduservice/edu-subject/selectTree`,
      method: 'get',
    })
  },
   /* 根据条件分页获取课程列表*/
   selectIfLimitCourse(page,limit,searchObj) {
     return request({
       url: `/eduservice/api/course/selectIfLimitCourse/${page}/${limit}`,
       method: 'post',
       data:searchObj
     })
   },
   /* 获取详情页信息*/
   selectCourserApiInfoVoById(id){
     return request({
       url: `/eduservice/api/course/selectCourserApiInfoVoById/${id}`,
       method: 'get',
     })
   }
 }
