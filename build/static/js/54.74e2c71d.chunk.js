(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[54],{141:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a(17),o=a(12),l=a(0),c=a.n(l),i=a(2),s=a(7),m=a(9),d=a(27);t.default=function(){var e=Object(l.useState)({otp:"",error:"",loading:!1,redirectToReferrer:!1}),t=Object(o.a)(e,2),a=t[0],u=t[1],b=a.otp,f=a.loading,p=a.error,g=a.redirectToReferrer,v=Object(m.e)().user,x=function(e){e.preventDefault(),u(Object(n.a)({},a,{error:!1,loading:!0})),Object(m.f)({otp:b}).then((function(e){e.error?u(Object(n.a)({},a,{error:e.error,loading:!1})):Object(m.b)(e,(function(){u(Object(n.a)({},a,{redirectToReferrer:!0}))}))}))};return c.a.createElement("div",null,f&&c.a.createElement("div",{className:"flex alert alert-info justify-center items-center bg-orange-500 text-white py-4"},c.a.createElement("h2",{className:"text-white"},"Loading...")),c.a.createElement("div",{className:"flex alert alert-danger justify-center items-center bg-red-500 text-white py-1",style:{display:p?"":"none"}},p),function(){return c.a.createElement("div",{className:"min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8"},c.a.createElement("div",{className:"max-w-md w-full"},c.a.createElement("div",null,c.a.createElement("img",{className:"mx-auto h-24 mt-10 w-auto",src:d,alt:"OpeBo"}),c.a.createElement("h2",{className:"mt-10 text-center text-3xl leading-9 font-sans font-bold text-black"},"Hi, Welcome back!")),c.a.createElement("form",{className:"mt-8",action:"#",method:"POST"},c.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),c.a.createElement("div",{className:"rounded-md shadow-sm"},c.a.createElement("div",null,c.a.createElement("input",{"aria-label":"OTP",name:"otp",type:"tel",required:!0,onChange:(e="otp",function(t){u(Object(n.a)({},a,Object(r.a)({error:!1},e,t.target.value)))}),className:"appearance-none rounded-none relative bg-gray-300 block w-full px-3 py-2 border border-gray-100 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Enter OTP",value:b}))),c.a.createElement("div",{className:"mt-6"},c.a.createElement("button",{onClick:x,type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},c.a.createElement("span",{className:"absolute left-0 inset-y pl-3"},c.a.createElement("svg",{className:"h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150",fill:"currentColor",viewBox:"0 0 20 20"},c.a.createElement("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}))),"Sign In"),c.a.createElement("div",{className:"text-sm leading-5 mt-4 text-center"},c.a.createElement(i.b,{to:"/",className:"font-medium text-orange-500 hover:text-gray-900 focus:outline-none focus:underline transition ease-in-out duration-150"},"Go Back"))))));var e}(),g?c.a.createElement(s.a,{to:"/user/dashboard/".concat(v._id)}):Object(m.e)()?c.a.createElement(s.a,{to:"/"}):void 0)}}}]);
//# sourceMappingURL=54.74e2c71d.chunk.js.map