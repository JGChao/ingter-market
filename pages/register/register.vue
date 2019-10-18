<template>
	<view class="bigBox">
		<!-- option -->
		<view class="option">
			<navigator url="/pages/login/login" hover-class="none" class="opt">
				<view class="opttab">登录</view>
			</navigator>
			<view class="regis">注册</view>
		</view>
		<!-- form -->
		<view class="formBox">
			<view class="phone">
				<view class="itel">
					<image src="/static/image/phone.png" mode=""></image>
				</view>
				<input type="text" v-model="form.username" value=""  placeholder="请输入手机号"/>
			</view>
			<view class="password">
				<view class="lock">
					<image src="/static/image/pass.png" mode=""></image>
				</view>
				<input type="password" v-model="form.password" value=""  placeholder="请输入密码"/>
			</view>
			<!-- tibs -->
			<view class="tibs">*至少包含数字、字母、特殊符号两种组合，区分大小写，至少6位</view>
			<!-- vercode -->
			<view class="vercode">
				<input type="text" value=""  placeholder="请输入验证码"/>
				<button class="getcode">发送验证码</button>
			</view>
			<button class="subbtn" @click="subregister">完成注册</button>
			<!-- forget -->
			<view class="forget">
				<navigator url="" hover-class="none" class="fgpass">忘记密码？</navigator>
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
			// 提交注册
			subregister(){
				uni.request({
					url: this.host + '/api/user/register',
					data:this.form,
					method:'POST',
					dataType:'json',
					success:(res)=>{
						if(res.data.code == 1){
							uni.showToast({
								title:'注册成功',
								icon:'success',
							});
						};
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							});
						},2000)
					}
				})
			}
		},
		onLoad(){
			this.host = this.$store.state.host;
		}
	}
</script>

<style>
	@import url("../../static/css/register.css");
</style>
