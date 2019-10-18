<template>
	<view class="bigBox">
		<!-- form -->
		<view class="formBox">
			<view class="phone">
				<view class="itel">
					<image src="/static/image/phone.png" mode=""></image>
				</view>
				<input type="text" value=""  placeholder="请输入手机号"/>
			</view>
			<!-- vercode -->
			<view class="vercode">
				<input type="text" value=""  placeholder="请输入验证码"/>
				<button class="getcode">发送验证码</button>
			</view>
			<button class="subbtn" @click="nextstep">下一步</button>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			nextstep(){
				uni.navigateTo({
				    url: '/pages/changepass/changepass'
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/forgetpass.css");
</style>
