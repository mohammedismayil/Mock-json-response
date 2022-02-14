(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[3],{14:function(e,t,n){"use strict";var a=n(8),o=n.n(a);n(61);t.a={getAllMocks:function(){return o.a.get("/api/MockJsons",{headers:{"Content-Type":"application/json  ","Access-Control-Allow-Origin":"*"}})},getMockJson:function(e){return o.a.get("/api/MockJsons/"+e)},updateMockJson:function(e,t){return o.a.put("http://localhost:5000/api/mockjsons/"+e,t)},deleteMockJson:function(e){return o.a.delete("/api/MockJsons/"+e)},saveMockJson:function(e){return o.a.post("/api/MockJsons",e)},deleteAllMocks:function(e){return o.a.get("/api/MockJsons/deleteAllMocks/")},backupAllMocks:function(e){return o.a.get("http://localhost:5000/api/MockJsons/backupMocks/")}}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var a=n(7),o=n(0),c=n.n(o),r=c.a.createContext(),l=function(e){var t=e.children,n=Object(o.useState)(!1),l=Object(a.a)(n,2),i=l[0],s=l[1];function u(){s(!i)}function d(){s(!1)}var f=Object(o.useMemo)((function(){return{isSidebarOpen:i,toggleSidebar:u,closeSidebar:d}}),[i]);return c.a.createElement(r.Provider,{value:f},t)}},31:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(){return o.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},39:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),l=(n(39),n(10)),i=n(1),s=n(7);var u=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.g)();return Object(a.useEffect)((function(){r.pathname.slice(1)?setTimeout((function(){return c("Navigated to ".concat(r.pathname.slice(1)," page."))}),500):c("")}),[r]),o.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},n)},d=n(14);function f(){var e=Object(i.h)().id,t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),f=Object(s.a)(u,2),m=f[0],h=f[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),g=b[0],v=b[1],k=Object(a.useState)(!1),j=Object(s.a)(k,2),E=j[0];j[1];function w(e){console.log("reloading inputs"),v(""),h(e._id)}function y(t){t.preventDefault(),console.log("form submitted"),g&&(!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(g)?alert("enter a valid json"):E?d.a.updateMockJson(e,{json:g}).then((function(e){return w(e.data)})).catch((function(e){return console.log(e)})):d.a.saveMockJson({json:g}).then((function(e){return w(e.data)})).catch((function(e){return console.log(e)})))}return Object(a.useEffect)((function(){c<1&&setTimeout((function(){r(c+1),function(e){console.log(e),e&&d.a.getMockJson(e).then((function(e){console.log(e.data),v(JSON.stringify(e.data.json)),h(e.data._id),console.log(JSON.parse(e.data.json))})).catch((function(e){return console.log(e)}))}(e)}),1e3)})),o.a.createElement("div",{className:"content-center justify-center pt-10"},E?o.a.createElement("h1",{className:"font-bold text-center text-2xl"},"Edit the json mock"):o.a.createElement("h1",{className:"font-bold text-center text-2xl"},"Add a new json mock"),o.a.createElement("div",{className:"m-auto w-1/2 content-center justify-center flex-col pt-10"},o.a.createElement("div",null,o.a.createElement("textarea",{value:g,onChange:function(e){v(e.target.value)},name:"json",placeholder:"JSON (required)",className:"h-40 w-full border border-green-800 px-2 py-2"})),o.a.createElement("div",{className:"flex content-center justify-center"},o.a.createElement("div",{className:"content-center justify-center"},E?o.a.createElement("button",{disabled:!g,onClick:y,className:"bg-blue-700 rounded-sm text-white px-5 py-2 content-center justify-center w-24 mt-10"},"Edit"):o.a.createElement("button",{disabled:!g,onClick:y,className:"bg-green-700 rounded-lg text-white px-5 py-2 content-center justify-center w-24 mt-10"},"Add")))),m.length>0?o.a.createElement("div",null,o.a.createElement("h2",null,"Check out your mock json here:"),o.a.createElement(l.b,{to:"/"+m},"http://localhost:3000/",m)):o.a.createElement("div",null),")")}var m=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,214))})),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,215))})),p=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,216))})),b=Object(a.lazy)((function(){return n.e(17).then(n.bind(null,217))}));var g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(u,null),o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/login",component:h}),o.a.createElement(i.b,{path:"/create-account",component:p}),o.a.createElement(i.b,{path:"/forgot-password",component:b}),o.a.createElement(i.b,{path:"/admin",component:m}),o.a.createElement(i.b,{path:"/",component:f}))))},v=n(20),k=n(31),j=n(19),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(v.b,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement(k.a,null)},o.a.createElement(j.Windmill,{usePreferences:!0},o.a.createElement(g,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[62,4,5]]]);
//# sourceMappingURL=main.ceaa446a.chunk.js.map