<template>
	<view class="bigBox">
		<!-- option -->
		<view class="option">
			<view class="opttab">登录</view>
			<navigator url="/pages/register/register" hover-class="none" class="regiss">
				<view class="regis">注册</view>
			</navigator>
		</view>
		<!-- form -->
		<view class="formBox">
			<view class="phone">
				<view class="itel">
					<image src="/static/image/phone.png" mode=""></image>
				</view>
				<input type="text" v-model="form.username" name="phone" value=""  placeholder="请输入手机号"/>
			</view>
			<view class="password">
				<view class="lock">
					<image src="/static/image/pass.png" mode=""></image>
				</view>
				<input type="password" v-model="form.password" value=""  placeholder="请输入密码"/>
			</view>
			<button class="subbtn" @click="subLogin">登录</button>
			<button class="findex" @click="findex">返回首页</button>
			<!-- forget -->
			<view class="forget">
				<navigator url="/pages/forgetpass/forgetpass" hover-class="none" class="fgpass">忘记密码？</navigator>
			</view>
			<!-- wxlogo -->
			<!-- <view class="wxlogo">
				<image src="/static/image/wxlogo.png" mode=""></image>
			</view> -->
		</view>
	</view>
</template>

<script>
	import until from '@/util.js'
	export default{
		data(){
			return {
				form:{
					username:'',
					password:'',
				},
				host:'',
			}
		},
		methods:{
			// 登录
			subLogin(){
				// 验证手机号
				if(!until.checkMobile(this.form.username)){
					uni.showToast({title: '手机号格式错误',icon: 'none'});
					return;
				}
				uni.request({
					url:this.host + 'api/user/login',
					data:this.form,
					dataType:'json',
					method:'POST',
					success:(res)=>{
						let userinfo = res.data.data.user;
						let result = res.data.data;
						if(res.data.code == 1){
							uni.showToast({
								title:'登录成功',
								icon:'success'
							})
							setTimeout(()=>{
								uni.reLaunch({
									url:'/pages/my/my'
								})
							},2000);
						}else if(res.data.code == 0){
							uni.showToast({
								title:'账号或密码错误',
								icon:"none"
							})
						}
						// 存token
						uni.setStorageSync('token', result.token);
						// 存用户信息
						uni.setStorageSync('userinfo', userinfo)
						
					}
				})
			},
			// 返回首页
			findex(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
			
		},
		onLoad(){
			this.host = this.$store.state.host;
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>
