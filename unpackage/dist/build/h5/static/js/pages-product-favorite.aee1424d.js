(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-favorite"],{"091f":function(t,e,i){"use strict";i.r(e);var a=i("2e77"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},"2e77":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("cebc")),n=a(i("f1e9")),d=a(i("e34a")),r=i("2f62"),s={components:{uniLoadMore:n.default,empty:d.default},data:function(){return{productList:[],loadingType:"loading"}},onLoad:function(t){this.inquiryFavorite()},computed:(0,o.default)({},(0,r.mapState)(["hasLogin","userInfo"])),methods:(0,o.default)({},(0,r.mapMutations)(["login"]),{inquiryFavorite:function(){var t=this,e={userUuid:this.userInfo.userUuid};this.$api.request.inquiryCollectedProduct(e,function(e){t.productList=e.body.data.products,t.loadingType="noMore"},!0)},navToDetailPage:function(t){var e=t.productUuid;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})}})};e.default=s},"2ed7":function(t,e,i){"use strict";var a=i("fec3"),o=i.n(a);o.a},"9f20":function(t,e,i){"use strict";i.r(e);var a=i("a54e"),o=i("091f");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("2ed7");var d=i("2877"),r=Object(d["a"])(o["default"],a["a"],a["b"],!1,null,"3a94db42",null);e["default"]=r.exports},a54e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},["loading"!=t.loadingType&&0===t.productList.length?i("empty"):t._e(),t.productList.length>0?i("v-uni-view",{staticClass:"goods-list"},[t._l(t.productList,function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[e.productMainImage?i("v-uni-image",{attrs:{src:e.productMainImage.url,mode:"aspectFill"}}):t._e()],1),i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.productName))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.unitPoint))]),i("v-uni-text",[t._v("已售 "+t._s(e.soldUnit))])],1)],1)}),i("v-uni-view",{staticClass:"goods-item",staticStyle:{background:"none"}},[i("uni-load-more",{attrs:{status:t.loadingType}})],1)],2):t._e()],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},f16f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-3a94db42],uni-page-body[data-v-3a94db42]{background:#f8f8f8}.group[data-v-3a94db42]{height:240px}.group uni-image[data-v-3a94db42]{width:100%}.group .p-box[data-v-3a94db42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.group .p-box .yticon[data-v-3a94db42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.group .p-box .yticon.active[data-v-3a94db42]{color:#fa436a}.group .p-box .xia[data-v-3a94db42]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.group .cate-item[data-v-3a94db42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.group .cate-item[data-v-3a94db42]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 商品列表 */.goods-list[data-v-3a94db42]{position:absolute;top:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:-webkit-linear-gradient(top,#fff,#f8f8f8);background:linear-gradient(180deg,#fff 0,#f8f8f8);border-radius:%?20?%}.goods-list .header[data-v-3a94db42]{width:100%;text-align:center;padding:%?20?% 0;font-size:%?32?%;font-color:#303133}.goods-list .header uni-image[data-v-3a94db42]{vertical-align:middle;height:%?60?%;width:%?60?%}.goods-list .header uni-text[data-v-3a94db42]{padding-left:%?10?%}.goods-list .goods-item[data-v-3a94db42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;padding:%?20?%;background-color:#fff;margin:%?10?% 0;border-radius:%?20?%}.goods-list .image-wrapper[data-v-3a94db42]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-3a94db42]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-3a94db42]{font-size:%?28?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-3a94db42]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?10?% %?10?% %?10?% 0;font-size:%?24?%;color:#909399}.goods-list .price[data-v-3a94db42]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-3a94db42]:before{content:"\\FFE5";font-size:%?26?%}body.?%PAGE?%[data-v-3a94db42]{background:#f8f8f8}',""])},fec3:function(t,e,i){var a=i("f16f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("b4719022",a,!0,{sourceMap:!1,shadowMode:!1})}}]);