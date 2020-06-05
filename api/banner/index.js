import request from '@/utils/request'
export default {
  getAllBanner() {
    return request({
      url: `/cmsservice/crm-banner/api/selectAllBanner`,
      method: 'get'
    })
  },
  getNewRecommended() {
    return request({
      url: `/eduservice/api/selectNewRecommended`,
      method: 'get'
    })
  },
 }
