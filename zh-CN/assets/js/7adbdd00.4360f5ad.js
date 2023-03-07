"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2125],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?t.createElement(f,l(l({ref:n},s),{},{components:a})):t.createElement(f,l({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},n)}},4866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),p=a(1980),u=a(7392),s=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function c(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??d(a);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function v(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[p,u]=f({queryString:a,groupId:t}),[d,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,s.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:t}),k=(()=>{const e=p??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var k=a(2389);const h="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:n,block:a,selectedValue:i,selectValue:p,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const n=e.currentTarget,a=s.indexOf(n),t=u[a].value;t!==i&&(d(n),p(t))},m=e=>{var n;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=s[n]??s[s.length-1];break}}null==(n=a)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},n)},u.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>s.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===n})}),a??n)})))}function N(e){let{lazy:n,children:a,selectedValue:t}=e;if(a=Array.isArray(a)?a:[a],n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function y(e){const n=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(b,(0,t.Z)({},e,n)),r.createElement(N,(0,t.Z)({},e,n)))}function w(e){const n=(0,k.Z)();return r.createElement(y,(0,t.Z)({key:String(n)},e))}},6125:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={title:"Uniapp\u9002\u914d\u5668",sidebar_position:50},p=void 0,u={unversionedId:"extension/alova-adapter-uniapp",id:"extension/alova-adapter-uniapp",title:"Uniapp\u9002\u914d\u5668",description:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 vue3 \u7248\u672c\u7684 uniapp \u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/10-extension/05-alova-adapter-uniapp.md",sourceDirName:"10-extension",slug:"/extension/alova-adapter-uniapp",permalink:"/zh-CN/extension/alova-adapter-uniapp",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/10-extension/05-alova-adapter-uniapp.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Uniapp\u9002\u914d\u5668",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Taro\u9002\u914d\u5668",permalink:"/zh-CN/extension/alova-adapter-taro"},next:{title:"Others",permalink:"/zh-CN/category/others"}},s={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}],c={toc:d};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 vue3 \u7248\u672c\u7684 uniapp \u5e94\u7528\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-uniapp --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-uniapp\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u521b\u5efa-alova"},"\u521b\u5efa alova"),(0,r.kt)("p",null,"\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},"AdapterUniapp")," \u5c06\u8fd4\u56de",(0,r.kt)("em",{parentName:"p"},"\u8bf7\u6c42\u9002\u914d\u5668"),"\u3001",(0,r.kt)("em",{parentName:"p"},"\u5b58\u50a8\u9002\u914d\u5668"),"\uff0c\u4ee5\u53ca",(0,r.kt)("em",{parentName:"p"},"VueHook"),"\uff0c\u56e0\u6b64\u4f60\u4e0d\u518d\u9700\u8981\u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u9879\uff0c\u4f7f\u7528\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport AdapterUniapp from '@alova/adapter-uniapp';\n\nconst alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterUniapp()\n);\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,r.kt)("p",null,"\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"},"uni.request"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"uni.request"),"\u652f\u6301\u7684",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/api/request/request.html"},"\u5168\u90e8\u914d\u7f6e\u9879")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <view v-if=\"loading\">\u52a0\u8f7d\u4e2d...</view>\n  <view>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</view>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9uni.request\n      enableHttp2: true,\n      sslVerify: true\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n")),(0,r.kt)("h3",{id:"\u4e0a\u4f20"},"\u4e0a\u4f20"),(0,r.kt)("p",null,"\u5728 method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"requestType: 'upload'"),"\u65f6\u8868\u793a\u4e0a\u4f20\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),"\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u6570\u636e\u653e\u5728 method \u5b9e\u4f8b\u7684 data \u4e2d\uff0c\u4f60\u9700\u8981\u5728 data \u4e2d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"filePath\u6216files"),"\uff0c\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"file"),"(\u5982\u679c\u9700\u8981)\uff0c\u8fd9 4 \u4e2a\u53c2\u6570\u5c06\u4f20\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),"\u4e2d\uff0c\u540c\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 data \u4e2d\u6307\u5b9a\u8fd9 4 \u4e2a\u53c2\u6570\u5916\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u4f1a\u5c06\u5b83\u4eec\u4f20\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"formData"),"\u53c2\u6570\u4e2d\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"uni.uploadFile"),"\u652f\u6301\u7684",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile"},"\u5168\u90e8\u914d\u7f6e\u9879"),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <view v-if=\"loading\">\u4e0a\u4f20\u4e2d...</view>\n  <view>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{{ uploading.loaded }}/{{ uploading.total }}</view>\n  <button @click=\"handleImageChoose\">\u4e0a\u4f20\u56fe\u7247</button>\n  \x3c!-- ... --\x3e\n</tempate>\n\n<script setup>\n  const uploadFile = (name, filePath, formData) =>\n    alovaInst.Post(\n      '/uploadImg',\n      {\n        name,\n        filePath,\n\n        // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165uni.uploadFile\u7684formData\u4e2d\n        ...formData\n      },\n      {\n        // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.uploadFile\n        requestType: 'upload',\n        fileType: 'image',\n\n        // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\n        enableUpload: true\n      }\n    );\n\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\n    immediate: false\n  });\n\n  const handleImageChoose = () => {\n    uni.chooseImage({\n      success: chooseImageRes => {\n        const tempFilePaths = chooseImageRes.tempFilePaths;\n        send('fileName', tempFilePaths[0], {\n          extra1: 'a',\n          extra2: 'b'\n        });\n      }\n    });\n  };\n<\/script>\n")),(0,r.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u5728 method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"requestType: 'download'"),"\u65f6\u8868\u793a\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"uni.downloadFile"),"\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"},"uni.downloadFile"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"uni.downloadFile"),"\u652f\u6301\u7684",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile"},"\u5168\u90e8\u914d\u7f6e\u9879"),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <view v-if=\"loading\">\u4e0b\u8f7d\u4e2d...</view>\n  <view>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{{ downloading.loaded }}/{{ downloading.total }}</view>\n  <button @click=\"handleImageDownload\">\u4e0b\u8f7d\u56fe\u7247</button>\n  \x3c!-- ... --\x3e\n</tempate>\n\n<script setup>\n  const downloadFile = filePath =>\n    alovaInst.Get('/bigImage.jpg', {\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.downloadFile\n      requestType: 'download',\n      filePath,\n\n      // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\n      enableDownload: true\n    });\n\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\n    immediate: false\n  });\n\n  const handleImageDownload = () => {\n    send('file_save_path');\n  };\n<\/script>\n")),(0,r.kt)("h2",{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 uniapp \u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\uff0c\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("a",{parentName:"p",href:"/extension/alova-mock"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u5728 uniapp \u73af\u5883\u4e0b\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f\u517c\u5bb9 uniapp \u9002\u914d\u5668\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"@alova/adapter-uniapp"),"\u5305\u4e2d\u5bfc\u51fa\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"uniappMockResponse"),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport AdapterUniapp, { uniappRequestAdapter, uniappMockResponse } from '@alova/adapter-uniapp';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9auniapp\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: uniappRequestAdapter,\n\n  //  \u6a21\u62df\u54cd\u5e94\u9002\u914d\u5668\uff0c\u6307\u5b9a\u540e\u54cd\u5e94\u6570\u636e\u5c06\u8f6c\u6362\u4e3auniapp\u517c\u5bb9\u7684\u6570\u636e\u683c\u5f0f\n  onMockResponse: uniappMockResponse\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  timeout: 5000,\n  ...AdapterUniapp({\n    // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n    mockRequest: process.env.NODE_ENV === 'development' ? mockAdapter : undefined\n  })\n  // ...\n});\n")),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"uniapp \u8bf7\u6c42\u9002\u914d\u5668\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e uniapp \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"),(0,r.kt)("h3",{id:"method-\u914d\u7f6e"},"method \u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"uniapp.request"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"uniapp.uploadFile"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"uniapp.downloadFile"),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * uni.request\u8bf7\u6c42\u989d\u5916\u53c2\u6570\n */\nexport type UniappRequestConfig = Omit<\n  UniNamespace.RequestOptions,\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * uni.uploadFile\u989d\u5916\u53c2\u6570\n */\nexport type UniappUploadConfig = Omit<\n  UniNamespace.UploadFileOption,\n  'url' | 'name' | 'header' | 'formData' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * uni.downloadFile\u989d\u5916\u53c2\u6570\n */\nexport type UniappDownloadConfig = Omit<\n  UniNamespace.DownloadFileOption,\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * \u5408\u5e76\u7684\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n */\nexport type UniappConfig = {\n  /**\n   * \u8bf7\u6c42\u7c7b\u578b\uff0cupload\u8868\u793a\u4e0a\u4f20\uff0cdownload\u8868\u793a\u4e0b\u8f7d\uff0c\u4e0d\u586b\u5199\u8868\u793a\u6b63\u5e38\u8bf7\u6c42\n   */\n  requestType?: 'upload' | 'download';\n} & UniappRequestConfig &\n  UniappUploadConfig &\n  UniappDownloadConfig;\n")),(0,r.kt)("h3",{id:"\u54cd\u5e94\u6570\u636e"},"\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"\u56e0\u4e3a uniapp \u8bf7\u6c42\u9002\u914d\u5668\u540c\u65f6\u517c\u5bb9\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"uniapp.request"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"uniapp.uploadFile"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"uniapp.downloadFile"),"\uff0c\u4f46\u5b83\u4eec\u7684\u54cd\u5e94\u503c\u7c7b\u578b\u7a0d\u6709\u4e0d\u540c\uff0c\u6240\u4ee5\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type UniappResponse =\n  // uni.request\u7684\u54cd\u5e94\u7c7b\u578b\n  | UniNamespace.RequestSuccessCallbackResult\n\n  // uni.uploadFile\u7684\u54cd\u5e94\u7c7b\u578b\n  | UniNamespace.UploadFileSuccessCallbackResult\n\n  // uni.downloadFile\u7684\u54cd\u5e94\u7c7b\u578b\n  | UniNamespace.DownloadSuccessData;\n")),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u5efa\u8bae\u5206\u5f00\u573a\u666f\u5224\u65ad\u8fd4\u56de\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterUniapp(),\n  responsed(response) {\n    const { statusCode, data } = response as UniNamespace.RequestSuccessCallbackResult;\n    if (statusCode >= 400) {\n      throw new Error('\u8bf7\u6c42\u9519\u8bef');\n    }\n    return data || null;\n  }\n});\n")))}m.isMDXComponent=!0}}]);