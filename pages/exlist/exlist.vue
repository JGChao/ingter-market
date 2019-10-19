<template>
	<view class="bigBox">
		<view class="scroll">
			
			<!-- search -->
			<view class="search">
				<view class="magni">
					<image src="/static/image/magni.png" ></image>
				</view>
				<input  type="text" v-model="search" value="" />
				<view class="sbtn" @click="searchgoods">搜索</view>
			</view>
			<!-- conlist -->
			<view class="conlist" v-if="exlistGoods">
				<view class="conbox" v-for="(item , index) in exlistGoods" :key="index">
					<navigator :url="'/pages/details/details?goods_id=' + item.goods_id" hover-class="none">
						<view>
							<image :src="item.image[0].file_path" ></image>
						</view>
					</navigator>
					<text>{{item.goods_name}}</text>
					<navigator class="btn" :url="'/pages/details/details?goods_id=' + item.goods_id" hover-class="none">立即兑换</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				exlistGoods:null,
				host:"",
				imghost:"",
				category_id:'',
				search:'',
			}
		},
		methods:{
			// 请求
			query(a,b,c,d){
				uni.request({
				    url: this.host + 'api/goods/lists',
				    data: {
						search:a,
						sortType:b,
						sortPrice:c,
						category_id:d,
					},
				    header: {},
					method:'GET',
					dataType:'json',
				    success: (res) => {
						let result = res.data.data.list.data;
						if(result.length){
							this.exlistGoods = result;
						}else{
							uni.showToast({
								title:'该分类暂无商品',
								icon:"none"
							})
						}
				    },
				});;
			},
			// 第一次请求请求
			Onegetgoods(){
				this.query('','','','')
			},
			// 获取商品
			getAllgoods(){
				this.query('','','',this.category_id)
			},
			// 搜索商品
			searchgoods(){
				this.query(this.search,'','','')
			},
		},
		onShow() {
			this.getAllgoods('','','',this.category_id);
		},
		onTabItemTap(){
			this.Onegetgoods('','','','');
		},
		onLoad(option){
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			this.category_id = this.$store.state.category_id.category_id;	
		}
	}
</script>

<style>
	@import url("../../static/css/exlist.css");
</style>
