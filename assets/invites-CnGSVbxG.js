import{c as q,j as n,p as y,f as g,t as D,v as Z,w as K,x as d,z as P,A as Q,B as J,C as X,D as ee,r as w,q as C,o as T,U as te,m as U}from"./main-BIbxuPEC.js";import{C as ne}from"./calendar-8WkpR_6q.js";import{p as b,o as oe}from"./indexedDB-DUj4cgsM.js";import{Z as E}from"./ZodForm-CnKVM8iS.js";import{g as ie,a as ae,f as G,b as M}from"./guestsCollection-BZ7IccgS.js";import{D as B}from"./download-BU8SfYqu.js";import{m as se,b as re,P as R,f as V}from"./tabs-BsNU_OBY.js";import"./index-BRjRWMGe.js";const le=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ce=q("clock",le);const de=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],me=q("printer",de),H=e=>e?new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"",pe=e=>{if(!e)return"";const[m,l]=e.split(":"),o=Number.parseInt(m,10),i=o>=12?"PM":"AM";return`${o%12||12}:${l} ${i}`},ge=e=>{const{size:m,orientation:l}=e.page,o={A4:{width:210,height:297},A5:{width:148,height:210},letter:{width:216,height:279}};let{width:i,height:c}=o[m]||o.A5;return l==="landscape"&&([i,c]=[c,i]),{width:i,height:c}},ue=({config:e})=>{const{invitation:m,design:l}=e,{couple:o,event:i,wording:c,rsvp:a}=m,{colors:s,fonts:t,layout:r,background:p,page:x}=l,f=ge(l),$=f.width/f.height,F=o.showLastNames&&o.partner1LastName?`${o.partner1Name} ${o.partner1LastName}`:o.partner1Name,u=o.showLastNames&&o.partner2LastName?`${o.partner2Name} ${o.partner2LastName}`:o.partner2Name,v=F&&u?`${F} & ${u}`:F||u||"Your Names";return n.jsx(b,{className:"invitation-preview",style:{aspectRatio:`${$}`,maxWidth:"100%",maxHeight:"100%",margin:"0 auto"},children:n.jsx(oe,{className:"invitation-page h-full w-full overflow-hidden",style:{backgroundColor:p.type==="color"?p.color:s.background,backgroundImage:p.type==="image"&&p.imageDataUrl?`url(${p.imageDataUrl})`:void 0,backgroundSize:p.imageFit==="repeat"?"auto":p.imageFit,backgroundRepeat:p.imageFit==="repeat"?"repeat":"no-repeat",backgroundPosition:"center",color:s.text,fontFamily:t.bodyFont,fontSize:`${t.baseFontSizePt*t.scaleFactor}pt`,lineHeight:r.spacing.lineHeight,textAlign:r.alignment,border:r.border.enabled?`${r.border.widthPx}px ${r.border.style} ${r.border.color}`:"none",borderRadius:r.border.enabled?`${r.border.radiusPx}px`:"0",padding:`${x.marginMm}mm`,position:"relative"},children:n.jsxs(y,{direction:"column",gap:`${r.spacing.sectionGapPx}px`,className:"h-full justify-center",children:[r.decorations.topFloral&&n.jsx(g,{size:"8",style:{color:s.accent},className:"text-center",children:"❦"}),c.intro&&n.jsx(g,{style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.9}pt`,color:s.text},children:c.intro}),n.jsx(D,{size:"8",style:{fontFamily:t.headingFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*2}pt`,color:s.primary,fontWeight:"normal"},children:v}),c.invitationLine&&n.jsx(g,{style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor}pt`,color:s.text},children:c.invitationLine}),i.title&&n.jsx(D,{size:"5",style:{fontFamily:t.headingFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*1.3}pt`,color:s.accent,fontWeight:"normal",marginTop:`${r.spacing.sectionGapPx}px`},children:i.title}),i.date&&n.jsxs(y,{align:"center",justify:"center",gap:"2",children:[r.decorations.icons.calendar&&n.jsx(ne,{size:16,style:{color:s.accent}}),n.jsx(g,{style:{fontFamily:t.bodyFont,fontSize:`${t.baseFontSizePt*t.scaleFactor}pt`,color:s.text},children:H(i.date)})]}),i.time&&n.jsxs(y,{align:"center",justify:"center",gap:"2",children:[r.decorations.icons.clock&&n.jsx(ce,{size:16,style:{color:s.accent}}),n.jsxs(g,{style:{fontFamily:t.bodyFont,fontSize:`${t.baseFontSizePt*t.scaleFactor}pt`,color:s.text},children:[pe(i.time),i.timezone&&` ${i.timezone}`]})]}),i.venueName&&n.jsxs(y,{direction:"column",align:"center",gap:"1",style:{marginTop:`${r.spacing.sectionGapPx/2}px`},children:[n.jsxs(y,{align:"center",justify:"center",gap:"2",children:[r.decorations.icons.location&&n.jsx(Z,{size:16,style:{color:s.accent}}),n.jsx(g,{weight:"medium",style:{fontFamily:t.bodyFont,fontSize:`${t.baseFontSizePt*t.scaleFactor}pt`,color:s.text},children:i.venueName})]}),i.venueAddress&&n.jsx(g,{size:"2",style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.85}pt`,color:s.text},children:i.venueAddress})]}),a.enabled&&(a.rsvpEmail||a.rsvpPhone||a.rsvpUrl)&&n.jsxs(y,{direction:"column",align:"center",gap:"1",style:{marginTop:`${r.spacing.sectionGapPx}px`},children:[n.jsxs(g,{weight:"medium",style:{fontFamily:t.bodyFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.95}pt`,color:s.primary},children:["Please RSVP",a.rsvpDeadline&&` by ${H(a.rsvpDeadline)}`]}),a.rsvpContactName&&n.jsxs(g,{size:"2",style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.85}pt`,color:s.text},children:["Contact: ",a.rsvpContactName]}),a.rsvpEmail&&n.jsx(g,{size:"2",style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.85}pt`,color:s.accent},children:a.rsvpEmail}),a.rsvpPhone&&n.jsx(g,{size:"2",style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.85}pt`,color:s.text},children:a.rsvpPhone}),a.rsvpUrl&&n.jsx(g,{size:"2",style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.85}pt`,color:s.accent},children:a.rsvpUrl})]}),c.closing&&n.jsx(g,{style:{fontFamily:t.secondaryFont,fontSize:`${t.baseFontSizePt*t.scaleFactor*.9}pt`,color:s.text,marginTop:`${r.spacing.sectionGapPx}px`},children:c.closing}),r.decorations.bottomFloral&&n.jsx(g,{size:"8",style:{color:s.accent},className:"text-center",children:"❦"})]})})})},L=K({id:d().meta({hidden:!0}),name:d().default("My Invitation").meta({label:"Configuration Name",inputType:"text",section:"general"}),partner1Name:d().min(1,"Partner 1 name is required").meta({label:"Partner 1 Name",inputType:"text",section:"couple"}),partner2Name:d().min(1,"Partner 2 name is required").meta({label:"Partner 2 Name",inputType:"text",section:"couple"}),partner1LastName:d().optional().meta({label:"Partner 1 Last Name",inputType:"text",section:"couple"}),partner2LastName:d().optional().meta({label:"Partner 2 Last Name",inputType:"text",section:"couple"}),showLastNames:P().default(!0).meta({label:"Show Last Names",inputType:"checkbox",section:"couple"}),eventTitle:d().default("Wedding Celebration").meta({label:"Event Title",inputType:"text",section:"event"}),eventDate:d().min(1,"Date is required").meta({label:"Event Date",inputType:"date",section:"event"}),eventTime:d().min(1,"Time is required").meta({label:"Event Time",inputType:"time",section:"event"}),eventTimezone:d().optional().meta({label:"Timezone",inputType:"text",section:"event"}),venueName:d().min(1,"Venue name is required").meta({label:"Venue Name",inputType:"text",section:"event"}),venueAddress:d().min(1,"Venue address is required").meta({label:"Venue Address",inputType:"textarea",section:"event",rows:3}),intro:d().default("Together with their families,").meta({label:"Introduction",inputType:"textarea",section:"wording",rows:2}),invitationLine:d().default("invite you to celebrate their wedding").meta({label:"Invitation Line",inputType:"textarea",section:"wording",rows:2}),closing:d().default("We look forward to celebrating with you.").meta({label:"Closing",inputType:"textarea",section:"wording",rows:2}),rsvpEnabled:P().default(!0).meta({label:"Enable RSVP Section",inputType:"checkbox",section:"rsvp"}),rsvpDeadline:d().optional().meta({label:"RSVP Deadline",inputType:"date",section:"rsvp"}),rsvpContactName:d().optional().meta({label:"Contact Name",inputType:"text",section:"rsvp"}),rsvpEmail:d().email().optional().or(J("")).meta({label:"Contact Email",inputType:"email",section:"rsvp"}),rsvpPhone:d().optional().meta({label:"Contact Phone",inputType:"tel",section:"rsvp"}),colorPrimary:d().default("#7B3F98").meta({label:"Primary Color",inputType:"color",section:"design-colors"}),colorSecondary:d().default("#F9E5FF").meta({label:"Secondary Color",inputType:"color",section:"design-colors"}),colorText:d().default("#333333").meta({label:"Text Color",inputType:"color",section:"design-colors"}),colorAccent:d().default("#C28F3D").meta({label:"Accent Color",inputType:"color",section:"design-colors"}),colorBackground:d().default("#FFFFFF").meta({label:"Background Color",inputType:"color",section:"design-colors"}),headingFont:d().default("Great Vibes").meta({label:"Heading Font",inputType:"text",section:"design-fonts"}),bodyFont:d().default("Playfair Display").meta({label:"Body Font",inputType:"text",section:"design-fonts"}),baseFontSize:Q().default(12).meta({label:"Base Font Size (pt)",inputType:"number",section:"design-fonts"}),borderEnabled:P().default(!0).meta({label:"Show Border",inputType:"checkbox",section:"design-layout"}),borderColor:d().default("#C28F3D").meta({label:"Border Color",inputType:"color",section:"design-layout"}),showTopFloral:P().default(!0).meta({label:"Show Top Decoration",inputType:"checkbox",section:"design-layout"}),showBottomFloral:P().default(!0).meta({label:"Show Bottom Decoration",inputType:"checkbox",section:"design-layout"}),lastUpdated:d().optional().meta({hidden:!0})}),I={id:"default",name:"My Invitation",partner1Name:"",partner2Name:"",partner1LastName:"",partner2LastName:"",showLastNames:!0,eventTitle:"Wedding Celebration",eventDate:"",eventTime:"",eventTimezone:"",venueName:"",venueAddress:"",intro:"Together with their families,",invitationLine:"invite you to celebrate their wedding",closing:"We look forward to celebrating with you.",rsvpEnabled:!0,rsvpDeadline:"",rsvpContactName:"",rsvpEmail:"",rsvpPhone:"",colorPrimary:"#7B3F98",colorSecondary:"#F9E5FF",colorText:"#333333",colorAccent:"#C28F3D",colorBackground:"#FFFFFF",headingFont:"Great Vibes",bodyFont:"Playfair Display",baseFontSize:12,borderEnabled:!0,borderColor:"#C28F3D",showTopFloral:!0,showBottomFloral:!0,lastUpdated:new Date().toISOString()},he=e=>({id:e.id,name:e.name,invitation:{language:"en",couple:{partner1Name:e.partner1Name,partner2Name:e.partner2Name,partner1LastName:e.partner1LastName,partner2LastName:e.partner2LastName,showLastNames:e.showLastNames},event:{title:e.eventTitle,date:e.eventDate,time:e.eventTime,timezone:e.eventTimezone,venueName:e.venueName,venueAddress:e.venueAddress,additionalEvents:[]},wording:{intro:e.intro,invitationLine:e.invitationLine,closing:e.closing,customTextBlocks:[]},rsvp:{enabled:e.rsvpEnabled,rsvpDeadline:e.rsvpDeadline,rsvpContactName:e.rsvpContactName,rsvpEmail:e.rsvpEmail,rsvpPhone:e.rsvpPhone,rsvpUrl:"",includeQrCode:!1},extras:{noteAccommodation:"",noteGifts:"",noteChildren:"",noteTransportation:""}},design:{templateId:"classic-flowers",page:{size:"A5",orientation:"portrait",marginMm:10},colors:{primary:e.colorPrimary,secondary:e.colorSecondary,text:e.colorText,accent:e.colorAccent,background:e.colorBackground},fonts:{headingFont:e.headingFont,bodyFont:e.bodyFont,secondaryFont:"Lato",baseFontSizePt:e.baseFontSize,scaleFactor:1},background:{type:"color",color:e.colorBackground,imageDataUrl:null,imageFit:"cover",opacity:1},layout:{alignment:"center",spacing:{sectionGapPx:16,lineHeight:1.5},border:{enabled:e.borderEnabled,style:"double",color:e.borderColor,widthPx:4,radiusPx:12},decorations:{topFloral:e.showTopFloral,bottomFloral:e.showBottomFloral,icons:{calendar:!0,location:!0,clock:!0}}}},lastUpdated:e.lastUpdated}),z=X(ee({id:"flat-invitation",storageKey:"flat-invitation",getKey:()=>"default",schema:L})),ye=()=>{if(!globalThis.__flatInvitationInitialized){globalThis.__flatInvitationInitialized=!0;try{const e=z.utils.getStorage();(!e||Object.keys(e).length===0)&&z.insert(I)}catch{console.debug("Flat invitation already initialized")}}},O=e=>e?new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"",ve=e=>{if(!e)return"";const[m,l]=e.split(":"),o=Number.parseInt(m,10),i=o>=12?"PM":"AM";return`${o%12||12}:${l} ${i}`},h=e=>{const m=document.createElement("div");return m.textContent=e,m.innerHTML},A=e=>{const{invitation:m,design:l}=e,{couple:o,event:i,wording:c,rsvp:a}=m,{colors:s,fonts:t,layout:r,background:p,page:x}=l,f=o.showLastNames&&o.partner1LastName?`${o.partner1Name} ${o.partner1LastName}`:o.partner1Name,$=o.showLastNames&&o.partner2LastName?`${o.partner2Name} ${o.partner2LastName}`:o.partner2Name,F=f&&$?`${f} & ${$}`:f||$||"Your Names",u={A4:{width:210,height:297},A5:{width:148,height:210},letter:{width:216,height:279}};let{width:v,height:N}=u[x.size]||u.A5;x.orientation==="landscape"&&([v,N]=[N,v]);const S=`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @page {
      size: ${x.size} ${x.orientation};
      margin: ${x.marginMm}mm;
    }

    body {
      font-family: ${t.bodyFont}, serif;
      font-size: ${t.baseFontSizePt*t.scaleFactor}pt;
      line-height: ${r.spacing.lineHeight};
      color: ${s.text};
      margin: 0;
      padding: 0;
      background: ${p.type==="color"?p.color:s.background};
    }

    @media print {
      body {
        margin: 0;
      }

      .invitation-page {
        width: ${v}mm;
        height: ${N}mm;
        page-break-after: always;
      }
    }

    .invitation-page {
      width: ${v}mm;
      height: ${N}mm;
      margin: 0 auto;
      padding: ${x.marginMm}mm;
      background-color: ${p.type==="color"?p.color:s.background};
      ${p.type==="image"&&p.imageDataUrl?`
        background-image: url(${p.imageDataUrl});
        background-size: ${p.imageFit==="repeat"?"auto":p.imageFit};
        background-repeat: ${p.imageFit==="repeat"?"repeat":"no-repeat"};
        background-position: center;
      `:""}
      text-align: ${r.alignment};
      ${r.border.enabled?`
        border: ${r.border.widthPx}px ${r.border.style} ${r.border.color};
        border-radius: ${r.border.radiusPx}px;
      `:""}
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: ${r.spacing.sectionGapPx}px;
    }

    .heading-main {
      font-family: ${t.headingFont}, cursive;
      font-size: ${t.baseFontSizePt*t.scaleFactor*2}pt;
      color: ${s.primary};
      font-weight: normal;
      margin: 0;
    }

    .heading-secondary {
      font-family: ${t.headingFont}, cursive;
      font-size: ${t.baseFontSizePt*t.scaleFactor*1.3}pt;
      color: ${s.accent};
      font-weight: normal;
      margin: ${r.spacing.sectionGapPx}px 0 0 0;
    }

    .text-intro {
      font-family: ${t.secondaryFont}, sans-serif;
      font-size: ${t.baseFontSizePt*t.scaleFactor*.9}pt;
      color: ${s.text};
    }

    .text-body {
      font-family: ${t.bodyFont}, serif;
      font-size: ${t.baseFontSizePt*t.scaleFactor}pt;
      color: ${s.text};
    }

    .text-small {
      font-family: ${t.secondaryFont}, sans-serif;
      font-size: ${t.baseFontSizePt*t.scaleFactor*.85}pt;
      color: ${s.text};
    }

    .text-accent {
      color: ${s.accent};
    }

    .text-primary {
      color: ${s.primary};
    }

    .decoration {
      font-size: ${t.baseFontSizePt*t.scaleFactor*3}pt;
      color: ${s.accent};
    }

    .event-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin: 4px 0;
    }

    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
    }

    .venue-section {
      margin-top: ${r.spacing.sectionGapPx/2}px;
    }

    .rsvp-section {
      margin-top: ${r.spacing.sectionGapPx}px;
    }

    .closing-section {
      margin-top: ${r.spacing.sectionGapPx}px;
    }
  `,k=`<svg class="icon" fill="none" stroke="${s.accent}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/></svg>`,j=`<svg class="icon" fill="none" stroke="${s.accent}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke-width="2"/><polyline points="12 6 12 12 16 14" stroke-width="2"/></svg>`,Y=`<svg class="icon" fill="none" stroke="${s.accent}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke-width="2"/></svg>`;return`<!DOCTYPE html>
<html lang="${m.language||"en"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${h(F)} - ${h(i.title||"Wedding Invitation")}</title>
  <style>${S}</style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&family=Cormorant+Garamond:wght@400;700&family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&family=Dancing+Script:wght@400;700&family=Merriweather:wght@300;400;700&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="invitation-page">
    ${r.decorations.topFloral?'<div class="decoration">❦</div>':""}
    
    ${c.intro?`<p class="text-intro">${h(c.intro)}</p>`:""}
    
    <h1 class="heading-main">${h(F)}</h1>
    
    ${c.invitationLine?`<p class="text-body">${h(c.invitationLine)}</p>`:""}
    
    ${i.title?`<h2 class="heading-secondary">${h(i.title)}</h2>`:""}
    
    ${i.date?`
      <div class="event-detail">
        ${r.decorations.icons.calendar?k:""}
        <span class="text-body">${h(O(i.date))}</span>
      </div>
    `:""}
    
    ${i.time?`
      <div class="event-detail">
        ${r.decorations.icons.clock?j:""}
        <span class="text-body">${h(ve(i.time))}${i.timezone?` ${h(i.timezone)}`:""}</span>
      </div>
    `:""}
    
    ${i.venueName?`
      <div class="venue-section">
        <div class="event-detail">
          ${r.decorations.icons.location?Y:""}
          <span class="text-body" style="font-weight: 500;">${h(i.venueName)}</span>
        </div>
        ${i.venueAddress?`<p class="text-small">${h(i.venueAddress)}</p>`:""}
      </div>
    `:""}
    
    ${a.enabled&&(a.rsvpEmail||a.rsvpPhone||a.rsvpUrl)?`
      <div class="rsvp-section">
        <p class="text-body text-primary" style="font-weight: 500;">
          Please RSVP${a.rsvpDeadline?` by ${h(O(a.rsvpDeadline))}`:""}
        </p>
        ${a.rsvpContactName?`<p class="text-small">Contact: ${h(a.rsvpContactName)}</p>`:""}
        ${a.rsvpEmail?`<p class="text-small text-accent">${h(a.rsvpEmail)}</p>`:""}
        ${a.rsvpPhone?`<p class="text-small">${h(a.rsvpPhone)}</p>`:""}
        ${a.rsvpUrl?`<p class="text-small text-accent">${h(a.rsvpUrl)}</p>`:""}
      </div>
    `:""}
    
    ${c.closing?`<p class="text-intro closing-section">${h(c.closing)}</p>`:""}
    
    ${r.decorations.bottomFloral?'<div class="decoration">❦</div>':""}
  </div>
</body>
</html>`},xe=e=>{const m=A(e),l=new Blob([m],{type:"text/html"}),o=URL.createObjectURL(l),i=document.createElement("a");i.href=o,i.download="wedding-invitation.html",i.click(),URL.revokeObjectURL(o)},be=e=>{const m=A(e),l=window.open("","_blank");l&&(l.document.write(m),l.document.close(),l.focus(),setTimeout(()=>{l.print()},500))},W=(e,m)=>{const l=m?e:e.filter(a=>!a.isChild);if(l.length===0)return"Guest";const o=l.map(a=>{const s=a.lastName?`${a.firstName} ${a.lastName}`:a.firstName;return a.preferredName||s});if(o.length===1)return o[0];if(o.length===2)return`${o[0]} & ${o[1]}`;const i=o.slice(-2).join(" & ");return`${o.slice(0,-2).join(", ")}, ${i}`},_=(e,m,l)=>({...e,id:crypto.randomUUID(),invitation:{...e.invitation,wording:{...e.invitation.wording,intro:l.inviteLabel?`${l.inviteLabel}`:e.invitation.wording.intro}}}),fe=e=>{const m=ie(),l=[];for(const o of m){const i=ae(o.id);if(i.length!==0)if(o.inviteMode==="individual"){const c=o.includeChildrenOnInvite?i:i.filter(a=>!a.isChild);for(const a of c){const s=W([a],!1),t=_(e,s,o);l.push({id:crypto.randomUUID(),familyId:o.id,guestId:a.id,recipientNames:s,config:t})}}else{const c=W(i,o.includeChildrenOnInvite),a=_(e,c,o);l.push({id:crypto.randomUUID(),familyId:o.id,recipientNames:c,config:a})}}return l},Se=()=>{const[e,m]=w.useState([]),[l,o]=w.useState(!1);w.useEffect(()=>{ye()},[]);const{data:i}=C(()=>z,[z]),{data:c}=C(()=>G,[G]),{data:a}=C(()=>M,[M]),s=w.useMemo(()=>Array.isArray(i)?i[0]||I:i||I,[i]),t=w.useMemo(()=>he(s),[s]),r=w.useMemo(()=>c?Array.isArray(c)?c.length:Object.keys(c).length:0,[c]),p=w.useMemo(()=>a?Array.isArray(a)?a.length:Object.keys(a).length:0,[a]),x=()=>{xe(t)},f=()=>{be(t)},$=()=>{o(!0);try{const u=fe(t);m(u)}finally{o(!1)}},F=()=>{e.length!==0&&e.forEach((u,v)=>{setTimeout(()=>{const N=A(u.config),S=new Blob([N],{type:"text/html"}),k=URL.createObjectURL(S),j=document.createElement("a");j.href=k,j.download=`invitation-${u.recipientNames.replace(/[^a-zA-Z0-9]/g,"-")}.html`,j.click(),URL.revokeObjectURL(k)},v*200)})};return n.jsx(b,{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",children:n.jsxs(y,{direction:"column",className:"h-screen",children:[n.jsx(b,{className:"border-b bg-white px-6 py-4",children:n.jsxs(y,{justify:"between",align:"center",children:[n.jsx(D,{size:"6",weight:"bold",children:"Wedding Invitations"}),n.jsxs(y,{gap:"3",children:[n.jsxs(T,{variant:"soft",color:"blue",onClick:x,children:[n.jsx(B,{size:16}),"Download HTML"]}),n.jsxs(T,{variant:"solid",color:"green",onClick:f,children:[n.jsx(me,{size:16}),"Print / Save PDF"]})]})]})}),n.jsx(b,{className:"border-b bg-white px-6 py-4",children:n.jsxs(y,{direction:"column",gap:"3",children:[n.jsxs(y,{justify:"between",align:"center",children:[n.jsxs(y,{direction:"column",gap:"1",children:[n.jsx(g,{size:"3",weight:"bold",children:"Generate Invitations for All Guests"}),n.jsxs(g,{size:"2",color:"gray",children:[r," families, ",p," guests"]})]}),n.jsxs(y,{gap:"2",children:[n.jsxs(T,{variant:"soft",color:"violet",onClick:$,disabled:l||r===0,children:[n.jsx(te,{size:16}),l?"Generating...":`Generate ${r} Invitations`]}),e.length>0&&n.jsxs(T,{variant:"solid",color:"blue",onClick:F,children:[n.jsx(B,{size:16}),"Download All (",e.length,")"]})]})]}),e.length>0&&n.jsxs(b,{className:"mt-2 rounded-md bg-slate-50 p-3",children:[n.jsx(g,{size:"2",weight:"medium",className:"mb-2 block",children:"Generated Invitations:"}),n.jsxs(y,{direction:"column",gap:"1",children:[e.slice(0,5).map(u=>n.jsxs(g,{size:"2",color:"gray",children:["• ",u.recipientNames]},u.id)),e.length>5&&n.jsxs(g,{size:"2",color:"gray",children:["... and ",e.length-5," more"]})]})]})]})}),n.jsxs(y,{className:"flex-1 overflow-hidden",children:[n.jsx(b,{className:"w-1/2 overflow-hidden border-r bg-white",children:n.jsx(U,{className:"h-full",children:n.jsx(b,{className:"p-6",children:n.jsxs(se,{defaultValue:"content",children:[n.jsxs(re,{children:[n.jsx(R,{value:"content",children:"Content"}),n.jsx(R,{value:"design",children:"Design"})]}),n.jsxs(b,{pt:"4",children:[n.jsx(V,{value:"content",children:n.jsx(E,{schema:L,collection:z,initialEditing:!0,fieldFilter:({meta:u})=>{const v=u?.section||"";return v==="general"||v==="couple"||v==="event"||v==="wording"||v==="rsvp"}})}),n.jsx(V,{value:"design",children:n.jsx(E,{schema:L,collection:z,initialEditing:!0,fieldFilter:({meta:u})=>(u?.section||"").startsWith("design-")})})]})]})})})}),n.jsx(b,{className:"w-1/2 overflow-hidden bg-slate-100",children:n.jsx(U,{className:"h-full",children:n.jsx(y,{direction:"column",align:"center",justify:"center",className:"min-h-full p-8",children:n.jsx(b,{className:"w-full max-w-2xl",children:n.jsx(ue,{config:t})})})})})]})]})})};export{Se as component};
