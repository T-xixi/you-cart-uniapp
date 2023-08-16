<template>
	<view>
		<!-- 滚动条 -->
		<view class="search-box">
		  <my-search @click="gotoSearch"></my-search>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,i) in swiperList" :key="i">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id'+item.goods+id">
					<image :src="item.image_src" mode=""></image>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- 分类 -->
		<view class="nav_list">
			<view class="nav_item" v-for="(item,i) in navList" :key="i" @click="navClickHandler(item)">
				<image :src="item.image_src" class="nav_img" mode=""></image>
			</view>
		</view>
		<!-- 楼层区 -->
		<view class="floor_list">
			<!-- 楼层标题 -->
			<view class="floor_item" v-for="(item,i) in floorList" :key="i">
				<image :src="item.floor_title.image_src" mode="" class="floor_title"></image>
				<view class="floor_img_box">
					<navigator class="left_img_box" :url="item.product_list[0].url">
						<image :src="item.product_list[0].image_src" :style="{width: item.product_list[0].image_width+'rpx'}" mode="widthFix"></image>
					</navigator>
					<view class="right_img_box">
						<navigator class="right_img_item" v-for="(item2,i2) in item.product_list" :key="i2" v-if="i2!==0" :url="item2.url">
							<image :src="item2.image_src" mode="widthFix" :style="{width: item2.image_width+'rpx'}"></image>
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 导入自己封装的 mixin 模块
	import badgeMix from '@/mixins/tabbar-badge.js'
	export default {
		// 将 badgeMix 混入到当前的页面中进行使用
		mixins: [badgeMix],
		data() {
			return {
				swiperList:[],
				navList:[],
				floorList:[],		
			}
		},
		onLoad(){
			this.getSwiperList(),
			this.getNavList(),
			this.getFloorList()
		},
		methods: {
		  async	getSwiperList(){
				const {data:res} = await uni.$http.get('/api/public/v1/home/swiperdata')
				if(res.meta.status!==200) return uni.$showMsg()
				this.swiperList = res.message
			},
			async getNavList(){
				const {data:res} = await uni.$http.get('/api/public/v1/home/catitems')
				if(res.meta.status!==200) return uni.$showMsg()
				this.navList = res.message
			},
			// 处理分类点击事件
			navClickHandler(item){
				if(item.name==="分类"){
					uni.switchTab({
						url:'/pages/cate/cate'
					})
				}
			},
			async	getFloorList(){
				const {data:res} = await uni.$http.get('/api/public/v1/home/floordata')
				if(res.meta.status !== 200) return uni.$showMsg()
				res.message.forEach(floor => {
				  floor.product_list.forEach(prod => {
				    prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
				  })
				})
				this.floorList = res.message
			},
			gotoSearch() {
			  uni.navigateTo({
			    url: '/subpkg/search/search'
			  })
			}
			
		}
	}
</script>

<style lang="scss">
	.search-box {
	  // 设置定位效果为“吸顶”
	  position: sticky;
	  // 吸顶的“位置”
	  top: 0;
	  // 提高层级，防止被轮播图覆盖
	  z-index: 999;
	}
	swiper{
		height: 330rpx;
	}
	.swiper-item,image{
		width: 100%;
		height: 100%;
	}
	.nav_list{
		display:  flex;
		justify-content: space-around;
		margin:15rpx 0;
	}
	.nav_img{
		width: 128rpx;
		height:140rpx
	}

	.floor_title{
		display: flex;
		width:100% ;
		height: 60rpx;
	}
	.floor_img_box {
	  display: flex;
	  padding-left: 10rpx;
	}
	.right_img_box{
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
	}

</style>
