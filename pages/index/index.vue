<template>
	<view class="container">
		<view class="top-panel">
			<view class="title-spacing"></view>
			<!-- 背景色区域s -->
			<view class="top-background"></view>
			<!-- circular 循环 -->
			<swiper class="swiper" circular indicator-dots autoplay interval="interval" duration="500">
				<swiper-item><view class="swiper-item uni-bg-red">A</view></swiper-item>
				<swiper-item><view class="swiper-item uni-bg-green">B</view></swiper-item>
				<swiper-item><view class="swiper-item uni-bg-blue">C</view></swiper-item>
			</swiper>
			s
		</view>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.top-panel {
	.top-background {
		height: 426rpx;
		background-color: rgb(203, 87, 60);
	}
	.title-spacing {
	}
}
</style>
