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
			<!-- vercode -->
			<view class="vercode">
				<input type="text" v-model="form.code"  value=""  placeholder="请输入验证码"/>
				<button class="getcode" @click="getcode" :class="[color == 0? 'getcode1' : '']" :disabled="dis">发送验证码</button>
			</view>
			<button class="subbtn" @click="nextstep">下一步</button>
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
					code:'',
					key:''
				},
				host:'',
				dis:false,
				color:1,
			}
		},
		methods:{
			// 短信验证码
			getcode(){
				// 验证手机号
				if(!until.checkMobile(this.form.mobile)){
					uni.showToast({title: '手机号格式错误',icon: 'none'});
					return;
				}
				uni.request({
					url: this.host + '/api/user/sendSms',
					data:{
						mobile:this.form.mobile
					},
					method:'POST',
					success:(res)=>{
						let result = res.data.data.key;
						this.form.key = result;
						if(res.data.code == 0){
							uni.showToast({
								title:"发送次数太过频繁,请稍后再发",
								icon:"none"
							})
						}
						this.color = 0,
						this.dis = true;
						setTimeout(()=>{
							this.color = 1,
							this.dis = false;
						},60000)
					},
				})
			},
			// 忘记密码提交
			nextstep(){
				uni.request({
					url:this.host + '/api/user/forgetPassword',
					data:this.form,
					method:"POST",
					success:((res)=>{
						if(res.data.code == 0){
							uni.showToast({
								title:"验证码错误或者已过期",
								icon:"none"
							})
						}else if(res.data.code == 1){
							uni.showToast({
								title:"请求提交成功",
								icon:"none"
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/changepass/changepass'
								})
							},2000);
						}
					})
				})
			},
			
		},
		onLoad(option){
			this.host = this.$store.state.host;
		}
	}
</script>

<style>
	@import url("../../static/css/forgetpass.css");
</style>
