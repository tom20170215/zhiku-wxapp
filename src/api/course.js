import base from './base'

export default class course extends base {
    static url = '/courses';
    static async getCourseCategory() {
        let url = '/course-category';
        let data = await super.get({url});
        return data.data;
    }
    static async get(param, url){
        param.url = url;
        let data = await super.get(param);
        return data.data;
    }
}