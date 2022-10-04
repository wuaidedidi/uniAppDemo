<template>
	<view class="container">
		<!--顶部样式-->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{ backgroundColor: titleNViewBackground }"></view>
			<!---->
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({ title: '轮播广告' })">
					<image mode="widthFix" :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{ swiperCurrent + 1 }}</text>
				<text class="sign">/</text>
				<text class="num">{{ swiperLength }}</text>
			</view>
		</view>
		<view class="cate-section">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c7.png"></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c8.png"></image>
				<text>速食生鲜</text>
			</view>
		</view>
		<view class="big-img"><image src="/static/temp/ad1.jpg" s /></view>
		<view class="seckill">
			<view class="seckill-tips">
				<image src="/static/temp/secskill-img.jpg"></image>
				<text class="seckill-time-tips">8点场</text>
				<text class="time-tips-number">08</text>
				<text class="time-tips-number">14</text>
				<text class="time-tips-number">21</text>
				<text class="yticon icon-you">></text>
			</view>
			<scroll-view class="floor-list" scroll-xs>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in goodsList" :key="index" class="floor-item" @click="navToDetailPage(item)">
						<image :src="item.image" mode="aspectFill"></image>
						<text class="title clamp">{{ item.title }}</text>
						<text class="price">￥{{ item.price }}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="panel-tips">
			<image src="/static/temp/h1.png" />
			<view class="tips-text">
				<text class="main-tips">精品团购</text>
				<text class="section-tops">Boutique Group Buying</text>
			</view>
		</view>
		<view class="group-carousel-chart">
			<swiper class="swiper" circular autoplay :interval="5000" duration="1000">
				<swiper-item class="group-swiper" v-for="(item, index) in goodsList" :key="index">
					<image :src="item.image"></image>
					<text class="clamp">{{ item.title }}</text>
					<text class="price">{{ item.price }}</text>
					<view class="progress-view">
						<view class="progress-box"><progress percent="60" stroke-width="6" activeColor="red" active /></view>
						<text>6人成团</text>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="panel-tips">
			<image src="/static/temp/h1.png" />
			<view class="tips-text">
				<text class="main-tips">猜你喜欢</text>
				<text class="section-tops">Guess You Like It</text>
			</view>
		</view>
		<view class="guess-section">
			<view v-for="(item, index) in goodsList" :key="index" class="guess-item" @click="navToDetailPage(item)">
				<view class="image-wrapper"><image :src="item.image" mode="aspectFill"></image></view>
				<text class="title clamp">{{ item.title }}</text>
				<text class="price">￥{{ item.price }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			carouselList: [],
			titleNViewBackground: '',
			swiperLength: 4,
			swiperCurrent: 1,
			goodsList: []
		};
	},
	onLoad() {
		this.loadData();
	},
	methods: {
		//异步方法
		async loadData() {
			let carouselList = await this.$api.json('carouselList');
			this.carouselList = carouselList;
			this.titleNViewBackground = carouselList[0].background;
			let goodsList = await this.$api.json('goodsList');
			this.goodsList = goodsList || [];
		},
		//详情页
		navToDetailPage(item) {
			//测试数据没有写id，用title代替
			let id = item.title;
			uni.navigateTo({
				url: `/pages/product/product?id=${item}`
			});
		},
		swiperChange() {}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #f5f5f5;
}
/* 头部 轮播图 */
.carousel-section {
	position: relative;
	padding-top: 10px;

	.titleNview-placing {
		height: var(--status-bar-height);
		padding-top: 44px;
		box-sizing: content-box;
	}

	.titleNview-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 426upx;
		transition: 0.4s;
	}
	.swiper-dots {
		display: flex;
		justify-content: center;
		position: absolute;
		left: 70rpx;
		top: 380rpx;
		height: 40rpx;
		width: 80rpx;
		color: #fff;
		background-size: 100% 100%;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		.sign {
			padding: 0 4rpx;
			font-size: 14rpx;
			line-height: 40rpx;
		}
	}
}
.carousel {
	width: 90%;
	height: 380rpx;
	display: block;
	margin: 0 auto;
	.carousel-item {
		height: 100%;
		width: 100%s;
		soverflow: hidden;
	}

	image {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}
}
.big-img {
	width: 100%;
	background-color: #fff;
	height: 240rpx;
	display: flex;
	align-items: center;
	image {
		width: 100%;
		height: 180rpx;
	}
}

.cate-section {
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: nowrap;
	.cate-item {
		opacity: 0.7;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	text {
		font-size: 26rpx;
		display: block;
	}
	image {
		margin: 0 auto;
		display: block;
		width: 88rpx;
		height: 88rpx;
		border-radius: 50%;
	}
}

.seckill {
	height: 365rpx;
	margin-top: 16rpx;
	padding: 4rpx 30rpx 24rpx 30rpx;
	background: #fff;

	.seckill-tips {
		height: 92rpx;
		width: 100%;
		display: flex;
		align-items: center;
		image {
			width: 140rpx;
			height: 32rpx;
		}
		text {
			display: inline-block;
			text-align: center;
		}
		.seckill-time-tips {
			width: 120rpx;
			font-size: 28rpx;
			color: gray;
		}
		.time-tips-number {
			width: 40rpx;
			background: black;
			color: #fff;
			font-size: 26rpx;
			margin-right: 14rpx;
		}
		.yticon {
			margin-left: auto;
		}
	}
	//列表
	.floor-list {
		.scoll-wrapper {
			width: 100%;
			white-space: nowrap;
			display: flex;
			justify-content: space-between;
		}
		.floor-item {
			margin-left: 20rpx;
			display: inline-block;
			width: 150rpx;
			image {
				border-radius: 10rpx;
				height: 150rpx;
				width: 150rpx;
			}
		}
	}
}
.clamp {
	display: block;
	font-size: 26rpx;
	color: #303133;
	text-overflow: ellipsis;
	overflow: hidden;
}
.price {
	color: #fa436a;
	font-size: 26rpx;
}

.panel-tips {
	width: 100%;
	height: 126rpx;
	margin-top: 16rpx;
	padding: 6rpx 30rpx 8rpx 30rpx;
	display: flex;
	align-items: center;
	background: #fff;
	image {
		height: 80rpx;
		width: 80rpx;
		margin-right: 20rpx;
	}
	.tips-text {
		display: flex;
		flex-direction: column;
		.main-tips {
			font-size: 34rpx;
		}
		.section-tops {
			font-size: 24rpx;
			color: #909399;
		}
	}
}

.group-carousel-chart {
	height: 620rpx;
	width: 100%;
	padding: 0 30rpx;
	background: #fff;
	swiper {
		height: 100%;
		width: 100%;
	}
	.group-swiper {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 600rpx;
		image {
			height: 400rpx;
			width: 400rpx;
		}
	}
}
.progress-view {
	display: flex;
	align-items: center;
	justify-content: center;
	text {
		color: gray;
		font-size: 20rpx;
	}
}
.progress-box {
	width: 400rpx;
	flex: 1;
	border-radius: 10px;
	overflow: hidden;
	margin-right: 8upx;
	progress {
	}
}
.guess-section {
	width: 100%;
	padding: 0 30rpx;
	display: flex;
	flex-flow: row wrap;
	.guess-item {
		flex: 1;
		image {
			width: 330rpx;
			height: 330rpx;
		}
	}
}
// <view class="guess-section">
// 	<view v-for="(item, index) in goodsList" :key="index" class="guess-item" @click="navToDetailPage(item)">
// 		<view class="image-wrapper"><image :src="item.image" mode="aspectFill"></image></view>
// 		<text class="title clamp">{{ item.title }}</text>
// 		<text class="price">￥{{ item.price }}</text>
// 	</view>
// </view>
</style>
