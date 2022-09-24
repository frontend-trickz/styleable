import{H as ce,I as Ee,J as Se,K as we,S as Z,i as G,s as K,e as R,b as P,f as y,g as re,t as k,d as ae,h as g,L as H,M as ie,N as E,O as fe,P as ne,Q as de,v as j,w as N,x as A,R as F,T as Q,U as Ce,y as D,B as $,k as z,l as B,m as L,V as me,W as pe,C as x,D as ee,E as te,X as je,Y as Ae,q as w,a as U,r as C,c as W,n as De,F as T}from"../../chunks/index-d86f75c3.js";const oe="!",Re=new RegExp(`^[^${oe}]+(?:${oe}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);function ue(n,e=[]){let l,t=[];n.$on=(o,a)=>{let r=o,f=()=>{};for(let i of e){if(typeof i=="string"&&i===r){const c=n.$$.callbacks[r]||(n.$$.callbacks[r]=[]);return c.push(a),()=>{const u=c.indexOf(a);u!==-1&&c.splice(u,1)}}if(typeof i=="object"&&i.name===r){let c=a;a=(...u)=>{typeof i=="object"&&i.shouldExclude()||c(...u)}}}return l?f=l(r,a):t.push([r,a]),()=>{f()}};function s(o){Ee(n,o)}return o=>{const a=[],r={};l=(f,i)=>{let c=f,u=i,m=!1;if(c.match(Re)){const p=c.split(oe);c=p[0];const h=Object.fromEntries(p.slice(1).map(S=>[S,!0]));h.passive&&(m=m||{},m.passive=!0),h.nonpassive&&(m=m||{},m.passive=!1),h.capture&&(m=m||{},m.capture=!0),h.once&&(m=m||{},m.once=!0),h.preventDefault&&(u=Se(u)),h.stopPropagation&&(u=we(u))}const v=ce(o,c,u,m),d=()=>{v();const p=a.indexOf(d);p>-1&&a.splice(p,1)};return a.push(d),c in r||(r[c]=ce(o,c,s)),d};for(let f=0;f<t.length;f++)l(t[f][0],t[f][1]);return{destroy:()=>{for(let f=0;f<a.length;f++)a[f]();for(let f of Object.entries(r))f[1]()}}}}const Oe=["a","address","article","aside","b","bdi","bdo","blockquote","button","cite","code","data","datalist","dd","dl","dt","div","em","footer","form","h1","h2","h3","h4","h5","h6","header","i","input","label","li","main","nav","ol","p","section","span","strong","ul"];function Ne(n){return!(typeof n=="string"&&!Oe.includes(n))}const Ie=n=>{var e;return(e={display:"display",maxw:"max-width",maxh:"max-height",gap:"gap",rgap:"row-gap",cgap:"column-gap",w:"width",h:"height",bgc:"background-color",bg:"background",color:"color",shadow:"box-shadow",filter:"filter",gradient:"gradient",transition:"transition",transform:"transform",overflow:"overflow",cursor:"cursor",outline:"outline",font:"font-family",size:"font-size",weight:"font-weight",content:"justify-content",items:"align-items",p:"padding",px:"padding-inline",py:"padding-block",pt:"padding-top",pr:"padding-right",pl:"padding-left",pb:"padding-bottom:",m:"margin",mx:"margin-inline",my:"margin-block",mt:"margin-top",mr:"margin-right",ml:"margin-left",mb:"margin-bottom",b:"border",bt:"border-top",bb:"border-bottom",br:"border-right",bl:"border-left",bw:"border-width",bc:"border-color",bs:"border-style",r:"border-radius",rtl:"border-top-left-radius",rtr:"border-top-right-radius",rbl:"border-bottom-left-radius",rbr:"border-bottom-right-radius"}[n])!=null?e:""},Te=n=>n.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),qe=n=>{const e=document.createElement("style");return e.setAttribute("id",n),document.head.appendChild(e),e.sheet},He=(n,e)=>{var s;let l=(s=document.querySelector("#"+n))==null?void 0:s.sheet;if(l)return;l=qe(n);const t=(l==null?void 0:l.rules)||(l==null?void 0:l.cssRules);e.forEach(o=>l==null?void 0:l.insertRule(o,t==null?void 0:t.length))},ye=(n,e,l=[])=>{const t=[e];l.push(t);for(let[s,o]of Object.entries(n)){const a=Ie(s);if(typeof o=="string"||typeof o=="number"){const r=a?`${a}:${o};`:`${Te(s)}:${o};`;t.push(r)}else{const r=s.replace("&",e);ye(o,r,l)}}return l.map(s=>{const[o,...a]=s;return`${o} {${a.join("")}}`})},Me=n=>{const e=document.querySelector("#"+n);e&&e.remove()},Ve=(n,e)=>{const l=`.${n}`,t=ye(e,l);n&&He(n,t)},ze=n=>e=>{for(let[l,t]of Object.entries(e))if(typeof t=="string"||typeof t=="number")n[l]=t;else{const s=n[l];!s||typeof s=="string"||typeof t=="number"?n[l]=t:n[l]={...s,...t}}return n};let Be=0;function Le(){return++Be}function Ue(){return Le()}const X=(n,e)=>{const l=s=>{const{variant:o="utility",base:a={},sx:r={},as:f}=s,i=[].slice.call(n.classList).find(m=>m.indexOf("svelte-")===0),c=i!=null?i:`styleable-${o}-${f}${Ue()}`,u=ze(a)(r);return Ve(c,u),n.classList.add(c),()=>Me(c)};let t=l(e);return{update(s){t(),t=l(s),console.log("updated!")},destroy(){t()}}};function We(n,e){let l=[];if(e)for(let t=0;t<e.length;t++){const s=e[t],o=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?l.push(o(n,s[1])):l.push(o(n))}return{update(t){if((t&&t.length||0)!=l.length)throw new Error("You must not change the length of an actions array.");if(t)for(let s=0;s<t.length;s++){const o=l[s];if(o&&o.update){const a=t[s];Array.isArray(a)&&a.length>1?o.update(a[1]):o.update()}}},destroy(){for(let t=0;t<l.length;t++){const s=l[t];s&&s.destroy&&s.destroy()}}}}var q=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(q||{});function be(n){let e,l,t,s;const o=[Ye,Ke],a=[];function r(f,i){return typeof f[1]=="string"?0:1}return e=r(n),l=a[e]=o[e](n),{c(){l.c(),t=R()},l(f){l.l(f),t=R()},m(f,i){a[e].m(f,i),P(f,t,i),s=!0},p(f,i){let c=e;e=r(f),e===c?a[e].p(f,i):(re(),k(a[c],1,1,()=>{a[c]=null}),ae(),l=a[e],l?l.p(f,i):(l=a[e]=o[e](f),l.c()),y(l,1),l.m(t.parentNode,t))},i(f){s||(y(l),s=!0)},o(f){k(l),s=!1},d(f){a[e].d(f),f&&g(t)}}}function Ke(n){let e,l,t,s;const o=[{use:[...n[3],n[7],[X,{...n[2],as:n[1]}]]},n[8],n[4],{hidden:n[5]||void 0}];function a(i){n[21](i)}var r=n[1];function f(i){let c={$$slots:{default:[Je]},$$scope:{ctx:i}};for(let u=0;u<o.length;u+=1)c=E(c,o[u]);return i[0]!==void 0&&(c.el=i[0]),{props:c}}return r&&(e=new r(f(n)),ne.push(()=>de(e,"el",a))),{c(){e&&j(e.$$.fragment),t=R()},l(i){e&&N(e.$$.fragment,i),t=R()},m(i,c){e&&A(e,i,c),P(i,t,c),s=!0},p(i,c){const u=c&446?F(o,[c&142&&{use:[...i[3],i[7],[X,{...i[2],as:i[1]}]]},c&256&&Q(i[8]),c&16&&Q(i[4]),c&32&&{hidden:i[5]||void 0}]):{};if(c&4194304&&(u.$$scope={dirty:c,ctx:i}),!l&&c&1&&(l=!0,u.el=i[0],Ce(()=>l=!1)),r!==(r=i[1])){if(e){re();const m=e;k(m.$$.fragment,1,0,()=>{D(m,1)}),ae()}r?(e=new r(f(i)),ne.push(()=>de(e,"el",a)),j(e.$$.fragment),y(e.$$.fragment,1),A(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(i){s||(e&&y(e.$$.fragment,i),s=!0)},o(i){e&&k(e.$$.fragment,i),s=!1},d(i){i&&g(t),e&&D(e,i)}}}function Ye(n){let e=n[1],l,t,s=n[1]&&se(n);return{c(){s&&s.c(),l=R()},l(o){s&&s.l(o),l=R()},m(o,a){s&&s.m(o,a),P(o,l,a),t=!0},p(o,a){o[1]?e?K(e,o[1])?(s.d(1),s=se(o),s.c(),s.m(l.parentNode,l)):s.p(o,a):(s=se(o),s.c(),s.m(l.parentNode,l)):e&&(s.d(1),s=null),e=o[1]},i(o){t||(y(s),t=!0)},o(o){k(s),t=!1},d(o){o&&g(l),s&&s.d(o)}}}function Je(n){let e;const l=n[19].default,t=$(l,n,n[22],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&4194304)&&x(t,l,s,s[22],e?te(l,s[22],o,null):ee(s[22]),null)},i(s){e||(y(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function se(n){let e,l,t,s,o,a;const r=n[19].default,f=$(r,n,n[22],null);let i=[n[8],n[4],{hidden:l=n[5]||void 0}],c={};for(let u=0;u<i.length;u+=1)c=E(c,i[u]);return{c(){e=z(n[1]),f&&f.c(),this.h()},l(u){e=B(u,(n[1]||"null").toUpperCase(),{});var m=L(e);f&&f.l(m),m.forEach(g),this.h()},h(){me(e,c)},m(u,m){P(u,e,m),f&&f.m(e,null),n[20](e),s=!0,o||(a=[pe(t=We.call(null,e,[...n[3],[X,{...n[2],as:n[1]}]])),pe(n[7].call(null,e))],o=!0)},p(u,m){f&&f.p&&(!s||m&4194304)&&x(f,r,u,u[22],s?te(r,u[22],m,null):ee(u[22]),null),me(e,c=F(i,[m&256&&u[8],m&16&&u[4],(!s||m&32&&l!==(l=u[5]||void 0))&&{hidden:l}])),t&&je(t.update)&&m&14&&t.update.call(null,[...u[3],[X,{...u[2],as:u[1]}]])},i(u){s||(y(f,u),s=!0)},o(u){k(f,u),s=!1},d(u){u&&g(e),f&&f.d(u),n[20](null),o=!1,Ae(a)}}}function Qe(n){let e,l,t=n[6]&&be(n);return{c(){t&&t.c(),e=R()},l(s){t&&t.l(s),e=R()},m(s,o){t&&t.m(s,o),P(s,e,o),l=!0},p(s,[o]){s[6]?t?(t.p(s,o),o&64&&y(t,1)):(t=be(s),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(re(),k(t,1,1,()=>{t=null}),ae())},i(s){l||(y(t),l=!0)},o(s){k(t),l=!1},d(s){t&&t.d(s),s&&g(e)}}}var _e;(function(n){n[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden"})(_e||(_e={}));function Xe(n,e,l){let t,s,o,a,r;const f=["name","as","slotProps","styleableProps","el","use","visible","features","unmount","static","class","style"];let i=H(e,f),{$$slots:c={},$$scope:u}=e;const m=ue(ie());let{name:_}=e,{as:v}=e,{slotProps:d}=e,{styleableProps:p={variant:"utility",base:{},sx:{},as:v}}=e,{el:h=null}=e,{use:S=[]}=e,{visible:O=!0}=e,{features:I=q.None}=e,{unmount:Y=!0}=e,{static:J=!1}=e,{class:M=void 0}=e,{style:V=void 0}=e;if(!v)throw new Error(`<${_}> did not provide an \`as\` value to <Render>`);if(!Ne(v))throw new Error(`<${_}> has an invalid or unsupported \`as\` prop: ${v}`);function ke(b){ne[b?"unshift":"push"](()=>{h=b,l(0,h)})}function Pe(b){h=b,l(0,h)}return n.$$set=b=>{e=E(E({},e),fe(b)),l(8,i=H(e,f)),"name"in b&&l(9,_=b.name),"as"in b&&l(1,v=b.as),"slotProps"in b&&l(10,d=b.slotProps),"styleableProps"in b&&l(2,p=b.styleableProps),"el"in b&&l(0,h=b.el),"use"in b&&l(3,S=b.use),"visible"in b&&l(11,O=b.visible),"features"in b&&l(12,I=b.features),"unmount"in b&&l(13,Y=b.unmount),"static"in b&&l(14,J=b.static),"class"in b&&l(15,M=b.class),"style"in b&&l(16,V=b.style),"$$scope"in b&&l(22,u=b.$$scope)},n.$$.update=()=>{n.$$.dirty&33792&&l(18,t=typeof M=="function"?M(d):M),n.$$.dirty&66560&&l(17,s=typeof V=="function"?V(d):V),n.$$.dirty&30720&&l(6,o=O||I&q.Static&&J||!(I&q.RenderStrategy&&Y)),n.$$.dirty&30720&&l(5,a=!O&&!(I&q.Static&&J)&&I&q.RenderStrategy&&!Y),n.$$.dirty&393248&&l(4,r={class:t,style:`${s!=null?s:""}${a?" display: none":""}`||void 0}),n.$$.dirty&16&&r.style===void 0&&delete r.style},[h,v,p,S,r,a,o,m,i,_,d,O,I,Y,J,M,V,s,t,c,ke,Pe,u]}class ve extends Z{constructor(e){super(),G(this,e,Xe,Qe,K,{name:9,as:1,slotProps:10,styleableProps:2,el:0,use:3,visible:11,features:12,unmount:13,static:14,class:15,style:16})}}const Ze=n=>n&8,Ge=n=>({}),ge=n=>({...n[3]});function Fe(n){let e;const l=n[9].default,t=$(l,n,n[10],ge);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&1032)&&x(t,l,s,s[10],Ze(o)||!e?ee(s[10]):te(l,s[10],o,Ge),ge)},i(s){e||(y(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function $e(n){let e,l;const t=[{name:"Button"},{slotProps:n[3]},{type:n[0]},{as:n[1]},{styleableProps:n[5]},n[6],{use:[...n[2],n[4]]}];let s={$$slots:{default:[Fe]},$$scope:{ctx:n}};for(let o=0;o<t.length;o+=1)s=E(s,t[o]);return e=new ve({props:s}),{c(){j(e.$$.fragment)},l(o){N(e.$$.fragment,o)},m(o,a){A(e,o,a),l=!0},p(o,[a]){const r=a&127?F(t,[t[0],a&8&&{slotProps:o[3]},a&1&&{type:o[0]},a&2&&{as:o[1]},a&32&&{styleableProps:o[5]},a&64&&Q(o[6]),a&20&&{use:[...o[2],o[4]]}]):{};a&1032&&(r.$$scope={dirty:a,ctx:o}),e.$set(r)},i(o){l||(y(e.$$.fragment,o),l=!0)},o(o){k(e.$$.fragment,o),l=!1},d(o){D(e,o)}}}function xe(n,e,l){let t;const s=["variant","type","sx","as","use"];let o=H(e,s),{$$slots:a={},$$scope:r}=e;const f=ue(ie());let{variant:i="utility"}=e,{type:c="button"}=e,{sx:u={}}=e,{as:m="button"}=e,{use:_=[]}=e;const v={boxSizing:"border-box",color:`var(--${i}-color, #333333)`,b:`1px solid var(--${i}-bgc,#cccccc)`,bgc:`var(--${i}-bgc, #cccccc)`,transition:"all 0.39s ease-in-out",r:"6px",p:"8px 16px",shadow:"0px 1px 2px rgba(0 0 0 / 40%)",cursor:"pointer","&:hover":{filter:"brightness(85%)",shadow:"none"}},d={variant:i,base:v,sx:u};return n.$$set=p=>{e=E(E({},e),fe(p)),l(6,o=H(e,s)),"variant"in p&&l(7,i=p.variant),"type"in p&&l(0,c=p.type),"sx"in p&&l(8,u=p.sx),"as"in p&&l(1,m=p.as),"use"in p&&l(2,_=p.use),"$$scope"in p&&l(10,r=p.$$scope)},l(3,t={}),[c,m,_,t,f,d,o,i,u,a,r]}class le extends Z{constructor(e){super(),G(this,e,xe,$e,K,{variant:7,type:0,sx:8,as:1,use:2})}}const et=n=>n&4,tt=n=>({}),he=n=>({...n[2]});function st(n){let e;const l=n[8].default,t=$(l,n,n[9],he);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&516)&&x(t,l,s,s[9],et(o)||!e?ee(s[9]):te(l,s[9],o,tt),he)},i(s){e||(y(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function lt(n){let e,l;const t=[{name:"Card"},n[5],{as:n[0]},{slotProps:n[2]},{use:[...n[1],n[3]]},{styleableProps:n[4]}];let s={$$slots:{default:[st]},$$scope:{ctx:n}};for(let o=0;o<t.length;o+=1)s=E(s,t[o]);return e=new ve({props:s}),{c(){j(e.$$.fragment)},l(o){N(e.$$.fragment,o)},m(o,a){A(e,o,a),l=!0},p(o,[a]){const r=a&63?F(t,[t[0],a&32&&Q(o[5]),a&1&&{as:o[0]},a&4&&{slotProps:o[2]},a&10&&{use:[...o[1],o[3]]},a&16&&{styleableProps:o[4]}]):{};a&516&&(r.$$scope={dirty:a,ctx:o}),e.$set(r)},i(o){l||(y(e.$$.fragment,o),l=!0)},o(o){k(e.$$.fragment,o),l=!1},d(o){D(e,o)}}}function nt(n,e,l){let t;const s=["type","sx","as","use"];let o=H(e,s),{$$slots:a={},$$scope:r}=e;const f=ue(ie());let{type:i="block"}=e,{sx:c={}}=e,{as:u="section"}=e,{use:m=[]}=e,_={display:"block",boxSizing:"border-box"};switch(i){case"row":_={..._,display:"flex",flexDirection:"row"};break;case"column":_={..._,display:"flex",flexDirection:"column"};break;case"grid":_={..._,display:"grid"};break}const v={variant:i,base:_,sx:c,as:u};return n.$$set=d=>{e=E(E({},e),fe(d)),l(5,o=H(e,s)),"type"in d&&l(6,i=d.type),"sx"in d&&l(7,c=d.sx),"as"in d&&l(0,u=d.as),"use"in d&&l(1,m=d.use),"$$scope"in d&&l(9,r=d.$$scope)},l(2,t={}),[u,m,t,f,v,o,i,c,a,r]}class ot extends Z{constructor(e){super(),G(this,e,nt,lt,K,{type:6,sx:7,as:0,use:1})}}function rt(n){let e;return{c(){e=w("Time to soar!")},l(l){e=C(l,"Time to soar!")},m(l,t){P(l,e,t)},d(l){l&&g(e)}}}function at(n){let e;return{c(){e=w("Soar, really?")},l(l){e=C(l,"Soar, really?")},m(l,t){P(l,e,t)},d(l){l&&g(e)}}}function it(n){let e;return{c(){e=w("Don't know 'bout that.")},l(l){e=C(l,"Don't know 'bout that.")},m(l,t){P(l,e,t)},d(l){l&&g(e)}}}function ft(n){let e,l,t,s,o,a;return e=new le({props:{type:"button",variant:"primary",$$slots:{default:[rt]},$$scope:{ctx:n}}}),e.$on("click",n[0]),t=new le({props:{type:"button",variant:"secondary",$$slots:{default:[at]},$$scope:{ctx:n}}}),t.$on("click",n[0]),o=new le({props:{type:"button",$$slots:{default:[it]},$$scope:{ctx:n}}}),o.$on("click",n[0]),{c(){j(e.$$.fragment),l=U(),j(t.$$.fragment),s=U(),j(o.$$.fragment)},l(r){N(e.$$.fragment,r),l=W(r),N(t.$$.fragment,r),s=W(r),N(o.$$.fragment,r)},m(r,f){A(e,r,f),P(r,l,f),A(t,r,f),P(r,s,f),A(o,r,f),a=!0},p(r,f){const i={};f&4&&(i.$$scope={dirty:f,ctx:r}),e.$set(i);const c={};f&4&&(c.$$scope={dirty:f,ctx:r}),t.$set(c);const u={};f&4&&(u.$$scope={dirty:f,ctx:r}),o.$set(u)},i(r){a||(y(e.$$.fragment,r),y(t.$$.fragment,r),y(o.$$.fragment,r),a=!0)},o(r){k(e.$$.fragment,r),k(t.$$.fragment,r),k(o.$$.fragment,r),a=!1},d(r){D(e,r),r&&g(l),D(t,r),r&&g(s),D(o,r)}}}function ut(n){let e,l,t,s,o,a,r,f,i,c,u,m,_,v;return _=new ot({props:{as:"section",type:"row",sx:{content:"space-between",p:"16px",b:"1px solid #fefefe",bgc:"#dfdfdf",r:"8px","--primary-bgc":"steelblue","--primary-color":"white","--secondary-bgc":"tomato","--secondary-color":"white"},$$slots:{default:[ft]},$$scope:{ctx:n}}}),_.$on("click",n[1]),{c(){e=z("h1"),l=w("Welcome to your library project"),t=U(),s=z("p"),o=w("Create your package using @sveltejs/package and preview/showcase your work with SvelteKit"),a=U(),r=z("p"),f=w("Visit "),i=z("a"),c=w("kit.svelte.dev"),u=w(" to read the documentation"),m=U(),j(_.$$.fragment),this.h()},l(d){e=B(d,"H1",{});var p=L(e);l=C(p,"Welcome to your library project"),p.forEach(g),t=W(d),s=B(d,"P",{});var h=L(s);o=C(h,"Create your package using @sveltejs/package and preview/showcase your work with SvelteKit"),h.forEach(g),a=W(d),r=B(d,"P",{});var S=L(r);f=C(S,"Visit "),i=B(S,"A",{href:!0});var O=L(i);c=C(O,"kit.svelte.dev"),O.forEach(g),u=C(S," to read the documentation"),S.forEach(g),m=W(d),N(_.$$.fragment,d),this.h()},h(){De(i,"href","https://kit.svelte.dev")},m(d,p){P(d,e,p),T(e,l),P(d,t,p),P(d,s,p),T(s,o),P(d,a,p),P(d,r,p),T(r,f),T(r,i),T(i,c),T(r,u),P(d,m,p),A(_,d,p),v=!0},p(d,[p]){const h={};p&4&&(h.$$scope={dirty:p,ctx:d}),_.$set(h)},i(d){v||(y(_.$$.fragment,d),v=!0)},o(d){k(_.$$.fragment,d),v=!1},d(d){d&&g(e),d&&g(t),d&&g(s),d&&g(a),d&&g(r),d&&g(m),D(_,d)}}}function ct(n){return[t=>{t.stopPropagation(),alert("Hello")},()=>console.log("card")]}class mt extends Z{constructor(e){super(),G(this,e,ct,ut,K,{})}}export{mt as default};
