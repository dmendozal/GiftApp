(this.webpackJsonpreactapptutorial=this.webpackJsonpreactapptutorial||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),o=n(0),u=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),u("")),console.log("submit hecho")},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){u(t.target.value)}})})},j=n(10),l=n(6),d=n.n(l),b=n(8),p=function(){var t=Object(b.a)(d.a.mark((function t(e){var n,a,c,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=m1oNIvdcFPJgzklGr0dQDt0hrgZmgsG7"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__fadeInUp",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsxs)("p",{children:[" ",e," "]})]})},f=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(h,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(a.useState)(["Game of thrones"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{children:" Agregar "}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(f,{category:t},t)}))})]})};n(17);r.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b2f943a1.chunk.js.map