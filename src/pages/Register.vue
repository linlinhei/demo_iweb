<template>
  <div class="container register_box">
    <h2>新用户注册</h2>
    <b-form @submit="doRegister">
      <b-form-group id="input-group-1" label="邮箱:" label-for="uname">
        <b-form-input
          id="uname"
          v-model="form.uname"
          type="email"
          required
          placeholder="请输入邮箱名"
          @blur="checkUname()"
          :state="validateUname"
        ></b-form-input>
        <b-form-invalid-feedback :state="validateUname">用户名非法</b-form-invalid-feedback>
        <b-form-valid-feedback :state="validateUname">用户名正确</b-form-valid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="手机号:" label-for="phone">
        <b-form-input
          id="phone"
          v-model="form.phone"
          type="text"
          required
          placeholder="请输入手机号"
          @blur="checkPhone()"
          :state="validatePhone"
        ></b-form-input>
        <b-form-invalid-feedback :state="validatePhone">手机号非法</b-form-invalid-feedback>
        <b-form-valid-feedback :state="validatePhone">手机号正确</b-form-valid-feedback>
      </b-form-group>

      <b-form-group id="input-group-3" label="密码:" label-for="upwd">
        <b-form-input id="upwd" v-model="form.upwd" type="password" required placeholder="请输入密码"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="重复密码:" label-for="upwd2">
        <b-form-input
          id="upwd2"
          v-model="form.upwd2"
          type="password"
          required
          placeholder="请重复输入密码"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="验证码:" label-for="input-5">
        <b-form-input id="input-5" placeholder="请输入验证码"></b-form-input>
        <img src="../assets/images/yzm.png" alt />
        <strong class="icon_refresh"></strong>
      </b-form-group>

      <b-form-group id="input-group-6">
        <b-form-checkbox
          id="checkbox-6"
          v-model="form.status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >我已阅读并同意用户注册协议</b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="success">提交注册</b-button>
    </b-form>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Register",
  data() {
    return {
      form: {
        uname: "",
        phone: "",
        upwd: "",
        upwd2: ""
        // status: "not_accepted"
      }
    };
  },
  methods: {
    //检测用户名是否存在
    checkUname() {
      this.$axios
        .post("/user/check_uname", "uname=" + this.form.uname)
        .then(res => {
          console.log(res);
          if (res.data.code == 301) {
            alert("用户名已存在");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    checkPhone() {
      this.$axios
        .post("/user/check_phone", "phone=" + this.form.phone)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    //注册表单提交方法
    doRegister() {
      console.log(this.form);
      this.$axios
        .post("/user/register", qs.stringify(this.form))
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            //将注册用户的uid和uname赋值到session中
            sessionStorage.uid = res.data.data.uid;
            sessionStorage.uname = res.data.data.uname;
            alert("恭喜你,注册成功");
            console.log(this.$global.isLogin);

            //跳转到上一个页面
            history.back(); //history.go(-1);
            location.reload();
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  computed: {
    //状态校验会解析成oninput事件
    validatePhone() {
      if (this.form.phone != "") {
        var pt = /^1[3-9]\d{9}$/;
        return pt.test(this.form.phone);
      }
    },
    validateUname() {
      if (this.form.uname != "") {
        var pt = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return pt.test(this.form.uname);
      }
    }
  }
};
</script>

<style>
.register_box {
  margin-top: 40px;
  box-shadow: 0px 0px 3px #ccc;
  background: #fff;
  padding: 15px 0 60px;
}
.register_box > h2 {
  line-height: 70px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  font-size: 18px;
  color: #f90;
  font-weight: lighter;
}
</style>