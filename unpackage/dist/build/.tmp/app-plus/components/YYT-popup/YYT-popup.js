(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/YYT-popup/YYT-popup"],{1636:function(t,n,e){"use strict";e.r(n);var i=e("e9c8"),o=e("e3e0");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("888b");var c=e("2877"),u=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},"1ac0":function(t,n,e){},"888b":function(t,n,e){"use strict";var i=e("1ac0"),o=e.n(i);o.a},"8b5a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{open:{type:Boolean,default:!1},position:{type:String,default:"center"},percent:Number,background:{type:String,default:"#fff"}},data:function(){return{openSync:!1,positionSync:String,show:!1,size:Object}},onLoad:function(){var t=this;this.size=this._size(),this.openSync=this.open,this.positionSync=this.position,setTimeout(function(){t.show=t.open},100)},watch:{open:function(t){var n=this;this.size=this._size(),this.openSync=t,this.positionSync=this.position,setTimeout(function(){n.show=t},100)},percent:function(){this.size=this._size()}},methods:{close:function(){var t=this;this.show=!1,setTimeout(function(){t.openSync=!1,t.$emit("close")},300)},_size:function(){var n,e,i,o,s=t.getSystemInfoSync(),c=["center","top","bottom","ad"];return c.includes(this.position)?(n="100%",this.percent>0?e=s.windowHeight*(this.percent/100)+"px":(e="auto",o=.6*s.windowHeight+"px")):(e="100%",this.percent>0?n=s.windowWidth*(this.percent/100)+"px":(n="auto",i=.8*s.windowWidth+"px")),{width:n,height:e,maxWidth:i,maxHeight:o}},_moveHandle:function(){}}};n.default=e}).call(this,e("6e42")["default"])},e3e0:function(t,n,e){"use strict";e.r(n);var i=e("8b5a"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},e9c8:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){"ad"!=t.positionSync&&t.close()})},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/YYT-popup/YYT-popup-create-component',
    {
        'components/YYT-popup/YYT-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("1636"))
        })
    },
    [['components/YYT-popup/YYT-popup-create-component']]
]);                
