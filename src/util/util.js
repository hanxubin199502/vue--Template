import Vue from 'vue';
import axios from 'axios';
import router from '../router'
import store from '../vuex/index'
// console.log(router)

axios.defaults.timeout = 30000; //网络超时 
// axios.defaults.baseURL ='http://39.104.62.220:1119'                     //测试
// axios.defaults.baseURL = 'https://test-api.kkswine.com' // 测试接口
// axios.defaults.url="https://test.kkswine.com/"            //测试网址
// axios.defaults.baseURL = 'http://192.168.1.76:1119' //本地   // 张建ip
// axios.defaults.baseURL ='http://192.168.1.75:1119' //本地   // 张倩鹏
// axios.defaults.baseURL ='http://192.168.1.233:1119' //本地   // 任国庆
// axios.defaults.baseURL ='http://192.168.1.157:1119' //本地   // 倩倩
// axios.defaults.baseURL ='http://192.168.1.234:1119' //本地   // 白杨
axios.defaults.baseURL ='https://api.kkswine.com'    // 生产
// axios.defaults.url="https://kkswine.com/"            //生产网址

//http request 拦截器  
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      sessionCode: localStorage.getItem('sessionCode') || '',
      sessionId: localStorage.getItem('sessionId') || '',
      equipment: equipment,
      uniqueId: localStorage.getItem("uniqueId"),
      channelid: sessionStorage.getItem("channelid") || "MALL",
      // sessionCode:store.state.sessionCode || localStorage.getItem('sessionCode') ||'',
      // sessionId:store.state.sessionId || localStorage.getItem('sessionId') ||''
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
//响应拦截器即异常处理  
axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求')
        break;
      case 401:
        console.log('未授权，请重新登录')
        break;
      case 403:
        console.log('拒绝访问')
        break;
      case 404:
        console.log('请求错误,未找到该资源')
        break;
      case 405:
        console.log('请求方法未允许')
        break;
      case 408:
        console.log('请求超时')
        break;
      case 500:
        console.log('服务器端出错')
        break;
      case 501:
        console.log('网络未实现')
        break;
      case 502:
        console.log('网络错误')
        break;
      case 503:
        console.log('服务不可用')
        break;
      case 504:
        console.log('网络超时')
        break;
      case 505:
        console.log('http版本不支持该请求')
        break;
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.reject(err)
})
// console.log(router.push)
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
        if (response.data.respCode == "0003") {
          console.log(router.history.current.name)
          sessionStorage.setItem("router", router.history.current.name)
          // store.commit("alert",true)
          // store.commit("msg",response.data.respMsg)
          localStorage.removeItem('sessionCode'),
            localStorage.removeItem('sessionId')
          setTimeout(function () {
            router.push("/login")
            // store.commit("alert",false)
            // store.commit("msg",response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0001") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0002") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0004") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0005") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        }

      }, err => {
        reject(err)
      })
  })
}


export const server = {
  weixinlogo: function (weixinlogoObj) {
    return post('/login/wechatLogin', weixinlogoObj); //微信登录
  },
  regsms: function (regsmsObj) {
    return post('/sms/regsms', regsmsObj); //验证码
  },
  logo: function (logoObj) {
    return post('/login/login', logoObj); //登录
  },
}


document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
})
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false)

var u = navigator.userAgent,
  app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isAndroid) {
  var equipment = "Android"

} else if (isIOS) {
  var equipment = "IOS"

} else {
  var equipment = "PC"


}

// 禁止打开控制台
// document.onkeydown=function(){
//     var e=window.event||arguments[0];
//     if(e.keyCode==123){
//         return false;
//     }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
//         return false;
//     }
// };
// document.oncontextmenu=function(){
//     return false;
// }


export let parameter = "v1" //版本号
// export let url = "https://test.kkswine.com/v1/zhifuintermediation" //           测试
export let url="https://kkswine.com/v1/zhifuintermediation" //支付成功回跳页  生产
export default ({

})
