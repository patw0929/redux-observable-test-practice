(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,r){e.exports={loader:"Spinner_loader__2Kdjv",load4:"Spinner_load4__gHvlF"}},56:function(e,t,r){e.exports=r(72)},61:function(e,t,r){},69:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(53),c=r.n(o),i=(r(61),r(28)),s=r(29),u=r(43),l=r(30),d=r(44),p=r(21),h=r(79),m=r(10),y=r(82),b=r(31),w=r(15),f="patw/search-by-keyword/SEARCH_KEYWORD",O="patw/search-by-keyword/SEARCH_KEYWORD_SUCCESS",g="patw/search-by-keyword/SEARCH_KEYWORD_FAIL",j={isFetching:!1,error:null,keyword:"",keywords:{}};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var r=t.items,n=[];return n=t.keyword.replace(/\s/g,"").length&&r&&r.length>0?r:[],Object(w.a)({},e,{items:n});case g:return Object(w.a)({},e,{items:[]});default:return e}}var k,E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:f,keyword:e}},_=Object(m.c)({searchByKeyword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return t.keyword.replace(/\s/g,"").length?Object(w.a)({},e,{isFetching:!0}):Object(w.a)({},e,{isFetching:!1,error:null,keyword:""});case O:var r=t.keyword;return Object(w.a)({},e,{isFetching:!1,error:null,keyword:r,keywords:Object(w.a)({},e.keywords,Object(b.a)({},r,v(e.keywords[r],t)))});case g:return Object(w.a)({},e,{isFetching:!1,error:t.error.response.message});default:return e}}}),F=r(80),S=r(67),C=r(73),K=r(14),N=r(75),B=r(83),x=r(77),R=r(76),W=r(78),$=function(e,t){return e("https://api.github.com/search/repositories?q=".concat(t.keyword,"&sort=stars&order=desc")).pipe(Object(K.a)(function(e){return function(e){var t=e.keyword,r=e.items;return{type:O,keyword:t,items:r}}({keyword:t.keyword,items:e.items.map(function(e){return{id:e.id,full_name:e.full_name}})})}),Object(N.a)(function(e){return Object(C.a)(function(e){var t=e.keyword,r=e.error;return{type:g,keyword:t,error:r}}({keyword:t.keyword,error:e}))}))},H=Object(F.a)(function(e,t,r){var n=r.getJSON;return e.pipe(Object(S.a)(f),Object(B.a)(300),Object(x.a)(),Object(R.a)(function(e){return e.keyword.length}),Object(W.a)(function(e){return $(n,e)}))}),J=function(e){var t,r=Object(h.a)({dependencies:{getJSON:y.a.getJSON}}),n=Object(m.a)(r);return t=Object(m.d)(_,e,n),r.run(H),t},A=(r(69),r(81)),D=(k=function(e){e.onChange;var t=e.props$;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"search-input"},"Search GitHub repos:"),a.a.createElement("input",{type:"text",id:"search-input",className:"form-control",onChange:function(e){return t.next(e.target.value)},placeholder:"Search"}))},function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(u.a)(this,Object(l.a)(t).call(this,e))).props$=new A.a,r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.subscription=this.props$.pipe(Object(B.a)(500),Object(x.a)()).subscribe(function(t){return e.props.onChange(t)})}},{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"render",value:function(){return a.a.createElement(k,Object.assign({},this.props,{props$:this.props$}))}}]),t}(n.Component)),Y=Object(p.b)(null,function(e){return{onChange:Object(m.b)(E,e)}})(D),I=r(55),L=r.n(I),U=function(){return a.a.createElement("div",{className:L.a.loader},"Loading...")},q=function(e){var t=e.text;return a.a.createElement("div",{className:"alert alert-danger",role:"alert"},a.a.createElement("strong",null,"Oops!")," ",t)},G=function(e){var t=e.items,r=e.isFetching,o=e.error;return r?a.a.createElement(U,null):a.a.createElement(n.Fragment,null,!!o&&a.a.createElement(q,{text:o}),a.a.createElement("ul",{className:"list-group"},t.map(function(e){return a.a.createElement("li",{key:e.id,className:"list-group-item"},e.full_name)})))},M=Object(p.b)(function(e){var t=e.searchByKeyword.isFetching;return e.searchByKeyword.keyword?{isFetching:t,items:e.searchByKeyword.keywords[e.searchByKeyword.keyword].items,error:e.searchByKeyword.error}:{isFetching:t,items:[],error:null}})(G),z=J({}),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{store:z},a.a.createElement("div",{className:"container-fluid"},a.a.createElement(Y,null),a.a.createElement(M,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,2,1]]]);
//# sourceMappingURL=main.5b10c6b5.chunk.js.map