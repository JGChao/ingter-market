<template>
	<view class="bigBox">
		<!-- form -->
		<view class="formBox">
			<view class="phone">
				<view class="itel">
					<image src="/static/image/phone.png" mode=""></image>
				</view>
				<input type="text" v-model="form.mobile" value=""  placeholder="请输入手机号"/>
			</view>
			<view class="password">
				<view class="lock">
					<image src="/static/image/pass.png" mode=""></image>
				</view>
				<input type="password" v-model="form.password" value=""  placeholder="请输入密码"/>
			</view>
			<view class="password">
				<view class="lock">
					<image src="/static/image/pass.png" mode=""></image>
				</view>
				<input type="password" v-model="form.confirm" value=""  placeholder="请再确认密码"/>
			</view>
			<!-- tibs -->
			<!-- <view class="tibs">*至少包含数字、字母、特殊符号两种组合，区分大小写，至少6位</view> -->
			<button class="subbtn" @click="subLogin">确定</button>
		</view>
	</view>
</template>

<script>
	import until from '@/util.js'
	export default{
		data(){
			return {
				form:{
					mobile:'',
					password:'',
					confirm:'',
				},
				host:''
			}
		},
		methods:{
			subLogin(){
				// 验证手机号
				if(!until.checkMobile(this.form.mobile)){
					uni.showToast({title: '手机号格式错误',icon: 'none'});
					return;
				}
				uni.request({
					url:this.host + '/api/user/editPassword',
					data:this.form,
					method:"POST",
					success:((res)=>{
						if(res.data.code == 1){
							uni.showToast({
								title:"密码修改成功,请重新登陆",
								icon:"none"
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/login/login'
								})
							},2000);
						}
					})
				})
			}
		},
		onLoad(option){
			this.host = this.$store.state.host;
		}
	}
</script>

<style>
	@import url("../../static/css/changepass.css");
</style>
