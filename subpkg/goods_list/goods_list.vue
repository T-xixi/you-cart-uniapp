<template>
	<view>
		<view class="goods-list">
		    <view v-for="(item, i) in goodsList" :key="i" @click="gotoDetail(item)">
		          <!-- 为 my-goods 组件动态绑定 goods 属性的值 -->
		          <my-goods :goods="item"></my-goods>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				    queryObj: {
				      // 查询关键词
				      query: '',
				      // 商品分类Id
				      cid: '',
				      // 页码值
				      pagenum: 1,
				      // 每页显示多少条数据
				      pagesize: 10
				    },
						 goodsList: [],
						    // 总数量，用来实现分页
						total: 0,
						// 是否正在请求数据
						isloading: false
					}
			},
			onLoad(options) {
			  // 将页面参数转存到 this.queryObj 对象中
			  this.queryObj.query = options.query || ''
			  this.queryObj.cid = options.cid || ''
				this.getGoodsList()
			},
			methods:{
				  async getGoodsList(cb) {
						this.isloading = true
				    // 发起请求
				    const { data: res } = await uni.$http.get('/api/public/v1/goods/search', this.queryObj)
				    this.isloading = false
						// 只要数据请求完毕，就立即按需调用 cb 回调函数
						cb && cb()
						if (res.meta.status !== 200) return uni.$showMsg()
				    // 为数据赋值
				    this.goodsList = [...this.goodsList, ...res.message.goods]
				    this.total = res.message.total
				  },
					// 点击跳转到商品详情页面
					gotoDetail(item) {
					  uni.navigateTo({
					    url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
					  })
					}
			},
			// 触底的事件
			onReachBottom() {
				if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕！')
				if (this.isloading) return
			  // 让页码值自增 +1
			  this.queryObj.pagenum += 1
			  // 重新获取列表数据
			  this.getGoodsList()
			},
			// 下拉刷新的事件
			onPullDownRefresh() {
			  // 1. 重置关键数据
			  this.queryObj.pagenum = 1
			  this.total = 0
			  this.isloading = false
			  this.goodsList = []
			
			  // 2. 重新发起请求
			  this.getGoodsList(() => uni.stopPullDownRefresh())
			}
		}
	
</script>

<style lang="scss">
.goods-item {
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #f0f0f0;

  .goods-item-left {
    margin-right: 5px;

    .goods-pic {
      width: 100px;
      height: 100px;
      display: block;
    }
  }

  .goods-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .goods-name {
      font-size: 13px;
    }

    .goods-price {
      font-size: 16px;
      color: #c00000;
    }
  }
}
</style>
