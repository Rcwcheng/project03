(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shader5"],{"2c60":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Keypress",{attrs:{"key-event":"keyup","key-code":32},on:{success:e.showdialog}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialog,expression:"dialog"}],attrs:{id:"bcover"}},[e._m(0)]),e._m(1),i("div",{attrs:{id:"container"}}),i("div",{attrs:{id:"but"}},[i("button",{on:{click:e.runWebGL}},[e._v(" Explore! ")])]),i("script",{attrs:{id:"vertexShader",type:"x-shader/x-vertex"}},[e._v(" void main() { gl_Position = vec4( position, 1.0 ); } ")]),i("script",{attrs:{id:"fragmentShader",type:"x-shader/x-fragment"}},[e._v(" uniform float iTime; uniform vec3 iResolution; uniform vec2 iMouse; uniform float margin; vec2 hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3.zxy, p3.yxz+19.19); return -1.0 + 2.0*fract(vec2(p3.x * p3.y, p3.z*p3.x)); } float noise(in vec2 p) { p *= 0.45; const float K1 = 0.366025404; const float K2 = 0.211324865; vec2 i = floor( p + (p.x+p.y)*K1 ); vec2 a = p - i + (i.x+i.y)*K2; vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0); vec2 b = a - o + K2; vec2 c = a - 1.0 + 2.0*K2; vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 ); vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0))); return dot( n, vec3(38.0) ); } mat2 rot(in float a){ float c = cos(a), s = sin(a); return mat2(c,s,-s,c); } float fbm(in vec2 p, in vec2 of) { float time3 = (iTime*1. + ((1.0+sin(iTime*0.9 + sin(iTime*0.34+ cos(iTime*0.21)))))*1.5); p *= rot(time3*0.05); p += of; float z=2.; float rz = 0.; vec2 bp = p; for (float i= 1.;i <9.;i++ ) { rz+= noise(p*rot(float(i)*2.3)+ iTime*0.5)/z; z *= 3.2; p *= 2.0; } return rz; } vec2 grdf(in vec2 p, in vec2 of) { vec2 ep = vec2(0.0,0.0005); vec2 d = vec2(fbm(p - ep.yx, of) - fbm(p + ep.yx, of),fbm(p - ep.xy, of) - fbm(p + ep.xy, of)); d /= length(d); return d; } void main() { float time2 = (margin*2.1 + ((1.0+sin(margin + sin(margin*0.4+ cos(margin*0.1)))))*1.5); float time4 = (iTime*0.5 + ((1.0+sin(iTime*0.8 + sin(iTime*0.14+ cos(iTime*0.15)))))*1.2); vec2 p = gl_FragCoord.xy / iResolution.xy; p.x -= iMouse.x * 0.1; p.y -= iMouse.y * 0.1; p.x *= iResolution.x/iResolution.y; p *= 10.5; float t1 = mod(time2*0.35,4.); float t2 = mod(time2*0.35 + 1.,4.); vec2 p1 = p*(4.0-t1); vec2 p2 = p*(4.0-t2); vec2 fld = grdf(p1, vec2(time4*0.2,iTime*0.0)); vec2 fld2 = grdf(p2, vec2(time4*0.2,iTime*0.0) + 2.2); gl_FragColor = vec4(fld.y*0.6+fld2.y*0.4, fld.y*0.99+fld2.y*0.2, fld.y*0.6, 1.0); } ")])],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"test2"}},[i("div",{staticClass:"explain1"},[e._v("GUIDE: Try to move your Mouse + press 'up' and 'down'"),i("br"),e._v(" to navigate in this tunnel.")]),i("div",{staticClass:"explain2"},[i("br"),i("br"),e._v("- press 'space' to start your journey -")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"test"}},[i("a",{attrs:{href:"",target:"_blank",rel:"noopener"}},[e._v(' # "Flying through the mountains" created by Natalie.J ')])])}],a=(i("d3b7"),i("3ca3"),i("ddb0"),i("c974")),r=i("137f"),s=i("5cfb"),c=i("4e72"),d=i("76de"),u=i("35c7"),v=i("213f"),l={components:{Keypress:function(){return i.e("chunk-6dc8b5a2").then(i.bind(null,"365a"))}},data:function(){return{dialog:!0}},mounted:function(){this.runWebGL()},methods:{showdialog:function(e){this.dialog=!1},goTo:function(e){this.$router.push({name:e})},runWebGL:function(){var e,t,i,n,o,l,f=0;function p(){e=document.getElementById("container"),l=Date.now(),t=new a["a"],t.position.z=1,i=new r["a"];var f=new s["a"](16,9);o={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new c["a"]},iMouse:{type:"v2",value:new c["a"]},margin:{type:"f",value:4.35}};var p=new d["a"]({uniforms:o,vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),y=new u["a"](f,p);i.add(y),n=new v["a"],e.appendChild(n.domElement),m(),window.addEventListener("resize",m,!1),window.addEventListener("mousemove",h,!1),document.addEventListener("keydown",x),document.addEventListener("keyup",g)}function m(){o.iResolution.value.x=window.innerWidth,o.iResolution.value.y=window.innerHeight,n.setSize(window.innerWidth,window.innerHeight)}function y(e,t,i,n,o){return n+(e-t)*(o-n)/(i-t)}function h(e){var t,i;t=e.x/o.iResolution.value.x,i=e.y/o.iResolution.value.y,o.iMouse.value.x=y(t,0,1,-1,1),o.iMouse.value.y=y(i,0,1,-1,1)}function x(e){38!=e.keyCode&&40!=e.keyCode||e.preventDefault(),38==e.keyCode&&(f=.015),40==e.keyCode&&(f=-.015)}function g(e){38==e.keyCode&&(f=0),40==e.keyCode&&(f=0)}function w(){requestAnimationFrame(w),o.margin.value+=f,b()}function b(){var e=Date.now();o.iTime.value=.001*(e-l),n.render(i,t)}p(),w()}}},f=l,p=(i("b775"),i("2877")),m=Object(p["a"])(f,n,o,!1,null,null,null);t["default"]=m.exports},b775:function(e,t,i){"use strict";i("dfa2")},dfa2:function(e,t,i){}}]);