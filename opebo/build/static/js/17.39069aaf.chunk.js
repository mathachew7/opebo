(this.webpackJsonpopebo=this.webpackJsonpopebo||[]).push([[17],{163:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(0),c=a.n(r),o=a(55),l=a(48),s=a(49),i=a(19),m=a(44),u=a(2),f=a(3),d=function(e){var t=e.item,a=e.url;return c.a.createElement("div",{className:"w-3/12 p-2 bg-cover"},c.a.createElement("img",{src:"".concat(f.a,"/").concat(a,"/photo/").concat(t._id),alt:t.name,className:"p-2",style:{maxHeight:"100%",maxWidth:"100%"}}))},x=function(e){var t=e.service;return c.a.createElement("div",{className:"mt-3 antialiased"},c.a.createElement(u.b,{className:"flex max-w-xl items-center bg-white border border-gray-300 hover:border-2 hover:border-orange-400 rounded overflow-hidden shadow-sm",to:"/sub-services/".concat(t._id)},c.a.createElement(d,{item:t,url:"service"}),c.a.createElement("div",{className:"w-7/12 p-4"},c.a.createElement("h1",{className:"text-black font-bold text-xl"},t.name),c.a.createElement("div",{className:"flex flex-row items-center items-baseline"},c.a.createElement("p",{className:" text-gray-600 text-xs"},"Category: "),c.a.createElement("span",{className:"ml-1 px-3 rounded-full align-middle text-center bg-red-400 text-gray-100 text-xs"},t.category&&t.category.name))),c.a.createElement("div",{className:"w-2/12 p-4"},c.a.createElement("i",{className:"fas fa-chevron-right text-xl md:text-2xl"}))))},p=a(45),b=a(7),h=a(20);t.default=Object(b.g)((function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),f=a[0],d=a[1],b=Object(r.useState)([]),g=Object(n.a)(b,2),y=g[0],E=g[1],v=Object(r.useState)(!1),N=Object(n.a)(v,2),w=(N[0],N[1]),j=Object(r.useState)(10),k=Object(n.a)(j,2),O=(k[0],k[1],Object(r.useState)(0)),C=Object(n.a)(O,2),S=(C[0],C[1]),T=Object(r.useState)(0),A=Object(n.a)(T,2),F=(A[0],A[1]),G=Object(r.useState)([]),P=Object(n.a)(G,2),U=(P[0],P[1],Object(r.useState)(!1)),I=Object(n.a)(U,2),R=I[0],D=I[1],_=Object(r.useState)({}),B=Object(n.a)(_,2),$=B[0],z=B[1];Object(r.useEffect)((function(){D(!0),Object(p.d)().then((function(e){e.error?w(e.error):d(e)})),function(e){D(!0),Object(p.e)(e).then((function(e){e.error?w(e.error):(D(!1),z(e))})),Object(p.g)(e).then((function(e){e.error?w(e.error):(D(!1),E(e),F(e.size),S(0))}))}(e.match.params.categoryId)}),[e]);var J;return c.a.createElement(c.a.Fragment,null,R?R&&c.a.createElement(h.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null),c.a.createElement("div",{className:"flex flex-col-reverse md:flex-row "},c.a.createElement("div",{className:"lg:w-1/2 p-3 md:p-5 md:overflow-y-scroll max-h-full bg-gray-100 "},c.a.createElement("div",{className:"p-2 py-5 md:px-5 border border-gray-400 "},c.a.createElement("h1",{className:"text-3xl font-bold text-black"},"How it works?"),c.a.createElement("p",{className:"flex flex-row justify-start items-start text-md text-black font-bold"},c.a.createElement("i",{className:"fas fa-cart-arrow-down text-lg bg-black text-white rounded-lg p-2"}),c.a.createElement("span",{className:"ml-3"},"Choose the type of service you want")),c.a.createElement("p",{className:"flex flex-row justify-start items-start text-md text-black font-bold"},c.a.createElement("i",{className:"fas fa-calendar-check p-2 text-lg bg-black rounded-lg text-white "}),c.a.createElement("span",{className:"ml-3 flex flex-col"},"Choose your desired date and time slot",c.a.createElement("span",{className:"text-xs font-normal text-gray-600"},"We service from 9:00 am to 9:00pm"))),c.a.createElement("p",{className:"flex flex-row justify-start items-start text-md text-black font-bold"},c.a.createElement("i",{className:"fas fa-glass-cheers text-lg bg-black text-white rounded-lg p-2"}),c.a.createElement("span",{className:"ml-3 flex flex-col"},"Enjoy hassle-free services with Opebo",c.a.createElement("span",{className:"text-xs font-normal text-gray-600"},"Our professional with get in touch with you one hour before the service."))),c.a.createElement("div",null,y.map((function(e,t){return c.a.createElement("div",{className:"col-md-3",key:t},c.a.createElement("h1",{className:"text-lg font-bold text-gray-900"},e.name),c.a.createElement("p",{className:"text-xs font-medium text-orange-500"},e.category.name),c.a.createElement("p",{className:"text-md font-sans font-normal"},e.description))}))))),c.a.createElement("div",{className:"lg:w-1/4 p-3 md:p-5 bg-white"},c.a.createElement("div",{className:"my-2 flex sm:flex-row flex-col"},c.a.createElement("div",{className:"flex flex-col mb-1 px-5 py-3 sm:mb-0 border border-gray-300"},c.a.createElement("h1",{className:"text-2xl text-left font-bold"},"Other popular categories"),f.map((function(e,t){return c.a.createElement(u.b,{to:"/services/".concat(e._id),key:t},c.a.createElement("button",{className:"mt-2 w-full px-4 py-2 bg-white border-2 border-black text-black hover:bg-black hover:text-white active:bg-orange active:text-white rounded font-bold",key:t},e.name))}))))),c.a.createElement("div",{className:"lg:w-2/3 p-3 md:px-5 md:overflow-y-scroll lg:border-l border-gray-400"},c.a.createElement("h2",{className:"font-bold text-3xl"},$.name),c.a.createElement("p",{className:"-mt-5 text-xs text-gray-500"},"Select your choice of services"),c.a.createElement("p",{className:"text-sm font-bold text-gray-800 mb-5"},(J=y)&&J.length>0?1===J.length?"".concat(J.length," service available."):"".concat(J.length," services available"):J&&J.length<1?"Sorry, No services available":void 0),y.map((function(e,t){return c.a.createElement("div",{className:"col-md-3",key:t},c.a.createElement(x,{service:e}))})))),c.a.createElement(l.a,null),c.a.createElement(s.a,null),c.a.createElement(o.a,null),c.a.createElement(m.a,null)))}))},43:function(e,t,a){e.exports=a.p+"static/media/logo-w.abbc65a9.png"},44:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2),o=a(43);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("footer",{className:"font-sans bg-black text-white pt-8 px-4 hover:text-orange-600"},r.a.createElement("div",{className:"mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between"},r.a.createElement("a",{href:"/",className:"block mr-4 w-1/3"},r.a.createElement("img",{src:o,className:"w-48 ",alt:"logo"})),r.a.createElement("div",{className:"w-2/3 flex text-sm mt-6 lg:mt-0"},r.a.createElement("ul",{className:"text-gray-700 list-none p-0 font-thin flex flex-col text-left"},r.a.createElement("div",{className:"inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide"},"Product"),r.a.createElement(c.b,{key:"Popular",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Popular"),r.a.createElement(c.b,{to:"/privacypolicy",key:"PrivacyPolicy",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Privacy Policy"),r.a.createElement(c.b,{to:"/disclaimer",key:"Disclaimer",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Disclaimer"),r.a.createElement(c.b,{to:"/cookiespolicy",key:"CookiesPolicy",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Cookies policy")),r.a.createElement("ul",{className:"text-gray-700 list-none p-0 font-thin flex flex-col text-left"},r.a.createElement("div",{className:"inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide"},"Company"),r.a.createElement(c.b,{to:"/termsandconditions",key:"TermsAndConditions",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Terms & Condition"),r.a.createElement(c.b,{to:"/enduserlicense",key:"EndUserLicense",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"EULA"),r.a.createElement(c.b,{to:"/returnrefundpolicy",key:"ReturnRefundPolicy",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Return, Refund policy"),r.a.createElement("div",null,r.a.createElement("a",{className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Works"))),r.a.createElement("ul",{className:"text-gray-700 list-none p-0 font-thin flex flex-col text-left"},r.a.createElement("div",{className:"inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide"},"Vendors"),r.a.createElement("div",null,r.a.createElement("a",{href:"/contact",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Contact")),r.a.createElement("div",null,r.a.createElement("a",{className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Vendor Login")),r.a.createElement("div",null,r.a.createElement("a",{href:"/",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Services")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/about",className:"inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline"},"Info")))),r.a.createElement("div",{className:"px-5 text-gray-700 flex justify-center"},r.a.createElement("div",{className:"inline-block text-center justify-center py-2 px-3 text-white uppercase font-bold tracking-wide"},"Find Us ON",r.a.createElement("div",{className:"flex pt-4"},r.a.createElement("a",{className:"block flex items-center text-white hover:text-orange-500 mr-6 no-underline",href:"https://wa.me/917042161702"},r.a.createElement("i",{className:"fab fa-whatsapp text-2xl"})),r.a.createElement("a",{className:"block flex items-center text-white hover:text-orange-500 mr-6 no-underline",href:"https://www.facebook.com/opeboindustries/"},r.a.createElement("i",{className:"fab fa-facebook text-2xl"})),r.a.createElement("a",{className:"block flex items-center text-white hover:text-orange-500 no-underline",href:"https://www.instagram.com/opeboindustries/"},r.a.createElement("i",{className:"fab fa-instagram text-2xl"})))))),r.a.createElement("div",{className:"pt-5 mt-4 flex flex-col text-gray-700 border-t border-gray-900 text-center"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/",className:"font-bold text-white hover:text-orange-500"}," ","OpeBo Industries"),". All rights reserved."),r.a.createElement("p",null,"\xa9Copyright ",(new Date).getFullYear()))))}},45:function(e,t,a){"use strict";a.d(t,"h",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"j",(function(){return m})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return f})),a.d(t,"g",(function(){return d})),a.d(t,"k",(function(){return x})),a.d(t,"l",(function(){return p})),a.d(t,"b",(function(){return b})),a.d(t,"i",(function(){return h}));var n=a(3),r=a(46),c=a.n(r),o=function(e){return fetch("".concat(n.a,"/services?sortBy=").concat(e,"&order=desc&limit=6"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(){return fetch("".concat(n.a,"/categories?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e){return fetch("".concat(n.a,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e){return fetch("".concat(n.a,"/service/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},m=function(e){return fetch("".concat(n.a,"/subService/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=function(){return fetch("".concat(n.a,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},f=function(e){var t=c.a.stringify(e);return fetch("".concat(n.a,"/search?").concat(t),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},d=function(e){return fetch("".concat(n.a,"/services/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(e){return fetch("".concat(n.a,"/subServices/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},p=function(e,t){return fetch("".concat(n.a,"/api/v1/rzp_capture/").concat(e,"/").concat(t),{method:"GET",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},b=function(e,t,a){return fetch("".concat(n.a,"/order/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({order:a})}).then((function(e){return console.log(e.json()),e.json()})).catch((function(e){return console.log(e)}))},h=function(e){return fetch("".concat(n.a,"/singleOrder/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},46:function(e,t,a){"use strict";var n=a(47),r=a(22);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),a(decodeURIComponent(r),c,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"===typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(a,e)].join("")};case"bracket":return function(t,a){return null===a?c(t,e):[c(t,e),"[]=",c(a,e)].join("")};default:return function(t,a){return null===a?c(t,e):[c(t,e),"=",c(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return c(n,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(a(n,e,o.length))})),o.join("&")}return c(n,t)+"="+c(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},47:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(51),o=a(52);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"my-6 font-sans container m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center"},r.a.createElement("div",{className:"w-full lg:w-1/2"},r.a.createElement("img",{className:"w-full",src:c,alt:"app"})),r.a.createElement("div",{className:"w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start"},r.a.createElement("h1",{className:"my-4 font-bold text-4xl"},"App Features"),r.a.createElement("p",{className:"leading-normal mb-4 w-2/3 text-gray-700"},r.a.createElement("span",{className:"font-bold text-xl text-orange-500"},"Download")," ","our app from playstore and have a better experience with our services with offers and much more functionalities."),r.a.createElement("a",{href:"http://raboninco.com/dCbd",className:"w-1/2",target:"_blank"},r.a.createElement("img",{src:o,alt:"play-store"})))))}},49:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2);t.a=function(){return r.a.createElement(c.b,{to:"/"},r.a.createElement("section",{className:"bg-green-100 font-sans text-gray-900 px-4 py-4 lg:px-4",role:"alert"},r.a.createElement("div",{className:"container items-center flex max-w-xl m-auto leading-none"},r.a.createElement("span",{className:"flex rounded-full bg-green-400 uppercase px-4 py-2 text-md text-white font-bold mr-3"},"New"),r.a.createElement("span",{className:"mr-2 text-left mr-auto"},"New Feature! It is a long established fact that a reader will be distracted."),r.a.createElement("span",{className:"opacity-75 h-4 w-4"},r.a.createElement("i",{className:"fas fa-chevron-right"})))))}},51:function(e,t,a){e.exports=a.p+"static/media/app-opebo.9ddf75d3.svg"},52:function(e,t,a){e.exports=a.p+"static/media/playstore.e57ad32c.png"},55:function(e,t,a){"use strict";var n=a(18),r=a(17),c=a(12),o=a(0),l=a.n(o),s=a(9);t.a=function(){var e,t=Object(o.useState)({email:"",error:"",success:!1}),a=Object(c.a)(t,2),i=a[0],m=a[1],u=i.email,f=i.success,d=i.error;return l.a.createElement("section",null,l.a.createElement("div",{className:"flex alert alert-info justify-center items-center bg-green-500 text-white py-1",style:{display:f?"":"none"}},"Thank You for subscribing us!"),l.a.createElement("div",{className:"flex alert alert-danger justify-center items-center bg-red-500 text-white py-1",style:{display:d?"":"none"}},d),l.a.createElement("div",{className:"w-full bg-orange-500 bg-no-repeat font-sans"},l.a.createElement("div",{className:" p-10 py-20 flex flex-col flex-wrap justify-center content-center"},l.a.createElement("div",{className:"m-0 p-0 text-3xl  text-white  antialiased  text-center"},"Get Our Updates"),l.a.createElement("div",{className:" m-0 p-0 text-xl text-white antialiased text-center"},"Find out about updates and other news"),l.a.createElement("div",{className:"mt-3 flex flex-row flex-wrap"},l.a.createElement("input",{type:"text",onChange:(e="email",function(t){m(Object(r.a)({},i,Object(n.a)({error:!1},e,t.target.value)))}),value:u,className:" text-black text-base rounded-l rounded-r-none w-4/6 md:w-2/3 p-3 px-4 placeholder-gray-700",placeholder:"example@mail.com"}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),m(Object(r.a)({},i,{error:!1})),Object(s.d)({email:u}).then((function(e){e.error?m(Object(r.a)({},i,{error:e.error,success:!1})):m(Object(r.a)({},i,{email:"",error:"",success:!0}))}))},className:"p-3 w-2/6 md:w-1/3 rounded-r rounded-r-none bg-black font-semibold text-base text-white hover:bg-gray-900",type:"button"},"Subscribe")))))}}}]);
//# sourceMappingURL=17.39069aaf.chunk.js.map