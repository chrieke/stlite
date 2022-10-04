/*! For license information please see 41.782edd5c.chunk.js.LICENSE.txt */
(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[41],{1855:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o,a=n(14),r=n(5),i=n(0),c=n.n(i),l=n(1450),d=n(1811),s=n(30),u=n(77),m=n(220),b=n(29),h=n(139),g=n(45);function f(e){var t=e&&h.b.getTypeName(e),n=o.Text;return t?"bool"===t?n=o.Boolean:["int64","float64","range"].includes(t)?n=o.Number:t.startsWith("list")&&(n=o.List):n=o.Text,n}function p(e){return(e.displayContent||h.b.format(e.content,e.contentType)).replace(/(\r\n|\n|\r)/gm," ")}function v(e,t,n){var o=new RegExp("".concat(e,"[,\\s].*{(?:[^}]*[\\s;]{1})?").concat(t,":\\s*([^;}]+)[;]?.*}"),"gm");n=n.replace(/{/g," {");var a=o.exec(n);if(a)return a[1].trim()}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";if(e===o.Text)return{kind:l.c.Text,data:"",displayData:"",allowOverlay:!0,readonly:t,style:n};if(e===o.Boolean)return{kind:l.c.Boolean,data:!1,readonly:t,allowOverlay:!1,style:n};if(e===o.Number)return{kind:l.c.Number,data:void 0,displayData:"",readonly:t,allowOverlay:!0,contentAlign:"right",style:n};if(e===o.List)return{kind:l.c.Bubble,data:[],allowOverlay:!0,style:n};throw new Error("Unsupported cell type: ".concat(e))}!function(e){e.Text="text",e.Number="number",e.Boolean="boolean",e.List="list"}(o||(o={}));var x=n(24),O=n(12),w=Object(O.a)("div",{target:"e17g77xh0"})((function(e){var t,n=e.theme,o=e.width,a=e.height,i=e.minHeight,c=e.maxHeight,l=e.minWidth,d=e.maxWidth;return Object(r.a)(Object(r.a)({overflow:"auto",position:"relative",resize:"both",display:"inline-block"},o&&{width:"".concat(o,"px")}),{},{minHeight:"".concat(i,"px"),maxHeight:"".concat(c,"px"),minWidth:"".concat(l,"px"),maxWidth:"".concat(d,"px"),height:"".concat(a,"px"),border:"1px solid ".concat(n.colors.fadedText05),"> div":{height:"100%",minWidth:"100%"},"& .dvn-scroller":(t={scrollbarWidth:"thin"},Object(x.a)(t,"overflowX","overlay !important"),Object(x.a)(t,"overflowY","overlay !important"),t),"&::-webkit-resizer":{display:"none"}})}),""),j=(n(1610),n(1));function C(e){return{accentColor:e.colors.primary,accentFg:e.colors.white,accentLight:Object(s.g)(e.colors.primary,.9),borderColor:e.colors.fadedText05,fontFamily:e.genericFonts.bodyFont,bgSearchResult:Object(s.g)(e.colors.primary,.9),bgIconHeader:e.colors.fadedText60,fgIconHeader:e.colors.white,bgHeader:e.colors.bgMix,bgHeaderHasFocus:e.colors.secondaryBg,bgHeaderHovered:e.colors.bgMix,textHeader:e.colors.fadedText60,textHeaderSelected:e.colors.white,headerFontStyle:"".concat(e.fontSizes.sm),baseFontStyle:e.fontSizes.sm,editorFontSize:e.fontSizes.sm,textDark:e.colors.bodyText,textMedium:Object(s.g)(e.colors.bodyText,.2),textLight:e.colors.fadedText60,textBubble:e.colors.fadedText60,bgCell:e.colors.bgColor,bgCellMedium:e.colors.bgColor,cellHorizontalPadding:8,cellVerticalPadding:3,bgBubble:e.colors.secondaryBg,bgBubbleSelected:e.colors.secondaryBg,linkColor:e.colors.linkText,drilldownBorder:e.colors.darkenedBgMix25}}function T(e,t,n){var s,u,m,h=Object(i.useState)((function(){return new Map})),x=Object(a.a)(h,2),O=x[0],w=x[1],j=function(e,t){var n,a,i,c,l,d,s=[];if(t.isEmpty())return s.push({id:"empty-index",title:"",hasMenu:!1,getTemplate:function(){return y(o.Text,!0,"faded")},columnType:o.Text}),s;for(var u=null!==(n=null===(a=t.types)||void 0===a||null===(i=a.index)||void 0===i?void 0:i.length)&&void 0!==n?n:0,m=null!==(c=null===(l=t.columns)||void 0===l||null===(d=l[0])||void 0===d?void 0:d.length)&&void 0!==c?c:0,b=function(e){var n=f(t.types.index[e]);s.push({id:"index-".concat(e),title:"",hasMenu:!1,getTemplate:function(){return y(n,!0,"faded")},columnType:n})},h=0;h<u;h++)b(h);for(var g=function(n){var o=t.columns[0][n],a=f(t.types.data[n]),i=e.useContainerWidth||e.width;s.push(Object(r.a)({id:"column-".concat(o,"-").concat(n),title:o,hasMenu:!1,getTemplate:function(){return y(a,!0)},columnType:a},i?{grow:1}:{}))},p=0;p<m;p++)g(p);return s}(e,t).map((function(e){return e.id&&O.has(e.id)&&void 0!==O.get(e.id)?Object(r.a)(Object(r.a)({},e),{},{width:O.get(e.id)}):e})),C=t.isEmpty()?1:t.dimensions.rows-1,T=null!==(s=null===(u=t.types)||void 0===u||null===(m=u.index)||void 0===m?void 0:m.length)&&void 0!==s?s:0,k=c.a.useCallback((function(e,t){e.id&&w(new Map(O).set(e.id,t))}),[j]),S=c.a.useCallback((function(e){var n=Object(a.a)(e,2),i=n[0],c=n[1];if(t.isEmpty())return Object(r.a)(Object(r.a)({},y(o.Text,!0,"faded")),{},{displayData:"empty"});if(i>j.length-1)return y(o.Text,!0);var d=j[i].getTemplate();if(c>C-1)return d;try{return function(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=e.kind;if(e.kind===l.c.Custom&&!(a=null===(n=e.data)||void 0===n?void 0:n.kind))throw new Error("Unable to determine cell type for custom cell.");if(o&&t.cssId){var i={},c=v(t.cssId,"color",o);c&&(i.textDark=c);var d=v(t.cssId,"background-color",o);d&&(i.bgCell=d),i&&(e=Object(r.a)(Object(r.a)({},e),{},{themeOverride:i}))}if(a===l.c.Text){var s=p(t);return Object(r.a)(Object(r.a)({},e),{},{data:"string"!==typeof t.content&&Object(g.m)(t.content)?s:t.content,displayData:s})}if(a===l.c.Number){var u=p(t),m=t.content;return m instanceof Int32Array&&(m=m[0]),Object(r.a)(Object(r.a)({},e),{},{data:Object(g.m)(m)?Number(m):void 0,displayData:u})}if(a===l.c.Boolean)return Object(r.a)(Object(r.a)({},e),{},{data:t.content});if(a===l.c.Bubble)return Object(r.a)(Object(r.a)({},e),{},{data:Object(g.m)(t.content)?JSON.parse(JSON.stringify(t.content,(function(e,t){return"bigint"===typeof t?Number(t):t}))):[]});throw new Error("Unsupported cell kind: ".concat(a))}(d,t.getCell(c+1,i),t.cssStyles)}catch(s){return Object(b.b)(s),d}}),[j,C,t]),M=Object(d.a)({columns:j,getCellContent:S,rows:C,sort:n}).getCellContent,H=function(e,t){return void 0===t?e:e.map((function(e){return e.id===t.column.id?Object(r.a)(Object(r.a)({},e),{},{title:"asc"===t.direction?"\u2191 ".concat(e.title):"\u2193 ".concat(e.title)}):e}))}(j,n);return{numRows:C,numIndices:T,columns:H,getCellContent:M,onColumnResize:k}}var k=Object(m.a)((function(e){var t,n=e.element,r=e.data,i=e.width,d=e.height,s=c.a.useState(),m=Object(a.a)(s,2),b=m[0],h=m[1],g=Object(u.c)(),f=T(n,r,b),p=f.numRows,v=f.numIndices,y=f.columns,x=f.getCellContent,O=f.onColumnResize,k=c.a.useState(!0),S=Object(a.a)(k,2),M=S[0],H=S[1],B=c.a.useState({columns:l.a.empty(),rows:l.a.empty()}),W=Object(a.a)(B,2),N=W[0],z=W[1],F=c.a.useRef(null),D=c.a.useCallback((function(e){var t,n="asc",a=y[e];if(b&&b.column.id===a.id){if("asc"!==b.direction)return void h(void 0);n="desc"}h({column:a,direction:n,mode:(t=a.columnType,t===o.Number?"smart":"default")})}),[b,y]),I=Math.max(35*(p+1)+3,73),R=Math.min(I,400);n.height&&(R=Math.max(n.height,73),I=Math.max(n.height,I)),d&&(R=Math.min(R,d),I=Math.min(I,d),n.height||(R=I));var E=i;return n.useContainerWidth?t=i:n.width&&(t=Math.min(Math.max(n.width,38),i),E=Math.min(Math.max(n.width,E),i)),Object(j.jsx)(w,{className:"stDataFrame",width:t,height:R,minHeight:73,maxHeight:I,minWidth:38,maxWidth:E,onBlur:function(){M||z({columns:l.a.empty(),rows:l.a.empty(),current:void 0})},children:Object(j.jsx)(l.b,{ref:F,columns:y,rows:p,minColumnWidth:35,maxColumnWidth:650,rowHeight:35,headerHeight:35,getCellContent:x,onColumnResize:O,freezeColumns:v,smoothScrollX:!0,smoothScrollY:p<1e5,verticalBorder:!0,getCellsForSelection:!0,rowMarkers:"none",rangeSelect:"rect",columnSelect:"none",rowSelect:"none",keybindings:{search:!0},onHeaderClicked:D,gridSelection:N,onGridSelectionChange:function(e){z(e)},theme:C(g),onMouseMove:function(e){"out-of-bounds"===e.kind&&M?H(!1):"out-of-bounds"===e.kind||M||H(!0)},experimental:{scrollbarWidthOverride:1}})})}))}}]);
//# sourceMappingURL=41.782edd5c.chunk.js.map