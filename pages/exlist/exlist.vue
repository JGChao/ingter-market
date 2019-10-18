<template>
	<view class="bigBox">
		<view class="scroll">
			
			<!-- search -->
			<view class="search">
				<view class="magni">
					<image src="/static/image/magni.png" ></image>
				</view>
				<input  type="text" value="" />
				<button class="sbtn">搜索</button>
			</view>
			<!-- conlist -->
			<view class="conlist" v-if="exlistGoods">
				<view class="conbox" v-for="(item , index) in exlistGoods">
					<navigator :url="'/pages/details/details?goods_id=' + item.goods_id" hover-class="none">
						<view>
							<image :src="item.image[0].file_path" ></image>
						</view>
					</navigator>
					<text>{{item.goods_name}}</text>
					<navigator class="btn" :url="'/pages/payment/payment?goods_id=' + item.goods_id" hover-class="none">立即兑换</navigator>
				</view>
				<!-- <view class="conbox">
					<navigator url="" hover-class="none">
						<view>
							<image src="/static/image/thu1.png" ></image>
						</view>
					</navigator>
					<text>MORE原装魔音音乐耳机</text>
					<view class="btn">立即兑换</view>
				</view>
				<view class="conbox">
					<navigator url="" hover-class="none">
						<view>
							<image src="/static/image/thu1.png" ></image>
						</view>
					</navigator>
					<text>MORE原装魔音音乐耳机</text>
					<view class="btn">立即兑换</view>
				</view>
				<view class="conbox">
					<navigator url="" hover-class="none">
						<view>
							<image src="/static/image/thu1.png" ></image>
						</view>
					</navigator>
					<text>MORE原装魔音音乐耳机</text>
					<view class="btn">立即兑换</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				exlistGoods:[],
				host:"",
				imghost:"",
				exlistobj:{
					search:'',
					category_id:0,
					sortType:'',
					sortPrice:'',
				}
			}
		},
		methods:{
			// 获取商品
			getAllgoods(){
				uni.request({
				    url: this.host + 'api/goods/lists',
				    data: this.exlistobj,
				    header: {},
					method:'GET',
					dataType:'json',
				    success: (res) => {
						let result = res.data.data.list.data;
						this.exlistGoods = result;
				    },
				});
			}
		},
		onLoad(option){
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			// this.exlistobj.category_id = this.$store.state.category_id.category_id
			this.getAllgoods();
		}
	}
</script>

<style>
	@import url("../../static/css/exlist.css");
</style>
