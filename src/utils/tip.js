export default class tip {
    constructor(){
        this.isLoading = false;
    }

    // 加载中
    static loading(title = '加载中'){
        if(tip.isLoading){
            return;
        }
        tip.isLoading = true;
        wx.showLoading({
            title: title,
            mask: true
        })
    }

    // 加载完成
    static loaded(){
        if(tip.isLoading){
            tip.isLoading = false;
            wx.hideLoading();
        }
    }

}