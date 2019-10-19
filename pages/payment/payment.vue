<template>
	
	<view class="bigBox" v-if="orderdetails" >
		<view class="scroll">
			<!-- 地址 -->
			<navigator class="useaddress" url="/pages/myaddress/myaddress" hover-class="none">
				<view class="icon_aadres">
					<image src="/static/image/icon-res.png" mode=""></image>
				</view>
				<view class="usemation">
					<view class="userma">
						<text class="uname">周先生</text>
						<text class="phone">13245689865</text>
					</view>
					<text class="uaddress">福建省厦门市湖里区仙岳路4666号</text>
					<text class="careful">收货不便时，可选择免费暂存服务</text>
				</view>
			</navigator>
			<!-- shangpinxinxi -->
			<view class="shopmationlist">
				<view class="store">
					<view class="icon_store">
						<image src="/static/image/store.png" mode=""></image>
					</view>
					<text class="storname">MORE魔音电器旗舰店</text>
				</view>
				<!-- shangpinxinxi -->
				<view class="shopmation">
					<view class="storthumb">
						<image :src="orderdetails.detail.image[0].file_path"></image>
					</view>
					<view class="shopmess">
						<text class="shname">{{orderdetails.detail.goods_name}}</text>
						<view class="innum">
							<text class="left">{{orderdetails.detail.spec[0].goods_price}}积分</text>
							<text class="right">×{{goods_num}}</text>
						</view>
					</view>
				</view>
				<!-- peisongfangshi -->
				<view class="delivery">
					<text class="left">配送方式</text>
					<text class="in">普通配送</text>
					<text class="right">快递 免邮</text>
				</view>
				<!-- orederremark beizhu -->
				<view class="remark">
					<text class="uremark">订单备注</text>
					<input type="text" placeholder="选填,请先和商家协商一致" placeholder-class="font_color"   value="" />
				</view>
				<!-- heji -->
				<view class="htotal">
					<text class="left">共{{goods_num}}件 合计：</text>
					<text class="right">{{orderdetails.detail.spec[0].goods_price}}积分</text>
				</view>
			</view>
		</view>
		<!-- jiesuan -->
		<view class="bottom">
			<view class="hinfo">
				<text class="left">共{{goods_num}}件，</text>
				<text class="in">合计：</text>
				<text class="right">{{orderdetails.detail.spec[0].goods_price}}积分</text>
			</view>
			<view class="btn" @click="suborder">提交订单</view>
		</view>
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="center" class="popo">
			<view class="htitle" style="font-size: 30rpx; color: #333;margin-bottom: 38rpx;">确定提交订单吗？</view>
			<view class="row" style="display: flex; justify-content: center;">
				<view class="cancel" @click="close" style="font-size: 34rpx; color: #333;margin-right: 15rpx;">取消</view>
				<view class="determ" @click="placeorder" style="font-size: 34rpx; color: #333;">确定</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/popup/uni-popup/uni-popup.vue"
	export default{
		 components: {uniPopup},
		data(){
			return {
				goods_id:'',
				goods_price:'',
				goods_num:'',
				orderdetails:null,
			}
		},
		methods:{
			// 查询兑换商品
			getOrderGoods(){
				uni.request({
					url: this.host + 'api/goods/detail?goods_id=' + this.goods_id,
					data: {},
					header: {},
					method:'POST',
					dataType:'json',
					success:(res)=>{
						let result = res.data.data;
						this.orderdetails = result;
						console.log(result)
					}
				})
			},
			// 提交订单
			suborder(){
				this.$refs.popup.open()
			},
			// 结算
			placeorder(){
				uni.redirectTo({
					url:'/pages/myorder/myorder'
				})
			},
			// 取消订单
			close(){
				this.$refs.popup.close()
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		},
		onLoad(option){
			this.goods_id = option.goods_id;
			this.goods_price = option.goods_price;
			this.goods_num = option.goods_num;
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			this.getOrderGoods();
		}
	}
</script>

<style>
	@import url("../../static/css/payment.css");
</style>
