<template>
	<view class="bigBox">
		<view class="scroll">
			<!-- banner -->
			<view class="banner">
				<navigator url="" hover-class="none">
					<swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
						<swiper-item>
							<image src="/static/image/banner1.png"></image>	
						</swiper-item>
						<swiper-item>
							<image src="/static/image/banner1.png"></image>	
						</swiper-item>
						<swiper-item>
							<image src="/static/image/banner1.png"></image>	
						</swiper-item>
					</swiper>
				</navigator>
			</view>
			<view v-if="categoryleave">
				<!-- content -->
				<view class="content" v-for="(item , index) in categoryleave" :key="index">
					<view class="thumb" @click="exlist" :data-category_id='item.category_id'>
						<image :src="imghost + item.image.file_name"></image>
					</view>
					<view class="catename">{{item.name}}</view>
					<view class="columns">
						<!-- <navigator url="" hover-class="none">
							<view class="more">更多</view>
						</navigator> -->
						<view class="clation">
							<!-- <text>保温杯</text>
							<text>饭盒</text>
							<text>玻璃杯</text>
							<text>碗</text>
							<text>居家鞋</text>
							<text>梳子</text>
							<text>围裙</text>
							<text>拖鞋</text>
							<text>炒锅</text>
							<text>口罩</text> -->
							{{item.category_description}}
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="content">
				<navigator url="" hover-class="none">
					<view class="thumb">
						<image src="/static/image/th3.png"></image>
					</view>
				</navigator>
				<view class="catename">箱包配饰</view>
				<view class="columns">
					<navigator url="" hover-class="none">
						<view class="more">更多</view>
					</navigator>
					<view class="clation">
						<text>保温杯</text>
						<text>饭盒</text>
						<text>玻璃杯</text>
						<text>碗</text>
						<text>居家鞋</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
					</view>
				</view>
			</view>
			<view class="content">
				<navigator url="" hover-class="none">
					<view class="thumb">
						<image src="/static/image/th1.png"></image>
					</view>
				</navigator>
				<view class="catename">运动户外</view>
				<view class="columns">
					<navigator url="" hover-class="none">
						<view class="more">更多</view>
					</navigator>
					<view class="clation">
						<text>保温杯</text>
						<text>饭盒</text>
						<text>玻璃杯</text>
						<text>碗</text>
						<text>居家鞋</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
					</view>
				</view>
			</view>
			<view class="content">
				<navigator url="" hover-class="none">
					<view class="thumb">
						<image src="/static/image/th1.png"></image>
					</view>
				</navigator>
				<view class="catename">运动户外</view>
				<view class="columns">
					<navigator url="" hover-class="none">
						<view class="more">更多</view>
					</navigator>
					<view class="clation">
						<text>保温杯</text>
						<text>饭盒</text>
						<text>玻璃杯</text>
						<text>碗</text>
						<text>居家鞋</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
					</view>
				</view>
			</view>
			<view class="content">
				<navigator url="" hover-class="none">
					<view class="thumb">
						<image src="/static/image/th1.png"></image>
					</view>
				</navigator>
				<view class="catename">运动户外</view>
				<view class="columns">
					<navigator url="" hover-class="none">
						<view class="more">更多</view>
					</navigator>
					<view class="clation">
						<text>保温杯</text>
						<text>饭盒</text>
						<text>玻璃杯</text>
						<text>碗</text>
						<text>居家鞋</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
					</view>
				</view>
			</view>
			<view class="content">
				<navigator url="" hover-class="none">
					<view class="thumb">
						<image src="/static/image/th1.png"></image>
					</view>
				</navigator>
				<view class="catename">运动户外</view>
				<view class="columns">
					<navigator url="" hover-class="none">
						<view class="more">更多</view>
					</navigator>
					<view class="clation">
						<text>保温杯</text>
						<text>饭盒</text>
						<text>玻璃杯</text>
						<text>碗</text>
						<text>居家鞋</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
						<text>梳子</text>
						<text>围裙</text>
						<text>拖鞋</text>
						<text>炒锅</text>
						<text>口罩</text>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	 // import { mapMutations } from 'vuex';
	export default{
		data() {
			return {
				autoplay:true,
				interval: 4000,
				duration: 1000,
				circular:true,
				host:'',
				categoryleave:null,
				imghost:'',
				category_id:'',
			}
		},
		methods:{
			// 获取category
			exlist(e){
				uni.reLaunch({
					url:'/pages/exlist/exlist'
				})
				this.category_id = e.currentTarget.dataset.category_id;
				this.$store.dispatch('commitcategoryid',{category_id:this.category_id})
			},
			// 获取分类列表
			getcateGory(){
				uni.request({
				    url: this.host + 'api/category/lists',
				    data: {},
				    header: {},
					method:'GET',
					dataType:'json',
				    success: (res) => {
				        let result = res.data.data.list;
						this.categoryleave = result;
				    }
				});
			}
		},
		onLoad(){
			this.host = this.$store.state.host;
			this.imghost = this.$store.state.imghost;
			this.getcateGory(); 
		}
	}
</script>

<style>
	@import url("../../static/css/category.css");
</style>
