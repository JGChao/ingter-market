<template>
	<view class="bigBox">
		<!-- uinfor -->
		<view class="uinfor">
			<view class="shaddress">
				<text class="iaddres">收货地址：</text>
				<input type="text" value="" placeholder="请填写地址" placeholder-style="font-size:30rpx;" />
			</view>
			<view class="uname">
				<text class="iname">联系人：</text>
				<input type="text" value="" placeholder="请填写姓名" placeholder-style="font-size:30rpx;" />
			</view>
			<view class="sex">
				<radio-group @change="radioChange">
					<label class="radio" style="font-size: 28rpx; margin-right: 20rpx;"  v-for="(item, index) in sex" :key="item.value">
						<radio value="" style="transform:scale(0.7);" />
						{{item.name}}
					</label>
				</radio-group>
			</view>
			<view class="uphone">
				<text class="ipnone">联系方式：</text>
				<input type="text" value="" placeholder="请填写手机号码" placeholder-style="font-size:30rpx;"   />
			</view>
		</view>
		<!-- annui -->
		<view class="btn">保存</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				sex:[
					{
						value: '男',
						name: '先生'
					},
					{
						value: '女',
						name: '女士'
					}
				],
				current:0
			}
		},
		methods:{
			// 单选按钮
			radioChange(evt) {
				for (let i = 0; i < this.sex.length; i++) {
					if (this.sex[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style>
	@import url("../../static/css/editaddress.css");
</style>

