(this["webpackJsonpreducks-redux-queue"]=this["webpackJsonpreducks-redux-queue"]||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),s=n.n(c),i=n(28),u=n.n(i),l=n(37),d=n(125),m=n(80),p=n(73),f=n(21),h=n.n(f),b=n(16),v=n(74),E=n(40),g=n(124),w=n(25),N=n(82),y=n(19),x="@REDUCKS/ENQUEUE",O="@REDUCKS/DEQUEUE",k="@REDUCKS/COMMENCED",j="@REDUCKS/CEASED",S=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+e()+"-"+e()+"_"+e()+"-"+e()+"_"+e()+e()+e()},T=(r={jobs:[],running:!1},a={},Object(w.a)(a,x,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.jobs,a=void 0===n?[]:n;return Object(y.a)(Object(y.a)({},e),{},{jobs:[].concat(Object(N.a)(a),[t])})})),Object(w.a)(a,O,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.jobs,a=void 0===n?[]:n;if(0===a.length)return e;var r=a[0]||{},o=r.id;return o!==t.id?e:(a.shift(),Object(y.a)(Object(y.a)({},e),{},{jobs:a}))})),Object(w.a)(a,k,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(y.a)(Object(y.a)({},e),{},{running:!0})})),Object(w.a)(a,j,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(y.a)(Object(y.a)({},e),{},{running:!1})})),o=a,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,c=o[n];return c?c(e,a):e}),_=n(4),F=n.n(_),R=n(11),D=function(){return function(){var e=Object(R.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:k,payload:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(R.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:j,payload:!1});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=n(123),I=0,M=function(){var e=Object(R.a)(F.a.mark((function e(){var t,n,a,r,o,c,s,i,u,l,d,m,p=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=p.length>0&&void 0!==p[0]?p[0]:{},n=t.dispatch,!I){e.next=4;break}return e.abrupt("return");case 4:if(a=t.getState(),r=a.reducks,c=(o=void 0===r?{}:r).jobs,s=void 0===c?[]:c,i=o.running,!(s.length>0)){e.next=23;break}return!i&&n(D()),I+=1,u=s[0]||{},l=u.name,d=u.call,m=void 0===d?function(){}:d,e.prev=12,e.next=15,m({store:t,job:u});case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(12),console.warn("Task ".concat(l," has failed")),console.warn(e.t0);case 21:return U(t,u),e.abrupt("return");case 23:return n(C()),e.abrupt("return");case 25:case"end":return e.stop()}}),e,null,[[12,17]])})));return function(){return e.apply(this,arguments)}}(),U=function(e,t){(0,e.dispatch)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(R.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:O,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),I=I-1||0,M(e)},P=n(126),W=Object(P.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0,n=t.store,a=t.config,r=void 0===a?{}:a,o=r.onStart,c=r.onFinish;return e.pipe(Object(q.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type;t!==x&&t!==O||M(n,t),t===k&&"function"===typeof o&&o(),t===j&&"function"===typeof c&&c()})))})),L=Object(b.c)({routing:E.routerReducer,toastr:f.reducer,reducks:T}),A=Object(g.a)();var J=function(e){return{add:function(t,n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return function(){var n=Object(R.a)(F.a.mark((function n(a){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:x,payload:{id:S(),name:e,call:t}});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}},X=n(26),B="import React from 'react';\nimport { toastr } from 'react-redux-toastr';\n                \nconst Simple = (props = {}) => {\n  const { add } = props;\n\n  return <button \n          onClick={() =>\n            add('addToQueue', async ({ job }) => {\n              const { id, name } = job;\n\n              console.log('About to wait');\n              console.log(id, name);\n              await new Promise(resolve =>\n                setTimeout(() => {\n                  console.log('Waited 5000ms');\n                  toastr.success('Success', 'Well done for waiting.');\n                  resolve();\n                }, 5000)\n              );\n            })}\n          type=\"button\">\n            Enqueue\n          </button>\n};\n\nexport default Simple;",$="import React from 'react';\nimport { toastr } from 'react-redux-toastr';\n                \nconst Fifo = (props = {}) => {\n  const { add } = props;\n\n  return <button \n          onClick={() => {\n            const array = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];\n\n            array.map(item => {\n              return add('pushJob', async () => {\n                await new Promise(resolve =>\n                  setTimeout(() => {\n                    toastr.success(`Job The ${item}`, 'Hi there!');\n                    resolve();\n                  }, 1000)\n                );\n              });\n            });\n          }}\n          type=\"button\">\n            Enqueue\n          </button>\n};\n\nexport default Fifo;",Q="import { createStore, applyMiddleware, compose } from 'redux';\nimport thunk from 'redux-thunk';\nimport { createEpicMiddleware } from 'redux-observable';\n\nimport rootReducer, { rootEpic } from '../reducers/rootReducer';\n\nconst epicMiddleware = createEpicMiddleware();\n\nexport default function configureStore({ initialState = {} }) {\n  const store = createStore(\n    rootReducer,\n    initialState,\n    compose(\n      applyMiddleware(thunk, epicMiddleware),\n      window.navigator.userAgent.includes('Chrome') &&\n        window.__REDUX_DEVTOOLS_EXTENSION__\n        ? window.__REDUX_DEVTOOLS_EXTENSION__()\n        : compose\n    )\n  );\n\n  epicMiddleware.run((action$, state$) => {\n    return rootEpic(action$, state$, {\n      store,\n      config: {\n        onStart: () => {\n          progress.start();\n        },\n        onFinish: () => {\n          progress.end();\n        }\n      }\n    });\n  });\n\n  return store;\n}",K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.add;return s.a.createElement("div",{className:"container pb-4"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card bg-secondary text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h2",{className:"card-title display-4"},"Simple"),s.a.createElement("p",{className:"card-text"},"Clicking the button below will add a single notfication job to the queue."),s.a.createElement("p",{className:"card-text"},"The behaviour of the queue system is demonstrated by the 5 second timeout within the Promise. In practice, this could be web request or some other long-running task."),s.a.createElement("button",{className:"btn btn-dark",onClick:function(){return t("addToQueue",function(){var e=Object(R.a)(F.a.mark((function e(t){var n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.job,a=n.id,r=n.name,console.log("About to wait"),console.log(a,r),e.next=6,new Promise((function(e){return setTimeout((function(){console.log("Waited 5000ms"),f.toastr.success("Success","Well done for waiting."),e()}),5e3)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Enqueue"),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(X.a,{text:B,language:"jsx",showLineNumbers:"true",theme:X.b,wrapLines:!0,codeBlock:!0})),s.a.createElement("hr",{className:"my-4"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h2",{className:"card-title display-4"},"FIFO FIFO, ","It's"," Off To Work We Go"),s.a.createElement("p",{className:"card-text"},"While you can use Reducks as a synchronous queue dispatcher,"," it's"," true purpose is to provide a strict First In, First Out (FIFO) so the execution order is consistentl and predictable."),s.a.createElement("p",{className:"card-text"},"Click below to add 5 promisified timeout jobs and watch them execute in order."),s.a.createElement("button",{className:"btn btn-dark",onClick:function(){["First","Second","Third","Fourth","Fifth"].map((function(e){return t("pushJob",Object(R.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout((function(){f.toastr.success("Job The ".concat(e),"Hi there!"),t()}),1e3)}));case 2:case"end":return t.stop()}}),t)}))))}))}},"Enqueue"),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(X.a,{text:$,language:"jsx",showLineNumbers:"true",theme:X.b,wrapLines:!0,codeBlock:!0}))))))};K.displayName="Simple";var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.add;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card bg-secondary text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h2",{className:"card-title display-4"},"Advanced"),s.a.createElement("p",{className:"card-text"},"Reducks can fire optional methods when a queue starts running and again when it finishes. This is useful for things like progress bars or notifications."),s.a.createElement("button",{className:"btn btn-dark",onClick:function(){["First","Second","Third","Fourth","Fifth"].map((function(e){return t("pushJob",Object(R.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout((function(){f.toastr.success("Job The ".concat(e),"Hi there!"),t()}),1e3)}));case 2:case"end":return t.stop()}}),t)}))))}))}},"Enqueue"),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(X.a,{text:Q,language:"jsx",showLineNumbers:"true",theme:X.b,wrapLines:!0,codeBlock:!0}))))))};V.displayName="Advanced";var H=n(79),G=n.n(H),z=(n(115),Object(l.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}),(function(e){return J(e)}))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.a.createElement("div",{className:"app container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"jumbotron bg-secondary text-white text-center"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 offset-lg-3"},s.a.createElement("img",{src:G.a,className:"img-fluid",alt:"Reducks"}))),s.a.createElement("h1",{className:"display-4"},s.a.createElement("span",{className:"sr-only"},"Reducks "),"(Redux Queue)"),s.a.createElement("p",{className:"lead"},"A redux-observable driven FIFO (first in - first out) queueing system for redux and redux-thunk."),s.a.createElement("p",{className:"lead"},"Reducks is also fully compatible with react-redux. Please see the source code of this page for examples."),s.a.createElement("hr",{className:"my-4"}),s.a.createElement("p",null,"On this page you will find interactive examples. Please consult the documentation for further details and a tutorial."),s.a.createElement("ul",{className:"list-inline"},s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{className:"btn btn-dark btn-lg",href:"https://github.com/PenguinOfWar/reducks-redux-queue",target:"_blank",rel:"noopener noreferrer",role:"button"},"Documentation")),s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{className:"btn btn-dark btn-lg",href:"https://github.com/PenguinOfWar/reducks-redux-queue/issues",target:"_blank",rel:"noopener noreferrer",role:"button"},"Support")))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"container pb-4"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card bg-secondary text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h2",{className:"card-title display-4"},"Demos & Examples"),s.a.createElement("p",{className:"card-text"},"The following examples are generic usage examples that assume you have either followed the tutorial to get started, or know enough that this will just make sense."))))))),s.a.createElement("div",{className:"row"},s.a.createElement(K,e)),s.a.createElement("div",{className:"row"},s.a.createElement(V,e)))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116),n(117);var Y=Object(m.a)();window.progress=new p.a({height:25,color:"red"});var Z=function(e){var t=e.initialState,n=void 0===t?{}:t,a=e.history,r=Object(b.e)(L,n,Object(b.d)(Object(b.a)(v.a,Object(E.routerMiddleware)(a),A),window.navigator.userAgent.includes("Chrome")&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():b.d));return A.run((function(e,t){return W(e,t,{store:r,config:{onStart:function(){window.progress.start()},onFinish:function(){window.progress.end()}}})})),r}({initialState:{},history:Y}),ee=s.a.createElement(l.Provider,{store:Z},s.a.createElement(d.b,{history:Y},s.a.createElement(d.a,{path:"*",component:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(z,e),s.a.createElement(h.a,{timeOut:4e3,newestOnTop:!1,preventDuplicates:!0,position:"bottom-right",getState:function(){return Z.getState().toastr},transitionIn:"fadeIn",transitionOut:"fadeOut",progressBar:!0,closeOnToastrClick:!0}))}})));u.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,n){e.exports=n.p+"static/media/logo.1dd749c0.png"},86:function(e,t,n){e.exports=n(119)}},[[86,152,153]]]);
//# sourceMappingURL=main.76d99114.chunk.js.map