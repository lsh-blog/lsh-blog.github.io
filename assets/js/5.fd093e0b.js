(window.webpackJsonp=window.webpackJsonp||[]).push([[5,13],{235:function(t,e,n){},267:function(t,e,n){},268:function(t,e,n){},278:function(t,e,n){},279:function(t,e,n){},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},284:function(t,e,n){},285:function(t,e,n){},286:function(t,e,n){},287:function(t,e,n){"use strict";var i=n(235);n.n(i).a},289:function(t,e,n){},290:function(t,e,n){},335:function(t,e,n){"use strict";n.r(e);var i={name:"APlayer",data:function(){return{}},mounted:function(){}},a=(n(287),n(12)),s=Object(a.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"}}),this._v(" "),e("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"}}),this._v(" "),e("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"}}),this._v(" "),e("meting-js",{pre:!0,attrs:{id:"meting-js",fixed:"true",mini:"true",auto:"https://y.qq.com/n/yqq/playlist/2949360967.html"}})],1)}],!1,null,"475ad30c",null);e.default=s.exports},342:function(t,e,n){},343:function(t,e,n){"use strict";var i=n(267);n.n(i).a},344:function(t,e,n){"use strict";var i=n(268);n.n(i).a},385:function(t,e,n){"use strict";var i=n(278);n.n(i).a},386:function(t,e,n){"use strict";var i=n(279);n.n(i).a},387:function(t,e,n){"use strict";var i=n(280);n.n(i).a},388:function(t,e,n){"use strict";var i=n(281);n.n(i).a},391:function(t,e,n){"use strict";var i=n(282);n.n(i).a},392:function(t,e,n){"use strict";var i=n(283);n.n(i).a},393:function(t,e,n){"use strict";var i=n(284);n.n(i).a},394:function(t,e,n){"use strict";var i=n(285);n.n(i).a},397:function(t,e,n){"use strict";var i=n(286);n.n(i).a},399:function(t,e,n){"use strict";var i=n(289);n.n(i).a},400:function(t,e,n){"use strict";var i=n(290);n.n(i).a},474:function(t,e,n){"use strict";n.r(e);n(224),n(303),n(250),n(339),n(251),n(304),n(305),n(121),n(125),n(340),n(262),n(265),n(266);var i=/#.*$/,a=/\.(md|html)$/,s=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return r.test(t)}function c(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",a=o(t);return s.test(a)?t:a+".html"+n}function u(t,e){var n=t.hash,a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&o(t.path)===o(e)}function h(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));var i=o(e);return i in t?Object.assign({},t[i],{type:"page",path:c(t[i].path)}):(console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{})}function p(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var l=r.sidebar||s.sidebar,c=a.reduce(function(t,e){return t[o(e.regularPath)]=e,t},{});if(l){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,l),p=u.base,f=u.config;return f?f.map(function(t){return function t(e,n,i,a){if("string"==typeof e)return h(n,e,i);if(Array.isArray(e))return Object.assign(h(n,e[0],i),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map(function(e){return t(e,n,i,!0)}),collapsable:!1!==e.collapsable}}(t,c,p)}):[]}return[]}function d(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var v={props:{item:{required:!0}},computed:{link:function(){return c(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:l,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},m=n(12),g=Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,b=(n(342),{components:{NavLink:g},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}}),_=(n(343),Object(m.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[n("div",{staticClass:"model-left"}),t._v(" "),n("div",{staticClass:"model-right"}),t._v(" "),n("div",{staticStyle:{position:"relative","z-index":"2"}},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e(),t._v(" "),n("script",[t._v("\n    (function () {\n      var bp = document.createElement('script');\n      var curProtocol = window.location.protocol.split(':')[0];\n      if (curProtocol === 'https') {\n        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\n      } else {\n        bp.src = 'http://push.zhanzhang.baidu.com/push.js';\n      }\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(bp, s);\n    })();\n  ")])],1)},[],!1,null,null,null).exports),k=(n(344),Object(m.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),C=n(472),$=(n(348),n(336)),x={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},w=(n(385),Object(m.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),y={components:{NavLink:g,DropdownTransition:w},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},L=(n(386),{components:{NavLink:g,DropdownLink:Object(m.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===r})||(r=s)),{text:l,link:r}})};return[].concat(Object($.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(f(t),{items:(t.items||[]).map(f)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),S=(n(387),Object(m.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function T(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var E={components:{SidebarButton:k,NavLinks:S,SearchBox:C.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(T(this.$el,"paddingLeft"))+parseInt(T(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},O=(n(388),Object(m.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function j(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object($.a)(t.children||[])):i.push(t)});for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var N={props:["sidebarItems"],data:function(){return{title:""}},mounted:function(){this.renderValine()},watch:{$route:function(t,e){t.path!=e.path&&this.renderValine()}},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?h(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,j(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?h(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,j(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,r=t.docsBranch,l=void 0===r?"master":r,c=t.docsRepo,u=void 0===c?e:c,h=o(this.$page.path);return s.test(h)?h+="README.md":h+=".md",u&&n?this.createEditLink(e,u,a,l,h):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{renderValine:function(){var t=this;this.$nextTick(function(){var e=document.querySelector(".page"),n=document.getElementById("vcomments");t.title=document.title;var i=document.getElementsByClassName("leancloud_visitors")[0];i&&(i.id=t.$route.path),n||((n=document.createElement("div")).id="vcomments"),t.$page.frontmatter.hideFooter?n.remove():(e&&!n?e.appendChild(n):(e=document.querySelector(".page")).appendChild(n),t.valine())})},valine:function(){var t=n(389),e=n(390);"undefined"!=typeof window&&(window.AV=e),new t({el:"#vcomments",appId:"a5cCwBNybxC2QdogX4cJO4fA-MdYXbMMI",appKey:"1LBcFebP8cUVQx7O68AwbbVt",verify:!1,notify:!0,visitor:!0,avatar:"wavatar",placeholder:"春霄苦短，少女前进吧！\n夜は短し歩けよ乙女！\nYoru wa Mijikashi Arukeyo Otome!\nThe Night is Short, Walk on Girl!",path:window.location.pathname})},createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(r.test(e)?e:t).replace(s,"")+"/".concat(i)+(n?"/"+n.replace(s,""):"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.test(e)?e:"https://github.com/".concat(e)).replace(s,"")+"/edit/".concat(i)+(n?"/"+n.replace(s,""):"")+a}}},I=(n(391),Object(m.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"content default"}),t._v(" "),t.$page.frontmatter.hideFooter?t._e():n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))]),t._v(" "),n("span",{staticClass:"leancloud_visitors time",attrs:{id:t.$route.path,"data-flag-title":t.title}},[n("em",{staticClass:"post-meta-item-text"},[t._v(" · 阅读量 ")]),t._v(" "),n("i",{staticClass:"leancloud-visitors-count"},[t._v("0")])])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports);function A(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function B(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var r=u(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[A(t,n+"#"+e.slug,e.title,r),B(t,e.children,n,i,a,s+1)])}))}var P={functional:!0,props:["item"],render:function(t,e){var n=e.parent,a=n.$page,s=n.$site,r=n.$route,o=e.props.item,l=u(r,o.path),c="auto"===o.type?l||o.children.some(function(t){return u(r,o.basePath+"#"+t.slug)}):l,h=A(t,o.path,o.title||o.path,c),p=null!=a.frontmatter.sidebarDepth?a.frontmatter.sidebarDepth:s.themeConfig.sidebarDepth,f=null==p?1:p,v=!!s.themeConfig.displayAllHeaders;return"auto"===o.type?[h,B(t,o.children,o.basePath,r,f)]:(c||v)&&o.headers&&!i.test(o.path)?[h,B(t,d(o.headers),o.path,r,f)]:h}},M=(n(392),Object(m.a)(P,void 0,void 0,!1,null,null,null).exports),H={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:M,DropdownTransition:w}};n(393);var W={components:{SidebarGroup:Object(m.a)(H,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null).exports,SidebarLink:M,NavLinks:S},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return u(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return u(this.$route,t.regularPath)}}},U=(n(394),Object(m.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),D=(n(395),n(396)),G=n.n(D),z={props:{threshold:{type:Number,default:300}},data:function(){return{scrollTop:null,scrollEnd:null}},mounted:function(){var t=this;this.scrollTop=this.getScrollTop(),this.scrollEnd=this.getScrollEnd(),window.addEventListener("scroll",G()(function(){t.scrollTop=t.getScrollTop(),t.scrollEnd=t.getScrollEnd()},100))},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},getScrollEnd:function(){return document.documentElement.scrollHeight||document.body.scrollHeight||this.threshold},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"}),this.scrollTop=0},scrollToEnd:function(){window.scrollTo({top:this.scrollEnd,behavior:"smooth"}),this.scrollTop=this.scrollEnd}},computed:{topShow:function(){return this.scrollTop>this.threshold},endShow:function(){return this.scrollEnd-this.scrollTop>3*this.threshold}}},V=(n(397),{components:{Home:_,Page:I,Sidebar:U,Navbar:O,BackToTop:Object(m.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{attrs:{name:"fade"}},[t.topShow?n("svg",{key:"goTop",staticClass:"go-to-top",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:t.scrollToTop}},[n("g",{attrs:{transform:"translate(-229 -126.358)"}},[n("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),t._v(" "),n("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):t._e(),t._v(" "),t.endShow?n("svg",{key:"goEnd",staticClass:"go-to-top go-to-end",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:t.scrollToEnd}},[n("g",{attrs:{transform:"translate(-229 -126.358)"}},[n("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),t._v(" "),n("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):t._e()])},[],!1,null,"0a389ab2",null).exports,APlayer:n(335).default},data:function(){return{isSidebarOpen:!1,isPc:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return p(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;document.documentElement.clientWidth>760&&(this.isPc=!0),this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),q=(n(398),n(399),n(400),Object(m.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{staticClass:"slide-bar",attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),n("BackToTop"),t._v(" "),n("APlayer")],1)},[],!1,null,"a4ddd9be",null));e.default=q.exports}}]);