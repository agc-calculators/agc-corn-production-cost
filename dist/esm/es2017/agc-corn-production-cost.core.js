/*!
 * AgcCornProductionCost: Core, es2017
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==E?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=r.n+i.mode,u=r[o];if((2===r.t||1===r.t&&!t.r.e)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u||(u=r[o=r.n+E]),u){var f=e.i.head,c=t.o.get(f);if(c||t.o.set(f,c={}),!c[o]){var a=void 0;if((a=e.u("style")).innerHTML=u,c[o]=!0,a){var s=f.querySelectorAll("[data-styles]");e.f(f,a,s.length&&s[s.length-1].nextSibling||f.firstChild)}}}}function r(n,t,e,r,u,f,c){if("class"!==e||f)if("style"===e){for(var a in r)u&&null!=u[a]||(/-/.test(a)?t.style.removeProperty(a):t.style[a]="");for(var a in u)r&&u[a]===r[a]||(/-/.test(a)?t.style.setProperty(a,u[a]):t.style[a]=u[a])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!f&&(e in t||-1!==["object","function"].indexOf(typeof u)&&null!==u)){var s=n.c(t);s&&s.a&&s.a[e]?o(t,e,u):"ref"!==e&&(o(t,e,null==u?"":u),null!=u&&!1!==u||n.r.s(t,e))}else null!=u&&"key"!==e?function l(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(T,x(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(T,x(t),e):n.setAttribute(t,e))}(t,e,u):(f||n.r.l(t,e)&&(null==u||!1===u))&&n.r.s(t,e);else e=x(e)in t?x(e.substring(2)):x(e[2])+e.substring(3),u?u!==r&&n.r.v(t,e,u):n.r.p(t,e);else if(r!==u){var v=i(r),p=i(u),d=v.filter(function(n){return!p.includes(n)}),h=i(t.className).filter(function(n){return!d.includes(n)}),y=p.filter(function(n){return!v.includes(n)&&!h.includes(n)});h.push.apply(h,y),t.className=h.join(" ")}}function i(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function o(n,t,e){try{n[t]=e}catch(n){}}function u(n,t,e,i,o){var u=11===e.d.nodeType&&e.d.host?e.d.host:e.d,f=t&&t.vattrs||C,c=e.vattrs||C;for(o in f)c&&null!=c[o]||null==f[o]||r(n,u,o,f[o],void 0,i,e.y);for(o in c)o in f&&c[o]===("value"===o||"checked"===o?u[o]:f[o])||r(n,u,o,f[o],c[o],i,e.y)}function f(n,t){function e(i,o,f,c,a,v,b,m,w){if(m=o.vchildren[f],s||(p=!0,"slot"===m.vtag&&(l&&t.b(c,l+"-s"),m.vchildren?m.m=!0:m.w=!0)),S(m.vtext))m.d=t.g(m.vtext);else if(m.w)m.d=t.g("");else{if(v=m.d=W||"svg"===m.vtag?t.M("http://www.w3.org/2000/svg",m.vtag):t.u(m.m?"slot-fb":m.vtag),n.j(v)&&n.k.delete(y),W="svg"===m.vtag||"foreignObject"!==m.vtag&&W,u(n,null,m,W),S(l)&&v["s-si"]!==l&&t.b(v,v["s-si"]=l),m.vchildren)for(a=0;a<m.vchildren.length;++a)(b=e(i,m,a,v))&&t.A(v,b);"svg"===m.vtag&&(W=!1)}return m.d["s-hn"]=h,(m.m||m.w)&&(m.d["s-sr"]=!0,m.d["s-cr"]=d,m.d["s-sn"]=m.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===m.vtag&&i.d&&r(i.d)),m.d}function r(e,i,o,u){n.C=!0;var f=t.O(e);for(o=f.length-1;o>=0;o--)(u=f[o])["s-hn"]!==h&&u["s-ol"]&&(t.S(u),t.f(a(u),u,c(u)),t.S(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n.C=!1}function i(n,r,i,o,u,f,a,s){var l=n["s-cr"];for((a=l&&t.x(l)||n).shadowRoot&&t._(a)===h&&(a=a.shadowRoot);u<=f;++u)o[u]&&(s=S(o[u].vtext)?t.g(o[u].vtext):e(null,i,u,n))&&(o[u].d=s,t.f(a,s,c(r)))}function o(n,e,i,o){for(;e<=i;++e)S(n[e])&&(o=n[e].d,v=!0,o["s-ol"]?t.S(o["s-ol"]):r(o,!0),t.S(o))}function f(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function c(n){return n&&n["s-ol"]?n["s-ol"]:n}function a(n){return t.x(n["s-ol"]?n["s-ol"]:n)}var s,l,v,p,d,h,y,b=[];return function m(w,g,M,j,k,$,A,E,C,O,x,_){if(y=w,h=t._(y),d=y["s-cr"],s=j,l=y["s-sc"],p=v=!1,function s(l,v,p){var d=v.d=l.d,h=l.vchildren,y=v.vchildren;W=v.d&&S(t.P(v.d))&&void 0!==v.d.ownerSVGElement,W="svg"===v.vtag||"foreignObject"!==v.vtag&&W,S(v.vtext)?(p=d["s-cr"])?t.T(t.x(p),v.vtext):l.vtext!==v.vtext&&t.T(d,v.vtext):("slot"!==v.vtag&&u(n,l,v,W),S(h)&&S(y)?function b(n,u,l,v,p,d,h,y){for(var b=0,m=0,w=u.length-1,g=u[0],M=u[w],j=v.length-1,k=v[0],$=v[j];b<=w&&m<=j;)if(null==g)g=u[++b];else if(null==M)M=u[--w];else if(null==k)k=v[++m];else if(null==$)$=v[--j];else if(f(g,k))s(g,k),g=u[++b],k=v[++m];else if(f(M,$))s(M,$),M=u[--w],$=v[--j];else if(f(g,$))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.x(g.d)),s(g,$),t.f(n,g.d,t.W(M.d)),g=u[++b],$=v[--j];else if(f(M,k))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.x(M.d)),s(M,k),t.f(n,M.d,g.d),M=u[--w],k=v[++m];else{for(p=null,d=b;d<=w;++d)if(u[d]&&S(u[d].vkey)&&u[d].vkey===k.vkey){p=d;break}S(p)?((y=u[p]).vtag!==k.vtag?h=e(u&&u[m],l,p,n):(s(y,k),u[p]=void 0,h=y.d),k=v[++m]):(h=e(u&&u[m],l,m,n),k=v[++m]),h&&t.f(a(g.d),h,c(g.d))}b>w?i(n,null==v[j+1]?null:v[j+1].d,l,v,m,j):m>j&&o(u,b,w)}(d,h,v,y):S(y)?(S(l.vtext)&&t.T(d,""),i(d,null,v,y,0,y.length-1)):S(h)&&o(h,0,h.length-1)),W&&"svg"===v.vtag&&(W=!1)}(g,M),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.O(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.O(t.x(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.N(o))||8===l)&&""===s||1===l&&null===t.R(o,"slot")&&""===s||1===l&&t.R(o,"slot")===s)&&(b.some(function(n){return n.L===o})||(v=!0,o["s-sn"]=s,b.push({D:i,L:o})));1===t.N(i)&&n(i)}}(M.d),A=0;A<b.length;A++)(E=b[A]).L["s-ol"]||((C=t.g(""))["s-nr"]=E.L,t.f(t.x(E.L),E.L["s-ol"]=C,E.L));for(n.C=!0,A=0;A<b.length;A++){for(E=b[A],x=t.x(E.D),_=t.W(E.D),C=E.L["s-ol"];C=t.F(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.L["s-sn"]&&x===t.x(O)&&(O=t.W(O))&&O&&!O["s-nr"]){_=O;break}(!_&&x!==t.x(E.L)||t.W(E.L)!==_)&&E.L!==_&&(t.S(E.L),t.f(x,E.L,_))}n.C=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.O(e)).length;o<u;o++)if(r=i[o],1===t.N(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.N(i[f]),""!==c){if(1===a&&c===t.R(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.H(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.d),b.length=0,M}}function c(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.d),n.vchildren&&n.vchildren.forEach(function(n){c(n,t)}))}function a(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)N.push(arguments[f]);for(;N.length>0;){var c=N.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)N.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&N.push(f);t.class=N.join(" "),N.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],R):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,d:void 0,y:!1}}function s(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function l(n){return{q:n[0],I:n[1],U:!!n[2],B:!!n[3],G:!!n[4]}}function v(n,t){if(S(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function p(n,t,e){n.Q.add(t),n.Y.has(t)||(n.Y.set(t,!0),n.Z?n.queue.write(function(){return d(n,t,e)}):n.queue.tick(function(){return d(n,t,e)}))}function d(n,e,r,i,o,u){return j(this,void 0,void 0,function(){var i,f;return k(this,function(c){switch(c.z){case 0:return n.Y.delete(e),n.J.has(e)?[3,12]:(o=n.K.get(e))?[3,6]:(u=n.V.get(e))&&!u["s-rn"]?((u["s-rc"]=u["s-rc"]||[]).push(function(){d(n,e,r)}),[2]):(o=function s(n,t,e,r,i,o,u,f){try{i=new(o=n.c(t).X),function c(n,t,e,r,i,o){n.nn.set(r,e),n.tn.has(e)||n.tn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function c(n,t,e,r,i,o,u,f,a){if(t.type||t.state){var s=n.tn.get(e);t.state||(!t.attr||void 0!==s[i]&&""!==s[i]||(f=o&&o.en)&&S(a=f[t.attr])&&(s[i]=v(t.type,a)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=v(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=r[i]),t.watchCallbacks&&(s[L+i]=t.watchCallbacks.slice()),y(r,i,function l(t){return(t=n.tn.get(n.nn.get(this)))&&t[i]},function p(e,r){(r=n.nn.get(this))&&(t.state||t.mutable)&&h(n,r,i,e,u)})}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function a(n,t,e){if(t){var r=n.nn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.rn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.in(e,7,t,!0)}return n.K.set(t,i),i}(n,e,n.on.get(e),r),[3,5]);case 1:return c.un.push([1,4,,5]),o.componentWillLoad?[4,o.componentWillLoad()]:[3,3];case 2:c.fn(),c.z=3;case 3:return[3,5];case 4:return i=c.fn(),n.in(i,3,e),[3,5];case 5:case 6:return[3,11];case 7:return c.un.push([7,10,,11]),o.componentWillUpdate?[4,o.componentWillUpdate()]:[3,9];case 8:c.fn(),c.z=9;case 9:return[3,11];case 10:return f=c.fn(),n.in(f,5,e),[3,11];case 11:(function l(n,e,r,i,o){try{var u=e.X.host,f=e.X.encapsulation,c="shadow"===f&&n.r.e,s=r;if(!r["s-rn"]){n.cn(n,n.r,e,r);var l=r["s-sc"];l&&(n.r.b(r,t(l,!0)),"scoped"===f&&n.r.b(r,t(l)))}if(i.render||i.hostData||u){n.an=!0;var v=i.render&&i.render();n.an=!1;var p=n.sn.get(r)||{};p.d=s;var d=a(null,void 0,v);n.sn.set(r,n.render(r,p,d,c,f))}r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.an=!1,n.in(t,8,r,!0)}})(n,n.c(e),e,o),e["s-init"](),c.z=12;case 12:return[2]}})})}function h(n,t,e,r,i,o){var u=n.tn.get(t);u||n.tn.set(t,u={}),r!==u[e]&&(u[e]=r,n.K.get(t)&&!n.an&&t["s-rn"]&&p(n,t,i))}function y(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function b(n,t,e,r,i,o){if(n.Q.delete(t),(i=n.V.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.V.delete(t)),n.ln.length&&!n.Q.size)for(;o=n.ln.shift();)o()}function m(n,t,e,r,i){if(e.connectedCallback=function(){(function e(n,t,r,i){n.J.delete(r),n.vn.has(r)||(r["s-id"]||(r["s-id"]=n.pn()),n.dn=!0,n.Q.add(r),n.vn.set(r,!0),function o(n,t,e){for(e=t;e=n.r.P(e);)if(n.j(e)){n.k.has(t)||(n.V.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.on.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.hn(r)),r["s-cr"]||n.R(r,A)||n.e&&1===t.t||(r["s-cr"]=n.g(""),r["s-cr"]["s-cn"]=!0,n.f(r,r["s-cr"],n.O(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),i={yn:r["s-id"],en:{}},t.a&&Object.keys(t.a).forEach(function(e){(o=t.a[e].bn)&&(i.en[o]=n.R(r,o))}),i}(n.r,t,r)),n.mn(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e,r){if(!n.C&&function i(n,t){for(;t;){if(!n.x(t))return 9!==n.N(t);t=n.x(t)}}(n.r,e)){n.J.set(e,!0),b(n,e),c(n.sn.get(e),!0),n.r.p(e),n.wn.delete(e);var o=n.K.get(e);o&&o.componentDidUnload&&o.componentDidUnload(),[n.V,n.gn,n.on].forEach(function(n){return n.delete(e)})}})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,o,u,f){if((o=n.K.get(e))&&!n.J.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n.k.set(e,!0),(f=n.Mn.has(e))||(n.Mn.set(e,!0),e["s-ld"]=void 0,n.r.b(e,r));try{c(n.sn.get(e)),(u=n.gn.get(e))&&(u.forEach(function(n){return n(e)}),n.gn.delete(e)),!f&&o.componentDidLoad&&o.componentDidLoad()}catch(t){n.in(t,4,e)}b(n,e)}})(n,this,r)},e.forceUpdate=function(){p(n,this,i)},t.a){var o=Object.entries(t.a),u={};o.forEach(function(n){var t=n[0],e=n[1].bn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[x(e)];o&&(t[o]=i)})(u,this,n,e)},function f(n,t,e,r){t.forEach(function(t){var i=t[0],o=t[1],u=o.jn;3&u?y(e,i,function t(){return(n.tn.get(this)||{})[i]},function t(e){h(n,this,i,v(o.kn,e),r)}):32===u&&function f(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}(e,i,P)})}(n,o,e,i)}}function w(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.u(e),n.A(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function g(n,t,r,i,o,u,c){var s=r.performance,l={html:{}},v={},d=r[n]=r[n]||{},h=function y(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,$n:!1,N:function(n){return n.nodeType},u:function(n){return e.createElement(n)},M:function(n,t){return e.createElementNS(n,t)},g:function(n){return e.createTextNode(n)},An:function(n){return e.createComment(n)},f:function(n,t,e){return n.insertBefore(t,e)},S:function(n){return n.remove()},A:function(n,t){return n.appendChild(t)},b:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},O:function(n){return n.childNodes},x:function(n){return n.parentNode},W:function(n){return n.nextSibling},F:function(n){return n.previousSibling},_:function(n){return x(n.nodeName)},H:function(n){return n.textContent},T:function(n,t){return n.textContent=t},R:function(n,t){return n.getAttribute(t)},En:function(n,t,e){return n.setAttribute(t,e)},Cn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},s:function(n,t){return n.removeAttribute(t)},l:function(n,t){return n.hasAttribute(t)},hn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},On:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.P(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},v:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.On(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.On(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===O[s[1]]&&o(n)}),a=i.$n?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},p:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Sn:function(n,e,r){var i=new t.CustomEvent(e,r);return n&&n.dispatchEvent(i),i},P:function(n,t){return(t=i.x(n))&&11===i.N(t)?t.host:t}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.$n=!0}}))}catch(n){}return i}(d,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.emit=function(n,e,r){return h.Sn(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=a,d.Context=t;var b=r["s-defined"]=r["s-defined"]||{},g=0,M={r:h,xn:function j(n,t){var e=n.n;r.customElements.get(e)||(m(M,l[e]=n,t.prototype,u,s),t.observedAttributes=Object.values(n.a).map(function(n){return n.bn}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},rn:t.emit,c:function(n){return l[h._(n)]},_n:function(n){return t[n]},isClient:!0,j:function(n){return!(!b[h._(n)]&&!M.c(n))},pn:function(){return n+g++},in:function(n,t,e){},Pn:function(n){return function t(n,e,r){return{create:w(n,e,r,"create"),componentOnReady:w(n,e,r,"componentOnReady")}}(h,v,n)},queue:t.queue=function k(n,t){function e(t){return function(e){t.push(e),d||(d=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){p++,r(s);var t=f?u()+7*Math.ceil(p*(1/22)):Infinity;i(l,t),i(v,t),l.length>0&&(v.push.apply(v,l),l.length=0),(d=s.length+l.length+v.length>0)?n.raf(o):p=0}var u=function(){return t.performance.now()},f=!1!==n.asyncQueue,c=Promise.resolve(),a=[],s=[],l=[],v=[],p=0,d=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){a.push(n),1===a.length&&c.then(function(){return r(a)})},read:e(s),write:e(l)}}(d,r),mn:function $(n,t,e){if(n.X)p(M,t,s);else{var r={mode:t.mode,scoped:!1};n.Tn(r).then(function(e){try{n.X=e,function r(n,t,e,i,o,u){if(i){var f=t.n+(o||E);t[f]||(t[f]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.X=function i(){}}p(M,t,s)})}},an:!1,Z:!1,C:!1,cn:e,V:new WeakMap,o:new WeakMap,vn:new WeakMap,wn:new WeakMap,Mn:new WeakMap,k:new WeakMap,nn:new WeakMap,on:new WeakMap,K:new WeakMap,J:new WeakMap,Y:new WeakMap,gn:new WeakMap,Wn:new WeakMap,sn:new WeakMap,tn:new WeakMap,Q:new Set,ln:[]};d.onReady=function(){return new Promise(function(n){return M.queue.write(function(){return M.Q.size?M.ln.push(n):n()})})},M.render=f(M,h);var A=h.i.documentElement;return A["s-ld"]=[],A["s-rn"]=!0,A["s-init"]=function(){M.k.set(A,d.loaded=M.Z=!0),h.Sn(r,"appload",{detail:{namespace:n}})},function C(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.c(t);if(r)if(n.k.has(t))e(t);else{var i=n.gn.get(t)||[];i.push(e),n.gn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(M,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,M}function M(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=r.map(function(n){return n[0]});if(u.length>0){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=e.namespace||"AgcCornProductionCost";return F||(F=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){if(!D[c]){var r={},u=e.resourcesUrl||"./";$(c,r,n,i,u,o),D[c]=g(c,r,n,i,u,o)}t.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[c].xn(function i(n){var t=function e(n){var t=n[0],e=n[1],r=n[3],i=n[4],o=n[5],u={color:{bn:"color"}};if(r)for(var f=0;f<r.length;f++){var c=r[f];u[c[0]]={jn:c[1],Nn:!!c[2],bn:"string"==typeof c[3]?c[3]:c[3]?c[0]:0,kn:c[4]}}return{n:t,Tn:e,a:Object.assign({},u),t:i,Rn:o?o.map(l):void 0}}(n),r=t.Tn,i=_(n[0]);return t.Tn=function(n){var t=n.mode,e=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof r?r:r[t],e,i)},t}(t),e)})})}this&&this.Ln||(Object.setPrototypeOf||Array);var j=this&&this.Dn||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.Fn(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.Hn?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).Fn())})},k=this&&this.qn||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.Fn)&&!(o=o.call(i,e[1])).Hn)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.z++,{value:e[1],Hn:!1};case 5:f.z++,i=e[1],e=[0];continue;case 7:e=f.In.pop(),f.un.pop();continue;default:if(!(o=(o=f.un).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.z=e[1];break}if(6===e[0]&&f.z<o[1]){f.z=o[1],o=e;break}if(o&&f.z<o[2]){f.z=o[2],f.In.push(e);break}o[2]&&f.In.pop(),f.un.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,Hn:!0}}([e,u])}}var r,i,o,u,f={z:0,fn:function(){if(1&o[0])throw o[1];return o[1]},un:[],In:[]};return u={Fn:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},$=function(){};function applyPolyfills(n){n.Un=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.Bn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Gn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.Bn===P?s(n,t.Gn):t.Bn===T?l(n,t.Gn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Qn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Yn&&n.Yn(n.Gn),p(n)}function s(n,t){n.Bn===_&&(n.Gn=t,n.Bn=P,0!==n.Zn.length&&M(p,n))}function l(n,t){n.Bn===_&&(n.Bn=T,n.Gn=t,M(a,n))}function v(n,t,e,r){var i=n.Zn,o=i.length;n.Yn=null,i[o]=t,i[o+P]=e,i[o+T]=r,0===o&&n.Bn&&M(p,n)}function p(n){var t=n.Zn,e=n.Bn;if(0!==t.length){for(var r,i,o=n.Gn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Zn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.Bn===_&&(i&&f?c(t,o):a?l(t,u):n===P?s(t,o):n===T&&l(t,o))}function h(n){n[x]=N++,n.Bn=void 0,n.Gn=void 0,n.Zn=[]}var y,b=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,w=void 0,g=void 0,M=function(n,t){O[m]=n,O[m+1]=t,2===(m+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.zn||j.Jn;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.Kn.onmessage=e,function(){return n.Vn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().Xn("vertx");return void 0!==(w=n.nt||n.tt)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),_=void 0,P=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.et=n,this.rt=new n(o),this.rt[x]||h(this.rt),b(t)?(this.it=this.length=t.length,this.Gn=Array(this.length),0===this.length?s(this.rt,this.Gn):(this.length=this.length||0,this.ot(t),0===this.it&&s(this.rt,this.Gn))):l(this.rt,Error("Array Methods must be provided an Array"))}return n.prototype.ot=function(n){for(var t=0;this.Bn===_&&t<n.length;t++)this.ut(n[t],t)},n.prototype.ut=function(n,t){var e=this.et,c=e.resolve;c===i?(c=u(n))===r&&n.Bn!==_?this.ft(n.Bn,t,n.Gn):"function"!=typeof c?(this.it--,this.Gn[t]=n):e===L?(f(e=new e(o),n,c),this.ct(e,t)):this.ct(new e(function(t){return t(n)}),t):this.ct(c(n),t)},n.prototype.ft=function(n,t,e){var r=this.rt;r.Bn===_&&(this.it--,n===T?l(r,e):this.Gn[t]=e),0===this.it&&s(r,this.Gn)},n.prototype.ct=function(n,t){var e=this;v(n,void 0,function(n){return e.ft(P,t,n)},function(n){return e.ft(T,t,n)})},n}(),L=function(){function n(t){if(this[x]=N++,this.Gn=this.Bn=void 0,this.Zn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).rt},L.race=function(n){var t=this;return b(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.at=function(n){g=n},L.st=function(n){M=n},L.lt=M,L.vt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.pt)return}n.Promise=L},L.Promise=L,L.vt(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.dt}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){t.applyPolyfill(n,n.document)})})}var A="ssrv",E="$",C={},O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=function(n){return null!=n},x=function(n){return n.toLowerCase()},_=function(n){return x(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},P=function(){},T="http://www.w3.org/1999/xlink",W=!1,N=[],R={forEach:function(n,t){n.forEach(function(n,e,r){return t(s(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(s(n),e,r))})}},L="wc-",D={},F=!1;export{M as defineCustomElement,a as h};