import{bL as u,as as p,j as e,cr as m,G as s,ct as h,C as i,bP as I,cH as j,cl as C,cw as f,aT as A}from"./index-2ba9b923.js";import{u as g,d as S}from"./hooksOperation-79bbe724.js";import"./actions-d163bdb2.js";function _(r,n,a,o){return u({key:["SearchLotsByArticle",r],fxt:(c,t)=>p().PrepaMethods().LotsByArticle({variables:{recherche:c,filtresOptionnels:r,context:(t==null?void 0:t.current)||null,demande:o}}),options:n,query:r,selectorConfig:a})}function O({item:r,style:n,affDlc:a,onSelect:o,ItemComponentProps:c,className:t}){var d;const l=a?r.ACH_DLC:r.ACH_DATE_REC;return e.jsxs(m,{style:n,sx:{display:"grid",gridTemplateColumns:"1fr 3.2fr 3.2fr 2.2fr 1fr 1fr 1.3fr",gridTemplateAreas:' "date article frs nolot stockColis stockPiece stockPoids" ',alignItems:"center",width:"100%",typography:"body2"},onClick:x=>{o(r)},children:[e.jsxs(s,{gridArea:"date",flexDirection:"column",display:"flex",alignItems:"center",columnGap:1,children:[l&&e.jsx(h,{sx:{fontSize:25},color:"info"}),e.jsx(i,{fontSize:"small",sx:{color:"info.dark"},children:l&&I(l)})]}),e.jsx(s,{gridArea:"article",display:"flex",flexDirection:"row",alignItems:"center",sx:{overflow:"hidden"},columnGap:1,children:e.jsxs(s,{display:"flex",flexDirection:"column",children:[e.jsx(i,{variant:"subtitle1",sx:{color:"info.dark"},children:r.Article.ART_CODE}),e.jsx(i,{variant:"subtitle1",textOverflow:"ellipsis",noWrap:!0,children:(d=r.Article)==null?void 0:d.ART_LIB1})]})}),e.jsxs(s,{gridArea:"frs",display:"flex",columnGap:1,alignItems:"center",children:[e.jsx(j,{}),e.jsx(i,{variant:"subtitle1",children:r.FOU_NOM})]}),e.jsxs(s,{gridArea:"nolot",display:"flex",columnGap:1,alignItems:"center",children:[e.jsx(C,{icon:"EAN13"}),e.jsxs(s,{display:"flex",flexDirection:"column",children:[e.jsx(i,{variant:"subtitle1",children:r.LOTID}),e.jsx(i,{variant:"subtitle1",sx:{color:"info.dark"},children:r.LOT})]})]}),e.jsx(s,{gridArea:"stockColis",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(f,{fontSize:"medium",variant:"subtitle1",uvc:"C",qtePesee:r.STO_DIS_COLIS})}),e.jsx(s,{gridArea:"stockPiece",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(f,{fontSize:"medium",variant:"subtitle1",uvc:"P",qtePesee:r.STO_DIS_QUANTITE})}),e.jsx(s,{gridArea:"stockPoids",display:"flex",columnGap:1,alignItems:"center",children:e.jsx(f,{fontSize:"medium",variant:"subtitle1",uvc:"N",qtePesee:r.STO_DIS_PDS})})]})}const T={COLUMN_WIDTH:100,COLUMN_UNIT:"%",ROW_HEIGHT:120,md:{COLUMN_WIDTH:100,COLUMN_UNIT:"%",ROW_HEIGHT:60}};function P({demande:r,recherche:n=null,onSelect:a,...o}){const{getParametreBorne:c}=g(S()),t=c("V2_DLC_AFF"),l=(t==null?void 0:t.USER_ZONE1)==="O",d=_(n,{},null,r);return e.jsx(A,{ItemMeasureCard:T,onSelect:a,ItemComponent:x=>e.jsx(O,{affDlc:l,...x}),state:d,labelSearch:"",placeholderSearch:""})}export{P as default};
