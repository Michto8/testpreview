import{r as C,dh as na,di as ke,dj as oa,dk as jt,dl as sa,dm as it,dn as Ae,dp as ct,_ as v,v as Ve,a as la,g as ia,f as xe,j as r,s as ee,i as ue,l as wt,n as Pt,m as $t,dq as Ot,o as ca,e as ua,dr as le,ds as da,h as pa,c as ma,w as Dt,x as Ft,G as z,bm as It,aq as re,I as mt,dt as fa,aC as zt,du as ha,b4 as bt,dv as ba,dw as va,cL as ga,dx as Nt,dy as De,dz as xa,ax as ft,cd as Ca,ch as ya,E as Rt,dA as Sa,dB as ka,aT as La,dC as ja,dD as Bt,dE as wa,dF as Pa,C as fe,dG as ce,d4 as $a,dH as Ia,dI as Na,dJ as Ra,dK as Ta,dL as Ma,bk as _a,bU as Ea,d8 as Aa,an as Va,dM as Ht,dN as Oa,dO as Da,dP as Wt,T as Fa,d9 as za,dQ as Ba,c5 as Ha,as as vt,az as Fe,dR as Wa,dS as qa,F as Re,dT as Ga,dU as Ua,dV as Qa,cc as Oe,bp as Ya,dW as Ka,dX as Xa,dY as Ja,dZ as Za,d_ as er,bg as tr,aF as ar,d$ as rr,bf as nr,e0 as or,au as sr,e1 as lr,e2 as ir,e3 as cr,e4 as Le,aS as ur,e5 as dr,e6 as pr,dd as mr}from"./index-2ba9b923.js";import{F as fr,P as hr,u as br,a as vr}from"./FidegeAccueil-319b8bfb.js";import{A as gr}from"./AppMain-106513ab.js";const xr={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Cr=xr,yr={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},Sr=yr;function kr(e,a,t=(o,c)=>o===c){return e.length===a.length&&e.every((o,c)=>t(o,a[c]))}const Lr=2;function qt(e,a){return e-a}function Tt(e,a){var t;const{index:o}=(t=e.reduce((c,p,m)=>{const u=Math.abs(a-p);return c===null||u<c.distance||u===c.distance?{distance:u,index:m}:c},null))!=null?t:{};return o}function Te(e,a){if(a.current!==void 0&&e.changedTouches){const t=e;for(let o=0;o<t.changedTouches.length;o+=1){const c=t.changedTouches[o];if(c.identifier===a.current)return{x:c.clientX,y:c.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function ze(e,a,t){return(e-a)*100/(t-a)}function jr(e,a,t){return(t-a)*e+a}function wr(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),o=t[0].split(".")[1];return(o?o.length:0)+parseInt(t[1],10)}const a=e.toString().split(".")[1];return a?a.length:0}function Pr(e,a,t){const o=Math.round((e-t)/a)*a+t;return Number(o.toFixed(wr(a)))}function Mt({values:e,newValue:a,index:t}){const o=e.slice();return o[t]=a,o.sort(qt)}function Me({sliderRef:e,activeIndex:a,setActive:t}){var o,c;const p=Ae(e.current);if(!((o=e.current)!=null&&o.contains(p.activeElement))||Number(p==null||(c=p.activeElement)==null?void 0:c.getAttribute("data-index"))!==a){var m;(m=e.current)==null||m.querySelector(`[type="range"][data-index="${a}"]`).focus()}t&&t(a)}function _e(e,a){return typeof e=="number"&&typeof a=="number"?e===a:typeof e=="object"&&typeof a=="object"?kr(e,a):!1}const $r={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Ir=e=>e;let Ee;function _t(){return Ee===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Ee=CSS.supports("touch-action","none"):Ee=!0),Ee}function Nr(e){const{"aria-labelledby":a,defaultValue:t,disabled:o=!1,disableSwap:c=!1,isRtl:p=!1,marks:m=!1,max:u=100,min:i=0,name:d,onChange:x,onChangeCommitted:y,orientation:E="horizontal",rootRef:D,scale:F=Ir,step:P=1,shiftStep:J=10,tabIndex:$,value:k}=e,L=C.useRef(),[A,M]=C.useState(-1),[B,H]=C.useState(-1),[ne,de]=C.useState(!1),I=C.useRef(0),[V,oe]=na({controlled:k,default:t??i,name:"Slider"}),U=x&&((n,s,l)=>{const h=n.nativeEvent||n,b=new h.constructor(h.type,h);Object.defineProperty(b,"target",{writable:!0,value:{value:s,name:d}}),x(b,s,l)}),W=Array.isArray(V);let R=W?V.slice().sort(qt):[V];R=R.map(n=>n==null?i:ke(n,i,u));const ye=m===!0&&P!==null?[...Array(Math.floor((u-i)/P)+1)].map((n,s)=>({value:i+P*s})):m||[],N=ye.map(n=>n.value),{isFocusVisibleRef:Q,onBlur:Be,onFocus:He,ref:We}=oa(),[je,pe]=C.useState(-1),O=C.useRef(),we=jt(We,O),Pe=jt(D,we),he=n=>s=>{var l;const h=Number(s.currentTarget.getAttribute("data-index"));He(s),Q.current===!0&&pe(h),H(h),n==null||(l=n.onFocus)==null||l.call(n,s)},be=n=>s=>{var l;Be(s),Q.current===!1&&pe(-1),H(-1),n==null||(l=n.onBlur)==null||l.call(n,s)},$e=(n,s)=>{const l=Number(n.currentTarget.getAttribute("data-index")),h=R[l],b=N.indexOf(h);let f=s;if(ye&&P==null){const X=N[N.length-1];f>X?f=X:f<N[0]?f=N[0]:f=f<h?N[b-1]:N[b+1]}if(f=ke(f,i,u),W){c&&(f=ke(f,R[l-1]||-1/0,R[l+1]||1/0));const X=f;f=Mt({values:R,newValue:f,index:l});let Z=l;c||(Z=f.indexOf(X)),Me({sliderRef:O,activeIndex:Z})}oe(f),pe(l),U&&!_e(f,V)&&U(n,f,l),y&&y(n,f)},qe=n=>s=>{var l;if(P!==null){const h=Number(s.currentTarget.getAttribute("data-index")),b=R[h];let f=null;(s.key==="ArrowLeft"||s.key==="ArrowDown")&&s.shiftKey||s.key==="PageDown"?f=Math.max(b-J,i):((s.key==="ArrowRight"||s.key==="ArrowUp")&&s.shiftKey||s.key==="PageUp")&&(f=Math.min(b+J,u)),f!==null&&($e(s,f),s.preventDefault())}n==null||(l=n.onKeyDown)==null||l.call(n,s)};sa(()=>{if(o&&O.current.contains(document.activeElement)){var n;(n=document.activeElement)==null||n.blur()}},[o]),o&&A!==-1&&M(-1),o&&je!==-1&&pe(-1);const Ge=n=>s=>{var l;(l=n.onChange)==null||l.call(n,s),$e(s,s.target.valueAsNumber)},Ie=C.useRef();let te=E;p&&E==="horizontal"&&(te+="-reverse");const j=({finger:n,move:s=!1})=>{const{current:l}=O,{width:h,height:b,bottom:f,left:X}=l.getBoundingClientRect();let Z;te.indexOf("vertical")===0?Z=(f-n.y)/b:Z=(n.x-X)/h,te.indexOf("-reverse")!==-1&&(Z=1-Z);let g;if(g=jr(Z,i,u),P)g=Pr(g,P,i);else{const ge=Tt(N,g);g=N[ge]}g=ke(g,i,u);let q=0;if(W){s?q=Ie.current:q=Tt(R,g),c&&(g=ke(g,R[q-1]||-1/0,R[q+1]||1/0));const ge=g;g=Mt({values:R,newValue:g,index:q}),c&&s||(q=g.indexOf(ge),Ie.current=q)}return{newValue:g,activeIndex:q}},S=it(n=>{const s=Te(n,L);if(!s)return;if(I.current+=1,n.type==="mousemove"&&n.buttons===0){Y(n);return}const{newValue:l,activeIndex:h}=j({finger:s,move:!0});Me({sliderRef:O,activeIndex:h,setActive:M}),oe(l),!ne&&I.current>Lr&&de(!0),U&&!_e(l,V)&&U(n,l,h)}),Y=it(n=>{const s=Te(n,L);if(de(!1),!s)return;const{newValue:l}=j({finger:s,move:!0});M(-1),n.type==="touchend"&&H(-1),y&&y(n,l),L.current=void 0,K()}),se=it(n=>{if(o)return;_t()||n.preventDefault();const s=n.changedTouches[0];s!=null&&(L.current=s.identifier);const l=Te(n,L);if(l!==!1){const{newValue:b,activeIndex:f}=j({finger:l});Me({sliderRef:O,activeIndex:f,setActive:M}),oe(b),U&&!_e(b,V)&&U(n,b,f)}I.current=0;const h=Ae(O.current);h.addEventListener("touchmove",S,{passive:!0}),h.addEventListener("touchend",Y,{passive:!0})}),K=C.useCallback(()=>{const n=Ae(O.current);n.removeEventListener("mousemove",S),n.removeEventListener("mouseup",Y),n.removeEventListener("touchmove",S),n.removeEventListener("touchend",Y)},[Y,S]);C.useEffect(()=>{const{current:n}=O;return n.addEventListener("touchstart",se,{passive:_t()}),()=>{n.removeEventListener("touchstart",se),K()}},[K,se]),C.useEffect(()=>{o&&K()},[o,K]);const Ue=n=>s=>{var l;if((l=n.onMouseDown)==null||l.call(n,s),o||s.defaultPrevented||s.button!==0)return;s.preventDefault();const h=Te(s,L);if(h!==!1){const{newValue:f,activeIndex:X}=j({finger:h});Me({sliderRef:O,activeIndex:X,setActive:M}),oe(f),U&&!_e(f,V)&&U(s,f,X)}I.current=0;const b=Ae(O.current);b.addEventListener("mousemove",S,{passive:!0}),b.addEventListener("mouseup",Y)},_=ze(W?R[0]:i,i,u),ve=ze(R[R.length-1],i,u)-_,Qe=(n={})=>{const s=ct(n),l={onMouseDown:Ue(s||{})},h=v({},s,l);return v({},n,{ref:Pe},h)},Ye=n=>s=>{var l;(l=n.onMouseOver)==null||l.call(n,s);const h=Number(s.currentTarget.getAttribute("data-index"));H(h)},Ke=n=>s=>{var l;(l=n.onMouseLeave)==null||l.call(n,s),H(-1)};return{active:A,axis:te,axisProps:$r,dragging:ne,focusedThumbIndex:je,getHiddenInputProps:(n={})=>{var s;const l=ct(n),h={onChange:Ge(l||{}),onFocus:he(l||{}),onBlur:be(l||{}),onKeyDown:qe(l||{})},b=v({},l,h);return v({tabIndex:$,"aria-labelledby":a,"aria-orientation":E,"aria-valuemax":F(u),"aria-valuemin":F(i),name:d,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(s=e.step)!=null?s:void 0,disabled:o},n,b,{style:v({},Cr,{direction:p?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Qe,getThumbProps:(n={})=>{const s=ct(n),l={onMouseOver:Ye(s||{}),onMouseLeave:Ke(s||{})};return v({},n,s,l)},marks:ye,open:B,range:W,rootRef:Pe,trackLeap:ve,trackOffset:_,values:R,getThumbStyle:n=>({pointerEvents:A!==-1&&A!==n?"none":void 0})}}const Rr=e=>!e||!Ve(e),Tr=Rr;function Mr(e){return ia("MuiSlider",e)}const _r=la("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),G=_r,Er=e=>{const{open:a}=e;return{offset:xe(a&&G.valueLabelOpen),circle:G.valueLabelCircle,label:G.valueLabelLabel}};function Ar(e){const{children:a,className:t,value:o}=e,c=Er(e);return a?C.cloneElement(a,{className:xe(a.props.className)},r.jsxs(C.Fragment,{children:[a.props.children,r.jsx("span",{className:xe(c.offset,t),"aria-hidden":!0,children:r.jsx("span",{className:c.circle,children:r.jsx("span",{className:c.label,children:o})})})]})):null}const Vr=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],Or=da();function Et(e){return e}const Dr=ee("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[`color${ue(t.color)}`],t.size!=="medium"&&a[`size${ue(t.size)}`],t.marked&&a.marked,t.orientation==="vertical"&&a.vertical,t.track==="inverted"&&a.trackInverted,t.track===!1&&a.trackFalse]}})(({theme:e})=>{var a;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${G.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${G.dragging}`]:{[`& .${G.thumb}, & .${G.track}`]:{transition:"none"}},variants:[...Object.keys(((a=e.vars)!=null?a:e).palette).filter(t=>{var o;return((o=e.vars)!=null?o:e).palette[t].main}).map(t=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),Fr=ee("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,a)=>a.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),zr=ee("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,a)=>a.track})(({theme:e})=>{var a;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((a=e.vars)!=null?a:e).palette).filter(t=>{var o;return((o=e.vars)!=null?o:e).palette[t].main}).map(t=>({props:{color:t,track:"inverted"},style:v({},e.vars?{backgroundColor:e.vars.palette.Slider[`${t}Track`],borderColor:e.vars.palette.Slider[`${t}Track`]}:v({backgroundColor:wt(e.palette[t].main,.62),borderColor:wt(e.palette[t].main,.62)},e.applyStyles("dark",{backgroundColor:Pt(e.palette[t].main,.5)}),e.applyStyles("dark",{borderColor:Pt(e.palette[t].main,.5)})))}))]}}),Br=ee("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.thumb,a[`thumbColor${ue(t.color)}`],t.size!=="medium"&&a[`thumbSize${ue(t.size)}`]]}})(({theme:e})=>{var a;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${G.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[...Object.keys(((a=e.vars)!=null?a:e).palette).filter(t=>{var o;return((o=e.vars)!=null?o:e).palette[t].main}).map(t=>({props:{color:t},style:{[`&:hover, &.${G.focusVisible}`]:v({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${$t(e.palette[t].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${G.active}`]:v({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)}`}:{boxShadow:`0px 0px 0px 14px ${$t(e.palette[t].main,.16)}`})}})),{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}}]}}),Hr=ee(Ar,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,a)=>a.valueLabel})(({theme:e})=>v({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${G.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${G.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),Wr=ee("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Ot(e)&&e!=="markActive",overridesResolver:(e,a)=>{const{markActive:t}=e;return[a.mark,t&&a.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),qr=ee("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Ot(e)&&e!=="markLabelActive",overridesResolver:(e,a)=>a.markLabel})(({theme:e})=>v({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),Gr=e=>{const{disabled:a,dragging:t,marked:o,orientation:c,track:p,classes:m,color:u,size:i}=e,d={root:["root",a&&"disabled",t&&"dragging",o&&"marked",c==="vertical"&&"vertical",p==="inverted"&&"trackInverted",p===!1&&"trackFalse",u&&`color${ue(u)}`,i&&`size${ue(i)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",a&&"disabled",i&&`thumbSize${ue(i)}`,u&&`thumbColor${ue(u)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return pa(d,Mr,m)},Ur=({children:e})=>e,Qr=C.forwardRef(function(a,t){var o,c,p,m,u,i,d,x,y,E,D,F,P,J,$,k,L,A,M,B,H,ne,de,I;const V=Or({props:a,name:"MuiSlider"}),oe=ca(),{"aria-label":U,"aria-valuetext":W,"aria-labelledby":R,component:ye="span",components:N={},componentsProps:Q={},color:Be="primary",classes:He,className:We,disableSwap:je=!1,disabled:pe=!1,getAriaLabel:O,getAriaValueText:we,marks:Pe=!1,max:he=100,min:be=0,orientation:$e="horizontal",shiftStep:qe=10,size:Ge="medium",step:Ie=1,scale:te=Et,slotProps:j,slots:S,track:Y="normal",valueLabelDisplay:se="off",valueLabelFormat:K=Et}=V,Ue=ua(V,Vr),_=v({},V,{isRtl:oe,max:he,min:be,classes:He,disabled:pe,disableSwap:je,orientation:$e,marks:Pe,color:Be,size:Ge,step:Ie,shiftStep:qe,scale:te,track:Y,valueLabelDisplay:se,valueLabelFormat:K}),{axisProps:ve,getRootProps:Qe,getHiddenInputProps:Ye,getThumbProps:Ke,open:Ct,active:Xe,axis:Se,focusedThumbIndex:n,range:s,dragging:l,marks:h,values:b,trackOffset:f,trackLeap:X,getThumbStyle:Z}=Nr(v({},_,{rootRef:t}));_.marked=h.length>0&&h.some(w=>w.label),_.dragging=l,_.focusedThumbIndex=n;const g=Gr(_),q=(o=(c=S==null?void 0:S.root)!=null?c:N.Root)!=null?o:Dr,ge=(p=(m=S==null?void 0:S.rail)!=null?m:N.Rail)!=null?p:Fr,yt=(u=(i=S==null?void 0:S.track)!=null?i:N.Track)!=null?u:zr,St=(d=(x=S==null?void 0:S.thumb)!=null?x:N.Thumb)!=null?d:Br,kt=(y=(E=S==null?void 0:S.valueLabel)!=null?E:N.ValueLabel)!=null?y:Hr,Je=(D=(F=S==null?void 0:S.mark)!=null?F:N.Mark)!=null?D:Wr,Ze=(P=(J=S==null?void 0:S.markLabel)!=null?J:N.MarkLabel)!=null?P:qr,Lt=($=(k=S==null?void 0:S.input)!=null?k:N.Input)!=null?$:"input",et=(L=j==null?void 0:j.root)!=null?L:Q.root,Yt=(A=j==null?void 0:j.rail)!=null?A:Q.rail,tt=(M=j==null?void 0:j.track)!=null?M:Q.track,at=(B=j==null?void 0:j.thumb)!=null?B:Q.thumb,rt=(H=j==null?void 0:j.valueLabel)!=null?H:Q.valueLabel,Kt=(ne=j==null?void 0:j.mark)!=null?ne:Q.mark,Xt=(de=j==null?void 0:j.markLabel)!=null?de:Q.markLabel,Jt=(I=j==null?void 0:j.input)!=null?I:Q.input,Zt=le({elementType:q,getSlotProps:Qe,externalSlotProps:et,externalForwardedProps:Ue,additionalProps:v({},Tr(q)&&{as:ye}),ownerState:v({},_,et==null?void 0:et.ownerState),className:[g.root,We]}),ea=le({elementType:ge,externalSlotProps:Yt,ownerState:_,className:g.rail}),ta=le({elementType:yt,externalSlotProps:tt,additionalProps:{style:v({},ve[Se].offset(f),ve[Se].leap(X))},ownerState:v({},_,tt==null?void 0:tt.ownerState),className:g.track}),nt=le({elementType:St,getSlotProps:Ke,externalSlotProps:at,ownerState:v({},_,at==null?void 0:at.ownerState),className:g.thumb}),aa=le({elementType:kt,externalSlotProps:rt,ownerState:v({},_,rt==null?void 0:rt.ownerState),className:g.valueLabel}),ot=le({elementType:Je,externalSlotProps:Kt,ownerState:_,className:g.mark}),st=le({elementType:Ze,externalSlotProps:Xt,ownerState:_,className:g.markLabel}),ra=le({elementType:Lt,getSlotProps:Ye,externalSlotProps:Jt,ownerState:_});return r.jsxs(q,v({},Zt,{children:[r.jsx(ge,v({},ea)),r.jsx(yt,v({},ta)),h.filter(w=>w.value>=be&&w.value<=he).map((w,T)=>{const lt=ze(w.value,be,he),Ne=ve[Se].offset(lt);let ae;return Y===!1?ae=b.indexOf(w.value)!==-1:ae=Y==="normal"&&(s?w.value>=b[0]&&w.value<=b[b.length-1]:w.value<=b[0])||Y==="inverted"&&(s?w.value<=b[0]||w.value>=b[b.length-1]:w.value>=b[0]),r.jsxs(C.Fragment,{children:[r.jsx(Je,v({"data-index":T},ot,!Ve(Je)&&{markActive:ae},{style:v({},Ne,ot.style),className:xe(ot.className,ae&&g.markActive)})),w.label!=null?r.jsx(Ze,v({"aria-hidden":!0,"data-index":T},st,!Ve(Ze)&&{markLabelActive:ae},{style:v({},Ne,st.style),className:xe(g.markLabel,st.className,ae&&g.markLabelActive),children:w.label})):null]},T)}),b.map((w,T)=>{const lt=ze(w,be,he),Ne=ve[Se].offset(lt),ae=se==="off"?Ur:kt;return r.jsx(ae,v({},!Ve(ae)&&{valueLabelFormat:K,valueLabelDisplay:se,value:typeof K=="function"?K(te(w),T):K,index:T,open:Ct===T||Xe===T||se==="on",disabled:pe},aa,{children:r.jsx(St,v({"data-index":T},nt,{className:xe(g.thumb,nt.className,Xe===T&&g.active,n===T&&g.focusVisible),style:v({},Ne,Z(T),nt.style),children:r.jsx(Lt,v({"data-index":T,"aria-label":O?O(T):U,"aria-valuenow":te(w),"aria-labelledby":R,"aria-valuetext":we?we(te(w),T):W,value:b[T]},ra))}))}),T)})]}))}),Yr=Qr,Kr=ma(r.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z"}),"CreditScoreTwoTone");var gt={},Xr=Ft;Object.defineProperty(gt,"__esModule",{value:!0});var Gt=gt.default=void 0,Jr=Xr(Dt()),Zr=r,en=(0,Jr.default)((0,Zr.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");Gt=gt.default=en;const ut="InlineCalendarClassComponent",Ce={container:`${ut}-container`,btn:`${ut}-btn`,label:`${ut}-label`},tn=ee(z)(({theme:e})=>({flexGrow:1,display:"flex",marginTop:1.5,padding:0,gap:1,alignItems:"center","& .title":{textTransform:"capitalize",textAlign:"center",fontWeight:"500"},[`& .${Ce.btn}`]:{fontSize:"14px",padding:6,alignContent:"center",alignItems:"center",flexWrap:"nowrap",display:"flex",[e.breakpoints.down("md")]:{fontSize:"0.8rem",width:"34px",height:"34px"},"&:hover":{backgroundColor:It[100]},"&.selected":{backgroundColor:It[500]+" !important",color:"white"},"&.today":{backgroundColor:Sr[300],color:"white"}},[`& .${Ce.label}`]:{flexWrap:"wrap",justifyContent:"center",flexDirection:"column"}})),At=(e,a)=>{if(!e||!a)return!1;const t=ga(Nt(e),Nt(a));return Math.floor(t)===0},dt=(e,a)=>{const t=De.startOfWeek(e);return re.map(a,o=>De.addDays(t,o))};function an({days:e,onChange:a,date:t,showOnlyRange:o}){const[c,p]=C.useState({dateBase:t,dates:dt(t||new Date,e)}),m=c.dateBase,u=d=>{p(x=>({...x,dateBase:d,dates:dt(d,e)}))};C.useEffect(()=>{p(d=>({...d,dateBase:t,...t&&!re.find(d.dates,x=>x.getDate()===(t==null?void 0:t.getDate()))&&{dates:dt(t||new Date,e)}}))},[t,e]);function i(d){u(d==="+"?De.addWeeks(m||new Date,1):De.subWeeks(m||new Date,1))}return r.jsxs(tn,{children:[r.jsx(mt,{className:Ce.btn,onClick:d=>i("-"),size:"large",children:r.jsx(Gt,{})}),r.jsxs("div",{style:{flexGrow:1},children:[!o&&r.jsx("div",{className:"title",children:!!t&&fa(t)}),r.jsx(zt,{container:!0,spacing:0,wrap:"nowrap",justifyContent:"center",style:{marginTop:"-4px"},children:re.map(c.dates,(d,x)=>r.jsx(rn,{dayPrint:d,onChange:a,selectedDate:t},x))})]}),r.jsx(mt,{className:Ce.btn,onClick:d=>i("+"),size:"large",children:r.jsx(ha,{})})]})}const rn=({dayPrint:e,selectedDate:a,onChange:t})=>{const o=At(e,new Date),c=a&&At(e,a);return r.jsx(zt,{item:!0,children:r.jsx(mt,{className:bt(Ce.btn,"btnCalendar",{today:o&&!c,selected:c}),onClick:p=>t(e),size:"large",children:r.jsxs("div",{className:Ce.label,children:[r.jsx("span",{className:"jour",style:{flexBasis:"100%"},children:ba(e)}),r.jsx("span",{className:"day",children:va(e)})]})})})},nn={COLUMN_WIDTH:100,COLUMN_UNIT:"%",ROW_HEIGHT:175,md:{COLUMN_WIDTH:100,COLUMN_UNIT:"%",ROW_HEIGHT:75}},on=({fieldDateTop:e,className:a,data:t,onSelect:o,onNewCommande:c,onOpenModalSearchOrder:p})=>{const[m]=xa(),u=C.useCallback(x=>{e&&t.actions.onSetFilterValue(ft(e,Ca(x),"="))},[e]),i=t.visualState.query?re.find(t.visualState.query.rules,x=>x.field===e):null,d=C.useMemo(()=>i!=null&&i.value?ya(i==null?void 0:i.value):null,[i==null?void 0:i.value]);return r.jsxs(r.Fragment,{children:[r.jsxs(z,{display:"flex",gap:1,sx:{p:.5,width:"100%",justifyContent:"flex-end",alignItems:"stretch"},children:[r.jsx(Rt,{title:"Nouvelle commande",children:r.jsx(Sa,{variant:"contained",color:"secondary",onClick:x=>c()})}),r.jsx(Rt,{title:"Rechercher commande",children:r.jsx(ka,{size:"large",variant:"contained",color:"primary",sx:{bgcolor:"primary.light",color:"primary.contrastText"},onClick:x=>p()})}),e&&r.jsx(an,{days:m,date:d,onChange:u})]}),r.jsx(La,{onSelect:o,disableFavorite:!0,HeaderComponent:null,state:t,ItemComponent:ja,ItemMeasureCard:nn,IconComponent:Bt,labelSearch:"client",placeholderSearch:"placeholderClient"})]})};var xt={},sn=Ft;Object.defineProperty(xt,"__esModule",{value:!0});var Ut=xt.default=void 0,ln=sn(Dt()),cn=r,un=(0,ln.default)((0,cn.jsx)("path",{d:"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"}),"Receipt");Ut=xt.default=un;const me="afficheTauxMarge",ie={root:`${me}-root`,thumb:`${me}-thumb`,active:`${me}-active`,valueLabel:`${me}-valueLabel`,track:`${me}-track`,rail:`${me}-rail`,vcMarge:`${me}-vcMarge`},dn=ee(z)(({theme:e})=>({[`&.${ie.vcMarge}`]:{cursor:"pointer","& > span":{display:"none"},"&.montanttaux span.taux , &.taux span.taux":{display:"block"},"&.montanttaux span.montant , &.montant span.montant":{display:"block"},"&.montanttaux span.taux":{marginLeft:.5}}})),pt=["montant","taux","montanttaux"];function pn(e){const a=pt.indexOf(e);return pt[a>=pt.length-1?0:a+1]}const mn=Yr,fn=({rangeMin:e=0,rangeMax:a=100,rangeStep:t=1,className:o,scaleColor:c,objectifMarge:p,montantMarge:m,tauxMarge:u,typeAffichageMarge:i,onChangeAffichageMarge:d,onChangeTaux:x,disabled:y})=>r.jsxs(dn,{columnGap:1,flexWrap:"wrap",display:"flex",alignItems:"center",className:bt(o,ie.vcMarge,i),children:[r.jsx(wa,{style:{width:"2rem",height:"2rem",color:c?c():"inherit"},onClick:E=>d(pn(i)),children:r.jsx(Pa,{})}),r.jsxs(z,{display:"flex",gap:.4,flexDirection:"row",alignItems:"center",children:[r.jsxs(fe,{className:"montant",component:"span",variant:"subtitle2",color:"inherit",children:[ce(m,2,"€"),"/ ",ce(u,2,"%")]}),p&&r.jsxs(z,{display:"flex",alignItems:"center",children:[r.jsx(Bt,{fontSize:"inherit"}),r.jsx(fe,{className:"montant",component:"span",sx:{display:"inlineFlex",alignItems:"center"},variant:"subtitle2",color:"inherit",children:ce(p,2,"%")})]})]}),x&&u!==void 0&&r.jsx(z,{m:2,style:{width:"70%",color:c?c():"inherit"},children:r.jsx(mn,{disabled:!0,value:u,"aria-labelledby":"discrete-slider",onChange:(E,D)=>{},valueLabelDisplay:"auto",step:t,min:e,max:a,classes:{root:ie.root,thumb:ie.thumb,active:ie.active,valueLabel:ie.valueLabel,track:ie.track,rail:ie.rail}})})]}),hn=C.memo(fn),bn=({context:e,cde:a,sessionId:t,className:o,...c})=>{const{totaux:p,NOCOM:m,NOMCLI:u,noSave:i,NumeroBL:d,numseq:x,indice:y,CLI_OBJ_MARGE:E,CLI_ENCOURS:D,CLI_CREDIT:F,type:P,unconfirm:J}=a,{getParametreBorneZone1:$}=$a(),k=Ia(y),L=$("PE_MARGE_ENT"),{typeAffichageMarge:A,updateAffichageTauxMarge:M}=Na(),B=p.MontantMarge,H=p.TauxMarge;return y?r.jsxs("div",{className:o,children:[r.jsxs(z,{display:"flex",flexDirection:"column",flexGrow:1,children:[r.jsxs(fe,{noWrap:!0,variant:"subtitle1",color:"inherit",children:[u," "]}),r.jsxs("div",{className:"info",children:[r.jsxs(z,{display:"flex",alignItems:"center",justifyContent:"flex-start",children:[r.jsx(Ra,{typeEntete:P,appBar:!0,fontSize:"medium"}),r.jsx(fe,{component:"span",variant:"subtitle2",color:"inherit",children:Ta(P==="B"&&d?(d==null?void 0:d.toString())||"":(m==null?void 0:m.toString())||"")||"Nouvelle"})]}),r.jsxs(z,{pl:2,display:"flex",alignItems:"center",children:[r.jsx(Ma,{}),r.jsx(fe,{component:"span",variant:"subtitle2",color:"inherit",children:ce(p.totalHt,2)})]}),r.jsxs(z,{pl:2,display:"flex",alignItems:"center",children:[r.jsx(Ut,{}),r.jsx(fe,{component:"span",variant:"subtitle2",color:"inherit",children:ce(p.totalHtR,2)})]}),(!!D||!!F)&&r.jsxs(z,{pl:2,display:"flex",alignItems:"center",children:[r.jsx(Kr,{}),r.jsx(fe,{component:"span",variant:"subtitle2",color:"inherit",children:F!=null?`${ce(D,2)} / ${ce(F,2,"€")}`:ce(D,2,"€")})]}),L&&r.jsx(hn,{disabled:!0,objectifMarge:E,typeAffichageMarge:A,montantMarge:B,tauxMarge:H??0,onChangeAffichageMarge:M,className:""})]})]}),r.jsx(_a,{disabled:!!i,color:"secondary",className:bt("lock",{noSave:i}),onClick:k,children:r.jsx(Ea,{})})]}):null},Vt="CommandeBar",ht={infoCommande:`${Vt}-infoCommande`,resumeCommande:`${Vt}-resumeCommande`},vn=ee(Aa)(({theme:e})=>({[`& .${ht.infoCommande}`]:{flexGrow:1,maxWidth:"calc(100% - 60px)",marginBottom:"4px",padding:e.spacing(0,1),display:"flex","& .lock":{marginTop:4,"&.noSave":{display:"none"}},"& .info":{display:"flex",justifyContent:"flex-start"},"& +$resumeCommande":{display:"none"}},[`& .${ht.resumeCommande}`]:{alignItems:"center",flexGrow:1,display:"flex","&  ~ .infoCommande":{background:"red"},"& .title":{flexGrow:1},"& .fabButton":{marginTop:8,marginRight:8}}})),gn=({sessionId:e})=>{const a=Va(),{count:t}=Ht(a,e),o=Oa(e);return r.jsx(vn,{sx:{bgcolor:(o==null?void 0:o.type)==="B"?Da:Wt},children:r.jsxs(Fa,{disableGutters:!0,children:[r.jsx(za,{badgeContent:t}),r.jsx(bn,{cde:o,context:a,sessionId:e,className:ht.infoCommande})]})})},Qt=(e,a="beginsWith")=>Ba([ft("VEN_CDE",e,a),ft("VEN_BL",e,a)]),xn=(e,a,t={suspense:!1,useErrorBoundary:!1,cacheTime:-1})=>Ha(["PreparationFidegeByVenCdeRemote",e.getQueryKey(),a],()=>vt().VenteCarreauMethods().ListeVentes({variables:{mode:"SCAN",recherche:{rbp:1,qbRules:Qt(""+a)},context:e.current}}),t);function Cn({disableSwitchPersonnel:e,modalOpen:a,className:t,contextGlobal:o,codePersonnel:c,nomPersonnel:p,dataCommandes:m,onNavigateListCommande:u,onNavigateListArticles:i,onChangePersonnel:d,onSelectOrder:x,onNotFoundOrder:y,onOpenModalSearchOrder:E}){const D=C.useRef(null),F=C.useCallback($=>{let k=null,L=$.match(/(\]C0\.CC)([0-9]*)/);return L&&L[2]?k=Fe("VEN_NUMSEQ",L[2],"="):k=Fe("VEN_CDE",+$,"="),vt().VenteCarreauMethods().ListeVentes({variables:{mode:"LIST",context:o.current,recherche:{rbp:1,qbRules:k}}}).then(({err:A,res:M})=>({err:A,res:re.head(M==null?void 0:M.result)||null})).catch(A=>({err:null,res:null}))},[o]),P=($,k)=>{$&&x($)},J=Wa(!a);return r.jsxs(fr,{className:t,children:[r.jsx(hr,{className:"personnel",onChange:d,disabled:e,typeBorne:o.current.typeBorne,title:p,code:c,lookupProps:{disabledClear:!0}}),m.visualState.query&&r.jsx(qa,{ref:D,className:"filtresQuick",readOnly:!0,fields:m.Recherches.fields,query:m.visualState.query,onQueryChange:m.actions.onUpdateQuery}),r.jsxs(z,{display:"flex",alignItems:"center",flexDirection:"row",className:"scanContainer",children:[r.jsx(Re,{className:"grid-actions kb-scan",color:"info",variant:"contained",size:"large",onClick:$=>E(),children:r.jsx(Ga,{color:"inherit"})}),r.jsx(Ua,{virtualKeyboard:[],sxProps:{height:80},placeholder:"Numero de commande",autoFocus:!0,ref:J,disabled:!1,onError:($,k)=>y(+(k||0)),onScanSuccess:P,lecture:F,rootClassName:"",disableRemote:!1,type:"text",showClearButton:!0,disabledPadding:!0})]}),r.jsxs(z,{className:"navigate",flexGrow:1,alignItems:"stretch",justifyContent:"space-between",children:[r.jsx(Re,{className:"clear",startIcon:r.jsx(Qa,{}),color:"error",fullWidth:!0,variant:"contained",size:"large",onClick:$=>m.actions.onClearAll(),children:Oe("clearFilters")}),r.jsx(Re,{className:"new nextstep",startIcon:r.jsx(Ya,{}),color:"secondary",fullWidth:!0,variant:"outlined",size:"large",onClick:$=>{i()},children:Oe("newOrder")}),r.jsx(Re,{className:"orderList nextstep",startIcon:r.jsx(Ka,{}),color:"success",fullWidth:!0,variant:"outlined",size:"large",onClick:$=>{u()},children:Oe("orderList")})]})]})}function yn({context:e,onFoundOrder:a,onNotFoundOrder:t,onCancel:o}){const[c,p]=C.useState(""),[m,u]=C.useState(""),i=xn(e,m,{enabled:!!m});return C.useEffect(()=>{var d,x;if(i.data){const y=((d=i.data.res)==null?void 0:d.result)&&re.head((x=i.data.res)==null?void 0:x.result)||null;y?a(y):t(m)}},[i.data]),r.jsxs(r.Fragment,{children:[r.jsx(Xa,{onClose:function(d){o()},onSave:u,disableCalc:!0,label:Oe("orderNumber")||"COMMA",maximumFractionDigits:0,state:c,updateState:p}),r.jsx(Ja,{visible:i.isInitialLoading})]})}const Sn=(e,a="commande")=>{if(a==="commande"){let t=e.match(/(\]C0\.CC)([0-9]*)/);return t&&t[2]?{fast:!0,qbRules:Fe("VEN_NUMSEQ",t[2],"=")}:(t=e.match(/(\]C0)([0-9A-Z]*)/),t&&t[2]?{fast:!0,qbRules:Fe("VEN_CDE",t[2],"=")}:{fast:!0,qbRules:Qt(e,"=")})}return{fast:!1,qbRules:null}},kn=({session:e,...a})=>{const t=e.sessionId,o=Za(t),{openExistingCommande:c,openModalClient:p}=er(),{errorMessage:m}=tr(),{t:u}=ar(),[i]=rr(),{getParametreBorne:d,getParametreBorneZone1:x}=nr(),{operation:y,codePersonnel:E,nomPersonnel:D}=or(t),F=sr(),P=lr(),{count:J}=Ht(P,t),$=I=>{F.showError({i8nmessage:I,i8ntitle:u("error"),dialogProps:{maxWidth:"md",fullWidth:!0}})},k=ir(t),L=C.useCallback(I=>{c(I,i)},[i]),{parseScan:A}=br("regexVenteCarreau","(]C0.*)"),M=C.useCallback(async I=>{const V=A(I);if(V){I.clearCb&&I.clearCb();const{qbRules:oe,fast:U}=Sn(V.cbValue,"commande"),W=await vt().VenteCarreauMethods().ListeVentes({variables:{recherche:{qbRules:oe,rbp:1,page:1},context:null,mode:"SCAN"}});return W&&W.res&&re.size(W.res.result)>0?(L(re.head(W.res.result)),!0):(m(u("invalidBarcode")),!1)}else return I.updateQuery(I.val),!0},[L]),{data:B,fieldDateTop:H}=cr(!o&&y.step===Le.LIST,d("PE_VCTYPDATE"),d("PE_VCDECDATE"),d("PE_VCDEMODE"),M),ne=I=>$(u("orderNotFound",{order:I})),de=()=>{B.data.removeQuery(),B.data.resetPreviousData(),B.actions.onClearQuickSearchValue(),k.onNavigateListCommande()};return r.jsxs(gr,{children:[r.jsx(ur,{dialogProps:{transitionDuration:0,disableRestoreFocus:!0,fullWidth:!0,fullScreen:re.includes([],y.modalFor)},withAppBar:!0,isOpen:!!y.modalFor,onCloseDialog:()=>k.onCloseModal(),i8ntitle:y.modalFor==="SEARCHORDER"?u("order"):null,className:"",children:y.modalFor==="SEARCHORDER"&&r.jsx(yn,{context:P,onFoundOrder:L,onNotFoundOrder:ne,onCancel:k.onCloseModal})}),o?r.jsxs(r.Fragment,{children:[r.jsx(gn,{title:"_",sessionId:t}),r.jsx(dr,{indice:o},o)]}):r.jsxs(r.Fragment,{children:[r.jsx(vr,{isHome:y.step===Le.HOME,badgeContent:J,title:y.step===Le.HOME?u("venteCarreau"):u("orderList")||"",sx:{bgcolor:Wt},typeMod:pr.VENTE_CARREAU,onStepBack:k.onStepBack}),y.step===Le.HOME&&r.jsx(Cn,{className:"accueil",disableSwitchPersonnel:x("V2_LOCKPERS"),codePersonnel:E,nomPersonnel:D,modalOpen:!1,onNavigateListCommande:de,onNavigateListArticles:p,onChangePersonnel:k.onChangePersonnel,onSelectOrder:L,onNotFoundOrder:ne,onOpenModalSearchOrder:k.onOpenModalSearchOrder,dataCommandes:B,contextGlobal:P}),y.step===Le.LIST&&r.jsx(on,{fieldDateTop:H,data:B,onSelect:L,onNewCommande:p,onOpenModalSearchOrder:k.onOpenModalSearchOrder})]})]})},Ln=kn;function $n(){const{session:e,onLaunchOption:a}=mr();return r.jsx(Ln,{session:e})}export{$n as default};
