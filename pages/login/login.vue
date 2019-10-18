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
				// if (!this.$validate.isPhone(this.form.username)) {
				//   uni.showToast({
				// 	icon: 'none',
				// 	title: '请输入正确的手机号'
				//   })
				// }
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
						};
						setTimeout(()=>{
							uni.reLaunch({
								url:'/pages/my/my'
							})
						},2000);
						// 存token
						uni.setStorageSync('token', result.token);
						// 存用户信息
						uni.setStorageSync('userinfo', userinfo)
						
					}
				})
			},
			
		},
		onLoad(){
			this.host = this.$store.state.host;
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>
