import axios from 'axios';
import { Message } from 'element-ui'
// import { userLogOut } from './loginTool';

let messageText = false;
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use((config) => {

  config.headers.token = localStorage.getItem('uumsJSessionId') ? localStorage.getItem('uumsJSessionId') : '';
  return config;
}, (error) => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器
let timer = 0;
service.interceptors.response.use(
  (response) => {
    console.log('response', response);
    const { message, succeed, status, error, matrix, success } = response.data;
    if (error && error.message) {
      Message.error(error.message);
      return false;
    }
    if (!succeed) {
      Message.error(message);
      // 修改密码  原密码错误超过8次
      if (status === 403) {
        // userLogOut();
        // 多个接口403 只提示一次
        if (!messageText) {
          Message.error(message);
          messageText = true;
        }
        // this.$router.push({name: 'Login'})  没反应
        // 防止提示消息一闪而过
        window.clearTimeout(timer);
        if (location.href.indexOf('/bbp/login') > -1) return false;
        timer = setTimeout(() => {
          jumpTo('/bbp/login');
        }, 1500);
      }
    }
    return response.data;
  },
  (error) => {
    console.log(`err${error}`);// for debug
    const res = error.response;
    if (res) {
      const { status } = res;
      const { message, exception, code } = res.data;
      // 403  token失效  登出
      if (status === 403) {
        // userLogOut();
        // 多个接口403 只提示一次
        Message.error('登录过期，请重新登录');
        // 防止提示消息一闪而过
        window.clearTimeout(timer);
        if (location.href.indexOf('/bbp/login') > -1) return false;
        timer = setTimeout(() => {
          jumpTo('/bbp/login');
        }, 1500);
        return false;
      }
      if (status === 401) {
        if (code === '401') {
          Message.error(message);
          // return false;
          return {
            message,
            succeed: false
          }
        }
      }
      if (status === 500) {
        if (exception === 'sse.bond.model.exception.BizException') {
          Message.error(message);
        } else {
          Message.error('系统繁忙，请稍后再试！');
        }
        return false;
      }
      Message.error('系统繁忙，请稍后再试！');
      return false;

      // return Promise.reject(error)
    }
    Message.error('请求超时，请稍后再试！');
    return false;
  },
);

export default service;
