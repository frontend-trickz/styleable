import{H as de,I as Se,J as we,K as je,S as Z,i as G,s as K,e as O,b as P,f as y,g as ie,t as k,d as ae,h as g,L as M,M as fe,N as E,O as ue,P as oe,Q as me,v as C,w as N,x as A,R as F,T as Q,U as Ce,y as R,B as $,k as B,l as H,m as L,V as pe,W as be,C as x,D as ee,E as te,X as Ae,Y as Re,q as w,a as T,r as j,c as W,n as Oe,F as I}from"../../chunks/index-f80afd85.js";const re="!",De=new RegExp(`^[^${re}]+(?:${re}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);function ce(l,e=[]){let n,t=[];l.$on=(o,i)=>{let r=o,f=()=>{};for(let a of e){if(typeof a=="string"&&a===r){const c=l.$$.callbacks[r]||(l.$$.callbacks[r]=[]);return c.push(i),()=>{const u=c.indexOf(i);u!==-1&&c.splice(u,1)}}if(typeof a=="object"&&a.name===r){let c=i;i=(...u)=>{typeof a=="object"&&a.shouldExclude()||c(...u)}}}return n?f=n(r,i):t.push([r,i]),()=>{f()}};function s(o){Se(l,o)}return o=>{const i=[],r={};n=(f,a)=>{let c=f,u=a,m=!1;if(c.match(De)){const p=c.split(re);c=p[0];const h=Object.fromEntries(p.slice(1).map(S=>[S,!0]));h.passive&&(m=m||{},m.passive=!0),h.nonpassive&&(m=m||{},m.passive=!1),h.capture&&(m=m||{},m.capture=!0),h.once&&(m=m||{},m.once=!0),h.preventDefault&&(u=we(u)),h.stopPropagation&&(u=je(u))}const v=de(o,c,u,m),d=()=>{v();const p=i.indexOf(d);p>-1&&i.splice(p,1)};return i.push(d),c in r||(r[c]=de(o,c,s)),d};for(let f=0;f<t.length;f++)n(t[f][0],t[f][1]);return{destroy:()=>{for(let f=0;f<i.length;f++)i[f]();for(let f of Object.entries(r))f[1]()}}}}const Ne=["a","address","article","aside","b","bdi","bdo","blockquote","button","cite","code","data","datalist","dd","dl","dt","div","em","footer","form","h1","h2","h3","h4","h5","h6","header","i","input","label","li","main","nav","ol","p","section","span","strong","ul"];function Ue(l){return!(typeof l=="string"&&!Ne.includes(l))}const Ie=l=>{var e;return(e={display:"display",maxw:"max-width",maxh:"max-height",gap:"gap",rgap:"row-gap",cgap:"column-gap",w:"width",h:"height",bgc:"background-color",bg:"background",color:"color",shadow:"box-shadow",filter:"filter",gradient:"gradient",transition:"transition",transform:"transform",overflow:"overflow",cursor:"cursor",outline:"outline",font:"font-family",size:"font-size",weight:"font-weight",content:"justify-content",items:"align-items",p:"padding",px:"padding-inline",py:"padding-block",pt:"padding-top",pr:"padding-right",pl:"padding-left",pb:"padding-bottom:",m:"margin",mx:"margin-inline",my:"margin-block",mt:"margin-top",mr:"margin-right",ml:"margin-left",mb:"margin-bottom",b:"border",bt:"border-top",bb:"border-bottom",br:"border-right",bl:"border-left",bw:"border-width",bc:"border-color",bs:"border-style",r:"border-radius",rtl:"border-top-left-radius",rtr:"border-top-right-radius",rbl:"border-bottom-left-radius",rbr:"border-bottom-right-radius"}[l])!=null?e:""},qe=l=>l.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),Me=l=>{const e=document.createElement("style");return e.setAttribute("id",l),document.head.appendChild(e),e.sheet},Ve=(l,e)=>{var s;let n=(s=document.querySelector("#"+l))==null?void 0:s.sheet;if(n)return;n=Me(l);const t=(n==null?void 0:n.rules)||(n==null?void 0:n.cssRules);e.forEach(o=>n==null?void 0:n.insertRule(o,t==null?void 0:t.length))},ve=(l,e,n=[])=>{const t=[e];n.push(t);for(let[s,o]of Object.entries(l)){const i=Ie(s);if(typeof o=="string"||typeof o=="number"){const r=i?`${i}:${o};`:`${qe(s)}:${o};`;t.push(r)}else{const r=s.replace("&",e);ve(o,r,n)}}return n.map(s=>{const[o,...i]=s;return`${o} {${i.join("")}}`})},ze=l=>{const e=document.querySelector("#"+l);e&&e.remove()},Be=(l,e)=>{const n=`.${l}`,t=ve(e,n);l&&Ve(l,t)},He=l=>e=>{for(let[n,t]of Object.entries(e))if(typeof t=="string"||typeof t=="number")l[n]=t;else{const s=l[n];!s||typeof s=="string"||typeof t=="number"?l[n]=t:l[n]={...s,...t}}return l};let Le=0;function Te(){return++Le}function We(){return Te()}const X=(l,e)=>{const n=s=>{const{variant:o="utility",base:i={},sx:r={},as:f}=s,a=[].slice.call(l.classList).find(m=>m.indexOf("svelte-")===0),c=a!=null?a:`styleable-${o}-${f}${We()}`,u=He(i)(r);return Be(c,u),l.classList.add(c),()=>ze(c)};let t=n(e);return{update(s){t(),t=n(s),console.log("updated!")},destroy(){t()}}};function Ke(l,e){let n=[];if(e)for(let t=0;t<e.length;t++){const s=e[t],o=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(o(l,s[1])):n.push(o(l))}return{update(t){if((t&&t.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(t)for(let s=0;s<t.length;s++){const o=n[s];if(o&&o.update){const i=t[s];Array.isArray(i)&&i.length>1?o.update(i[1]):o.update()}}},destroy(){for(let t=0;t<n.length;t++){const s=n[t];s&&s.destroy&&s.destroy()}}}}var q=(l=>(l[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l))(q||{});function _e(l){let e,n,t,s;const o=[Je,Ye],i=[];function r(f,a){return typeof f[1]=="string"?0:1}return e=r(l),n=i[e]=o[e](l),{c(){n.c(),t=O()},l(f){n.l(f),t=O()},m(f,a){i[e].m(f,a),P(f,t,a),s=!0},p(f,a){let c=e;e=r(f),e===c?i[e].p(f,a):(ie(),k(i[c],1,1,()=>{i[c]=null}),ae(),n=i[e],n?n.p(f,a):(n=i[e]=o[e](f),n.c()),y(n,1),n.m(t.parentNode,t))},i(f){s||(y(n),s=!0)},o(f){k(n),s=!1},d(f){i[e].d(f),f&&g(t)}}}function Ye(l){let e,n,t,s;const o=[{use:[...l[3],l[7],[X,{...l[2],as:l[1]}]]},l[8],l[4],{hidden:l[5]||void 0}];function i(a){l[21](a)}var r=l[1];function f(a){let c={$$slots:{default:[Qe]},$$scope:{ctx:a}};for(let u=0;u<o.length;u+=1)c=E(c,o[u]);return a[0]!==void 0&&(c.el=a[0]),{props:c}}return r&&(e=new r(f(l)),oe.push(()=>me(e,"el",i))),{c(){e&&C(e.$$.fragment),t=O()},l(a){e&&N(e.$$.fragment,a),t=O()},m(a,c){e&&A(e,a,c),P(a,t,c),s=!0},p(a,c){const u=c&446?F(o,[c&142&&{use:[...a[3],a[7],[X,{...a[2],as:a[1]}]]},c&256&&Q(a[8]),c&16&&Q(a[4]),c&32&&{hidden:a[5]||void 0}]):{};if(c&4194304&&(u.$$scope={dirty:c,ctx:a}),!n&&c&1&&(n=!0,u.el=a[0],Ce(()=>n=!1)),r!==(r=a[1])){if(e){ie();const m=e;k(m.$$.fragment,1,0,()=>{R(m,1)}),ae()}r?(e=new r(f(a)),oe.push(()=>me(e,"el",i)),C(e.$$.fragment),y(e.$$.fragment,1),A(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){s||(e&&y(e.$$.fragment,a),s=!0)},o(a){e&&k(e.$$.fragment,a),s=!1},d(a){a&&g(t),e&&R(e,a)}}}function Je(l){let e=l[1],n,t,s=l[1]&&se(l);return{c(){s&&s.c(),n=O()},l(o){s&&s.l(o),n=O()},m(o,i){s&&s.m(o,i),P(o,n,i),t=!0},p(o,i){o[1]?e?K(e,o[1])?(s.d(1),s=se(o),s.c(),s.m(n.parentNode,n)):s.p(o,i):(s=se(o),s.c(),s.m(n.parentNode,n)):e&&(s.d(1),s=null),e=o[1]},i(o){t||(y(s),t=!0)},o(o){k(s),t=!1},d(o){o&&g(n),s&&s.d(o)}}}function Qe(l){let e;const n=l[19].default,t=$(n,l,l[22],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&4194304)&&x(t,n,s,s[22],e?te(n,s[22],o,null):ee(s[22]),null)},i(s){e||(y(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function se(l){let e,n,t,s,o,i;const r=l[19].default,f=$(r,l,l[22],null);let a=[l[8],l[4],{hidden:n=l[5]||void 0}],c={};for(let u=0;u<a.length;u+=1)c=E(c,a[u]);return{c(){e=B(l[1]),f&&f.c(),this.h()},l(u){e=H(u,(l[1]||"null").toUpperCase(),{});var m=L(e);f&&f.l(m),m.forEach(g),this.h()},h(){pe(e,c)},m(u,m){P(u,e,m),f&&f.m(e,null),l[20](e),s=!0,o||(i=[be(t=Ke.call(null,e,[...l[3],[X,{...l[2],as:l[1]}]])),be(l[7].call(null,e))],o=!0)},p(u,m){f&&f.p&&(!s||m&4194304)&&x(f,r,u,u[22],s?te(r,u[22],m,null):ee(u[22]),null),pe(e,c=F(a,[m&256&&u[8],m&16&&u[4],(!s||m&32&&n!==(n=u[5]||void 0))&&{hidden:n}])),t&&Ae(t.update)&&m&14&&t.update.call(null,[...u[3],[X,{...u[2],as:u[1]}]])},i(u){s||(y(f,u),s=!0)},o(u){k(f,u),s=!1},d(u){u&&g(e),f&&f.d(u),l[20](null),o=!1,Re(i)}}}function Xe(l){let e,n,t=l[6]&&_e(l);return{c(){t&&t.c(),e=O()},l(s){t&&t.l(s),e=O()},m(s,o){t&&t.m(s,o),P(s,e,o),n=!0},p(s,[o]){s[6]?t?(t.p(s,o),o&64&&y(t,1)):(t=_e(s),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(ie(),k(t,1,1,()=>{t=null}),ae())},i(s){n||(y(t),n=!0)},o(s){k(t),n=!1},d(s){t&&t.d(s),s&&g(e)}}}var ge;(function(l){l[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden"})(ge||(ge={}));function Ze(l,e,n){let t,s,o,i,r;const f=["name","as","slotProps","styleableProps","el","use","visible","features","unmount","static","class","style"];let a=M(e,f),{$$slots:c={},$$scope:u}=e;const m=ce(fe());let{name:_}=e,{as:v}=e,{slotProps:d}=e,{styleableProps:p={variant:"utility",base:{},sx:{},as:v}}=e,{el:h=null}=e,{use:S=[]}=e,{visible:D=!0}=e,{features:U=q.None}=e,{unmount:Y=!0}=e,{static:J=!1}=e,{class:V=void 0}=e,{style:z=void 0}=e;if(!v)throw new Error(`<${_}> did not provide an \`as\` value to <Render>`);if(!Ue(v))throw new Error(`<${_}> has an invalid or unsupported \`as\` prop: ${v}`);function Pe(b){oe[b?"unshift":"push"](()=>{h=b,n(0,h)})}function Ee(b){h=b,n(0,h)}return l.$$set=b=>{e=E(E({},e),ue(b)),n(8,a=M(e,f)),"name"in b&&n(9,_=b.name),"as"in b&&n(1,v=b.as),"slotProps"in b&&n(10,d=b.slotProps),"styleableProps"in b&&n(2,p=b.styleableProps),"el"in b&&n(0,h=b.el),"use"in b&&n(3,S=b.use),"visible"in b&&n(11,D=b.visible),"features"in b&&n(12,U=b.features),"unmount"in b&&n(13,Y=b.unmount),"static"in b&&n(14,J=b.static),"class"in b&&n(15,V=b.class),"style"in b&&n(16,z=b.style),"$$scope"in b&&n(22,u=b.$$scope)},l.$$.update=()=>{l.$$.dirty&33792&&n(18,t=typeof V=="function"?V(d):V),l.$$.dirty&66560&&n(17,s=typeof z=="function"?z(d):z),l.$$.dirty&30720&&n(6,o=D||U&q.Static&&J||!(U&q.RenderStrategy&&Y)),l.$$.dirty&30720&&n(5,i=!D&&!(U&q.Static&&J)&&U&q.RenderStrategy&&!Y),l.$$.dirty&393248&&n(4,r={class:t,style:`${s!=null?s:""}${i?" display: none":""}`||void 0}),l.$$.dirty&16&&r.style===void 0&&delete r.style},[h,v,p,S,r,i,o,m,a,_,d,D,U,Y,J,V,z,s,t,c,Pe,Ee,u]}class ke extends Z{constructor(e){super(),G(this,e,Ze,Xe,K,{name:9,as:1,slotProps:10,styleableProps:2,el:0,use:3,visible:11,features:12,unmount:13,static:14,class:15,style:16})}}const Ge=l=>l&8,Fe=l=>({}),he=l=>({...l[3]});function $e(l){let e;const n=l[9].default,t=$(n,l,l[10],he);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&1032)&&x(t,n,s,s[10],Ge(o)||!e?ee(s[10]):te(n,s[10],o,Fe),he)},i(s){e||(y(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function xe(l){let e,n;const t=[{name:"Button"},{slotProps:l[3]},{type:l[0]},{as:l[1]},{styleableProps:l[5]},l[6],{use:[...l[2],l[4]]}];let s={$$slots:{default:[$e]},$$scope:{ctx:l}};for(let o=0;o<t.length;o+=1)s=E(s,t[o]);return e=new ke({props:s}),{c(){C(e.$$.fragment)},l(o){N(e.$$.fragment,o)},m(o,i){A(e,o,i),n=!0},p(o,[i]){const r=i&127?F(t,[t[0],i&8&&{slotProps:o[3]},i&1&&{type:o[0]},i&2&&{as:o[1]},i&32&&{styleableProps:o[5]},i&64&&Q(o[6]),i&20&&{use:[...o[2],o[4]]}]):{};i&1032&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){n||(y(e.$$.fragment,o),n=!0)},o(o){k(e.$$.fragment,o),n=!1},d(o){R(e,o)}}}function et(l,e,n){let t;const s=["variant","type","sx","as","use"];let o=M(e,s),{$$slots:i={},$$scope:r}=e;const f=ce(fe());let{variant:a="utility"}=e,{type:c="button"}=e,{sx:u={}}=e,{as:m="button"}=e,{use:_=[]}=e;const v={boxSizing:"border-box",color:`var(--${a}-color, #333333)`,b:`1px solid var(--${a}-bgc,#cccccc)`,bgc:`var(--${a}-bgc, #cccccc)`,transition:"all 0.39s ease-in-out",r:"6px",p:"8px 16px",shadow:"0px 1px 2px rgba(0 0 0 / 40%)",cursor:"pointer","&:focus":{outline:"none"},"&:hover":{filter:"brightness(85%)",shadow:"none"}},d={variant:a,base:v,sx:u};return l.$$set=p=>{e=E(E({},e),ue(p)),n(6,o=M(e,s)),"variant"in p&&n(7,a=p.variant),"type"in p&&n(0,c=p.type),"sx"in p&&n(8,u=p.sx),"as"in p&&n(1,m=p.as),"use"in p&&n(2,_=p.use),"$$scope"in p&&n(10,r=p.$$scope)},n(3,t={}),[c,m,_,t,f,d,o,a,u,i,r]}class ne extends Z{constructor(e){super(),G(this,e,et,xe,K,{variant:7,type:0,sx:8,as:1,use:2})}}const tt=l=>l&4,st=l=>({}),ye=l=>({...l[2]});function nt(l){let e;const n=l[8].default,t=$(n,l,l[9],ye);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&516)&&x(t,n,s,s[9],tt(o)||!e?ee(s[9]):te(n,s[9],o,st),ye)},i(s){e||(y(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function lt(l){let e,n;const t=[{name:"Card"},l[5],{as:l[0]},{slotProps:l[2]},{use:[...l[1],l[3]]},{styleableProps:l[4]}];let s={$$slots:{default:[nt]},$$scope:{ctx:l}};for(let o=0;o<t.length;o+=1)s=E(s,t[o]);return e=new ke({props:s}),{c(){C(e.$$.fragment)},l(o){N(e.$$.fragment,o)},m(o,i){A(e,o,i),n=!0},p(o,[i]){const r=i&63?F(t,[t[0],i&32&&Q(o[5]),i&1&&{as:o[0]},i&4&&{slotProps:o[2]},i&10&&{use:[...o[1],o[3]]},i&16&&{styleableProps:o[4]}]):{};i&516&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){n||(y(e.$$.fragment,o),n=!0)},o(o){k(e.$$.fragment,o),n=!1},d(o){R(e,o)}}}function ot(l,e,n){let t;const s=["type","sx","as","use"];let o=M(e,s),{$$slots:i={},$$scope:r}=e;const f=ce(fe());let{type:a="block"}=e,{sx:c={}}=e,{as:u="section"}=e,{use:m=[]}=e,_={display:"block",boxSizing:"border-box"};switch(a){case"row":_={..._,display:"flex",flexDirection:"row"};break;case"column":_={..._,display:"flex",flexDirection:"column"};break;case"grid":_={..._,display:"grid"};break}const v={variant:a,base:_,sx:c,as:u};return l.$$set=d=>{e=E(E({},e),ue(d)),n(5,o=M(e,s)),"type"in d&&n(6,a=d.type),"sx"in d&&n(7,c=d.sx),"as"in d&&n(0,u=d.as),"use"in d&&n(1,m=d.use),"$$scope"in d&&n(9,r=d.$$scope)},n(2,t={}),[u,m,t,f,v,o,a,c,i,r]}class rt extends Z{constructor(e){super(),G(this,e,ot,lt,K,{type:6,sx:7,as:0,use:1})}}function it(l){let e;return{c(){e=w("Primary")},l(n){e=j(n,"Primary")},m(n,t){P(n,e,t)},d(n){n&&g(e)}}}function at(l){let e;return{c(){e=w("Secondary")},l(n){e=j(n,"Secondary")},m(n,t){P(n,e,t)},d(n){n&&g(e)}}}function ft(l){let e;return{c(){e=w("Utility")},l(n){e=j(n,"Utility")},m(n,t){P(n,e,t)},d(n){n&&g(e)}}}function ut(l){let e,n,t,s,o,i;return e=new ne({props:{type:"button",variant:"primary",$$slots:{default:[it]},$$scope:{ctx:l}}}),e.$on("click",le.bind("Primary")),t=new ne({props:{type:"button",variant:"secondary",$$slots:{default:[at]},$$scope:{ctx:l}}}),t.$on("click",le.bind("Secondary")),o=new ne({props:{type:"button",$$slots:{default:[ft]},$$scope:{ctx:l}}}),o.$on("click",le.bind("Utility")),{c(){C(e.$$.fragment),n=T(),C(t.$$.fragment),s=T(),C(o.$$.fragment)},l(r){N(e.$$.fragment,r),n=W(r),N(t.$$.fragment,r),s=W(r),N(o.$$.fragment,r)},m(r,f){A(e,r,f),P(r,n,f),A(t,r,f),P(r,s,f),A(o,r,f),i=!0},p(r,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:r}),e.$set(a);const c={};f&2&&(c.$$scope={dirty:f,ctx:r}),t.$set(c);const u={};f&2&&(u.$$scope={dirty:f,ctx:r}),o.$set(u)},i(r){i||(y(e.$$.fragment,r),y(t.$$.fragment,r),y(o.$$.fragment,r),i=!0)},o(r){k(e.$$.fragment,r),k(t.$$.fragment,r),k(o.$$.fragment,r),i=!1},d(r){R(e,r),r&&g(n),R(t,r),r&&g(s),R(o,r)}}}function ct(l){let e,n,t,s,o,i,r,f,a,c,u,m,_,v;return _=new rt({props:{as:"section",type:"row",sx:{content:"space-between",p:"16px",b:"1px solid #fefefe",bgc:"#dfdfdf",r:"8px","--primary-bgc":"steelblue","--primary-color":"white","--secondary-bgc":"tomato","--secondary-color":"white"},$$slots:{default:[ut]},$$scope:{ctx:l}}}),_.$on("click",l[0]),{c(){e=B("h1"),n=w("Welcome to your library project"),t=T(),s=B("p"),o=w("Create your package using @sveltejs/package and preview/showcase your work with SvelteKit"),i=T(),r=B("p"),f=w("Visit "),a=B("a"),c=w("kit.svelte.dev"),u=w(" to read the documentation"),m=T(),C(_.$$.fragment),this.h()},l(d){e=H(d,"H1",{});var p=L(e);n=j(p,"Welcome to your library project"),p.forEach(g),t=W(d),s=H(d,"P",{});var h=L(s);o=j(h,"Create your package using @sveltejs/package and preview/showcase your work with SvelteKit"),h.forEach(g),i=W(d),r=H(d,"P",{});var S=L(r);f=j(S,"Visit "),a=H(S,"A",{href:!0});var D=L(a);c=j(D,"kit.svelte.dev"),D.forEach(g),u=j(S," to read the documentation"),S.forEach(g),m=W(d),N(_.$$.fragment,d),this.h()},h(){Oe(a,"href","https://kit.svelte.dev")},m(d,p){P(d,e,p),I(e,n),P(d,t,p),P(d,s,p),I(s,o),P(d,i,p),P(d,r,p),I(r,f),I(r,a),I(a,c),I(r,u),P(d,m,p),A(_,d,p),v=!0},p(d,[p]){const h={};p&2&&(h.$$scope={dirty:p,ctx:d}),_.$set(h)},i(d){v||(y(_.$$.fragment,d),v=!0)},o(d){k(_.$$.fragment,d),v=!1},d(d){d&&g(e),d&&g(t),d&&g(s),d&&g(i),d&&g(r),d&&g(m),R(_,d)}}}function le(l){l.stopPropagation(),alert(`You just clicked on the ${this} button`)}function dt(l){return[()=>console.log("card")]}class pt extends Z{constructor(e){super(),G(this,e,dt,ct,K,{})}}export{pt as default};
