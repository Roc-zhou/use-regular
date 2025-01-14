module.exports = [
  {
    title: '校验微信',
    reg: /MicroMessenger/i,
    exp: []
  },
  {
    title: '校验手机移动端浏览器',
    reg: /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    exp: []
  },
  {
    title: '匹配中文字符',
    reg: /[\u4e00-\u9fa5]/gm,
    exp: ['你好', '我好', '大家好']
  },
  {
    title: '字母和数字8-20',
    reg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
    exp: ['qww12331']
  },
  {
    title: '字母和特殊字符8-20',
    reg: /^(?=.*[A-Za-z])(?=.*[~!@#$%^&*\(\)\[\{\]\}\-_=+|;:'",<.>/?`])[A-Za-z~!@#$%^&*\(\)\[\{\]\}\-_=+|;:'",<.>/?`]{8,20}$/,
    exp: ['asdasd+++']
  },
  {
    title: '数字和特殊字符8-20',
    reg: /^(?=.*\d)(?=.*[~!@#$%^&*\(\)\[\{\]\}\-_=+|;:'",<.>/?`])[A-Za-z\d~!@#$%^&*\(\)\[\{\]\}\-_=+|;:'",<.>/?`]{8,20}$/,
    exp: ['123123123+++']
  },
  {
    title: '6-20个字符，必须同时包含大、小写字母及数字，不可包含特殊字符',
    reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
    exp: ['Rww123']
  },
  {
    title: '至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符',
    reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/,
    exp: ['Rww12311']
  },
  {
    title: '只能是正整数',
    reg: /^\d+$/,
    exp: ['1222', '122']
  },
  {
    title: '正整数或小数点后一位小数',
    reg: /^[0-9]+([.]{1}[0-9]{1,1})?$/,
    exp: ['1222.1', '122']
  },
  {
    title: '手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段',
    reg: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
    exp: ['008618311006933', '+8617888829981', '19119255642', '19519255642']
  },
  {
    title: '手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可',
    reg: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
    exp: ['008618311006933', '+8617888829981', '19119255642']
  },
  {
    title: '手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条',
    reg: /^(?:(?:\+|00)86)?1\d{10}$/,
    exp: ['008618311006933', '+8617888829981', '19119255642']
  },
  {
    title: '数字表示成千位分隔形式',
    reg: /(?=(\B\d{3})+$)/g,
    exp: ['100,000,000,000']
  },
  {
    title: 'ipv4地址（可包含端口号）',
    reg: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:([0-9]{1,5}))?$/,
    exp: ['192.168.1.4', '192.168.1.4:8080']
  },
  {
    title: 'ipv6地址（可包含端口号）',
    reg: /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}(:[0-9]{1,5})?$/,
    exp: ['2001:0db8:85a3:0000:0000:8a2e:0370', '2001:0db8:85a3:0000:0000:8a2e:0370:7334:8080']
  },
  {
    title: 'url（https?|ftp|tcp）',
    reg: /^(https?|ftp|tcp):\/\/[^\s/$.?#].[^\s]*$/,
    exp: ['http://www.baidu.com', 'https://www.baidu.com', 'ftp://www.baidu.com', 'tcp://www.baidu.com']
  },
  {
    title: 'url域名',
    reg: /[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+/,
    exp: ['http://www.baidu.com', 'https://www.baidu.com']
  }
]