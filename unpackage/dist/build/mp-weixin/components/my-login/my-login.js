(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-login/my-login"],{1268:function(e,t,n){"use strict";var r=n("4aef"),o=n.n(r);o.a},"4aef":function(e,t,n){},"7e9c":function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("2eee")),a=r(n("c973")),i=r(n("9523")),c=n("26cb");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={name:"my-login",computed:f({},(0,c.mapState)("m_user",["redirectInfo"])),data:function(){return{}},methods:f(f({},(0,c.mapMutations)("m_user",["updateUserInfo","updateToken","updateRedirectInfo"])),{},{getUserInfo:function(t){if("getUserInfo:fail auth deny"===t.detail.errMsg)return e.$showMsg("您取消了登录授权！");this.updateUserInfo(t.detail.userInfo),this.getToken(t.detail)},getToken:function(t){var n=this;return(0,a.default)(o.default.mark((function r(){var a;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.login().catch((function(e){return e}));case 2:if(a=r.sent,"login:ok"===a.errMsg){r.next=5;break}return r.abrupt("return",e.$showError("登录失败！"));case 5:({code:a.code,encryptedData:t.encryptedData,iv:t.iv,rawData:t.rawData,signature:t.signature}),n.updateToken(a.code),n.navigateBack();case 8:case"end":return r.stop()}}),r)})))()},navigateBack:function(){var t=this;this.redirectInfo&&"switchTab"===this.redirectInfo.openType&&e.switchTab({url:this.redirectInfo.from,complete:function(){t.updateRedirectInfo(null)}})}})};t.default=s}).call(this,n("543d")["default"])},8635:function(e,t,n){"use strict";n.r(t);var r=n("7e9c"),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},d479:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"9146"))}},o=function(){var e=this.$createElement;this._self._c},a=[]},fbef:function(e,t,n){"use strict";n.r(t);var r=n("d479"),o=n("8635");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("1268");var i=n("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-login/my-login-create-component',
    {
        'components/my-login/my-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fbef"))
        })
    },
    [['components/my-login/my-login-create-component']]
]);
