(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{84517:function(e,t,r){"use strict";var n=r(85893),a=r(94184),i=r.n(a),s=(r(67294),r(11163)),o=r(32905),c=r.n(o);t.Z=function(e){var t=e.children,r=e.variant,a=e.className,o=e.to,l=(0,s.useRouter)();return(0,n.jsx)("button",{type:"button",className:i()(a,c()[r]),onClick:function(){o&&l.push(o)},children:t})}},44454:function(e,t,r){"use strict";r.d(t,{A:function(){return K}});var n=r(85893),a=r(67294),i=r(74041),s=r(45697),o=r.n(s);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=(0,a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,o=l(e,["color","size"]);return a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.createElement("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Slash";var u=d,p=r(83206),f=r(41664),g=r(11510),h=r(63613),y=r(49384),b=r(20836),m=r(73973);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var w=(0,a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,o=x(e,["color","size"]);return a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),a.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),a.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))}));w.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},w.displayName="AlertTriangle";var j=w,_=r(79223),O=r(33349),L=r.n(O),k=function(e){var t=e.title,r=e.info,a=e.warning;return(0,n.jsxs)("div",{className:L().header,children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)("br",{}),(0,n.jsx)(_.Z,{placement:"bottom",trigger:["hover"],overlay:(0,n.jsx)("div",{className:L().tooltip,children:r}),children:(0,n.jsx)(m.Z,{size:16,className:L().info})}),a&&(0,n.jsx)(_.Z,{placement:"bottom",trigger:["hover"],overlay:(0,n.jsx)("div",{className:L().tooltip,children:a}),children:(0,n.jsx)(j,{size:16,className:L().warning})})]})},N=r(9931),P=r.n(N),G=function(){return(0,n.jsx)(u,{size:20})},C=function(e){return void 0!==e&&"".concat(Math.floor(100*e)," %")||"-"},E=function(e){var t=e.grade,r=e.label,a=e.warning,i=e.to;return(0,n.jsx)("div",{style:{textAlign:"center"},children:t?(0,n.jsx)(b.G,{small:!0,warning:a,grade:t,label:r,to:i}):(0,n.jsx)(G,{})})},K=function(e){var t=e.report,r=function(e,t){var r=e.summary;return r[t]&&(0,y.BE)(r[t])||-1},a=function(e){var t=e.id,a=e.title,i=e.info,s=e.sort,o=e.warning,c=e.hash,l=e.gradeKey,d=e.category,u=e.gradeLabel,p=e.warningText;return{name:t,sortable:!0,sort:function(e,t){return s?s(e,t):r(e,l)-r(t,l)},label:a,headerRender:function(){return(0,n.jsx)(k,{title:a,info:i,warning:o})},render:function(e){var t=e.summary;return(0,n.jsx)(E,{grade:t[l],label:u&&u(t),warning:p&&p(t),to:"/url/".concat(encodeURIComponent((0,y.N0)(e.url)),"/").concat(d?"".concat(d,"/"):"","#").concat(c)})}}},s=function(e,t,r){return a({id:e,title:t,info:r,category:"best-practices",warning:"accessibility"===e?(0,n.jsx)(h.D,{}):void 0,hash:"lighthouse",gradeKey:"lighthouse_".concat(e,"Grade"),gradeLabel:function(t){return C(t["lighthouse_".concat(e)])}})},o=[{name:"url",label:"URL ".concat(t&&"(".concat(t.length,")")),sortable:!0,render:function(e){return(0,n.jsx)("div",{style:{width:"95%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:(0,n.jsx)(f.default,{prefetch:!1,href:"/url/".concat(encodeURIComponent((0,y.N0)(e.url))),children:(0,n.jsxs)("a",{children:[(0,n.jsx)(p.Z,{size:16}),"\xa0",(0,y.p5)(e.url)]})})})}}];(0,y.y$)("declaration-a11y")&&o.push(a({id:"declaration-a11y",title:"D\xe9claration d'accessibilit\xe9",info:"Pr\xe9sence de la mention de conformit\xe9 et de la d\xe9claration",hash:"declaration-a11y",gradeKey:"declaration-a11y",category:"best-practices"})),(0,y.y$)("lighthouse")&&(o=o.concat([s("accessibility","Accessibilit\xe9","Bonnes pratiques en mati\xe8re d'accessibilit\xe9 web (LightHouse)"),s("performance","Performance","Performances de chargement des pages web (LightHouse)"),s("seo","SEO","Bonnes pratiques en mati\xe8re de r\xe9f\xe9rencement naturel (LightHouse)")])),(0,y.y$)("testssl")&&o.push(a({id:"ssl",title:"SSL",info:"Niveau de confiance du certificat SSL (testssl.sh)",hash:"testssl",gradeKey:"testsslGrade",gradeLabel:function(e){return e.testsslGrade},sort:function(e,t){return t.summary.testsslExpireSoon-e.summary.testsslExpireSoon||r(e,"testsslGrade")-r(t,"testsslGrade")||1},category:"securite",warningText:function(e){return e.testsslExpireSoon&&e.testsslExpireDate&&"Expire le : ".concat((0,g.Z)(new Date(e.testsslExpireDate),"dd/MM/yyyy"))||void 0}})),(0,y.y$)("http")&&o.push(a({id:"http",title:"HTTP",info:"Bonnes pratiques de configuration HTTP (Mozilla observatory)",hash:"http",category:"securite",gradeKey:"httpGrade"})),(0,y.y$)("updownio")&&(o=o.concat([a({id:"updownio",title:"Disponibilit\xe9",info:"Disponibilit\xe9 du service (updown.io)",hash:"updownio",gradeKey:"uptimeGrade",category:"disponibilite",gradeLabel:function(e){return C((e.uptime||0)/100)}}),a({id:"updownio2",title:"Apdex",info:"Apdex: Application Performance Index : indice de satisfaction des attentes de performance (updown.io)",hash:"updownio",gradeKey:"apdexGrade",category:"disponibilite",gradeLabel:function(e){return e.apdex}})])),(0,y.y$)("dependabot")&&o.push(a({id:"dependabot",title:"Vuln\xe9rabilit\xe9s",info:"Vuln\xe9rabilit\xe9s applicatives detect\xe9es dans les d\xe9pendances du code (dependabot)",hash:"dependabot",category:"securite",gradeKey:"dependabotGrade",gradeLabel:function(e){return e.dependabotCount}})),(0,y.y$)("codescan")&&o.push(a({id:"codescan",title:"CodeQL",info:"Potentielles vuln\xe9rabilit\xe9s ou erreurs detect\xe9es dans les codes sources (codescan)",category:"securite",hash:"codescan",gradeKey:"codescanGrade",gradeLabel:function(e){return e.codescanCount}})),(0,y.y$)("nmap")&&(o=o.concat([a({id:"nmap",title:"Nmap",info:"Vuln\xe9rabilit\xe9s r\xe9seau detect\xe9es par Nmap",category:"securite",hash:"nmap",gradeKey:"nmapGrade"}),a({id:"nmap2",title:"Ports ouverts",info:"Ports TCP ouverts d\xe9tect\xe9s par nmap",category:"securite",hash:"nmap",gradeKey:"nmapOpenPortsGrade",gradeLabel:function(e){return e.nmapOpenPortsCount}})])),(0,y.y$)("thirdparties")&&(o=o.concat([a({id:"trackers",title:"Trackers",info:"Nombre de scripts externes d\xe9tect\xe9s",warning:(0,n.jsx)("div",{children:"Certains scripts externes l\xe9gitimes peuvent \xeatre consid\xe9r\xe9s comme trackers."}),category:"best-practices",hash:"thirdparties",gradeKey:"trackersGrade",gradeLabel:function(e){return e.trackersCount}}),a({id:"cookies",title:"Cookies",info:"Nombre de cookies pr\xe9sents",category:"best-practices",hash:"thirdparties",gradeKey:"cookiesGrade",gradeLabel:function(e){return e.cookiesCount}})])),(0,y.y$)("stats")&&o.push(a({id:"stats",category:"best-practices",title:"Stats",info:"Pr\xe9sence de la page des statistiques",hash:"stats",gradeKey:"statsGrade",gradeLabel:function(e){return e.statsCount}})),(0,y.y$)("404")&&o.push(a({category:"best-practices",id:"404",title:"404",info:"Pages introuvables",hash:"404",gradeKey:"404",gradeLabel:function(e){return e[404]}})),(0,y.y$)("trivy")&&o.push(a({id:"trivy",category:"securite",title:"Trivy",info:"Vuln\xe9rabilit\xe9s Trivy",hash:"trivy",gradeKey:"trivyGrade"}));var c;return t&&(0,n.jsx)(i.Table,{data:t.filter((c="url",function(e,t,r){return!r.slice(t+1).find((function(t){return e[c]===t[c]}))})),caption:"",columns:o,rowKey:function(e,t){return e.url},perPage:1e3,tableClassName:P().table,className:P().tableWrapper})||null}},20836:function(e,t,r){"use strict";r.d(t,{G:function(){return c}});var n=r(85893),a=(r(67294),r(84517)),i=r(42779),s=r.n(i),o={A:"success",B:"info",C:"info",D:"warning",E:"warning",F:"danger"},c=function(e){var t=e.grade,r=e.warning,i=e.label,c=e.to,l=e.small,d="".concat(t).substring(0,1).toUpperCase(),u=o[d]||"danger",p=void 0!==i?i:t;return(0,n.jsxs)(a.Z,{variant:u,className:s()[l?"small":"big"],to:c,children:[p,r&&(0,n.jsx)("span",{title:r,style:{marginLeft:5},children:"\u26a0\ufe0f"})]})}},63613:function(e,t,r){"use strict";r.d(t,{D:function(){return a}});var n=r(85893),a=(r(67294),function(e){var t=e.className;return(0,n.jsxs)("div",{className:t,children:["Moins de 25% des crit\xe8res d'accessibilit\xe9 peuvent \xeatre test\xe9s automatiquement, ",(0,n.jsx)("strong",{children:"une expertise manuelle est requise"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Ce score ne repr\xe9sente pas le score RGAA mais une partie des bonnes pratiques de base \xe0 appliquer."]})})},32905:function(e){e.exports={success:"badge_success__HjgKW",info:"badge_info__eK6GA",warning:"badge_warning__5QJuG",danger:"badge_danger__Lexxg"}},33349:function(e){e.exports={header:"columnHeader_header__HGlPH",tooltip:"columnHeader_tooltip__6_389",info:"columnHeader_info__ITVfq",warning:"columnHeader_warning__PH2wZ"}},9931:function(e){e.exports={tableWrapper:"dashboard_tableWrapper__J5Sf_",table:"dashboard_table__FQ4z4"}},42779:function(e){e.exports={small:"grade_small__EU1s6",big:"grade_big__iN2Jf"}}}]);