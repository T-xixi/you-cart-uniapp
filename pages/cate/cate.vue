<template>
	<view>
		<my-search @click="gotoSearch"></my-search>
		<view class="scroll-view-container">
		      <!-- 左侧的滚动视图区域 -->
		 <scroll-view class="left-scroll-view" scroll-y :style="{height: wh + 'px'}">
		   <block v-for="(item, i) in cateList" :key="i">
		     <view :class="['left-scroll-view-item',i===active?'active':''] " @click="activeChange(i)">{{item.cat_name}}</view>
		   </block>
		 </scroll-view>
		      <!-- 右侧的滚动视图区域 -->
		  <scroll-view class="right-scroll-view" scroll-y :style="{height: wh + 'px'}" :scroll-top="scrollTop">
		    <view class="cate-lv2" v-for="(item2, i2) in cateLevel2" :key="i2">
		      <view class="cate-lv2-title">/ {{item2.cat_name}} /</view>
					<view class="cate-lv3-list">
					      <!-- 三级分类 Item 项 -->
					      <view class="cate-lv3-item" v-for="(item3, i3) in item2.children" :key="i3" @click="gotoGoodsList(item3)">
					        <!-- 图片 -->
					        <image :src="item3.cat_icon"></image>
					        <!-- 文本 -->
					        <text>{{item3.cat_name}}</text>
					      </view>
					</view>
		    </view>
		  </scroll-view>
		</view>
	</view>
</template>

<script>
	import badgeMix from '@/mixins/tabbar-badge.js'
	export default {
		// 将 badgeMix 混入到当前的页面中进行使用
		  mixins: [badgeMix],
		data() {
			return {
				wh: 0,
				cateList:[],
				active:0,
				cateLevel2:[],
				scrollTop: 0
			}
		},
		onLoad() {
		      // 获取当前系统的信息
			const sysInfo = uni.getSystemInfoSync()
		      // 为 wh 窗口可用高度动态赋值
		  this.wh = sysInfo.windowHeight - 50
			this.getCateList()
			this.getCateList()
		},
		methods: {
			async getCateList(){
				const {data:res} = await uni.$http.get('/api/public/v1/categories')
				if(res.meta.status!==200) return uni.$showMsg()
				this.cateList=res.message
				this.cateLevel2 = res.message[0].children
			},
			activeChange(i){
				this.active=i
				this.cateLevel2 = this.cateList[i].children
				this.scrollTop = this.scrollTop === 0 ? 1 : 0
			},
			gotoGoodsList(item3){
				uni.navigateTo({
					url:'/subpkg/goods_list/goods_list?cid=' + item3.cat_id
				})
			},
			gotoSearch(){
				uni.navigateTo({
					url:'/subpkg/search/search'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.scroll-view-container {
  display: flex;

  .left-scroll-view {
    width: 120px;

    .left-scroll-view-item {
      line-height: 60px;
      background-color: #f7f7f7;
      text-align: center;
      font-size: 12px;

      // 激活项的样式
      &.active {
        background-color: #ffffff;
        position: relative;

        // 渲染激活项左侧的红色指示边线
        &::before {
          content: ' ';
          display: block;
          width: 3px;
          height: 30px;
          background-color: #c00000;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
	.cate-lv2-title {
	  font-size: 12px;
	  font-weight: bold;
	  text-align: center;
	  padding: 15px 0;
	}
	.cate-lv3-list {
	  display: flex;
	  flex-wrap: wrap;
	
	  .cate-lv3-item {
	    width: 33.33%;
	    margin-bottom: 10px;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	
	    image {
	      width: 60px;
	      height: 60px;
	    }
	
	    text {
	      font-size: 12px;
	    }
	  }
	}
}
</style>
