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
				<view class="ricnimg">
					<rich-text :nodes="strings" class="ricn"></rich-text>
				</view>
			</view>
	
			<!-- tab -->
			<view class="tabb">
				<view class="left" @click="addshopcart('bottom')">加入购物车</view>
				<view class="right" @click="open('bottom')">立即兑换</view>
			</view>
			
			<!-- popup弹出层 -->
			<popup :open="openPopup" :position="position" :percent="percent" background="#fff" class="popup">
				<view class="lnnyer">
					<view class="lnny" v-if="details.specData">
						<!-- 价格--每一个颜色的库存 -->
						<view class="price-stock">
							<!-- <view class="price" v-if="goods_price">价格：0积分</view> -->
							<view class="price">价格：{{goods_price1}}积分</view>
							<view class="stock">库存：100件</view>
						</view>
						<!-- 包装 -->
						<view class="packing">
							<view class="btitle">{{details.specData.spec_attr[0].group_name}}</view>
							<view class="packmethod">
								<view class="btn" v-for="(item , index) in details.specData.spec_attr[0].spec_items" :key="index" 
									  @click="select1(item.item_id)" v-bind:class="[item.item_id == currentType1? 'selectcolor1' : '']"
								>
									{{item.spec_value}}
								</view>
							</view>
						</view>
					<!-- 颜色 -->
						<view class="color">
							<view class="ctitle">{{details.specData.spec_attr[1].group_name}}</view>
							<view class="colormethod">
								<view class="btn" v-for="(item , index) in details.specData.spec_attr[1].spec_items" :key="index"
								      @click="select2(item.item_id)" v-bind:class="[item.item_id == currentType2? 'selectcolor2' : '']"
								 >
									{{item.spec_value}}
								</view>
							</view>
						</view>
					</view>
					<!-- 购买数量 -->
					<view class="num">
						<view class="ntitle">购买数量</view>
						<view class="addred">
							<view class="red" @click="red">
								<image src="/static/image/sub.png"></image>
							</view>
							<view class="snum">{{goods_num}}</view>
							<view class="add" @click="add">
								<image src="/static/image/add.png"></image>
							</view>
						</view>
					</view>
					<!-- 按钮 -->
					<view class="btnbox">
						<view class="btn cancel" @click="close">取消</view>
						<view class="btn" @click="goplay">确定</view>
					</view>
				</view>
			</popup>
			<!-- popup弹出层 2-->
			<popup :open="openPopup2" :position="position" :percent="percent" background="#fff" class="popup">
				<view class="lnnyer">
					<view class="lnny" v-if="details.specData">
						<!-- 价格--每一个颜色的库存 -->
						<view class="price-stock">
							<view class="price">价格：{{goods_price2}}积分</view>
							<view class="stock">库存：100件</view>
						</view>
						<!-- 包装 -->
						<view class="packing">
							<view class="btitle">{{details.specData.spec_attr[0].group_name}}</view>
							<view class="packmethod">
								<view class="btn" v-for="(item , index) in details.specData.spec_attr[0].spec_items" :key="index" 
									  @click="select3(item.item_id)" v-bind:class="[item.item_id == currentType3? 'selectcolor1' : '']"
								>
									{{item.spec_value}}
								</view>
							</view>
						</view>
					<!-- 颜色 -->
						<view class="color">
							<view class="ctitle">{{details.specData.spec_attr[1].group_name}}</view>
							<view class="colormethod">
								<view class="btn" v-for="(item , index) in details.specData.spec_attr[1].spec_items" :key="index"
								      @click="select4(item.item_id)" v-bind:class="[item.item_id == currentType4? 'selectcolor2' : '']"
								 >
									{{item.spec_value}}
								</view>
							</view>
						</view>
					</view>
					<!-- 购买数量 -->
					<view class="num">
						<view class="ntitle">购买数量</view>
						<view class="addred">
							<view class="red" @click="red">
								<image src="/static/image/sub.png"></image>
							</view>
							<view class="snum" :class="[goods_num == 1 ? 'disabled' : '']">{{goods_num}}</view>
							<view class="add" @click="add">
								<image src="/static/image/add.png"></image>
							</view>
						</view>
					</view>
					<!-- 按钮 -->
					<view class="btnbox">
						<view class="btn cancel" @click="close2">取消</view>
						<view class="btn" @click="addcart">确定</view>
					</view>
				</view>
			</popup>
		</view>
	</view>
</template>

<script>
	import popup from '@/components/YYT-popup/YYT-popup.vue';
	export default{
		components: { popup},
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
				// 弹出层
			    openPopup: false,
				openPopup2:false,
				position: '',
				percent: 0,
				// 用户选择规格1
				currentType1:'',
				// 用户选择规格2
				currentType2:'',
				currentType3:'',
				currentType4:'',
				// 价格
				priceType1:'',
				priceType2:'',
				// 购买数量
				goods_num:1,
				// 商品价格
				goods_price1:0,
				goods_price2:0,
				// 立即兑换规格id
				goods_sku_id1:'',
				// 加入购物车规格id
				goods_sku_id2:'',
				
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
						conimg = conimg.replace(regex, `<img style="width:100%;height:887rpx"`);
						this.strings = conimg;		
					}
				})
			},
			// 加入购物车打开弹窗
			addshopcart(position){
				this.position = position;
				this.openPopup2 = true;
			},
			// 立即兑换打开弹窗
			open(position){
				this.position = position;
				this.openPopup = true;
			},
			// 立即兑换取消关闭弹出层
			close(){
				this.openPopup = false;
			},
			// 加入购物车关闭弹出层
			close2(){
				this.openPopup2 = false;
			},
			// 立即兑换用户点击商品规格1
			select1(state){
				if(state == this.currentType1){
					return
				}
				this.currentType1 = state;
			},
			// 立即兑换用户点击商品规格2
			select2(state){
				if(state == this.currentType2){
					return;
				}
				this.currentType2 = state;
				this.priceType1 = this.currentType1 + '_' + this.currentType2
				let goodsprice = this.details.specData.spec_list;
				goodsprice.forEach((v, i)=>{
					if(v.spec_sku_id == this.priceType1){
						if(goodsprice[i].spec_sku_id){
							this.goods_sku_id1 = goodsprice[i].spec_sku_id;
							this.goods_price1 = goodsprice[i].form.goods_price;
						}
					}
					
				})
			},
			// 商品减
			red(){
				if(this.goods_num <= 1){
					return
				}
				this.goods_num--;
			},
			// 商品加
			add(){
				this.goods_num++;
			},
			// 立即兑换
			goplay(){
				if(this.goods_price1 == 0){
					uni.showToast({
						title:'请选择商品属性',
						icon:"none",
						position:'bottom'
					})
					return;
				}
				this.openPopup = false;
				uni.navigateTo({
					url:'/pages/payment/payment?goods_id=' + this.goods_id + '&goods_num=' + this.goods_num
				})
			},
			// 加入购物车用户点击商品规格1
			select3(state){
				if(state == this.currentType3){
					return
				}
				this.currentType3 = state;
			},
			// 加入购物车用户点击商品规格2
			select4(state){
				if(state == this.currentType4){
					return;
				}
				this.currentType4 = state;
				this.priceType2 = this.currentType3 + '_' + this.currentType4
				let goodsprice = this.details.specData.spec_list;
				goodsprice.forEach((v, i)=>{
					if(v.spec_sku_id == this.priceType2){
						if(goodsprice[i].spec_sku_id){
							this.goods_sku_id2 = goodsprice[i].spec_sku_id;
							this.goods_price2 = goodsprice[i].form.goods_price;
						}
					}
				})
			},
			// 添加购物车
			addcart(){
				if(this.goods_price2 == 0){
					uni.showToast({
						title:'请选择商品属性',
						icon:"none",
						position:'bottom'
					})
					return;
				}
				this.openPopup2 = false;
				uni.showToast({
					title:'购物车添加成功'
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
