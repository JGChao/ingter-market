<template>
	<view class="bigBox">
		<view class="scroll">
			<!-- banner -->
			<view class="banner">
				<swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
					<swiper-item>
						<image class="backgroimg-img" src="/static/image/barend1.png"></image>	
					</swiper-item>
					<swiper-item>
						<image class="backgroimg-img" src="/static/image/barend1.png"></image>	
					</swiper-item>
					<swiper-item>
						<image class="backgroimg-img" src="/static/image/barend1.png"></image>	
					</swiper-item>
				</swiper>
			</view>
			
			<!-- list -->
			<view class="bralist" v-if="categoryleave">
				<view class="brablock" v-for="(item , index) in categoryleave" :key="index">
					<view class="bthumb" @click="tocategory">
						<image :src="imghost + item.image.file_name"></image>
					</view>
					<text class="bradesc">{{item.name}}</text>
					<view class="bbtn">{{item.name}}</view>
				</view>
				<!-- <view class="brablock">
					<view class="bthumb">
						<image src="/static/image/b2.png"></image>
					</view>
					<text class="bradesc">MORE原装魔音耳机</text>
					<view class="bbtn">MORE魔音</view>
				</view>
				<view class="brablock">
					<view class="bthumb">
						<image src="/static/image/b3.png"></image>
					</view>
					<text class="bradesc">MORE原装魔音耳机</text>
					<view class="bbtn">MORE魔音</view>
				</view>
				<view class="brablock">
					<view class="bthumb">
						<image src="/static/image/b4.png"></image>
					</view>
					<text class="bradesc">MORE原装魔音耳机</text>
					<view class="bbtn">MORE魔音</view>
				</view>
				<view class="brablock">
					<view class="bthumb">
						<image src="/static/image/b5.png"></image>
					</view>
					<text class="bradesc">MORE原装魔音耳机</text>
					<view class="bbtn">MORE魔音</view>
				</view>
				<view class="brablock">
					<view class="bthumb">
						<image src="/static/image/b3.png"></image>
					</view>
					<text class="bradesc">MORE原装魔音耳机</text>
					<view class="bbtn">MORE魔音</view>
				</view> -->
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
				 categoryleave:null,
				 imghost:'',
			}
		},
		methods:{
			tocategory(){
				uni.reLaunch({
					url:'/pages/category/category'
				})
			},
			// 获取分类列表
			getcateGory(){
				uni.request({
				    url: this.host + 'api/category/lists',
				    data: {},
				    header: {},
					method:'GET',
					dataType:'json',
				    success: (res) => {
				        let result = res.data.data.list;
						this.categoryleave = result;
				    }
				});
			}
		},
		onLoad() {
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			this.getcateGory();
		}
	}
</script>

<style>
	@import url("../../static/css/brandarea.css");
</style>
