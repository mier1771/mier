<template>
    <div class="login-wrap">
        <div class="container">
            <div class="row">
                <div class="col col-login mx-auto card my-md-8"> 
                    <div class="card-body p-6">
                        <p class="card-title text-center">课思管理制度设计实训平台</p>
                        <el-form
                          :model="loginForm"
                          status-icon
                          :rules="rules2"
                          ref="loginForm"
                          label-width="0"
                          class="demo-ruleForm"
                        >
                            <el-form-item prop="tel">
                                <el-input v-model="loginForm.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item prop="pass">
                                <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="输入密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm(loginForm)" style="width:100%;">登录</el-button>
                                <p class="link float-left" @click="gotoRegister()">还没有账号? 注册</p>
                                <p  class="link float-right small" @click="gotoForgetPass()"> 忘记密码</p>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login-wrap",
        data() {
            // <!--验证手机号是否合法-->
            let checkTel = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入手机号码'))
              } else if (!this.checkMobile(value)) {
                callback(new Error('手机号码不合法'))
              } else {
                callback()
              }
            }
             // <!--验证密码-->
            let validatePass = (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码"))
              } else {
                callback()
              }
            }
            return {  
              loginForm: {
                pass: "",
                tel: "",
              },
              rules2: {
                pass: [{ validator: validatePass, trigger: 'change' }],
                tel: [{ validator: checkTel, trigger: 'change' }],
              },
              flag: '',
              userLogin:'false'
            }
        }, 
        methods: {
            // <!--提交登录->
            submitForm:function(loginForm){
                alert('111')
                sessionStorage.setItem("userName",loginForm.tel);
                sessionStorage.setItem("flag","isLogin");

                this.$store.dispatch("userLogin",true);

                this.$router.push({path:'/'});

                // this.$axios.post("/", {
                //     'username':loginForm.tel,
                //     'password':loginForm.pass
                // })
                //     .then(response => {
                //        if (response.data.code == 1) {
                //         // 成功
                //         // 将用户名和token放入sessionStorage
                //         //将用户名和token放入sessionStorage
                //        sessionStorage.setItem("userName",response.data.res.username);
                //        sessionStorage.setItem("userToken",response.data.res.token);
                //        console.log("in login image is" + response.data.res.image)
                //        sessionStorage.setItem("userImage",response.data.res.image);
                //        //将用户信息放入vuex
                //        this.$store.dispatch("setUser",response.data.res.username);
                //        this.$store.dispatch("setToken",response.data.res.token);
                //        this.$store.dispatch("setImage",response.data.res.image);
                //        console.log(this.$store.state.isLogin);
                //        console.log(this.$store.state.userImage);
                //        this.$router.push({path:'/'});
                //        }else{
                //             this.$store.dispatch("setUser",null)
                //        }
                //     })
            },
              // <!--进入登录页-->
              gotoRegister() {
                this.$router.push({
                  path: "/register"
                });
              },
              // 进入忘记密码页面
              gotoForgetPass(){
                this.$router.push({
                    path:"/forgetPass"
                });
              },
              // 验证手机号
              checkMobile(str) {
                let re = /^1\d{10}$/
                if (re.test(str)) {
                  return true;
                } else {
                  return false;
                }
              }
            }
        }
</script>

<style scoped>

.register-wrapper img {
  position: absolute;
  z-index: 1;
}


.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.el-form-item {
  text-align: center;
}
.link {
  margin-top: 10px;
  font-size: 87.5%;
  line-height: 22px;
  color: #467fcf;
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
    color: #295a9f;
    text-decoration: underline;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>
