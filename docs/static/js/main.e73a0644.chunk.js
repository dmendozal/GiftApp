(this.webpackJsonpreactapptutorial=this.webpackJsonpreactapptutorial||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o("")),console.log("submit hecho")},children:[Object(u.jsxs)("p",{children:[" ",r," "]}),Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})]})},j=n(10),l=n(6),d=n.n(l),b=n(8),p=function(){var t=Object(b.a)(d.a.mark((function t(e){var n,a,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=m1oNIvdcFPJgzklGr0dQDt0hrgZmgsG7"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,r=c.data,t.abrupt("return",r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})));case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__fadeInUp",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("p",{className:"title",children:[" ",e," "]})]})},f=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(h,Object(j.a)({},t),t.id)}))})]})},m=function(t){var e=t.defaultCategories,n=void 0===e?[]:e,c=Object(a.useState)(n),r=Object(i.a)(c,2),s=r[0],j=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:j}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{children:" Agregar "}),Object(u.jsx)("ol",{children:s.map((function(t){return Object(u.jsx)(f,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e73a0644.chunk.js.map