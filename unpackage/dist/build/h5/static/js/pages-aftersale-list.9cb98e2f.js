(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-aftersale-list"],{1190:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},["loading"!=t.loadingType&&0===t.afterSales.length?a("empty"):t._e(),t._l(t.afterSales,function(e,i){return a("v-uni-view",{key:i,staticClass:"order-item"},[a("v-uni-view",{staticClass:"i-top b-b"},[a("v-uni-text",{staticClass:"time"},[t._v("售后单号: "+t._s(e.saleNo))]),a("v-uni-text",{staticClass:"state",style:{color:e.statusColor}},[t._v(t._s(e.statusDesc))])],1),e.orderDTO.orderProductDTOList.length>1?a("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":""}},t._l(e.orderDTO.orderProductDTOList,function(e,i){return a("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navProductDetail(e)}}},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:e.productImageUrl,mode:"aspectFill"}})],1)}),1):t._e(),t._l(e.orderDTO.orderProductDTOList,function(i,o){return 1===e.orderDTO.orderProductDTOList.length?a("v-uni-view",{key:o,staticClass:"goods-box-single"},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:i.productImageUrl,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.productName))]),a("v-uni-text",{staticClass:"attr-box"},[t._v(t._s(i.productSkuDesc||"")+" x "+t._s(i.productUnit))]),a("v-uni-text",{staticClass:"price"},[t._v(t._s(i.actualAmount))])],1)],1):t._e()}),a("v-uni-view",{staticClass:"price-box"},[t._v("退款金额"),a("v-uni-text",{staticClass:"price"},[t._v(t._s(e.afterSaleAmount))])],1),a("v-uni-view",{staticClass:"action-box b-t"},["9"!=e.status&&"2"!=e.status?a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelOrderAfterSale(e)}}},[t._v("撤销申请")]):t._e(),"0"===e.status?a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editOrderAfterSale(e)}}},[t._v("修改申请")]):t._e(),"1"===e.status?a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.courierOrderAfterSale(e)}}},[t._v("我已寄出")]):t._e(),a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.viewOrderAfterSale(e)}}},[t._v("查看详情")])],1)],2)}),a("uni-load-more",{attrs:{status:t.loadingType}})],2)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},"2ece":function(t,e,a){"use strict";a.r(e);var i=a("ef51"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"59fc":function(t,e,a){"use strict";var i=a("7a6c"),o=a.n(i);o.a},"7a6c":function(t,e,a){var i=a("d839");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("6ddeb90e",i,!0,{sourceMap:!1,shadowMode:!1})},ac53:function(t,e,a){"use strict";a.r(e);var i=a("1190"),o=a("2ece");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("59fc");var r=a("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"764af132",null);e["default"]=s.exports},d839:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-764af132],uni-page-body[data-v-764af132]{background:#f8f8f8;height:100%}.swiper-box[data-v-764af132]{height:calc(100% - 40px)}.list-scroll-content[data-v-764af132]{height:100%}.navbar[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-764af132]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-764af132]{color:#fa436a}.navbar .nav-item.current[data-v-764af132]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-764af132]{height:auto}.order-item[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:%?30?%;background:#fff;margin-top:%?16?%\n  /* 多条商品 */\n  /* 单条商品 */}.order-item .i-top[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding-right:%?30?%;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-764af132]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-764af132]{color:#fa436a}.order-item .i-top .del-btn[data-v-764af132]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-764af132]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-764af132]{height:%?160?%;padding:%?20?% 0;white-space:nowrap}.order-item .goods-box .goods-item[data-v-764af132]{width:%?120?%;height:%?120?%;display:inline-block;margin-right:%?24?%}.order-item .goods-box .goods-img[data-v-764af132]{display:block;width:100%;height:100%}.order-item .goods-box-single[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.order-item .goods-box-single .goods-img[data-v-764af132]{display:block;width:%?120?%;height:%?120?%}.order-item .goods-box-single .right[data-v-764af132]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?30?% 0 %?24?%;overflow:hidden}.order-item .goods-box-single .right .title[data-v-764af132]{font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-764af132]{font-size:%?26?%;color:#909399;padding:%?10?% %?12?%}.order-item .goods-box-single .right .price[data-v-764af132]{font-size:%?30?%;color:#303133}.order-item .goods-box-single .right .price[data-v-764af132]:before{content:"\\FFE5";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .price-box[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-764af132]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-764af132]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-764af132]:before{content:"\\FFE5";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-764af132]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px}.order-item .action-btn[data-v-764af132]:after{border-radius:100px}.order-item .action-btn.recom[data-v-764af132]{background:#fff9f9;color:#fa436a}.order-item .action-btn.recom[data-v-764af132]:after{border-color:#f7bcc8}\n/* load-more */.uni-load-more[data-v-764af132]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-764af132]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-764af132]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-764af132]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-764af132]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-764af132 1.56s ease infinite;animation:load-data-v-764af132 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-764af132]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-764af132]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-764af132]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-764af132]:nth-child(4){top:11px;left:0}.load1[data-v-764af132],.load2[data-v-764af132],.load3[data-v-764af132]{height:24px;width:24px}.load2[data-v-764af132]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-764af132]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-764af132]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-764af132]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-764af132]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-764af132]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-764af132]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-764af132]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-764af132]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-764af132]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-764af132]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-764af132]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-764af132]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-764af132]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-764af132{0%{opacity:1}to{opacity:.2}}body.?%PAGE?%[data-v-764af132]{background:#f8f8f8}',""])},ef51:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac6a");var o=i(a("cebc")),n=a("2f62"),r=i(a("f1e9")),s=i(a("e34a")),d={components:{uniLoadMore:r.default,empty:s.default},data:function(){return{afterSales:[],loadingType:"",pageNo:1,pageSize:10}},onLoad:function(t){this.searchOrderAfterSale()},computed:(0,o.default)({},(0,n.mapState)(["hasLogin","userInfo"])),methods:{radioChange:function(t){this.afterSaleType=t.detail.value},apply:function(){var t=this;if(this.afterSaleAmount<=0||this.afterSaleAmount>this.order.productAmount)this.$api.msg("退款金额有误");else if(0!==this.imageUrlList.length){var e={afterSaleType:this.afterSaleType,afterSaleAmount:this.afterSaleAmount,afterSaleDescription:this.afterSaleDescription,imageUrlList:this.imageUrlList,orderDTO:{orderNo:this.orderNo}};this.$api.request.applyAfterSale(e,function(e){"0"===e.body.status.statusCode?(t.$api.msg("售后申请已提交"),setTimeout(function(){uni.navigateTo({url:"/pages/aftersale/detail"})},1e3)):t.$api.msg(e.body.status.errorDesc)})}else this.$api.msg("未上传凭证")},searchOrderAfterSale:function(){var t=this,e=this;this.loadingType="loading",this.$api.request.searchAfterSale({keyArray:["USER"],userUuid:this.userInfo.userUuid,startIndex:(this.pageNo-1)*this.pageSize,pageSize:this.pageSize},function(a){if("0"===a.body.status.statusCode){var i=a.body.data.afterSaleList,o=t.afterSales;i.forEach(function(t,a){var i=e.translateOrderAfterSaleStatus(t.status);t.statusDesc=i.statusDesc,t.statusColor=i.statusColor,o.push(t)}),t.afterSales=o,t.total=a.body.data.total,t.loadingType=t.afterSales.length>=t.total?"noMore":"more"}else t.$api.msg(a.body.status.errorDesc)},!0)},resetPage:function(){this.pageNo=1,this.afterSales=[]},navProductDetail:function(t){uni.navigateTo({url:"/pages/product/product?id="+t.productDTO.productUuid})},viewOrderAfterSale:function(t){uni.navigateTo({url:"/pages/aftersale/detail?id="+t.saleNo})},editOrderAfterSale:function(t){uni.navigateTo({url:"/pages/aftersale/index?saleNo="+t.saleNo})},cancelOrderAfterSale:function(t){var e=this,a=this;uni.showModal({content:"确定要撤销申请吗？",success:function(i){i.confirm&&e.$api.request.cancelAfterSale({saleNo:t.saleNo},function(t){"0"===t.body.status.statusCode?(a.$api.msg("售后单已成功撤销"),a.resetPage(),a.searchOrderAfterSale()):a.$api.msg(t.body.status.errorDesc)},!1)}})},courierOrderAfterSale:function(t){uni.navigateTo({url:"/pages/aftersale/courier?saleNo="+t.saleNo})},translateOrderAfterSaleStatus:function(t){var e="",a="#303133";switch(t){case"0":e="退款中";break;case"1":e="待买家退货";break;case"2":e="退款失败",a="#fa436a";break;case"3":e="待确认收货";break;case"9":e="退款成功",a="#5FCDA2";break}return{statusDesc:e,statusColor:a}}}};e.default=d}}]);