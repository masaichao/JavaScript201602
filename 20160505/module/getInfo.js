var fs = require("fs");//�������ļ���д
function init(res) {
    //fs.readFileSync([�����ļ��ĵ�ַ],[�����ʽ]) ͬ����ȡ�����ļ��е�����,���һ�ȡ�������ݶ���һ���ַ���
    var data = fs.readFileSync("./json/customerInfo.json", "utf8");
    //->�ѻ�ȡ�����ݷ��ظ��ͻ���
    //1)��д��Ӧͷ��Ϣ:��һ��������״̬��,�ڶ�������Ӧ���ͻ������ݵĸ�ʽ
    res.writeHead(200, {'content-type': 'application/json; charset=UTF-8'});
    //->��Ӧ����,���һ��Ҫ��,���򱾴�������Ӧ�ǲ����Լ�������,�ͻ��˵ȵ���Ӧ������Ż������Ⱦ
    res.end(data);
}
//��¶�ӿ�
module.exports = {
    init: init
};