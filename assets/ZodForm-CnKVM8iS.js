import{r as u,j as d,a5 as Ft,a9 as xr,a7 as B,a4 as _e,ab as G,a8 as _,ac as Pt,ad as Qt,ae as Jt,a3 as eo,af as br,a6 as At,ag as to,ah as Sr,ai as ue,aj as wr,h as oo,ak as Cr,al as Tr,am as Er,an as Mr,ao as Ir,ap as Fr,aq as Pr,ar as Ar,as as Vr,at as He,au as Rr,F as Vt,aa as de,J as le,K as Ee,y as Z,E as Ze,av as _r,V as ro,aw as Nr,ax as kr,ay as Dr,az as Lr,aA as Or,L as at,aB as jr,N as lt,aC as zr,aD as Ur,aE as Br,aF as $r,f as K,aG as Wr,aH as Hr,aI as Kr,d as xe,aJ as Gr,p as J,q as qr,t as jt,o as ct,aK as Xr}from"./main-BIbxuPEC.js";import{r as Yr,t as so,i as Zr,a as Qr,o as zt,p as Se}from"./indexedDB-DUj4cgsM.js";var Qe="Checkbox",[Jr]=Ft(Qe),[es,Rt]=Jr(Qe);function ts(r){const{__scopeCheckbox:o,checked:e,children:t,defaultChecked:s,disabled:i,form:n,name:a,onCheckedChange:l,required:c,value:p="on",internal_do_not_use_render:f}=r,[h,v]=_e({prop:e,defaultProp:s??!1,onChange:l,caller:Qe}),[y,m]=u.useState(null),[g,b]=u.useState(null),x=u.useRef(!1),S=y?!!n||!!y.closest("form"):!0,E={checked:h,disabled:i,setChecked:v,control:y,setControl:m,name:a,form:n,value:p,hasConsumerStoppedPropagationRef:x,required:c,defaultChecked:ce(s)?!1:s,isFormControl:S,bubbleInput:g,setBubbleInput:b};return d.jsx(es,{scope:o,...E,children:os(f)?f(E):t})}var io="CheckboxTrigger",no=u.forwardRef(({__scopeCheckbox:r,onKeyDown:o,onClick:e,...t},s)=>{const{control:i,value:n,disabled:a,checked:l,required:c,setControl:p,setChecked:f,hasConsumerStoppedPropagationRef:h,isFormControl:v,bubbleInput:y}=Rt(io,r),m=G(s,p),g=u.useRef(l);return u.useEffect(()=>{const b=i?.form;if(b){const x=()=>f(g.current);return b.addEventListener("reset",x),()=>b.removeEventListener("reset",x)}},[i,f]),d.jsx(B.button,{type:"button",role:"checkbox","aria-checked":ce(l)?"mixed":l,"aria-required":c,"data-state":ho(l),"data-disabled":a?"":void 0,disabled:a,value:n,...t,ref:m,onKeyDown:_(o,b=>{b.key==="Enter"&&b.preventDefault()}),onClick:_(e,b=>{f(x=>ce(x)?!0:!x),y&&v&&(h.current=b.isPropagationStopped(),h.current||b.stopPropagation())})})});no.displayName=io;var ao=u.forwardRef((r,o)=>{const{__scopeCheckbox:e,name:t,checked:s,defaultChecked:i,required:n,disabled:a,value:l,onCheckedChange:c,form:p,...f}=r;return d.jsx(ts,{__scopeCheckbox:e,checked:s,defaultChecked:i,disabled:a,required:n,onCheckedChange:c,name:t,form:p,value:l,internal_do_not_use_render:({isFormControl:h})=>d.jsxs(d.Fragment,{children:[d.jsx(no,{...f,ref:o,__scopeCheckbox:e}),h&&d.jsx(fo,{__scopeCheckbox:e})]})})});ao.displayName=Qe;var lo="CheckboxIndicator",co=u.forwardRef((r,o)=>{const{__scopeCheckbox:e,forceMount:t,...s}=r,i=Rt(lo,e);return d.jsx(xr,{present:t||ce(i.checked)||i.checked===!0,children:d.jsx(B.span,{"data-state":ho(i.checked),"data-disabled":i.disabled?"":void 0,...s,ref:o,style:{pointerEvents:"none",...r.style}})})});co.displayName=lo;var uo="CheckboxBubbleInput",fo=u.forwardRef(({__scopeCheckbox:r,...o},e)=>{const{control:t,hasConsumerStoppedPropagationRef:s,checked:i,defaultChecked:n,required:a,disabled:l,name:c,value:p,form:f,bubbleInput:h,setBubbleInput:v}=Rt(uo,r),y=G(e,v),m=Pt(i),g=Qt(t);u.useEffect(()=>{const x=h;if(!x)return;const S=window.HTMLInputElement.prototype,I=Object.getOwnPropertyDescriptor(S,"checked").set,j=!s.current;if(m!==i&&I){const A=new Event("click",{bubbles:j});x.indeterminate=ce(i),I.call(x,ce(i)?!1:i),x.dispatchEvent(A)}},[h,m,i,s]);const b=u.useRef(ce(i)?!1:i);return d.jsx(B.input,{type:"checkbox","aria-hidden":!0,defaultChecked:n??b.current,required:a,disabled:l,name:c,value:p,form:f,...o,tabIndex:-1,ref:y,style:{...o.style,...g,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});fo.displayName=uo;function os(r){return typeof r=="function"}function ce(r){return r==="indeterminate"}function ho(r){return ce(r)?"indeterminate":r?"checked":"unchecked"}var rs=[" ","Enter","ArrowUp","ArrowDown"],ss=[" ","Enter"],ve="Select",[Je,et,is]=to(ve),[Me]=Ft(ve,[is,Jt]),tt=Jt(),[ns,fe]=Me(ve),[as,ls]=Me(ve),mo=r=>{const{__scopeSelect:o,children:e,open:t,defaultOpen:s,onOpenChange:i,value:n,defaultValue:a,onValueChange:l,dir:c,name:p,autoComplete:f,disabled:h,required:v,form:y}=r,m=tt(o),[g,b]=u.useState(null),[x,S]=u.useState(null),[E,I]=u.useState(!1),j=eo(c),[A,R]=_e({prop:t,defaultProp:s??!1,onChange:i,caller:ve}),[L,k]=_e({prop:n,defaultProp:a,onChange:l,caller:ve}),V=u.useRef(null),N=g?y||!!g.closest("form"):!0,[X,F]=u.useState(new Set),w=Array.from(X).map(C=>C.props.value).join(";");return d.jsx(br,{...m,children:d.jsxs(ns,{required:v,scope:o,trigger:g,onTriggerChange:b,valueNode:x,onValueNodeChange:S,valueNodeHasChildren:E,onValueNodeHasChildrenChange:I,contentId:At(),value:L,onValueChange:k,open:A,onOpenChange:R,dir:j,triggerPointerDownPosRef:V,disabled:h,children:[d.jsx(Je.Provider,{scope:o,children:d.jsx(as,{scope:r.__scopeSelect,onNativeOptionAdd:u.useCallback(C=>{F(M=>new Set(M).add(C))},[]),onNativeOptionRemove:u.useCallback(C=>{F(M=>{const P=new Set(M);return P.delete(C),P})},[]),children:e})}),N?d.jsxs(Lo,{"aria-hidden":!0,required:v,tabIndex:-1,name:p,autoComplete:f,value:L,onChange:C=>k(C.target.value),disabled:h,form:y,children:[L===void 0?d.jsx("option",{value:""}):null,Array.from(X)]},w):null]})})};mo.displayName=ve;var po="SelectTrigger",go=u.forwardRef((r,o)=>{const{__scopeSelect:e,disabled:t=!1,...s}=r,i=tt(e),n=fe(po,e),a=n.disabled||t,l=G(o,n.onTriggerChange),c=et(e),p=u.useRef("touch"),[f,h,v]=jo(m=>{const g=c().filter(S=>!S.disabled),b=g.find(S=>S.value===n.value),x=zo(g,m,b);x!==void 0&&n.onValueChange(x.value)}),y=m=>{a||(n.onOpenChange(!0),v()),m&&(n.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})};return d.jsx(Sr,{asChild:!0,...i,children:d.jsx(B.button,{type:"button",role:"combobox","aria-controls":n.contentId,"aria-expanded":n.open,"aria-required":n.required,"aria-autocomplete":"none",dir:n.dir,"data-state":n.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":Oo(n.value)?"":void 0,...s,ref:l,onClick:_(s.onClick,m=>{m.currentTarget.focus(),p.current!=="mouse"&&y(m)}),onPointerDown:_(s.onPointerDown,m=>{p.current=m.pointerType;const g=m.target;g.hasPointerCapture(m.pointerId)&&g.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(y(m),m.preventDefault())}),onKeyDown:_(s.onKeyDown,m=>{const g=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&h(m.key),!(g&&m.key===" ")&&rs.includes(m.key)&&(y(),m.preventDefault())})})})});go.displayName=po;var vo="SelectValue",yo=u.forwardRef((r,o)=>{const{__scopeSelect:e,className:t,style:s,children:i,placeholder:n="",...a}=r,l=fe(vo,e),{onValueNodeHasChildrenChange:c}=l,p=i!==void 0,f=G(o,l.onValueNodeChange);return ue(()=>{c(p)},[c,p]),d.jsx(B.span,{...a,ref:f,style:{pointerEvents:"none"},children:Oo(l.value)?d.jsx(d.Fragment,{children:n}):i})});yo.displayName=vo;var cs="SelectIcon",xo=u.forwardRef((r,o)=>{const{__scopeSelect:e,children:t,...s}=r;return d.jsx(B.span,{"aria-hidden":!0,...s,ref:o,children:t||"▼"})});xo.displayName=cs;var us="SelectPortal",bo=r=>d.jsx(wr,{asChild:!0,...r});bo.displayName=us;var ye="SelectContent",So=u.forwardRef((r,o)=>{const e=fe(ye,r.__scopeSelect),[t,s]=u.useState();if(ue(()=>{s(new DocumentFragment)},[]),!e.open){const i=t;return i?oo.createPortal(d.jsx(wo,{scope:r.__scopeSelect,children:d.jsx(Je.Slot,{scope:r.__scopeSelect,children:d.jsx("div",{children:r.children})})}),i):null}return d.jsx(Co,{...r,ref:o})});So.displayName=ye;var ie=10,[wo,he]=Me(ye),ds="SelectContentImpl",fs=Fr("SelectContent.RemoveScroll"),Co=u.forwardRef((r,o)=>{const{__scopeSelect:e,position:t="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:i,onPointerDownOutside:n,side:a,sideOffset:l,align:c,alignOffset:p,arrowPadding:f,collisionBoundary:h,collisionPadding:v,sticky:y,hideWhenDetached:m,avoidCollisions:g,...b}=r,x=fe(ye,e),[S,E]=u.useState(null),[I,j]=u.useState(null),A=G(o,T=>E(T)),[R,L]=u.useState(null),[k,V]=u.useState(null),N=et(e),[X,F]=u.useState(!1),w=u.useRef(!1);u.useEffect(()=>{if(S)return Er(S)},[S]),Mr();const C=u.useCallback(T=>{const[U,...Q]=N().map(H=>H.ref.current),[D]=Q.slice(-1),O=document.activeElement;for(const H of T)if(H===O||(H?.scrollIntoView({block:"nearest"}),H===U&&I&&(I.scrollTop=0),H===D&&I&&(I.scrollTop=I.scrollHeight),H?.focus(),document.activeElement!==O))return},[N,I]),M=u.useCallback(()=>C([R,S]),[C,R,S]);u.useEffect(()=>{X&&M()},[X,M]);const{onOpenChange:P,triggerPointerDownPosRef:z}=x;u.useEffect(()=>{if(S){let T={x:0,y:0};const U=D=>{T={x:Math.abs(Math.round(D.pageX)-(z.current?.x??0)),y:Math.abs(Math.round(D.pageY)-(z.current?.y??0))}},Q=D=>{T.x<=10&&T.y<=10?D.preventDefault():S.contains(D.target)||P(!1),document.removeEventListener("pointermove",U),z.current=null};return z.current!==null&&(document.addEventListener("pointermove",U),document.addEventListener("pointerup",Q,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",Q,{capture:!0})}}},[S,P,z]),u.useEffect(()=>{const T=()=>P(!1);return window.addEventListener("blur",T),window.addEventListener("resize",T),()=>{window.removeEventListener("blur",T),window.removeEventListener("resize",T)}},[P]);const[re,$]=jo(T=>{const U=N().filter(O=>!O.disabled),Q=U.find(O=>O.ref.current===document.activeElement),D=zo(U,T,Q);D&&setTimeout(()=>D.ref.current.focus())}),W=u.useCallback((T,U,Q)=>{const D=!w.current&&!Q;(x.value!==void 0&&x.value===U||D)&&(L(T),D&&(w.current=!0))},[x.value]),q=u.useCallback(()=>S?.focus(),[S]),ee=u.useCallback((T,U,Q)=>{const D=!w.current&&!Q;(x.value!==void 0&&x.value===U||D)&&V(T)},[x.value]),se=t==="popper"?mt:To,te=se===mt?{side:a,sideOffset:l,align:c,alignOffset:p,arrowPadding:f,collisionBoundary:h,collisionPadding:v,sticky:y,hideWhenDetached:m,avoidCollisions:g}:{};return d.jsx(wo,{scope:e,content:S,viewport:I,onViewportChange:j,itemRefCallback:W,selectedItem:R,onItemLeave:q,itemTextRefCallback:ee,focusSelectedItem:M,selectedItemText:k,position:t,isPositioned:X,searchRef:re,children:d.jsx(Ir,{as:fs,allowPinchZoom:!0,children:d.jsx(Pr,{asChild:!0,trapped:x.open,onMountAutoFocus:T=>{T.preventDefault()},onUnmountAutoFocus:_(s,T=>{x.trigger?.focus({preventScroll:!0}),T.preventDefault()}),children:d.jsx(Ar,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:n,onFocusOutside:T=>T.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:d.jsx(se,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:T=>T.preventDefault(),...b,...te,onPlaced:()=>F(!0),ref:A,style:{display:"flex",flexDirection:"column",outline:"none",...b.style},onKeyDown:_(b.onKeyDown,T=>{const U=T.ctrlKey||T.altKey||T.metaKey;if(T.key==="Tab"&&T.preventDefault(),!U&&T.key.length===1&&$(T.key),["ArrowUp","ArrowDown","Home","End"].includes(T.key)){let D=N().filter(O=>!O.disabled).map(O=>O.ref.current);if(["ArrowUp","End"].includes(T.key)&&(D=D.slice().reverse()),["ArrowUp","ArrowDown"].includes(T.key)){const O=T.target,H=D.indexOf(O);D=D.slice(H+1)}setTimeout(()=>C(D)),T.preventDefault()}})})})})})})});Co.displayName=ds;var hs="SelectItemAlignedPosition",To=u.forwardRef((r,o)=>{const{__scopeSelect:e,onPlaced:t,...s}=r,i=fe(ye,e),n=he(ye,e),[a,l]=u.useState(null),[c,p]=u.useState(null),f=G(o,A=>p(A)),h=et(e),v=u.useRef(!1),y=u.useRef(!0),{viewport:m,selectedItem:g,selectedItemText:b,focusSelectedItem:x}=n,S=u.useCallback(()=>{if(i.trigger&&i.valueNode&&a&&c&&m&&g&&b){const A=i.trigger.getBoundingClientRect(),R=c.getBoundingClientRect(),L=i.valueNode.getBoundingClientRect(),k=b.getBoundingClientRect();if(i.dir!=="rtl"){const O=k.left-R.left,H=L.left-O,me=A.left-H,pe=A.width+me,st=Math.max(pe,R.width),it=window.innerWidth-ie,nt=He(H,[ie,Math.max(ie,it-st)]);a.style.minWidth=pe+"px",a.style.left=nt+"px"}else{const O=R.right-k.right,H=window.innerWidth-L.right-O,me=window.innerWidth-A.right-H,pe=A.width+me,st=Math.max(pe,R.width),it=window.innerWidth-ie,nt=He(H,[ie,Math.max(ie,it-st)]);a.style.minWidth=pe+"px",a.style.right=nt+"px"}const V=h(),N=window.innerHeight-ie*2,X=m.scrollHeight,F=window.getComputedStyle(c),w=parseInt(F.borderTopWidth,10),C=parseInt(F.paddingTop,10),M=parseInt(F.borderBottomWidth,10),P=parseInt(F.paddingBottom,10),z=w+C+X+P+M,re=Math.min(g.offsetHeight*5,z),$=window.getComputedStyle(m),W=parseInt($.paddingTop,10),q=parseInt($.paddingBottom,10),ee=A.top+A.height/2-ie,se=N-ee,te=g.offsetHeight/2,T=g.offsetTop+te,U=w+C+T,Q=z-U;if(U<=ee){const O=V.length>0&&g===V[V.length-1].ref.current;a.style.bottom="0px";const H=c.clientHeight-m.offsetTop-m.offsetHeight,me=Math.max(se,te+(O?q:0)+H+M),pe=U+me;a.style.height=pe+"px"}else{const O=V.length>0&&g===V[0].ref.current;a.style.top="0px";const me=Math.max(ee,w+m.offsetTop+(O?W:0)+te)+Q;a.style.height=me+"px",m.scrollTop=U-ee+m.offsetTop}a.style.margin=`${ie}px 0`,a.style.minHeight=re+"px",a.style.maxHeight=N+"px",t?.(),requestAnimationFrame(()=>v.current=!0)}},[h,i.trigger,i.valueNode,a,c,m,g,b,i.dir,t]);ue(()=>S(),[S]);const[E,I]=u.useState();ue(()=>{c&&I(window.getComputedStyle(c).zIndex)},[c]);const j=u.useCallback(A=>{A&&y.current===!0&&(S(),x?.(),y.current=!1)},[S,x]);return d.jsx(ps,{scope:e,contentWrapper:a,shouldExpandOnScrollRef:v,onScrollButtonChange:j,children:d.jsx("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:E},children:d.jsx(B.div,{...s,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});To.displayName=hs;var ms="SelectPopperPosition",mt=u.forwardRef((r,o)=>{const{__scopeSelect:e,align:t="start",collisionPadding:s=ie,...i}=r,n=tt(e);return d.jsx(Vr,{...n,...i,ref:o,align:t,collisionPadding:s,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});mt.displayName=ms;var[ps,_t]=Me(ye,{}),pt="SelectViewport",Eo=u.forwardRef((r,o)=>{const{__scopeSelect:e,nonce:t,...s}=r,i=he(pt,e),n=_t(pt,e),a=G(o,i.onViewportChange),l=u.useRef(0);return d.jsxs(d.Fragment,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:t}),d.jsx(Je.Slot,{scope:e,children:d.jsx(B.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:_(s.onScroll,c=>{const p=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=n;if(h?.current&&f){const v=Math.abs(l.current-p.scrollTop);if(v>0){const y=window.innerHeight-ie*2,m=parseFloat(f.style.minHeight),g=parseFloat(f.style.height),b=Math.max(m,g);if(b<y){const x=b+v,S=Math.min(y,x),E=x-S;f.style.height=S+"px",f.style.bottom==="0px"&&(p.scrollTop=E>0?E:0,f.style.justifyContent="flex-end")}}}l.current=p.scrollTop})})})]})});Eo.displayName=pt;var Mo="SelectGroup",[gs,vs]=Me(Mo),Io=u.forwardRef((r,o)=>{const{__scopeSelect:e,...t}=r,s=At();return d.jsx(gs,{scope:e,id:s,children:d.jsx(B.div,{role:"group","aria-labelledby":s,...t,ref:o})})});Io.displayName=Mo;var Fo="SelectLabel",Po=u.forwardRef((r,o)=>{const{__scopeSelect:e,...t}=r,s=vs(Fo,e);return d.jsx(B.div,{id:s.id,...t,ref:o})});Po.displayName=Fo;var Ke="SelectItem",[ys,Ao]=Me(Ke),Vo=u.forwardRef((r,o)=>{const{__scopeSelect:e,value:t,disabled:s=!1,textValue:i,...n}=r,a=fe(Ke,e),l=he(Ke,e),c=a.value===t,[p,f]=u.useState(i??""),[h,v]=u.useState(!1),y=G(o,x=>l.itemRefCallback?.(x,t,s)),m=At(),g=u.useRef("touch"),b=()=>{s||(a.onValueChange(t),a.onOpenChange(!1))};if(t==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return d.jsx(ys,{scope:e,value:t,disabled:s,textId:m,isSelected:c,onItemTextChange:u.useCallback(x=>{f(S=>S||(x?.textContent??"").trim())},[]),children:d.jsx(Je.ItemSlot,{scope:e,value:t,disabled:s,textValue:p,children:d.jsx(B.div,{role:"option","aria-labelledby":m,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...n,ref:y,onFocus:_(n.onFocus,()=>v(!0)),onBlur:_(n.onBlur,()=>v(!1)),onClick:_(n.onClick,()=>{g.current!=="mouse"&&b()}),onPointerUp:_(n.onPointerUp,()=>{g.current==="mouse"&&b()}),onPointerDown:_(n.onPointerDown,x=>{g.current=x.pointerType}),onPointerMove:_(n.onPointerMove,x=>{g.current=x.pointerType,s?l.onItemLeave?.():g.current==="mouse"&&x.currentTarget.focus({preventScroll:!0})}),onPointerLeave:_(n.onPointerLeave,x=>{x.currentTarget===document.activeElement&&l.onItemLeave?.()}),onKeyDown:_(n.onKeyDown,x=>{l.searchRef?.current!==""&&x.key===" "||(ss.includes(x.key)&&b(),x.key===" "&&x.preventDefault())})})})})});Vo.displayName=Ke;var Pe="SelectItemText",Ro=u.forwardRef((r,o)=>{const{__scopeSelect:e,className:t,style:s,...i}=r,n=fe(Pe,e),a=he(Pe,e),l=Ao(Pe,e),c=ls(Pe,e),[p,f]=u.useState(null),h=G(o,b=>f(b),l.onItemTextChange,b=>a.itemTextRefCallback?.(b,l.value,l.disabled)),v=p?.textContent,y=u.useMemo(()=>d.jsx("option",{value:l.value,disabled:l.disabled,children:v},l.value),[l.disabled,l.value,v]),{onNativeOptionAdd:m,onNativeOptionRemove:g}=c;return ue(()=>(m(y),()=>g(y)),[m,g,y]),d.jsxs(d.Fragment,{children:[d.jsx(B.span,{id:l.textId,...i,ref:h}),l.isSelected&&n.valueNode&&!n.valueNodeHasChildren?oo.createPortal(i.children,n.valueNode):null]})});Ro.displayName=Pe;var _o="SelectItemIndicator",No=u.forwardRef((r,o)=>{const{__scopeSelect:e,...t}=r;return Ao(_o,e).isSelected?d.jsx(B.span,{"aria-hidden":!0,...t,ref:o}):null});No.displayName=_o;var gt="SelectScrollUpButton",xs=u.forwardRef((r,o)=>{const e=he(gt,r.__scopeSelect),t=_t(gt,r.__scopeSelect),[s,i]=u.useState(!1),n=G(o,t.onScrollButtonChange);return ue(()=>{if(e.viewport&&e.isPositioned){let a=function(){const c=l.scrollTop>0;i(c)};const l=e.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[e.viewport,e.isPositioned]),s?d.jsx(ko,{...r,ref:n,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=e;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}}):null});xs.displayName=gt;var vt="SelectScrollDownButton",bs=u.forwardRef((r,o)=>{const e=he(vt,r.__scopeSelect),t=_t(vt,r.__scopeSelect),[s,i]=u.useState(!1),n=G(o,t.onScrollButtonChange);return ue(()=>{if(e.viewport&&e.isPositioned){let a=function(){const c=l.scrollHeight-l.clientHeight,p=Math.ceil(l.scrollTop)<c;i(p)};const l=e.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[e.viewport,e.isPositioned]),s?d.jsx(ko,{...r,ref:n,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=e;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}}):null});bs.displayName=vt;var ko=u.forwardRef((r,o)=>{const{__scopeSelect:e,onAutoScroll:t,...s}=r,i=he("SelectScrollButton",e),n=u.useRef(null),a=et(e),l=u.useCallback(()=>{n.current!==null&&(window.clearInterval(n.current),n.current=null)},[]);return u.useEffect(()=>()=>l(),[l]),ue(()=>{a().find(p=>p.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[a]),d.jsx(B.div,{"aria-hidden":!0,...s,ref:o,style:{flexShrink:0,...s.style},onPointerDown:_(s.onPointerDown,()=>{n.current===null&&(n.current=window.setInterval(t,50))}),onPointerMove:_(s.onPointerMove,()=>{i.onItemLeave?.(),n.current===null&&(n.current=window.setInterval(t,50))}),onPointerLeave:_(s.onPointerLeave,()=>{l()})})}),Ss="SelectSeparator",Do=u.forwardRef((r,o)=>{const{__scopeSelect:e,...t}=r;return d.jsx(B.div,{"aria-hidden":!0,...t,ref:o})});Do.displayName=Ss;var yt="SelectArrow",ws=u.forwardRef((r,o)=>{const{__scopeSelect:e,...t}=r,s=tt(e),i=fe(yt,e),n=he(yt,e);return i.open&&n.position==="popper"?d.jsx(Rr,{...s,...t,ref:o}):null});ws.displayName=yt;var Cs="SelectBubbleInput",Lo=u.forwardRef(({__scopeSelect:r,value:o,...e},t)=>{const s=u.useRef(null),i=G(t,s),n=Pt(o);return u.useEffect(()=>{const a=s.current;if(!a)return;const l=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(l,"value").set;if(n!==o&&p){const f=new Event("change",{bubbles:!0});p.call(a,o),a.dispatchEvent(f)}},[n,o]),d.jsx(B.select,{...e,style:{...Cr,...e.style},ref:i,defaultValue:o})});Lo.displayName=Cs;function Oo(r){return r===""||r===void 0}function jo(r){const o=Tr(r),e=u.useRef(""),t=u.useRef(0),s=u.useCallback(n=>{const a=e.current+n;o(a),(function l(c){e.current=c,window.clearTimeout(t.current),c!==""&&(t.current=window.setTimeout(()=>l(""),1e3))})(a)},[o]),i=u.useCallback(()=>{e.current="",window.clearTimeout(t.current)},[]);return u.useEffect(()=>()=>window.clearTimeout(t.current),[]),[e,s,i]}function zo(r,o,e){const s=o.length>1&&Array.from(o).every(c=>c===o[0])?o[0]:o,i=e?r.indexOf(e):-1;let n=Ts(r,Math.max(i,0));s.length===1&&(n=n.filter(c=>c!==e));const l=n.find(c=>c.textValue.toLowerCase().startsWith(s.toLowerCase()));return l!==e?l:void 0}function Ts(r,o){return r.map((e,t)=>r[(o+t)%r.length])}var Es=mo,Ms=go,Is=yo,Fs=xo,Ps=bo,As=So,Vs=Eo,Rs=Io,_s=Po,Ns=Vo,ks=Ro,Ds=No,Ls=Do,Uo=["PageUp","PageDown"],Bo=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$o={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Ie="Slider",[xt,Os,js]=to(Ie),[Wo]=Ft(Ie,[js]),[zs,ot]=Wo(Ie),Ho=u.forwardRef((r,o)=>{const{name:e,min:t=0,max:s=100,step:i=1,orientation:n="horizontal",disabled:a=!1,minStepsBetweenThumbs:l=0,defaultValue:c=[t],value:p,onValueChange:f=()=>{},onValueCommit:h=()=>{},inverted:v=!1,form:y,...m}=r,g=u.useRef(new Set),b=u.useRef(0),S=n==="horizontal"?Us:Bs,[E=[],I]=_e({prop:p,defaultProp:c,onChange:V=>{[...g.current][b.current]?.focus(),f(V)}}),j=u.useRef(E);function A(V){const N=Gs(E,V);k(V,N)}function R(V){k(V,b.current)}function L(){const V=j.current[b.current];E[b.current]!==V&&h(E)}function k(V,N,{commit:X}={commit:!1}){const F=Zs(i),w=Qs(Math.round((V-t)/i)*i+t,F),C=He(w,[t,s]);I((M=[])=>{const P=Hs(M,C,N);if(Ys(P,l*i)){b.current=P.indexOf(C);const z=String(P)!==String(M);return z&&X&&h(P),z?P:M}else return M})}return d.jsx(zs,{scope:r.__scopeSlider,name:e,disabled:a,min:t,max:s,valueIndexToChangeRef:b,thumbs:g.current,values:E,orientation:n,form:y,children:d.jsx(xt.Provider,{scope:r.__scopeSlider,children:d.jsx(xt.Slot,{scope:r.__scopeSlider,children:d.jsx(S,{"aria-disabled":a,"data-disabled":a?"":void 0,...m,ref:o,onPointerDown:_(m.onPointerDown,()=>{a||(j.current=E)}),min:t,max:s,inverted:v,onSlideStart:a?void 0:A,onSlideMove:a?void 0:R,onSlideEnd:a?void 0:L,onHomeKeyDown:()=>!a&&k(t,0,{commit:!0}),onEndKeyDown:()=>!a&&k(s,E.length-1,{commit:!0}),onStepKeyDown:({event:V,direction:N})=>{if(!a){const w=Uo.includes(V.key)||V.shiftKey&&Bo.includes(V.key)?10:1,C=b.current,M=E[C],P=i*w*N;k(M+P,C,{commit:!0})}}})})})})});Ho.displayName=Ie;var[Ko,Go]=Wo(Ie,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Us=u.forwardRef((r,o)=>{const{min:e,max:t,dir:s,inverted:i,onSlideStart:n,onSlideMove:a,onSlideEnd:l,onStepKeyDown:c,...p}=r,[f,h]=u.useState(null),v=G(o,S=>h(S)),y=u.useRef(void 0),m=eo(s),g=m==="ltr",b=g&&!i||!g&&i;function x(S){const E=y.current||f.getBoundingClientRect(),I=[0,E.width],A=Nt(I,b?[e,t]:[t,e]);return y.current=E,A(S-E.left)}return d.jsx(Ko,{scope:r.__scopeSlider,startEdge:b?"left":"right",endEdge:b?"right":"left",direction:b?1:-1,size:"width",children:d.jsx(qo,{dir:m,"data-orientation":"horizontal",...p,ref:v,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:S=>{const E=x(S.clientX);n?.(E)},onSlideMove:S=>{const E=x(S.clientX);a?.(E)},onSlideEnd:()=>{y.current=void 0,l?.()},onStepKeyDown:S=>{const I=$o[b?"from-left":"from-right"].includes(S.key);c?.({event:S,direction:I?-1:1})}})})}),Bs=u.forwardRef((r,o)=>{const{min:e,max:t,inverted:s,onSlideStart:i,onSlideMove:n,onSlideEnd:a,onStepKeyDown:l,...c}=r,p=u.useRef(null),f=G(o,p),h=u.useRef(void 0),v=!s;function y(m){const g=h.current||p.current.getBoundingClientRect(),b=[0,g.height],S=Nt(b,v?[t,e]:[e,t]);return h.current=g,S(m-g.top)}return d.jsx(Ko,{scope:r.__scopeSlider,startEdge:v?"bottom":"top",endEdge:v?"top":"bottom",size:"height",direction:v?1:-1,children:d.jsx(qo,{"data-orientation":"vertical",...c,ref:f,style:{...c.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:m=>{const g=y(m.clientY);i?.(g)},onSlideMove:m=>{const g=y(m.clientY);n?.(g)},onSlideEnd:()=>{h.current=void 0,a?.()},onStepKeyDown:m=>{const b=$o[v?"from-bottom":"from-top"].includes(m.key);l?.({event:m,direction:b?-1:1})}})})}),qo=u.forwardRef((r,o)=>{const{__scopeSlider:e,onSlideStart:t,onSlideMove:s,onSlideEnd:i,onHomeKeyDown:n,onEndKeyDown:a,onStepKeyDown:l,...c}=r,p=ot(Ie,e);return d.jsx(B.span,{...c,ref:o,onKeyDown:_(r.onKeyDown,f=>{f.key==="Home"?(n(f),f.preventDefault()):f.key==="End"?(a(f),f.preventDefault()):Uo.concat(Bo).includes(f.key)&&(l(f),f.preventDefault())}),onPointerDown:_(r.onPointerDown,f=>{const h=f.target;h.setPointerCapture(f.pointerId),f.preventDefault(),p.thumbs.has(h)?h.focus():t(f)}),onPointerMove:_(r.onPointerMove,f=>{f.target.hasPointerCapture(f.pointerId)&&s(f)}),onPointerUp:_(r.onPointerUp,f=>{const h=f.target;h.hasPointerCapture(f.pointerId)&&(h.releasePointerCapture(f.pointerId),i(f))})})}),Xo="SliderTrack",Yo=u.forwardRef((r,o)=>{const{__scopeSlider:e,...t}=r,s=ot(Xo,e);return d.jsx(B.span,{"data-disabled":s.disabled?"":void 0,"data-orientation":s.orientation,...t,ref:o})});Yo.displayName=Xo;var bt="SliderRange",Zo=u.forwardRef((r,o)=>{const{__scopeSlider:e,...t}=r,s=ot(bt,e),i=Go(bt,e),n=u.useRef(null),a=G(o,n),l=s.values.length,c=s.values.map(h=>er(h,s.min,s.max)),p=l>1?Math.min(...c):0,f=100-Math.max(...c);return d.jsx(B.span,{"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,...t,ref:a,style:{...r.style,[i.startEdge]:p+"%",[i.endEdge]:f+"%"}})});Zo.displayName=bt;var St="SliderThumb",Qo=u.forwardRef((r,o)=>{const e=Os(r.__scopeSlider),[t,s]=u.useState(null),i=G(o,a=>s(a)),n=u.useMemo(()=>t?e().findIndex(a=>a.ref.current===t):-1,[e,t]);return d.jsx($s,{...r,ref:i,index:n})}),$s=u.forwardRef((r,o)=>{const{__scopeSlider:e,index:t,name:s,...i}=r,n=ot(St,e),a=Go(St,e),[l,c]=u.useState(null),p=G(o,x=>c(x)),f=l?n.form||!!l.closest("form"):!0,h=Qt(l),v=n.values[t],y=v===void 0?0:er(v,n.min,n.max),m=Ks(t,n.values.length),g=h?.[a.size],b=g?qs(g,y,a.direction):0;return u.useEffect(()=>{if(l)return n.thumbs.add(l),()=>{n.thumbs.delete(l)}},[l,n.thumbs]),d.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[a.startEdge]:`calc(${y}% + ${b}px)`},children:[d.jsx(xt.ItemSlot,{scope:r.__scopeSlider,children:d.jsx(B.span,{role:"slider","aria-label":r["aria-label"]||m,"aria-valuemin":n.min,"aria-valuenow":v,"aria-valuemax":n.max,"aria-orientation":n.orientation,"data-orientation":n.orientation,"data-disabled":n.disabled?"":void 0,tabIndex:n.disabled?void 0:0,...i,ref:p,style:v===void 0?{display:"none"}:r.style,onFocus:_(r.onFocus,()=>{n.valueIndexToChangeRef.current=t})})}),f&&d.jsx(Jo,{name:s??(n.name?n.name+(n.values.length>1?"[]":""):void 0),form:n.form,value:v},t)]})});Qo.displayName=St;var Ws="RadioBubbleInput",Jo=u.forwardRef(({__scopeSlider:r,value:o,...e},t)=>{const s=u.useRef(null),i=G(s,t),n=Pt(o);return u.useEffect(()=>{const a=s.current;if(!a)return;const l=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(l,"value").set;if(n!==o&&p){const f=new Event("input",{bubbles:!0});p.call(a,o),a.dispatchEvent(f)}},[n,o]),d.jsx(B.input,{style:{display:"none"},...e,ref:i,defaultValue:o})});Jo.displayName=Ws;function Hs(r=[],o,e){const t=[...r];return t[e]=o,t.sort((s,i)=>s-i)}function er(r,o,e){const i=100/(e-o)*(r-o);return He(i,[0,100])}function Ks(r,o){return o>2?`Value ${r+1} of ${o}`:o===2?["Minimum","Maximum"][r]:void 0}function Gs(r,o){if(r.length===1)return 0;const e=r.map(s=>Math.abs(s-o)),t=Math.min(...e);return e.indexOf(t)}function qs(r,o,e){const t=r/2,i=Nt([0,50],[0,t]);return(t-i(o)*e)*e}function Xs(r){return r.slice(0,-1).map((o,e)=>r[e+1]-o)}function Ys(r,o){if(o>0){const e=Xs(r);return Math.min(...e)>=o}return!0}function Nt(r,o){return e=>{if(r[0]===r[1]||o[0]===o[1])return o[0];const t=(o[1]-o[0])/(r[1]-r[0]);return o[0]+t*(e-r[0])}}function Zs(r){return(String(r).split(".")[1]||"").length}function Qs(r,o){const e=Math.pow(10,o);return Math.round(r*e)/e}var Js=Ho,ei=Yo,ti=Zo,oi=Qo;const ri=["1","2","3"],si=["classic","surface","soft"],ii={size:{type:"enum",className:"rt-r-size",values:ri,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:si,default:"surface"},...de,...Vt},kt=u.forwardRef((r,o)=>{const{className:e,color:t,checked:s,defaultChecked:i,onCheckedChange:n,...a}=le(r,ii,Ee),[l,c]=_e({prop:s,defaultProp:i,onChange:n});return u.createElement(ao,{"data-accent-color":t,...a,defaultChecked:i,checked:l,onCheckedChange:c,asChild:!1,ref:o,className:Z("rt-reset","rt-BaseCheckboxRoot","rt-CheckboxRoot",e)},u.createElement(co,{asChild:!0,className:"rt-BaseCheckboxIndicator rt-CheckboxIndicator"},u.createElement(l==="indeterminate"?Yr:so,null)))});kt.displayName="Checkbox";const ni=["1","2","3"],Dt={size:{type:"enum",className:"rt-r-size",values:ni,default:"2",responsive:!0}},ai=["classic","surface","soft","ghost"],li={variant:{type:"enum",className:"rt-variant",values:ai,default:"surface"},...de,...Ze,placeholder:{type:"string"}},ci=["solid","soft"],ui={variant:{type:"enum",className:"rt-variant",values:ci,default:"solid"},...de,...Vt},Lt=u.createContext({}),tr=r=>{const{children:o,size:e=Dt.size.default,...t}=r;return u.createElement(Es,{...t},u.createElement(Lt.Provider,{value:u.useMemo(()=>({size:e}),[e])},o))};tr.displayName="Select.Root";const or=u.forwardRef((r,o)=>{const e=u.useContext(Lt),{children:t,className:s,color:i,radius:n,placeholder:a,...l}=le({size:e?.size,...r},{size:Dt.size},li,Ee);return u.createElement(Ms,{asChild:!0},u.createElement("button",{"data-accent-color":i,"data-radius":n,...l,ref:o,className:Z("rt-reset","rt-SelectTrigger",s)},u.createElement("span",{className:"rt-SelectTriggerInner"},u.createElement(Is,{placeholder:a},t)),u.createElement(Fs,{asChild:!0},u.createElement(Zr,{className:"rt-SelectIcon"}))))});or.displayName="Select.Trigger";const rr=u.forwardRef((r,o)=>{const e=u.useContext(Lt),{className:t,children:s,color:i,container:n,...a}=le({size:e?.size,...r},{size:Dt.size},ui),l=_r(),c=i||l.accentColor;return u.createElement(Ps,{container:n},u.createElement(ro,{asChild:!0},u.createElement(As,{"data-accent-color":c,sideOffset:4,...a,asChild:!1,ref:o,className:Z({"rt-PopperContent":a.position==="popper"},"rt-SelectContent",t)},u.createElement(Nr,{type:"auto",className:"rt-ScrollAreaRoot"},u.createElement(Vs,{asChild:!0,className:"rt-SelectViewport"},u.createElement(kr,{className:"rt-ScrollAreaViewport",style:{overflowY:void 0}},s)),u.createElement(Dr,{className:"rt-ScrollAreaScrollbar rt-r-size-1",orientation:"vertical"},u.createElement(Lr,{className:"rt-ScrollAreaThumb"}))))))});rr.displayName="Select.Content";const sr=u.forwardRef((r,o)=>{const{className:e,children:t,...s}=r;return u.createElement(Ns,{...s,asChild:!1,ref:o,className:Z("rt-SelectItem",e)},u.createElement(Ds,{className:"rt-SelectItemIndicator"},u.createElement(so,{className:"rt-SelectItemIndicatorIcon"})),u.createElement(ks,null,t))});sr.displayName="Select.Item";const di=u.forwardRef(({className:r,...o},e)=>u.createElement(Rs,{...o,asChild:!1,ref:e,className:Z("rt-SelectGroup",r)}));di.displayName="Select.Group";const fi=u.forwardRef(({className:r,...o},e)=>u.createElement(_s,{...o,asChild:!1,ref:e,className:Z("rt-SelectLabel",r)}));fi.displayName="Select.Label";const hi=u.forwardRef(({className:r,...o},e)=>u.createElement(Ls,{...o,asChild:!1,ref:e,className:Z("rt-SelectSeparator",r)}));hi.displayName="Select.Separator";const mi=["horizontal","vertical"],pi=["1","2","3","4"],gi={orientation:{type:"enum",className:"rt-r-orientation",values:mi,default:"horizontal",responsive:!0},size:{type:"enum",className:"rt-r-size",values:pi,default:"1",responsive:!0},color:{...de.color,default:"gray"},decorative:{type:"boolean",default:!0}},ir=u.forwardRef((r,o)=>{const{className:e,color:t,decorative:s,...i}=le(r,gi,Ee);return u.createElement("span",{"data-accent-color":t,role:s?void 0:"separator",...i,ref:o,className:Z("rt-Separator",e)})});ir.displayName="Separator";const vi=["1","2","3"],yi=["classic","surface","soft"],xi={size:{type:"enum",className:"rt-r-size",values:vi,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:yi,default:"surface"},...de,...Vt,...Ze},nr=u.forwardRef((r,o)=>{const{className:e,color:t,radius:s,tabIndex:i,...n}=le(r,xi,Ee);return u.createElement(Js,{"data-accent-color":t,"data-radius":s,ref:o,...n,asChild:!1,className:Z("rt-SliderRoot",e)},u.createElement(ei,{className:"rt-SliderTrack"},u.createElement(ti,{className:Z("rt-SliderRange",{"rt-high-contrast":r.highContrast}),"data-inverted":n.inverted?"":void 0})),(n.value??n.defaultValue??[]).map((a,l)=>u.createElement(oi,{key:l,className:"rt-SliderThumb",...i!==void 0?{tabIndex:i}:void 0})))});nr.displayName="Slider";const bi=["1","2","3"],Si=["classic","surface","soft"],wi=["none","vertical","horizontal","both"],Ci={size:{type:"enum",className:"rt-r-size",values:bi,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:Si,default:"surface"},resize:{type:"enum",className:"rt-r-resize",values:wi,responsive:!0},...de,...Ze},ar=u.forwardRef((r,o)=>{const{className:e,color:t,radius:s,style:i,...n}=le(r,Ci,Ee);return u.createElement("div",{"data-accent-color":t,"data-radius":s,className:Z("rt-TextAreaRoot",e),style:i},u.createElement("textarea",{className:"rt-reset rt-TextAreaInput",ref:o,...n}))});ar.displayName="TextArea";const Ti=["1","2","3"],Ei=["classic","surface","soft"],Mi={size:{type:"enum",className:"rt-r-size",values:Ti,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:Ei,default:"surface"},...de,...Ze},Ii=["left","right"],Fi={side:{type:"enum",values:Ii},...de,gap:Or.gap,px:at.px,pl:at.pl,pr:at.pr},lr=u.forwardRef((r,o)=>{const e=u.useRef(null),{children:t,className:s,color:i,radius:n,style:a,...l}=le(r,Mi,Ee);return u.createElement("div",{"data-accent-color":i,"data-radius":n,style:a,className:Z("rt-TextFieldRoot",s),onPointerDown:c=>{const p=c.target;if(p.closest("input, button, a"))return;const f=e.current;if(!f)return;const h=p.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `)?f.value.length:0;requestAnimationFrame(()=>{try{f.setSelectionRange(h,h)}catch{}f.focus()})}},u.createElement("input",{spellCheck:"false",...l,ref:jr(e,o),className:"rt-reset rt-TextFieldInput"}),t)});lr.displayName="TextField.Root";const Pi=u.forwardRef((r,o)=>{const{className:e,color:t,side:s,...i}=le(r,Fi);return u.createElement("div",{"data-accent-color":t,"data-side":s,...i,ref:o,className:Z("rt-TextFieldSlot",e)})});Pi.displayName="TextField.Slot";const Ai={content:{type:"ReactNode",required:!0},width:lt.width,minWidth:lt.minWidth,maxWidth:{...lt.maxWidth,default:"360px"}},cr=u.forwardRef((r,o)=>{const{children:e,className:t,open:s,defaultOpen:i,onOpenChange:n,delayDuration:a,disableHoverableContent:l,content:c,container:p,forceMount:f,...h}=le(r,Ai),v={open:s,defaultOpen:i,onOpenChange:n,delayDuration:a,disableHoverableContent:l};return u.createElement(zr,{...v},u.createElement(Ur,{asChild:!0},e),u.createElement(Br,{container:p,forceMount:f},u.createElement(ro,{asChild:!0},u.createElement($r,{sideOffset:4,collisionPadding:10,...h,asChild:!1,ref:o,className:Z("rt-TooltipContent",t)},u.createElement(K,{as:"p",className:"rt-TooltipText",size:"1"},c),u.createElement(Wr,{className:"rt-TooltipArrow"})))))});cr.displayName="Tooltip";const Vi={name:"Angular",type:"geometric",description:"Angular sweep transition",uniforms:{startingAngle:90},source:`
#define PI 3.141592653589793

uniform float startingAngle; // = 90

vec4 transition(vec2 uv) {
	float offset = startingAngle * PI / 180.0;
	float angle = atan(uv.y - 0.5, uv.x - 0.5) + offset;
	float normalizedAngle = (angle + PI) / (2.0 * PI);
	
	normalizedAngle = normalizedAngle - floor(normalizedAngle);

	return mix(
		getFromColor(uv),
		getToColor(uv),
		step(normalizedAngle, progress)
	);
}
`},Ri={name:"Book Flip",type:"3d",description:"3D book page flip effect",uniforms:{},source:`
vec2 skewLeft(vec2 p) {
	float skewX = (p.x - progress);
	float skewY = (p.y - 0.5) / (0.5 + abs(0.5 - progress) * 2.0) + 0.5;
	return vec2(skewX, skewY);
}

vec2 skewRight(vec2 p) {
	float skewX = (p.x - 0.5) / (progress + 0.5) + 0.5;
	float skewY = (p.y - 0.5) / (0.5 + abs(0.5 - progress) * 2.0) + 0.5;
	return vec2(skewX, skewY);
}

vec4 addShade() {
	float shadeVal = max(0.7, abs(progress - 0.5) * 2.0);
	return vec4(vec3(shadeVal), 1.0);
}

vec4 transition(vec2 p) {
	float pr = step(1.0 - progress, p.x);
	if (p.x < 0.5) {
		return mix(getFromColor(p), getToColor(skewLeft(p)) * addShade(), pr);
	} else {
		return mix(getFromColor(skewRight(p)) * addShade(), getToColor(p), pr);
	}
}
`},_i={name:"Bounce",type:"slide",description:"Bouncing slide effect",uniforms:{shadow_colour:[0,0,0,.6],shadow_height:.075,bounces:3},source:`
uniform vec4 shadow_colour; // = vec4(0., 0., 0., 0.6)
uniform float shadow_height; // = 0.075
uniform float bounces; // = 3.0

const float PI = 3.14159265358;

vec4 transition(vec2 uv) {
	float time = progress;
	float stime = sin(time * PI / 2.0);
	float phase = time * PI * bounces;
	float y = (abs(cos(phase))) * (1.0 - stime);
	float d = uv.y - y;
	return mix(
		mix(
			getToColor(uv),
			shadow_colour,
			step(d, shadow_height) * (1.0 - mix(
				((d / shadow_height) * shadow_colour.a) + (1.0 - shadow_colour.a),
				1.0,
				smoothstep(0.95, 1.0, progress)
			))
		),
		getFromColor(vec2(uv.x, uv.y + (1.0 - y))),
		step(d, 0.0)
	);
}
`},Ni={name:"Burn",type:"effect",description:"Burning paper effect",uniforms:{color:[.9,.4,.2]},source:`
uniform vec3 color; // = vec3(0.9, 0.4, 0.2)

vec4 transition(vec2 uv) {
	return mix(
		getFromColor(uv) + vec4(progress * color, 1.0),
		getToColor(uv) + vec4((1.0 - progress) * color, 1.0),
		progress
	);
}
`},ki={name:"Circular Wipe",type:"wipe",description:"Circular reveal from center",uniforms:{},source:`
vec4 transition(vec2 uv) {
	float distance = length(uv - vec2(0.5, 0.5));
	float radius = progress * 0.707;
	return mix(getFromColor(uv), getToColor(uv), smoothstep(radius - 0.1, radius + 0.1, distance));
}`},Di={name:"Colour Distance",type:"effect",description:"Color-based distance transition",uniforms:{power:5},source:`
uniform float power; // = 5.0

vec4 transition(vec2 p) {
	vec4 fTex = getFromColor(p);
	vec4 tTex = getToColor(p);
	float m = step(distance(fTex, tTex), progress);
	return mix(
		mix(fTex, tTex, m),
		tTex,
		pow(progress, power)
	);
}
`},Li={name:"Crazy Parametric",type:"effect",description:"Wild parametric function effect",uniforms:{a:4,b:1,amplitude:120,smoothness:.1},source:`uniform float a;
uniform float b;
uniform float amplitude;
uniform float smoothness;

vec4 transition(vec2 uv) {
	vec2 p = uv.xy / vec2(1.0).xy;
	vec2 dir = p - vec2(0.5);
	float dist = length(dir);
	float x = (a - b) * cos(progress) + b * cos(progress * ((a / b) - 1.0));
	float y = (a - b) * sin(progress) - b * sin(progress * ((a / b) - 1.0));
	vec2 offset = dir * vec2(sin(progress * dist * amplitude * x), sin(progress * dist * amplitude * y)) / smoothness;
	return mix(getFromColor(p + offset), getToColor(p), smoothstep(0.2, 1.0, progress));
}`},Oi={name:"Cannabis Leaf",type:"shape",description:"Cannabis leaf shaped transition",uniforms:{},source:`
vec4 transition(vec2 uv) {
	if (progress == 0.0) {
		return getFromColor(uv);
	} else if (progress == 1.0) {
		return getToColor(uv);
	} else {
		return mix(getFromColor(uv), getToColor(uv), progress);
	}
}`},ji={name:"Circle Open",type:"wipe",description:"Circular iris opening effect",uniforms:{smoothness:.3,opening:!0},source:`
uniform float smoothness;
uniform bool opening;

const vec2 center = vec2(0.5, 0.5);
const float SQRT_2 = 1.414213562373;

vec4 transition(vec2 uv) {
	float x = opening ? progress : 1.0 - progress;
	float m = smoothstep(-smoothness, 0.0, SQRT_2 * distance(center, uv) - x * (1.0 + smoothness));
	return mix(getFromColor(uv), getToColor(uv), opening ? 1.0 - m : m);
}`},zi={name:"Color Phase",type:"effect",description:"Color phase shifting effect",uniforms:{fromStep:[0,.2,.4,0],toStep:[.6,.8,1,1]},source:`
uniform vec4 fromStep; // = vec4(0.0, 0.2, 0.4, 0.0)
uniform vec4 toStep; // = vec4(0.6, 0.8, 1.0, 1.0)

vec4 transition(vec2 uv) {
	vec4 a = getFromColor(uv);
	vec4 b = getToColor(uv);
	return mix(a, b, smoothstep(fromStep, toStep, vec4(progress)));
}
`},Ui={name:"Cross Fade",type:"fade",description:"Smooth blend between images",uniforms:{},source:`
vec4 transition(vec2 uv) {
	return mix(getFromColor(uv), getToColor(uv), progress);
}`},Bi={name:"Crosshatch",type:"geometric",description:"Crosshatch pattern transition",uniforms:{center:[.5,.5],threshold:3,fadeEdge:.1},source:`uniform vec2 center;
uniform float threshold;
uniform float fadeEdge;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec4 transition(vec2 p) {
	float dist = distance(center, p) / threshold;
	float r = progress - min(rand(vec2(p.y, 0.0)), rand(vec2(0.0, p.x)));
	return mix(
		getFromColor(p),
		getToColor(p),
		mix(0.0, mix(step(dist, r), 1.0, smoothstep(1.0 - fadeEdge, 1.0, progress)), smoothstep(0.0, fadeEdge, progress))
	);
}`},$i={name:"Cross Warp",type:"distortion",description:"Cross warping distortion",uniforms:{},source:`
vec4 transition(vec2 p) {
	float x = progress;
	x = smoothstep(0.0, 1.0, (x * 2.0 + p.x - 1.0));
	return mix(getFromColor((p - 0.5) * (1.0 - x) + 0.5), getToColor((p - 0.5) * x + 0.5), x);
}
`},Wi={name:"Cross Zoom",type:"zoom",description:"Zoom effect while fading between images",uniforms:{strength:.4},source:`
uniform float strength;

const float PI = 3.141592653589793;

float Linear_ease(in float begin, in float change, in float duration, in float time) {
	return change * time / duration + begin;
}

float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {
	if (time == 0.0)
		return begin;
	else if (time == duration)
		return begin + change;
	time = time / (duration / 2.0);
	if (time < 1.0)
		return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;
	return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;
}

float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {
	return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;
}

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

vec3 crossFade(in vec2 uv, in float dissolve) {
	return mix(getFromColor(uv).rgb, getToColor(uv).rgb, dissolve);
}

vec4 transition(vec2 uv) {
	vec2 texCoord = uv.xy / vec2(1.0).xy;
	vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);
	float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);
	float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);

	vec3 color = vec3(0.0);
	float total = 0.0;
	vec2 toCenter = center - texCoord;
	float offset = rand(uv);

	for (float t = 0.0; t <= 40.0; t++) {
		float percent = (t + offset) / 40.0;
		float weight = 4.0 * (percent - percent * percent);
		color += crossFade(texCoord + toCenter * percent * strength, dissolve) * weight;
		total += weight;
	}
	return vec4(color / total, 1.0);
}`},Hi={name:"Cube",type:"3d",description:"3D cube rotation transition",uniforms:{persp:.7,unzoom:.3,reflection:.4,floating:3},source:`
uniform float persp; // = 0.7
uniform float unzoom; // = 0.3
uniform float reflection; // = 0.4
uniform float floating; // = 3.0

vec2 project(vec2 p) {
	return p * vec2(1.0, -1.2) + vec2(0.0, -floating / 100.0);
}

bool inBounds(vec2 p) {
	return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));
}

vec2 xskew(vec2 p, float persp, float center) {
	float x = mix(p.x, 1.0 - p.x, center);
	return (
		(
			vec2(x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x))
			- vec2(0.5 - distance(center, 0.5), 0.0)
		)
		* vec2(0.5 / distance(center, 0.5) * (center < 0.5 ? 1.0 : -1.0), 1.0)
		+ vec2(center < 0.5 ? 0.0 : 1.0, 0.0)
	);
}

vec4 bgColor(vec2 p, vec2 pfr, vec2 pto) {
	vec4 c = vec4(0.0, 0.0, 0.0, 1.0);
	pfr = project(pfr);
	if (inBounds(pfr)) {
		c += mix(vec4(0.0), getFromColor(pfr), reflection * mix(1.0, 0.0, pfr.y));
	}
	pto = project(pto);
	if (inBounds(pto)) {
		c += mix(vec4(0.0), getToColor(pto), reflection * mix(1.0, 0.0, pto.y));
	}
	return c;
}

vec4 transition(vec2 op) {
	float uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));
	vec2 p = -uz * 0.5 + (1.0 + uz) * op;
	vec2 fromP = xskew(
		(p - vec2(progress, 0.0)) / vec2(1.0 - progress, 1.0),
		1.0 - mix(progress, 0.0, persp),
		0.0
	);
	vec2 toP = xskew(
		p / vec2(progress, 1.0),
		mix(pow(progress, 2.0), 1.0, persp),
		1.0
	);
	if (inBounds(fromP)) {
		return getFromColor(fromP);
	} else if (inBounds(toP)) {
		return getToColor(toP);
	}
	return bgColor(op, fromP, toP);
}
`},Ki={name:"Directional",type:"slide",description:"Directional slide transition",uniforms:{direction:[0,1]},source:`
uniform vec2 direction; // = vec2(0.0, 1.0)

vec4 transition(vec2 uv) {
	vec2 p = uv + progress * sign(direction);
	vec2 f = fract(p);
	return mix(
		getToColor(f),
		getFromColor(f),
		step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0)
	);
}
`},Gi={name:"Doom Screen",type:"effect",description:"Classic Doom-style melt effect",uniforms:{bars:30,amplitude:2,noise:.1,frequency:.5},source:`
uniform int bars;
uniform float amplitude;
uniform float noise;
uniform float frequency;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec4 transition(vec2 uv) {
	float n = rand(vec2(floor(uv.y * float(bars))));
	float rfactor = mix(n, 1.0, noise);
	vec2 direction = vec2(1.0, 0.0);
	vec2 offset = direction * sin(progress * frequency * rfactor) * amplitude;
	return mix(getFromColor(uv + offset), getToColor(uv), progress);
}`},qi={name:"Directional Wipe",type:"wipe",description:"Wipe in a specified direction",uniforms:{direction:[1,-1],smoothness:.4},source:`
uniform vec2 direction;
uniform float smoothness;

const vec2 center = vec2(0.5, 0.5);

vec4 transition(vec2 uv) {
	vec2 v = normalize(direction);
	v /= abs(v.x) + abs(v.y);
	float d = v.x * center.x + v.y * center.y;
	float m =
		(1.0 - step(progress, 0.0)) *
		(1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + smoothness))));
	return mix(getFromColor(uv), getToColor(uv), m);
}`},Xi={name:"Directional Warp",type:"distortion",description:"Directional warping effect",uniforms:{smoothness:.1,direction:[-1,1]},source:`
uniform float smoothness; // = 0.1
uniform vec2 direction; // = vec2(-1.0, 1.0)

const float PI = 3.141592653589793;
const vec2 center = vec2(0.5, 0.5);

vec4 transition(vec2 uv) {
	vec2 v = normalize(direction);
	v /= abs(v.x) + abs(v.y);
	float d = v.x * center.x + v.y * center.y;
	float m = 1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + smoothness)));
	return mix(getFromColor((uv - 0.5) * (1.0 - m) + 0.5), getToColor((uv - 0.5) * m + 0.5), m);
}
`},Yi={name:"Displacement",type:"distortion",description:"Displacement map distortion",uniforms:{strength:.5},source:`
uniform float strength;

vec4 transition(vec2 uv) {
	float displacement = 0.5 * strength;
	vec2 uvFrom = vec2(uv.x + progress * displacement, uv.y);
	vec2 uvTo = vec2(uv.x - (1.0 - progress) * displacement, uv.y);
	return mix(getFromColor(uvFrom), getToColor(uvTo), progress);
}`},Zi={name:"Doorway",type:"geometric",description:"Door opening effect",uniforms:{reflection:.4,perspective:.4,depth:3},source:`
uniform float reflection;
uniform float perspective;
uniform float depth;

const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);
const vec2 boundMin = vec2(0.0, 0.0);
const vec2 boundMax = vec2(1.0, 1.0);

bool inBounds(vec2 p) {
	return all(lessThan(boundMin, p)) && all(lessThan(p, boundMax));
}

vec2 project(vec2 p) {
	return p * vec2(1.0, -1.2) + vec2(0.0, -0.02);
}

vec4 bgColor(vec2 p, vec2 pto) {
	vec4 c = black;
	pto = project(pto);
	if (inBounds(pto)) {
		c += mix(black, getToColor(pto), reflection * mix(1.0, 0.0, pto.y));
	}
	return c;
}

vec4 transition(vec2 p) {
	vec2 pfr = vec2(-1.0), pto = vec2(-1.0);
	float middleSlit = 2.0 * abs(p.x - 0.5) - progress;
	if (middleSlit > 0.0) {
		pfr = p + (p.x > 0.5 ? -1.0 : 1.0) * vec2(0.5, 0.0);
		float d = 1.0 / (1.0 + perspective * progress * (7.0 + depth));
		pfr.y -= d / 2.0;
		pfr.y *= d;
		pfr.y += d / 2.0;
	}
	
	if (inBounds(pfr)) {
		return getFromColor(pfr);
	} else if (middleSlit > 0.0) {
		return bgColor(p, pto);
	} else {
		pto = (p - vec2(0.5, 0.0)) * vec2(1.0 - progress, 1.0) + vec2(0.5, 0.0);
		if (inBounds(pto)) {
			return getToColor(pto);
		} else {
			return bgColor(p, pto);
		}
	}
}`},Qi={name:"Dreamy",type:"distortion",description:"Soft dreamy blur effect",uniforms:{},source:`
vec4 transition(vec2 uv) {
	vec2 offset = vec2(0.0, progress * 0.1);
	float alpha = smoothstep(0.4, 0.6, progress);
	vec4 from = getFromColor(uv + offset);
	vec4 to = getToColor(uv - offset);
	return mix(from, to, alpha);
}`},Ji={name:"Fade",type:"fade",description:"Simple fade to black transition",uniforms:{},source:`
vec4 transition(vec2 uv) {
	return mix(getFromColor(uv), getToColor(uv), progress);
}
`},en={name:"Fade Color",type:"fade",description:"Fade through a specified color",uniforms:{color:[0,0,0],colorPhase:.4},source:`
uniform vec3 color; // = vec3(0.0)
uniform float colorPhase; // = 0.4

vec4 transition(vec2 uv) {
	return mix(
		mix(vec4(color, 1.0), getFromColor(uv), smoothstep(1.0 - colorPhase, 0.0, progress)),
		mix(vec4(color, 1.0), getToColor(uv), smoothstep(colorPhase, 1.0, progress)),
		progress
	);
}
`},tn={name:"Fade Grayscale",type:"fade",description:"Fade through grayscale",uniforms:{intensity:.3},source:`
uniform float intensity; // = 0.3

vec3 grayscale(vec3 color) {
	return vec3(0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b);
}

vec4 transition(vec2 uv) {
	vec4 fc = getFromColor(uv);
	vec4 tc = getToColor(uv);
	return mix(
		mix(vec4(grayscale(fc.rgb), 1.0), fc, smoothstep(1.0 - intensity, 0.0, progress)),
		mix(vec4(grayscale(tc.rgb), 1.0), tc, smoothstep(intensity, 1.0, progress)),
		progress
	);
}
`},on={name:"Fly Eye",type:"effect",description:"Compound fly eye lens effect",uniforms:{size:.04,zoom:50,colorSeparation:.3},source:`
uniform float size; // = 0.04
uniform float zoom; // = 50.0
uniform float colorSeparation; // = 0.3

vec4 transition(vec2 p) {
	float inv = 1.0 - progress;
	vec2 disp = size * vec2(cos(zoom * p.x), sin(zoom * p.y));
	vec4 texTo = getToColor(p + inv * disp);
	vec4 texFrom = vec4(
		getFromColor(p + progress * disp * (1.0 - colorSeparation)).r,
		getFromColor(p + progress * disp).g,
		getFromColor(p + progress * disp * (1.0 + colorSeparation)).b,
		1.0
	);
	return texTo * progress + texFrom * inv;
}
`},rn={name:"Glitch Memories",type:"effect",description:"Glitchy memory corruption effect",uniforms:{},source:`
vec4 transition(vec2 p) {
	vec2 block = floor(p.xy / vec2(16));
	vec2 uv_noise = block / vec2(64);
	uv_noise += floor(vec2(progress) * vec2(1200.0, 3500.0)) / vec2(64);
	vec2 dist = progress > 0.0 ? (fract(uv_noise) - 0.5) * 0.3 * (1.0 - progress) : vec2(0.0);
	vec2 red = p + dist * 0.2;
	vec2 green = p + dist * 0.3;
	vec2 blue = p + dist * 0.5;

	return vec4(
		mix(getFromColor(red), getToColor(red), progress).r,
		mix(getFromColor(green), getToColor(green), progress).g,
		mix(getFromColor(blue), getToColor(blue), progress).b,
		1.0
	);
}
`},sn={name:"Grid Flip",type:"3d",description:"3D grid flip transition",uniforms:{size:[4,4],pause:.1,dividerWidth:.05,bgcolor:[0,0,0,1],randomness:.1},source:`
uniform ivec2 size;
uniform float pause;
uniform float dividerWidth;
uniform vec4 bgcolor;
uniform float randomness;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec4 transition(vec2 p) {
	vec2 pfr = vec2(0.0);
	vec2 pto = vec2(0.0);
	
	float size_x = 1.0 / float(size.x);
	float size_y = 1.0 / float(size.y);
	
	float r = rand(floor(vec2(size) * p));
	float m = smoothstep(0.0, -dividerWidth, r - (progress * (1.0 + dividerWidth)));
	
	return mix(getFromColor(p), getToColor(p), m);
}`},nn={name:"Horizontal Close",type:"slide",description:"Horizontal closing to center",uniforms:{},source:`
vec4 transition(vec2 uv) {
	float s = 2.0 - abs((uv.y - 0.5) / (progress - 1.0)) - 2.0 * progress;
	return mix(
		getFromColor(uv),
		getToColor(uv),
		smoothstep(0.5, 0.0, s)
	);
}
`},an={name:"Horizontal Open",type:"slide",description:"Horizontal opening from center",uniforms:{},source:`
vec4 transition(vec2 uv) {
	float regress = 1.0 - progress;
	float s = 2.0 - abs((uv.y - 0.5) / (regress - 1.0)) - 2.0 * regress;
	return mix(
		getFromColor(uv),
		getToColor(uv),
		smoothstep(0.0, 0.5, s)
	);
}
`},ln={name:"Heart",type:"shape",description:"Heart-shaped reveal transition",uniforms:{},source:`
float inHeart(vec2 p, vec2 center, float size) {
	if (size == 0.0) return 0.0;
	vec2 o = (p - center) / (1.6 * size);
	float a = o.x * o.x + o.y * o.y - 0.3;
	return step(a * a * a, o.x * o.x * o.y * o.y * o.y);
}

vec4 transition(vec2 uv) {
	return mix(
		getFromColor(uv),
		getToColor(uv),
		inHeart(uv, vec2(0.5, 0.4), progress)
	);
}
`},cn={name:"Kaleidoscope",type:"effect",description:"Kaleidoscope mirror effect",uniforms:{speed:1,angle:1,power:1.5},source:`
uniform float speed; // = 1.0
uniform float angle; // = 1.0
uniform float power; // = 1.5

vec4 transition(vec2 uv) {
	vec2 p = uv.xy / vec2(1.0).xy;
	vec2 q = p;
	float t = pow(progress, power) * speed;
	p = p - 0.5;
	for (int i = 0; i < 7; i++) {
		p = vec2(sin(t) * p.x + cos(t) * p.y, sin(t) * p.y - cos(t) * p.x);
		t += angle;
		p = abs(mod(p, 2.0) - 1.0);
	}
	abs(mod(p, 1.0));
	return mix(
		mix(getFromColor(q), getToColor(q), progress),
		mix(getFromColor(p), getToColor(p), progress),
		1.0 - 2.0 * abs(progress - 0.5)
	);
}
`},un={name:"Linear Blur",type:"blur",description:"Linear motion blur effect",uniforms:{intensity:.1},source:`
uniform float intensity; // = 0.1
const int passes = 6;

vec4 transition(vec2 uv) {
	vec4 c1 = vec4(0.0);
	vec4 c2 = vec4(0.0);

	float disp = intensity * (0.5 - distance(0.5, progress));
	for (int xi = 0; xi < passes; xi++) {
		float x = float(xi) / float(passes) - 0.5;
		for (int yi = 0; yi < passes; yi++) {
			float y = float(yi) / float(passes) - 0.5;
			vec2 v = vec2(x, y);
			float d = disp;
			c1 += getFromColor(uv + d * v);
			c2 += getToColor(uv + d * v);
		}
	}
	c1 /= float(passes * passes);
	c2 /= float(passes * passes);
	return mix(c1, c2, progress);
}
`},dn={name:"Mosaic",type:"geometric",description:"Mosaic tile effect",uniforms:{endx:2,endy:-1},source:`
#define PI 3.14159265358979323
#define POW2(X) X * X
#define POW3(X) X * X * X

uniform int endx; // = 2
uniform int endy; // = -1

float Rand(vec2 v) {
	return fract(sin(dot(v.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 Rotate(vec2 v, float a) {
	mat2 rm = mat2(cos(a), -sin(a), sin(a), cos(a));
	return rm * v;
}

float CosInterpolation(float x) {
	return -cos(x * PI) / 2.0 + 0.5;
}

vec4 transition(vec2 uv) {
	vec2 p = uv.xy / vec2(1.0).xy - 0.5;
	vec2 rp = p;
	float rpr = (progress * 2.0 - 1.0);
	float z = -(rpr * rpr * 2.0) + 3.0;
	float az = abs(z);
	rp *= az;
	rp += mix(vec2(0.5, 0.5), vec2(float(endx) + 0.5, float(endy) + 0.5), POW2(CosInterpolation(progress)));
	vec2 mrp = mod(rp, 1.0);
	vec2 crp = rp;
	bool onEnd = int(floor(crp.x)) == endx && int(floor(crp.y)) == endy;
	if (!onEnd) {
		float ang = float(int(Rand(floor(crp)) * 4.0)) * 0.5 * PI;
		mrp = vec2(0.5) + Rotate(mrp - vec2(0.5), ang);
	}
	if (onEnd || Rand(floor(crp)) > 0.5) {
		return getToColor(mrp);
	} else {
		return getFromColor(mrp);
	}
}
`},fn={name:"Morph",type:"distortion",description:"Morphing transition effect",uniforms:{strength:.1},source:`
uniform float strength; // = 0.1

vec4 transition(vec2 p) {
	vec4 ca = getFromColor(p);
	vec4 cb = getToColor(p);
	
	vec2 oa = (((ca.rg + ca.b) * 0.5) * 2.0 - 1.0);
	vec2 ob = (((cb.rg + cb.b) * 0.5) * 2.0 - 1.0);
	vec2 oc = mix(oa, ob, 0.5) * strength;
	
	float w0 = progress;
	float w1 = 1.0 - w0;
	return mix(getFromColor(p + oc * w0), getToColor(p - oc * w1), progress);
}
`},hn={name:"Mosaic Transition",type:"geometric",description:"Mosaic pattern transition",uniforms:{mosaicNum:10},source:`
uniform float mosaicNum; // = 10.0

vec2 getMosaicUV(vec2 uv) {
	float mosaicWidth = 2.0 / mosaicNum * min(progress, 1.0 - progress);
	float mX = floor(uv.x / mosaicWidth) + 0.5;
	float mY = floor(uv.y / mosaicWidth) + 0.5;
	return vec2(mX * mosaicWidth, mY * mosaicWidth);
}

vec4 transition(vec2 uv) {
	vec2 mosaicUV = min(progress, 1.0 - progress) == 0.0 ? uv : getMosaicUV(uv);
	return mix(getFromColor(mosaicUV), getToColor(mosaicUV), progress * progress);
}
`},mn={name:"Multiply Blend",type:"effect",description:"Multiply blend mode transition",uniforms:{},source:`
vec4 blend(vec4 a, vec4 b) {
	return a * b;
}

vec4 transition(vec2 uv) {
	vec4 blended = blend(getFromColor(uv), getToColor(uv));
	
	if (progress < 0.5)
		return mix(getFromColor(uv), blended, 2.0 * progress);
	else
		return mix(blended, getToColor(uv), 2.0 * progress - 1.0);
}
`},pn={name:"Overexposure",type:"effect",description:"Overexposure flash effect",uniforms:{strength:.6},source:`
uniform float strength; // = 0.6
const float PI = 3.141592653589793;

vec4 transition(vec2 uv) {
	vec4 from = getFromColor(uv);
	vec4 to = getToColor(uv);

	float from_m = 1.0 - progress + sin(PI * progress) * strength;
	float to_m = progress + sin(PI * progress) * strength;
	
	return vec4(
		from.r * from.a * from_m + to.r * to.a * to_m,
		from.g * from.a * from_m + to.g * to.a * to_m,
		from.b * from.a * from_m + to.b * to.a * to_m,
		mix(from.a, to.a, progress)
	);
}
`},gn={name:"Polka Dots Curtain",type:"geometric",description:"Polka dot curtain effect",uniforms:{dots:20,center:[0,0]},source:`
uniform float dots; // = 20.0
uniform vec2 center; // = vec2(0, 0)

vec4 transition(vec2 uv) {
	bool nextImage = distance(fract(uv * dots), vec2(0.5, 0.5)) < (progress / distance(uv, center));
	return nextImage ? getToColor(uv) : getFromColor(uv);
}
`},vn={name:"Page Curl",type:"3d",description:"3D page turning effect",uniforms:{},source:`const float MIN_AMOUNT = -0.16;
const float MAX_AMOUNT = 1.3;
const float PI = 3.141592653589793;
const float scale = 512.0;
const float sharpness = 3.0;
const float cylinderRadius = 1.0 / PI / 2.0;

float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;
float cylinderCenter = amount;
float cylinderAngle = 2.0 * PI * amount;

vec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation) {
	float hitPoint = hitAngle / (2.0 * PI);
	point.y = hitPoint;
	return rrotation * point;
}

vec4 antiAlias(vec4 color1, vec4 color2, float distanc) {
	distanc *= scale;
	if (distanc < 0.0) return color2;
	if (distanc > 2.0) return color1;
	float dd = pow(1.0 - distanc / 2.0, sharpness);
	return ((color2 - color1) * dd) + color1;
}

float distanceToEdge(vec3 point) {
	float dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);
	float dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);
	if (point.x < 0.0) dx = -point.x;
	if (point.x > 1.0) dx = point.x - 1.0;
	if (point.y < 0.0) dy = -point.y;
	if (point.y > 1.0) dy = point.y - 1.0;
	if ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) return sqrt(dx * dx + dy * dy);
	return min(dx, dy);
}

vec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation) {
	float hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);
	vec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);
	if (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)) {
		return getToColor(p);
	}
	if (yc > 0.0) return getFromColor(p);
	vec4 color = getFromColor(point.xy);
	vec4 tcolor = vec4(0.0);
	return antiAlias(color, tcolor, distanceToEdge(point));
}

vec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation) {
	float shadow = distanceToEdge(point) * 30.0;
	shadow = (1.0 - shadow) / 3.0;
	if (shadow < 0.0) shadow = 0.0; else shadow *= amount;
	vec4 shadowColor = seeThrough(yc, p, rotation, rrotation);
	shadowColor.r -= shadow;
	shadowColor.g -= shadow;
	shadowColor.b -= shadow;
	return shadowColor;
}

vec4 backside(float yc, vec3 point) {
	vec4 color = getFromColor(point.xy);
	float gray = (color.r + color.b + color.g) / 15.0;
	gray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));
	color.rgb = vec3(gray);
	return color;
}

vec4 behindSurface(vec2 p, float yc, vec3 point, mat3 rrotation) {
	float shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;
	shado *= 1.0 - abs(point.x - 0.5);
	yc = (-cylinderRadius - cylinderRadius - yc);
	float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;
	point = hitPoint(hitAngle, yc, point, rrotation);
	if (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5)) {
		shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));
		shado *= pow(-yc / cylinderRadius, 3.0);
		shado *= 0.5;
	} else {
		shado = 0.0;
	}
	return vec4(getToColor(p).rgb - shado, 1.0);
}

vec4 transition(vec2 p) {
	const float angle = 30.0 * PI / 180.0;
	float c = cos(-angle);
	float s = sin(-angle);
	mat3 rotation = mat3(c, s, 0, -s, c, 0, 0.12, 0.258, 1);
	c = cos(angle);
	s = sin(angle);
	mat3 rrotation = mat3(c, s, 0, -s, c, 0, 0.15, -0.5, 1);
	vec3 point = rotation * vec3(p, 1.0);
	float yc = point.y - cylinderCenter;
	if (yc < -cylinderRadius) {
		return behindSurface(p,yc, point, rrotation);
	}
	if (yc > cylinderRadius) {
		return getFromColor(p);
	}
	float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;
	float hitAngleMod = mod(hitAngle, 2.0 * PI);
	if ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0)) {
		return seeThrough(yc, p, rotation, rrotation);
	}
	point = hitPoint(hitAngle, yc, point, rrotation);
	if (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0) {
		return seeThroughWithShadow(yc, p, point, rotation, rrotation);
	}
	vec4 color = backside(yc, point);
	vec4 otherColor;
	if (yc < 0.0) {
		float shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);
		shado *= pow(-yc / cylinderRadius, 3.0);
		shado *= 0.5;
		otherColor = vec4(0.0, 0.0, 0.0, shado);
	} else {
		otherColor = getFromColor(p);
	}
	color = antiAlias(color, otherColor, cylinderRadius - abs(yc));
	vec4 cl = seeThroughWithShadow(yc, p, point, rotation, rrotation);
	float dist = distanceToEdge(point);
	return antiAlias(color, cl, dist);
}`},yn={name:"Perlin",type:"effect",description:"Perlin noise transition",uniforms:{scale:4,smoothness:.01},source:`
uniform float scale; // = 4.0
uniform float smoothness; // = 0.01

vec2 random2(vec2 st) {
	st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));
	return -1.0 + 2.0 * fract(sin(st) * 43758.5453123);
}

float noise(vec2 st) {
	vec2 i = floor(st);
	vec2 f = fract(st);

	vec2 u = f * f * (3.0 - 2.0 * f);

	return mix(
		mix(dot(random2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
			dot(random2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
		mix(dot(random2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
			dot(random2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
		u.y
	);
}

vec4 transition(vec2 uv) {
	vec4 from = getFromColor(uv);
	vec4 to = getToColor(uv);
	float n = noise(uv * scale);

	float p = mix(-smoothness, 1.0 + smoothness, progress);
	float lower = p - smoothness;
	float higher = p + smoothness;

	float q = smoothstep(lower, higher, n);

	return mix(from, to, 1.0 - q);
}
`},xn={name:"Pinwheel",type:"geometric",description:"Rotating pinwheel pattern",uniforms:{speed:2},source:`
uniform float speed; // = 2.0

vec4 transition(vec2 uv) {
	vec2 p = uv.xy / vec2(1.0).xy;
	float circPos = atan(p.y - 0.5, p.x - 0.5) + progress * speed;
	float modPos = mod(circPos, 3.1415 / 4.0);
	float signed = sign(progress - modPos);
	return mix(getToColor(p), getFromColor(p), step(signed, 0.5));
}
`},bn={name:"Polar Function",type:"effect",description:"Polar function distortion",uniforms:{segments:5},source:`
#define PI 3.14159265359

uniform int segments; // = 5

vec4 transition(vec2 uv) {
	float angle = atan(uv.y - 0.5, uv.x - 0.5) - 0.5 * PI;
	float normalized = (angle + 1.5 * PI) * (2.0 * PI);
	
	float radius = (cos(float(segments) * angle) + 4.0) / 4.0;
	float difference = length(uv - vec2(0.5, 0.5));
	
	if (difference > radius * progress)
		return getFromColor(uv);
	else
		return getToColor(uv);
}
`},Sn={name:"Radial",type:"blur",description:"Radial blur transition",uniforms:{smoothness:1},source:`
uniform float smoothness; // = 1.0

const float PI = 3.141592653589793;

vec4 transition(vec2 p) {
	vec2 rp = p * 2.0 - 1.0;
	return mix(
		getToColor(p),
		getFromColor(p),
		smoothstep(0.0, smoothness, atan(rp.y, rp.x) - (progress - 0.5) * PI * 2.5)
	);
}
`},wn={name:"Random Squares",type:"geometric",description:"Animated random squares grid",uniforms:{size:[10,10],smoothness:.5},source:`
uniform ivec2 size; // = ivec2(10, 10)
uniform float smoothness; // = 0.5

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec4 transition(vec2 p) {
	float r = rand(floor(vec2(size) * p));
	float m = smoothstep(0.0, -smoothness, r - (progress * (1.0 + smoothness)));
	return mix(getFromColor(p), getToColor(p), m);
}
`},Cn={name:"Ripple",type:"distortion",description:"Water ripple distortion effect",uniforms:{amplitude:100,speed:50},source:`
uniform float amplitude;
uniform float speed;

vec4 transition(vec2 uv) {
	vec2 dir = uv - vec2(.5);
	float dist = length(dir);
	vec2 offset = dir * (sin(progress * dist * amplitude - progress * speed) + .5) / 30.;
	return mix(
		getFromColor(uv + offset),
		getToColor(uv),
		smoothstep(0.2, 1.0, progress)
	);
}`},Tn={name:"Rotate Scale Fade",type:"3d",description:"Combined rotation, scaling and fade",uniforms:{center:[.5,.5],rotations:1,scale:8,backColor:[.15,.15,.15,1]},source:`#define PI 3.14159265359

uniform vec2 center;
uniform float rotations;
uniform float scale;
uniform vec4 backColor;

vec4 transition(vec2 uv) {
	vec2 difference = uv - center;
	vec2 dir = normalize(difference);
	float dist = length(difference);
	
	float angle = 2.0 * PI * rotations * progress;
	float c = cos(angle);
	float s = sin(angle);
	
	float currentScale = mix(scale, 1.0, 2.0 * abs(progress - 0.5));
	
	vec2 rotatedDir = vec2(dir.x * c - dir.y * s, dir.x * s + dir.y * c);
	vec2 rotatedUv = center + rotatedDir * dist / currentScale;
	
	if (rotatedUv.x < 0.0 || rotatedUv.x > 1.0 || rotatedUv.y < 0.0 || rotatedUv.y > 1.0)
		return backColor;
	
	return mix(getFromColor(rotatedUv), getToColor(rotatedUv), progress);
}`},En={name:"Rotate",type:"3d",description:"3D rotation effect",uniforms:{},source:`
#define PI 3.1415926

vec2 rotate2D(in vec2 uv, in float angle) {
	return uv * mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

vec4 transition(vec2 uv) {
	vec2 p = fract(rotate2D(uv - 0.5, progress * PI * 2.0) + 0.5);
	return mix(getFromColor(p), getToColor(p), progress);
}
`},Mn={name:"Simple Zoom",type:"zoom",description:"Simple zoom in/out transition",uniforms:{zoom_quickness:.8},source:`
uniform float zoom_quickness;

vec2 zoom(vec2 uv, float amount) {
	return 0.5 + ((uv - 0.5) * (1.0 - amount));
}

vec4 transition(vec2 uv) {
	float nQuick = clamp(zoom_quickness, 0.2, 1.0);
	return mix(
		getFromColor(zoom(uv, smoothstep(0.0, nQuick, progress))),
		getToColor(uv),
		smoothstep(nQuick - 0.2, 1.0, progress)
	);
}`},In={name:"Swirl",type:"distortion",description:"Swirling vortex effect",uniforms:{},source:`
vec4 transition(vec2 UV) {
	float Radius = 1.0;
	float T = progress;

	UV -= vec2(0.5, 0.5);
	float Dist = length(UV);

	if (Dist < Radius) {
		float Percent = (Radius - Dist) / Radius;
		float A = (T <= 0.5) ? mix(0.0, 1.0, T / 0.5) : mix(1.0, 0.0, (T - 0.5) / 0.5);
		float Theta = Percent * Percent * A * 8.0 * 3.14159;
		float S = sin(Theta);
		float C = cos(Theta);
		UV = vec2(dot(UV, vec2(C, -S)), dot(UV, vec2(S, C)));
	}

	UV += vec2(0.5, 0.5);
	return mix(getFromColor(UV), getToColor(UV), T);
}
`},Fn={name:"Scale In",type:"zoom",description:"Scale in from center",uniforms:{},source:`
vec4 scale(in vec2 uv) {
	uv = 0.5 + (uv - 0.5) * progress;
	return getToColor(uv);
}

vec4 transition(vec2 uv) {
	return mix(getFromColor(uv), scale(uv), progress);
}`},Pn={name:"Squeeze",type:"distortion",description:"Squeeze and stretch effect",uniforms:{colorSeparation:.04},source:`
uniform float colorSeparation; // = 0.04

vec4 transition(vec2 uv) {
	float y = 0.5 + (uv.y - 0.5) / (1.0 - progress);
	if (y < 0.0 || y > 1.0) {
		return getToColor(uv);
	} else {
		vec2 fp = vec2(uv.x, y);
		vec2 off = progress * vec2(0.0, colorSeparation);
		vec4 c = getFromColor(fp);
		vec4 cn = getFromColor(fp - off);
		vec4 cp = getFromColor(fp + off);
		return vec4(cn.r, c.g, cp.b, c.a);
	}
}
`},An={name:"TV Static",type:"effect",description:"Television static noise effect",uniforms:{offset:.05},source:`
uniform float offset; // = 0.05

highp float noise(vec2 co) {
	highp float a = 12.9898;
	highp float b = 78.233;
	highp float c = 43758.5453;
	highp float dt = dot(co.xy * progress, vec2(a, b));
	highp float sn = mod(dt, 3.14);
	return fract(sin(sn) * c);
}

vec4 transition(vec2 p) {
	if (progress < offset) {
		return getFromColor(p);
	} else if (progress > (1.0 - offset)) {
		return getToColor(p);
	} else {
		return vec4(vec3(noise(p)), 1.0);
	}
}
`},Vn={name:"Vertical Open",type:"slide",description:"Vertical opening from center",uniforms:{},source:`
vec4 transition(vec2 uv) {
	float regress = 1.0 - progress;
	float s = 2.0 - abs((uv.x - 0.5) / (regress - 1.0)) - 2.0 * regress;
	return mix(
		getFromColor(uv),
		getToColor(uv),
		smoothstep(0.0, 0.5, s)
	);
}
`},Rn={name:"Water Drop",type:"distortion",description:"Water droplet splash effect",uniforms:{amplitude:30,speed:30},source:`
uniform float amplitude; // = 30
uniform float speed; // = 30

vec4 transition(vec2 p) {
	vec2 dir = p - vec2(0.5);
	float dist = length(dir);

	if (dist > progress) {
		return mix(getFromColor(p), getToColor(p), progress);
	} else {
		vec2 offset = dir * sin(dist * amplitude - progress * speed);
		return mix(getFromColor(p + offset), getToColor(p), progress);
	}
}
`},_n={name:"Wind",type:"distortion",description:"Wind-blown transition effect",uniforms:{size:.2},source:`
uniform float size;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

vec4 transition(vec2 uv) {
	float r = rand(vec2(0, uv.y));
	float m = smoothstep(0.0, -size, uv.x * (1.0 - size) + size * r - (progress * (1.0 + size)));
	return mix(getFromColor(uv), getToColor(uv), m);
}`},Nn={name:"Window Blinds",type:"geometric",description:"Window blinds closing effect",uniforms:{},source:`
vec4 transition(vec2 uv) {
	float t = progress;
	if (mod(floor(uv.y * 100.0 * progress), 2.0) == 0.0)
		t *= 2.0 - 0.5;
	return mix(
		getFromColor(uv),
		getToColor(uv),
		mix(t, progress, smoothstep(0.8, 1.0, progress))
	);
}
`},kn={name:"Window Slice",type:"geometric",description:"Sliced window reveal effect",uniforms:{count:10,smoothness:.5},source:`
uniform float count; // = 10.0
uniform float smoothness; // = 0.5

vec4 transition(vec2 p) {
	float pr = smoothstep(-smoothness, 0.0, p.x - progress * (1.0 + smoothness));
	float s = step(pr, fract(count * p.x));
	return mix(getFromColor(p), getToColor(p), s);
}
`},Dn={name:"Wipe Up",type:"wipe",description:"Wipe upward transition",uniforms:{},source:`
vec4 transition(vec2 uv) {
	vec2 p = uv.xy / vec2(1.0).xy;
	vec4 a = getFromColor(p);
	vec4 b = getToColor(p);
	return mix(a, b, step(0.0 + p.y, progress));
}
`},Ln={name:"Zoom In Circles",type:"zoom",description:"Circular zoom pattern transition",uniforms:{},source:`
vec4 transition(vec2 uv) {
	vec2 ratio2 = vec2(1.0, 1.0 / ratio);
	float s = pow(2.0 * abs(progress - 0.5), 3.0);
	
	float dist = length((uv - 0.5) * ratio2);
	return mix(
		getFromColor(uv),
		getToColor((uv - 0.5) * s + 0.5),
		step(dist, progress)
	);
}`},ur={angular:Vi,BookFlip:Ri,Bounce:_i,burn:Ni,cannabisleaf:Oi,CircularWipe:ki,circleopen:ji,colorphase:zi,ColourDistance:Di,CrazyParametricFun:Li,crossFade:Ui,crosshatch:Bi,crosswarp:$i,crossZoom:Wi,cube:Hi,Directional:Ki,directionalWipe:qi,directionalwarp:Xi,displacement:Yi,DoomScreenTransition:Gi,doorway:Zi,dreamy:Qi,fade:Ji,fadecolor:en,fadegrayscale:tn,flyeye:on,GlitchMemories:rn,GridFlip:sn,heart:ln,HorizontalClose:nn,HorizontalOpen:an,kaleidoscope:cn,LinearBlur:un,morph:fn,Mosaic:dn,mosaic_transition:hn,multiply_blend:mn,Overexposure:pn,pageCurl:vn,perlin:yn,pinwheel:xn,polar_function:bn,PolkaDotsCurtain:gn,Radial:Sn,randomsquares:wn,ripple:Cn,rotateTransition:En,rotate_scale_fade:Tn,scale_in:Fn,SimpleZoom:Mn,squeeze:Pn,Swirl:In,TVStatic:An,VerticalOpen:Vn,WaterDrop:Rn,wind:_n,windowblinds:Nn,windowslice:kn,wipeUp:Dn,ZoomInCircles:Ln};function On(r){return ur[r]}const jn=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
	gl_Position = vec4(position, 1., 1.);
	vUv = uv;
}
`,zn=`
precision highp float;
varying vec2 vUv;
uniform float progress, ratio;
uniform vec2 resolution;
uniform sampler2D from, to;
uniform float fromAspect, toAspect;

vec2 coverUv(vec2 uv, float imageAspect) {
	// Canvas aspect ratio is in 'ratio' uniform
	// Apply "contain" transformation to preserve image aspect ratio
	vec2 s = vec2(1.0);
	
	if (imageAspect > ratio) {
		// Image is wider than canvas - fit width, letterbox top/bottom
		s.y = ratio / imageAspect;
	} else {
		// Image is taller than canvas - fit height, pillarbox left/right
		s.x = imageAspect / ratio;
	}
	
	// Center the image
	vec2 offset = (vec2(1.0) - s) * 0.5;
	vec2 newUv = (uv - offset) / s;
	
	// Return black for areas outside the image
	if (newUv.x < 0.0 || newUv.x > 1.0 || newUv.y < 0.0 || newUv.y > 1.0) {
		return vec2(-1.0); // Signal out of bounds
	}
	
	return newUv;
}

vec4 getFromColor(vec2 uv) {
	vec2 newUv = coverUv(uv, fromAspect);
	if (newUv.x < 0.0) return vec4(0.0, 0.0, 0.0, 1.0);
	return texture2D(from, newUv);
}

vec4 getToColor(vec2 uv) {
	vec2 newUv = coverUv(uv, toAspect);
	if (newUv.x < 0.0) return vec4(0.0, 0.0, 0.0, 1.0);
	return texture2D(to, newUv);
}
`,Un=`
void main() {
	gl_FragColor = transition(vUv);
}
`;class Bn{canvas;gl;images;duration;interval;transitions;currentIndex=0;nextIndex=1;isTransitioning=!1;progress=0;startTime=0;intervalTimer=null;rafId=null;isPaused=!1;initialTimerId=null;transitionPromise=null;textureCache=new Map;texturePromises=new Map;program=null;uniformLocations={};constructor(o){this.canvas=o.canvas,this.images=o.images,this.duration=o.duration,this.interval=o.interval,this.transitions=o.transitions.length>0?o.transitions:["crossFade"];const e=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");if(!e)throw new Error("WebGL not supported");this.gl=e,this.init().catch(t=>{console.error("Failed to initialize WebGL slideshow:",t)})}async init(){if(this.images.length===0){console.warn("WebGLSlideshow initialized with no images.");return}await this.prepareInitialTextures(),this.setupGeometry(),this.setTransition(this.transitions[0]),this.resize(),this.play(),this.images.length>1&&(this.initialTimerId=window.setTimeout(()=>{this.isPaused||(this.next(),this.startInterval()),this.initialTimerId=null},500))}async prepareInitialTextures(){if(this.currentIndex=0,this.nextIndex=this.images.length>1?1:0,await this.ensureTexture(this.currentIndex),!this.textureCache.has(this.currentIndex))throw new Error("Unable to load initial slide texture");await this.ensureTexture(this.nextIndex),this.textureCache.has(this.nextIndex)||(this.nextIndex=this.currentIndex),this.releaseUnusedTextures([this.currentIndex,this.nextIndex])}async ensureTexture(o){if(o<0||o>=this.images.length||this.textureCache.has(o))return;const e=this.texturePromises.get(o);if(e){await e;return}const t=this.loadTextureForIndex(o).catch(s=>{console.error(`Failed to load slide ${o}:`,s)}).finally(()=>{this.texturePromises.delete(o)});this.texturePromises.set(o,t),await t}async loadTextureForIndex(o){const e=await this.resolveImageSource(this.images[o]);if(e)try{const t=this.createTextureFromSource(e.source);this.textureCache.set(o,{texture:t,aspect:e.height>0?e.width/e.height:1})}finally{e.cleanup?.()}}async resolveImageSource(o){return this.isDirectSource(o)?this.loadImageFromUrl(o):this.loadImageFromIndexedDb(o)}isDirectSource(o){return o.startsWith("data:")||o.startsWith("blob:")||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("/")}loadImageFromUrl(o){return new Promise((e,t)=>{const s=new Image;o.startsWith("data:")||(s.crossOrigin="anonymous"),s.onload=()=>e({source:s,width:s.width,height:s.height}),s.onerror=i=>t(i),s.src=o})}async loadImageFromIndexedDb(o){const e=await Qr(o);if(!e)return console.warn(`IndexedDB image not found for id ${o}`),null;if(typeof createImageBitmap=="function"){const t=await createImageBitmap(e);return{source:t,width:t.width,height:t.height,cleanup:()=>t.close()}}return new Promise((t,s)=>{const i=URL.createObjectURL(e),n=new Image;n.onload=()=>{URL.revokeObjectURL(i),t({source:n,width:n.width,height:n.height})},n.onerror=a=>{URL.revokeObjectURL(i),s(a)},n.src=i})}createTextureFromSource(o){const e=this.gl.createTexture();if(!e)throw new Error("Failed to create texture");return this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),e}releaseUnusedTextures(o){const e=new Set(o);for(const[t,s]of this.textureCache.entries())e.has(t)||(this.gl.deleteTexture(s.texture),this.textureCache.delete(t))}prepareNextTarget(){if(this.images.length<=1){this.nextIndex=this.currentIndex;return}const o=(this.currentIndex+1)%this.images.length;this.ensureTexture(o).then(()=>{this.nextIndex=o,this.releaseUnusedTextures([this.currentIndex,this.nextIndex])}).catch(e=>{console.error("Failed to prepare next slide:",e)})}setupGeometry(){const o=new Float32Array([-1,-1,0,1,1,-1,1,1,-1,1,0,0,1,1,1,0]),e=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ARRAY_BUFFER,o,this.gl.STATIC_DRAW)}createShader(o,e){const t=this.gl.createShader(o);if(!t)throw new Error("Failed to create shader");if(this.gl.shaderSource(t,e),this.gl.compileShader(t),!this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS)){const s=this.gl.getShaderInfoLog(t);throw this.gl.deleteShader(t),new Error(`Shader compilation failed: ${s}`)}return t}createProgram(o,e){const t=this.createShader(this.gl.VERTEX_SHADER,o),s=this.createShader(this.gl.FRAGMENT_SHADER,e),i=this.gl.createProgram();if(!i)throw new Error("Failed to create program");if(this.gl.attachShader(i,t),this.gl.attachShader(i,s),this.gl.linkProgram(i),!this.gl.getProgramParameter(i,this.gl.LINK_STATUS)){const n=this.gl.getProgramInfoLog(i);throw this.gl.deleteProgram(i),new Error(`Program linking failed: ${n}`)}return i}setTransition(o){const e=On(o);if(!e){console.warn(`Transition "${o}" not found, using crossFade`),this.setTransition("crossFade");return}const t=zn+e.source+Un;this.program&&this.gl.deleteProgram(this.program),this.program=this.createProgram(jn,t),this.gl.useProgram(this.program);const s=this.gl.getAttribLocation(this.program,"position"),i=this.gl.getAttribLocation(this.program,"uv");this.gl.enableVertexAttribArray(s),this.gl.enableVertexAttribArray(i),this.gl.vertexAttribPointer(s,2,this.gl.FLOAT,!1,16,0),this.gl.vertexAttribPointer(i,2,this.gl.FLOAT,!1,16,8),this.uniformLocations={progress:this.gl.getUniformLocation(this.program,"progress"),ratio:this.gl.getUniformLocation(this.program,"ratio"),resolution:this.gl.getUniformLocation(this.program,"resolution"),from:this.gl.getUniformLocation(this.program,"from"),to:this.gl.getUniformLocation(this.program,"to"),fromAspect:this.gl.getUniformLocation(this.program,"fromAspect"),toAspect:this.gl.getUniformLocation(this.program,"toAspect")};for(const n in e.uniforms)this.uniformLocations[n]=this.gl.getUniformLocation(this.program,n);for(const n in e.uniforms){const a=e.uniforms[n],l=this.uniformLocations[n];l&&(Array.isArray(a)?a.length===2?this.gl.uniform2fv(l,a):a.length===3?this.gl.uniform3fv(l,a):a.length===4&&this.gl.uniform4fv(l,a):this.gl.uniform1f(l,Number(a)))}}render(o){if(!this.program)return;this.isTransitioning?(this.progress=Math.min((o-this.startTime)/this.duration,1),this.progress>=1&&(this.isTransitioning=!1,this.currentIndex=this.nextIndex,this.prepareNextTarget())):this.progress=0;const e=this.textureCache.get(this.currentIndex),t=this.textureCache.get(this.nextIndex);if(!e||!t){e||this.ensureTexture(this.currentIndex),t||this.ensureTexture(this.nextIndex),this.isPaused||(this.rafId=requestAnimationFrame(s=>this.render(s)));return}this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.uniformLocations.progress&&this.gl.uniform1f(this.uniformLocations.progress,this.progress),this.uniformLocations.ratio&&this.gl.uniform1f(this.uniformLocations.ratio,this.canvas.width/this.canvas.height),this.uniformLocations.resolution&&this.gl.uniform2f(this.uniformLocations.resolution,this.canvas.width,this.canvas.height),this.uniformLocations.fromAspect&&this.gl.uniform1f(this.uniformLocations.fromAspect,e.aspect),this.uniformLocations.toAspect&&this.gl.uniform1f(this.uniformLocations.toAspect,t.aspect),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e.texture),this.uniformLocations.from&&this.gl.uniform1i(this.uniformLocations.from,0),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,t.texture),this.uniformLocations.to&&this.gl.uniform1i(this.uniformLocations.to,1),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.isPaused?this.rafId=null:this.rafId=requestAnimationFrame(s=>this.render(s))}startInterval(){this.images.length<=1||(this.intervalTimer=window.setTimeout(()=>{this.isPaused||(this.next(),this.startInterval())},this.interval))}next(){if(this.isTransitioning||this.isPaused||this.images.length<=1)return;const o=(this.currentIndex+1)%this.images.length;this.startTransition(o)}prev(){if(this.isTransitioning||this.isPaused||this.images.length<=1)return;const o=this.currentIndex===0?this.images.length-1:this.currentIndex-1;this.startTransition(o)}goTo(o){this.isTransitioning||this.isPaused||o!==this.currentIndex&&(o<0||o>=this.images.length||this.startTransition(o))}startTransition(o){this.isPaused||this.isTransitioning||this.transitionPromise||(this.transitionPromise=this.ensureTexture(o).then(()=>{if(!this.textureCache.has(o))return;this.nextIndex=o,this.isTransitioning=!0,this.startTime=performance.now();const e=Math.floor(Math.random()*this.transitions.length);this.setTransition(this.transitions[e]),this.releaseUnusedTextures([this.currentIndex,this.nextIndex])}).catch(e=>{console.error("Failed to start transition:",e)}).finally(()=>{this.transitionPromise=null}))}resize(){const o=window.devicePixelRatio||1,e=this.canvas.clientWidth*o,t=this.canvas.clientHeight*o;(this.canvas.width!==e||this.canvas.height!==t)&&(this.canvas.width=e,this.canvas.height=t)}play(){this.isPaused=!1,this.rafId||(this.rafId=requestAnimationFrame(o=>this.render(o))),!this.intervalTimer&&this.images.length>1&&this.startInterval()}pause(){this.isPaused=!0,this.intervalTimer&&(clearTimeout(this.intervalTimer),this.intervalTimer=null),this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.initialTimerId&&(clearTimeout(this.initialTimerId),this.initialTimerId=null)}resume(){this.isPaused&&(this.isPaused=!1,this.isTransitioning&&(this.startTime=performance.now()-this.progress*this.duration),this.rafId||(this.rafId=requestAnimationFrame(o=>this.render(o))),!this.intervalTimer&&this.images.length>1&&this.startInterval())}destroy(){this.intervalTimer&&clearTimeout(this.intervalTimer),this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.initialTimerId&&(clearTimeout(this.initialTimerId),this.initialTimerId=null);for(const o of this.textureCache.values())this.gl.deleteTexture(o.texture);this.textureCache.clear(),this.program&&this.gl.deleteProgram(this.program)}get length(){return this.images.length}get currentImageIndex(){return this.currentIndex}}const Ce=new WeakMap,Be=new WeakMap,Ge={current:[]};let ut=!1,Re=0;const Ae=new Set,ke=new Map;function dr(r){const o=Array.from(r).sort((e,t)=>e instanceof ae&&e.options.deps.includes(t)?1:t instanceof ae&&t.options.deps.includes(e)?-1:0);for(const e of o){if(Ge.current.includes(e))continue;Ge.current.push(e),e.recompute();const t=Be.get(e);if(t)for(const s of t){const i=Ce.get(s);i&&dr(i)}}}function $n(r){const o={prevVal:r.prevState,currentVal:r.state};for(const e of r.listeners)e(o)}function Wn(r){const o={prevVal:r.prevState,currentVal:r.state};for(const e of r.listeners)e(o)}function fr(r){if(Re>0&&!ke.has(r)&&ke.set(r,r.prevState),Ae.add(r),!(Re>0)&&!ut)try{for(ut=!0;Ae.size>0;){const o=Array.from(Ae);Ae.clear();for(const e of o){const t=ke.get(e)??e.prevState;e.prevState=t,$n(e)}for(const e of o){const t=Ce.get(e);t&&(Ge.current.push(e),dr(t))}for(const e of o){const t=Ce.get(e);if(t)for(const s of t)Wn(s)}}}finally{ut=!1,Ge.current=[],ke.clear()}}function ne(r){Re++;try{r()}finally{if(Re--,Re===0){const o=Ae.values().next().value;o&&fr(o)}}}function Hn(r){return typeof r=="function"}class qe{constructor(o,e){this.listeners=new Set,this.subscribe=t=>{var s,i;this.listeners.add(t);const n=(i=(s=this.options)==null?void 0:s.onSubscribe)==null?void 0:i.call(s,t,this);return()=>{this.listeners.delete(t),n?.()}},this.prevState=o,this.state=o,this.options=e}setState(o){var e,t,s;this.prevState=this.state,(e=this.options)!=null&&e.updateFn?this.state=this.options.updateFn(this.prevState)(o):Hn(o)?this.state=o(this.prevState):this.state=o,(s=(t=this.options)==null?void 0:t.onUpdate)==null||s.call(t),fr(this)}}class ae{constructor(o){this.listeners=new Set,this._subscriptions=[],this.lastSeenDepValues=[],this.getDepVals=()=>{const e=this.options.deps.length,t=new Array(e),s=new Array(e);for(let i=0;i<e;i++){const n=this.options.deps[i];t[i]=n.prevState,s[i]=n.state}return this.lastSeenDepValues=s,{prevDepVals:t,currDepVals:s,prevVal:this.prevState??void 0}},this.recompute=()=>{var e,t;this.prevState=this.state;const s=this.getDepVals();this.state=this.options.fn(s),(t=(e=this.options).onUpdate)==null||t.call(e)},this.checkIfRecalculationNeededDeeply=()=>{for(const i of this.options.deps)i instanceof ae&&i.checkIfRecalculationNeededDeeply();let e=!1;const t=this.lastSeenDepValues,{currDepVals:s}=this.getDepVals();for(let i=0;i<s.length;i++)if(s[i]!==t[i]){e=!0;break}e&&this.recompute()},this.mount=()=>(this.registerOnGraph(),this.checkIfRecalculationNeededDeeply(),()=>{this.unregisterFromGraph();for(const e of this._subscriptions)e()}),this.subscribe=e=>{var t,s;this.listeners.add(e);const i=(s=(t=this.options).onSubscribe)==null?void 0:s.call(t,e,this);return()=>{this.listeners.delete(e),i?.()}},this.options=o,this.state=o.fn({prevDepVals:void 0,prevVal:void 0,currDepVals:this.getDepVals().currDepVals})}registerOnGraph(o=this.options.deps){for(const e of o)if(e instanceof ae)e.registerOnGraph(),this.registerOnGraph(e.options.deps);else if(e instanceof qe){let t=Ce.get(e);t||(t=new Set,Ce.set(e,t)),t.add(this);let s=Be.get(this);s||(s=new Set,Be.set(this,s)),s.add(e)}}unregisterFromGraph(o=this.options.deps){for(const e of o)if(e instanceof ae)this.unregisterFromGraph(e.options.deps);else if(e instanceof qe){const t=Ce.get(e);t&&t.delete(this);const s=Be.get(this);s&&s.delete(e)}}}function Kn(r){return typeof r=="function"}function Ut(r,...o){return Kn(r)?r(...o):r}function Gn(r){return r||(typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"")}class hr{#o=!0;#e;#t;#i;#r;#s;#n;#l;#u=0;#f=5;#a=!1;#d=()=>{this.debugLog("Connected to event bus"),this.#s=!0,this.#a=!1,this.debugLog("Emitting queued events",this.#r),this.#r.forEach(o=>this.emitEventToBus(o)),this.#r=[],this.stopConnectLoop(),this.#t().removeEventListener("tanstack-connect-success",this.#d)};#c=()=>{if(this.#u<this.#f){this.#u++,this.dispatchCustomEvent("tanstack-connect",{});return}this.#t().removeEventListener("tanstack-connect",this.#c),this.debugLog("Max retries reached, giving up on connection"),this.stopConnectLoop()};#h=()=>{this.#a||(this.#a=!0,this.#t().addEventListener("tanstack-connect-success",this.#d),this.#c())};constructor({pluginId:o,debug:e=!1,enabled:t=!0,reconnectEveryMs:s=300}){this.#e=o,this.#o=t,this.#t=this.getGlobalTarget,this.#i=e,this.debugLog(" Initializing event subscription for plugin",this.#e),this.#r=[],this.#s=!1,this.#n=null,this.#l=s}startConnectLoop(){this.#n!==null||this.#s||(this.debugLog(`Starting connect loop (every ${this.#l}ms)`),this.#n=setInterval(this.#c,this.#l))}stopConnectLoop(){this.#a=!1,this.#n!==null&&(clearInterval(this.#n),this.#n=null,this.debugLog("Stopped connect loop"))}debugLog(...o){this.#i&&console.log(`🌴 [tanstack-devtools:${this.#e}-plugin]`,...o)}getGlobalTarget(){if(typeof globalThis<"u"&&globalThis.__TANSTACK_EVENT_TARGET__)return this.debugLog("Using global event target"),globalThis.__TANSTACK_EVENT_TARGET__;if(typeof window<"u"&&typeof window.addEventListener<"u")return this.debugLog("Using window as event target"),window;const o=typeof EventTarget<"u"?new EventTarget:void 0;return typeof o>"u"||typeof o.addEventListener>"u"?(this.debugLog("No event mechanism available, running in non-web environment"),{addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:()=>!1}):(this.debugLog("Using new EventTarget as fallback"),o)}getPluginId(){return this.#e}dispatchCustomEventShim(o,e){try{const t=new Event(o,{detail:e});this.#t().dispatchEvent(t)}catch{this.debugLog("Failed to dispatch shim event")}}dispatchCustomEvent(o,e){try{this.#t().dispatchEvent(new CustomEvent(o,{detail:e}))}catch{this.dispatchCustomEventShim(o,e)}}emitEventToBus(o){this.debugLog("Emitting event to client bus",o),this.dispatchCustomEvent("tanstack-dispatch-event",o)}emit(o,e){if(!this.#o){this.debugLog("Event bus client is disabled, not emitting event",o,e);return}if(!this.#s){this.debugLog("Bus not available, will be pushed as soon as connected"),this.#r.push({type:`${this.#e}:${o}`,payload:e,pluginId:this.#e}),typeof CustomEvent<"u"&&!this.#a&&(this.#h(),this.startConnectLoop());return}return this.emitEventToBus({type:`${this.#e}:${o}`,payload:e,pluginId:this.#e})}on(o,e){const t=`${this.#e}:${o}`;if(!this.#o)return this.debugLog("Event bus client is disabled, not registering event",t),()=>{};const s=i=>{this.debugLog("Received event from bus",i.detail),e(i.detail)};return this.#t().addEventListener(t,s),this.debugLog("Registered event to bus",t),()=>{this.#t().removeEventListener(t,s)}}onAll(o){if(!this.#o)return this.debugLog("Event bus client is disabled, not registering event"),()=>{};const e=t=>{const s=t.detail;o(s)};return this.#t().addEventListener("tanstack-devtools-global",e),()=>this.#t().removeEventListener("tanstack-devtools-global",e)}onAllPluginEvents(o){if(!this.#o)return this.debugLog("Event bus client is disabled, not registering event"),()=>{};const e=t=>{const s=t.detail;this.#e&&s.pluginId!==this.#e||o(s)};return this.#t().addEventListener("tanstack-devtools-global",e),()=>this.#t().removeEventListener("tanstack-devtools-global",e)}}class qn extends hr{constructor(o){super({pluginId:"pacer",debug:o?.debug})}}const Xn=(r,o)=>{mr.emit(r,o)},mr=new qn;function Bt(){return{executionCount:0,isPending:!1,lastArgs:void 0,lastExecutionTime:0,nextExecutionTime:0,status:"idle",maybeExecuteCount:0}}const Yn={enabled:!0,leading:!0,trailing:!0,wait:0};class Zn{constructor(o,e){this.fn=o,this.store=new qe(Bt()),this.setOptions=t=>{this.options={...this.options,...t},this.#t()||this.cancel()},this.#e=t=>{this.store.setState(s=>{const i={...s,...t},{isPending:n}=i;return{...i,status:this.#t()?n?"pending":"idle":"disabled"}}),Xn("Throttler",this)},this.#t=()=>!!Ut(this.options.enabled,this),this.#i=()=>Ut(this.options.wait,this),this.maybeExecute=(...t)=>{this.#e({maybeExecuteCount:this.store.state.maybeExecuteCount+1});const s=Date.now(),i=s-this.store.state.lastExecutionTime,n=this.#i();if(this.options.leading&&i>=n)this.#r(...t);else if(this.#e({lastArgs:t}),!this.#o&&this.options.trailing){const a=this.store.state.lastExecutionTime?s-this.store.state.lastExecutionTime:0,l=n-a;this.#e({isPending:!0}),this.#o=setTimeout(()=>{const{lastArgs:c}=this.store.state;c!==void 0&&this.#r(...c)},l)}},this.#r=(...t)=>{if(!this.#t())return;this.fn(...t);const s=Date.now(),i=s+this.#i();this.#s(),this.#e({executionCount:this.store.state.executionCount+1,lastExecutionTime:s,nextExecutionTime:i,isPending:!1,lastArgs:void 0}),this.options.onExecute?.(t,this),setTimeout(()=>{this.store.state.isPending||this.#e({nextExecutionTime:void 0})},this.#i())},this.flush=()=>{this.store.state.isPending&&this.store.state.lastArgs&&this.#r(...this.store.state.lastArgs)},this.#s=()=>{this.#o&&(clearTimeout(this.#o),this.#o=void 0)},this.cancel=()=>{this.#s(),this.#e({lastArgs:void 0,isPending:!1})},this.reset=()=>{this.#e(Bt())},this.key=Gn(e.key),this.options={...Yn,...e},this.#e(this.options.initialState??{}),mr.on("d-Throttler",t=>{t.payload.key===this.key&&(this.#e(t.payload.store.state),this.setOptions(t.payload.options))})}#o;#e;#t;#i;#r;#s}function Qn(r,o){return new Zn(r,o).maybeExecute}function rt(r,o){return typeof r=="function"?r(o):r}function Ve(r,o){return Ot(o).reduce((t,s)=>{if(t===null)return null;if(typeof t<"u")return t[s]},r)}function De(r,o,e){const t=Ot(o);function s(i){if(!t.length)return rt(e,i);const n=t.shift();if(typeof n=="string"||typeof n=="number"&&!Array.isArray(i))return typeof i=="object"?(i===null&&(i={}),{...i,[n]:s(i[n])}):{[n]:s()};if(Array.isArray(i)&&typeof n=="number"){const a=i.slice(0,n);return[...a.length?a:new Array(n),s(i[n]),...i.slice(n+1)]}return[...new Array(n),s()]}return s(r)}function Jn(r,o){const e=Ot(o);function t(s){if(!s)return;if(e.length===1){const n=e[0];if(Array.isArray(s)&&typeof n=="number")return s.filter((c,p)=>p!==n);const{[n]:a,...l}=s;return l}const i=e.shift();if(typeof i=="string"&&typeof s=="object")return{...s,[i]:t(s[i])};if(typeof i=="number"&&Array.isArray(s)){if(i>=s.length)return s;const n=s.slice(0,i);return[...n.length?n:new Array(i),t(s[i]),...s.slice(i+1)]}throw new Error("It seems we have created an infinite loop in deleteBy. ")}return t(r)}const ea=/^(\d+)$/gm,ta=/\.(\d+)(?=\.)/gm,oa=/^(\d+)\./gm,ra=/\.(\d+$)/gm,sa=/\.{2,}/gm,wt="__int__",Le=`${wt}$1`;function Ot(r){if(Array.isArray(r))return[...r];if(typeof r!="string")throw new Error("Path must be a string.");return r.replace(/(^\[)|]/gm,"").replace(/\[/g,".").replace(ea,Le).replace(ta,`.${Le}.`).replace(oa,`${Le}.`).replace(ra,`.${Le}`).replace(sa,".").split(".").map(o=>{if(o.startsWith(wt)){const e=o.substring(wt.length),t=parseInt(e,10);return String(t)===e?t:e}return o})}function ia(r){return!(Array.isArray(r)&&r.length===0)}function Ct(r,o){const e=t=>t.validators.filter(Boolean).map(s=>({cause:s.cause,validate:s.fn}));return o.validationLogic({form:o.form,validators:o.validators,event:{type:r,async:!1},runValidation:e})}function Tt(r,o){const{asyncDebounceMs:e}=o,{onBlurAsyncDebounceMs:t,onChangeAsyncDebounceMs:s,onDynamicAsyncDebounceMs:i}=o.validators||{},n=e??0,a=l=>l.validators.filter(Boolean).map(c=>{const p=c?.cause||r;let f=n;switch(p){case"change":f=s??n;break;case"blur":f=t??n;break;case"dynamic":f=i??n;break;case"submit":f=0;break}return r==="submit"&&(f=0),{cause:p,validate:c.fn,debounceMs:f}});return o.validationLogic({form:o.form,validators:o.validators,event:{type:r,async:!0},runValidation:a})}const Et=r=>!!r&&typeof r=="object"&&"fields"in r;function be(r,o){if(Object.is(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;if(r instanceof Date&&o instanceof Date)return r.getTime()===o.getTime();if(r instanceof Map&&o instanceof Map){if(r.size!==o.size)return!1;for(const[s,i]of r)if(!o.has(s)||!Object.is(i,o.get(s)))return!1;return!0}if(r instanceof Set&&o instanceof Set){if(r.size!==o.size)return!1;for(const s of r)if(!o.has(s))return!1;return!0}const e=Object.keys(r),t=Object.keys(o);if(e.length!==t.length)return!1;for(const s of e)if(!t.includes(s)||!be(r[s],o[s]))return!1;return!0}const $t=({newFormValidatorError:r,isPreviousErrorFromFormValidator:o,previousErrorValue:e})=>r?{newErrorValue:r,newSource:"form"}:o?{newErrorValue:void 0,newSource:void 0}:e?{newErrorValue:e,newSource:"field"}:{newErrorValue:void 0,newSource:void 0},Wt=({formLevelError:r,fieldLevelError:o})=>o?{newErrorValue:o,newSource:"field"}:r?{newErrorValue:r,newSource:"form"}:{newErrorValue:void 0,newSource:void 0};function Y(r,o){return r==null?o:{...r,...o}}let ge=256;const $e=[];let Oe;for(;ge--;)$e[ge]=(ge+256).toString(16).substring(1);function na(){let r=0,o,e="";if(!Oe||ge+16>256){for(Oe=new Array(256),r=256;r--;)Oe[r]=256*Math.random()|0;r=0,ge=0}for(;r<16;r++)o=Oe[ge+r],r===6?e+=$e[o&15|64]:r===8?e+=$e[o&63|128]:e+=$e[o],r&1&&r>1&&r<11&&(e+="-");return ge++,e}const we=r=>{if(!r.validators)return r.runValidation({validators:[],form:r.form});const o=r.event.async,e=o?void 0:{fn:r.validators.onMount,cause:"mount"},t={fn:o?r.validators.onChangeAsync:r.validators.onChange,cause:"change"},s={fn:o?r.validators.onBlurAsync:r.validators.onBlur,cause:"blur"},i={fn:o?r.validators.onSubmitAsync:r.validators.onSubmit,cause:"submit"},n=o?void 0:{fn:()=>{},cause:"server"};switch(r.event.type){case"mount":return r.runValidation({validators:[e],form:r.form});case"submit":return r.runValidation({validators:[t,s,i,n],form:r.form});case"server":return r.runValidation({validators:[],form:r.form});case"blur":return r.runValidation({validators:[s,n],form:r.form});case"change":return r.runValidation({validators:[t,n],form:r.form});default:throw new Error(`Unknown validation event type: ${r.event.type}`)}};function aa(r,o){const e=new Map;for(const t of r){const s=t.path??[];let i=o,n="";for(let a=0;a<s.length;a++){const l=s[a];if(l===void 0)continue;const c=typeof l=="object"?l.key:l,p=Number(c);Array.isArray(i)&&!Number.isNaN(p)?n+=`[${p}]`:n+=(a>0?".":"")+String(c),typeof i=="object"&&i!==null?i=i[c]:i=void 0}e.set(n,(e.get(n)??[]).concat(t))}return Object.fromEntries(e)}const Ht=(r,o)=>{const e=aa(r,o);return{form:e,fields:e}},Te={validate({value:r,validationSource:o},e){const t=e["~standard"].validate(r);if(t instanceof Promise)throw new Error("async function passed to sync validator");if(t.issues)return o==="field"?t.issues:Ht(t.issues,r)},async validateAsync({value:r,validationSource:o},e){const t=await e["~standard"].validate(r);if(t.issues)return o==="field"?t.issues:Ht(t.issues,r)}},pr=r=>!!r&&"~standard"in r,Xe={isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,isValid:!0,isDefaultValue:!0,errors:[],errorMap:{},errorSourceMap:{}};function je(r){function o(f,h,v,y){const m=t(f,h,v,y);({insert:()=>a(m,f,h),remove:()=>l(m),swap:()=>y!==void 0&&p(m,f,h,y),move:()=>y!==void 0&&c(m,f,h,y)})[v]()}function e(f,h){return`${f}[${h}]`}function t(f,h,v,y){const m=[e(f,h)];if(v==="swap")m.push(e(f,y));else if(v==="move"){const[g,b]=[Math.min(h,y),Math.max(h,y)];for(let x=g;x<=b;x++)m.push(e(f,x))}else{const g=r.getFieldValue(f),b=Array.isArray(g)?g.length:0;for(let x=h+1;x<b;x++)m.push(e(f,x))}return Object.keys(r.fieldInfo).filter(g=>m.some(b=>g.startsWith(b)))}function s(f,h){return f.replace(/\[(\d+)\]/,(v,y)=>{const m=parseInt(y,10);return`[${h==="up"?m+1:Math.max(0,m-1)}]`})}function i(f,h){(h==="up"?f:[...f].reverse()).forEach(y=>{const m=s(y.toString(),h),g=r.getFieldMeta(m);g?r.setFieldMeta(y,g):r.setFieldMeta(y,n())})}const n=()=>Xe,a=(f,h,v)=>{i(f,"down"),f.forEach(y=>{y.toString().startsWith(e(h,v))&&r.setFieldMeta(y,n())})},l=f=>{i(f,"up")},c=(f,h,v,y)=>{const m=new Map(Object.keys(r.fieldInfo).filter(g=>g.startsWith(e(h,v))).map(g=>[g,r.getFieldMeta(g)]));i(f,v<y?"up":"down"),Object.keys(r.fieldInfo).filter(g=>g.startsWith(e(h,y))).forEach(g=>{const b=g.replace(e(h,y),e(h,v)),x=m.get(b);x&&r.setFieldMeta(g,x)})},p=(f,h,v,y)=>{f.forEach(m=>{if(!m.toString().startsWith(e(h,v)))return;const g=m.toString().replace(e(h,v),e(h,y)),[b,x]=[r.getFieldMeta(m),r.getFieldMeta(g)];b&&r.setFieldMeta(g,b),x&&r.setFieldMeta(m,x)})};return{handleArrayFieldMetaShift:o}}class la extends hr{constructor(){super({pluginId:"form-devtools",reconnectEveryMs:1e3})}}const oe=new la;function dt(r){return{values:r.values??{},errorMap:r.errorMap??{},fieldMetaBase:r.fieldMetaBase??{},isSubmitted:r.isSubmitted??!1,isSubmitting:r.isSubmitting??!1,isValidating:r.isValidating??!1,submissionAttempts:r.submissionAttempts??0,isSubmitSuccessful:r.isSubmitSuccessful??!1,validationMetaMap:r.validationMetaMap??{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0,onDynamic:void 0}}}class ca{constructor(o){this.options={},this.fieldInfo={},this.prevTransformArray=[],this.mount=()=>{const t=this.fieldMetaDerived.mount(),s=this.store.mount(),i=()=>{t(),s(),oe.emit("form-unmounted",{id:this._formId})};this.options.listeners?.onMount?.({formApi:this});const{onMount:n}=this.options.validators||{};return oe.emit("form-api",{id:this._formId,state:this.store.state,options:this.options}),n&&this.validateSync("mount"),i},this.update=t=>{if(!t)return;const s=this.options;this.options=t;const i=!!t.transform?.deps?.some((l,c)=>l!==this.prevTransformArray[c]),n=t.defaultValues&&!be(t.defaultValues,s.defaultValues)&&!this.state.isTouched,a=!be(t.defaultState,s.defaultState)&&!this.state.isTouched;!n&&!a&&!i||(ne(()=>{this.baseStore.setState(()=>dt(Object.assign({},this.state,a?t.defaultState:{},n?{values:t.defaultValues}:{},i?{_force_re_eval:!this.state._force_re_eval}:{})))}),oe.emit("form-api",{id:this._formId,state:this.store.state,options:this.options}))},this.reset=(t,s)=>{const{fieldMeta:i}=this.state,n=this.resetFieldMeta(i);t&&!s?.keepDefaultValues&&(this.options={...this.options,defaultValues:t}),this.baseStore.setState(()=>dt({...this.options.defaultState,values:t??this.options.defaultValues??this.options.defaultState?.values,fieldMetaBase:n}))},this.validateAllFields=async t=>{const s=[];return ne(()=>{Object.values(this.fieldInfo).forEach(n=>{if(!n.instance)return;const a=n.instance;s.push(Promise.resolve().then(()=>a.validate(t,{skipFormValidation:!0}))),n.instance.state.meta.isTouched||n.instance.setMeta(l=>({...l,isTouched:!0}))})}),(await Promise.all(s)).flat()},this.validateArrayFieldsStartingFrom=async(t,s,i)=>{const n=this.getFieldValue(t),a=Array.isArray(n)?Math.max(n.length-1,0):null,l=[`${t}[${s}]`];for(let h=s+1;h<=(a??0);h++)l.push(`${t}[${h}]`);const c=Object.keys(this.fieldInfo).filter(h=>l.some(v=>h.startsWith(v))),p=[];return ne(()=>{c.forEach(h=>{p.push(Promise.resolve().then(()=>this.validateField(h,i)))})}),(await Promise.all(p)).flat()},this.validateField=(t,s)=>{const i=this.fieldInfo[t]?.instance;return i?(i.state.meta.isTouched||i.setMeta(n=>({...n,isTouched:!0})),i.validate(s)):[]},this.validateSync=t=>{const s=Ct(t,{...this.options,form:this,validationLogic:this.options.validationLogic||we});let i=!1;const n={};return ne(()=>{for(const c of s){if(!c.validate)continue;const p=this.runValidator({validate:c.validate,value:{value:this.state.values,formApi:this,validationSource:"form"},type:"validate"}),{formError:f,fieldErrors:h}=We(p),v=Fe(c.cause);for(const y of Object.keys(this.state.fieldMeta)){if(this.baseStore.state.fieldMetaBase[y]===void 0)continue;const m=this.getFieldMeta(y);if(!m)continue;const{errorMap:g,errorSourceMap:b}=m,x=h?.[y],{newErrorValue:S,newSource:E}=$t({newFormValidatorError:x,isPreviousErrorFromFormValidator:b?.[v]==="form",previousErrorValue:g?.[v]});E==="form"&&(n[y]={...n[y],[v]:x}),g?.[v]!==S&&this.setFieldMeta(y,I=>({...I,errorMap:{...I.errorMap,[v]:S},errorSourceMap:{...I.errorSourceMap,[v]:E}}))}this.state.errorMap?.[v]!==f&&this.baseStore.setState(y=>({...y,errorMap:{...y.errorMap,[v]:f}})),(f||h)&&(i=!0)}const a=Fe("submit");this.state.errorMap?.[a]&&t!=="submit"&&!i&&this.baseStore.setState(c=>({...c,errorMap:{...c.errorMap,[a]:void 0}}));const l=Fe("server");this.state.errorMap?.[l]&&t!=="server"&&!i&&this.baseStore.setState(c=>({...c,errorMap:{...c.errorMap,[l]:void 0}}))}),{hasErrored:i,fieldsErrorMap:n}},this.validateAsync=async t=>{const s=Tt(t,{...this.options,form:this,validationLogic:this.options.validationLogic||we});this.state.isFormValidating||this.baseStore.setState(c=>({...c,isFormValidating:!0}));const i=[];let n;for(const c of s){if(!c.validate)continue;const p=Fe(c.cause);this.state.validationMetaMap[p]?.lastAbortController.abort();const h=new AbortController;this.state.validationMetaMap[p]={lastAbortController:h},i.push(new Promise(async v=>{let y;try{y=await new Promise((x,S)=>{setTimeout(async()=>{if(h.signal.aborted)return x(void 0);try{x(await this.runValidator({validate:c.validate,value:{value:this.state.values,formApi:this,validationSource:"form",signal:h.signal},type:"validateAsync"}))}catch(E){S(E)}},c.debounceMs)})}catch(x){y=x}const{formError:m,fieldErrors:g}=We(y);g&&(n=n?{...n,...g}:g);const b=Fe(c.cause);for(const x of Object.keys(this.state.fieldMeta)){if(this.baseStore.state.fieldMetaBase[x]===void 0)continue;const S=this.getFieldMeta(x);if(!S)continue;const{errorMap:E,errorSourceMap:I}=S,j=n?.[x],{newErrorValue:A,newSource:R}=$t({newFormValidatorError:j,isPreviousErrorFromFormValidator:I?.[b]==="form",previousErrorValue:E?.[b]});E?.[b]!==A&&this.setFieldMeta(x,L=>({...L,errorMap:{...L.errorMap,[b]:A},errorSourceMap:{...L.errorSourceMap,[b]:R}}))}this.baseStore.setState(x=>({...x,errorMap:{...x.errorMap,[b]:m}})),v(n?{fieldErrors:n,errorMapKey:b}:void 0)}))}let a=[];const l={};if(i.length){a=await Promise.all(i);for(const c of a)if(c?.fieldErrors){const{errorMapKey:p}=c;for(const[f,h]of Object.entries(c.fieldErrors)){const y={...l[f]||{},[p]:h};l[f]=y}}}return this.baseStore.setState(c=>({...c,isFormValidating:!1})),l},this.validate=t=>{const{hasErrored:s,fieldsErrorMap:i}=this.validateSync(t);return s&&!this.options.asyncAlways?i:this.validateAsync(t)},this.getFieldValue=t=>Ve(this.state.values,t),this.getFieldMeta=t=>this.state.fieldMeta[t],this.getFieldInfo=t=>this.fieldInfo[t]||={instance:null,validationMetaMap:{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0,onDynamic:void 0}},this.setFieldMeta=(t,s)=>{this.baseStore.setState(i=>({...i,fieldMetaBase:{...i.fieldMetaBase,[t]:rt(s,i.fieldMetaBase[t])}}))},this.resetFieldMeta=t=>Object.keys(t).reduce((s,i)=>{const n=i;return s[n]=Xe,s},{}),this.setFieldValue=(t,s,i)=>{const n=i?.dontUpdateMeta??!1,a=i?.dontRunListeners??!1,l=i?.dontValidate??!1;ne(()=>{n||this.setFieldMeta(t,c=>({...c,isTouched:!0,isDirty:!0,errorMap:{...c?.errorMap,onMount:void 0}})),this.baseStore.setState(c=>({...c,values:De(c.values,t,s)}))}),a||this.getFieldInfo(t).instance?.triggerOnChangeListener(),l||this.validateField(t,"change")},this.deleteField=t=>{const i=[...Object.keys(this.fieldInfo).filter(n=>{const a=t.toString();return n!==a&&n.startsWith(a)}),t];this.baseStore.setState(n=>{const a={...n};return i.forEach(l=>{a.values=Jn(a.values,l),delete this.fieldInfo[l],delete a.fieldMetaBase[l]}),a})},this.pushFieldValue=(t,s,i)=>{this.setFieldValue(t,n=>[...Array.isArray(n)?n:[],s],i)},this.insertFieldValue=async(t,s,i,n)=>{this.setFieldValue(t,l=>[...l.slice(0,s),i,...l.slice(s)],Y(n,{dontValidate:!0}));const a=n?.dontValidate??!1;a||await this.validateField(t,"change"),je(this).handleArrayFieldMetaShift(t,s,"insert"),a||await this.validateArrayFieldsStartingFrom(t,s,"change")},this.replaceFieldValue=async(t,s,i,n)=>{this.setFieldValue(t,l=>l.map((c,p)=>p===s?i:c),Y(n,{dontValidate:!0})),(n?.dontValidate??!1)||(await this.validateField(t,"change"),await this.validateArrayFieldsStartingFrom(t,s,"change"))},this.removeFieldValue=async(t,s,i)=>{const n=this.getFieldValue(t),a=Array.isArray(n)?Math.max(n.length-1,0):null;if(this.setFieldValue(t,c=>c.filter((p,f)=>f!==s),Y(i,{dontValidate:!0})),je(this).handleArrayFieldMetaShift(t,s,"remove"),a!==null){const c=`${t}[${a}]`;this.deleteField(c)}(i?.dontValidate??!1)||(await this.validateField(t,"change"),await this.validateArrayFieldsStartingFrom(t,s,"change"))},this.swapFieldValues=(t,s,i,n)=>{this.setFieldValue(t,l=>{const c=l[s],p=l[i];return De(De(l,`${s}`,p),`${i}`,c)},Y(n,{dontValidate:!0})),je(this).handleArrayFieldMetaShift(t,s,"swap",i),(n?.dontValidate??!1)||(this.validateField(t,"change"),this.validateField(`${t}[${s}]`,"change"),this.validateField(`${t}[${i}]`,"change"))},this.moveFieldValues=(t,s,i,n)=>{this.setFieldValue(t,l=>{const c=[...l];return c.splice(i,0,c.splice(s,1)[0]),c},Y(n,{dontValidate:!0})),je(this).handleArrayFieldMetaShift(t,s,"move",i),(n?.dontValidate??!1)||(this.validateField(t,"change"),this.validateField(`${t}[${s}]`,"change"),this.validateField(`${t}[${i}]`,"change"))},this.clearFieldValues=(t,s)=>{const i=this.getFieldValue(t),n=Array.isArray(i)?Math.max(i.length-1,0):null;if(this.setFieldValue(t,[],Y(s,{dontValidate:!0})),n!==null)for(let l=0;l<=n;l++){const c=`${t}[${l}]`;this.deleteField(c)}(s?.dontValidate??!1)||this.validateField(t,"change")},this.resetField=t=>{this.baseStore.setState(s=>({...s,fieldMetaBase:{...s.fieldMetaBase,[t]:Xe},values:this.options.defaultValues?De(s.values,t,Ve(this.options.defaultValues,t)):s.values}))},this.getAllErrors=()=>({form:{errors:this.state.errors,errorMap:this.state.errorMap},fields:Object.entries(this.state.fieldMeta).reduce((t,[s,i])=>(Object.keys(i).length&&i.errors.length&&(t[s]={errors:i.errors,errorMap:i.errorMap}),t),{})}),this.parseValuesWithSchema=t=>Te.validate({value:this.state.values,validationSource:"form"},t),this.parseValuesWithSchemaAsync=t=>Te.validateAsync({value:this.state.values,validationSource:"form"},t),this.timeoutIds={validations:{},listeners:{},formListeners:{}},this._formId=o?.formId??na(),this._devtoolsSubmissionOverride=!1,this.baseStore=new qe(dt({...o?.defaultState,values:o?.defaultValues??o?.defaultState?.values})),this.fieldMetaDerived=new ae({deps:[this.baseStore],fn:({prevDepVals:t,currDepVals:s,prevVal:i})=>{const n=i,a=t?.[0],l=s[0];let c=0;const p={};for(const f of Object.keys(l.fieldMetaBase)){const h=l.fieldMetaBase[f],v=a?.fieldMetaBase[f],y=n?.[f],m=Ve(l.values,f);let g=y?.errors;if(!v||h.errorMap!==v.errorMap){g=Object.values(h.errorMap??{}).filter(I=>I!==void 0);const E=this.getFieldInfo(f)?.instance;E&&!E.options.disableErrorFlat&&(g=g?.flat(1))}const b=!ia(g??[]),x=!h.isDirty,S=be(m,Ve(this.options.defaultValues,f))||be(m,this.getFieldInfo(f)?.instance?.options.defaultValue);if(y&&y.isPristine===x&&y.isValid===b&&y.isDefaultValue===S&&y.errors===g&&h===v){p[f]=y,c++;continue}p[f]={...h,errors:g,isPristine:x,isValid:b,isDefaultValue:S}}return Object.keys(l.fieldMetaBase).length&&n&&c===Object.keys(l.fieldMetaBase).length?n:p}}),this.store=new ae({deps:[this.baseStore,this.fieldMetaDerived],fn:({prevDepVals:t,currDepVals:s,prevVal:i})=>{const n=i,a=t?.[0],l=s[0],c=s[1],p=Object.values(c).filter(Boolean),f=p.some(F=>F.isValidating),h=p.every(F=>F.isValid),v=p.some(F=>F.isTouched),y=p.some(F=>F.isBlurred),m=p.every(F=>F.isDefaultValue),g=v&&l.errorMap?.onMount,b=p.some(F=>F.isDirty),x=!b,S=!!(l.errorMap?.onMount||p.some(F=>F?.errorMap?.onMount)),E=!!f;let I=n?.errors??[];(!a||l.errorMap!==a.errorMap)&&(I=Object.values(l.errorMap).reduce((F,w)=>w===void 0?F:w&&Et(w)?(F.push(w.form),F):(F.push(w),F),[]));const j=I.length===0,A=h&&j,R=this.options.canSubmitWhenInvalid??!1,L=l.submissionAttempts===0&&!v&&!S||!E&&!l.isSubmitting&&A||R;let k=l.errorMap;if(g&&(I=I.filter(F=>F!==l.errorMap.onMount),k=Object.assign(k,{onMount:void 0})),n&&a&&n.errorMap===k&&n.fieldMeta===this.fieldMetaDerived.state&&n.errors===I&&n.isFieldsValidating===f&&n.isFieldsValid===h&&n.isFormValid===j&&n.isValid===A&&n.canSubmit===L&&n.isTouched===v&&n.isBlurred===y&&n.isPristine===x&&n.isDefaultValue===m&&n.isDirty===b&&be(a,l))return n;let V={...l,errorMap:k,fieldMeta:this.fieldMetaDerived.state,errors:I,isFieldsValidating:f,isFieldsValid:h,isFormValid:j,isValid:A,canSubmit:L,isTouched:v,isBlurred:y,isPristine:x,isDefaultValue:m,isDirty:b};const N=this.options.transform?.deps??[];if(N.length!==this.prevTransformArray.length||N.some((F,w)=>F!==this.prevTransformArray[w])){const F=Object.assign({},this,{state:V});this.options.transform?.fn(F),V=F.state,this.prevTransformArray=N}return V}}),this.handleSubmit=this.handleSubmit.bind(this),this.update(o||{});const e=Qn(t=>oe.emit("form-state",{id:this._formId,state:t}),{wait:300});this.store.subscribe(()=>{e(this.store.state)}),oe.on("request-form-state",t=>{t.payload.id===this._formId&&oe.emit("form-api",{id:this._formId,state:this.store.state,options:this.options})}),oe.on("request-form-reset",t=>{t.payload.id===this._formId&&this.reset()}),oe.on("request-form-force-submit",t=>{t.payload.id===this._formId&&(this._devtoolsSubmissionOverride=!0,this.handleSubmit(),this._devtoolsSubmissionOverride=!1)})}get state(){return this.store.state}get formId(){return this._formId}runValidator(o){return pr(o.validate)?Te[o.type](o.value,o.validate):o.validate(o.value)}async handleSubmit(o){this.baseStore.setState(s=>({...s,isSubmitted:!1,submissionAttempts:s.submissionAttempts+1,isSubmitSuccessful:!1})),ne(()=>{Object.values(this.fieldInfo).forEach(s=>{s.instance&&(s.instance.state.meta.isTouched||s.instance.setMeta(i=>({...i,isTouched:!0})))})});const e=o??this.options.onSubmitMeta;if(!this.state.canSubmit&&!this._devtoolsSubmissionOverride){this.options.onSubmitInvalid?.({value:this.state.values,formApi:this,meta:e});return}this.baseStore.setState(s=>({...s,isSubmitting:!0}));const t=()=>{this.baseStore.setState(s=>({...s,isSubmitting:!1}))};if(await this.validateAllFields("submit"),!this.state.isFieldsValid){t(),this.options.onSubmitInvalid?.({value:this.state.values,formApi:this,meta:e}),oe.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:!1,stage:"validateAllFields",errors:Object.values(this.state.fieldMeta).map(s=>s.errors).flat()});return}if(await this.validate("submit"),!this.state.isValid){t(),this.options.onSubmitInvalid?.({value:this.state.values,formApi:this,meta:e}),oe.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:!1,stage:"validate",errors:this.state.errors});return}ne(()=>{Object.values(this.fieldInfo).forEach(s=>{s.instance?.options.listeners?.onSubmit?.({value:s.instance.state.value,fieldApi:s.instance})})}),this.options.listeners?.onSubmit?.({formApi:this,meta:e});try{await this.options.onSubmit?.({value:this.state.values,formApi:this,meta:e}),ne(()=>{this.baseStore.setState(s=>({...s,isSubmitted:!0,isSubmitSuccessful:!0})),oe.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:!0}),t()})}catch(s){throw this.baseStore.setState(i=>({...i,isSubmitSuccessful:!1})),oe.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:!1,stage:"inflight",onError:s}),t(),s}}setErrorMap(o){ne(()=>{Object.entries(o).forEach(([e,t])=>{const s=e;if(Et(t)){const{formError:i,fieldErrors:n}=We(t);for(const a of Object.keys(this.fieldInfo))this.getFieldMeta(a)&&this.setFieldMeta(a,c=>({...c,errorMap:{...c.errorMap,[s]:n?.[a]},errorSourceMap:{...c.errorSourceMap,[s]:"form"}}));this.baseStore.setState(a=>({...a,errorMap:{...a.errorMap,[s]:i}}))}else this.baseStore.setState(i=>({...i,errorMap:{...i.errorMap,[s]:t}}))})})}}function We(r){if(r){if(Et(r)){const o=We(r.form).formError,e=r.fields;return{formError:o,fieldErrors:e}}return{formError:r}}return{formError:void 0}}function Fe(r){switch(r){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";case"dynamic":return"onDynamic";case"change":default:return"onChange"}}class ua{constructor(o){this.options={},this.mount=()=>{const e=this.store.mount();this.options.defaultValue!==void 0&&this.form.setFieldValue(this.name,this.options.defaultValue,{dontUpdateMeta:!0});const t=this.getInfo();t.instance=this,this.update(this.options);const{onMount:s}=this.options.validators||{};if(s){const i=this.runValidator({validate:s,value:{value:this.state.value,fieldApi:this,validationSource:"field"},type:"validate"});i&&this.setMeta(n=>({...n,errorMap:{...n?.errorMap,onMount:i},errorSourceMap:{...n?.errorSourceMap,onMount:"field"}}))}return this.options.listeners?.onMount?.({value:this.state.value,fieldApi:this}),e},this.update=e=>{this.options=e;const t=this.name!==e.name;if(this.name=e.name,this.state.value===void 0){const s=Ve(e.form.options.defaultValues,e.name),i=e.defaultValue??s;t?this.setValue(n=>n||i,{dontUpdateMeta:!0}):i!==void 0&&this.setValue(i,{dontUpdateMeta:!0})}this.form.getFieldMeta(this.name)===void 0&&this.setMeta(this.state.meta)},this.getValue=()=>this.form.getFieldValue(this.name),this.setValue=(e,t)=>{this.form.setFieldValue(this.name,e,Y(t,{dontRunListeners:!0,dontValidate:!0})),t?.dontRunListeners||this.triggerOnChangeListener(),t?.dontValidate||this.validate("change")},this.getMeta=()=>this.store.state.meta,this.setMeta=e=>this.form.setFieldMeta(this.name,e),this.getInfo=()=>this.form.getFieldInfo(this.name),this.pushValue=(e,t)=>{this.form.pushFieldValue(this.name,e,Y(t,{dontRunListeners:!0})),t?.dontRunListeners||this.triggerOnChangeListener()},this.insertValue=(e,t,s)=>{this.form.insertFieldValue(this.name,e,t,Y(s,{dontRunListeners:!0})),s?.dontRunListeners||this.triggerOnChangeListener()},this.replaceValue=(e,t,s)=>{this.form.replaceFieldValue(this.name,e,t,Y(s,{dontRunListeners:!0})),s?.dontRunListeners||this.triggerOnChangeListener()},this.removeValue=(e,t)=>{this.form.removeFieldValue(this.name,e,Y(t,{dontRunListeners:!0})),t?.dontRunListeners||this.triggerOnChangeListener()},this.swapValues=(e,t,s)=>{this.form.swapFieldValues(this.name,e,t,Y(s,{dontRunListeners:!0})),s?.dontRunListeners||this.triggerOnChangeListener()},this.moveValue=(e,t,s)=>{this.form.moveFieldValues(this.name,e,t,Y(s,{dontRunListeners:!0})),s?.dontRunListeners||this.triggerOnChangeListener()},this.clearValues=e=>{this.form.clearFieldValues(this.name,Y(e,{dontRunListeners:!0})),e?.dontRunListeners||this.triggerOnChangeListener()},this.getLinkedFields=e=>{const t=Object.values(this.form.fieldInfo),s=[];for(const i of t){if(!i.instance)continue;const{onChangeListenTo:n,onBlurListenTo:a}=i.instance.options.validators||{};e==="change"&&n?.includes(this.name)&&s.push(i.instance),e==="blur"&&a?.includes(this.name)&&s.push(i.instance)}return s},this.validateSync=(e,t)=>{const s=Ct(e,{...this.options,form:this.form,validationLogic:this.form.options.validationLogic||we}),n=this.getLinkedFields(e).reduce((c,p)=>{const f=Ct(e,{...p.options,form:p.form,validationLogic:p.form.options.validationLogic||we});return f.forEach(h=>{h.field=p}),c.concat(f)},[]);let a=!1;ne(()=>{const c=(p,f)=>{const h=ze(f.cause),v=f.validate?Kt(p.runValidator({validate:f.validate,value:{value:p.store.state.value,validationSource:"field",fieldApi:p},type:"validate"})):void 0,y=t[h],{newErrorValue:m,newSource:g}=Wt({formLevelError:y,fieldLevelError:v});p.state.meta.errorMap?.[h]!==m&&p.setMeta(b=>({...b,errorMap:{...b.errorMap,[h]:m},errorSourceMap:{...b.errorSourceMap,[h]:g}})),m&&(a=!0)};for(const p of s)c(this,p);for(const p of n)p.validate&&c(p.field,p)});const l=ze("submit");return this.state.meta.errorMap?.[l]&&e!=="submit"&&!a&&this.setMeta(c=>({...c,errorMap:{...c.errorMap,[l]:void 0},errorSourceMap:{...c.errorSourceMap,[l]:void 0}})),{hasErrored:a}},this.validateAsync=async(e,t)=>{const s=Tt(e,{...this.options,form:this.form,validationLogic:this.form.options.validationLogic||we}),i=await t,n=this.getLinkedFields(e),a=n.reduce((h,v)=>{const y=Tt(e,{...v.options,form:v.form,validationLogic:v.form.options.validationLogic||we});return y.forEach(m=>{m.field=v}),h.concat(y)},[]);this.state.meta.isValidating||this.setMeta(h=>({...h,isValidating:!0}));for(const h of n)h.setMeta(v=>({...v,isValidating:!0}));const l=[],c=[],p=(h,v,y)=>{const m=ze(v.cause);h.getInfo().validationMetaMap[m]?.lastAbortController.abort();const b=new AbortController;this.getInfo().validationMetaMap[m]={lastAbortController:b},y.push(new Promise(async x=>{let S;try{S=await new Promise((R,L)=>{this.timeoutIds.validations[v.cause]&&clearTimeout(this.timeoutIds.validations[v.cause]),this.timeoutIds.validations[v.cause]=setTimeout(async()=>{if(b.signal.aborted)return R(void 0);try{R(await this.runValidator({validate:v.validate,value:{value:h.store.state.value,fieldApi:h,signal:b.signal,validationSource:"field"},type:"validateAsync"}))}catch(k){L(k)}},v.debounceMs)})}catch(R){S=R}if(b.signal.aborted)return x(void 0);const E=Kt(S),I=i[this.name]?.[m],{newErrorValue:j,newSource:A}=Wt({formLevelError:I,fieldLevelError:E});h.setMeta(R=>({...R,errorMap:{...R?.errorMap,[m]:j},errorSourceMap:{...R.errorSourceMap,[m]:A}})),x(j)}))};for(const h of s)h.validate&&p(this,h,l);for(const h of a)h.validate&&p(h.field,h,c);let f=[];(l.length||c.length)&&(f=await Promise.all(l),await Promise.all(c)),this.setMeta(h=>({...h,isValidating:!1}));for(const h of n)h.setMeta(v=>({...v,isValidating:!1}));return f.filter(Boolean)},this.validate=(e,t)=>{if(!this.state.meta.isTouched)return[];const{fieldsErrorMap:s}=t?.skipFormValidation?{fieldsErrorMap:{}}:this.form.validateSync(e),{hasErrored:i}=this.validateSync(e,s[this.name]??{});if(i&&!this.options.asyncAlways)return this.getInfo().validationMetaMap[ze(e)]?.lastAbortController.abort(),this.state.meta.errors;const n=t?.skipFormValidation?Promise.resolve({}):this.form.validateAsync(e);return this.validateAsync(e,n)},this.handleChange=e=>{this.setValue(e)},this.handleBlur=()=>{this.state.meta.isTouched||this.setMeta(t=>({...t,isTouched:!0})),this.state.meta.isBlurred||this.setMeta(t=>({...t,isBlurred:!0})),this.validate("blur"),this.triggerOnBlurListener()},this.parseValueWithSchema=e=>Te.validate({value:this.state.value,validationSource:"field"},e),this.parseValueWithSchemaAsync=e=>Te.validateAsync({value:this.state.value,validationSource:"field"},e),this.form=o.form,this.name=o.name,this.timeoutIds={validations:{},listeners:{},formListeners:{}},this.store=new ae({deps:[this.form.store],fn:()=>{const e=this.form.getFieldValue(this.name),t=this.form.getFieldMeta(this.name)??{...Xe,...o.defaultMeta};return{value:e,meta:t}}}),this.options=o}get state(){return this.store.state}runValidator(o){return pr(o.validate)?Te[o.type](o.value,o.validate):o.validate(o.value)}setErrorMap(o){this.setMeta(e=>({...e,errorMap:{...e.errorMap,...o}}))}triggerOnBlurListener(){const o=this.form.options.listeners?.onBlurDebounceMs;o&&o>0?(this.timeoutIds.formListeners.blur&&clearTimeout(this.timeoutIds.formListeners.blur),this.timeoutIds.formListeners.blur=setTimeout(()=>{this.form.options.listeners?.onBlur?.({formApi:this.form,fieldApi:this})},o)):this.form.options.listeners?.onBlur?.({formApi:this.form,fieldApi:this});const e=this.options.listeners?.onBlurDebounceMs;e&&e>0?(this.timeoutIds.listeners.blur&&clearTimeout(this.timeoutIds.listeners.blur),this.timeoutIds.listeners.blur=setTimeout(()=>{this.options.listeners?.onBlur?.({value:this.state.value,fieldApi:this})},e)):this.options.listeners?.onBlur?.({value:this.state.value,fieldApi:this})}triggerOnChangeListener(){const o=this.form.options.listeners?.onChangeDebounceMs;o&&o>0?(this.timeoutIds.formListeners.change&&clearTimeout(this.timeoutIds.formListeners.change),this.timeoutIds.formListeners.change=setTimeout(()=>{this.form.options.listeners?.onChange?.({formApi:this.form,fieldApi:this})},o)):this.form.options.listeners?.onChange?.({formApi:this.form,fieldApi:this});const e=this.options.listeners?.onChangeDebounceMs;e&&e>0?(this.timeoutIds.listeners.change&&clearTimeout(this.timeoutIds.listeners.change),this.timeoutIds.listeners.change=setTimeout(()=>{this.options.listeners?.onChange?.({value:this.state.value,fieldApi:this})},e)):this.options.listeners?.onChange?.({value:this.state.value,fieldApi:this})}}function Kt(r){if(r)return r}function ze(r){switch(r){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";case"dynamic":return"onDynamic";case"change":default:return"onChange"}}function gr(r,o=e=>e){return Hr.useSyncExternalStoreWithSelector(r.subscribe,()=>r.state,()=>r.state,o,da)}function da(r,o){if(Object.is(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;if(r instanceof Map&&o instanceof Map){if(r.size!==o.size)return!1;for(const[t,s]of r)if(!o.has(t)||!Object.is(s,o.get(t)))return!1;return!0}if(r instanceof Set&&o instanceof Set){if(r.size!==o.size)return!1;for(const t of r)if(!o.has(t))return!1;return!0}if(r instanceof Date&&o instanceof Date)return r.getTime()===o.getTime();const e=Gt(r);if(e.length!==Gt(o).length)return!1;for(let t=0;t<e.length;t++)if(!Object.prototype.hasOwnProperty.call(o,e[t])||!Object.is(r[e[t]],o[e[t]]))return!1;return!0}function Gt(r){return Object.keys(r).concat(Object.getOwnPropertySymbols(r))}const Ye=typeof window<"u"?u.useLayoutEffect:u.useEffect;function fa(r){const[o]=u.useState(()=>{const t=new ua({...r,form:r.form,name:r.name});return t.Field=vr,t});return Ye(o.mount,[o]),Ye(()=>{o.update(r)}),gr(o.store,r.mode==="array"?e=>[e.meta,Object.keys(e.value??[]).length]:void 0),o}const vr=(({children:r,...o})=>{const e=fa(o),t=u.useMemo(()=>rt(r,e),[r,e,e.state.value,e.state.meta]);return d.jsx(d.Fragment,{children:t})});function ha({form:r,selector:o,children:e}){const t=gr(r.store,o);return rt(e,t)}function ma(r){const o=u.useId(),[e]=u.useState(()=>{const t=new ca({...r,formId:o}),s=t;return s.Field=function(n){return d.jsx(vr,{...n,form:t})},s.Subscribe=function(n){return d.jsx(ha,{form:t,selector:n.selector,children:n.children})},s});return Ye(e.mount,[]),Ye(()=>{e.update(r)}),e}var pa="Label",yr=u.forwardRef((r,o)=>d.jsx(Kr.label,{...r,ref:o,onMouseDown:e=>{e.target.closest("button, input, select, textarea")||(r.onMouseDown?.(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault())}}));yr.displayName=pa;var ga=yr;function va({className:r,...o}){return d.jsx(ga,{"data-slot":"label",className:xe("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...o})}const ya=Gr("group/field flex w-full gap-3 data-[invalid=true]:text-destructive",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],responsive:["flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function qt({className:r,orientation:o="vertical",...e}){return d.jsx("div",{"data-slot":"field","data-orientation":o,className:xe(ya({orientation:o}),r),...e})}function Xt({className:r,...o}){return d.jsx(va,{"data-slot":"field-label",className:xe("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4","has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",r),...o})}function ft({className:r,...o}){return d.jsx("p",{"data-slot":"field-description",className:xe("text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance","last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",r),...o})}function xa({className:r,children:o,errors:e,...t}){const s=u.useMemo(()=>{if(o)return o;if(!e?.length)return null;const i=[...new Map(e.map(n=>[n?.message,n])).values()];return i?.length===1?i[0]?.message:d.jsx("ul",{className:"ml-4 flex list-disc flex-col gap-1",children:i.map(n=>n?.message?d.jsx("li",{children:n.message},n.message):null)})},[o,e]);return s?d.jsx("div",{role:"alert","data-slot":"field-error",className:xe("text-destructive text-sm font-normal",r),...t,children:s}):null}const ba="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(59,130,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(147,51,234);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad1)' /%3E%3C/svg%3E",Sa="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(236,72,153);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(251,191,36);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad2)' /%3E%3C/svg%3E";function wa({transitionName:r,width:o=200,height:e=150}){const t=u.useRef(null),s=u.useRef(null),[i,n]=u.useState(!1),[a,l]=u.useState(null);return u.useEffect(()=>{if(!t.current)return;let c=null,p=!0;return(async()=>{try{if(!t.current)return;c=new Bn({canvas:t.current,images:[ba,Sa],duration:1e3,interval:1e3,transitions:[r]}),s.current=c,p&&(n(!0),l(null))}catch(h){console.error("Failed to initialize transition preview:",h),p&&l("Preview unavailable")}})(),()=>{if(p=!1,s.current){try{s.current.destroy()}catch(h){console.error("Error destroying preview:",h)}s.current=null}}},[r]),a?d.jsx("div",{className:"flex items-center justify-center bg-gray-100 rounded",style:{width:o,height:e},children:d.jsx("span",{className:"text-xs text-gray-500",children:a})}):d.jsxs("div",{className:"relative overflow-hidden rounded border border-gray-200",style:{width:o,height:e},children:[d.jsx("canvas",{ref:t,width:o,height:e,className:"w-full h-full"}),!i&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:d.jsx("span",{className:"text-xs text-gray-400",children:"Loading..."})})]})}function Ca(){const r={};for(const[o,e]of Object.entries(ur)){const t=e.type;r[t]||(r[t]=[]),r[t].push({key:o,name:e.name,description:e.description})}for(const o in r)r[o].sort((e,t)=>e.name.localeCompare(t.name));return r}const ht=Ca();function Ta({selected:r,onChange:o,className:e}){const t=Object.keys(ht).sort(),s=t[0]||"",[i,n]=u.useState(s);return d.jsxs(J,{className:e,gap:"4",children:[d.jsx(J,{direction:"column",gap:"1",className:"min-w-[10rem] p-2 bg-white rounded shadow-sm",role:"navigation","aria-label":"Transition types",children:t.map(a=>{const l=a.charAt(0).toUpperCase()+a.slice(1),c=a===i,p=ht[a]||[],f=p.some(v=>r.includes(v.key)),h=p.filter(v=>r.includes(v.key)).length;return d.jsxs(K,{as:"div",size:"2",onClick:()=>n(a),onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&n(a)},className:`text-left w-full p-2 rounded cursor-pointer flex items-center justify-between ${c?"bg-gray-100 font-semibold":"hover:bg-gray-50"} ${f?"italic text-slate-900":"text-slate-700"}`,"aria-label":h>0?`${l} (${h} selected)`:l,role:"button",tabIndex:0,"aria-pressed":c,children:[d.jsx("span",{className:"truncate",children:l}),h>0&&d.jsx("span",{className:`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${c||f?"bg-blue-600 text-white":"bg-gray-200 text-gray-800"}`,"aria-hidden":!1,children:h})]},a)})}),d.jsx(J,{direction:"column",gap:"2",className:"flex-1",children:Object.entries(ht).filter(([a])=>a===i).map(([a,l])=>d.jsx(J,{direction:"column",gap:"2",children:l.map(c=>d.jsx(K,{as:"label",size:"2",children:d.jsxs(J,{gap:"2",align:"center",className:"cursor-pointer hover:bg-gray-50 p-1 rounded",children:[d.jsx(kt,{checked:r.includes(c.key),onCheckedChange:p=>o(c.key,p===!0)}),d.jsx(cr,{content:d.jsxs(J,{direction:"column",gap:"2",className:"p-2",children:[d.jsx(K,{size:"2",weight:"bold",children:c.name}),d.jsx(K,{size:"1",color:"gray",children:c.description}),d.jsx(wa,{transitionName:c.key,width:200,height:150})]}),side:"top",align:"center",children:d.jsx(K,{as:"span",size:"2",className:"cursor-help",tabIndex:0,children:c.name})})]})},c.key))},a))})]})}function Ea({className:r,type:o,...e}){return d.jsx("input",{type:o,"data-slot":"input",className:xe("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...e})}const Ue=r=>typeof r=="string"||typeof r=="number"?String(r):r==null?"":String(r),Yt=r=>Array.isArray(r)?r.map(o=>String(o)):typeof r=="string"&&r.length?r.split(",").map(o=>o.trim()):[],Zt=({name:r,id:o,value:e,onChange:t,onBlur:s,isInvalid:i,disabled:n,meta:a,className:l})=>{const c=a?.inputType||"text",p=a?.placeholder;if(c==="textarea")return d.jsx(ar,{id:o??r,name:r,rows:a?.rows||4,value:Ue(e),onChange:m=>t(m.target.value),onBlur:s,"aria-invalid":i,disabled:n,placeholder:p,className:xe("w-full",l)});if(c==="select"&&a?.options){const m=Ue(e);return d.jsxs(tr,{value:m,onValueChange:t,disabled:n,children:[d.jsx(or,{className:l}),d.jsx(rr,{children:a.options.map(g=>d.jsx(sr,{value:g.value,children:g.label},g.value))})]})}if(c==="multi-select"&&a?.options){const m=Yt(e);return d.jsx(J,{direction:"column",gap:"2",className:l,children:a.options.map(g=>{const b=m.includes(g.value);return d.jsxs(K,{as:"label",className:"flex items-center gap-2 cursor-pointer",children:[d.jsx(kt,{checked:b,onCheckedChange:x=>{t(x?Array.from(new Set([...m,g.value])):m.filter(S=>S!==g.value))},disabled:n}),g.label]},g.value)})})}if(c==="slider"){const m=typeof e=="number"?e:Number(e??a?.min??0);return d.jsx(nr,{id:o??r,value:[m],min:a?.min,max:a?.max,step:a?.step,onValueChange:g=>t(g[0]),disabled:n,className:l})}if(c==="transition-multiselect"){const m=Yt(e);return d.jsx(Ta,{className:l,selected:m,onChange:(g,b)=>{t(b?Array.from(new Set([...m,g])):m.filter(x=>x!==g))}})}const f=m=>{if(c==="number"){const g=m.target.value;t(g===""?"":Number(g));return}t(m.target.value)};if(c==="color")return d.jsx(Ea,{id:o??r,name:r,type:"color",value:Ue(e)||"#000000",onChange:m=>t(m.target.value),onBlur:s,"aria-invalid":i,disabled:n,className:l});const h=["text","email","tel","url","date","time","number","search","hidden","month","week","datetime-local","password"],y=(m=>h.includes(m))(c)?c:"text";return d.jsx(lr,{id:o??r,name:r,type:y,value:Ue(e),onChange:f,onBlur:s,"aria-invalid":i,disabled:n,placeholder:p,step:a?.step,min:a?.min,max:a?.max,className:l})},Ne=r=>r.replace(/([A-Z])/g," $1").replace(/^\w/,o=>o.toUpperCase()),Mt=r=>r==null||r==="",It=(r,o)=>{if(Array.isArray(r))return r.length===0?"—":r.join(", ");if(Mt(r))return"—";if(typeof r=="boolean")return r?"Yes":"No";if(typeof r=="object"&&r!==null&&!Array.isArray(r)){const t=Object.entries(r).filter(([s,i])=>!Mt(i));return t.length===0?"—":d.jsx(Se,{className:"space-y-1",children:t.map(([s,i])=>d.jsxs(Se,{children:[d.jsxs(K,{size:"2",weight:"medium",className:"text-gray-700",children:[Ne(s),":"]})," ",d.jsx(K,{size:"2",children:It(i)})]},s))})}if(o?.inputType==="textarea")return d.jsx(K,{size:"3",className:"whitespace-pre-wrap",children:String(r)});if(o?.inputType==="url"&&typeof r=="string")return d.jsx(K,{asChild:!0,size:"3",className:"text-blue-600 hover:underline",children:d.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:r})});if(o?.inputType==="date"&&typeof r=="string"){const e=new Date(r);if(!Number.isNaN(e.getTime()))return e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}return String(r)},Ma=r=>Array.isArray(r)?r[0]:r,Ia=(r,o)=>{const e=new Map;r.forEach(s=>{const i=o[s];if(!i)return;const n=i.meta?.()??{},a=n.section||"general",l=n.subsection;let c=e.get(a);if(c||(c={info:{id:a,title:n.section||Ne(a),fields:[],subsections:[]},subsections:new Map},e.set(a,c)),l){const p=c.subsections.get(l);if(p){const f=[...p.fields??[],s];p.fields=f}else{const f={id:l,title:Ne(l),fields:[s]};c.subsections.set(l,f),c.info.subsections=[...c.info.subsections??[],f]}}else c.info.fields=[...c.info.fields??[],s]});const t=[];return e.forEach(({info:s})=>{t.push({...s,fields:s.fields?.length?s.fields:void 0,subsections:s.subsections?.length?s.subsections:void 0})}),t},Aa=({schema:r,collection:o,fieldFilter:e,initialEditing:t,onSubmitSuccess:s,onCancel:i,children:n})=>{const[a,l]=u.useState(t??!1),{data:c}=qr(()=>o,[o]),p=Ma(c),f=r.meta?.()??{},h=r.shape,v=u.useMemo(()=>Object.keys(h),[h]),y=u.useMemo(()=>v.filter(w=>{const C=h[w];if(!C)return!1;const M=C.meta?.()??{};return!(M.hidden||e&&!e({key:w,meta:M}))}),[e,v,h]),m=u.useMemo(()=>({...f.form?.defaultValues||{}}),[f.form?.defaultValues]),g=u.useMemo(()=>({...m,...p||{}}),[m,p]),b=u.useMemo(()=>f.form?.sections?.length?f.form.sections.map(w=>{const C=w.subsections?.map(P=>({...P,fields:P.fields?.filter(z=>y.includes(z))})).filter(P=>P.fields?.length),M=w.fields?.filter(P=>y.includes(P));return{...w,fields:M,subsections:C}}).filter(w=>{const C=!!w.fields?.length,M=!!w.subsections?.length;return C||M}):Ia(y,h),[f.form?.sections,h,y]),x=ma({defaultValues:g,onSubmit:async({value:w})=>{const C=r.safeParse(w);if(!C.success)return;const M=C.data,P=f.form?.collectionKey,z=p?o.getKeyFromItem(p):void 0,re=P??z??o.getKeyFromItem(M),$="lastUpdated"in M?{...M,lastUpdated:new Date().toISOString()}:M;p?re==null?o.insert($):o.update(re,W=>{Object.assign(W,$)}):o.insert($),l(!1),s?.($)},validators:{onChange:({value:w})=>{const C=r.safeParse(w);if(!C.success)return C.error.issues.map(M=>M.message).join(", ")}}});u.useEffect(()=>{x.reset(g)},[x,g]);const S=(w,C,M,P)=>{const z=M.shape,re=Object.keys(z);return d.jsx(Se,{className:"space-y-3 pl-4 border-l-2 border-gray-200",children:re.map($=>{const q=z[$].meta?.()??{},ee=q.label||Ne($),se=q.description,te=P?.[$];return d.jsxs(qt,{className:"gap-2",children:[d.jsx(Xt,{className:"flex items-center gap-2 text-sm",children:ee}),a?d.jsxs(d.Fragment,{children:[d.jsx(Zt,{id:`${w}.${$}`,name:`${w}.${$}`,value:te,onChange:T=>{const U={...P,[$]:T};C.handleChange(U)},onBlur:C.handleBlur,isInvalid:!1,meta:q}),se&&d.jsx(ft,{children:se})]}):d.jsxs(d.Fragment,{children:[d.jsx(K,{size:"3",children:It(te,q)}),se&&d.jsx(ft,{children:se})]})]},$)})})},E=w=>{const C=h[w];if(!C||!y.includes(w))return null;const M=C.meta?.()??{};if(M.hidden)return null;const P=M.label||Ne(w),z=M.description,re=!!M.readOnly,$=C instanceof Xr||C._def?.typeName==="ZodObject"||C.shape!==void 0;return d.jsx(x.Field,{name:w,validators:{onChange:({value:W})=>{const q=C.safeParse(W);if(!q.success)return q.error.issues[0]?.message||"Invalid value"}},children:W=>{const q=W.state.meta.isTouched&&W.state.meta.errors.length>0,ee=W.state.value,se=a&&!re,te=z?d.jsx(ft,{children:z}):null;return $?d.jsxs(Se,{className:"space-y-2",children:[d.jsx(K,{size:"3",weight:"bold",className:"text-gray-800",children:P}),te,S(w,W,C,ee||{})]},w):d.jsxs(qt,{"data-invalid":q,className:"gap-2",children:[d.jsx(Xt,{htmlFor:W.name,className:"flex items-center gap-2 text-sm",children:P}),se?d.jsxs(d.Fragment,{children:[d.jsx(Zt,{id:W.name,name:W.name,value:ee,onChange:T=>W.handleChange(T),onBlur:W.handleBlur,isInvalid:q,meta:M}),te,q&&d.jsx(xa,{errors:W.state.meta.errors.map(T=>({message:typeof T=="string"?T:String(T)}))})]}):d.jsxs(d.Fragment,{children:[d.jsx(K,{size:"3",children:It(ee,M)}),te]})]})}},w)},I=w=>w?.length?w.map(C=>E(C)):null,A=(y.length?y:v).some(w=>!Mt(g[w])),R=!A&&!a,L=f.form?.title||"Details",k=f.form?.editLabel||"Edit",V=f.form?.submitLabel||"Save",N=f.form?.cancelLabel||"Cancel",F=n?n({form:x,sections:b,fieldKeys:y,schemaShape:h,isEditing:a,setIsEditing:l,renderField:E,renderFields:I,submitLabel:V,cancelLabel:N,editLabel:k,formTitle:L,showEmptyState:R,hasData:A}):d.jsxs(d.Fragment,{children:[d.jsxs(J,{justify:"between",align:"center",mb:"6",children:[d.jsx(jt,{size:"8",weight:"bold",children:L}),a?d.jsxs(J,{gap:"3",children:[d.jsx(ct,{type:"button",variant:"soft",color:"gray",onClick:()=>{l(!1),x.reset(g),i?.()},children:N}),d.jsx(ct,{type:"submit",variant:"solid",color:"green",children:V})]}):d.jsx(ct,{type:"button",variant:"solid",color:"blue",onClick:()=>l(!0),children:k})]}),R&&d.jsxs(zt,{className:"bg-white p-8 text-center shadow-sm",children:[d.jsx(K,{size:"5",weight:"medium",color:"gray",className:"mb-4 block",children:f.form?.emptyState?.title||"No data yet"}),f.form?.emptyState?.description&&d.jsx(K,{size:"3",color:"gray",children:f.form?.emptyState?.description})]}),d.jsx(J,{direction:"column",gap:"6",children:b.map(w=>{const C=w.subsections??[];return d.jsxs(zt,{className:"bg-white p-6 shadow-sm",children:[d.jsx(jt,{size:"5",weight:"bold",mb:"4",children:w.title}),w.description?d.jsx(K,{size:"2",color:"gray",className:"mb-4",children:w.description}):null,C.length?d.jsx(J,{direction:"column",gap:"5",children:C.map((M,P)=>d.jsxs(u.Fragment,{children:[d.jsxs(Se,{children:[d.jsx(K,{size:"3",weight:"bold",className:"mb-3 block",children:M.title}),d.jsx(J,{direction:"column",gap:"4",children:I(M.fields)})]}),P<C.length-1&&d.jsx(ir,{size:"4",className:"my-4"})]},M.id))}):d.jsx(J,{direction:"column",gap:"4",children:I(w.fields)})]},w.id)})})]});return d.jsx(Se,{className:"w-full",children:d.jsx("form",{onSubmit:w=>{w.preventDefault(),x.handleSubmit()},children:F})})};export{qt as F,Ea as I,Ta as T,Bn as W,Aa as Z,Xt as a,ft as b,xa as c,ur as t,lr as u};
