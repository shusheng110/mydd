/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJfp6G8ADBU9r0pC5YDA7GqoH_9CC3jx_CJ-u5nD5_IIjP7W92IZNPRGa9ZCyR4zgTxQoCZUZo; pt_pin=a13678;',
  'pt_key=AAJfp6e3ADCOV-qZaUA6NdxTdI9aziOwDSWbuGpenB699K9xTumfHlolzVaESI5g7K1EbeBY2zw; pt_pin=jd_zQjjNyfdRZpD;',
  'pt_key=AAJfqKZrADC01UkkFHcBE-vErbz1Vh3kCHNOhl3Je__td0_vSv3wuh-ZXcewB8NqRfdOIYB9es0; pt_pin=jd_6791e5ddb5cbb;',
  'pt_key=AAJfqzoEADCiyiE9h7y3M_10rj--4r1JermMFSbjiAV0WX-hbhx9jxiSGLtNH27aU5y8SBQTuQA; pt_pin=jd_5f31aa30df635;'
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
