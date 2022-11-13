"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:v,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,s.U)(),[w,T]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=k[v];null!=e&&e!==w&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=x.indexOf(t),n=y[a].value;n!==w&&(E(t),T(n),null!=v&&O(v,String(n)))},N=e=>{var t;let a=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:N,onClick:j},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={title:"Uniapp\u9002\u914d\u5668",sidebar_position:40},s=void 0,u={unversionedId:"extension/alova-adapter-uniapp",id:"extension/alova-adapter-uniapp",title:"Uniapp\u9002\u914d\u5668",description:"\u5b89\u88c5",source:"@site/docs/09-extension/04-alova-adapter-uniapp.md",sourceDirName:"09-extension",slug:"/extension/alova-adapter-uniapp",permalink:"/extension/alova-adapter-uniapp",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/09-extension/04-alova-adapter-uniapp.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Uniapp\u9002\u914d\u5668",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Taro\u9002\u914d\u5668",permalink:"/extension/alova-adapter-taro"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"UniappRequest",id:"uniapprequest",level:2},{value:"uniappStorage",id:"uniappstorage",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-uniapp --save\n"))),(0,r.kt)(o.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-uniapp\n")))),(0,r.kt)("h2",{id:"uniapprequest"},"UniappRequest"),(0,r.kt)("p",null,"\u656c\u8bf7\u671f\u5f85..."),(0,r.kt)("h2",{id:"uniappstorage"},"uniappStorage"),(0,r.kt)("p",null,"\u656c\u8bf7\u671f\u5f85..."))}m.isMDXComponent=!0}}]);