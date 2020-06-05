import request from '@/utils/request'
export default {
  /* 根据id获取视频凭证*/
  getVideoPlayAuth(id) {
    return request({
      url: `/videoservice/getVideoPlayAuth/${id}`,
      method: 'get',
    })
  },

 }
