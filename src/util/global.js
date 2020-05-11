//如果session中有uid,则认为用户登陆
var isLogin;
if (sessionStorage.getItem("uid")) {
  isLogin = true;
} else {
  isLogin = false;
}
// var isLogin = sessionStorage.getItem("uid") ? true : false;
// var isLogin = sessionStorage.getItem("uid") ? true : false;
var uname = sessionStorage.getItem("uname");
const siteName = "iweb"; //站点名称

//模块导出
export default {
  isLogin,
  uname,
  siteName
};
