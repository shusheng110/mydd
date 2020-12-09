/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
'pt_key=AAJfzzYIADBF2pO34lC6lfW7M1-n4lk4dCFVj4JVBxd3_Mg-nZGsK7DCsMgkvRZ8B9VjL81HktQ; pt_pin=a13678;',
'pt_key=AAJfzzqtADCZgZyFQ-TUEHqXQ7yALTnWJy2P1KvVWGBG8QQRAZI3JN5YNhdg0w_q9A9lz05it4k; pt_pin=jd_zQjjNyfdRZpD;',
'pt_key=AAJf0DVqADB9arsrZXvBYrXrQBw5umX5f86dwcdMS55XkxPIffexnII2sSZ_xtJSSiAPz_iQcgg; pt_pin=jd_6791e5ddb5cbb;',
'pt_key=AAJf0DYjADB9_qNW7l7fYufThpBlYpDUgv656W6QHYj22yP6p3jXF3t71cP38g_58_N98EsZwSg; pt_pin=jd_5f31aa30df635;'
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
