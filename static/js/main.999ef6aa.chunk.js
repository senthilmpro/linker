(this["webpackJsonparchive-helper"]=this["webpackJsonparchive-helper"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(9),n(10),n(1)),i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},s=function(){return i().split("-").pop()},u=function(){var e=new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},m=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tmp0x",t=i(),n=u(),a=s(),r="".concat(n,"-").concat(e,"-").concat(a),c="opensource_movies";return{title:r,description:t,subject:t,collection:c,creator:e,guid:t}}(e),n="https://archive.org/upload/";return{url:n=(n=(n=(n=(n=n+"?title="+t.title)+"&description="+t.description)+"&subject="+t.subject)+"&creator="+t.creator)+"&collection="+t.collection,guid:t.guid,title:t.title}},d={generateLink:m,generateLinks:function(e,t){return Array(e).fill(0).map((function(){return m(t)}))}};n(11);function v(e){var t=Object(a.useState)("tmp0x"),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(4),s=Object(l.a)(i,2),u=s[0],m=s[1],v=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"LinkContainerBox"},d.generateLinks(u,c).map((function(e){return r.a.createElement("div",{style:{padding:"5px"}},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title))}))),r.a.createElement("div",{className:"EditSettings"},r.a.createElement("div",null,r.a.createElement("h3",null,"SETTINGS")),r.a.createElement("div",null,r.a.createElement("div",{className:"setting form-group row"},r.a.createElement("div",{class:"col-sm-2"},r.a.createElement("label",{for:"creator"},"Creator")),r.a.createElement("div",{class:"col-sm-2"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;t=t.trim(),o(t)},defaultValue:"tmp0x",class:"form-control"}))),r.a.createElement("div",{className:"setting form-group row"},r.a.createElement("div",{class:"col-sm-2"},r.a.createElement("label",{for:"count"},"Count")),r.a.createElement("div",{class:"col-sm-2"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;if(t&&/^\d+$/.test(t)){try{t=parseInt(t)}catch(n){t=4}m(t)}else m(t=0)},defaultValue:4,class:"form-control"}))),r.a.createElement("div",{className:"setting form-group row"},r.a.createElement("div",{class:"col-sm-2"}),r.a.createElement("div",{class:"col-sm-2"},r.a.createElement("button",{className:"btn btn-primary",onClick:v},"Refresh"))))))}function x(e){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",null,"Archive Link"),r.a.createElement(v,null))}var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.999ef6aa.chunk.js.map