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
    return wxRequest(url, param, header, method)
  }
}
