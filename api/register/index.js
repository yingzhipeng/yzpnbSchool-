import request from '@/utils/request'
export default {
  /* 登陆 接口*/
  login(loginVo) {
    return request({
      url: `/ucenter_service/ucenter-member/login`,
      method: 'post',
      data:loginVo
    })
  },
  /*注册接口*/
  register(registerVo) {
    return request({
      url: `/ucenter_service/ucenter-member/register`,
      method: 'post',
      data:registerVo
    })
  },
  /* 发短信接口*/
  shortMessage(phoneNumber) {
    return request({
      url: `/msmservice/shortMessage/${phoneNumber}`,
      method: 'get',
    })
  },
  /* 根据token获取用户信息接口*/
  getUserInfo(){
    return request({
      url: `/ucenter_service/ucenter-member/getUserInfo`,
      method: 'get',
    })
  }
 }
