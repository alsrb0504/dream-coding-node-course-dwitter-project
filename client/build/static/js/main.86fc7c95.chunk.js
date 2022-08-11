(this["webpackJsonpdwitter-app"]=this["webpackJsonpdwitter-app"]||[]).push([[0],{48:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(40),s=n.n(c),u=(n(48),n(5)),o=n(0),i=Object(r.memo)((function(e){var t=e.username,n=e.onLogout,r=e.onMyTweets,a=e.onAllTweets;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("img",{src:"./img/logo.png",alt:"Dwitter Logo",className:"logo-img"}),Object(o.jsx)("h1",{className:"logo-name",children:"Dwitter"}),t&&Object(o.jsxs)("span",{className:"logo-user",children:["@",t]})]}),t&&Object(o.jsxs)("nav",{className:"menu",children:[Object(o.jsx)("button",{onClick:a,children:"All Tweets"}),Object(o.jsx)("button",{onClick:r,children:"My Tweets"}),Object(o.jsx)("button",{className:"menu-item",onClick:n,children:"Logout"})]})]})})),l=n(37),h=n(7),j=Object(r.memo)((function(e){var t=e.text,n=e.isAlert;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("p",{className:"banner ".concat(n?"banner-red":"banner-green"),children:t})})})),f=n(2),b=n.n(f),p=n(6),m=function(e){var t=e.tweetService,n=e.onError,a=Object(r.useState)(""),c=Object(h.a)(a,2),s=c[0],u=c[1],i=function(){var e=Object(p.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),t.postTweet(s).then((function(){u("")})).catch(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"tweet-form",onSubmit:i,children:[Object(o.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:s,required:!0,autoFocus:!0,onChange:function(e){u(e.target.value)},className:"form-input tweet-input"}),Object(o.jsx)("button",{type:"submit",className:"form-btn",children:"Post"})]})};function d(e){var t=new Date(Date.parse(e)),n=new Date,r=Math.floor((n-t)/1e3);if(r<=1)return"just now";if(r<20)return r+" seconds ago";if(r<40)return"half a minute ago";if(r<60)return"less than a minute ago";if(r<=90)return"one minute ago";if(r<=3540)return Math.round(r/60)+" minutes ago";if(r<=5400)return"1 hour ago";if(r<=86400)return Math.round(r/3600)+" hours ago";if(r<=129600)return"1 day ago";if(r<604800)return Math.round(r/86400)+" days ago";if(r<=777600)return"1 week ago";var a=t.toLocaleDateString("default",{month:"long"});return"on ".concat(a," ").concat(t.getDate())}var O=Object(r.memo)((function(e){var t=e.url,n=e.name;return Object(o.jsx)("div",{children:t?Object(o.jsx)("img",{src:t,alt:"avatar",className:"avatar-img"}):Object(o.jsx)("div",{className:"avatar-txt",children:n.charAt(0)})})})),v=function(e){var t=e.tweet,n=e.onUpdate,a=e.onClose,c=Object(r.useState)(t.text),s=Object(h.a)(c,2),u=s[0],i=s[1],l=function(){var e=Object(p.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),n(t.id,u),a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"edit-tweet-form",onSubmit:l,children:[Object(o.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:u,required:!0,autoFocus:!0,onChange:function(e){i(e.target.value)},className:"form-input tweet-input"}),Object(o.jsxs)("div",{className:"edit-tweet-form-action",children:[Object(o.jsx)("button",{type:"submit",className:"form-btn-update",children:"Update"}),Object(o.jsx)("button",{type:"button",className:"form-btn-cancel",onClick:a,children:"Cancel"})]})]})},w=Object(r.memo)((function(e){var t=e.tweet,n=e.owner,a=e.onDelete,c=e.onUpdate,s=e.onUsernameClick,u=t.id,i=t.username,l=t.name,j=t.url,f=t.text,b=t.createdAt,p=Object(r.useState)(!1),m=Object(h.a)(p,2),w=m[0],g=m[1];return Object(o.jsxs)("li",{className:"tweet",children:[Object(o.jsxs)("section",{className:"tweet-container",children:[Object(o.jsx)(O,{url:j,name:l}),Object(o.jsxs)("div",{className:"tweet-body",children:[Object(o.jsx)("span",{className:"tweet-name",children:l}),Object(o.jsxs)("span",{className:"tweet-username",onClick:function(){return s(t)},children:["@",i]}),Object(o.jsxs)("span",{className:"tweet-date",children:[" \xb7 ",d(b)]}),Object(o.jsx)("p",{children:f}),w&&Object(o.jsx)(v,{tweet:t,onUpdate:c,onClose:function(){return g(!1)}})]})]}),n&&Object(o.jsxs)("div",{className:"tweet-action",children:[Object(o.jsx)("button",{className:"tweet-action-btn",onClick:function(){return a(u)},children:"x"}),Object(o.jsx)("button",{className:"tweet-action-btn",onClick:function(){return g(!0)},children:"\u270e"})]})]})})),g=n(3),x=n(4),k=function(e){var t=e.onSignUp,n=e.onLogin,a=Object(r.useState)(!1),c=Object(h.a)(a,2),s=c[0],u=c[1],i=Object(r.useState)(""),l=Object(h.a)(i,2),f=l[0],b=l[1],p=Object(r.useState)(""),m=Object(h.a)(p,2),d=m[0],O=m[1],v=Object(r.useState)(""),w=Object(h.a)(v,2),g=w[0],x=w[1],k=Object(r.useState)(""),y=Object(h.a)(k,2),S=y[0],N=y[1],T=Object(r.useState)(""),C=Object(h.a)(T,2),E=C[0],U=C[1],D=Object(r.useState)(""),L=Object(h.a)(D,2),A=L[0],M=L[1],I=Object(r.useState)(!1),P=Object(h.a)(I,2),B=P[0],F=P[1],H=function(e){M(e.toString()),F(!0)},J=function(e){var t=e.target,n=t.name,r=t.value,a=t.checked;switch(n){case"username":return b(r);case"password":return O(r);case"name":return x(r);case"email":return N(r);case"url":return U(r);case"signup":return u(a)}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{text:A,isAlert:B}),Object(o.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),s?t(f,d,g,S,E).catch(H):n(f,d).catch(H)},children:[Object(o.jsx)("input",{name:"username",type:"text",placeholder:"Id",value:f,onChange:J,className:"form-input",required:!0}),Object(o.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:d,className:"form-input",onChange:J}),s&&Object(o.jsx)("input",{name:"name",type:"text",placeholder:"Name",value:g,onChange:J,className:"form-input",required:!0}),s&&Object(o.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:S,onChange:J,className:"form-input",required:!0}),s&&Object(o.jsx)("input",{name:"url",type:"url",placeholder:"Profile Image URL",value:E,onChange:J,className:"form-input"}),Object(o.jsxs)("div",{className:"form-signup",children:[Object(o.jsx)("input",{name:"signup",id:"signup",type:"checkbox",onChange:J,checked:s}),Object(o.jsx)("label",{htmlFor:"signup",children:" Create a new account?"})]}),Object(o.jsx)("button",{className:"form-btn auth-form-btn",type:"submit",children:s?"Sign Up":"Sign In"})]})]})},y=Object(r.createContext)({}),S=Object(r.createRef)();function N(e){var t=e.authService,n=e.authErrorEventBus,a=e.children,c=Object(r.useState)(void 0),s=Object(h.a)(c,2),u=s[0],l=s[1];Object(r.useImperativeHandle)(S,(function(){return u?u.token:void 0})),Object(r.useEffect)((function(){n.listen((function(e){console.log(e),l(void 0)}))}),[n]),Object(r.useEffect)((function(){t.me().then(l).catch(console.error)}),[t]);var j=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(n,r,a,c,s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.signup(n,r,a,c,s).then((function(e){return l(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),[t]),f=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.login(n,r).then((function(e){return l(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),m=Object(r.useCallback)(Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.logout().then((function(){return l(void 0)})));case 1:case"end":return e.stop()}}),e)}))),[t]),d=Object(r.useMemo)((function(){return{user:u,signUp:j,logIn:f,logout:m}}),[u,j,f,m]);return Object(o.jsx)(y.Provider,{value:d,children:u?a:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i,{}),Object(o.jsx)(k,{onSignUp:j,onLogin:f})]})})}var T=function(){function e(){Object(g.a)(this,e)}return Object(x.a)(e,[{key:"listen",value:function(e){this.callback=e}},{key:"notify",value:function(e){this.callback(e)}}]),e}(),C=function(){return Object(r.useContext)(y)},E=Object(r.memo)((function(e){var t=e.tweetService,n=e.username,a=e.addable,c=Object(r.useState)([]),s=Object(h.a)(c,2),i=s[0],f=s[1],b=Object(r.useState)(""),p=Object(h.a)(b,2),d=p[0],O=p[1],v=Object(u.f)(),g=C().user;Object(r.useEffect)((function(){t.getTweets(n).then((function(e){return f(Object(l.a)(e))})).catch(N);var e=t.onSync((function(e){return x(e)}));return function(){return e()}}),[t,n,g]);var x=function(e){f((function(t){return[e].concat(Object(l.a)(t))}))},k=function(e){return t.deleteTweet(e).then((function(){return f((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(e){return O(e.toString())}))},y=function(e,n){return t.updateTweet(e,n).then((function(e){return f((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))})).catch((function(e){return e.toString()}))},S=function(e){return v.push("/".concat(e.username))},N=function(e){O(e.toString()),setTimeout((function(){O("")}),3e3)};return Object(o.jsxs)(o.Fragment,{children:[a&&Object(o.jsx)(m,{tweetService:t,onError:N}),d&&Object(o.jsx)(j,{text:d,isAlert:!0,transient:!0}),0===i.length&&Object(o.jsx)("p",{className:"tweets-empty",children:"No Tweets Yet"}),Object(o.jsx)("ul",{className:"tweets",children:i.map((function(e){return Object(o.jsx)(w,{tweet:e,owner:e.username===g.username,onDelete:k,onUpdate:y,onUsernameClick:S},e.id)}))})]})})),U=function(e){var t=e.tweetService;return Object(o.jsx)(E,{tweetService:t,addable:!0})},D=function(e){var t=e.tweetService,n=Object(u.g)().username;return Object(o.jsx)(E,{tweetService:t,username:n,addable:!1})};var L=function(e){var t=e.tweetService,n=Object(u.f)(),r=C(),a=r.user,c=r.logout;return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i,{username:a.username,onLogout:function(){window.confirm("Do you want to log out?")&&(c(),n.push("/"))},onAllTweets:function(){n.push("/")},onMyTweets:function(){n.push("/".concat(a.username))}}),Object(o.jsxs)(u.c,{children:["(",Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(U,{tweetService:t})}),Object(o.jsx)(u.a,{exact:!0,path:"/:username",children:Object(o.jsx)(D,{tweetService:t})})]}),")"]})]})},A=function(){function e(t,n){Object(g.a)(this,e),this.http=t,this.tokenStorage=n}return Object(x.a)(e,[{key:"signup",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n,r,a,c){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.fetch("/auth/signup",{method:"POST",body:JSON.stringify({username:t,password:n,name:r,email:a,url:c})});case 2:return s=e.sent,this.tokenStorage.saveToken(s.token),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a,c){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.fetch("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:n})});case 2:return r=e.sent,this.tokenStorage.saveToken(r.token),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"me",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.tokenStorage.getToken(),e.next=3,this.http.fetch("/auth/me",{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.tokenStorage.clearToken();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),M=function(){function e(t,n,r){Object(g.a)(this,e),this.http=t,this.tokenStorage=n,this.socket=r}return Object(x.a)(e,[{key:"getTweets",value:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?"?username=".concat(t):"",e.abrupt("return",this.http.fetch("/tweets".concat(n),{method:"GET",headers:this.getHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"postTweet",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/tweets",{method:"POST",headers:this.getHeaders(),body:JSON.stringify({text:t,username:"ellie",name:"ellie"})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTweet",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/tweets/".concat(t),{method:"DELETE",headers:this.getHeaders()}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTweet",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/tweets/".concat(t),{method:"PUT",headers:this.getHeaders(),body:JSON.stringify({text:n})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getHeaders",value:function(){var e=this.tokenStorage.getToken();return{Authorization:"Bearer ".concat(e)}}},{key:"onSync",value:function(e){return this.socket.onSync("tweets",e)}}]),e}(),I=n(27),P=n(32),B=function(){function e(t,n){Object(g.a)(this,e),this.baseURL=t,this.authErrorEventBus=n}return Object(x.a)(e,[{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(p.a)(b.a.mark((function e(t,n){var r,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseURL).concat(t),Object(P.a)(Object(P.a)({},n),{},{headers:Object(P.a)({"Content-Type":"application/json"},n.headers)}));case 2:return r=e.sent,e.prev=3,e.next=6,r.json();case 6:a=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:if(!(r.status>299||r.status<200)){e.next=19;break}if(c=a&&a.message?a.message:"something went wrong",s=new Error(c),401!==r.status){e.next=18;break}return this.authErrorEventBus.notify(s),e.abrupt("return");case 18:throw s;case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t,n){return e.apply(this,arguments)}}())}]),e}(),F="token",H=function(){function e(){Object(g.a)(this,e)}return Object(x.a)(e,[{key:"saveToken",value:function(e){localStorage.setItem(F,e)}},{key:"getToken",value:function(){return localStorage.getItem(F)}},{key:"clearToken",value:function(){localStorage.clear(F)}}]),e}(),J=n(43),q=function(){function e(t,n){Object(g.a)(this,e),this.io=Object(J.a)(t,{auth:function(e){return e({token:n()})}}),this.io.on("connect_error",(function(e){console.log("socket error",e.message)}))}return Object(x.a)(e,[{key:"onSync",value:function(e,t){var n=this;return this.io.connected||this.io.connect(),this.io.on(e,(function(e){return t(e)})),function(){return n.io.off(e)}}}]),e}(),R="http://localhost:8080",z=new H,G=new T,Y=new B(R,G),_=new A(Y,z),K=new q(R,(function(){return z.getToken()})),Q=new M(Y,z,K);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(I.a,{children:Object(o.jsx)(N,{authService:_,authErrorEventBus:G,children:Object(o.jsx)(L,{tweetService:Q})})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.86fc7c95.chunk.js.map