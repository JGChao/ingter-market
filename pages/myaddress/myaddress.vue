<template>
	<view class="bigBox">
		<view class="scroll" v-if="addresslist">
			<!-- reslist -->
			<view class="reslist" v-for="(item , index) in addresslist.list" :key="index">
				<view class="restlistscroll">
					<!-- zuo -->
					<view class="ihome">
						<image src="/static/image/ihome.png" mode=""></image>
					</view>
					<!-- zhong -->
					<view class="detcons">
						<text class="uinfor">
							<text class="name">{{item.name}}</text>
							<text class="defuil" :class="[item.address_id == addresslist.default_id? 'defuilys' : '']">默认</text>
						</text>
						<text class="uinfor">{{item.detail}}</text>
						<text class="uinfor">{{item.phone}}</text>
					</view>
					<!-- you -->
					<navigator :url="'/pages/editaddress/editaddress?item=' + encodeURIComponent(JSON.stringify(item))" hover-class="none" class="imore">
						<image src="/static/image/imore.png" mode=""></image>
					</navigator>
					<!-- uremove -->
					<view class="uremove" @click="remove(item.address_id)">
						<image src="/static/image/iremove.png"></image>
					</view>
				</view>
				<!-- zhuangshi -->
				<!-- <view class="decora">
					<text class="defa">默</text>
				</view> -->
			</view>
			<!-- add -->
			<navigator url="/pages/newaddress/newaddress" hover-class="none" class="add">
				<text class="plus">+</text>
				<text class="padd">添加新地址</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				host:'',
				token:'',
				addresslist:null,
				// 默认地址id
			}
		},
		methods:{
			// 获取地址列表
			getaddresslist(){
				uni.request({
					url:this.host + 'api/address/lists',
					data:{token:this.token},
					method:'POST',
					dataType:'json',
					success:(res)=>{
						if(res.data.code == 1){
							this.addresslist = res.data.data;
						}
					}
				})
			},
			// 删除地址
			remove(rem){
				uni.request({
					url:this.host + 'api/address/delete',
					data:{
						token:this.token,
						address_id:rem,
					},
					method:'POST',
					success:(res)=>{
						if(res.data.code == 1){
							uni.showToast({
								title:"删除成功",
								icon:'none'
							}),
							this.getaddresslist()
						}
					}
				})
			}
		},
		onLoad(option) {
			this.host = this.$store.state.host;
			this.token = uni.getStorageSync('token');
			this.getaddresslist();
		}
	}
</script>

<style>
	@import url("../../static/css/myaddress.css");
</style>
