<template>
	<view class="bigBox">
		<view class="scroll">
			<!-- reslist -->
			<view class="reslist">
				<view class="restlistscroll">
					<!-- zuo -->
					<view class="ihome" @click="address">
						<image src="/static/image/ihome.png" mode=""></image>
					</view>
					<!-- zhong -->
					<view class="detcons">
						<text class="uinfor">周先生</text>
						<text class="uinfor">福建省厦门市湖里区仙岳路4666号</text>
						<text class="uinfor">18513645962</text>
					</view>
					<!-- you -->
					<navigator url="/pages/editaddress/editaddress" hover-class="none" class="imore">
						<image src="/static/image/imore.png" mode=""></image>
					</navigator>
					<!-- uremove -->
					<view class="uremove">
						<image src="/static/image/iremove.png"></image>
					</view>
				</view>
				<!-- zhuangshi -->
				<!-- <view class="decora">
					<text class="defa">默</text>
				</view> -->
			</view>
			<view class="reslist">
				<view class="restlistscroll">
					<!-- zuo -->
					<view class="ihome" @click="address">
						<image src="/static/image/ihome.png" mode=""></image>
					</view>
					<!-- zhong -->
					<view class="detcons">
						<text class="uinfor">周先生</text>
						<text class="uinfor">福建省厦门市湖里区仙岳路4666号</text>
						<text class="uinfor">18513645962</text>
					</view>
					<!-- you -->
					<view class="imore">
						<image src="/static/image/imore.png" mode=""></image>
					</view>
					<!-- uremove -->
					<view class="uremove">
						<image src="/static/image/iremove.png"></image>
					</view>
				</view>
			</view>
			<view class="reslist">
				<view class="restlistscroll">
					<!-- zuo -->
					<view class="ihome" @click="address">
						<image src="/static/image/ihome.png" mode=""></image>
					</view>
					<!-- zhong -->
					<view class="detcons">
						<text class="uinfor">周先生</text>
						<text class="uinfor">福建省厦门市湖里区仙岳路4666号</text>
						<text class="uinfor">18513645962</text>
					</view>
					<!-- you -->
					<view class="imore">
						<image src="/static/image/imore.png" mode=""></image>
					</view>
					<!-- uremove -->
					<view class="uremove">
						<image src="/static/image/iremove.png"></image>
					</view>
				</view>
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
		methods:{
			address(){
				uni.navigateTo({
					url:'/pages/payment/payment?goods_id=' + 1
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/myaddress.css");
</style>
