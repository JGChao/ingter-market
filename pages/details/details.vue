<template>
	<view class="bigBox">
		<view class="scroll" v-if="details">
			<!-- banner -->
			<view class="banner">
				<swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
					<swiper-item v-for="(item , index) in details.detail.image" :key="index">
						<image :src="item.file_path"></image>	
					</swiper-item>
				</swiper>
			</view>
			<!-- cominfor -->
			<view class="cominfor">
				<!-- coupon -->
				<view class="conpou">
					<text class="black">{{details.detail.goods_name}}</text>
					<text class="red">{{details.goods_description}}</text>
				</view>
				<!-- necint -->
				<view class="necint">
					<text class="left">积分</text>
					<text class="right">{{details.detail.spec[0].goods_price}}</text>
				</view>
				<!-- brand -->
				<view class="brand" v-if="details.detail.goods_brand">
					<text class="left">品牌</text>
					<text class="right">{{details.goods_brand}}</text>
				</view>
				<!-- send to -->
				<view class="sendto">
					<view class="send" style="width: 106rpx;">配送</view>
					<view class="address" style="font-size: 26rpx; color: #333; line-height: 50rpx;">
						<!-- <view></view>
						<view></view>
						<view></view> -->
						<text>快递 免邮</text>
					</view>
					<view class="stock">{{details.detail.deduct_stock_type}}件</view>
				</view>
				<!-- praise -->
				<!-- <view class="praise">
					<view class="left">
						<text class="cotary">好评度:</text>
						<text class="percen">66%</text>
					</view>
					<view class="right">
						<text class="ponum">参与人数</text>
						<text class="num">3</text>
					</view>
				</view> -->
				<!-- evaluate -->
				<!-- <view class="evaluate">
					<view class="btn">全部(20)</view>
					<view class="btn select">好评(2)</view>
					<view class="btn">差评(2)</view>
					<view class="btn">品质保障(2)</view>
					<view class="btn">质量精良(2)</view>
				</view> -->
				<!-- imtips -->
				<view class="imtips">
					<text class="tips">重要提示:</text>
					<text class="content">{{details.important_field}}</text>
				</view>
			</view>
			<!-- dataimg -->
			<view class="detaimg">
				<!-- <view class="img">
					<image src="/static/image/deta1.png"></image>
				</view>
				<view class="img">
					<image src="/static/image/deta2.png"></image>
				</view>
				<view class="img">
					<image src="/static/image/deta3.png"></image>
				</view> -->
				<view class="ricnimg">
					<rich-text :nodes="strings" class="ricn"></rich-text>
				</view>
			</view>
	
			<!-- tab -->
			<view class="tab">
				<view class="left" @click="addshopcart">加入购物车</view>
				<view class="right" @click="exchange">立即兑换</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				autoplay:true,
				interval: 4000,
				duration: 1000,
				circular:true,
				host:'',
				imghost:'',
				goods_id:"",
				details:null,
				token:'',
				strings:'',
				// nodes: [{
				// 	type: 'p',
				// 	attrs: {
				// 		style: 'width:333rpx;heigth:887rpx;'
				// 	},
				// 	children: [{
				// 		type: 'img',
				// 		style: 'width:333rpx;heigth:887rpx;',
				// 	}]
				// }],
			}
		},
		methods:{
			// 查询一条商品
			getOneGoods(){
				uni.request({
					url: this.host + 'api/goods/detail?goods_id=' + this.goods_id,
					data: {},
					header: {},
					method:'POST',
					dataType:'json',
					success:(res)=>{
						let result = res.data.data;
						this.details = result;
						let conimg = result.detail.content;
						const regex = new RegExp('<img', 'gi');
						conimg = conimg.replace(regex, `<img style="width: 100%;height:887rpx"`);
						this.strings = conimg;		
					}
				})
			},
			// 加入购物车
			addshopcart(){
				uni.request({
					url: this.host + 'api/cart/add',
					data: {
						goods_id:this.goods_id,
						token:this.token
					},
					header: {},
					method:'POST',
					dataType:'json',
					success:(res)=>{
						console.log(res)
					}
				})
			},
			// 立即兑换
			exchange(){
				uni.navigateTo({
					url:'/pages/payment/payment?goods_id=' + this.goods_id
				})
			}
		},
		onLoad(option){
			this.token = uni.getStorageSync('token');
			this.goods_id = option.goods_id;
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			this.getOneGoods();
		}
	}
</script>

<style>
	@import url("../../static/css/details.css");
</style>
