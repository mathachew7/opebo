(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[23],{149:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(17),c=n(12),o=n(0),i=n.n(o),l=n(10),s=n(2),u=n(53),m=n(50),d=n(54),f=n(13);t.default=function(){var e=Object(o.useState)({name:"",photo:"",loading:!1,error:"",formData:"",createdCategory:""}),t=Object(c.a)(e,2),n=t[0],h=t[1],p=Object(o.useState)(!1),g=Object(c.a)(p,2),b=g[0],y=g[1],x=Object(l.d)(),v=x.admin,E=x.token,j=n.name,N=n.loading,w=n.error,k=n.createdCategory,A=n.formData;Object(o.useEffect)((function(){h(Object(r.a)({},n,{formData:new FormData}))}),[]);var C=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;A.set(e,c),h(Object(r.a)({},n,Object(a.a)({},e,c)))}},T=function(e){e.preventDefault(),y(!1),h(Object(r.a)({},n,{error:"",loading:!0})),Object(u.a)(v._id,E,A).then((function(e){e.error?h(Object(r.a)({},n,{error:e.error})):(h(Object(r.a)({},n,{name:"",photo:"",loading:!1,createdCategory:e.name})),y(!0))}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null),i.a.createElement(d.a,{title:"Add a new category",description:"Hey ".concat(v.name,", ready to add a new category?")},i.a.createElement("div",{className:"flex flex-col row justify-center text-center"},i.a.createElement("div",null,i.a.createElement("form",{onSubmit:T,className:"flex justify-center items-center"},i.a.createElement("div",{className:"w-full max-w-lg px-5"},i.a.createElement("div",null,i.a.createElement("div",{className:"w-full max-w-lg px-5"},i.a.createElement("label",{className:"block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"},"Category Photo"),i.a.createElement("input",{onChange:C("photo"),type:"file",name:"photo",accept:"image/*",className:"w-full px-4 py-3 bg-gray-200 rounded border border-gray-400"}))),i.a.createElement("div",{className:"w-full max-w-lg px-5"},i.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},i.a.createElement("div",{className:"w-full px-3"},i.a.createElement("label",{className:"mt-5 block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Enter Category Name"),i.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"name",name:"name",type:"text",placeholder:"Category Name",onChange:C("name"),value:j,autoFocus:!0,required:!0}))),i.a.createElement("div",{className:"mt-6"},i.a.createElement("button",{className:"group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-green-600 transition duration-550 ease-in-out uppercase font-bold",type:"submit"},i.a.createElement("span",{className:"absolute left-0 inset-y pl-3"},i.a.createElement(f.j,{className:"h-5 w-5 text-white group-hover:text-indigo-400 duration-150"})),"CREATE CATEGORY"))))),function(){if(b)return i.a.createElement("div",{className:"my-3 alert alert-info bg-green-400 py-2",style:{display:k?"":"none"}},i.a.createElement("h3",{className:"text-white"},"".concat(k)," is created!")," ")}(),function(){if(w)return i.a.createElement("h3",{className:"my-3 text-danger bg-red-600 text-white py-2"},"Category should be unique")}(),N&&i.a.createElement("div",{className:"my-3 alert alert-success bg-orange-400 text-white py-2"},i.a.createElement("h2",{className:"text-white"},"Loading...")),i.a.createElement("div",{className:"my-10"},i.a.createElement(s.b,{to:"/create/service",className:"text-warning bg-gray-200 text-gray-800 active:text-800 hover:text-white hover:bg-orange-400 px-3 py-2 ease-in-out rounded font-bold border border-gray-600 hover:border-transparent uppercase"},"Next create service",i.a.createElement("i",{className:"fas fa-arrow-right ml-3","aria-hidden":"true"}))),i.a.createElement("div",{className:"mt-5 mb-10"},i.a.createElement(s.b,{to:"/admin/dashboard",className:"text-warning bg-gray-400 text-gray-800 active:text-800 hover:text-gray-800 hover:bg-gray-500 px-3 py-2 ease-in-out rounded"},"Back to Dashboard"))))))}},43:function(e,t,n){e.exports=n.p+"static/media/logo-w.abbc65a9.png"},50:function(e,t,n){"use strict";var a=n(12),r=n(0),c=n.n(r),o=n(10),i=n(2),l=n(7),s=n(43),u=[{route:"/",title:"Home"},{route:"/create/category",title:"Create Category"},{route:"/create/service",title:"Create Service"},{route:"/create/sub-service",title:"Create Sub-Service"},{route:"/admin/viewOrders",title:"View Orders"},{route:"/admin/categories",title:"Manage Categories"},{route:"/admin/services",title:"Manage Services"},{route:"/admin/subServices",title:"Manage Sub-Services"},{route:"/vendors",title:"Vendors"},{route:"/payments",title:"Payments"},{route:"/contact/messages",title:"Messages"}],m=function(e,t){return e.location.pathname===t?{color:"#fff",backgroundColor:"#f6ad55"}:{color:"#111111"}};t.a=Object(l.g)((function(e){var t=e.history,n=Object(r.useState)(!1),l=Object(a.a)(n,2),d=l[0],f=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"antialiased bg-gray-800 pb-2 font-sans"},c.a.createElement("div",{className:"container mx-auto px-4 font-sans"},c.a.createElement("div",{className:"flex justify-between items-center pt-4 pb-4 border-b-2 border-gray-600"},c.a.createElement("button",{className:"flex flex-wrap items-center text-xl font-semibold"},c.a.createElement(i.b,{to:"/",key:"Home"},c.a.createElement("img",{className:"h-10 mr-2 w-auto",src:s,alt:"logo"}))),c.a.createElement("div",{className:"p-2 flex flex-row items-center"},c.a.createElement(i.b,{to:"/admin/dashboard",key:"Admin dashboard"},c.a.createElement("span",{className:"tracking-wide text-white bg-red-600 px-4 py-1 text-xs rounded leading-loose mx-2 font-bold"},c.a.createElement("i",{className:"fas fa-user-lock mr-1","aria-hidden":"true"})," ","Admin")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return f(!d)}},c.a.createElement("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://avatars0.githubusercontent.com/u/4323180?s=460&v=4",alt:""})),c.a.createElement("div",{className:"".concat(d?"block":"hidden")},c.a.createElement("div",{className:"rounded shadow-md bg-white absolute pin-t mt-2 -ml-16"},c.a.createElement("ul",{className:"list-reset"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/admin/profile",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Profile")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/admin/dashboard",className:"no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300"},"Dashboard")),c.a.createElement("li",null,c.a.createElement("hr",{className:"border-t mx-2 border-grey-800"})),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/",onClick:function(){return Object(o.e)((function(){t.push("/")}))},className:"no-underline px-4 py-2 block text-red-500 font-bold hover:text-orange-500 hover:bg-grey-300"},"Logout")))))))),c.a.createElement("div",{className:"overflow-hidden overflow-x-hidden flex items-center justify-center pt-2"},c.a.createElement("div",{className:"scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 px-2 text-center"},u.map((function(e){return c.a.createElement(i.b,{key:e.title,to:e.route,style:m(t,"".concat(e.route)),className:"no-underline mr-2 mb-2 px-2 py-1 rounded active:text-black hover:bg-gray-300 hover:text-white bg-gray-300 active:bg-orange-400 text-black"},e.title)})))))))}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return o})),n.d(t,"o",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"j",(function(){return m})),n.d(t,"p",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"m",(function(){return p})),n.d(t,"l",(function(){return g})),n.d(t,"q",(function(){return b})),n.d(t,"f",(function(){return y})),n.d(t,"n",(function(){return x})),n.d(t,"i",(function(){return v}));var a=n(3),r=function(e,t,n){return fetch("".concat(a.a,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},c=function(){return fetch("".concat(a.a,"/categories?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},o=function(e){return fetch("".concat(a.a,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t,n,r){return fetch("".concat(a.a,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t,n){return fetch("".concat(a.a,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e,t,n){return fetch("".concat(a.a,"/service/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},u=function(){return fetch("".concat(a.a,"/services?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},m=function(e){return fetch("".concat(a.a,"/service/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},d=function(e,t,n,r){return fetch("".concat(a.a,"/service/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},f=function(e,t,n){return fetch("".concat(a.a,"/service/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},h=function(e,t,n){return fetch("".concat(a.a,"/subService/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},p=function(){return fetch("".concat(a.a,"/subServices?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},g=function(e){return fetch("".concat(a.a,"/subService/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},b=function(e,t,n,r){return fetch("".concat(a.a,"/subService/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},y=function(e,t,n){return fetch("".concat(a.a,"/subService/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(e,t){return fetch("".concat(a.a,"/admin/order/list/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v=function(e,t){return fetch("".concat(a.a,"/listContactMessage/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},54:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(19);t.a=function(e){var t=e.title,n=void 0===t?"Title":t,a=e.description,c=void 0===a?"Description":a,o=e.className,i=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"px-5 md:px-10 py-4 bg-bray-300"},r.a.createElement("h1",{className:"text-2xl font-bold text-black"},n),r.a.createElement("p",{className:"text-lg text-orange-500"},c)),r.a.createElement("div",{className:o},i))}}}]);
//# sourceMappingURL=23.1f408e60.chunk.js.map