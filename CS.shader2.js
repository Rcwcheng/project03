(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shader2"],{"3d40":function(t,e,n){},"6b25":function(t,e,n){"use strict";n("3d40")},a6f2:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Keypress",{attrs:{"key-event":"keyup","key-code":32},on:{success:t.showdialog}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog,expression:"dialog"}],attrs:{id:"bcover"}},[t._m(0)]),t._m(1),n("div",{attrs:{id:"container"}}),n("script",{attrs:{id:"vertexShader",type:"x-shader/x-vertex"}},[t._v(" void main() { gl_Position = vec4( position, 1.0 ); } ")]),n("script",{attrs:{id:"fragmentShader",type:"x-shader/x-fragment"}},[t._v(" uniform float iGlobalTime; uniform vec2 iResolution; uniform vec2 iMouse; uniform sampler2D iChannel0; vec2 z,v,vv,e=vec2(.00035,-.00035); float tt,b,bb,g=0.,gg=0.,tnoi,res=1.; vec3 bp,pp,rd,fo,lp,po,op,no,al,ld,vcp; float bo(vec3 p,vec3 r){ p=abs(p)-r; return max(max(p.x,p.y),p.z); } mat2 r2(float r){return mat2(cos(r),sin(r),-sin(r),cos(r));} float smin(float a,float b,float k){ float h=max(k-abs(a-b),0.); return min(a,b)-h*h*.25/k;} float smax(float a,float b,float k){ float h=max(k-abs(-a-b),0.); return max(-a,b)+h*h*.25/k;} vec4 texNoise(vec2 uv,sampler2D tex){ float f = 0.; f+=texture(tex, uv*.125).r*.5; f+=texture(tex,uv*.25).r*.25; f+=texture(tex,uv*.5).r*.125; f+=texture(tex,uv*1.).r*.125; f=pow(f,1.2);return vec4(f*.45+.05); } vec2 mp(vec3 p) { op=p; p.y=mod(p.y-tt*2.,20.)-10.; vec2 h,t=vec2(bo(p,vec3(3,20,3)),6); vec3 cp=p+vec3(0.,0.0,.3); t.x = max(t.x,-(length(cp.xz)-3.0)); h=vec2(bo(p,vec3(3.05,20,3.05)),3); h.x=max(h.x,-(length(cp.xz)-3.0)); t.x=abs(abs(t.x)-.5)-.2; h.x=abs(abs(h.x)-.5)-.3; vcp=p; vcp.y=abs(abs(abs(p.y)-10.)-4.)-2.; t.x=max(t.x,min(vcp.y,p.z+1.2)); h.x=max(h.x,min(vcp.y+.2,p.z+1.4)); vcp.yz*=r2(0.785); t.x=max(t.x,-(abs(abs(vcp.y+1.)-.4)-.1)); t.x=max(t.x,vcp.y-1.5); h.x=max(h.x,-(abs(abs(vcp.y+1.)-.4)-.3)); h.x=max(h.x,vcp.y-1.3); bp=op+vec3(0.,bb,.3); float glo=length(abs(bp)-vec3(0,2.,0.))-.5; t.x=min(t.x,max(length(abs(bp.xz)-.75)-.1,abs(bp.y)-1.)); float glo2=max(abs(length(bp.xz)-1.)-.5,abs(abs(bp.y)-1.5)-.2); glo=min(glo,glo2); g+=0.1/(0.1+glo*glo*40.); t.x=min(t.x,glo); t=t.x<h.x?t:h; h=vec2(length(abs(p.xz)-3.)-0.15,7); h.x=min(h.x,max(abs(length(bp.xz)-1.)-.4,abs(abs(bp.y)-1.5)-.5)); t=t.x<h.x?t:h; vec3 mop=op+vec3(0,-tt*2.,0); tnoi=texNoise(mop.xy*.06,iChannel0).r*1.2; vec3 tp=op-vec3(0,0,12); b=sin(op.y-tt*2.)+sin(op.x*.5); h=vec2(abs(length(tp.xz)-22.+tnoi+b)-.2,5); h.x=max(abs(h.x)-2.,abs(p.y)-100.); vec3 prp=vec3(atan(tp.x,tp.z)*3.142*5.,op.y-tt*2.,length(tp.xz)-19.5+b); prp.xy=mod(prp.xy,5.)-2.5; h.x=smin(h.x,length(prp.yz)-1.-sin(mop.x)*.3+tnoi,1.2); h.x=smin(h.x,length(abs(prp.yz)-vec2(1.,0))-.1-sin(prp.x*10.0)*.1-tnoi,.5); float tun=h.x+1.; h.x=smax((abs(prp.y)-.1),h.x,.5); pp=op+vec3(0,0,-13);pp.xz=abs(pp.xz)-15.+b; h.x=smin(h.x,length(pp.xz)-2.0-sin(mop.y*.5),3.); tun=abs(tun)-.2; tun=max(tun,abs(p.y)-100.); g+=0.1/(0.1+tun*tun*4.); h.x=min(h.x,tun);h.x*=0.6; t=t.x<h.x?t:h; return t; } vec2 tr( vec3 ro,vec3 rd) { vec2 h,t=vec2(.1); for(int i=0;i<128;i++){ h=mp(ro+rd*t.x); if(h.x<.0001||t.x>65.) break; t.x+=h.x; t.y=h.y; } if(t.x>65.) t.y=0.; return t; } float a(float d){ return clamp(mp(po+no*d).x/d,0.,1.); } float s(float d){ return smoothstep(0.,1.,mp(po+ld*d).x/d); } vec3 lit(float da,float atn){ ld=normalize(lp-po); float dif=da*max(0.,dot(no,ld)), fr=pow(1.+dot(no,ld),4.), sp=pow(max(dot(reflect(-ld,no),-rd),0.),40.), attn=1.-pow(min(1.,length(lp-po)/atn),4.0); return attn*mix(sp+al*(a(.1)+.2)*(dif+s(.5)),fo,min(fr,.5)); } void mainImage( out vec4 fragColor, in vec2 fragCoord ) { vec2 vv,uv = vec2(fragCoord.x / iResolution.x, fragCoord.y / iResolution.y); vv=uv;uv-=0.5;vv*=1.-vv;uv/=vec2(iResolution.y/iResolution.x,1); tt=mod(iGlobalTime,62.83)+23.6; bb=-40.+smoothstep(0.,1.,smoothstep(0.,1.,sin(tt*.2)*.5+.5))*80.; b=ceil(cos(tt*.2)); vec3 ro=mix(vec3(-9.,00,6.+sin(tt*.2)*4.),vec3(sin(tt*.2)*12.,-bb-sin(bb*.05)*10.,5.0),b), cw=normalize(vec3(0.,mix(-bb*.2,-bb,b),1)-ro), cu=normalize(cross(cw,vec3(0,1,0))),cv=normalize(cross(cu,cw)),co; rd=mat3(cu,cv,cw)*normalize(vec3(uv,.55)); co=fo=vec3(.1); z=tr(ro,rd); if(z.y>0.){ po=ro+rd*z.x; no=normalize(e.xyy*mp(po+e.xyy).x+e.yyx*mp(po+e.yyx).x+e.yxy*mp(po+e.yxy).x+e.xxx*mp(po+e.xxx).x); al=mix(vec3(.5,.4,.3),vec3(.2,.2,.2),tnoi*5.0); if(z.y<5.) { v=vcp.yz; for(int i=0;i<4;i++){ v=abs(v)-.3; v*=r2(-.785); v*=1.22; float per=abs(sin(v.x))-.1+clamp(sin(v.y*2.),-.1,.1)*.5; res=min(res,ceil(per)); g+=.25/(0.1+(per*per)*(20.-18.9*sin(uv.y*1.5+tt*2.))); } al=vec3(1.-res); } if(z.y>5.) al=vec3(0.4,.5,.7); if(z.y>6.) al=vec3(0.); lp=vec3(0,-bb,0); co=lit(3.,10.); lp=ro; co+=.75*lit(2.,15.); co=mix(fo,co,exp(-.00003*z.x*z.x*z.x)); } co=mix(co+g*.2*vec3(.1,.2,.7),fo,min(1.,length(ro.y-op.y)*.02)); fragColor = vec4(pow(co*pow(vv.x*vv.y*15.0,0.25),vec3(.65)),1); } void main(void) { mainImage(gl_FragColor, gl_FragCoord.xy); } ")])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"test2"}},[n("div",{staticClass:"explain1"},[t._v("GUIDE: Try to press 'up' and 'down' "),n("br"),t._v(" to navigate in this tunnel.")]),n("div",{staticClass:"explain2"},[n("br"),n("br"),t._v("- press 'space' to start your journey -")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"creator02"}},[n("a",{attrs:{href:"https://www.shadertoy.com/view/NdfGDl",target:"_blank",rel:"noopener"}},[t._v(" # Original authhor: evvvvil ")])])}],r=(n("d3b7"),n("3ca3"),n("ddb0"),n("c974")),a=n("137f"),s=n("5cfb"),c=n("4e72"),l=n("76de"),d=n("35c7"),p=n("213f"),u=n("e9d7"),v=n("c42d"),h={components:{Keypress:function(){return n.e("chunk-6dc8b5a2").then(n.bind(null,"365a"))}},data:function(){return{dialog:!0}},mounted:function(){this.runWebGL()},methods:{showdialog:function(t){this.dialog=!1},goTo:function(t){this.$router.push({name:t})},runWebGL:function(){var t,e,n,o,i,h=Date.now(),x=33,m=0;function f(){t=new r["a"](0,0,1),e=new a["a"],n=new p["a"],i=new v["a"],i.crossOrigin="anonymous",o={iGlobalTime:{type:"f",value:0},iResolution:{type:"v2",value:new c["a"]},iMouse:{type:"v2",value:new c["a"]},iChannel0:{type:"t",value:b()}},e.add(new d["a"](new s["a"](16,9),new l["a"]({uniforms:o,vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}))),document.getElementById("container").appendChild(n.domElement),window.addEventListener("resize",g,!1),window.addEventListener("mousemove",y,!1),document.addEventListener("keydown",w),document.addEventListener("keyup",z),g(),requestAnimationFrame(E)}function b(){var t=i.load("https://rcwcheng.github.io/tex1.jpeg");return t.wrapS=u["hc"],t.wrapT=u["hc"],t.flipY=!1,t}function g(){o.iResolution.value.x=window.innerWidth,o.iResolution.value.y=window.innerHeight,n.setSize(window.innerWidth,window.innerHeight)}function y(t){o.iMouse.value.x=t.x,o.iMouse.value.y=t.y}function w(t){38!=t.keyCode&&40!=t.keyCode||t.preventDefault(),38==t.keyCode&&(m=-.05),40==t.keyCode&&(m=.05)}function z(t){38==t.keyCode&&(m=0),40==t.keyCode&&(m=0)}function E(){requestAnimationFrame(E),o.iGlobalTime.value+=m,Date.now()>h+x&&(h=Date.now(),n.render(e,t))}f(),E()}}},x=h,m=(n("6b25"),n("2877")),f=Object(m["a"])(x,o,i,!1,null,null,null);e["default"]=f.exports},c42d:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n("e9d7");const i={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function r(t,e,n){const o=this;let i=!1,r=0,a=0,s=void 0;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){a++,!1===i&&void 0!==o.onStart&&o.onStart(t,r,a),i=!0},this.itemEnd=function(t){r++,void 0!==o.onProgress&&o.onProgress(t,r,a),r===a&&(i=!1,void 0!==o.onLoad&&o.onLoad())},this.itemError=function(t){void 0!==o.onError&&o.onError(t)},this.resolveURL=function(t){return s?s(t):t},this.setURLModifier=function(t){return s=t,this},this.addHandler=function(t,e){return c.push(t,e),this},this.removeHandler=function(t){const e=c.indexOf(t);return-1!==e&&c.splice(e,2),this},this.getHandler=function(t){for(let e=0,n=c.length;e<n;e+=2){const n=c[e],o=c[e+1];if(n.global&&(n.lastIndex=0),n.test(t))return o}return null}}const a=new r;function s(t){this.manager=void 0!==t?t:a,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(s.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise((function(o,i){n.load(t,o,e,i)}))},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});class c extends s{constructor(t){super(t)}load(t,e,n,o){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=i.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout((function(){e&&e(a),r.manager.itemEnd(t)}),0),a;const s=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1),i.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(e){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1),o&&o(e),r.manager.itemError(t),r.manager.itemEnd(t)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}var l=n("c6f1");function d(t){s.call(this,t)}d.prototype=Object.assign(Object.create(s.prototype),{constructor:d,load:function(t,e,n,i){const r=new l["a"],a=new c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,(function(n){r.image=n;const i=t.search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/);r.format=i?o["Tb"]:o["ub"],r.needsUpdate=!0,void 0!==e&&e(r)}),n,i),r}})}}]);