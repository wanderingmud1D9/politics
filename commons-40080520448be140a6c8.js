(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!a(e[s],o[s]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!a(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},7198:function(e,t,r){"use strict";var n=r(7294),i=r(5444),a=r(6125);t.Z=function(e){var t=e.location,o=e.title,c=e.children,s="/politics/"===t.pathname,l=n.createElement("h1",{className:"main-heading"},n.createElement(i.Link,{to:"/"},o));return n.createElement(n.Fragment,null,n.createElement("header",{className:"global-header"},l),n.createElement("div",{className:"global-wrapper","data-is-root-path":s},n.createElement("main",null,c)),n.createElement("footer",{className:"footer"},n.createElement("a",{href:"https://keyoxide.org/"},n.createElement(a.S,{src:"../images/keyoxide.png",className:"footer__keyoxide",layout:"fixed",width:32,height:32,alt:"Keyoxide profile picture",placeholder:"blurred",__imageData:r(1468)})),n.createElement("a",{href:"https://github.com/+wanderingmud1D9"},n.createElement(a.S,{src:"../images/github.png",className:"footer__github",layout:"fixed",width:32,height:32,alt:"Github profile picture",placeholder:"blurred",__imageData:r(375)})),n.createElement("a",{href:"https://tkifv7cinnoyn4edcmwsmvtg2hebhfhtenlvjczchuypsrlwdl5r6lid.onion"},n.createElement(a.S,{src:"../images/btcpay_server.png",className:"footer__btcpay_server",layout:"fixed",width:32,height:32,alt:"BTCPay server icon",placeholder:"blurred",__imageData:r(334)})),n.createElement("a",{href:"https://localmonero.co/blocks"},n.createElement(a.S,{src:"../images/monero.png",className:"footer__monero",layout:"fixed",width:32,height:32,alt:"Monero icon",placeholder:"blurred",__imageData:r(4333)})),n.createElement("a",{href:"https://paynym.is/+wanderingmud1D9"},n.createElement(a.S,{src:"../images/paynym.png",className:"footer__paynym",layout:"fixed",width:32,height:32,alt:"Paynym icon",placeholder:"blurred",__imageData:r(4952)}))))}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,i,a,o,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),f=r.n(u),p=r(2993),d=r.n(p),A=r(6494),h=r.n(A),y="bodyAttributes",m="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),v="cssText",T="href",E="http-equiv",C="innerHTML",O="itemprop",S="name",x="property",I="rel",P="src",k="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",N="defer",R="encodeSpecialCharacters",U="onChangeClientState",Y="titleTemplate",W=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),L=[g.NOSCRIPT,g.SCRIPT,g.STYLE],z="data-react-helmet",M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=_(e,g.TITLE),r=_(e,Y);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,j);return t||n||void 0},V=function(e){return _(e,U)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},F=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+M(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],s=c.toLowerCase();-1===t.indexOf(s)||r===I&&"canonical"===e[r].toLowerCase()||s===I&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==C&&c!==v&&c!==O||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],s=h()({},n[c],i[c]);n[c]=s}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(g.BODY,n),se(g.HTML,i),ce(f,p);var d={baseTag:le(g.BASE,r),linkTags:le(g.LINK,a),metaTags:le(g.META,o),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,u)},A={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(A[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,A,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(g.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===i.indexOf(s)&&i.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);i.length===a.length?r.removeAttribute(z):r.getAttribute(z)!==o.join(",")&&r.setAttribute(z,o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===v)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(z,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,i=fe(r,n),[c.createElement(g.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ue(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+H(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case m:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=B[e]||e;if(r===C||r===v){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===C||e===v)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+H(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===L.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(m,i,n),link:pe(g.LINK,a,n),meta:pe(g.META,o,n),noscript:pe(g.NOSCRIPT,c,n),script:pe(g.SCRIPT,s,n),style:pe(g.STYLE,l,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},Ae=f()((function(e){return{baseTag:F([T,k],e),bodyAttributes:K(y,e),defer:_(e,N),encode:_(e,R),htmlAttributes:K(m,e),linkTags:J(g.LINK,[I,T],e),metaTags:J(g.META,[S,w,E,x,O],e),noscriptTags:J(g.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:J(g.SCRIPT,[P,C],e),styleTags:J(g.STYLE,[v],e),title:Z(e),titleAttributes:K(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),de)((function(){return null})),he=(i=Ae,o=a=function(e){function t(){return q(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return G({},n,((t={})[r.type]=[].concat(n[r.type]||[],[G({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case g.TITLE:return G({},i,((t={})[n.type]=o,t.titleAttributes=G({},a),t));case g.BODY:return G({},i,{bodyAttributes:G({},a)});case g.HTML:return G({},i,{htmlAttributes:G({},a)})}return G({},i,((r={})[n.type]=G({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=G({},t);return Object.keys(e).forEach((function(t){var n;r=G({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)}(D(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=D(e,["children"]),n=G({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(i,n)},Q(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ye=r(5444),me=function(e){var t,r,n,i=e.description,a=e.lang,o=e.meta,s=e.title,l=(0,ye.useStaticQuery)("2841359383").site,u=i||l.siteMetadata.description,f=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:a},title:s,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o)})};me.defaultProps={lang:"en",meta:[],description:""};var be=me},375:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVQ4y4VVv4tTQRDei6B/g1067c9a0MLqKsXyOBEEW/8I7yrLAxsbDzkO7K9J/gHNeaRInSOIYBVQ3tu3u/PtHPOYjZNn8rIwZLM78+188+u5lJKr63pIRBcAqpwzM3POdmNWOSs/YiO23vuhYLVgAH7xv9Uqqj0xc2RmUolyZrGLkWAIlhN0RWmKYs4ZCsD6fyW6BBTm4aY9JLpw4rKhweoVK51rInoP4LWI7q8LsNHN6mXlbFiMwp8Y4+FoNNpjZnm0FdnLmdyJTgG1GM6AwYDti7FIjHEFKHtzvm9AUUCdyV77UozxKOcssf0I4DLG+BzAOxHdX8qd6MQYXylQSVR2NhYSn+l0OlCaX7clRe/cbDYbiI3FcOqdlINk6USo1XV9H8CNZjR1RABvvPeiI0xO9KHYemjpAnhDRELloCRuQ2FDQ3MgumJjaW8EDCE8UaVUklWCr2ccQnjcB1goH5fyAPB9rXXWu+JquVzeU8rHa5Q7SbmaTCZ3mqZ55r1/COAUwMIU+k8An0MIw6qq3Hg83gPw47+kdGLzwnv/NKV0Pp/P7xLRp1W/EX3QOhxo2RxuKptuYf8NITxIKb0lom8559+G+rkp8kfbCntb671UBl9MPZ5plxxtbb0dw0E8XBgPF5Ks3uHQM75suawG4M7xtWvAduuwb8DK1Ha7PgGbVt8n4BbOOtS15z53AwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/politics/static/a7484a57d3d3eae4c6ee97c5f91caa8f/914ee/github.png","srcSet":"/politics/static/a7484a57d3d3eae4c6ee97c5f91caa8f/914ee/github.png 32w,\\n/politics/static/a7484a57d3d3eae4c6ee97c5f91caa8f/1c9ce/github.png 64w","sizes":"32px"},"sources":[{"srcSet":"/politics/static/a7484a57d3d3eae4c6ee97c5f91caa8f/ef6ff/github.webp 32w,\\n/politics/static/a7484a57d3d3eae4c6ee97c5f91caa8f/8257c/github.webp 64w","type":"image/webp","sizes":"32px"}]},"width":32,"height":32}')},1468:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE4UlEQVQ4y13U7U9TVxgA8FPN/Owf4F+wL/voUNTAYBiZRME3mKIDUSOOFZDevvfe2/a23FbdlM0sm8ZojFmMfmBLxuK2OCjlzZZSqIW+rPaFIq2FtiJI7+15ltMWxvYkT+5Lcn85zz3PeVAL40NttB+dp/0SWvEGXdaFkFQT2dWtjikodfy5XLGQUMgW8+qehMjKU/NG+dKAiUq3W2TZnbwsg0xUWmKVZZGlkBmEzrFzqIXxbTtP+1EL4yegrEMbTndqotCljIFOvwDXryfByr8BVpUEvSIFHLUMZiod42WZZp7KoO8615BVlpUQlICSc8wcaqX9H7TRgf5LuiC060IgpcO5Lm1UpOh5fO9BCvf3Z3C39HVeQyUFgzIlcPIlgoJFlrllkqfRj9IcQRHaYx1GrYwPnWVn+1sYH7TRgdwlOphvlQfhvCyEO5QR7Au+x78OZPGQbQXf+jqFKWkCWHlK5ORLQm8RvUHKN1PpbahJ7yEpO633wll2NtfC+HCr1g83Hyzgu48TuIuNgI6fh0dPloDEzMwafvokg+/cToOm+w3mFMsiQXlZpp6g6JjRveuEYTrdqPdAs8GbP6X2wqOBBIZSjLveQtOVINz8YRHW14uvE0kBHj1MY0V3AgzKlGikCuW/vNaT3YGOci5Fg3EKThimc00GD5yiX+LZ8LsND9JZAZ7+tgTruXzhOZcrouPjq9DT9RozqmSxfGoZTFS6AdVxzudHOBccM7rFk8ZpfIKZwZ7QSuGjfB4XciME8d/7u/dT0N0Tx1pVAusUSUEvT4FRvnQHHTK9SBw2OeEo58LHjG7cwLphZgtIAmMMYun+3Woevr+fgA4qCnJ1HJSq11ijXMzTisJKvajGPJE/ZHoBdSYnJugR/RTMvHq7CRJsAw7F1kBzPQoXZCHo0kbhqjoGlCqOSyjQiqSIqnrHxBrzBNSaHJigh/WTML0F3MDcvhU4o/RBizIAX7GvoEMbhk5NhKC4hIJGubiOKvmR+areMThonsjXmh34kMEB7v+tkET2nQiPnyVJnxbQK/Qmiq+qYyKlioNCteBEB3j7QAU/AtW9Y8JB8wSuMb7A7lfZ/4Dilo3xR1ZB922khIZwhzaMOzURgZQvU8f70D6LrX2/ZRgq+RGhuncMqrhx7CqBWyGCb+wyufJ3YwTFJVQkZ79bHatGZdbBneUWW+yAxQ6V/KhYwY3CdDRb+DKPMaysiTAZzG7Cq++L/TjozODP5XNwmflbIGf/S23YfpqdI2d5iGRzucUGFVa7UGYYxveGooVuITkytww1tAP6fo7A21Vx8/3tp3FoUs3mL7IBIAPlsi60t10XQqRkyR7LECqzDt0qt9pgHz8sfsKPiuZfAnD79zA+fmMS1xod+FOtA1/q8+KHfy5gy09h3Ei/FM6ys1AaKNILdABdoIPb0cfWQfTRN3+gct5G0BsE3c8Pw269TSxj7EI1N17Y/SPmSfyZflI8qJkU6rRTYqPBA6WBIiVDupXxS8hsJf+QpOTDm89QWXGl9eVWm7fCaocqyyjZfSB9Wmp+qDe74DjnhpOGaXuj3rO3mZ1F55g5CUHJkCZAASUrLbfYtpF/uvvaXzv2WWwNB3j7nUp+xFtdbP71WpPDWcc5+45yruqLtB816j3oDOvd3kYH0BdMYfKjfwD0m1+0gcIiqgAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/politics/static/8e49e9e53230cb078af72110ceb84d7d/914ee/keyoxide.png","srcSet":"/politics/static/8e49e9e53230cb078af72110ceb84d7d/914ee/keyoxide.png 32w,\\n/politics/static/8e49e9e53230cb078af72110ceb84d7d/1c9ce/keyoxide.png 64w","sizes":"32px"},"sources":[{"srcSet":"/politics/static/8e49e9e53230cb078af72110ceb84d7d/ef6ff/keyoxide.webp 32w,\\n/politics/static/8e49e9e53230cb078af72110ceb84d7d/8257c/keyoxide.webp 64w","type":"image/webp","sizes":"32px"}]},"width":32,"height":32}')},4952:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVQ4y32U2U8aQRzH+Tv63gdjYGF3Z3e5Dzl2WUAutQGtJ0UKtg/aWhKv1MbGC0VEUKiIRNjlEIm2xLc2sUkfWns8tWmf+3c0OK2ipU3mYSY7n9/3+535zQpIzExiZgJl4ORfo+UGAZDQKplDo3ABCU3hLIEyKplDCizwM5DQcCIjrJcMhbO/Ybi4XN9Q0ChcBMooqE6l1E6gDKyuVbrlpI1AGQEEFFQnrK2gOpsVNAoXiZnlpA1iMsIKsSvl5mAG7R2t0t3YirESoVHYppWIjAA1kxgDNS893oQbA28Iitv1AOlwW70D3nsuq4dEDCTGkhijlNqhhdYwBVhUaOhxDub284ViuXRY4/hyeCKskVoItGGNQBk5abvK3BwSRUx2k7t+WD45qmVSu7lMtlSq5vJcl92DiYzQ8+UBC5oDU7gFE+oWFmPRt98XX397dPYzdHS+lysUy1W/L4QjxmbP12C13ImKaYvO+SyR9b36Ovfmx73q+Vj6BMJj9x8AcSO5VuluAWuVLonQ0O0YPK3X56dn5p5MJTeT+b19jq/kubLfFyDERhJn5aStBUygDIaYbIyH54rRlWhi/Xl+a2Y/x5UqtWQq7enqBf+xfXG3Zgqjd5Iprny6FDa9e3ork8rGkztBv19N0AT6V29fP20zhhi77P3bifTywnxsfnJldc2upxW4AUhaPYxm2/AChW06r2vg8OglV60HfX7RbblYRHeoe3Tq7hudfw2WAouctImFJrfVyxcr2VxhqK/PKDWYVJ1KQGMiA9nUm1cwLCkFLCoyqAj64XCgVKnm+UpoNBCPxgqFYiwSG+kdJhANgbFk85OEhqXAirR3OGg3XyhuJ5LxaDS+vhEeHz/IF7lStVI9Xl6NjPQPyhE1LmYuWv2PMoVbtDKrk7aX+NKHz192traXZpfnJueiixu7LzIFvpxO741PPB4LhvxDw1ajHYhNJM7Cn4EFE+pnJqfXViPvzz8dVY83VyK1wt2PZ3o+69uKxnPZg41YIhQaC40GwlOzwWBQDXQAZX8BEleL5O8W1r8AAAAASUVORK5CYII="},"images":{"fallback":{"src":"/politics/static/0d9111538f68d77d6833db13877ec3e6/914ee/paynym.png","srcSet":"/politics/static/0d9111538f68d77d6833db13877ec3e6/914ee/paynym.png 32w,\\n/politics/static/0d9111538f68d77d6833db13877ec3e6/1c9ce/paynym.png 64w","sizes":"32px"},"sources":[{"srcSet":"/politics/static/0d9111538f68d77d6833db13877ec3e6/ef6ff/paynym.webp 32w,\\n/politics/static/0d9111538f68d77d6833db13877ec3e6/8257c/paynym.webp 64w","type":"image/webp","sizes":"32px"}]},"width":32,"height":32}')},4333:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVQ4y3WTy28bVRTGzzR2G6VZIfGvIGUTRfYER5nrV6SI2pSaBnlsp+oCSCHQB0IKIFQeSboDCbHJIhIxpoh34wfPBEw3SJVY9EFQll2BWpqZOR86Z2ZiF4mRjubce77vN+eemSE0koTFY8RnxwmnyELtCOG5R8dQT1RQO9KEa+3BJR8ueXBJ8i12qQKXxtglYpcsuESoEnGViLB4lHhx1MLlScICERrJErvWLbgEVP8nXA3RlGIYIjDh7HHC648RniBCPbEag7iqHUmwBEd32WPZH4BXuT4SNqPACll4JoKpyPL1iNUIVD0EDfKqPsBXbQheg2tJpxaxzKyRLGnhzKiPBTFZiI1RF4M4fIAF1Z4ZjbstQ2f47CNjaCRvokzAR+d8fPg0UCJGPYHDOQ5g4b2eAIvmg1PgrRd99dYTt+HScUJ9pKLmE+Txp68yAMbq48DJ0PjQy4lgWnvHhmo/W2HxRtrThJrV1EWJPG6+pED2HoCvOGrkIShHMF6bAR/8o0BuXWDxRsAW6XcWAhmtC8yhDEEQPAQdhgW+p82p9uorPDSifdI3Gs2EW+dVEzy4B70Hfgh9ijQGsIGGr14aBgak31ojCZSJg+bLCvzhux667W01+H4AftcGv52CH8F63Ta+73VCcOsii1cZCqzSHmoj4BPE/tayAre//grT09PY/enHEHr/b3j3/tL8l90drX3z5edh7ePzYYe1EZnzvvx6TW4cBZfJ88MO+dtuG+l0GsYY7ERQuX7e3UE2m0UqlUJ3+5qe2G9dZPEKA41ki/jGtQr+6AO3djz/7p4Ce90uMpkMZmdnNfr9Pq5f/xWO4+haap12OwTe/ZPFizt98G9fyBeJsQPgppACwNcZ9Xosx8rlcpiZmUGhUECxWNQ8n8/Dtm10Op3wBQK+JAfA7wCO0Wvr79PqW2+WXzi3hKWl573l5WWu1WrSCRtjWI4Ydya57EnNdV2IVjzivfzGSmll7T2ijY0Na3Nzk6amptakq3Q67WUyGV+MjuNoSP7ftWhs2/bEMzk5ud5sNqnValmUSqUovorF4nrUhXTlGWO8GBRDZU9qopPI5XJXYv/ExARRPp+nQqFg1et1ymQylMvlnjTG3I6gGsN5vDbG3DHGnDTGUBSW4zgkAIXOzc2RbdtWNpul+fn58Ww2e9oY84kxZt8YE0SxH+0tGGPGBeQ4jiWwGPwvk8+oTe3S+AYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/politics/static/a5097685214fc3ca12c830b492c1104a/914ee/monero.png","srcSet":"/politics/static/a5097685214fc3ca12c830b492c1104a/914ee/monero.png 32w,\\n/politics/static/a5097685214fc3ca12c830b492c1104a/1c9ce/monero.png 64w","sizes":"32px"},"sources":[{"srcSet":"/politics/static/a5097685214fc3ca12c830b492c1104a/ef6ff/monero.webp 32w,\\n/politics/static/a5097685214fc3ca12c830b492c1104a/8257c/monero.webp 64w","type":"image/webp","sizes":"32px"}]},"width":32,"height":32}')},334:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4klEQVQ4y2P4jwX8+/f/z/////4TAgx4Zf/iNwJNM0jpn78fXn9c/P3nbSQj/hLWDHbt/3efN5+6yXfhrsbDV5Xff95AMvcvXs3/QJrfflp75pbkxXv6p27yn70tdf9l3pfv54mwGaz53acNJ2/yvPow79O3ozce+526yXv2tszdZ8mfv52Eew2P5o1gzUshHv707ciVB1Ynb3BduKvx5+8XZP04Nb/+uAQceF+eve0/e1v2/F31Nx+XEbb57acN5+/wzz6UfvHJqWevA49dY7720P3bjytoOrFrfv1x3fWHYgnzTeQrHabtUXz9vvH/v++wOPtPlObkBcbcRU4WsywWXZv18y9I299/REXVhvN3BGYdSNx+41jl0WTLZcqlB9MefboPdvQ/glG18eQN7lcfQAH29denBVem+q63jNrqceDRTjT92DWfuMHz+iMkqv5fe3spbVeY/UqtkM1O335/RdaPLXl+2nDhNterDwvPv7pWdyTXdY2h1zqzmiN5Z14cI+znN5/WLTmrXLDX23m1scdao5YTZRdencYMLXTNf8GaTz7bYbtCy2+DY++Z+pvvrsIc9e8fRvZEczZI+v2P9+tvL7nz4TrMOf/+/ftLcmGARxsezf/+/Pvz7x/hYggA0GZEs4YqUjIAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/politics/static/2a274d288ea23c0ff61c5a3a12cf5c78/914ee/btcpay_server.png","srcSet":"/politics/static/2a274d288ea23c0ff61c5a3a12cf5c78/914ee/btcpay_server.png 32w,\\n/politics/static/2a274d288ea23c0ff61c5a3a12cf5c78/1c9ce/btcpay_server.png 64w","sizes":"32px"},"sources":[{"srcSet":"/politics/static/2a274d288ea23c0ff61c5a3a12cf5c78/ef6ff/btcpay_server.webp 32w,\\n/politics/static/2a274d288ea23c0ff61c5a3a12cf5c78/8257c/btcpay_server.webp 64w","type":"image/webp","sizes":"32px"}]},"width":32,"height":32}')}}]);
//# sourceMappingURL=commons-40080520448be140a6c8.js.map