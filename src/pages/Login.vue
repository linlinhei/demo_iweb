<template>
  <b-container class="login_box">
    <h2>
      <router-link to="/register">新用户注册</router-link>
      <span>用户登录</span>
    </h2>
    <b-row>
      <b-col md="7" sm="12" style="border-right:2px solid #ccc; padding-right:100px">
        <b-form @submit="doLogin">
          <b-form-group id="input-group-1" label="用户名:" label-for="uname">
            <b-form-input id="uname" v-model="form.uname" type="text" required placeholder="邮箱/手机号"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="密码:" label-for="upwd">
            <b-form-input id="upwd" v-model="form.upwd" type="password" required placeholder="密码"></b-form-input>
          </b-form-group>

          <b-form-checkbox value="autoLogin" class="autoLogin mt-2">自动登录</b-form-checkbox>
          <b-button type="submit" variant="success" class="login">立即登录</b-button>
        </b-form>
      </b-col>
      <b-col md="5" sm="12" class="right">
        <img src="../assets/images/qrcode.png" alt />
        <span class="mt-2">扫码登录</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      form: {
        uname: "",
        upwd: ""
      },
      autoLogin: false
    };
  },
  methods: {
    doLogin() {
      this.$axios
        .post("/user/login", qs.stringify(this.form))
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            sessionStorage.uid = res.data.data.uid;
            sessionStorage.uname = res.data.data.uname;
            alert("登录成功");
            //跳转到首页
            this.$router.push("/"); //location.href=https://www.baidu.com
            location.reload();
          } else {
            alert("用户名或密码错误");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
.login_box {
  margin-top: 40px;
  box-shadow: 0px 0px 3px #ccc;
  background: #fff;
  padding: 34px 60px 70px;
  box-sizing: border-box;
}
.login_box > h2 {
  border-left: 3px solid #77c558;
  padding-left: 12px;
  line-height: 20px;
  font-weight: lighter;
  font-size: 18px;
}
.login_box > h2 > a {
  float: right;
  font-size: 14px;
  color: #f90;
  text-decoration: underline;
}
.autoLogin {
  float: left;
}
.login {
  float: right;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>