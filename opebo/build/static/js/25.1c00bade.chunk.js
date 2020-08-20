(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[25],{151:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(17),c=a(12),o=a(0),l=a.n(o),i=a(10),s=a(2),u=a(53),m=a(50),d=a(54),f=a(13);t.default=function(){var e=Object(o.useState)({name:"",description:"",price:"",status:"",photo:"",location:"",services:[],service:"",loading:!1,error:"",createdSubService:"",formData:""}),t=Object(c.a)(e,2),a=t[0],p=t[1],b=Object(o.useState)(""),g=Object(c.a)(b,2),h=(g[0],g[1]),x=Object(i.d)(),v=x.admin,E=x.token,y=a.name,w=a.description,N=a.price,j=a.status,k=a.location,S=a.services,A=(a.service,a.loading),T=a.error,O=a.createdSubService,C=a.formData;Object(o.useEffect)((function(){Object(u.k)().then((function(e){e.error?p(Object(r.a)({},a,{error:e.error})):p(Object(r.a)({},a,{services:e,formData:new FormData}))}))}),[]);var z=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;C.set(e,c),p(Object(r.a)({},a,Object(n.a)({},e,c))),"locationString"===e&&h(c)}},B=function(e){e.preventDefault(),p(Object(r.a)({},a,{error:"",loading:!0})),Object(u.c)(v._id,E,C).then((function(e){e.error?p(Object(r.a)({},a,{error:e.error})):p(Object(r.a)({},a,{name:"",description:"",photo:"",status:"",price:"",location:"",loading:!1,createdSubService:e.name}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null),l.a.createElement(d.a,{title:"Add a new Sub-Service",description:"Hey ".concat(v.name,", ready to add a new sub-service?")},l.a.createElement("div",{className:"flex flex-col row justify-center text-center"},l.a.createElement("div",null,l.a.createElement("form",{onSubmit:B,className:"mb-3 flex justify-center items-center"},l.a.createElement("div",{className:"w-full max-w-lg px-5"},l.a.createElement("div",{className:"flex flex-wrap mb-6"},l.a.createElement("div",{className:"w-full max-w-lg px-5"},l.a.createElement("label",{className:"block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Service Type"),l.a.createElement("div",{className:"relative"},l.a.createElement("select",{className:"appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",onChange:z("service")},l.a.createElement("option",null,"Select Service"),S&&S.map((function(e,t){return l.a.createElement("option",{key:t,value:e._id},e.name)}))),l.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},l.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))),l.a.createElement("div",{className:"w-full max-w-lg px-5"},l.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},l.a.createElement("div",{className:"w-full px-3"},l.a.createElement("label",{className:"mt-5 block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Locations"),l.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"e.g. Delhi, Ludhiana, Meerut...",onChange:z("location"),value:k,autoFocus:!0})))),l.a.createElement("div",{className:"w-full max-w-lg px-5"},l.a.createElement("label",{className:"block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"},"Sub-Service Photo"),l.a.createElement("input",{onChange:z("photo"),type:"file",name:"photo",accept:"image/*",className:"w-full px-4 py-3 bg-gray-200 rounded border border-gray-400"})),l.a.createElement("div",{className:"w-full max-w-lg px-5"},l.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},l.a.createElement("div",{className:"w-full px-3"},l.a.createElement("label",{className:"mt-5 block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Sub-Service Name"),l.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"Enter Sub-service name",onChange:z("name"),value:y,autoFocus:!0}))),l.a.createElement("div",{className:"flex flex-wrap -mx-3"},l.a.createElement("div",{className:"w-full px-3"},l.a.createElement("label",{className:"block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Description"),l.a.createElement("textarea",{className:"appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded no-resize py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none",type:"text",placeholder:"Enter some description",onChange:z("description"),value:w,autoFocus:!0}))),l.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},l.a.createElement("div",{className:"w-full px-3"},l.a.createElement("label",{className:"mt-5 block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Price"),l.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"number",placeholder:"Enter price",onChange:z("price"),value:N,autoFocus:!0}))),l.a.createElement("div",{className:"w-full max-w-lg mb-10"},l.a.createElement("label",{className:"block text-left uppercase text-gray-700 text-xs font-bold mb-2"},"Status"),l.a.createElement("div",{className:"relative"},l.a.createElement("select",{className:"appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",onChange:z("status"),value:j},l.a.createElement("option",null,"Select status"),l.a.createElement("option",{value:"Available"},"Available"),l.a.createElement("option",{value:"Not Available"},"Not Available"),l.a.createElement("option",{value:"Under Review"},"Under Review")),l.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},l.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),l.a.createElement("div",{className:"mt-6"},l.a.createElement("button",{className:"group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-green-600 transition duration-550 ease-in-out uppercase font-bold",type:"submit"},l.a.createElement("span",{className:"absolute left-0 inset-y pl-3"},l.a.createElement(f.j,{className:"h-5 w-5 text-white group-hover:text-indigo-400 duration-150"})),"CREATE SUB-SERVICE"))))),l.a.createElement("div",{className:"my-1 alert alert-info bg-green-400 py-2",style:{display:O?"":"none"}},l.a.createElement("h3",{className:"text-white"},"".concat(O)," is created!")," "),l.a.createElement("div",null,l.a.createElement("h3",{className:"my-3 text-danger bg-red-600 text-white py-2",style:{display:T?"":"none"}},T)),A&&l.a.createElement("div",{className:"my-3 alert alert-success bg-orange-400 text-white py-2"},l.a.createElement("h2",{className:"text-white"},"Loading...")),l.a.createElement("div",{className:"my-10"},l.a.createElement(s.b,{to:"/create/sub-service",className:"text-warning bg-gray-200 text-gray-800 active:text-800 hover:text-white hover:bg-orange-400 px-3 py-2 ease-in-out rounded font-bold border border-gray-600 hover:border-transparent uppercase"},"Manage Services",l.a.createElement("i",{className:"fas fa-edit ml-3","aria-hidden":"true"}))),l.a.createElement("div",{className:"mt-5 mb-10"},l.a.createElement(s.b,{to:"/admin/dashboard",className:"text-warning bg-gray-400 text-gray-800 active:text-800 hover:text-gray-800 hover:bg-gray-500 px-3 py-2 ease-in-out rounded"},"Back to Dashboard"))))))}},43:function(e,t,a){e.exports=a.p+"static/media/logo-w.abbc65a9.png"},50:function(e,t,a){"use strict";var n=a(12),r=a(0),c=a.n(r),o=a(10),l=a(2),i=a(7),s=a(43),u=[{route:"/",title:"Home"},{route:"/create/category",title:"Create Category"},{route:"/create/service",title:"Create Service"},{route:"/create/sub-service",title:"Create Sub-Service"},{route:"/admin/viewOrders",title:"View Orders"},{route:"/admin/categories",title:"Manage Categories"},{route:"/admin/services",title:"Manage Services"},{route:"/admin/subServices",title:"Manage Sub-Services"},{route:"/vendors",title:"Vendors"},{route:"/payments",title:"Payments"},{route:"/contact/messages",title:"Messages"}],m=function(e,t){return e.location.pathname===t?{color:"#fff",backgroundColor:"#f6ad55"}:{color:"#111111"}};t.a=Object(i.g)((function(e){var t=e.history,a=Object(r.useState)(!1),i=Object(n.a)(a,2),d=i[0],f=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"antialiased bg-gray-800 pb-2 font-sans"},c.a.createElement("div",{className:"container mx-auto px-4 font-sans"},c.a.createElement("div",{className:"flex justify-between items-center pt-4 pb-4 border-b-2 border-gray-600"},c.a.createElement("button",{className:"flex flex-wrap items-center text-xl font-semibold"},c.a.createElement(l.b,{to:"/",key:"Home"},c.a.createElement("img",{className:"h-10 mr-2 w-auto",src:s,alt:"logo"}))),c.a.createElement("div",{className:"p-2 flex flex-row items-center"},c.a.createElement(l.b,{to:"/admin/dashboard",key:"Admin dashboard"},c.a.createElement("span",{className:"tracking-wide text-white bg-red-600 px-4 py-1 text-xs rounded leading-loose mx-2 font-bold"},c.a.createElement("i",{className:"fas fa-user-lock mr-1","aria-hidden":"true"})," ","Admin")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return f(!d)}},c.a.createElement("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://avatars0.githubusercontent.com/u/4323180?s=460&v=4",alt:""})),c.a.createElement("div",{className:"".concat(d?"block":"hidden")},c.a.createElement("div",{className:"rounded shadow-md bg-white absolute pin-t mt-2 -ml-16"},c.a.createElement("ul",{className:"list-reset"},c.a.createElement("li",null,c.a.createElement(l.b,{to:"/admin/profile",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Profile")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/admin/dashboard",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Dashboard")),c.a.createElement("li",null,c.a.createElement("hr",{className:"border-t mx-2 border-grey-800"})),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/",onClick:function(){return Object(o.e)((function(){t.push("/")}))},className:"no-underline px-4 py-2 block text-red-500 font-bold hover:text-orange-500 hover:bg-grey-300"},"Logout")))))))),c.a.createElement("div",{className:"overflow-hidden overflow-x-hidden flex items-center justify-center pt-2"},c.a.createElement("div",{className:"scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 px-2 text-center"},u.map((function(e){return c.a.createElement(l.b,{key:e.title,to:e.route,style:m(t,"".concat(e.route)),className:"no-underline mr-2 mb-2 px-2 py-1 rounded active:text-black hover:bg-gray-300 hover:text-white bg-gray-300 active:bg-orange-400 text-black"},e.title)})))))))}))},53:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"g",(function(){return c})),a.d(t,"h",(function(){return o})),a.d(t,"o",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"k",(function(){return u})),a.d(t,"j",(function(){return m})),a.d(t,"p",(function(){return d})),a.d(t,"e",(function(){return f})),a.d(t,"c",(function(){return p})),a.d(t,"m",(function(){return b})),a.d(t,"l",(function(){return g})),a.d(t,"q",(function(){return h})),a.d(t,"f",(function(){return x})),a.d(t,"n",(function(){return v})),a.d(t,"i",(function(){return E}));var n=a(3),r=function(e,t,a){return fetch("".concat(n.a,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},c=function(){return fetch("".concat(n.a,"/categories?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},o=function(e){return fetch("".concat(n.a,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t,a,r){return fetch("".concat(n.a,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t,a){return fetch("".concat(n.a,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e,t,a){return fetch("".concat(n.a,"/service/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},u=function(){return fetch("".concat(n.a,"/services?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},m=function(e){return fetch("".concat(n.a,"/service/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},d=function(e,t,a,r){return fetch("".concat(n.a,"/service/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},f=function(e,t,a){return fetch("".concat(n.a,"/service/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},p=function(e,t,a){return fetch("".concat(n.a,"/subService/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},b=function(){return fetch("".concat(n.a,"/subServices?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},g=function(e){return fetch("".concat(n.a,"/subService/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},h=function(e,t,a,r){return fetch("".concat(n.a,"/subService/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(e,t,a){return fetch("".concat(n.a,"/subService/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v=function(e,t){return fetch("".concat(n.a,"/admin/order/list/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},E=function(e,t){return fetch("".concat(n.a,"/listContactMessage/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},54:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(19);t.a=function(e){var t=e.title,a=void 0===t?"Title":t,n=e.description,c=void 0===n?"Description":n,o=e.className,l=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"px-5 md:px-10 py-4 bg-bray-300"},r.a.createElement("h1",{className:"text-2xl font-bold text-black"},a),r.a.createElement("p",{className:"text-lg text-orange-500"},c)),r.a.createElement("div",{className:o},l))}}}]);
//# sourceMappingURL=25.1c00bade.chunk.js.map