<template>
	<view class="bigBox">
		<view class="scroll">
			<!-- banner -->
			<view class="backgroimg">
				<swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
					<swiper-item>
						<image class="backgroimg-img" src="/static/image/backimg.png"></image>	
					</swiper-item>
					<swiper-item>
						<image class="backgroimg-img" src="/static/image/backimg.png"></image>	
					</swiper-item>
					<swiper-item>
						<image class="backgroimg-img" src="/static/image/backimg.png"></image>	
					</swiper-item>
				</swiper>		
			</view>
			<!-- 公告 -->
			<view class="notice">
				<view class="not-left">公告</view>
				<view class="not-middle">
					<text>查询注册登录账户？</text>
					<text>关于积分兑换常见问题的提示？</text>
					<text>关于”国庆70周年庆祝”活动快件要求哈哈哈哈？</text>
				</view>
				<navigator url="/pages/noticelist/noticelist" hover-class="none" class="look">
					<view class="not-right">查看</view>
				</navigator>
			</view>
			<!-- 分类 -->
			<view class="category">
				<navigator url="/pages/exlist/exlist"  open-type="reLaunch" hover-class="none">
					<view class="butt">
						<image src="/static/image/cate1.png"></image>
					</view>
					<text>积分商场</text>
				</navigator>
				<navigator url="/pages/category/category" open-type="reLaunch" hover-class="none">
					<view class="butt">
						<image src="/static/image/cate2.png"></image>
					</view>
					<text>礼品分类</text>
				</navigator>
				<navigator url="/pages/brandarea/brandarea" hover-class="none">
					<view class="butt">
						<image src="/static/image/cate3.png"></image>
					</view>
					<text>品牌专区</text>
				</navigator>
				<navigator url="/pages/exlist/exlist" open-type="reLaunch" hover-class="none">
					<view class="butt">
						<image src="/static/image/cate4.png"></image>
					</view>
					<text>我能兑换</text>
				</navigator>
			</view>
			<!-- 积分商城 -->
			<view class="title">
				<text>积分商场</text>
			</view>
			<view class="intmall" v-if="indexGoods">
				<navigator class="ingimg" :url="'/pages/details/details?goods_id=' + item.goods_id " hover-class="none" v-for="(item , index) in indexGoods" :key="index">
					<image  :src="item.image[0].file_path"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				autoplay:true,
				interval: 4000,
				duration: 1000,
				circular:true,
				indexGoods:[],
				host:"",
				imghost:"",
				indexobj:{
					search:'',
					category_id:'',
					sortType:'',
					sortPrice:'',
				},
				placeholderSrc:'/static/image/thu1.png'
			}
		},
		methods: {
			// 获取商品
			getAllgoods(){
				uni.request({
				    url: this.host + 'api/goods/lists',
				    data: this.indexobj,
				    header: {},
					method:'GET',
					dataType:'json',
				    success: (res) => {
						// let imgobj = null, imageobj = [] ,name =[], a = null;
				        let result = res.data.data.list.data;
						// imgobj = result;
						// for(let i=0;i<imgobj.length;i++){
						// 	name[i] = imgobj[i].goods_name;
						//     a = imgobj[i].image;
						// 	a.forEach((v, i)=>{
						// 		imageobj.push(v)
						// 	})
						// };
						// imageobj.forEach((v,i)=>{
						// 	imageobj[i].goods_name = name[i]
						// });
						this.indexGoods = result;
				    },
				});
			}
		},
		computed:{
			
		},
		onLoad() {
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			this.getAllgoods();
		},
		
	}
</script>

<style>
	@import url("../../static/css/index.css");
</style>
