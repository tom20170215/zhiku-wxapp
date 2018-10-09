import base from './base'
export default class expert extends base {
   static url = '/lecturer-topics';
   static async get(param){
    let data = await super.get(param)
    return data.data
   }
}