(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[33],{158:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(0),o=n.n(c),r=n(10),i=n(2),l=n(53),s=n(50),u=n(71),m=n.n(u),d=n(20);t.default=function(e){var t=e.history,n=Object(c.useState)([]),u=Object(a.a)(n,2),f=u[0],h=u[1],p=Object(c.useState)(!1),b=Object(a.a)(p,2),g=b[0],x=b[1],E=Object(r.d)(),v=E.admin,y=E.token;Object(c.useEffect)((function(){!function(e,t){x(!1),Object(l.n)(e,t).then((function(e){e.error?console.log(e.error):(h(e),x(!0))}))}(v._id,y)}),[v._id,y]);var j;return o.a.createElement(o.a.Fragment,null,(j=f,o.a.createElement(o.a.Fragment,null,Object(s.a)(t),o.a.createElement("div",{className:"justify-center items-center md:px-40 mb-10"},o.a.createElement("div",{className:"bg-white flex flex-col rounded overflow-hidden px-3 -pt-16"},o.a.createElement("div",{className:"flex flex-row mb-2"},o.a.createElement(i.b,{className:"text-xs text-gray-500 hover:text-gray-800",to:"/admin/dashboard"},"Your account >"," "),o.a.createElement(i.b,{className:"ml-2 text-xs text-orange-600 hover:text-orange-500",to:"/admin/viewOrders"},"All Orders >"," ")),o.a.createElement("h1",{className:"text-2xl text-left font-semibold"},"Your Bookings"),g?j.map((function(e,t){return o.a.createElement("div",{className:"my-2 w-full border border-gray-300 rounded overflow-hidden hover:border-orange-500",key:t},o.a.createElement("div",{className:"bg-gray-100 font-semibold border-b border-gray-400\r flex flex-row justify-between uppercase items-baseline px-3 pt-2"},o.a.createElement("p",{className:"text-xsm font-normal"},o.a.createElement("span",{className:"text-gray-600"},"#",e._id)),o.a.createElement("p",{className:"-mt-2 text-xs text-black-600"},o.a.createElement("span",{className:"text-gray-600"},e.transaction_id)),o.a.createElement("p",{className:"text-xs font-normal"},"TOTAL : \u20b9"," ",o.a.createElement("span",{className:"font-semibold"},e.amount))),o.a.createElement("div",{className:"px-5 py-3"},e.orders.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:t,className:"flex flex-row justify-between"},o.a.createElement("div",null,o.a.createElement("p",{className:"text-base font-semibold text-gray-800"},e.name),o.a.createElement("p",{className:"-mt-3 text-xs text-orange-600"},e.service),o.a.createElement("p",{className:"text-xs font-normal"},o.a.createElement("span",{className:"font-semibold"},m()(e.createdAt).format("llll")))),o.a.createElement("p",{className:"text-base font-semibold"},"Price: ",e.price)))})),o.a.createElement("div",{className:" py-2 flex flex-row justify-end"},o.a.createElement(i.b,{className:"bg-orange-500 font-semibold hover:bg-orange-600 border border-gray-200 text-xsm px-5 py-2 text-white rounded",to:"/admin/order/details/".concat(e._id)},"Order details"))))})):o.a.createElement(d.a,null))))))}},43:function(e,t,n){e.exports=n.p+"static/media/logo-w.abbc65a9.png"},50:function(e,t,n){"use strict";var a=n(12),c=n(0),o=n.n(c),r=n(10),i=n(2),l=n(7),s=n(43),u=[{route:"/",title:"Home"},{route:"/create/category",title:"Create Category"},{route:"/create/service",title:"Create Service"},{route:"/create/sub-service",title:"Create Sub-Service"},{route:"/admin/viewOrders",title:"View Orders"},{route:"/admin/categories",title:"Manage Categories"},{route:"/admin/services",title:"Manage Services"},{route:"/admin/subServices",title:"Manage Sub-Services"},{route:"/vendors",title:"Vendors"},{route:"/payments",title:"Payments"},{route:"/contact/messages",title:"Messages"}],m=function(e,t){return e.location.pathname===t?{color:"#fff",backgroundColor:"#f6ad55"}:{color:"#111111"}};t.a=Object(l.g)((function(e){var t=e.history,n=Object(c.useState)(!1),l=Object(a.a)(n,2),d=l[0],f=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"antialiased bg-gray-800 pb-2 font-sans"},o.a.createElement("div",{className:"container mx-auto px-4 font-sans"},o.a.createElement("div",{className:"flex justify-between items-center pt-4 pb-4 border-b-2 border-gray-600"},o.a.createElement("button",{className:"flex flex-wrap items-center text-xl font-semibold"},o.a.createElement(i.b,{to:"/",key:"Home"},o.a.createElement("img",{className:"h-10 mr-2 w-auto",src:s,alt:"logo"}))),o.a.createElement("div",{className:"p-2 flex flex-row items-center"},o.a.createElement(i.b,{to:"/admin/dashboard",key:"Admin dashboard"},o.a.createElement("span",{className:"tracking-wide text-white bg-red-600 px-4 py-1 text-xs rounded leading-loose mx-2 font-bold"},o.a.createElement("i",{className:"fas fa-user-lock mr-1","aria-hidden":"true"})," ","Admin")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return f(!d)}},o.a.createElement("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://avatars0.githubusercontent.com/u/4323180?s=460&v=4",alt:""})),o.a.createElement("div",{className:"".concat(d?"block":"hidden")},o.a.createElement("div",{className:"rounded shadow-md bg-white absolute pin-t mt-2 -ml-16"},o.a.createElement("ul",{className:"list-reset"},o.a.createElement("li",null,o.a.createElement(i.b,{to:"/admin/profile",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Profile")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/admin/dashboard",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Dashboard")),o.a.createElement("li",null,o.a.createElement("hr",{className:"border-t mx-2 border-grey-800"})),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/",onClick:function(){return Object(r.e)((function(){t.push("/")}))},className:"no-underline px-4 py-2 block text-red-500 font-bold hover:text-orange-500 hover:bg-grey-300"},"Logout")))))))),o.a.createElement("div",{className:"overflow-hidden overflow-x-hidden flex items-center justify-center pt-2"},o.a.createElement("div",{className:"scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 px-2 text-center"},u.map((function(e){return o.a.createElement(i.b,{key:e.title,to:e.route,style:m(t,"".concat(e.route)),className:"no-underline mr-2 mb-2 px-2 py-1 rounded active:text-black hover:bg-gray-300 hover:text-white bg-gray-300 active:bg-orange-400 text-black"},e.title)})))))))}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return r})),n.d(t,"o",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"j",(function(){return m})),n.d(t,"p",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"m",(function(){return p})),n.d(t,"l",(function(){return b})),n.d(t,"q",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"n",(function(){return E})),n.d(t,"i",(function(){return v}));var a=n(3),c=function(e,t,n){return fetch("".concat(a.a,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},o=function(){return fetch("".concat(a.a,"/categories?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},r=function(e){return fetch("".concat(a.a,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t,n,c){return fetch("".concat(a.a,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:c}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t,n){return fetch("".concat(a.a,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e,t,n){return fetch("".concat(a.a,"/service/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},u=function(){return fetch("".concat(a.a,"/services?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},m=function(e){return fetch("".concat(a.a,"/service/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},d=function(e,t,n,c){return fetch("".concat(a.a,"/service/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:c}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},f=function(e,t,n){return fetch("".concat(a.a,"/service/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},h=function(e,t,n){return fetch("".concat(a.a,"/subService/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},p=function(){return fetch("".concat(a.a,"/subServices?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},b=function(e){return fetch("".concat(a.a,"/subService/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},g=function(e,t,n,c){return fetch("".concat(a.a,"/subService/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:c}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(e,t,n){return fetch("".concat(a.a,"/subService/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},E=function(e,t){return fetch("".concat(a.a,"/admin/order/list/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v=function(e,t){return fetch("".concat(a.a,"/listContactMessage/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},70:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=33.b6ba52bd.chunk.js.map