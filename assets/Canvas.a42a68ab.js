import{R as O,b as B,r as p,j as x,F as he,m as Q,c as Z}from"./index.6548d999.js";import{I as ee}from"./index.3393e666.js";import{F as Re,D as Ae}from"./Footer.63f98cf9.js";function se(){return se=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var f=arguments[i];for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&(r[t]=f[t])}return r},se.apply(this,arguments)}function Ce(r,i){if(r==null)return{};var f={},t=Object.keys(r),a,e;for(e=0;e<t.length;e++)a=t[e],!(i.indexOf(a)>=0)&&(f[a]=r[a]);return f}function ne(r,i){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},ne(r,i)}function be(r,i){r.prototype=Object.create(i.prototype),r.prototype.constructor=r,ne(r,i)}function Pe(r,i){return r.classList?!!i&&r.classList.contains(i):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+i+" ")!==-1}function we(r,i){r.classList?r.classList.add(i):Pe(r,i)||(typeof r.className=="string"?r.className=r.className+" "+i:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+i))}function Ee(r,i){return r.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Fe(r,i){r.classList?r.classList.remove(i):typeof r.className=="string"?r.className=Ee(r.className,i):r.setAttribute("class",Ee(r.className&&r.className.baseVal||"",i))}var me={disabled:!1},Ne=O.createContext(null),ke=function(i){return i.scrollTop},P="unmounted",S="exited",D="entering",y="entered",ae="exiting",N=function(r){be(i,r);function i(t,a){var e;e=r.call(this,t,a)||this;var o=a,n=o&&!o.isMounting?t.enter:t.appear,c;return e.appearStatus=null,t.in?n?(c=S,e.appearStatus=D):c=y:t.unmountOnExit||t.mountOnEnter?c=P:c=S,e.state={status:c},e.nextCallback=null,e}i.getDerivedStateFromProps=function(a,e){var o=a.in;return o&&e.status===P?{status:S}:null};var f=i.prototype;return f.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},f.componentDidUpdate=function(a){var e=null;if(a!==this.props){var o=this.state.status;this.props.in?o!==D&&o!==y&&(e=D):(o===D||o===y)&&(e=ae)}this.updateStatus(!1,e)},f.componentWillUnmount=function(){this.cancelNextCallback()},f.getTimeouts=function(){var a=this.props.timeout,e,o,n;return e=o=n=a,a!=null&&typeof a!="number"&&(e=a.exit,o=a.enter,n=a.appear!==void 0?a.appear:o),{exit:e,enter:o,appear:n}},f.updateStatus=function(a,e){if(a===void 0&&(a=!1),e!==null)if(this.cancelNextCallback(),e===D){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:B.findDOMNode(this);o&&ke(o)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===S&&this.setState({status:P})},f.performEnter=function(a){var e=this,o=this.props.enter,n=this.context?this.context.isMounting:a,c=this.props.nodeRef?[n]:[B.findDOMNode(this),n],l=c[0],d=c[1],m=this.getTimeouts(),g=n?m.appear:m.enter;if(!a&&!o||me.disabled){this.safeSetState({status:y},function(){e.props.onEntered(l)});return}this.props.onEnter(l,d),this.safeSetState({status:D},function(){e.props.onEntering(l,d),e.onTransitionEnd(g,function(){e.safeSetState({status:y},function(){e.props.onEntered(l,d)})})})},f.performExit=function(){var a=this,e=this.props.exit,o=this.getTimeouts(),n=this.props.nodeRef?void 0:B.findDOMNode(this);if(!e||me.disabled){this.safeSetState({status:S},function(){a.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:ae},function(){a.props.onExiting(n),a.onTransitionEnd(o.exit,function(){a.safeSetState({status:S},function(){a.props.onExited(n)})})})},f.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},f.safeSetState=function(a,e){e=this.setNextCallback(e),this.setState(a,e)},f.setNextCallback=function(a){var e=this,o=!0;return this.nextCallback=function(n){o&&(o=!1,e.nextCallback=null,a(n))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},f.onTransitionEnd=function(a,e){this.setNextCallback(e);var o=this.props.nodeRef?this.props.nodeRef.current:B.findDOMNode(this),n=a==null&&!this.props.addEndListener;if(!o||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],l=c[0],d=c[1];this.props.addEndListener(l,d)}a!=null&&setTimeout(this.nextCallback,a)},f.render=function(){var a=this.state.status;if(a===P)return null;var e=this.props,o=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=Ce(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return O.createElement(Ne.Provider,{value:null},typeof o=="function"?o(a,n):O.cloneElement(O.Children.only(o),n))},i}(O.Component);N.contextType=Ne;N.propTypes={};function L(){}N.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:L,onEntering:L,onEntered:L,onExit:L,onExiting:L,onExited:L};N.UNMOUNTED=P;N.EXITED=S;N.ENTERING=D;N.ENTERED=y;N.EXITING=ae;var Ie=N,$e=function(i,f){return i&&f&&f.split(" ").forEach(function(t){return we(i,t)})},te=function(i,f){return i&&f&&f.split(" ").forEach(function(t){return Fe(i,t)})},re=function(r){be(i,r);function i(){for(var t,a=arguments.length,e=new Array(a),o=0;o<a;o++)e[o]=arguments[o];return t=r.call.apply(r,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,c){var l=t.resolveArguments(n,c),d=l[0],m=l[1];t.removeClasses(d,"exit"),t.addClass(d,m?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,c)},t.onEntering=function(n,c){var l=t.resolveArguments(n,c),d=l[0],m=l[1],g=m?"appear":"enter";t.addClass(d,g,"active"),t.props.onEntering&&t.props.onEntering(n,c)},t.onEntered=function(n,c){var l=t.resolveArguments(n,c),d=l[0],m=l[1],g=m?"appear":"enter";t.removeClasses(d,g),t.addClass(d,g,"done"),t.props.onEntered&&t.props.onEntered(n,c)},t.onExit=function(n){var c=t.resolveArguments(n),l=c[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){var c=t.resolveArguments(n),l=c[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){var c=t.resolveArguments(n),l=c[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.resolveArguments=function(n,c){return t.props.nodeRef?[t.props.nodeRef.current,n]:[n,c]},t.getClassNames=function(n){var c=t.props.classNames,l=typeof c=="string",d=l&&c?c+"-":"",m=l?""+d+n:c[n],g=l?m+"-active":c[n+"Active"],_=l?m+"-done":c[n+"Done"];return{baseClassName:m,activeClassName:g,doneClassName:_}},t}var f=i.prototype;return f.addClass=function(a,e,o){var n=this.getClassNames(e)[o+"ClassName"],c=this.getClassNames("enter"),l=c.doneClassName;e==="appear"&&o==="done"&&l&&(n+=" "+l),o==="active"&&a&&ke(a),n&&(this.appliedClasses[e][o]=n,$e(a,n))},f.removeClasses=function(a,e){var o=this.appliedClasses[e],n=o.base,c=o.active,l=o.done;this.appliedClasses[e]={},n&&te(a,n),c&&te(a,c),l&&te(a,l)},f.render=function(){var a=this.props;a.classNames;var e=Ce(a,["classNames"]);return O.createElement(Ie,se({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(O.Component);re.defaultProps={classNames:""};re.propTypes={};var Me=re;const Be=()=>{const[r,i]=p.exports.useState(!1);return{openDialog:()=>i(!0),closeDialog:()=>i(!1),RenderDialog:({width:e,height:o,id:n,title:c,message:l,imgSrc:d,onCheck:m,onClose:g})=>{const _=p.exports.useMemo(()=>({width:e,height:o,left:`calc(50vw - ${e/2}px)`,top:`calc(50vh - ${o}px)`,borderRadius:4}),[e,o]),w=()=>{if(!!d)return x("img",{src:d,width:"52",height:"52",alt:"tip"})};return x(he,{children:r&&x("div",{id:n,style:_,children:x(Q.Dialog,{title:c,message:l,icon:w(),buttons:[x(Q.Button,{onClick:g,children:"\u53D6\u6D88"},n),x(Q.Button,{color:"blue",onClick:m,children:"\u786E\u8BA4"},n)]})})})}}},ge=["black","red","green","blue"],je=({width:r,height:i,onRef:f})=>{const t=["canvas_save","canvas_clear","turn_left_flat","turn_right_flat"],a=["canvas_paint","canvas_eraser"],e=p.exports.useRef(null),o=p.exports.useRef(null),n=p.exports.useRef(null),[c,l]=p.exports.useState(ge[0]),[d,m]=p.exports.useState(5),[g,_]=p.exports.useState(!1),[w,j]=p.exports.useState(!1),[U,F]=p.exports.useState(void 0),[h,W]=p.exports.useState(-1),[k,oe]=p.exports.useState([]),ie=s=>{if(!!e.current)return{x:s.offsetX,y:s.offsetY}},ce=p.exports.useCallback(()=>{if(W(h+1),!e.current)return;const s=e.current;if(k.push(s.toDataURL()),oe(k),!o.current||!n.current)return;const u=o.current,E=n.current;u.classList.add("active"),E.classList.remove("active")},[h,k]),G=p.exports.useCallback(s=>{const u=ie(s);u&&(F(u),j(!0))},[]),le=p.exports.useCallback((s,u)=>{if(!e.current)return;const v=e.current.getContext("2d");v&&(v.strokeStyle=c,v.lineJoin="round",v.lineWidth=d,v.beginPath(),v.moveTo(s.x,s.y),v.lineTo(u.x,u.y),v.closePath(),v.stroke())},[d,c]),I=p.exports.useCallback(({x:s,y:u,width:E,height:v})=>{if(!e.current)return;const b=e.current.getContext("2d");b&&b.clearRect(s,u,E,v)},[]),H=p.exports.useCallback(s=>{if(w){const u=ie(s);U&&u&&(g?I({x:u.x-d/2,y:u.y-d/2,width:d,height:d}):(le(U,u),F(u)))}},[w,g,U,d,le,I]),V=p.exports.useCallback(()=>{j(!1),F(void 0),ce()},[ce]),X=p.exports.useCallback(()=>{j(!1),F(void 0)},[]);p.exports.useEffect(()=>{if(!e.current)return;const s=e.current;return s.addEventListener("mousedown",G),s.addEventListener("mousemove",H),s.addEventListener("mouseup",V),s.addEventListener("mouseleave",X),()=>{s.removeEventListener("mousedown",G),s.removeEventListener("mousemove",H),s.removeEventListener("mouseup",V),s.removeEventListener("mouseleave",X)}},[G,H,V,X]);const[$,Se]=p.exports.useState(!0),De=p.exports.useCallback((s,u)=>{const E=s==null?void 0:s.currentTarget;E.classList[1]||(_(u==="canvas_eraser"),ue(E,"svg"))},[]),ue=(s,u)=>{var E;s==null||s.classList.add("active"),(E=s==null?void 0:s.parentNode)==null||E.childNodes.forEach(v=>{!v.matches(u)||v===s||v.classList.remove("active")})},Oe=p.exports.useCallback(([s,u,E])=>{const v=s.target;v!=null&&v.className.includes("active")||(l(E),ue(v,u))},[]),_e=p.exports.useCallback(s=>{l(s.target.value)},[]),{openDialog:pe,closeDialog:fe,RenderDialog:Te}=Be(),[R,M]=p.exports.useState(!1),[T,A]=p.exports.useState(!1);p.exports.useImperativeHandle(f,()=>({drawingCloseClick:()=>{if(h===-1)J({...z,type:!1});else if(R)return;A(!0)}})),p.exports.useEffect(()=>{T?R||(xe({title:"\u9000\u51FA\u5C06\u4E22\u5931\u8BE5\u753B\u5E03\uFF01",message:"\u786E\u8BA4\u9000\u51FA\u753B\u677F\uFF1F"}),M(!0)):xe({title:"\u60A8\u786E\u5B9A\u8981\u6E05\u7A7A\u8BE5\u753B\u5E03\u5417\uFF1F",message:"\u4E00\u65E6\u6E05\u7A7A\u5C06\u65E0\u6CD5\u64A4\u56DE\u3002"})},[T,R]);const[z,J]=p.exports.useContext(Re);p.exports.useEffect(()=>R?pe():fe(),[fe,R,pe]);const de=p.exports.useCallback(()=>{if(!e.current)return;const s=e.current,u=s.getContext("2d");if(u){const E=u.globalCompositeOperation;u.globalCompositeOperation="destination-over",u.fillStyle="#fff",u.fillRect(0,0,r,i);const v=s.toDataURL("image/png");u.putImageData(u.getImageData(0,0,r,i),0,0),u.globalCompositeOperation=E;const C=document.createElement("a");document.body.appendChild(C),C.href=v,C.download="myPaint",C.target="_blank",C.click()}},[r,i]),K=p.exports.useCallback(s=>{if(!e.current||!o.current||!n.current)return;const E=e.current.getContext("2d"),v=o.current,C=n.current;if(E){let b=-1;if(s==="back"&&h>=0)b=h-1,C.classList.add("active"),b<0&&v.classList.remove("active");else if(s==="go"&&h<k.length-1)b=h+1,v.classList.add("active"),b===k.length-1&&C.classList.remove("active");else return;E.clearRect(0,0,r,i);const q=new Image;q.src=k[b],q.addEventListener("load",()=>{E.drawImage(q,0,0)}),W(b)}},[k,h,r,i]),Le=p.exports.useCallback(s=>{switch(s){case"canvas_clear":if(h===-1)return;M(!0);break;case"canvas_save":de();break;case"turn_left_flat":K("back");break;case"turn_right_flat":K("go");break}},[de,K,h]),[ve,xe]=p.exports.useState({title:"\u60A8\u786E\u5B9A\u8981\u6E05\u7A7A\u8BE5\u753B\u5E03\u5417\uFF1F",message:"\u4E00\u65E6\u6E05\u7A7A\u5C06\u65E0\u6CD5\u64A4\u56DE\u3002"}),Y=p.exports.useCallback(()=>{M(!1),T&&A(!1)},[M,T,A]),ye=p.exports.useCallback(()=>{if(I({x:0,y:0,width:r,height:i}),oe([]),W(-1),Y(),!o.current||!n.current)return;const s=o.current,u=n.current;s.classList.remove("active"),u.classList.remove("active"),T&&(J({...z,type:!1}),A(!1))},[Y,I,r,i,T,A,z,J]);return Z(he,{children:[x("canvas",{id:"canvas",ref:e,height:i,width:r}),x("div",{id:"toolbox-open",style:{borderRadius:$?null:5},children:x(ee,{type:$?"icon-upward_flat":"icon-downward_flat",style:{width:"100%",fontSize:32},clickEvent:()=>{Se(!$)}})}),x(Me,{in:$,timeout:300,classNames:"toolbox",unmountOnExit:!0,children:Z("div",{id:"toolbox",children:[x("span",{children:"Options"}),x("div",{className:"options",children:t.map((s,u)=>x(ee,{svgRef:s==="turn_right_flat"?n:s==="turn_left_flat"?o:void 0,className:s,type:"icon-"+s,style:{fontSize:50},clickEvent:()=>Le(s)},u+s))}),x("span",{children:"Toolbox"}),x("div",{className:"tools",children:a.map((s,u)=>x(ee,{className:s==="canvas_eraser"?g?"active":"":g?"":"active",type:"icon-"+s,style:{fontSize:50},clickEvent:E=>De(E,s)},u+s))}),x("div",{className:"sizes",children:x("input",{style:{backgroundColor:g?"#ebeff4":c},type:"range",id:"range",name:"range",min:"1",max:"20",value:d,onChange:s=>{m(Number(s.target.value))}})}),Z("ol",{className:"colors",children:[ge.map(s=>x("li",{className:s===c?s+" active":s,onClick:u=>Oe([u,"li",s])},s)),x("input",{type:"color",value:c,onChange:_e,id:"currentColor"})]})]})}),x(Te,{width:300,height:120,id:"clear-dialog",title:ve.title,message:ve.message,imgSrc:Ae,onCheck:ye,onClose:Y})]})};je.defaultProps={width:window.innerWidth,height:window.innerHeight};export{je as default};