(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[53],{133:function(e,a,t){"use strict";t.r(a);var r=t(18),n=t(17),l=t(12),s=t(0),o=t.n(s),c=t(2),i=t(9),m=t(27);a.default=function(){var e=Object(s.useState)({name:"",email:"",phone:"",password:"",error:"",success:!1}),a=Object(l.a)(e,2),t=a[0],u=a[1],d=t.name,p=t.email,b=t.phone,g=t.password,f=t.success,h=t.error,x=function(e){return function(a){u(Object(n.a)({},t,Object(r.a)({error:!1},e,a.target.value)))}},y=function(e){e.preventDefault(),u(Object(n.a)({},t,{error:!1})),Object(i.j)({name:d,email:p,phone:b,password:g}).then((function(e){e.error?e.error.includes("email")?u(Object(n.a)({},t,{error:"Email already exists. Please try another email",success:!1})):u(Object(n.a)({},t,{error:e.error,success:!1})):u(Object(n.a)({},t,{name:"",email:"",phone:"",password:"",error:"",success:!0}))}))};return o.a.createElement("div",null,o.a.createElement("div",{className:"flex alert alert-info justify-center items-center bg-green-500 text-white py-1",style:{display:f?"":"none"}},"New account is created. Please"," ",o.a.createElement(c.b,{to:"/signin",className:"ml-3 bg-green-600 hove:bg-green-700 rounded px-4 py-1 text-green-200 hover:text-yellow-200"},"Signin")),o.a.createElement("div",{className:"flex alert alert-danger justify-center items-center bg-red-500 text-white py-1",style:{display:h?"":"none"}},h),o.a.createElement("div",null,o.a.createElement("div",{className:"min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8"},o.a.createElement("div",{className:"max-w-md w-full"},o.a.createElement("div",null,o.a.createElement("img",{className:"mx-auto h-24 mt-8 w-auto",src:m,alt:"OpeBo"}),o.a.createElement("h2",{className:"mt-10 text-center text-3xl leading-9 font-sans font-bold text-black"},"Create your account"),o.a.createElement("p",{className:"mt-0 text-center text-sm font-sans leading-5 text-gray-600 max-w"},o.a.createElement("a",{href:"/signin",className:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"},"Already have an account? Login Instead"))),o.a.createElement("form",{className:"mt-8"},o.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),o.a.createElement("div",{className:"rounded-md shadow-sm"},o.a.createElement("div",null,o.a.createElement("input",{"aria-label":"Name",name:"name",type:"name",required:!0,onChange:x("name"),className:"appearance-none relative bg-gray-300 block w-full px-3 py-3 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Full Name",value:d})),o.a.createElement("div",{className:"mt-4"},o.a.createElement("input",{"aria-label":"Email address",name:"email",type:"email",required:!0,onChange:x("email"),className:"appearance-none relative bg-gray-300 block w-full px-3 py-3 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Email address",value:p})),o.a.createElement("div",{className:"mt-4"},o.a.createElement("input",{"aria-label":"Phone Number",name:"phone",type:"tel",required:!0,onChange:x("phone"),className:"appearance-none relative bg-gray-300 block w-full px-3 py-3 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Phone number",value:b})),o.a.createElement("div",{className:"mt-4"},o.a.createElement("input",{"aria-label":"Password",name:"password",type:"password",required:!0,onChange:x("password"),className:"appearance-none relative block w-full px-3 py-3 bg-gray-300 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Password",value:g}))),o.a.createElement("div",{className:"mt-6 flex items-center justify-between"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("input",{id:"remember_me",type:"checkbox",className:"form-checkbox h-3 w-3 transition duration-150 ease-in-out"}),o.a.createElement("label",{className:"ml-2 block text-xs italic leading-5 text-gray-600"},"By signing up with Opebo you agree to share your details with us."))),o.a.createElement("div",{className:"mt-6"},o.a.createElement("button",{onClick:y,type:"submit",className:"group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-lg text-white bg-black hover:bg-green-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo ease-in-out uppercase"},o.a.createElement("span",{className:"absolute left-0 inset-y pl-3"},o.a.createElement("svg",{className:"h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150",fill:"currentColor",viewBox:"0 0 20 20"},o.a.createElement("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}))),"Sign up"),o.a.createElement("div",{className:"text-sm leading-5 mt-4 text-center"},o.a.createElement(c.b,{to:"/",className:"font-medium text-orange-500 hover:text-gray-900 focus:outline-none focus:underline transition ease-in-out duration-150"},o.a.createElement("i",{className:"fas fa-arrow-left px-2"}),"Go Back"))))))))}}}]);
//# sourceMappingURL=53.84590b1b.chunk.js.map