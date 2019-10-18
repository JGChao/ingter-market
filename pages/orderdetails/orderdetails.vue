<template>
	<view class="bigBox">
		<!-- consignee -->
		<view class="consignee">
			<!-- consiger -->
			<view class="consig">
				<view class="left">收货人：周先生</view>
				<view class="right">18513645962</view>
			</view>
			<!-- conaddress -->
			<view class="conaddress">
				<view class="left">
					<image src="/static/image/ares.png" mode=""></image>
				</view>
				<view class="right">收货地址：福建省厦门市湖里区仙岳路4666号</view>
			</view>
			<!-- shopinfor -->
			<view class="shopinfor">
				<!-- upward -->
				<view class="upward">
					<view class="sthumb">
						<image src="/static/image/thu1.png"></image>
					</view>
					<view class="infor">
						<text class="chname">MORE原装魔音音乐耳机</text>
						<view class="innum">
							<text class="left">1000积分</text>
							<text class="right">×3</text>
						</view>
					</view>
				</view>
				<!-- down -->
				<view class="down">
					<text class="total">合计：</text>
					<text class="integ">3000积分</text>
				</view>
			</view>
		</view>
		<!-- orderinfor -->
		<view class="orderinfor">
			<text class="orin">订单编号：458613624561</text>
			<text class="orin">下单时间：2019-10-01 &nbsp 16:00</text>
			<text class="orin">发货时间：2019-10-02 &nbsp 10:00</text>
		</view>
		<!-- tabbar -->
		<navigator url="/pages/payment/payment" hover-class="none" class="tabbar">再次兑换</navigator>
	</view>
</template>

<script>;
	export default{
		methods:{
			
		}
	}
</script>

<style>
	@import url("../../static/css/orderdetails");
</style>
