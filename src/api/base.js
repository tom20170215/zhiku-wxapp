import wepy from 'wepy'
import wxRequest from '../utils/wxRequest'

export default class base {
  static baseUrl = wepy.$instance.globalData.apiUrl;

  static get(param = {}, header = {}) {
    return this.request(param, header)
  }
  static request(param = {}, header = {}, method = "GET") {
    let url = '';
    if (param.url) {
      url = this.baseUrl + param.url
    } else {
      url = this.baseUrl + this.url
    }
    if(wepy.$instance.globalData.apiAuthorization&&(wepy.$instance.globalData.expires_in-new Date().getTime()>=0)){
      header.Authorization = 'bearer ' + wepy.$instance.globalData.apiAuthorization;
    }
    return wxRequest(url, param, header, method)
  }
}
