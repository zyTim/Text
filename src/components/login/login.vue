<template>
  <div class="login">
    <!-- 登录前 -->
    <div v-if="!$root.userInfo.phone">
      <strong>登录</strong>
      <div>
        <label>
          手机号:
          <input type="text" v-model="phone" @input="checkPhone" />
        </label>
      </div>
      <div class="code">
        <label>
          验证码:
          <input type="text" v-model="code" placeholder="请输入验证码" />
        </label>
        <button
          type="button"
          class="btn getCode"
          @click="getCode"
          :disabled="!disabled"
          :class="(f&&disabled) ? 'btn2':'btn1'"
        >{{btnName}}</button>
      </div>
      <div>
        <button
          class="btnLogin"
          type="button"
          @click="login"
          :disabled="disabled"
          :class="disabled ? 'btn1':'btn2'"
        >登录</button>
      </div>
    </div>
    <!-- 登录后 -->
    <div v-else>
      你好!欢迎==>{{$root.userInfo.phone}}登录
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import { Message } from "element-ui";
export default {
  name: "login",
  data() {
    return {
      phone: "1387683264",
      code: "",
      btnName: "获取验证码",
      disabled: true,
      f: false,
      n0: 60,
      n: 60,
      t: "",
      codeUrl: "http://127.0.0.1:3000/getCode",
      loginUrl: "http://127.0.0.1:3000/login"
    };
  },
  methods: {
    checkPhone() {
      if (this.phone.length == 11) {
        this.regPhone();
      } else {
        this.f = false;
      }
    },
    regPhone() {
      let patt = /^1[3-9]\d{9}$/;
      this.f = patt.test(this.phone);
    },
    getCode() {
      this.t = setInterval(() => {
        this.btnName = this.n + "秒后重新发送验证码";
        this.n--;
        if (this.n == 0) {
          clearInterval(this.t);
          this.btnName = "获取验证码";
          this.disabled = true;
          this.n = this.n0;
        }
      }, 1000);
      this.disabled = false;
      // 向后台发送手机号,请求验证码
      this.axios
        .get(this.codeUrl + "?phone=" + this.phone)
        .then(data => {
          // console.log("data:",data)
          if (data.data.success) {
            let code = data.data.code;
            let phone = data.data.phone;
            console.log(`
              验证码:${code}
            `);
          }
        })
        .catch(err => {
          console.log("err:", err);
        });
    },
    login() {
      // 向后台发送手机号和验证码,请求登录
      this.axios
        .post(this.loginUrl, {
          phone: this.phone,
          code: this.code
        })
        .then(res => {
          console.log(res);
          if (res.data.success) {
            localStorage.token = res.data.token;
            localStorage.userName = res.data.userName;
            localStorage.phone = this.phone;
            this.$set(this.$root.userInfo, "phone", this.phone);
            if (this.$route.query.redirect) {
              let redirect = this.$route.query.redirect;
              setTimeout(() => {
                this.$router.push(redirect).catch(err => {
                  console.log("err:", err);
                });
              }, 1000);
            }
            Message({
              message: "登录成功",
              center: true,
              duration: 1500
            });
          }
        })
        .catch(err => {
          console.log("err:", err);
        });
    }
  }
};
</script>

<style scoped>
.login {
  padding: 10px;
  width: 600px;
  border: solid 1px red;
}
.code {
  margin-top: 10px;
  margin-bottom: 10px;
}
.btnLogin {
  border: solid 1px #ddd;
  width: 200px;
  height: 40px;
  margin-left: 100px;
}
.btn {
  border: solid 1px #ddd;
  width: 200px;
  height: 40px;
}
.getCode {
  width: 200px;
}
.btn1 {
  cursor: not-allowed;
  background: #ddd;
}
.btn2 {
  cursor: pointer;
  background: pink;
  color: white;
}
input {
  height: 30px;
  border-radius: 5px;
}
</style>
