<template>
	<view class="bigBox">
		<view class="scroll">
			<!-- conlist -->
			<view class="conList">
				<!-- 选择 -->
				<view>
					<checkbox-group>
						<label>
							<checkbox  value="cd"  color="#FFCC33" style="transform:scale(0.7);" />
						</label>
					</checkbox-group>
				</view>
				<view class="conleft">
					<image src="/static/image/thu1.png"></image>
				</view>
				<view class="conright">
					<view class="upper">
						<text class="title">MORE原装魔音音乐耳机</text>
						<text class="integr">1000积分 <text class="orgprice">100元</text></text>
					</view>
					<view class="lower">
						<view class="addsub">
							<view class="sub">
								<image src="/static/image/sub.png"></image>
							</view>
							<view class="num">1</view>
							<view class="add sub">
								<image src="/static/image/add.png"></image>
							</view>
						</view>
					</view>
				</view>
				<!-- 装饰 -->
				<!-- <view class="decor"></view> -->
			</view>
			<view class="conList">
				<!-- 选择 -->
				<view>
					<checkbox-group>
						<label>
							<checkbox  value="cb"  color="#FFCC33" style="transform:scale(0.7);" />
						</label>
					</checkbox-group>
				</view>
				<view class="conleft">
					<image src="/static/image/thu1.png"></image>
				</view>
				<view class="conright">
					<view class="upper">
						<text class="title">MORE原装魔音音乐耳机</text>
						<text class="integr">1000积分<text class="orgprice">100元</text></text>
					</view>
					<view class="lower">
						<view class="addsub">
							<view class="sub">
								<image src="/static/image/sub.png"></image>
							</view>
							<view class="num">1</view>
							<view class="add sub">
								<image src="/static/image/add.png"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="conList">
				<!-- 选择 -->
				<view>
					<checkbox-group>
						<label>
							<checkbox  value="cb"  color="#FFCC33" style="transform:scale(0.7);" />
						</label>
					</checkbox-group>
				</view>
				<view class="conleft">
					<image src="/static/image/thu1.png"></image>
				</view>
				<view class="conright">
					<view class="upper">
						<text class="title">MORE原装魔音音乐耳机</text>
						<text class="integr">1000积分<text class="orgprice">100元</text></text>
					</view>
					<view class="lower">
						<view class="addsub">
							<view class="sub">
								<image src="/static/image/sub.png"></image>
							</view>
							<view class="num">1</view>
							<view class="add sub">
								<image src="/static/image/add.png"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- settlement -->
			<view class="settle">
				<view>
					<checkbox-group style="font-size: 24rpx;">
						<label>
							<checkbox  value="cb"  color="#FFCC33" style="transform:scale(0.7);" />全选
						</label>
					</checkbox-group>
				</view>
				<view class="sbtnbox">
					<view class="total">合计：6000积分</view>
					<view class="sbtn" @click="upayment">结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			upayment(){
				uni.navigateTo({
					url:'/pages/payment/payment?goods_id=' + 1
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/shopredeem.css");
</style>
