<template>
    <div class="register-wrap">
        <div class="container">
            <div class="row">
                <div class="col col-login mx-auto card my-md-8">
                    <div class="card-body p-6">
                        <p class="card-title text-center">注册</p>
                        <el-form
                          :model="regForm"
                          status-icon
                          :rules="rules2"
                          ref="regForm"
                          label-width="0"
                          class="demo-ruleForm"
                        >
                            <el-form-item prop="tel">
                                <el-input v-model="regForm.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item prop="pass">
                                <el-input type="password" v-model="regForm.pass" auto-complete="off" placeholder="输入密码"></el-input>
                            </el-form-item>
                            <el-form-item prop="checkPass">
                                <el-input type="password" v-model="regForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
                            </el-form-item>
                            <el-form-item prop="smscode" class="code">
                                <el-input v-model="regForm.smscode" placeholder="验证码"></el-input>
                                <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('regForm')" style="width:100%;">注册</el-button>
                                <p class="link float-left" @click="gotoLogin">已有账号？立即登录</p>
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
        name: "register-wrap",
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
            //  <!--验证码是否为空-->
            let checkSmscode = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入手机验证码'))
              }else if(value !== this.smscode){
                  // 手机验证码是否正确
                  callback(new Error('验证码不正确'))

              }else {
                  callback()
              }
            }
            // <!--验证密码-->
            let validatePass = (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码"))
              } else {
                if (this.regForm.checkPass !== "") {
                  this.$refs.regForm.validateField("checkPass");
                }
                callback()
              }
            }
            // <!--二次验证密码-->
            let validatePass2 = (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.regForm.pass) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            };
            return {  
              regForm: {
                pass: "",
                checkPass: "",
                tel: "",
                smscode: ""
              },
              rules2: {
                pass: [{ validator: validatePass, trigger: 'change' }],
                checkPass: [{ validator: validatePass2, trigger: 'change' }],
                tel: [{ validator: checkTel, trigger: 'change' }],
                smscode: [{ validator: checkSmscode, trigger: 'change' }],
              },
              buttonText: '发送验证码',
              isDisabled: false, // 是否禁止点击发送验证码按钮
              flag: true
            }
        }, 
        methods: {
              // <!--发送验证码-->
              sendCode () {
                let tel = this.regForm.tel
                if (this.checkMobile(tel)) {
                  // 获取验证码
                  this.getCode();

                  // 倒计时
                  let time = 60
                  this.buttonText = '已发送'
                  this.isDisabled = true
                  if (this.flag) {
                    this.flag = false;
                    let timer = setInterval(() => {
                      time--;
                      this.buttonText = time + ' 秒'
                      if (time === 0) {
                        clearInterval(timer);
                        this.buttonText = '重新获取'
                        this.isDisabled = false
                        this.flag = true;
                      }
                    }, 1000)
                  }
                }


              },
              // <!--提交注册-->
              submitForm(formName) {
                this.$refs[formName].validate(valid => {
                  if (valid) {
                      // // 验证通过将信息传给后台
                      // this.$axios.post("/", {
                      //     'username':regForm.tel,
                      //     'password':regForm.pass
                      // })
                      // .then(response => {
                      //     if (response.data.code == 1) {
                      //          this.$message({
                                  //     showClose:true,
                                  //     message:'恭喜你注册成功！',
                                  //     type:'success',
                                  //     duration:'400',
                                  //     offset:'200'
                                  // });
                                  // setTimeout(() => {
                                  //     this.$router.push({
                                  //       path: "/login"
                                  //     });
                                  // }, 400);
                      //     }else{
                                // this.$message({
                                  //     showClose:true,
                                  //     message:response.message,
                                  //     type:'success',
                                  //     duration:'400',
                                  //     offset:'200'
                                  // });
                      //     }
                      // })


                      this.$message({
                          showClose:true,
                          message:'恭喜你注册成功！',
                          type:'success',
                          duration:'400',
                          offset:'200'
                      });
                      setTimeout(() => {
                          this.$router.push({
                            path: "/login"
                          });
                      }, 400);
                  } else {
                    console.log("error submit!!");
                    return false;
                  }
                })
              },
              // <!--进入登录页-->
              gotoLogin() {
                this.$router.push({
                  path: "/login"
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
              },
              getCode(){

                  // this.$axios.get("/", {
                  //         'username':regForm.tel,
                  //     })
                  //     .then(response => {
                  //         this.smscode = response.data.smscode;
                  //     }).catch(error => {
                  //         // 提示获取验证码失败
                  //     })
                  // }


                  //假数据
                  this.smscode = '111';
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
