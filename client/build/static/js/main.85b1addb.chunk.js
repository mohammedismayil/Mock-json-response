(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(20),s=n.n(o),i=(n(25),n(26),n(5)),l=n(7),r=n.n(l),a=(n(45),function(){return r.a.get("/api/MockJsons",{headers:{"Content-Type":"application/json  ","Access-Control-Allow-Origin":"*"}})}),j=function(e){return r.a.get("/api/MockJsons/"+e)},d=function(e,t){return r.a.put("http://localhost:5000/api/mockjsons/"+e,t)},u=function(e){return r.a.post("/api/MockJsons",e)},b=function(e){return r.a.get("/api/MockJsons/deleteAllMocks/")},h=n(2),x=n(6),O=n(1);function f(e){var t=Object(h.g)().id,n=Object(c.useState)(0),o=Object(i.a)(n,2),s=o[0],l=o[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),b=a[0],f=a[1],p=Object(c.useState)(""),g=Object(i.a)(p,2),m=g[0],v=g[1],k=Object(c.useState)(e.isFromEdit),N=Object(i.a)(k,2),y=N[0];N[1];function w(e){console.log("reloading inputs"),v(""),f(e._id)}function C(e){e.preventDefault(),console.log("form submitted"),m&&(!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(m)?alert("enter a valid json"):y?d(t,{json:m}).then((function(e){return w(e.data)})).catch((function(e){return console.log(e)})):u({json:m}).then((function(e){return w(e.data)})).catch((function(e){return console.log(e)})))}return Object(c.useEffect)((function(){s<1&&setTimeout((function(){l(s+1),function(e){console.log(e),e&&j(e).then((function(e){console.log(e.data),v(JSON.stringify(e.data.json)),f(e.data._id),console.log(JSON.parse(e.data.json))})).catch((function(e){return console.log(e)}))}(t)}),1e3)})),Object(O.jsxs)("div",{className:"content-center justify-center pt-10",children:[y?Object(O.jsx)("h1",{className:"font-bold text-center text-2xl",children:"Edit the json mock"}):Object(O.jsx)("h1",{className:"font-bold text-center text-2xl",children:"Add a new json mock"}),Object(O.jsxs)("div",{className:"m-auto w-1/2 content-center justify-center flex-col pt-10",children:[Object(O.jsx)("div",{children:Object(O.jsx)("textarea",{value:m,onChange:function(e){v(e.target.value)},name:"json",placeholder:"JSON (required)",className:"h-40 w-full border border-green-800 px-2 py-2"})}),Object(O.jsx)("div",{className:"flex content-center justify-center",children:Object(O.jsx)("div",{className:"content-center justify-center",children:y?Object(O.jsx)("button",{disabled:!m,onClick:C,className:"bg-blue-700 rounded-sm text-white px-5 py-2 content-center justify-center w-24 mt-10",children:"Edit"}):Object(O.jsx)("button",{disabled:!m,onClick:C,className:"bg-green-700 rounded-lg text-white px-5 py-2 content-center justify-center w-24 mt-10",children:"Add"})})})]}),b.length>0?Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Check out your mock json here:"}),Object(O.jsxs)(x.b,{to:"/"+b,children:["http://localhost:3000/",b]})]}):Object(O.jsx)("div",{})]})}var p=function(){return Object(O.jsx)(f,{})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};function m(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){0==n.length&&a().then((function(e){console.log(e.data),o(e.data)})).catch((function(e){return console.log(e)}))})),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Mocks"}),n.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e._id}),Object(O.jsxs)(x.b,{to:"/"+e._id,children:["http://localhost:5000/",e._id]}),Object(O.jsx)(x.b,{to:"/edit/"+e._id,children:Object(O.jsx)("button",{children:"Edit"})})]})}))]})}function v(){function e(){console.log("pro logging-- deleting the entire collection"),b().then((function(e){return console.log("deleting all mocks")})).catch((function(e){return console.log(e)}))}return Object(O.jsx)("div",{className:" flex content-center justify-center rounded-2xl w-1/4 container p-10 bg-gray-200 m-auto mt-10",children:Object(O.jsxs)("div",{className:"content-center justify-center",children:[Object(O.jsx)("h1",{className:"font-bold text-3xl text-center",children:"Admin"}),Object(O.jsxs)("div",{className:"flex-wrap flex",children:[Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"bg-purple-500 pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-white",onClick:e,children:"Download Backup"})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"bg-purple-500 pl-5 pr-5 pt-2 pb-2 mt-5 rounded-lg text-white",onClick:e,children:"Delete all mocks"})})]})]})})}s.a.render(Object(O.jsx)(x.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",element:Object(O.jsx)(p,{})}),Object(O.jsx)(h.a,{path:"/v0.1/:id",element:Object(O.jsx)(f,{})}),Object(O.jsx)(h.a,{path:"/allmocks",element:Object(O.jsx)(m,{})}),Object(O.jsx)(h.a,{path:"/admin",element:Object(O.jsx)(v,{})}),Object(O.jsx)(h.a,{path:"/edit/:id",element:Object(O.jsx)(f,{isFromEdit:!0,hey:"oioioi"})})]})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.85b1addb.chunk.js.map