webpackHotUpdate("main",{"./src/pages/app/app.js":
/*!******************************!*\
  !*** ./src/pages/app/app.js ***!
  \******************************/
/*! no static exports found */function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(s(/*! toastr */"./node_modules/toastr/toastr.js"));var o=t(s(/*! ./app.html */"./src/pages/app/app.html"));function t(e){return e&&e.__esModule?e:{default:e}}s(/*! ./app.scss */"./src/pages/app/app.scss");function r(e,n,s){var o=this,t=n.getToken(),r=n.getData().username,a=n.getThisUser(),i=[];function u(s){console.log(!s.isSeenMsgFrom),console.log(o.unseenMesgNum>0),!s.isSeenMsgFrom&&o.unseenMesgNum>0&&(o.unseenMesgNum=o.unseenMesgNum-1,s.isSeenMsgFrom=!0,e.seenMessage({idUser:n.getThisUser().id,nameConversation:s.name},n.getToken(),function(e){console.log("seen msg"),console.log({"people.name":s.name}),e?console.log(e):console.log("err")}))}o.$onInit=function(){o.listPeople=[],o.listMessage=[],o.curConverName="",o.thisUser=a,o.curConversationId=-1,o.unseenMesgNum=0,e.getListConversation(t,{username:r},function(e){i=e.list,o.listPeople=e.list.filter(function(e){return e.Messages.length}).map(function(e){return e.isSeenMsgFrom=!e.lastMessFontWeight,e}),o.unseenMesgNum=e.numNewMess,s.connect(),s.onConnect(function(){e.list.map(function(e){return e.id}).forEach(function(e){s.joinRoom({username:r,idConversation:e})})}),o.listPeople.sort(function(e,n){var s=e.Messages[e.Messages.length-1],o=n.Messages[n.Messages.length-1];return new Date(o.sendAt)-new Date(s.sendAt)}),console.log({"self.listPeople":o.listPeople})}),s.onNewConversation(function(e){console.log({data:e}),i.unshift({Messages:[],id:6,name:e.name}),s.joinRoom({username:r,idConversation:e.id})})},o.chooseConversation=function(e){e.Messages.forEach(function(e){return e.isSent=function(){return e.User.username===r},e}),o.listMessage=e.Messages,o.curConverName=e.name,o.curConversationId=e.id,u(e)},o.sendMessageSuccess=function(e){e.isSent=function(){return e.User.username===r},console.log({data:e}),console.log({_listPeople:i});var n=function(e,n){var s=!0,o=!1,t=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done);s=!0){var i=r.value;if(n(i))return i}}catch(e){o=!0,t=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw t}}return null}(o.listPeople,function(n){return n.Messages[0].idConversation===e.idConversation});if(n&&n.Messages&&n.Messages.length)n.Messages.push(e),++o.unseenMesgNum,function(e){e.name===o.curConverName?u({name:o.curConverName,isSeenMsgFrom:!1}):e.isSeenMsgFrom=!1}(n);else{console.log({receivMsgConverNewPerson:n});var s=i.filter(function(n){return n.id===e.User.id});console.log({newPeople:s})}}}r.$inject=["api","auth","io"],n.default={name:"app",options:{template:o.default,controller:r,controllerAs:"self"}}}});