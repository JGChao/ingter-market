<template>
	<view class="bigBox">
		<!-- userinfor -->
		<view class="user" v-if="userinfo">
			<view class="userinfor">
				<view class="headport">
					<image src="/static/image/headport.png"></image>
				</view>
				<text class="usname">{{userinfo.username}}</text>
			</view>
			<!-- integral -->
			<view class="ingetral">
				<view>
					<text class="num">620</text>
					<text class="ingnow">当前积分</text>
				</view>
				<view>
					<text class="num">3600</text>
					<text class="ingnow">我的积分</text>
				</view>
			</view>
		</view>
		<!-- userinfor -->
		<view class="user" v-else>
			<view class="userinfor">
				<view class="headport">
					<image src="/static/image/headport.png"></image>
				</view>
				<text class="usname" @click="userLogin">点击登录</text>
			</view>
			<!-- integral -->
			<view class="ingetral">
				<view>
					<text class="num">620</text>
					<text class="ingnow">当前积分</text>
				</view>
				<view>
					<text class="num">3600</text>
					<text class="ingnow">我的积分</text>
				</view>
			</view>
		</view>
		<!-- classicon -->
		<view class="content">
			<navigator class="jump" url="/pages/exlist/exlist" open-type="reLaunch" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my1.png"></image>
					</view>
					<text>积分商城</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/category/category" open-type="reLaunch" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my2.png"></image>
					</view>
					<text>礼品分类</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/brandarea/brandarea" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my3.png"></image>
					</view>
					<text>品牌专区</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/integralog/ingetralog" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my4.png"></image>
					</view>
					<text>积分日志</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/exrecord/exrecord" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my5.png"></image>
					</view>
					<text>兑换记录</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/exlist/exlist" open-type="reLaunch" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my6.png"></image>
					</view>
					<text>我能兑换</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/myaddress/myaddress" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my7.png"></image>
					</view>
					<text>我的地址</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/mycollection/mycollection" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my8.png"></image>
					</view>
					<text>我的收藏</text>
				</view>
			</navigator>
			<navigator class="jump" url="/pages/myorder/myorder" hover-class="none">
				<view class="classicon">
					<view class="icon">
						<image src="/static/image/my9.png"></image>
					</view>
					<text>我的订单</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				token:'',
				userinfo:null,
			}
		},
		methods:{
			userLogin(){
				uni.reLaunch({
				    url: '/pages/login/login'
				})
			},
			// 获取用户信息
			getUserinfo(){
				
			}
		},
		onLoad(){
			this.token = uni.getStorageSync('token');
			this.userinfo = uni.getStorageSync('userinfo');
			console.log(this.token)
			console.log(this.userinfo)
		}
	}
</script>

<style>
	@import url("../../static/css/my.css");
</style>
