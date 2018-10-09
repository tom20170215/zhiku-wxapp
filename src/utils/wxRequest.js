import wepy from 'wepy'
import md5 from './md5'
import util from './util'
import tips from './tip'

const wxRequest = async (url, params = {}, header = {}, method = "GET") => {
  tips.loading();
  var data = params || {};
  data.timestamp = util.getCurrentTime();
  data.client_id = wepy.$instance.globalData.apiAppId;
  data.signature = hashParams(data);
  header = Object.assign({
    "Content-Type": "application/x-www-form-urlencoded",
    'Accept': 'application/json'
  }, header);
  let res = await wepy.request({
    url: url,
    method: method || "GET",
    header: header,
    data: data
  });
  tips.loaded();
  return res;
};




/**
 *生成MD5值
 @param {Object} param 数据对象
 @return {String} 返回MD字符串
 **/
function hashParams(param) {
  let data = param || {};
  var keys = Object.keys(data).sort();
  var str = '';
  keys.forEach(key => {
    if(key === 'signature'){
      return;
    }
    if(Array.isArray(data[key])){
      data[key].forEach(subKey => {
        str += data[key][subKey]
      })
    }else if(typeof(data[key]) === 'Object'){
      for(var i in data[key]){
        str += data[key][i]
      }
    }
    else{
      str += data[key]
    }
  })
  var code =md5.md5(encodeURIComponent(str + wepy.$instance.globalData.apiSecret));
  return code;
}

export default wxRequest
