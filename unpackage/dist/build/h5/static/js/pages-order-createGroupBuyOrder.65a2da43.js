(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-createGroupBuyOrder"],{"0ada":function(t,e,i){"use strict";i.r(e);var a=i("c574"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},"38ec":function(t,e,i){var a=i("77b4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("00cede5a",a,!0,{sourceMap:!1,shadowMode:!1})},7271:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"navbar"},t._l(t.navList,function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-item",class:{current:t.tabCurrentIndex===a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(e.text))])}),1),0==t.tabCurrentIndex?i("v-uni-navigator",{staticClass:"address-section",attrs:{url:"/pages/address/address?source=1"}},[t.addressData?i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.addressData.name))]),i("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.addressData.telephone))])],1),i("v-uni-text",{staticClass:"address"},[t._v(t._s(t.addressData.province)+t._s(t.addressData.city)+t._s(t.addressData.area)+t._s(t.addressData.street))])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1):t._e(),t.addressData?t._e():i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",[t._v("请选择地址")])],1)],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1):t._e(),1==t.tabCurrentIndex?i("v-uni-navigator",{staticClass:"address-section",attrs:{url:"/pages/merchant/list"}},[t.merchantData.merchantUuid?i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.merchantData.merchantName))])],1),i("v-uni-text",{staticClass:"address"},[t._v(t._s(t.merchantData.merchantAddress)+"公里")])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1):t._e(),t.merchantData.merchantUuid?t._e():i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",[t._v("请选择门店")])],1)],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1)],1):t._e(),i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-item"},[i("v-uni-image",{attrs:{src:t.product.productMainImage.url}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(t.product.productName))]),t.product.skuEnabled?i("v-uni-text",{staticClass:"spec"},t._l(t.productSku.skuAttrValueList,function(e){return i("v-uni-text",[t._v(t._s(e.skuAttrValue))])}),1):t._e(),t.product.skuEnabled?t._e():i("v-uni-text",{staticClass:"spec"},[t._v("-")]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.groupbuy.unitPrice))]),i("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(t.unit))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[t._v("￥"+t._s(t.productAmount))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.deductAmount))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),0==t.tabCurrentIndex?i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.freightAmount))]):t._e(),1==t.tabCurrentIndex?i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥0")]):t._e()],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:t.memo,callback:function(e){t.memo=e},expression:"memo"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.actualAmount))])],1),i("v-uni-text",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"77b4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-4bbbe59c]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-4bbbe59c]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-shouhuodizhi[data-v-4bbbe59c]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-4bbbe59c]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-4bbbe59c]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-4bbbe59c]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-4bbbe59c]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-4bbbe59c]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-4bbbe59c]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-4bbbe59c]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-4bbbe59c]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-4bbbe59c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-4bbbe59c]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-4bbbe59c]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-4bbbe59c]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-4bbbe59c]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-4bbbe59c]{position:relative}.yt-list[data-v-4bbbe59c]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-4bbbe59c]{background:#fafafa}.yt-list-cell.b-b[data-v-4bbbe59c]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-4bbbe59c]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-4bbbe59c]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-4bbbe59c]{background:#3ab54a}.yt-list-cell .cell-more[data-v-4bbbe59c]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-4bbbe59c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-4bbbe59c]{font-size:%?26?%;color:#909399}.yt-list-cell .cell-tip.disabled[data-v-4bbbe59c]{color:#909399}.yt-list-cell .cell-tip.active[data-v-4bbbe59c]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-4bbbe59c]{color:#fa436a}.yt-list-cell .cell-tip .close[data-v-4bbbe59c]{color:#909399;margin-left:%?20?%}.yt-list-cell.desc-cell .cell-tit[data-v-4bbbe59c]{max-width:%?90?%}.yt-list-cell .desc[data-v-4bbbe59c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-4bbbe59c]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-4bbbe59c]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-4bbbe59c]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-4bbbe59c]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-4bbbe59c]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-4bbbe59c]{padding-left:%?30?%}.footer .price-tip[data-v-4bbbe59c]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-4bbbe59c]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}\n/* 优惠券面板 */.mask[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-4bbbe59c]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-4bbbe59c]{display:none}.mask.show[data-v-4bbbe59c]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-4bbbe59c]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-4bbbe59c]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-4bbbe59c]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-4bbbe59c]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-4bbbe59c]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-4bbbe59c]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .tips[data-v-4bbbe59c]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-4bbbe59c]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-4bbbe59c]{left:auto;right:%?-6?%}.coupon-list[data-v-4bbbe59c]{height:400px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;border-radius:%?20?%;margin-bottom:%?90?%}.coupon-list .coupon-list_item[data-v-4bbbe59c]{width:100%;height:110px;margin:%?10?% 0;background-color:#fff;border-radius:5px}.coupon-list .coupon-list_item .coupon-left[data-v-4bbbe59c]{float:left;width:45%;height:100%;padding:%?10?%}.coupon-list .coupon-list_item .coupon-left uni-image[data-v-4bbbe59c]{width:100%;height:100%;opacity:1}.coupon-list .coupon-list_item .coupon-right[data-v-4bbbe59c]{position:relative;padding:%?10?%;width:55%;float:left;border-radius:0 10px 10px 0}.coupon-list .coupon-list_item .coupon-right .name[data-v-4bbbe59c]{color:#303133;font-size:%?32?%}.coupon-list .coupon-list_item .coupon-right .valid[data-v-4bbbe59c]{color:#909399;font-size:%?28?%;line-height:%?40?%}.coupon-list .coupon-list_item .coupon-right .stock[data-v-4bbbe59c]{color:#909399;font-size:%?28?%;line-height:%?40?%;margin-top:%?10?%}.coupon-list .coupon-list_item .coupon-right uni-image[data-v-4bbbe59c]{position:absolute;top:%?10?%;right:%?10?%;height:%?100?%;width:%?100?%}.navbar[data-v-4bbbe59c]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);\n  /* position: relative; */z-index:10}.navbar .nav-item[data-v-4bbbe59c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-4bbbe59c]{color:#fa436a}.navbar .nav-item.current[data-v-4bbbe59c]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}body.?%PAGE?%[data-v-4bbbe59c]{background:#f8f8f8}',""])},"7c54":function(t,e,i){"use strict";var a=i("38ec"),o=i.n(a);o.a},c574:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a");var o=a(i("cebc")),n=i("2f62"),s=a(i("bc88")),c={data:function(){return{tabCurrentIndex:0,navList:[{state:"1",text:"快递配送"}],quanlificationId:"",groupBuyProductId:"",groupBuyId:"",groupbuy:{},productId:"",product:{},productSkuId:"",productSku:{},productAmount:0,deductAmount:0,actualAmount:0,freightAmount:0,unit:"",addressData:{},merchantData:{},memo:"",type:""}},components:{uniPopup:s.default},onLoad:function(t){this.quanlificationId=t.quanId,this.groupBuyProductId=t.groupBuyProductId,this.groupBuyId=t.groupBuyId,this.productId=t.productId,this.productSkuId=t.productSkuId,this.unit=t.unit,this.applicationConfig.applicationMerchantEnabled&&this.navList.push({state:"2",text:"门店自提"}),this.inquiryGroupBuyById(this.groupBuyProductId),this.inquiryDefaultAddress(this.userInfo.userUuid)},computed:(0,o.default)({},(0,n.mapState)(["hasLogin","userInfo","applicationConfig"])),watch:{addressData:function(t){this.calculateFreightAmount(this.groupBuyProductId,t.province,t.city,t.area)}},methods:{toActualAmount:function(t,e,i){return(t-e+i).toFixed(2)},tabClick:function(t){this.tabCurrentIndex=t,1==t?this.actualAmount=this.toActualAmount(this.productAmount,this.deductAmount,0):0==t&&(this.actualAmount=this.toActualAmount(this.productAmount,this.deductAmount,this.freightAmount))},inquiryDefaultAddress:function(t){var e=this,i=this,a={userDTO:{userUuid:t}};this.$api.request.userShip(a,function(t){"0"===t.body.status.statusCode?t.body.data.addresses.forEach(function(t,e){t.default&&(i.addressData=t)}):e.$api.msg(t.body.status.errorDesc)})},inquiryGroupBuyById:function(t){var e=this,i=this,a={groupBuyProductUuid:t};this.$api.request.groupBuy(a,function(t){"0"===t.body.status.statusCode?(e.groupbuy=t.body.data,e.product=t.body.data.productDTO,e.productSkuId&&e.product.skuList.forEach(function(t,e){i.productSkuId===t.productSkuUuid&&(i.productSku=t)}),i.productAmount=(i.groupbuy.unitPrice*e.unit).toFixed(2),e.actualAmount=e.toActualAmount(e.productAmount,e.deductAmount,e.freightAmount)):console.log(t.body.status.errorDesc)})},calculateFreightAmount:function(t,e,i,a){var o=this,n={groupBuyProduct:{groupBuyProductUuid:t},orderDTO:{deliveryProvince:e,deliveryCity:i,deliveryArea:a,productUnit:this.unit}};this.$api.request.calculateGroupBuyFreightAmount(n,function(t){"0"===t.body.status.statusCode?(o.freightAmount=t.body.data.orderDTO.freightAmount,o.actualAmount=o.toActualAmount(o.productAmount,o.deductAmount,o.freightAmount)):o.$api.msg(t.body.status.errorDesc)},!1)},calcSelectedProductAmount:function(t){var e=0;return t.forEach(function(t,i){t.productDTO.skuEnabled?e+=t.productSkuDTO.skuUnitPrice*t.unit:e+=t.productDTO.unitPrice*t.unit}),e},change:function(t){console.log("是否打开:"+t.show)},togglePopup:function(t,e){var i=this;switch(t){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=t,this.$nextTick(function(){i.$refs["show"+e].open()})},submit:function(){var t=this;if(0!=this.tabCurrentIndex||this.addressData.userDeliveryAddressUuid)if(1!=this.tabCurrentIndex||this.merchantData.merchantUuid){var e={groupBuyUuid:this.groupBuyId,groupBuyProduct:{groupBuyProductUuid:this.groupBuyProductId},orderDTO:{userDTO:{userUuid:this.userInfo.userUuid},deliveryAddressDTO:{userDeliveryAddressUuid:this.addressData.userDeliveryAddressUuid},merchantDTO:{merchantUuid:this.merchantData.merchantUuid},productUnit:this.unit,deliveryType:0==this.tabCurrentIndex?"1":"2"},productDTO:{productUuid:this.productId},productSkuDTO:{productSkuUuid:this.productSkuId},owner:null!=this.groupBuyId&&""!=this.groupBuyId};this.$api.request.createGroupBuyOrder(e,function(e){"0"===e.body.status.statusCode?uni.redirectTo({url:"/pages/money/pay?orderNo="+e.body.data.orderNo}):t.$api.msg(e.body.status.errorDesc)})}else this.$api.msg("未选择提货门店");else this.$api.msg("未选择收货地址")},stopPrevent:function(){}}};e.default=c},f2d6:function(t,e,i){"use strict";i.r(e);var a=i("7271"),o=i("0ada");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("7c54");var s=i("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"4bbbe59c",null);e["default"]=c.exports}}]);