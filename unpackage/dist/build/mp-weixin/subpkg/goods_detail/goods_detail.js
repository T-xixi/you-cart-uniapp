(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/goods_detail/goods_detail"],{"2f4f":function(t,o,e){"use strict";(function(t,o){var n=e("4ea4");e("cda4");n(e("66fd"));var r=n(e("7f5d"));t.__webpack_require_UNI_MP_PLUGIN__=e,o(r.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},6674:function(t,o,e){"use strict";e.r(o);var n=e("dcf3"),r=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(o,t,(function(){return n[t]}))}(i);o["default"]=r.a},"746d":function(t,o,e){},"7f5d":function(t,o,e){"use strict";e.r(o);var n=e("ef53"),r=e("6674");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(o,t,(function(){return r[t]}))}(i);e("d018");var a=e("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);o["default"]=c.exports},d018:function(t,o,e){"use strict";var n=e("746d"),r=e.n(n);r.a},dcf3:function(t,o,e){"use strict";(function(t){var n=e("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("2eee")),i=n(e("c973")),a=n(e("9523")),c=e("26cb");function s(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?s(Object(e),!0).forEach((function(o){(0,a.default)(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var d={watch:{total:{handler:function(t){var o=this.options.find((function(t){return"购物车"===t.text}));o&&(o.info=t)},immediate:!0}},computed:u(u({},(0,c.mapState)("m_cart",["cart"])),(0,c.mapGetters)("m_cart",["total"])),onLoad:function(t){var o=t.goods_id;this.getGoodsDetail(o)},data:function(){return{goods_info:{},options:[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},methods:u(u({},(0,c.mapMutations)("m_cart",["addToCart"])),{},{getGoodsDetail:function(o){var e=this;return(0,i.default)(r.default.mark((function n(){var i,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/api/public/v1/goods/detail",{goods_id:o});case 2:if(i=n.sent,a=i.data,200===a.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:a.message.goods_introduce=a.message.goods_introduce.replace(/<img /g,'<img style="display:block;" '),e.goods_info=a.message;case 8:case"end":return n.stop()}}),n)})))()},preview:function(o){t.previewImage({current:o,urls:this.goods_info.pics.map((function(t){return t.pics_big}))})},onClick:function(o){"购物车"===o.content.text&&t.switchTab({url:"/pages/cart/cart"})},buttonClick:function(t){if("加入购物车"===t.content.text){var o={goods_id:this.goods_info.goods_id,goods_name:this.goods_info.goods_name,goods_price:this.goods_info.goods_price,goods_count:1,goods_small_logo:this.goods_info.goods_small_logo,goods_state:!0};this.addToCart(o)}}})};o.default=d}).call(this,e("543d")["default"])},ef53:function(t,o,e){"use strict";e.d(o,"b",(function(){return r})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return n}));var n={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"9146"))},uniGoodsNav:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav")]).then(e.bind(null,"959e"))}},r=function(){var t=this.$createElement;this._self._c},i=[]}},[["2f4f","common/runtime","common/vendor"]]]);