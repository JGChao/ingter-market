<template>
	<view class="bigBox">
		<!-- form -->
		<view class="formBox">
			<view class="password">
				<view class="lock">
					<image src="/static/image/pass.png" mode=""></image>
				</view>
				<input type="password" value=""  placeholder="请输入密码"/>
			</view>
			<view class="password">
				<view class="lock">
					<image src="/static/image/pass.png" mode=""></image>
				</view>
				<input type="password" value=""  placeholder="请再确认密码"/>
			</view>
			<!-- tibs -->
			<view class="tibs">*至少包含数字、字母、特殊符号两种组合，区分大小写，至少6位</view>
			<button class="subbtn" @click="subLogin">确定</button>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			subLogin(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/changepass.css");
</style>
