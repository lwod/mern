(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(20),s=c.n(a),i=(c(26),c(27),c(2)),l=c(4),j=c.n(l),o=c(9),u=c(5),d=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),s=Object(u.a)(a,2),i=s[0],l=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(o.a)(j.a.mark((function e(t){var c,n,a,s,i,o=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:c,body:n,headers:a});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=14;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return r(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,ClearError:Object(n.useCallback)((function(){return l(null)}),[])}};function b(){}var O=Object(n.createContext)({token:null,userId:null,login:b,logout:b,isAuthenticated:!1}),h=c(0),x=function(){return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(h.jsx)("div",{className:"preloader-wrapper active",children:Object(h.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(h.jsx)("div",{className:"circle-clipper left",children:Object(h.jsx)("div",{className:"circle"})}),Object(h.jsx)("div",{className:"gap-patch",children:Object(h.jsx)("div",{className:"circle"})}),Object(h.jsx)("div",{className:"circle-clipper right",children:Object(h.jsx)("div",{className:"circle"})})]})})})},p=c(10),f=function(e){var t=e.links;return t.lean?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"\u2116"}),Object(h.jsx)("th",{children:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f"}),Object(h.jsx)("th",{children:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f"}),Object(h.jsx)("th",{children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,c){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c+1}),Object(h.jsx)("td",{children:e.from}),Object(h.jsx)("td",{children:e.to}),Object(h.jsx)("td",{children:Object(h.jsx)(p.b,{to:"/detail/".concat(t._id),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})})]},e._id)})}))})]})}):Object(h.jsx)("p",{className:"center",children:"\u0421\u0441\u044b\u043b\u043e\u043a \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0435\u0442"})},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=(t[1],d()),a=r.loading,s=r.request,i=Object(n.useContext)(O).token,l=Object(n.useCallback)(Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/link","GET",null,{Authorization:"Bearer ".concat(i)});case 3:e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])}))),[i,s]);return Object(n.useEffect)((function(){l()}),[l]),a?Object(h.jsx)(x,{}):Object(h.jsx)(h.Fragment,{children:!a&&Object(h.jsx)(f,{links:c})})},m=function(){var e=Object(i.g)(),t=Object(n.useContext)(O),c=Object(n.useState)(""),r=Object(u.a)(c,2),a=r[0],s=r[1],l=d().request;Object(n.useEffect)((function(){window.M.updateTextFields()}));var b=function(){var c=Object(o.a)(j.a.mark((function c(n){var r;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if("Enter"!==n.key){c.next=10;break}return c.prev=1,c.next=4,l("/api/link/generate","POST",{from:a},{Authorization:"Bearer ".concat(t.token)});case 4:r=c.sent,e.push("/detail/".concat(r.link._id)),c.next=10;break;case 8:c.prev=8,c.t0=c.catch(1);case 10:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"},children:[Object(h.jsx)("input",{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",id:"link",type:"text",value:a,onChange:function(e){return s(e.target.value)},onKeyPress:b}),Object(h.jsx)("label",{htmlFor:"link",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443"})]})})},g=function(e){var t=e.link;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(h.jsxs)("p",{children:["\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430: ",Object(h.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:t.to})]}),Object(h.jsxs)("p",{children:["\u041e\u0442\u043a\u0443\u0434\u0430: ",Object(h.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",children:t.from})]}),Object(h.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u043a\u043e\u0432: ",Object(h.jsx)("strong",{children:t.clicks})]}),Object(h.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",Object(h.jsx)("strong",{children:new Date(t.data).toLocaleDateString()})]})]})},k=function(){var e=Object(n.useContext)(O).token,t=d(),c=t.request,r=t.loading,a=Object(n.useState)(null),s=Object(u.a)(a,2),l=s[0],b=s[1],p=Object(i.h)().id,f=Object(n.useCallback)(Object(o.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/link/".concat(p),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,b(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,p,c]);return Object(n.useEffect)((function(){f()}),[f]),r?Object(h.jsx)(x,{}):Object(h.jsx)("div",{children:!r&&l&&Object(h.jsx)(g,{link:l})})},w=c(14),N=c(13),y=function(){var e=Object(n.useContext)(O),t=Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),c=d(),r=c.loading,a=c.error,s=c.request,i=c.ClearError,l=Object(n.useState)({email:"",password:""}),b=Object(u.a)(l,2),x=b[0],p=b[1];Object(n.useEffect)((function(){t(a),i()}),[a,t,i]),Object(n.useEffect)((function(){window.M.updateTextFields()}));var f=function(e){p(Object(N.a)(Object(N.a)({},x),{},Object(w.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(o.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/register","POST",Object(N.a)({},x));case 3:c=e.sent,t(c.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s("/api/auth/login","POST",Object(N.a)({},x));case 3:c=t.sent,e.login(c.token,c.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col s6 offset-s3",children:[Object(h.jsx)("h1",{children:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"}),Object(h.jsxs)("div",{className:"card blue darken-1",children:[Object(h.jsxs)("div",{className:"card-content white-text",children:[Object(h.jsx)("span",{className:"card-title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"yellow-input",value:x.email,onChange:f}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"email",type:"password",name:"password",className:"yellow-input",value:x.password,onChange:f}),Object(h.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"})]})})]}),Object(h.jsxs)("div",{className:"card-action",children:[Object(h.jsx)("button",{className:"btn yellow darken-4",style:{marginRight:10},onClick:m,disabled:r,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(h.jsx)("button",{className:"btn grey lighten-1 black-text",onClick:v,disabled:r,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})]})})},C=function(){var e=Object(i.g)(),t=Object(n.useContext)(O);return Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"},children:[Object(h.jsx)("span",{className:"brand-logo",children:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043e\u043a"}),Object(h.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(h.jsx)("li",{children:Object(h.jsx)(p.c,{to:"/create",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})}),Object(h.jsx)("li",{children:Object(h.jsx)(p.c,{to:"/links",children:"\u0421\u0441\u044b\u043b\u043a\u0438"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",onClick:function(c){c.preventDefault(),t.logout(),e.push("/")},children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})})};var S=function(){var e=function(){var e="userData",t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(null),d=Object(u.a)(o,2),b=d[0],O=d[1],h=Object(n.useCallback)((function(t,c){a(t),O(c),localStorage.setItem(e,JSON.stringify({userId:c,token:t}))}),[]),x=Object(n.useCallback)((function(){a(null),O(null),localStorage.removeItem(e)}),[]);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&t.token&&h(t.token,t.userId),j(!0)}),[h]),{login:h,logout:x,token:r,userId:b,ready:l}}(),t=e.login,c=e.logout,r=e.token,a=e.userId,s=e.ready,l=!!r,j=function(e){return e?Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/links",exact:!0,children:Object(h.jsx)(v,{})}),Object(h.jsx)(i.b,{path:"/create",exact:!0,children:Object(h.jsx)(m,{})}),Object(h.jsx)(i.b,{path:"/detail/:id",children:Object(h.jsx)(k,{})}),Object(h.jsx)(i.a,{to:"/create"})]}):Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",exact:!0,children:Object(h.jsx)(y,{})}),Object(h.jsx)(i.a,{to:"/"})]})}(l);return s?Object(h.jsx)(O.Provider,{value:{token:r,login:t,logout:c,userId:a,isAuthenticated:l},children:Object(h.jsxs)(p.a,{children:[l&&Object(h.jsx)(C,{}),Object(h.jsx)("div",{className:"container",children:j})]})}):Object(h.jsx)(x,{})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),E()}},[[37,1,2]]]);
//# sourceMappingURL=main.7687b9cd.chunk.js.map