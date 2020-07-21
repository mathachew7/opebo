(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[29],{156:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n(0),o=n.n(a),r=n(54),i=n(10),l=n(2),u=n(53),s=n(50);t.default=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],d=t[1],m=Object(i.d)(),f=m.admin,h=m.token,p=function(){Object(u.m)().then((function(e){e.error?console.log(e.error):d(e)}))};return Object(a.useEffect)((function(){p()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null),o.a.createElement(r.a,{title:"Manage Sub-Services",description:"Perform CRUD on Sub-Services",className:"container-fluid"},o.a.createElement("div",{className:"w-full flex justify-center"},o.a.createElement("div",{className:"w-full md:w-4/5 px-5"},o.a.createElement("h2",{className:"text-center font-bold text-xl"},"Total ",n.length," sub-services"),o.a.createElement("hr",null),o.a.createElement("div",{className:"py-4"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:"flex flex-row m-2 mb-4 px-2 py-3 bg-gray-200 rounded border border:gray-500 "},o.a.createElement("strong",{className:"col-sm w-full"},e.name),o.a.createElement(l.b,{to:"/admin/subService/update/".concat(e._id),className:"col-sm justify-end"},o.a.createElement("span",{className:"align-right bg-gray-800 rounded-lg px-4 py-2 text-white hover:bg-gray-700 hover:text-white"},"Update")),o.a.createElement("div",{className:"col-sm"},o.a.createElement("span",{onClick:function(){return t=e._id,void Object(u.f)(t,f._id,h).then((function(e){e.error?console.log(e.error):p()}));var t},className:"align-right bg-orange-400 rounded-lg ml-2 md:ml-5 px-4 py-2 text-white hover:bg-gray-900 hover:text-white cursor-pointer"},"Delete")))}))),o.a.createElement("br",null)))))}},43:function(e,t,n){e.exports=n.p+"static/media/logo-w.abbc65a9.png"},50:function(e,t,n){"use strict";var c=n(12),a=n(0),o=n.n(a),r=n(10),i=n(2),l=n(7),u=n(43),s=[{route:"/",title:"Home"},{route:"/create/category",title:"Create Category"},{route:"/create/service",title:"Create Service"},{route:"/create/sub-service",title:"Create Sub-Service"},{route:"/admin/viewOrders",title:"View Orders"},{route:"/admin/categories",title:"Manage Categories"},{route:"/admin/services",title:"Manage Services"},{route:"/admin/subServices",title:"Manage Sub-Services"},{route:"/vendors",title:"Vendors"},{route:"/payments",title:"Payments"},{route:"/contact/messages",title:"Messages"}],d=function(e,t){return e.location.pathname===t?{color:"#fff",backgroundColor:"#f6ad55"}:{color:"#111111"}};t.a=Object(l.g)((function(e){var t=e.history,n=Object(a.useState)(!1),l=Object(c.a)(n,2),m=l[0],f=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"antialiased bg-gray-800 pb-2 font-sans"},o.a.createElement("div",{className:"container mx-auto px-4 font-sans"},o.a.createElement("div",{className:"flex justify-between items-center pt-4 pb-4 border-b-2 border-gray-600"},o.a.createElement("button",{className:"flex flex-wrap items-center text-xl font-semibold"},o.a.createElement(i.b,{to:"/",key:"Home"},o.a.createElement("img",{className:"h-10 mr-2 w-auto",src:u,alt:"logo"}))),o.a.createElement("div",{className:"p-2 flex flex-row items-center"},o.a.createElement(i.b,{to:"/admin/dashboard",key:"Admin dashboard"},o.a.createElement("span",{className:"tracking-wide text-white bg-red-600 px-4 py-1 text-xs rounded leading-loose mx-2 font-bold"},o.a.createElement("i",{className:"fas fa-user-lock mr-1","aria-hidden":"true"})," ","Admin")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return f(!m)}},o.a.createElement("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://avatars0.githubusercontent.com/u/4323180?s=460&v=4",alt:""})),o.a.createElement("div",{className:"".concat(m?"block":"hidden")},o.a.createElement("div",{className:"rounded shadow-md bg-white absolute pin-t mt-2 -ml-16"},o.a.createElement("ul",{className:"list-reset"},o.a.createElement("li",null,o.a.createElement(i.b,{to:"/admin/profile",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Profile")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/admin/dashboard",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Dashboard")),o.a.createElement("li",null,o.a.createElement("hr",{className:"border-t mx-2 border-grey-800"})),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/",onClick:function(){return Object(r.e)((function(){t.push("/")}))},className:"no-underline px-4 py-2 block text-red-500 font-bold hover:text-orange-500 hover:bg-grey-300"},"Logout")))))))),o.a.createElement("div",{className:"overflow-hidden overflow-x-hidden flex items-center justify-center pt-2"},o.a.createElement("div",{className:"scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 px-2 text-center"},s.map((function(e){return o.a.createElement(i.b,{key:e.title,to:e.route,style:d(t,"".concat(e.route)),className:"no-underline mr-2 mb-2 px-2 py-1 rounded active:text-black hover:bg-gray-300 hover:text-white bg-gray-300 active:bg-orange-400 text-black"},e.title)})))))))}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return r})),n.d(t,"o",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"k",(function(){return s})),n.d(t,"j",(function(){return d})),n.d(t,"p",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"m",(function(){return p})),n.d(t,"l",(function(){return b})),n.d(t,"q",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"n",(function(){return E})),n.d(t,"i",(function(){return x}));var c=n(3),a=function(e,t,n){return fetch("".concat(c.a,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},o=function(){return fetch("".concat(c.a,"/categories?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},r=function(e){return fetch("".concat(c.a,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t,n,a){return fetch("".concat(c.a,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t,n){return fetch("".concat(c.a,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=function(e,t,n){return fetch("".concat(c.a,"/service/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},s=function(){return fetch("".concat(c.a,"/services?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},d=function(e){return fetch("".concat(c.a,"/service/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},m=function(e,t,n,a){return fetch("".concat(c.a,"/service/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},f=function(e,t,n){return fetch("".concat(c.a,"/service/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},h=function(e,t,n){return fetch("".concat(c.a,"/subService/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},p=function(){return fetch("".concat(c.a,"/subServices?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},b=function(e){return fetch("".concat(c.a,"/subService/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},g=function(e,t,n,a){return fetch("".concat(c.a,"/subService/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v=function(e,t,n){return fetch("".concat(c.a,"/subService/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},E=function(e,t){return fetch("".concat(c.a,"/admin/order/list/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(e,t){return fetch("".concat(c.a,"/listContactMessage/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},54:function(e,t,n){"use strict";var c=n(0),a=n.n(c);n(19);t.a=function(e){var t=e.title,n=void 0===t?"Title":t,c=e.description,o=void 0===c?"Description":c,r=e.className,i=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"px-5 md:px-10 py-4 bg-bray-300"},a.a.createElement("h1",{className:"text-2xl font-bold text-black"},n),a.a.createElement("p",{className:"text-lg text-orange-500"},o)),a.a.createElement("div",{className:r},i))}}}]);
//# sourceMappingURL=29.278220f0.chunk.js.map