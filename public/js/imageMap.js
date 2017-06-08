!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,e){"use strict";function r(e,r,n,a){for(var i=[],s=0;s<e.length;s++){var o=e[s];if(o){var l=tinycolor(o),c=l.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=tinycolor.equals(r,o)?" sp-thumb-active":"";var u=l.toString(a.preferredFormat||"rgb"),f=b?"background-color:"+l.toRgbString():"filter:"+l.toFilter();i.push('<span title="'+u+'" data-color="'+l.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+f+';" /></span>')}else i.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title",a.noColorSelectedText)).html())}return"<div class='sp-cf "+n+"'>"+i.join("")+"</div>"}function n(){for(var t=0;t<p.length;t++)p[t]&&p[t].hide()}function a(e,r){var n=t.extend({},h,e);return n.callbacks={move:c(n.move,r),change:c(n.change,r),show:c(n.show,r),hide:c(n.hide,r),beforeShow:c(n.beforeShow,r)},n}function i(i,o){function c(){if(U.showPaletteOnly&&(U.showPalette=!0),It.text(U.showPaletteOnly?U.togglePaletteMoreText:U.togglePaletteLessText),U.palette){dt=U.palette.slice(0),ht=t.isArray(dt[0])?dt:[dt],pt={};for(var e=0;e<ht.length;e++)for(var r=0;r<ht[e].length;r++){var n=tinycolor(ht[e][r]).toRgbString();pt[n]=!0}}kt.toggleClass("sp-flat",W),kt.toggleClass("sp-input-disabled",!U.showInput),kt.toggleClass("sp-alpha-enabled",U.showAlpha),kt.toggleClass("sp-clear-enabled",Gt),kt.toggleClass("sp-buttons-disabled",!U.showButtons),kt.toggleClass("sp-palette-buttons-disabled",!U.togglePaletteOnly),kt.toggleClass("sp-palette-disabled",!U.showPalette),kt.toggleClass("sp-palette-only",U.showPaletteOnly),kt.toggleClass("sp-initial-disabled",!U.showInitial),kt.addClass(U.className).addClass(U.containerClassName),E()}function h(){if(X&&window.localStorage){try{var t=window.localStorage[X].split(",#");t.length>1&&(delete window.localStorage[X],e.each(t,function(t,e){y(e)}))}catch(e){}try{gt=window.localStorage[X].split(";")}catch(e){}}}function y(t){if(K){var e=tinycolor(t).toRgbString();if(!pt[e]&&-1===r.inArray(e,gt))for(gt.push(e);gt.length>bt;)gt.shift();if(X&&window.localStorage)try{window.localStorage[X]=gt.join(";")}catch(r){}}}function w(){var t=[];if(U.showPalette)for(var e=0;e<gt.length;e++){var r=tinycolor(gt[e]).toRgbString();pt[r]||t.push(gt[e])}return t.reverse().slice(0,U.maxSelectionSize)}function _(){var e=T(),n=t.map(ht,function(t,n){return r(t,e,"sp-palette-row sp-palette-row-"+n,U)});h(),gt&&n.push(r(w(),e,"sp-palette-row sp-palette-row-selection",U)),Mt.html(n.join(""))}function k(){if(U.showInitial){var t=Ut,e=T();Tt.html(r([t,e],e,"sp-palette-row-initial",U))}}function x(){(0>=et||0>=tt||0>=nt)&&E(),Z=!0,kt.addClass(mt),vt=null,wt.trigger("dragstart.spectrum",[T()])}function C(){Z=!1,kt.removeClass(mt),wt.trigger("dragstop.spectrum",[T()])}function S(){var t=Ht.val();if(null!==t&&""!==t||!Gt){var e=tinycolor(t);e.isValid()?(M(e),q(!0)):Ht.addClass("sp-validation-error")}else M(null),q(!0)}function $(){J?F():P()}function P(){var e=t.Event("beforeShow.spectrum");J?E():(wt.trigger(e,[T()]),!1===Y.beforeShow(T())||e.isDefaultPrevented()||(n(),J=!0,t(yt).bind("keydown.spectrum",A),t(yt).bind("click.spectrum",R),t(window).bind("resize.spectrum",Q),Nt.addClass("sp-active"),kt.removeClass("sp-hidden"),E(),j(),Ut=T(),k(),Y.show(Ut),wt.trigger("show.spectrum",[Ut])))}function A(t){27===t.keyCode&&F()}function R(t){2!=t.button&&(Z||(Kt?q(!0):H(),F()))}function F(){J&&!W&&(J=!1,t(yt).unbind("keydown.spectrum",A),t(yt).unbind("click.spectrum",R),t(window).unbind("resize.spectrum",Q),Nt.removeClass("sp-active"),kt.addClass("sp-hidden"),Y.hide(T()),wt.trigger("hide.spectrum",[T()]))}function H(){M(Ut,!0)}function M(t,e){if(tinycolor.equals(t,T()))j();else{var r,n;!t&&Gt?Xt=!0:(Xt=!1,n=(r=tinycolor(t)).toHsv(),lt=n.h%360/360,ct=n.s,ut=n.v,ft=n.a),j(),r&&r.isValid()&&!e&&(Wt=U.preferredFormat||r.getFormat())}}function T(t){return t=t||{},Gt&&Xt?null:tinycolor.fromRatio({h:lt,s:ct,v:ut,a:Math.round(100*ft)/100},{format:t.format||Wt})}function O(){return!Ht.hasClass("sp-validation-error")}function z(){j(),Y.move(T()),wt.trigger("move.spectrum",[T()])}function j(){Ht.removeClass("sp-validation-error"),I();var t=tinycolor.fromRatio({h:lt,s:1,v:1});Ct.css("background-color",t.toHexString());var e=Wt;1>ft&&(0!==ft||"name"!==e)&&("hex"!==e&&"hex3"!==e&&"hex6"!==e&&"name"!==e||(e="rgb"));var r=T({format:e}),n="";if(Lt.removeClass("sp-clear-display"),Lt.css("background-color","transparent"),!r&&Gt)Lt.addClass("sp-clear-display");else{var a=r.toHexString(),i=r.toRgbString();if(b||1===r.alpha?Lt.css("background-color",i):(Lt.css("background-color","transparent"),Lt.css("filter",r.toFilter())),U.showAlpha){var s=r.toRgb();s.a=0;var o=tinycolor(s).toRgbString(),l="linear-gradient(left, "+o+", "+a+")";g?At.css("filter",tinycolor(o).toFilter({gradientType:1},a)):(At.css("background","-webkit-"+l),At.css("background","-moz-"+l),At.css("background","-ms-"+l),At.css("background","linear-gradient(to right, "+o+", "+a+")"))}n=r.toString(e)}U.showInput&&Ht.val(n),U.showPalette&&_(),k()}function I(){var t=ct,e=ut;if(Gt&&Xt)Ft.hide(),Pt.hide(),St.hide();else{Ft.show(),Pt.show(),St.show();var r=t*tt,n=et-e*et;r=Math.max(-rt,Math.min(tt-rt,r-rt)),n=Math.max(-rt,Math.min(et-rt,n-rt)),St.css({top:n+"px",left:r+"px"});var a=ft*it;Ft.css({left:a-st/2+"px"});var i=lt*nt;Pt.css({top:i-ot+"px"})}}function q(t){var e=T(),r="",n=!tinycolor.equals(e,Ut);e&&(r=e.toString(Wt),y(e)),qt&&wt.val(r),t&&n&&(Y.change(e),wt.trigger("change",[e]))}function E(){J&&(tt=Ct.width(),et=Ct.height(),rt=St.height(),at=$t.width(),nt=$t.height(),ot=Pt.height(),it=Rt.width(),st=Ft.width(),W||(kt.css("position","absolute"),U.offset?kt.offset(U.offset):kt.offset(s(kt,Dt))),I(),U.showPalette&&_(),wt.trigger("reflow.spectrum"))}function B(){wt.show(),Dt.unbind("click.spectrum touchstart.spectrum"),kt.remove(),Nt.remove(),p[Yt.id]=null}function N(r,n){return r===e?t.extend({},U):n===e?U[r]:(U[r]=n,"preferredFormat"===r&&(Wt=U.preferredFormat),void c())}function D(){_t=!1,wt.attr("disabled",!1),Dt.removeClass("sp-disabled")}function L(){F(),_t=!0,wt.attr("disabled",!0),Dt.addClass("sp-disabled")}function V(t){U.offset=t,E()}var U=a(o,i),W=U.flat,K=U.showSelectionPalette,X=U.localStorageKey,G=U.theme,Y=U.callbacks,Q=f(E,10),J=!1,Z=!1,tt=0,et=0,rt=0,nt=0,at=0,it=0,st=0,ot=0,lt=0,ct=0,ut=0,ft=1,dt=[],ht=[],pt={},gt=U.selectionPalette.slice(0),bt=U.maxSelectionSize,mt="sp-dragging",vt=null,yt=i.ownerDocument,wt=(yt.body,t(i)),_t=!1,kt=t(v,yt).addClass(G),xt=kt.find(".sp-picker-container"),Ct=kt.find(".sp-color"),St=kt.find(".sp-dragger"),$t=kt.find(".sp-hue"),Pt=kt.find(".sp-slider"),At=kt.find(".sp-alpha-inner"),Rt=kt.find(".sp-alpha"),Ft=kt.find(".sp-alpha-handle"),Ht=kt.find(".sp-input"),Mt=kt.find(".sp-palette"),Tt=kt.find(".sp-initial"),Ot=kt.find(".sp-cancel"),zt=kt.find(".sp-clear"),jt=kt.find(".sp-choose"),It=kt.find(".sp-palette-toggle"),qt=wt.is("input"),Et=qt&&"color"===wt.attr("type")&&d(),Bt=qt&&!W,Nt=Bt?t(m).addClass(G).addClass(U.className).addClass(U.replacerClassName):t([]),Dt=Bt?Nt:wt,Lt=Nt.find(".sp-preview-inner"),Vt=U.color||qt&&wt.val(),Ut=!1,Wt=U.preferredFormat,Kt=!U.showButtons||U.clickoutFiresChange,Xt=!Vt,Gt=U.allowEmpty&&!Et;!function(){function e(e){return e.data&&e.data.ignore?(M(t(e.target).closest(".sp-thumb-el").data("color")),z()):(M(t(e.target).closest(".sp-thumb-el").data("color")),z(),q(!0),U.hideAfterPaletteSelect&&F()),!1}if(g&&kt.find("*:not(input)").attr("unselectable","on"),c(),Bt&&wt.after(Nt).hide(),Gt||zt.hide(),W)wt.after(kt).hide();else{var r="parent"===U.appendTo?wt.parent():t(U.appendTo);1!==r.length&&(r=t("body")),r.append(kt)}h(),Dt.bind("click.spectrum touchstart.spectrum",function(e){_t||$(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(wt.is(":disabled")||!0===U.disabled)&&L(),kt.click(l),Ht.change(S),Ht.bind("paste",function(){setTimeout(S,1)}),Ht.keydown(function(t){13==t.keyCode&&S()}),Ot.text(U.cancelText),Ot.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),H(),F()}),zt.attr("title",U.clearText),zt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),Xt=!0,z(),W&&q(!0)}),jt.text(U.chooseText),jt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),g&&Ht.is(":focus")&&Ht.trigger("change"),O()&&(q(!0),F())}),It.text(U.showPaletteOnly?U.togglePaletteMoreText:U.togglePaletteLessText),It.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),U.showPaletteOnly=!U.showPaletteOnly,U.showPaletteOnly||W||kt.css("left","-="+(xt.outerWidth(!0)+5)),c()}),u(Rt,function(t,e,r){ft=t/it,Xt=!1,r.shiftKey&&(ft=Math.round(10*ft)/10),z()},x,C),u($t,function(t,e){lt=parseFloat(e/nt),Xt=!1,U.showAlpha||(ft=1),z()},x,C),u(Ct,function(t,e,r){if(r.shiftKey){if(!vt){var n=ct*tt,a=et-ut*et,i=Math.abs(t-n)>Math.abs(e-a);vt=i?"x":"y"}}else vt=null;var s=!vt||"x"===vt,o=!vt||"y"===vt;s&&(ct=parseFloat(t/tt)),o&&(ut=parseFloat((et-e)/et)),Xt=!1,U.showAlpha||(ft=1),z()},x,C),Vt?(M(Vt),j(),Wt=U.preferredFormat||tinycolor(Vt).format,y(Vt)):j(),W&&P();var n=g?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Mt.delegate(".sp-thumb-el",n,e),Tt.delegate(".sp-thumb-el:nth-child(1)",n,{ignore:!0},e)}();var Yt={show:P,hide:F,toggle:$,reflow:E,option:N,enable:D,disable:L,offset:V,set:function(t){M(t),q()},get:T,destroy:B,container:kt};return Yt.id=p.push(Yt)-1,Yt}function s(e,r){var n=e.outerWidth(),a=e.outerHeight(),i=r.outerHeight(),s=e[0].ownerDocument,o=s.documentElement,l=o.clientWidth+t(s).scrollLeft(),c=o.clientHeight+t(s).scrollTop(),u=r.offset();return u.top+=i,u.left-=Math.min(u.left,u.left+n>l&&l>n?Math.abs(u.left+n-l):0),u.top-=Math.min(u.top,u.top+a>c&&c>a?Math.abs(a+i-0):0),u}function o(){}function l(t){t.stopPropagation()}function c(t,e){var r=Array.prototype.slice,n=r.call(arguments,2);return function(){return t.apply(e,n.concat(r.call(arguments)))}}function u(e,r,n,a){function i(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function s(t){if(u){if(g&&c.documentMode<9&&!t.button)return l();var n=t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches[0],a=n&&n.pageX||t.pageX,s=n&&n.pageY||t.pageY,o=Math.max(0,Math.min(a-f.left,h)),b=Math.max(0,Math.min(s-f.top,d));p&&i(t),r.apply(e,[o,b,t])}}function o(r){(r.which?3==r.which:2==r.button)||u||!1!==n.apply(e,arguments)&&(u=!0,d=t(e).height(),h=t(e).width(),f=t(e).offset(),t(c).bind(b),t(c.body).addClass("sp-dragging"),s(r),i(r))}function l(){u&&(t(c).unbind(b),t(c.body).removeClass("sp-dragging"),setTimeout(function(){a.apply(e,arguments)},0)),u=!1}r=r||function(){},n=n||function(){},a=a||function(){};var c=document,u=!1,f={},d=0,h=0,p="ontouchstart"in window,b={};b.selectstart=i,b.dragstart=i,b["touchmove mousemove"]=s,b["touchend mouseup"]=l,t(e).bind("touchstart mousedown",o)}function f(t,e,r){var n;return function(){var a=this,i=arguments,s=function(){n=null,t.apply(a,i)};r&&clearTimeout(n),!r&&n||(n=setTimeout(s,e))}}function d(){return t.fn.spectrum.inputTypeColorSupport()}var h={beforeShow:o,move:o,change:o,show:o,hide:o,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},p=[],g=!!/msie/i.exec(window.navigator.userAgent),b=function(){function t(t,e){return!!~(""+t).indexOf(e)}var e=document.createElement("div").style;return e.cssText="background-color:rgba(0,0,0,.5)",t(e.backgroundColor,"rgba")||t(e.backgroundColor,"hsla")}(),m=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),v=function(){var t="";if(g)for(var e=1;6>=e;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();t.fn.spectrum=function(e,r){if("string"==typeof e){var n=this,a=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=p[t(this).data("spectrum.id")];if(r){var i=r[e];if(!i)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?n=r.get():"container"==e?n=r.container:"option"==e?n=r.option.apply(r,a):"destroy"==e?(r.destroy(),t(this).removeData("spectrum.id")):i.apply(r,a)}}),n}return this.spectrum("destroy").each(function(){var r=i(this,t.extend({},e,t(this).data()));t(this).data("spectrum.id",r.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=u,t.fn.spectrum.defaults=h,t.fn.spectrum.inputTypeColorSupport=function y(){if(void 0===y._cachedResult){var e=t("<input type='color'/>")[0];y._cachedResult="color"===e.type&&""!==e.value}return y._cachedResult},t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("input[type=color]");e.length&&!d()&&e.spectrum({preferredFormat:"hex6"})},function(){function t(t){var r={r:0,g:0,b:0},a=1,s=!1,o=!1;return"string"==typeof t&&(t=H(t)),"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(r=e(t.r,t.g,t.b),s=!0,o="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=A(t.s),t.v=A(t.v),r=i(t.h,t.s,t.v),s=!0,o="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=A(t.s),t.l=A(t.l),r=n(t.h,t.s,t.l),s=!0,o="hsl"),t.hasOwnProperty("a")&&(a=t.a)),a=_(a),{ok:s,format:t.format||o,r:I(255,q(r.r,0)),g:I(255,q(r.g,0)),b:I(255,q(r.b,0)),a:a}}function e(t,e,r){return{r:255*k(t,255),g:255*k(e,255),b:255*k(r,255)}}function r(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var n,a,i=q(t,e,r),s=I(t,e,r),o=(i+s)/2;if(i==s)n=a=0;else{var l=i-s;switch(a=o>.5?l/(2-i-s):l/(i+s),i){case t:n=(e-r)/l+(r>e?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:a,l:o}}function n(t,e,r){function n(t,e,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?t+6*(e-t)*r:.5>r?e:2/3>r?t+(e-t)*(2/3-r)*6:t}var a,i,s;if(t=k(t,360),e=k(e,100),r=k(r,100),0===e)a=i=s=r;else{var o=.5>r?r*(1+e):r+e-r*e,l=2*r-o;a=n(l,o,t+1/3),i=n(l,o,t),s=n(l,o,t-1/3)}return{r:255*a,g:255*i,b:255*s}}function a(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var n,a,i=q(t,e,r),s=I(t,e,r),o=i,l=i-s;if(a=0===i?0:l/i,i==s)n=0;else{switch(i){case t:n=(e-r)/l+(r>e?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:a,v:o}}function i(t,e,r){t=6*k(t,360),e=k(e,100),r=k(r,100);var n=z.floor(t),a=t-n,i=r*(1-e),s=r*(1-a*e),o=r*(1-(1-a)*e),l=n%6;return{r:255*[r,s,i,i,o,r][l],g:255*[o,r,r,s,i,i][l],b:255*[i,i,o,r,r,s][l]}}function s(t,e,r,n){var a=[P(j(t).toString(16)),P(j(e).toString(16)),P(j(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function o(t,e,r,n){return[P(R(n)),P(j(t).toString(16)),P(j(e).toString(16)),P(j(r).toString(16))].join("")}function l(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s-=e/100,r.s=x(r.s),B(r)}function c(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s+=e/100,r.s=x(r.s),B(r)}function u(t){return B(t).desaturate(100)}function f(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l+=e/100,r.l=x(r.l),B(r)}function d(t,e){e=0===e?0:e||10;var r=B(t).toRgb();return r.r=q(0,I(255,r.r-j(-e/100*255))),r.g=q(0,I(255,r.g-j(-e/100*255))),r.b=q(0,I(255,r.b-j(-e/100*255))),B(r)}function h(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l-=e/100,r.l=x(r.l),B(r)}function p(t,e){var r=B(t).toHsl(),n=(j(r.h)+e)%360;return r.h=0>n?360+n:n,B(r)}function g(t){var e=B(t).toHsl();return e.h=(e.h+180)%360,B(e)}function b(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+120)%360,s:e.s,l:e.l}),B({h:(r+240)%360,s:e.s,l:e.l})]}function m(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+90)%360,s:e.s,l:e.l}),B({h:(r+180)%360,s:e.s,l:e.l}),B({h:(r+270)%360,s:e.s,l:e.l})]}function v(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+72)%360,s:e.s,l:e.l}),B({h:(r+216)%360,s:e.s,l:e.l})]}function y(t,e,r){e=e||6,r=r||30;var n=B(t).toHsl(),a=360/r,i=[B(t)];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(B(n));return i}function w(t,e){e=e||6;for(var r=B(t).toHsv(),n=r.h,a=r.s,i=r.v,s=[],o=1/e;e--;)s.push(B({h:n,s:a,v:i})),i=(i+o)%1;return s}function _(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function k(t,e){S(t)&&(t="100%");var r=$(t);return t=I(e,q(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),z.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function x(t){return I(1,q(0,t))}function C(t){return parseInt(t,16)}function S(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function $(t){return"string"==typeof t&&-1!=t.indexOf("%")}function P(t){return 1==t.length?"0"+t:""+t}function A(t){return 1>=t&&(t=100*t+"%"),t}function R(t){return Math.round(255*parseFloat(t)).toString(16)}function F(t){return C(t)/255}function H(t){t=t.replace(M,"").replace(T,"").toLowerCase();var e=!1;if(N[t])t=N[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=L.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=L.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=L.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=L.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=L.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=L.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=L.hex8.exec(t))?{a:F(r[1]),r:C(r[2]),g:C(r[3]),b:C(r[4]),format:e?"name":"hex8"}:(r=L.hex6.exec(t))?{r:C(r[1]),g:C(r[2]),b:C(r[3]),format:e?"name":"hex"}:!!(r=L.hex3.exec(t))&&{r:C(r[1]+""+r[1]),g:C(r[2]+""+r[2]),b:C(r[3]+""+r[3]),format:e?"name":"hex"}}var M=/^[\s,#]+/,T=/\s+$/,O=0,z=Math,j=z.round,I=z.min,q=z.max,E=z.random,B=function(e,r){if(e=e||"",r=r||{},e instanceof B)return e;if(!(this instanceof B))return new B(e,r);var n=t(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=j(100*this._a)/100,this._format=r.format||n.format,this._gradientType=r.gradientType,this._r<1&&(this._r=j(this._r)),this._g<1&&(this._g=j(this._g)),this._b<1&&(this._b=j(this._b)),this._ok=n.ok,this._tc_id=O++};B.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=_(t),this._roundA=j(100*this._a)/100,this},toHsv:function(){var t=a(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=a(this._r,this._g,this._b),e=j(360*t.h),r=j(100*t.s),n=j(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=r(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=r(this._r,this._g,this._b),e=j(360*t.h),n=j(100*t.s),a=j(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+a+"%)":"hsla("+e+", "+n+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return s(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return o(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:j(this._r),g:j(this._g),b:j(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+j(this._r)+", "+j(this._g)+", "+j(this._b)+")":"rgba("+j(this._r)+", "+j(this._g)+", "+j(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:j(100*k(this._r,255))+"%",g:j(100*k(this._g,255))+"%",b:j(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+j(100*k(this._r,255))+"%, "+j(100*k(this._g,255))+"%, "+j(100*k(this._b,255))+"%)":"rgba("+j(100*k(this._r,255))+"%, "+j(100*k(this._g,255))+"%, "+j(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(D[s(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+o(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";return t&&(r=B(t).toHex8String()),"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(f,arguments)},brighten:function(){return this._applyModification(d,arguments)},darken:function(){return this._applyModification(h,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(u,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(g,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(b,arguments)},tetrad:function(){return this._applyCombination(m,arguments)}},B.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:A(t[n]));t=r}return B(t,e)},B.equals=function(t,e){return!(!t||!e)&&B(t).toRgbString()==B(e).toRgbString()},B.random=function(){return B.fromRatio({r:E(),g:E(),b:E()})},B.mix=function(t,e,r){r=0===r?0:r||50;var n,a=B(t).toRgb(),i=B(e).toRgb(),s=r/100,o=2*s-1,l=i.a-a.a,c=1-(n=((n=o*l==-1?o:(o+l)/(1+o*l))+1)/2),u={r:i.r*n+a.r*c,g:i.g*n+a.g*c,b:i.b*n+a.b*c,a:i.a*s+a.a*(1-s)};return B(u)},B.readability=function(t,e){var r=B(t),n=B(e),a=r.toRgb(),i=n.toRgb(),s=r.getBrightness(),o=n.getBrightness(),l=Math.max(a.r,i.r)-Math.min(a.r,i.r)+Math.max(a.g,i.g)-Math.min(a.g,i.g)+Math.max(a.b,i.b)-Math.min(a.b,i.b);return{brightness:Math.abs(s-o),color:l}},B.isReadable=function(t,e){var r=B.readability(t,e);return r.brightness>125&&r.color>500},B.mostReadable=function(t,e){for(var r=null,n=0,a=!1,i=0;i<e.length;i++){var s=B.readability(t,e[i]),o=s.brightness>125&&s.color>500,l=s.brightness/125*3+s.color/500;(o&&!a||o&&a&&l>n||!o&&!a&&l>n)&&(a=o,n=l,r=B(e[i]))}return r};var N=B.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},D=B.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(N),L=function(){var t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",e="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{rgb:new RegExp("rgb"+e),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+e),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+e),hsva:new RegExp("hsva"+r),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();window.tinycolor=B}(),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})});var handleError=function(){$(".previewContainer").removeClass("hasPreview"),alert("Invalid Image")},validator=function(){var t=new RegExp("^\\d+$");t.test($(".bg_reqW").val())?setBgCss():alert("please enter a valid number")},setBgCss=function(){var t=$(".bg_selector"),e=t.width(),r=t.height(),n=t.offset().top,a=t.offset().left,i=$(".bg_container"),s=i.offset().top,o=a-i.offset().left,l=n-s,c=$(".bg_image").width(),u=($(".bg_image").height(),$(".bg_reqW").val());$(".bg_reqH").val(),u&&(c*=u/=e,o*=u,l*=u,e*=u,r*=u),pos="-"+o+"px -"+l+"px",size=c+"px auto",$(".bg_preview").css({width:e,height:r,"background-position":pos,"background-size":size}),$(".myRenderedCss").val("width :"+e+"px;\nheight :"+r+"px;\nbackground-position :"+pos+";\nbackground-size :"+size+";")},renderView=function(t,e){if(e){var t="data:image/png;base64,"+t;$(".renderPreview").attr("src",t),$(".imageUpdater").addClass("imageUpdated")}else $(".renderPreview").attr("src",t);$(".imageUpdater").addClass("imageUpdated"),$(".previewContainer").addClass("hasPreview")},initializeSelector=function(){$(".bg_selector").resizable({handles:"n, e, s, w",resize:function(){setBgCss()}},{containment:"parent"}),$(".absolutePreview").draggable({containment:"parent"}),$(".absolutePreview").resizable({handles:"n, e, s, w",containment:"parent"}),$(".bg_selector").draggable({drag:function(){setBgCss()}},{containment:"parent"}),$(".bg_preview").droppable(),$(".zoomin").click(function(t){var e=$(".bg_preview").css("zoom");$(".bg_preview").css("zoom",parseInt(e)+1)}),$(".zoomOut").click(function(t){var e,r=$(".bg_preview").css("zoom");e=r>1?r-1:r-.5,$(".bg_preview").css("zoom",e)}),$(".basic").spectrum({togglePaletteOnly:!0,showButtons:!1}),$(".primary").on("dragstop.spectrum",function(t,e){var e=e.toHexString();$(".bg_container").css("background",e)}),$(".secondary").on("dragstop.spectrum",function(t,e){var e=e.toHexString();$(".bg_selector").css("border","2px solid"+e)})};$(".mapperContainer").unbind("click").bind("click",function(){window.open(location.href+"helper","_blank")}),$(".primary").off("click").on("click",function(){var t=$(this).attr("style");$(".primary").removeClass("selected"),$(this).addClass("selected"),$(".bg_container").attr("style",t)}),$(".secondary").off("click").on("click",function(){var t=$(this).attr("style").split(":")[1].split(";")[0];$(".secondary").removeClass("selected"),$(this).addClass("selected"),$(".bg_selector").css("border-color",t)}),$("#updloadFile").on("change",function(){var t=["jpeg","jpg","png","bmp"];if(-1==$.inArray($(this).val().split(".").pop().toLowerCase(),t))alert("Only formats are allowed : "+t.join(", "));else{var e=this.files[0];e.size/1024<1024?e.convertToBase64(function(t){var e=t.split("base64,")[1];renderView(e,!0)}):alert("File size should not be greater than 1mb")}}),$(".cls_imageGetBtn").off("click").on("click",function(){$("#updloadFile").val("");var t=["jpeg","jpg","png","bmp"],e=$(".cls_getImage").val();e.length&&-1!=$.inArray(e.split(".").pop().toLowerCase(),t)?renderView(e):alert("invalid link")}),$(".mapImage").unbind("click").bind("click",function(){$(".previewStep").hide();var t=$(".renderPreview")[0].src;$(".bg_image").attr("src",t),$(".bg_preview").css("background-image","url("+t+")"),$(".renderStep").show(),initializeSelector(),setBgCss()}),$(".reSelectImg").unbind("click").bind("click",function(){location.reload()}),$(".copyCss").click(function(){$(".myRenderedCss").select(),document.execCommand("copy")}),$(".closePropertyTab").unbind("click").bind("click",function(){$(".absolutePreview.noOverFlow ").hide()}),File.prototype.convertToBase64=function(t){var e=new FileReader;e.onloadend=function(e){t(e.target.result,e.target.error)},e.readAsDataURL(this)};