<template>
	<view class="bigBox">
		<!-- uinfor -->
		<view class="uinfor">
			<view class="shaddress">
				<text class="iaddres">所在地区：</text>
				<input type="text" v-model="form.region" value="" placeholder="福建省,厦门市,思明区" placeholder-class="address" />
			</view>
			<view class="shaddress" @click="xxress">
				<text class="iaddres">详细地址：</text>
				<input type="text" v-model="form.detail" value="" placeholder="请填写地址" placeholder-class="address" />
			</view>
			<view class="uname">
				<text class="iname">联系人：</text>
				<input type="text" v-model="form.name" value="" placeholder="请填写姓名" placeholder-class="address" />
			</view>
			<view class="uphone">
				<text class="ipnone">联系方式：</text>
				<input type="text" v-model="form.phone" value="" placeholder="请填写手机号码" placeholder-class="address" />
			</view>
		</view>
		<!-- annui -->
		<view class="btn" @click="subbtn">保存</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					region:'',
					detail:'',
					name:'',
					phone:'',
					token:''
				},
				host:'',
			}
		},
		methods:{
			// 定位地址
			xxress(){
				uni.chooseLocation({
				    success:(res)=>{
					   this.form.detail = res.address
				    }
				});
			},
			// 保存收货地址
			subbtn(){
				uni.request({
					url:this.host + '/api/address/add',
					data:this.form,
					method:"POST",
					success:(res)=>{
						if(res.data.code == 1){
							uni.showToast({
								title:"地址添加成功",
								icon:'none',
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/myaddress/myaddress'
								})
							},1000)
						}
					}
				})
			}
		},
		onLoad(){
			this.host = this.$store.state.host;
			this.form.token = uni.getStorageSync('token');	
		}
	}
</script>

<style>
	@import url("../../static/css/editaddress.css");
	.uinfor .address{
		font-size: 26rpx;
		color: #666;
	}
	.uinfor input{
		font-size: 26rpx;
		color: #333;
	}
</style>

