import base from './base'
export default class home extends base{
    static url = 'home/wechat-app'
    static async get(param){
        let data = await super.get(param);
        return data.data;
    }
}





