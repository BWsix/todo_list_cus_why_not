(this.webpackJsonptester003=this.webpackJsonptester003||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(10),a=n.n(r),s=(n(26),n(8)),o=n(14),u=n(15),d=(n(27),n(12)),l=n(4);function j(e){var t=e.task,n=e.handle_check,c=e.index;return Object(l.jsx)(d.b,{draggableId:t.key,index:c,children:function(e,c){return Object(l.jsx)("div",Object(s.a)(Object(s.a)(Object(s.a)({onClick:function(){return n(t.key)},ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(l.jsxs)("div",{className:"Task",style:{backgroundColor:c.isDragging?"#2aa198":"#222"},children:[Object(l.jsx)("input",{type:"checkbox",checked:t.is_fin,onChange:function(){return null},className:"Task-check"}),Object(l.jsx)("label",{children:t.name})]})}))}})}function b(e){var t=e.tasks,n=e.handle_check;return t.map((function(e,t){return Object(l.jsx)(j,{task:e,index:t,handle_check:n},e.key)}))}n(35);var f=n(43),h=n(13),O=(n(41),n(37),n(21));n(39);h.a.initializeApp({apiKey:"AIzaSyBIi3TG_NqXzCjwzl7g7IdcsSICfeUm8yI",authDomain:"test01-e5d31.firebaseapp.com",projectId:"test01-e5d31",storageBucket:"test01-e5d31.appspot.com",messagingSenderId:"858569537263",appId:"1:858569537263:web:946b2bcbfd84c98962cd1a",measurementId:"G-L5WS4LDD4M"});var p=h.a.auth(),x=h.a.firestore();var k=function(){var e=Object(O.a)(p),t=Object(u.a)(e,1)[0],n=Object(c.useRef)(),i=Object(c.useState)(""),r=Object(u.a)(i,2),a=r[0],j=r[1],k=Object(c.useState)([]),g=Object(u.a)(k,2),v=g[0],m=g[1],C=Object(c.useState)(!1),y=Object(u.a)(C,2),I=y[0],_=y[1];function S(e){var t=Object(o.a)(v),n=t.find((function(t){return t.key===e}));n.is_fin=!n.is_fin,m(t)}function w(){var e=a;""!==a&&(m((function(t){return[].concat(Object(o.a)(t),[{name:e,is_fin:!1,key:Object(f.a)()}])})),j(""),n.current.focus())}return Object(c.useEffect)((function(){I&&x.collection("Todo List").doc(p.currentUser.uid).get().then((function(e){m(e.data().file)}))}),[I]),p.onAuthStateChanged((function(e){return _(e)})),Object(c.useEffect)((function(){I&&x.collection("Todo List").doc(p.currentUser.uid).set({file:v,uid:p.currentUser.uid},{merge:!0})}),[v]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h2",{children:"todo list"}),t?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"Form",children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{ref:n,value:a,placeholder:"add a task...",onChange:function(e){return j(e.target.value)},onKeyDown:function(e){return"Enter"!==e.key?null:w()}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:w,children:"add"}),Object(l.jsx)("button",{onClick:function(){var e=Object(o.a)(v).sort((function(e,t){return e.name.localeCompare(t.name)}));m(e)},children:"sort"}),Object(l.jsx)("button",{onClick:function(){m(v.filter((function(e){return!e.is_fin})))},children:"delete"}),Object(l.jsx)("button",{onClick:function(){m([])},children:"clear all"}),Object(l.jsx)("button",{onClick:function(){p.currentUser&&p.signOut()},children:"sign out"})]})]}),Object(l.jsx)(d.a,{onDragEnd:function(e){return function(e){var t=e.destination,n=e.source;if(e.destination&&t.index!==n.index){var c=Object(o.a)(v),i=c[n.index];c.splice(n.index,1),c.splice(t.index,0,i),m(c)}}(e)},children:Object(l.jsx)(d.c,{droppableId:"TaskList",children:function(e,t){return Object(l.jsxs)("div",Object(s.a)(Object(s.a)({className:"DropPanel",ref:e.innerRef},e.droppableProps),{},{children:[Object(l.jsx)(b,{tasks:v,handle_check:S}),e.placeholder]}))}})})]}):Object(l.jsx)("button",{onClick:function(){var e=new h.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"login with google"})]})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f1b43b51.chunk.js.map