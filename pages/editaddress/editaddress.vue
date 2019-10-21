<template>
	<view class="bigBox">
		<!-- uinfor -->
		<view class="uinfor">
			<view class="shaddress">
				<text class="iaddres">所在地区：</text>
				<input type="text"  v-model="list.region" placeholder=""  placeholder-style="font-size:30rpx;"/>
			</view>
			<view class="shaddress">
				<text class="iaddres">详细地址：</text>
				<input type="text" v-model="list.detail" placeholder=""  placeholder-style="font-size:30rpx;"/>
			</view>
			<view class="uname">
				<text class="iname">联系人：</text>
				<input type="text"  v-model="list.name" placeholder=""  placeholder-style="font-size:30rpx;" />
			</view>
			<view class="uphone">
				<text class="ipnone">联系方式：</text>
				<input type="text" v-model="list.phone" placeholder=""  placeholder-style="font-size:30rpx;" />
			</view>
		</view>
		<view class="btn" :class="[type == 1? 'btnn' : '']"  @click="defaults">设置为默认地址</view>
		<!-- annui -->
		<view class="btn" @click="editress">保存</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// 初始数据 编辑数据
				list:{
					region:'',
					detail:'',
					name:'',
					phone:'',
					address_id:'',
					token:'',
				},
				host:'',
				type:0,
			}
		},
		methods:{
			// 编辑地址
			editress(){
				uni.request({
					url:this.host + 'api/address/edit',
					data:this.list,
					method:'POST',
					success:(res)=>{
						if(res.data.code == 1){
							uni.showToast({
								title:'更新成功',
								icon:'none'
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/myaddress/myaddress'
								})
							},1000)
						}
					}
				})
			},
			// 默认地址
			defaults(){
				uni.request({
					url:this.host + 'api/address/setDefault',
					data:{
						token:this.list.token,
						address_id:this.list.address_id,
					},
					method:'POST',
					success:(res)=>{
						if(res.data.code == 1){
							this.type = 1;
							uni.showToast({
								title:"设置成功",
								icon:"none"
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/myaddress/myaddress',
								})
							},1000)
						}else if(res.data.code == 0){
							uni.showToast({
								title:'已经是默认地址',
								icon:"none"
							})
						}
					}
				})
			}
		},
		onLoad(option) {
			let uinfo = JSON.parse(decodeURIComponent(option.item));
			this.list.region = uinfo.region.province +','+uinfo.region.city+','+uinfo.region.region;
			this.list.detail = uinfo.detail;
			this.list.name = uinfo.name;
			this.list.phone = uinfo.phone;
			this.list.address_id = uinfo.address_id;
			this.host = this.$store.state.host;
			this.list.token = uni.getStorageSync('token');
		}
	}
</script>

<style>
	@import url("../../static/css/editaddress.css");
	.uinfor input{
		font-size: 26rpx;
		color:#333;
	}
</style>
