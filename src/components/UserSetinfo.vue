<template>
    <div class="setinfo">
            <!-- <el-form :model="userlist" rules="rules" ref="EditorUserForms">
                <div class="card">
                    <div class="card-header">
                        <label class="form-label">个人信息</label>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <el-form>
                                    <el-form-item label="头像" prop="acatar_url">
                                        <el-upload class="tn-uploadimg" action="" :before-upload="beforeupload" :data="uploadParm" :show-file-list="false" :on-success="handleUpSuccess">
                                            <img v-if="userlist.avatar_url" :src="userlist.avatar_url" class="avatar-xxl" alt="">
                                            <i v-else class="el-icon-plus avatar-uploader-icon " style="width:80px;height:80px;"></i>
                                        </el-upload>
                                    </el-form-item>
                                    <el-form-item label="用户名"  prop="username">
                                        <el-input v-model="userlist.username" disable></el-input>
                                    </el-form-item>
                                    <el-form-item label="电话"  prop="phone">
                                        <el-input v-model="userlist.phone" disable></el-input>
                                    </el-form-item>
                                    <el-form-item label="邮箱"  prop="email">
                                        <el-input v-model="userlist.email" disable>
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <el-button type="primary" @click="EditorUserClick('userlist')">保存</el-button>
                </div>
            </el-form> -->
            <form action="" id="account-form" class="center-info">
                <div class="card">
                    <div class="card-header">
                        <label class="form-label">个人信息</label>
                    </div>
                    <div class="card-body">
                        <div class="row">
                          <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="form-label">头像</label>
                                    <div class="list-inline-item text-center">
                                        <img class=" avatar-xxl" src="../assets/person.jpg">
                                    </div>
                                    <div class="list-inline-item upload-img">
                                        <a href="javascript:void(0);" class="text-muted text-center">修改头像
                                            <input class="btn-uploadimg" type="file" name="cover" onchange="changeImg()">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="form-label">用户名</label>
                                    <input type="text" class="form-control" placeholder="用户名" value="米儿">
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="form-label">邮箱</label>
                                    <input type="email" class="form-control" placeholder="Email" value="">
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="form-label">手机</label>
                                    <input type="tel" class="form-control" placeholder="Email" value="13641111111" readonly="readonly">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-right">
                      <button type="submit" class="btn btn-primary">保存 </button>
                    </div>
                </div>
            </form>
            <!-- <el-rorm :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label = "原密码" prop="pass" >
                    <el-input v-model="ruleForm.pass" placeholde = "请输入原密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpass" >
                    <el-input v-model="ruleForm.pass" placeholde = "请输入新密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码" prop="checknewpass" >
                    <el-input v-model="ruleForm.pass" placeholde = "请再次输入新密码" type="password"></el-input>
                </el-form-item>
                <div class="grid-content bg-purple">
                    <el-button type="primary"  @click="submitForm('ruleForm')">保存</el-button>
                 </div>
            </el-rorm>  -->
            <form action="" id="account-form" class="center-info">
                <div class="card">
                    <div class="form-group">
                        <div class="card-header">
                            <label class="form-label">重置密码</label>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label class="form-label">新密码</label>
                                        <input type="password" class="form-control" placeholder="旧密码" value="">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label class="form-label">重复密码</label>
                                        <input type="password" class="form-control" placeholder="新密码" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-right">
                            <button type="submit" class="btn btn-primary">保存 </button>
                        </div>
                    </div>
                </div>
            </form>
    </div>
</template>

<script>
    export default {
        name: "setinfo",
        data(){
            return{
                
            }
        },
        created(){
           
        },
        components:{
            
        },
        methods:{
            
        }
    }
</script>

<style scoped>
</style>
