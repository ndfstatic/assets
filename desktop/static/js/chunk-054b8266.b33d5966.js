(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-054b8266"],{"4e0b":function(t,r,e){"use strict";e.r(r);var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"product-url",class:{url:!!t.url},attrs:{"element-loading-text":t.app.autoExchange?"余额自动转入游戏中":"加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[t.errorMsg?e("div",{staticClass:"error_msg"},[t._v("\n        "+t._s(t.errorMsg)+"\n    ")]):t._e(),t.user.roles.indexOf("guest")>-1?e("div",{staticClass:"text"},[t._v("请先登录账户")]):t._e(),t.url?e("iframe",{staticClass:"frame",attrs:{src:t.url}}):t._e(),t.tryUsername||t.tryPwd?e("div",{staticClass:"text try_text"},[t.tryUsername?e("p",[t._v("试玩用户名："+t._s(t.tryUsername))]):t._e(),t.tryPwd?e("p",[t._v("试玩密码："+t._s(t.tryPwd))]):t._e(),e("a",{attrs:{href:t.tryUrl,target:"_blank"}},[e("el-button",{class:t.try_btn,style:{"padding-left":20,"padding-right":20},attrs:{type:"primary"}},[t._v("前往试玩")])],1)]):t._e()])},n=[],o=(e("c5f6"),e("a481"),e("ac6a"),e("5880"),e("c4c8")),s=e("c24f"),a={name:"Product-Url",components:{},data:function(){return{loading:!1,url:"",errorMsg:"",tryUsername:"",tryPwd:"",tryUrl:""}},computed:{app:function(){return this.$store.getters.app},user:function(){return this.$store.getters.user},product:function(){return this.$store.getters.product},productId:function(){return this.$route.query.id},gameType:function(){return this.$route.query.game_type},filterProduct:function(){var t=this,r=function(r){var e=!1;return t.product.navList.forEach((function(t){t.list&&t.list.forEach((function(i){i.id==r&&"Y"==t.is_show&&(e=!0)}))})),e},e=this.product.list.filter((function(t){return"Y"==t.is_show&&r(t.id)}));return e}},mounted:function(){this.init()},methods:{init:function(){var t=this,r="sybet"==this.$route.query.test,e="";this.product.list.forEach((function(r){r.id==t.productId&&"Y"==r.is_fix&&(e="接口维护中")})),!e||r?this.user.roles.indexOf("user")>-1?this.app.autoExchange?this.reloadBalance((function(r){if(r){var e=t.filterProduct.map((function(t){return t.id})).join(",");t.$store.dispatch("productBalanceByAjax",{product_ids:e})}t.getProductUrl()})):this.getProductUrl():this.user.roles.indexOf("try")>-1&&this.getProductTryUrl():this.errorMsg=e},getProductUrl:function(){var t=this,r={product_id:this.productId,game_type:this.gameType};this.loading=!0,Object(o["e"])(r).then((function(r){t.loading=!1,200==r.code?6==t.productId?t.url=r.list.login_url.replace("http://","//"):window.location.href=r.list.login_url:t.errorMsg=r.info}))},getProductTryUrl:function(){var t=this,r={product_id:this.productId,game_type:this.gameType};this.loading=!0,Object(o["d"])(r).then((function(r){t.loading=!1,200==r.code?6==t.productId?t.url=r.list.login_url.replace("http://","//"):r.list.username||r.list.password?(t.tryUsername=r.list.username,t.tryPwd=r.list.password,t.tryUrl=r.list.login_url):window.location.href=r.list.login_url:t.errorMsg=r.info}))},reloadBalance:function(t){var r=this,e=this.filterProduct.map((function(t){return t.id})).join(",");this.loading=!0,this.$store.dispatch("productBalanceByAjax",{product_ids:e}).then((function(e){if(200==e.code){var i=[],n=0;for(var a in e.list){var u=Number(e.list[a].money);0!=a&&a!=r.productId&&u>0&&i.push(a),0==a&&(n=u)}if(i.length){var c={type:3,product_id:i.join(",")};Object(s["o"])(c).then((function(e){200==e.code?Object(o["f"])(r.productId).then((function(){setTimeout((function(){r.loading=!1,t&&t(1)}),3e3)})):(r.errorMsg=e.info,r.loading=!1,t&&t())}))}else n>0?Object(o["f"])(r.productId).then((function(){r.loading=!1,t&&t()})):(r.loading=!1,t&&t())}else r.errorMsg=e.info,r.loading=!1,t&&t()}))}}},u=a,c=(e("622d"),e("2877")),d=Object(c["a"])(u,i,n,!1,null,null,null);r["default"]=d.exports},"5e38":function(t,r,e){},"622d":function(t,r,e){"use strict";var i=e("5e38"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-054b8266.b33d5966.js.map