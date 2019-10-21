<template>
	<view class="bigBox">
		<view class="scroll" v-if="goodscart">
			<!-- conlist -->
			<view class="conList" v-for="(item , index) in goodscart.goods_list" :key="index">
				<view class="scoll">
					<!-- 选择 -->
					<view>
						<checkbox-group>
							<label>
								<checkbox :checked="checked"  value="cd"  color="#FFCC33"  style="transform:scale(0.7);" />
							</label>
						</checkbox-group>
					</view>
					<view class="conleft">
						<image src="/static/image/thu1.png"></image>
					</view>
					<view class="conright">
						<view class="upper">
							<text class="title">{{item.goods_name}}</text>
							<text class="integr">{{item.goods_price}}积分 <text class="orgprice">{{item.goods_sku.line_price}}元</text></text>
						</view>
						<view class="lower">
							<view class="addsub">
								<view class="sub" @click="sub(item.goods_id,item.goods_sku_id)">
									<image src="/static/image/sub.png"></image>
								</view>
								<view class="num">{{item.total_num}}</view>
								<view class="add sub" @click="add">
									<image src="/static/image/add.png"></image>
								</view>
							</view>
						</view>
					</view>
					<!-- 删除 -->
					<view class="remove" @click="remove(item.goods_id,item.goods_sku_id)">
						<image src="/static/image/iremove.png" mode=""></image>
					</view>
				</view>
			</view>
			<!-- settlement -->
			<view class="settle">
				<view>
					<checkbox-group style="font-size: 24rpx;">
						<label>
							<checkbox :checked="true"  value=""  color="#FFCC33" style="transform:scale(0.7);" />全选
						</label>
					</checkbox-group>
				</view>
				<view class="sbtnbox">
					<view class="total">合计：{{goodscart.order_total_price}}积分</view>
					<view class="sbtn" @click="upayment">结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				// 选中状态
				checked:false,
				token:'',
				host:'',
				goodscart:null,
			}
		},
		methods:{
			// 获取购物车列表信息
			getcartgoods(){
				uni.request({
					url:this.host + 'api/cart/lists',
					method:'POST',
					data:{
						token:this.token
					},
					success:(res)=>{
						if(res.data.code == 1){
							this.goodscart = res.data.data;
						}
					}
				})
			},
			// 删除
			remove(goodsid,goodsskuid){
				uni.request({
					url:this.host + 'api/cart/delete',
					data:{
						token:this.token,
						goods_id:goodsid,
						goods_sku_id:goodsskuid
					},
					method:'POST',
					success:(res)=>{
						if(res.data.code == 1){
							uni.showToast({
								title:"商品删除成功",
								icon:"none",
							});
							this.getcartgoods();
						}
					}
				})
			},
			// 购物车减
			sub(goodsid,goodsskuid){
				uni.request({
					url:this.host + 'api/cart/sub',
					data:{
						token:this.token,
						goods_id:goodsid,
						goods_sku_id:goodsskuid
					},
					method:'POST',
					success:(res)=>{
						console.log(res)
					}
				})
			}
		},
		onTabItemTap(){
			this.getcartgoods();
		},
		onLoad() {
			this.token = uni.getStorageSync('token');
			this.host = this.$store.state.host;
			this.getcartgoods();
		}
	}
</script>

<style>
	@import url("../../static/css/shopredeem.css");
</style>
