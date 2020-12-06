/*
水果互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
 'c5fb71008caa408785a2ab98cac3b245@17fc525b110942dea7e52d57960484fe@36e91824c18848d1ad92401e8f035298',
'5781c7e3d7c44cc6ac1ce4b366de2fb1@17fc525b110942dea7e52d57960484fe@36e91824c18848d1ad92401e8f035298@3808b2e04b724d8299035fb3fb06e3cd',
'5781c7e3d7c44cc6ac1ce4b366de2fb1@c5fb71008caa408785a2ab98cac3b245@36e91824c18848d1ad92401e8f035298@d707ab98dbe64d9ea3c3c0b1be24b6fe',
'5781c7e3d7c44cc6ac1ce4b366de2fb1@c5fb71008caa408785a2ab98cac3b245@17fc525b110942dea7e52d57960484fe'
]
// 判断github action里面是否有水果互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
