<template>
    <div class="register-wrap">
        <div class="container">
            <div class="row">
                <div class="col col-login mx-auto card my-md-8">
                    <div class="card-body p-6">
                        <p class="card-title text-center">设置新密码</p>
                        <el-form
                          :model="regForm"
                          status-icon
                          :rules="rules2"
                          ref="regForm"
                          label-width="0"
                          class="demo-ruleForm"
                        >
                            <el-form-item prop="pass">
                                <el-input type="password" v-model="regForm.pass" auto-complete="off" placeholder="输入密码"></el-input>
                            </el-form-item>
                            <el-form-item prop="checkPass">
                                <el-input type="password" v-model="regForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('regForm')" style="width:100%;">更改密码</el-button>
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
              },
              rules2: {
                pass: [{ validator: validatePass, trigger: 'change' }],
                checkPass: [{ validator: validatePass2, trigger: 'change' }],
              },
              flag: true
            }
        }, 
        methods: {

              // <!--提交新密码-->
              submitForm(formName) {
                this.$refs[formName].validate(valid => {
                  if (valid) {
                      // // 验证通过将信息传给后台
                      // this.$axios.post("/", {
                      //     'password':regForm.pass
                      // })
                      // .then(response => {
                      //     if (response.data.code == 1) {
                      //          this.$message({
                                  //     showClose:true,
                                  //     message:'修改密码成功！',
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
                          message:'修改密码成功！',
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
