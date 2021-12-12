var _e=Object.defineProperty,ze=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var ge=(r,n,s)=>n in r?_e(r,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[n]=s,E=(r,n)=>{for(var s in n||(n={}))Ve.call(n,s)&&ge(r,s,n[s]);if(De)for(var s of De(n))He.call(n,s)&&ge(r,s,n[s]);return r},L=(r,n)=>ze(r,$e(n));var Se=(r,n,s)=>(ge(r,typeof n!="symbol"?n+"":n,s),s);import{o as We,a as Ee,b as qe,r as e,j as t,R as Le,F as K,c as I,m as B,C as je,l as Fe,d as fe}from"./vendor.c085fb19.js";const Je=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=s(i);fetch(i.href,c)}};Je();var Ke=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,he=(r,n,s,o)=>{for(var i=o>1?void 0:o?Ue(n,s):n,c=r.length-1,a;c>=0;c--)(a=r[c])&&(i=(o?a(n,s,i):a(i))||i);return o&&i&&Ke(n,s,i),i};class se{constructor(){Se(this,"queue",[])}addModal(n){!this.queue.find(s=>s===n)&&this.queue.push(n)}removeModal(n){const s=this.queue.indexOf(n);s!==-1&&this.queue.splice(s,1)}}he([We],se.prototype,"queue",2);he([Ee],se.prototype,"addModal",1);he([Ee],se.prototype,"removeModal",1);var me=new se;const Ze=({children:r,domEl:n,data:s})=>{const[o,i]=e.exports.useState(1),c=document.getElementById(s.id),a=document.getElementById(s.moveId),f=localStorage.getItem(s.id)||null,C=f?JSON.parse(f):{x:s.width===-1?0:(window.innerWidth-s.width)/2,y:s.height===-1?0:(window.innerHeight-s.height)/2},[g,m]=e.exports.useState({isDragging:!1,origin:{x:0,y:0},position:C}),h=e.exports.useCallback(({clientX:b,clientY:F})=>{i(o+me.queue.length+1),m(d=>L(E({},d),{isDragging:!0,origin:{x:b-d.position.x,y:F-d.position.y}}))},[o]),l=e.exports.useCallback(({clientX:b,clientY:F,target:d})=>{if(!g.isDragging||a&&d!==a)return;let y=b-g.origin.x,D=F-g.origin.y;y<=0?y=0:y>window.innerWidth-c.offsetWidth&&(y=window.innerWidth-c.offsetWidth),D<=0?D=0:D>window.innerHeight-c.offsetHeight&&(D=window.innerHeight-c.offsetHeight);const V={x:y,y:D};m(A=>L(E({},A),{position:V}))},[g.isDragging,g.origin,a,c]),p=e.exports.useCallback(()=>{g.isDragging&&m(b=>L(E({},b),{isDragging:!1}))},[g.isDragging]);e.exports.useEffect(()=>{s.width===-1&&m({isDragging:!1,origin:{x:0,y:0},position:{x:0,y:0}})},[s.width]),e.exports.useEffect(()=>{if(!!n)return n.addEventListener("mousemove",l),n.addEventListener("mouseup",p),()=>{n.removeEventListener("mousemove",l),n.removeEventListener("mouseup",p),s.width!==-1&&localStorage.setItem(s.id,JSON.stringify(g.position))}},[n,l,p,s.id,s.width,g.position]);const v=e.exports.useMemo(()=>({left:`${g.position.x}px`,top:`${g.position.y}px`,zIndex:o,display:s.isShow?"block":"none",position:"absolute"}),[g.position.x,g.position.y,o,s.isShow]);return t("div",{id:s.id,style:v,onMouseDown:h,children:r})};var Ye=qe(Ze);const Ge=e.exports.memo(({children:r,data:n})=>{const s=document.getElementById("main-view");return s?Le.createPortal(t(Ye,{domEl:s,data:n,children:r}),s):null}),ve=r=>{const[n,s]=e.exports.useState(!1),o=e.exports.useCallback(()=>{s(!0),me.addModal(r)},[r]),i=e.exports.useCallback(()=>{s(!1),me.removeModal(r)},[r]);return{open:o,close:i,RenderModal:({children:a,data:f})=>t(K,{children:n&&t(Ge,{data:f,closeModal:i,children:a})})}};const Ne=document.createElement("script");Ne.src="//at.alicdn.com/t/font_1848517_ds8sk573mfk.js";document.body.appendChild(Ne);const U=({className:r,type:n,style:s,svgRef:o,clickEvent:i})=>t("svg",{ref:o,className:r?"icon-font "+r:"icon-font","aria-hidden":"true",style:s,onClick:i,children:t("use",{xlinkHref:`#${n}`})}),Qe=e.exports.memo(()=>{const{open:r,close:n,RenderModal:s}=ve("SettingView"),o=["left","bottom","right","top"],i=[{title:"\u901A\u7528"}],[c,a,f,C,g,m,h,l]=e.exports.useContext($),p=[{title:"\u56FE\u6807\u9ED8\u8BA4\u5927\u5C0F",value:h.length*1,max:"128",min:"25"},{title:"\u56FE\u6807\u7F29\u653E\u540E\u5927\u5C0F",value:h.bigLength*1,max:"256",min:"25"},{title:"\u56FE\u6807\u4E4B\u95F4\u8DDD\u79BB\u5927\u5C0F",value:h.itemMargin*1,max:"10",min:"0"},{title:"Dock \u8DDD\u79BB\u5C4F\u5E55\u8FB9\u7F18\u5927\u5C0F",value:h.distance*1,max:"100",min:"0"}],[v,b]=e.exports.useState("\u901A\u7528");e.exports.useEffect(()=>c.type?r():n(),[n,c,r]);const F=e.exports.useCallback((d,y)=>{switch(y.title){case"\u56FE\u6807\u9ED8\u8BA4\u5927\u5C0F":l({name:"change",dockData:L(E({},h),{length:d})});return;case"\u56FE\u6807\u7F29\u653E\u540E\u5927\u5C0F":l({name:"change",dockData:L(E({},h),{bigLength:d})});return;case"\u56FE\u6807\u4E4B\u95F4\u8DDD\u79BB\u5927\u5C0F":l({name:"change",dockData:L(E({},h),{itemMargin:d})});return;case"Dock \u8DDD\u79BB\u5C4F\u5E55\u8FB9\u7F18\u5927\u5C0F":l({name:"change",dockData:L(E({},h),{distance:d})});return}},[h,l]);return t(s,{data:{width:684,height:466,id:"SettingView",moveId:"SettingMove",isShow:f},children:I(K,{children:[t(B.TitleBar,{id:"SettingMove",controls:!0,inset:!0,isFullscreen:!1,onCloseClick:()=>{n(),a(L(E({},c),{type:!1})),localStorage.setItem("dockData",JSON.stringify(h)),localStorage.setItem("position",JSON.stringify(g))},onMinimizeClick:()=>{C(!1)},onMaximizeClick:r}),I("div",{className:"mainSet",children:[t(B.View,{className:"leftSet",children:t(B.ListView,{children:i.map((d,y)=>I(B.ListViewRow,{onClick:()=>b(d.title),background:v===d.title?"#bfbfbf":null,padding:"11px 20px",children:[t(U,{type:"icon-ios-home",style:{marginRight:"6px"}}),t(B.Text,{color:"#414141",size:"14",bold:!0,children:d.title})]},d.title+y))})}),I(B.View,{className:"rightSet",children:[t(B.Text,{bold:!0,marginBottom:"10px",size:"20",children:v}),t("div",{className:"divide"}),p.map((d,y)=>I("div",{className:"options",children:[d.title==="\u56FE\u6807\u7F29\u653E\u540E\u5927\u5C0F"?t(B.Checkbox,{label:d.title,onChange:()=>l({name:"change",dockData:L(E({},h),{isDockBig:!h.isDockBig})}),defaultChecked:h.isDockBig}):t(B.Text,{bold:!0,marginBottom:"10px",children:d.title}),t("input",{min:d.min,max:d.max,type:"range",value:d.value,onChange:D=>{F(D.target.value,d)}}),t("span",{children:d.value})]},y+d.value)),t(B.Text,{bold:!0,marginBottom:"10px",children:"Dock \u6240\u5728\u5C4F\u5E55\u4F4D\u7F6E"}),t(B.View,{style:{lineHeight:"22px"},children:o.map((d,y)=>t("div",{style:{paddingRight:28},children:t(B.Radio,{label:d,name:d,onChange:D=>{m({name:"change",position:D.target.value})},defaultValue:d,defaultChecked:d===g})},y+d))})]})]})]})})});const Me=()=>["AC","+/-","%","\xF7","7","8","9","\xD7","4","5","6","-","1","2","3","+","0",".","="],Ie=Me(),Xe=()=>{const[r,n]=e.exports.useState(Ie),[s,o]=e.exports.useState({n1:"",n2:""}),[i,c]=e.exports.useState(""),[a,f]=e.exports.useState("0"),C=e.exports.useCallback((l,p)=>{const v={n1:l==="n1"&&s[l]!=="0"?s[l]+p:s.n1,n2:l==="n2"&&s[l]!=="0"?s[l]+p:s.n2};o(v),f(v[l].length>6?g(parseFloat(v[l]).toPrecision(6)):v[l])},[s]),g=l=>(l=/\.\d+?0+$/g.test(l)?l.replace(/0+$/g,""):l,l.replace(/\.0+$/g,"").replace(/\.0+e/,"e").replace(/0+e/,"e").replace(/\.$/,"")),m=e.exports.useCallback((l,p,v)=>{const b=parseFloat(l),F=parseFloat(p),d=parseFloat(a);return v==="+"?(b+F).toPrecision(6):v==="-"?(b-F).toPrecision(6):v==="\xD7"?(b*F).toPrecision(6):v==="\xF7"?F===0?"\u4E0D\u662F\u6570\u5B57":(b/F).toPrecision(6):v==="+/-"?(-(d||b)||0).toPrecision(6):v==="%"?((d||b)/100||0).toPrecision(6):a},[a]),h=e.exports.useCallback(l=>{if(l.target instanceof HTMLButtonElement){const p=l.target.textContent;if("0123456789.".indexOf(p)>=0){const v=Me();v.shift(),v.unshift("C"),n(v),C(i?"n2":"n1",p)}else"+-\xD7\xF7".indexOf(p)>=0?(o({n1:s.n1?s.n1:a,n2:s.n2}),c(p)):"=".indexOf(p)>=0?s.n1&&s.n2&&(f(g(m(s.n1,s.n2,i))),o({n1:"",n2:""}),c("")):p==="C"?(f("0"),o({n1:"",n2:""}),c(""),n(Ie)):"%'+/-'".indexOf(p)>=0&&(s.n1||a)&&f(g(m(s.n1,s.n2,p)))}},[i,s,a,C,m]);return e.exports.useEffect(()=>f(a),[a]),I("div",{className:"calculator-wrapper",children:[t("div",{className:"output-wrapper",children:t("div",{className:"output",children:t("span",{children:a})})}),t("div",{className:"row",onClick:l=>h(l),children:r.map((l,p)=>t("button",{className:[0,1,2].includes(p)?"dark button text-":[3,7,11,15,18].includes(p)?"orange button text-":"button text-"+l,children:l},l))})]})},et=e.exports.memo(()=>{const{open:r,close:n,RenderModal:s}=ve("CalculatorView"),[o,i,c,a]=e.exports.useContext($);return e.exports.useEffect(()=>o.type?r():n(),[n,o,r]),t(s,{data:{width:410,height:560,id:"CalculatorView",moveId:"calculatorMove",isShow:c},children:I(K,{children:[t(B.TitleBar,{id:"calculatorMove",transparent:!0,controls:!0,isFullscreen:!1,onCloseClick:()=>{n(),i(L(E({},o),{type:!1}))},onMinimizeClick:()=>{a(!1)},onMaximizeClick:r}),t(Xe,{})]})})}),tt=()=>{const[r,n]=e.exports.useState(!1);return{openDialog:()=>n(!0),closeDialog:()=>n(!1),RenderDialog:({width:c,height:a,id:f,title:C,message:g,imgSrc:m,onCheck:h,onClose:l})=>{const p=e.exports.useMemo(()=>({width:c,height:a,left:`calc(50vw - ${c/2}px)`,top:`calc(50vh - ${a}px)`,borderRadius:4}),[c,a]),v=()=>{if(!!m)return t("img",{src:m,width:"52",height:"52",alt:"tip"})};return t(K,{children:r&&t("div",{id:f,style:p,children:t(B.Dialog,{title:C,message:g,icon:v(),buttons:[t(B.Button,{onClick:l,children:"\u53D6\u6D88"}),t(B.Button,{color:"blue",onClick:h,children:"\u786E\u8BA4"})]})})})}}};var ee="/my-desktop/assets/Drawing.9202b739.png";const Be=({width:r,height:n,onRef:s})=>{const o=["black","red","green","blue"],i=["canvas_save","canvas_clear","turn_left_flat","turn_right_flat"],c=["canvas_paint","canvas_eraser"],a=e.exports.useRef(null),f=e.exports.useRef(null),C=e.exports.useRef(null),[g,m]=e.exports.useState("black"),[h,l]=e.exports.useState(5),[p,v]=e.exports.useState(!1),[b,F]=e.exports.useState(!1),[d,y]=e.exports.useState(void 0),[D,V]=e.exports.useState(-1),[A,te]=e.exports.useState([]),q=u=>{if(!!a.current)return{x:u.offsetX,y:u.offsetY}},O=e.exports.useCallback(()=>{if(V(D+1),!a.current)return;const u=a.current;if(A.push(u.toDataURL()),te(A),!f.current||!C.current)return;const x=f.current,M=C.current;x.classList.add("active"),M.classList.remove("active")},[D,A]),H=e.exports.useCallback(u=>{const x=q(u);x&&(y(x),F(!0))},[]),W=e.exports.useCallback((u,x)=>{if(!a.current)return;const S=a.current.getContext("2d");S&&(S.strokeStyle=g,S.lineJoin="round",S.lineWidth=h,S.beginPath(),S.moveTo(u.x,u.y),S.lineTo(x.x,x.y),S.closePath(),S.stroke())},[h,g]),_=e.exports.useCallback(({x:u,y:x,width:M,height:S})=>{if(!a.current)return;const z=a.current.getContext("2d");z&&z.clearRect(u,x,M,S)},[]),Y=e.exports.useCallback(u=>{if(b){const x=q(u);d&&x&&(p?_({x:x.x-h/2,y:x.y-h/2,width:h,height:h}):(W(d,x),y(x)))}},[b,p,d,h,W,_]),w=e.exports.useCallback(()=>{F(!1),y(void 0),O()},[O]),k=e.exports.useCallback(()=>{F(!1),y(void 0)},[]);e.exports.useEffect(()=>{if(!a.current)return;const u=a.current;return u.addEventListener("mousedown",H),u.addEventListener("mousemove",Y),u.addEventListener("mouseup",w),u.addEventListener("mouseleave",k),()=>{u.removeEventListener("mousedown",H),u.removeEventListener("mousemove",Y),u.removeEventListener("mouseup",w),u.removeEventListener("mouseleave",k)}},[H,Y,w,k]);const[N,T]=e.exports.useState(!0),R=e.exports.useCallback(()=>{T(!N)},[N]),j=e.exports.useCallback((u,x)=>{const M=u.currentTarget;M.classList[1]||(v(x==="canvas_eraser"),M.classList.add("active"),M.parentNode.childNodes.forEach(S=>{!S.matches("svg")||S===M||S.classList.remove("active")}))},[]),J=e.exports.useCallback(u=>{l(u.target.value)},[]),G=e.exports.useCallback(([u,x,M])=>{const S=u.target;S.className.includes("active")||(m(M),S.classList.add("active"),S.parentNode.childNodes.forEach(P=>{!P.matches(x)||P===S||P.classList.remove("active")}))},[]),ae=e.exports.useCallback(u=>{m(u.target.value)},[]),{openDialog:Ce,closeDialog:we,RenderDialog:Pe}=tt(),[Q,ne]=e.exports.useState(!1),[Z,X]=e.exports.useState(!1);e.exports.useImperativeHandle(s,()=>({drawingCloseClick:()=>{if(D===-1)le(L(E({},ce),{type:!1}));else if(Q)return;X(!0)}})),e.exports.useEffect(()=>{Z?Q||(ye({title:"\u9000\u51FA\u5C06\u4E22\u5931\u8BE5\u753B\u5E03\uFF01",message:"\u786E\u8BA4\u9000\u51FA\u753B\u677F\uFF1F"}),ne(!0)):ye({title:"\u60A8\u786E\u5B9A\u8981\u6E05\u7A7A\u8BE5\u753B\u5E03\u5417\uFF1F",message:"\u4E00\u65E6\u6E05\u7A7A\u5C06\u65E0\u6CD5\u64A4\u56DE\u3002"})},[Z,Q]);const[ce,le]=e.exports.useContext($);e.exports.useEffect(()=>Q?Ce():we(),[we,Q,Ce]);const ke=e.exports.useCallback(()=>{if(!a.current)return;const u=a.current,x=u.getContext("2d");if(x){const M=x.globalCompositeOperation;x.globalCompositeOperation="destination-over",x.fillStyle="#fff",x.fillRect(0,0,r,n);const S=u.toDataURL("image/png");x.putImageData(x.getImageData(0,0,r,n),0,0),x.globalCompositeOperation=M;const P=document.createElement("a");document.body.appendChild(P),P.href=S,P.download="myPaint",P.target="_blank",P.click()}},[r,n]),ue=e.exports.useCallback(u=>{if(!a.current||!f.current||!C.current)return;const M=a.current.getContext("2d"),S=f.current,P=C.current;if(M){let z=-1;if(u==="back"&&D>=0)z=D-1,P.classList.add("active"),z<0&&S.classList.remove("active");else if(u==="go"&&D<A.length-1)z=D+1,S.classList.add("active"),z===A.length-1&&P.classList.remove("active");else return;M.clearRect(0,0,r,n);const pe=new Image;pe.src=A[z],pe.addEventListener("load",()=>{M.drawImage(pe,0,0)}),V(z)}},[A,D,r,n]),Ae=e.exports.useCallback(u=>{switch(u){case"canvas_clear":if(D===-1)return;ne(!0);break;case"canvas_save":ke();break;case"turn_left_flat":ue("back");break;case"turn_right_flat":ue("go");break}},[ke,ue,D]),[be,ye]=e.exports.useState({title:"\u60A8\u786E\u5B9A\u8981\u6E05\u7A7A\u8BE5\u753B\u5E03\u5417\uFF1F",message:"\u4E00\u65E6\u6E05\u7A7A\u5C06\u65E0\u6CD5\u64A4\u56DE\u3002"}),de=e.exports.useCallback(()=>{ne(!1),Z&&X(!1)},[ne,Z,X]),Te=e.exports.useCallback(()=>{if(_({x:0,y:0,width:r,height:n}),te([]),V(-1),de(),!f.current||!C.current)return;const u=f.current,x=C.current;u.classList.remove("active"),x.classList.remove("active"),Z&&(le(L(E({},ce),{type:!1})),X(!1))},[de,_,r,n,Z,X,ce,le]);return I(K,{children:[t("canvas",{id:"canvas",ref:a,height:n,width:r}),t("div",{id:"toolbox-open",style:{borderRadius:N?null:5},children:t(U,{type:N?"icon-upward_flat":"icon-downward_flat",style:{width:"100%",fontSize:32},clickEvent:R})}),t(je,{in:N,timeout:300,classNames:"toolbox",unmountOnExit:!0,children:I("div",{id:"toolbox",children:[t("span",{children:"Options"}),t("div",{className:"options",children:i.map((u,x)=>t(U,{svgRef:u==="turn_right_flat"?C:u==="turn_left_flat"?f:void 0,className:u,type:"icon-"+u,style:{fontSize:50},clickEvent:()=>Ae(u)},x+u))}),t("span",{children:"Toolbox"}),t("div",{className:"tools",children:c.map((u,x)=>t(U,{className:u==="canvas_eraser"?p?"active":"":p?"":"active",type:"icon-"+u,style:{fontSize:50},clickEvent:M=>j(M,u)},x+u))}),t("div",{className:"sizes",children:t("input",{style:{backgroundColor:p?"#ebeff4":g},type:"range",id:"range",name:"range",min:"1",max:"20",value:h,onChange:J})}),I("ol",{className:"colors",children:[o.map((u,x)=>t("li",{className:u===g?u+" active":u,onClick:M=>G([M,"li",u])},x+u)),t("input",{type:"color",value:g,onChange:ae,id:"currentColor"})]})]})}),t(Pe,{width:300,height:120,id:"clear-dialog",title:be.title,message:be.message,imgSrc:ee,onCheck:Te,onClose:de})]})};Be.defaultProps={width:window.innerWidth,height:window.innerHeight};const nt=e.exports.memo(()=>{const{open:r,close:n,RenderModal:s}=ve("DrawingView"),[o,,i,c]=e.exports.useContext($),[a,f]=e.exports.useState({width:1e3,height:600}),[C,g]=e.exports.useState(!1);e.exports.useEffect(()=>o.type?r():n(),[n,o,r]);const m=e.exports.useCallback(()=>{f(C?{width:1e3,height:600}:{width:-1,height:-1}),g(!C)},[C]),h=e.exports.useRef(),l=()=>{h.current&&h.current.drawingCloseClick()};return t(s,{data:{width:a.width,height:a.height,id:"DrawingView",moveId:"DrawingMove",isShow:i},children:I("div",{className:"drawing-wrapper",children:[t(B.TitleBar,{controls:!0,id:"DrawingMove",isFullscreen:C,onCloseClick:l,onMinimizeClick:()=>{c(!1)},onMaximizeClick:m,onResizeClick:m}),t(Be,{onRef:h,height:C?window.innerHeight-32:a.height,width:C?window.innerWidth:a.width})]})})}),Oe={x:0,y:0},st=({children:r,id:n,onDrag:s,onDragEnd:o})=>{const[i,c]=e.exports.useState({isDragging:!1,origin:Oe,translation:Oe}),a=e.exports.useCallback(({clientX:m,clientY:h})=>{c(l=>L(E({},l),{isDragging:!0,origin:{x:m,y:h}}))},[]),f=e.exports.useCallback(({clientX:m,clientY:h})=>{const l={x:m-i.origin.x,y:h-i.origin.y};c(p=>L(E({},p),{translation:l})),s({translation:l,id:n})},[i.origin,s,n]),C=e.exports.useCallback(()=>{c(m=>L(E({},m),{isDragging:!1})),o()},[o]);e.exports.useEffect(()=>{i.isDragging?(window.addEventListener("mousemove",f),window.addEventListener("mouseup",C)):(window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",C),c(m=>L(E({},m),{translation:{x:0,y:0}})))},[i.isDragging,f,C]);const g=e.exports.useMemo(()=>({cursor:i.isDragging?"-webkit-grabbing":"-webkit-grab",transform:`translate(${i.translation.x}px, ${i.translation.y}px)`,transition:i.isDragging?"none":"transform 500ms",zIndex:i.isDragging?2:1}),[i.isDragging,i.translation]);return t("div",{style:g,onMouseDown:a,children:r})};var oe="/my-desktop/assets/PrefApp.308a35b6.png",re="/my-desktop/assets/Chrome.b4d8139e.png",ie="/my-desktop/assets/Calculator.fe7118ef.png";const ot=({isVisible:r,dockItemClick:n})=>{const[s]=e.exports.useState([oe,re,ie,ee]),[o,i]=e.exports.useContext($),c=Fe.exports.range(s.length),[a,f]=e.exports.useState({dragging:!1,order:c,dragOrder:c,draggedIndex:null}),C=e.exports.useCallback(({translation:l,id:p})=>{f(d=>L(E({},d),{dragging:!0}));const v=Math.round(l.x/100),b=a.order.indexOf(p),F=a.order.filter(d=>d!==p);!Fe.exports.inRange(b+v,0,c.length)||(F.splice(b+v,0,p),f(d=>L(E({},d),{draggedIndex:p,dragOrder:F})))},[a.order,c.length]),g=e.exports.useCallback(()=>{f(l=>L(E({},l),{order:l.dragOrder,draggedIndex:null}))},[]),m=e.exports.useCallback(({keyCode:l})=>{l===27&&r&&i(!o)},[i,o,r]),h=e.exports.useCallback(({target:l})=>{if(!r)return;const p=document.getElementsByClassName("LaunchpadImg");for(let v=0;v<p.length;v++)if(p[v]===l)return;i(!o)},[i,o,r]);return e.exports.useEffect(()=>(window.addEventListener("click",h),window.addEventListener("keyup",m),()=>{window.removeEventListener("click",h),window.removeEventListener("keyup",m)}),[m,h,i,o]),t(K,{children:r&&t("div",{id:"Launchpad",children:t("div",{id:"LaunchpadItemWrapper",children:s.map((l,p)=>{const v=a.draggedIndex===p,b=a.dragOrder.indexOf(p)*200,F=a.order.indexOf(p)*200,y=(l.split("/").pop()||"").split(".")[0];return t(st,{id:p,onDrag:C,onDragEnd:g,children:I("div",{className:"LaunchpadItem",style:{left:v?F:b,transition:v?"none":"all 500ms"},children:[t("div",{className:"LaunchpadImg",style:{backgroundImage:"url("+l+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},onClick:()=>{a.dragging?f(D=>L(E({},D),{dragging:!1})):n(l,p)}}),t("span",{style:{color:"#fff"},children:y})]})},p)})})})})},rt=(r,n)=>{switch(n.name){case"change":return n.position;default:return r}},it=(r,n)=>{switch(n.name){case"change":return n.dockData;default:return r}};var at="/my-desktop/assets/Finder.ed608870.png",xe="/my-desktop/assets/Launchpad.a38577d7.png",ct="/my-desktop/assets/Terminal.ff1c0f4d.png";const $=e.exports.createContext([]),Re=68,lt=e.exports.memo(()=>{const[r]=e.exports.useState([at,xe,oe,re,ct,ie,ee]),[n,s]=e.exports.useReducer(rt,"bottom"),[o,i]=e.exports.useReducer(it,{length:Re,bigLength:Re*1.5,itemMargin:0,distance:5,isDockBig:!0}),[c,a]=e.exports.useState({type:!1,index:2}),[f,C]=e.exports.useState({type:!1,index:5}),[g,m]=e.exports.useState({type:!1,index:6}),[h,l]=e.exports.useState(!0),[p,v]=e.exports.useState(!0),[b,F]=e.exports.useState(!0),[d,y]=e.exports.useState(!1),[D,V]=e.exports.useState(null),A=e.exports.useCallback((w,k)=>{if(!O.current)return;const T=O.current.childNodes[k];switch(w){case re:if(D)D.close(),V(null);else{const R=window.open("http://www.google.com/","","width=1000,height=600,left=500,top=300,menubar=no,toolbar=no,status=no,scrollbars=yes");V(R)}return;case oe:if(!c.type){if(d){a(L(E({},c),{type:!c.type})),y(!1);return}T.classList.add("bounce"),setTimeout(()=>{a({type:!c.type,index:k}),T.classList.remove("bounce")},2500);return}l(!h);return;case ie:if(!f.type){if(d){C(L(E({},f),{type:!f.type})),y(!1);return}T.classList.add("bounce"),setTimeout(()=>{C({type:!f.type,index:k}),T.classList.remove("bounce")},2500);return}v(!p);return;case ee:if(!g.type){if(d){m(L(E({},g),{type:!g.type})),y(!1);return}T.classList.add("bounce"),setTimeout(()=>{m({type:!g.type,index:k}),T.classList.remove("bounce")},2500);return}F(!b);return;case xe:y(!d);return}},[c,h,f,p,g,b,d,D]),[te,q]=e.exports.useState({}),O=e.exports.useRef(null),H=e.exports.useCallback((w,k)=>{const N=k==="top"?w.offsetTop:w.offsetLeft;return w.offsetParent==null?N:N+H(w.offsetParent,k)},[]),W=e.exports.useCallback(({clientX:w,clientY:k})=>{if(!O.current)return;const N=O.current.childNodes;for(let T=0;T<N.length;T++){const R=N[T];let j,J;n==="bottom"?(j=R.offsetLeft+o.length/2-w,J=R.offsetTop+H(O.current,"top")+R.offsetHeight/2-k):n==="right"?(j=R.offsetTop+o.length/2-k,J=R.offsetLeft+H(O.current,"left")+R.offsetWidth/2-w):(j=R.offsetTop+o.length/2-k,J=R.offsetLeft+o.length/2-w);let G=1-Math.sqrt(j*j+J*J)/(N.length*o.length);G<o.length/o.bigLength&&(G=o.length/o.bigLength);const ae=o.bigLength/o.length;o.bigLength/o.length&&(R.style.height=R.style.width=o.length*ae*G+"px")}},[n,o.length,o.bigLength,H]),_=e.exports.useCallback(()=>{if(!O.current)return;q(n==="bottom"?{height:o.length*1+12,marginBottom:o.distance*1}:n==="top"?{height:o.length*1+12,marginTop:o.distance*1}:n==="left"?{width:o.length*1+12,marginLeft:o.distance*1}:{width:o.length*1+12,marginRight:o.distance*1});const w=O.current.childNodes;for(let k=0;k<w.length;k++){const N=w[k];N.style.width=N.style.height=o.length+"px"}},[n,o.length,o.distance]);e.exports.useEffect(_,[_]),e.exports.useEffect(()=>{const w=localStorage.getItem("dockData")||null;w&&i({name:"change",dockData:JSON.parse(w)});const k=localStorage.getItem("position")||null;k&&s({name:"change",position:JSON.parse(k)})},[]),e.exports.useEffect(()=>{if(!O.current)return;const w=O.current.childNodes;[c,f,g].forEach(k=>{if(k.index){const N=w[k.index];k.type?N.classList.add("active"):setTimeout(()=>N==null?void 0:N.classList.remove("active"),500)}}),c&&localStorage.getItem("SettingView")&&localStorage.removeItem("SettingView"),f&&localStorage.getItem("CalculatorView")&&localStorage.removeItem("CalculatorView"),g&&localStorage.getItem("DrawingView")&&localStorage.removeItem("DrawingView")},[c,f,g,n]),e.exports.useEffect(()=>{if(!O.current||!o.isDockBig)return;const w=O.current;return w.addEventListener("mouseenter",W),w.addEventListener("mousemove",W),w.addEventListener("mouseleave",_),()=>{w.removeEventListener("mouseenter",W),w.removeEventListener("mousemove",W),w.removeEventListener("mouseleave",_)}},[W,_,o.isDockBig]);const Y=e.exports.useMemo(()=>n==="top"||n==="bottom"?{marginLeft:o.itemMargin*1,marginRight:o.itemMargin*1}:{marginTop:o.itemMargin*1,marginBottom:o.itemMargin*1},[n,o.itemMargin]);return I(K,{children:[t($.Provider,{value:[c,a,h,l,n,s,o,i],children:t(Qe,{})}),t($.Provider,{value:[f,C,p,v],children:t(et,{})}),t($.Provider,{value:[g,m,b,F],children:t(nt,{})}),t($.Provider,{value:[d,y],children:t(ot,{isVisible:d,dockItemClick:A})}),t("footer",{className:n,id:"AppFooter",children:t("div",{id:"Docker",ref:O,className:n,style:te,children:r.map((w,k)=>t("div",{className:[xe,oe,re,ie,ee].includes(w)?"pointer DockItem "+n:n+" DockItem",style:E({backgroundImage:`url(${w})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},Y),onClick:()=>A(w,k)},k+w))})})]})});fe.locale("zh-cn");const ut=()=>{const r=e.exports.useRef(null),[n,s]=e.exports.useState(fe().format("M\u6708DD\u65E5 \u5468dd HH:mm")),[o,i]=e.exports.useState(!1),[c,a]=e.exports.useState(!1),[f,C]=e.exports.useState("Ada"),g=e.exports.useCallback(({target:m})=>{if(c||o){if(m.parentNode===r.current||m.parentNode.parentNode===r.current)return;i(!1),a(!1)}},[c,o]);return e.exports.useEffect(()=>{const m=setInterval(()=>{const h=fe().format("M\u6708DD\u65E5 \u5468dd HH:mm");s(h)},6e4);return window.addEventListener("click",g),()=>{window.removeEventListener("click",g),window.clearInterval(m)}},[g]),I("header",{className:"AppFinder",children:[I("div",{className:"FinderLeft",children:[t("div",{children:t(U,{type:"icon-apple",style:{fontSize:16}})}),I("div",{onClick:()=>i(!0),ref:r,className:"pointer",children:[c?t("input",{value:f,onChange:m=>C(m.target.value)}):t("span",{className:o?"text active":"text",children:f}),I("ul",{className:o?"menu active":"menu",children:[t("li",{onClick:()=>a(!0),children:"\u81EA\u5B9A\u4E49\u6807\u9898"}),t("div",{className:"line"}),t("li",{children:"\u4F60\u597D"}),t("li",{children:"\u6211\u662F\u5468\u5143\u8FBE"}),t("li",{children:"\u611F\u8C22\u6765\u5230\u8FD9\u91CC\u7684\u4F60"}),t("li",{children:"\u6211\u6B63\u5728\u627E\u5DE5\u4F5C"}),t("li",{children:"\u5982\u6709\u610F\u8BF7\u8054\u7CFB\u6211"}),t("li",{children:"\u70B9\u51FB\u53F3\u8FB9\u4EBA\u5934\u53EF\u67E5\u770B\u6211\u7684\u7B80\u5386"})]})]}),t("div",{children:"\u6587\u4EF6"}),t("div",{children:"\u7F16\u8F91"}),t("div",{children:"\u663E\u793A"}),t("div",{children:"\u524D\u5F80"}),t("div",{children:"\u7A97\u53E3"}),t("div",{children:"\u5E2E\u52A9"})]}),I("div",{className:"FinderRight",children:[t("a",{href:"https://adashuai5.github.io/resume-me/",children:t(U,{type:"icon-ren",style:{fontSize:22}})}),t("a",{href:"https://github.com/Adashuai5",children:t(U,{type:"icon-github",style:{fontSize:22}})}),t("div",{children:n})]})]})};const dt=()=>t("div",{className:"AppMain",children:t("div",{id:"main-view"})});const pt=()=>I("div",{className:"App",children:[t(ut,{}),t(dt,{}),t(lt,{})]});Le.render(t(e.exports.StrictMode,{children:t(pt,{})}),document.getElementById("root"));
