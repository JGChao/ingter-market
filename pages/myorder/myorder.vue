<template>
	<view class="bigBox">
		<view class="scroll">
			<!-- 选项 -->
			<view class="option">
				<view class="op_bar op_sce">全部</view>
				<view class="op_bar">待付款</view>
				<view class="op_bar">待发货</view>
				<view class="op_bar">待评价</view>
			</view>
			<view class="tiancong"></view>
			<!-- 订单列表 -->
			<view class="orderlist">
				<!-- shangpuname -->
				<view class="shopname">
					<text class="sname">MORE魔音电器旗舰店</text>
					<text class="exstatus">兑换成功</text>
				</view>
				<!-- shangpinxinxi -->
				<navigator url="/pages/orderdetails/orderdetails" hover-class="none" class="shopmation">
					<view class="shopthumb">
						<image src="/static/image/thu1.png"></image>
					</view>
					<view class="shopmess">
						<text class="shname">MORE原装魔音音乐耳机</text>
						<view class="innum">
							<text class="left">1000积分</text>
							<text class="right">×3</text>
						</view>
					</view>
				</navigator>
				<!-- zongjia -->
				<view class="anytotal">
					<text class="num">共1件商品 合计：</text>
					<text class="inget">3000积分</text>
				</view>
				<!-- caozuo -->
				<view class="operabtn">
					<view class="btn">查看积分</view>
					<view class="btn">追加评价</view>
					<view class="btn">删除订单</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style>
	@import url("../../static/css/myorder.css");
</style>
