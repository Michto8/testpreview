import{bL as c,as as o,j as e,cr as d,C as r,G as a,ct as u,bP as l,dD as p,cw as i,aT as m}from"./index-2ba9b923.js";import{d as x}from"./Group-68c9cc62.js";function I(n){return c({key:"RegulInventaire",fxt:(t,s)=>o().InventaireFidegeMethods().RechercheRegulInventaire({variables:{recherche:t,filtresOptionnels:null,context:(s==null?void 0:s.current)||null}}),query:n})}function f({item:n,style:t,onSelect:s,ItemComponentProps:C,className:j}){return e.jsxs(d,{style:t,sx:{display:"grid",gridTemplateColumns:"minmax(0,200px) 1fr max-content 140px 140px 140px ",gridTemplateAreas:` "date user dateCreat stockColis stockPiece stockPoids" 
                                     "comment comment comment stockColis stockPiece stockPoids"
                `,columnGap:1,width:"100%",alignItems:"center",typography:"body2"},onClick:_=>{s(n)},children:["         ",e.jsxs(r,{gridArea:"comment",variant:"subtitle1",children:[n.INV_CODE," - ",n.INV_LIBELLE]}),e.jsxs(a,{gridArea:"date",display:"flex",flexDirection:"row",alignItems:"center",columnGap:1,children:[e.jsx(u,{fontSize:"small",color:"info"}),e.jsx(r,{variant:"subtitle1",children:n.INV_DATE&&l(n.INV_DATE)})]}),e.jsx(a,{gridArea:"user",display:"flex",columnGap:1,alignItems:"center",children:e.jsxs(a,{display:"flex",alignItems:"center",children:[e.jsx(p,{fontSize:"small"}),e.jsx(r,{variant:"subtitle1",children:n.USER_INV})]})}),e.jsx(a,{gridArea:"dateCreat",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(r,{variant:"subtitle1",children:n.INV_DATE_CREAT&&l(n.INV_DATE_CREAT,"H")})}),e.jsx(a,{gridArea:"stockColis",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(i,{uvc:"C",qtePesee:n.INV_COLIS})}),e.jsx(a,{gridArea:"stockPiece",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(i,{uvc:"P",qtePesee:n.INV_QUANTITE})}),e.jsx(a,{gridArea:"stockPoids",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(i,{uvc:"N",qtePesee:n.INV_PDS_NET})})]})}const h={},g={COLUMN_WIDTH:100,COLUMN_UNIT:"%",ROW_HEIGHT:60};function T({recherche:n=null,onSelect:t}){const s=I(n);return e.jsx(m,{onSelect:t,HeaderComponent:null,ItemMeasureCard:g,state:s,ItemComponent:f,ItemComponentProps:h,IconComponent:x,labelSearch:""})}export{T as default};
