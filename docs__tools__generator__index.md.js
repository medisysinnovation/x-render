(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"0zqC":function(A,E,n){"use strict";n.r(E);var u=n("tJVT"),e=n("q1tI"),t=n.n(e),f=n("k3GJ"),m=n("MZF8"),l=n("dEAq"),r=n.n(l),F=n("ZpkN"),C=n("TIsu"),D=n.n(C);function i(p,s){var o,d=(o=p.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return d||(d=s.tsx?"tsx":"jsx"),d}var j=p=>{var s,o,d,g=Object(e.useRef)(),T=Object(e.useContext)(l.context),O=T.locale,a=Object(l.useLocaleProps)(O,p),R=Object(l.useDemoUrl)(a.identifier),B=a.demoUrl||R,U=(m.a===null||m.a===void 0?void 0:m.a.location.hash)==="#".concat(a.identifier),w=Object.keys(a.sources).length===1,P=Object(l.useCodeSandbox)((s=a.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:a),M=Object(l.useRiddle)((o=a.hideActions)!==null&&o!==void 0&&o.includes("RIDDLE")?null:a),K=Object(l.useMotions)(a.motions||[],g.current),L=Object(u.default)(K,2),W=L[0],J=L[1],$=Object(l.useCopy)(),x=Object(u.default)($,2),V=x[0],G=x[1],Z=Object(e.useState)("_"),S=Object(u.default)(Z,2),_=S[0],z=S[1],H=Object(e.useState)(i(_,a.sources[_])),I=Object(u.default)(H,2),b=I[0],X=I[1],Q=Object(e.useState)(Boolean(a.defaultShowCode)),k=Object(u.default)(Q,2),h=k[0],Y=k[1],q=Object(e.useState)(Math.random()),y=Object(u.default)(q,2),ee=y[0],N=y[1],v=a.sources[_][b]||a.sources[_].content,te=Object(l.useTSPlaygroundUrl)(O,v),ae=Object(e.useRef)(),ne=Object(l.usePrefersColor)(),le=Object(u.default)(ne,1),ue=le[0];Object(e.useEffect)(()=>{N(Math.random())},[ue]);function re(c){z(c),X(i(c,a.sources[c]))}return t.a.createElement("div",{style:a.style,className:[a.className,"__dumi-default-previewer",U?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:a.identifier,"data-debug":a.debug||void 0,"data-iframe":a.iframe||void 0},a.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:g,className:"__dumi-default-previewer-demo",style:{transform:a.transform?"translate(0, 0)":void 0,padding:a.compact||a.iframe&&a.compact!==!1?"0":void 0,background:a.background}},a.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(a.iframe).replace(/(\d)$/,"$1px")},key:ee,src:B,ref:ae}):a.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":a.title},a.title&&t.a.createElement(l.AnchorLink,{to:"#".concat(a.identifier)},a.title),a.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},P&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:P}),M&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:M}),a.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>W()}),a.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>N(Math.random())}),!((d=a.hideActions)!==null&&d!==void 0&&d.includes("EXTERNAL"))&&t.a.createElement(l.Link,{target:"_blank",to:B},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":G,onClick:()=>V(v)}),b==="tsx"&&h&&t.a.createElement(l.Link,{target:"_blank",to:te},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(h?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Y(!h)})),h&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!w&&t.a.createElement(f.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:re},Object.keys(a.sources).map(c=>t.a.createElement(f.TabPane,{tab:c==="_"?"index.".concat(i(c,a.sources[c])):c,key:c}))),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(F.a,{code:v,lang:b,showCopy:!1}))))};E.default=j},Jn06:function(A,E,n){"use strict";n.r(E);var u=n("q1tI"),e=n.n(u),t=n("dEAq"),f=n.n(t),m=n("0zqC"),l=n("ZpkN"),r=n("JjdP"),F=e.a.memo(r.default["generator-demo"].component),C=e.a.memo(r.default["generator-modal"].component),D=e.a.memo(r.default["generator-transformer"].component),i=e.a.memo(r.default["generator-settings"].component);E.default=function(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},e.a.createElement(t.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),e.a.createElement("h3",{id:"\u5B89\u88C5"},e.a.createElement(t.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),e.a.createElement(l.a,{code:"npm i fr-generator",lang:"bash"}),e.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},e.a.createElement(t.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),e.a.createElement(m.default,r.default["generator-demo"].previewerProps,e.a.createElement(F,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"api"},e.a.createElement(t.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement("h3",{id:"props"},e.a.createElement(t.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Props"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u53C2\u6570"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"defaultValue"),e.a.createElement("td",null,"\u9ED8\u8BA4\u8868\u5355 schema"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,e.a.createElement("code",null,"DEFAULT_SCHEMA"))),e.a.createElement("tr",null,e.a.createElement("td",null,"transformer"),e.a.createElement("td",null,"schema \u53CC\u5411\u8F6C\u6362"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,e.a.createElement("code",null,"{"," fromFormRender, toFormRender ","}"))),e.a.createElement("tr",null,e.a.createElement("td",null,"extraButtons"),e.a.createElement("td",null,"\u64CD\u4F5C\u680F\u6309\u94AE"),e.a.createElement("td",null,e.a.createElement("code",null,"array")),e.a.createElement("td",null,e.a.createElement("code",null,"extraButton[]"))),e.a.createElement("tr",null,e.a.createElement("td",null,"settings"),e.a.createElement("td",null,"\u5DE6\u53F3\u4FA7\u680F\u914D\u7F6E"),e.a.createElement("td",null,e.a.createElement("code",null,"array")),e.a.createElement("td",null,e.a.createElement(t.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L513"},e.a.createElement("code",null,"defaultSettings")))),e.a.createElement("tr",null,e.a.createElement("td",null,"commonSettings"),e.a.createElement("td",null,"\u901A\u7528\u914D\u7F6E"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,e.a.createElement(t.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L2"},e.a.createElement("code",null,"defaultCommonSettings")))),e.a.createElement("tr",null,e.a.createElement("td",null,"globalSettings"),e.a.createElement("td",null,"\u5168\u5C40\u914D\u7F6E"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,e.a.createElement(t.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L513"},e.a.createElement("code",null,"defaultGlobalSettings")))),e.a.createElement("tr",null,e.a.createElement("td",null,"widgets"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,e.a.createElement("code",null,"{","}"))))),e.a.createElement("h4",{id:"extrabutton"},e.a.createElement(t.AnchorLink,{to:"#extrabutton","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"extraButton"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u7C7B\u578B"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"text"),e.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),e.a.createElement("td",null,e.a.createElement("code",null,"string"))),e.a.createElement("tr",null,e.a.createElement("td",null,"onClick"),e.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),e.a.createElement("td",null,e.a.createElement("code",null,"(event) => void"))))),e.a.createElement("p",null,"\u652F\u6301 antd \u6309\u94AE\u7EC4\u4EF6\u7684\u6240\u6709\u5176\u4ED6\u5C5E\u6027 ",e.a.createElement(t.Link,{to:"https://ant.design/components/button-cn/#API"},"https://ant.design/components/button-cn/#API")),e.a.createElement("h3",{id:"events"},e.a.createElement(t.AnchorLink,{to:"#events","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Events"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u56DE\u8C03\u53C2\u6570"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"onChange"),e.a.createElement("td",null,"\u8868\u5355 data \u53D8\u5316\u56DE\u8C03"),e.a.createElement("td",null,"\u8868\u5355\u7684 data")),e.a.createElement("tr",null,e.a.createElement("td",null,"onSchemaChange"),e.a.createElement("td",null,"\u8868\u5355 schema \u53D8\u5316\u56DE\u8C03"),e.a.createElement("td",null,"\u5BFC\u51FA\u7684 schema")))),e.a.createElement("h3",{id:"methods"},e.a.createElement(t.AnchorLink,{to:"#methods","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Methods"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u5165\u53C2"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"getValue"),e.a.createElement("td",null,"\u83B7\u53D6\u5BFC\u51FA\u7684 schema \u503C"),e.a.createElement("td",null,"-")),e.a.createElement("tr",null,e.a.createElement("td",null,"setValue"),e.a.createElement("td",null,"\u4ECE\u5916\u90E8\u5F3A\u5236\u4FEE\u6539 schema"),e.a.createElement("td",null,e.a.createElement("code",null,"schema"))),e.a.createElement("tr",null,e.a.createElement("td",null,"copyValue"),e.a.createElement("td",null,"\u5C06\u73B0\u6709 schema \u62F7\u8D1D\u5230\u526A\u8D34\u677F"),e.a.createElement("td",null,"-")))),e.a.createElement("h2",{id:"\u6848\u4F8B\u6F14\u793A"},e.a.createElement(t.AnchorLink,{to:"#\u6848\u4F8B\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6848\u4F8B\u6F14\u793A"),e.a.createElement("h3",{id:"\u6D6E\u7A97\u63A5\u5165"},e.a.createElement(t.AnchorLink,{to:"#\u6D6E\u7A97\u63A5\u5165","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6D6E\u7A97\u63A5\u5165"),e.a.createElement("p",null,"\u7528\u4E8E schema \u7684\u53EF\u89C6\u5316\u4FEE\u6539")),e.a.createElement(m.default,r.default["generator-modal"].previewerProps,e.a.createElement(C,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"schema-\u4E92\u8F6C"},e.a.createElement(t.AnchorLink,{to:"#schema-\u4E92\u8F6C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Schema \u4E92\u8F6C"),e.a.createElement("p",null,"\u4F7F\u7528 ",e.a.createElement("code",null,"transformer")," \u8FD9\u4E2A props\uFF0C\u8FDB\u884C schema \u7684\u4E92\u8F6C")),e.a.createElement(m.default,r.default["generator-transformer"].previewerProps,e.a.createElement(D,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"\u4FA7\u680F\u914D\u7F6E"},e.a.createElement(t.AnchorLink,{to:"#\u4FA7\u680F\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4FA7\u680F\u914D\u7F6E"),e.a.createElement("p",null,"\u4F7F\u7528 settings/commonSettings \u81EA\u7531\u914D\u7F6E\u5DE6\u53F3\u4FA7\u680F\u5185\u5BB9\uFF0C\u5E76\u4F7F\u7528 widgets \u6CE8\u5165\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.a.createElement("p",null,"\u201C\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846\u201D\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002")),e.a.createElement(m.default,r.default["generator-settings"].previewerProps,e.a.createElement(i,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u5E38\u89C1\u95EE\u9898"},e.a.createElement(t.AnchorLink,{to:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5E38\u89C1\u95EE\u9898"),e.a.createElement("p",null,e.a.createElement("strong",null,"1\u3001\u5982\u4F55\u63A7\u5236\u7F16\u8F91\u5668\u9AD8\u5EA6")),e.a.createElement("p",null,"\u7ED9\u7EC4\u4EF6\u5916\u5C42\u8981\u5305\u88F9\u7684 div \u8BBE\u7F6E\u9AD8\u5EA6\u5373\u53EF\uFF0C\u5426\u5219\u4E3A\u9ED8\u8BA4\u503C min-height: 30vh"))))}},TIsu:function(A,E,n){}}]);