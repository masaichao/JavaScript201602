var fs = require("fs");//服务器文件读写
function init(res) {
    //fs.readFileSync([请求文件的地址],[编码格式]) 同步读取本地文件中的内容,并且获取到的内容都是一个字符串
    var data = fs.readFileSync("./json/customerInfo.json", "utf8");
    //->把获取的内容返回给客户端
    //1)编写响应头信息:第一个是网络状态码,第二个是响应给客户端内容的格式
    res.writeHead(200, {'content-type': 'application/json; charset=UTF-8'});
    //->响应结束,这个一定要加,否则本次请求响应是不会自己结束的,客户端等到响应结束后才会进行渲染
    res.end(data);
}
//暴露接口
module.exports = {
    init: init
};