(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(10),a=n.n(r),o=(n(15),n(5)),u=n(3),i=n.n(u),l=n(4),j=n(2),b=(n(17),n(18),n(0)),d=function(e){var t=e.selectedCategory,n=e.selectCategory,s=e.selectDifficulty,r=e.selectedDifficulty,a=Object(c.useState)([]),o=Object(j.a)(a,2),u=o[0],d=o[1];return Object(c.useEffect)((function(){return function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,d(t.trivia_categories);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){d([])}}),[]),Object(b.jsxs)("div",{className:"select-card",children:[Object(b.jsx)("div",{className:"custom-select",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:"diff-span",children:"difficulty:"}),Object(b.jsxs)("select",{value:r,onChange:s,children:[Object(b.jsx)("option",{value:"easy",children:"Easy"}),Object(b.jsx)("option",{value:"medium",children:"Medium"}),Object(b.jsx)("option",{value:"hard",children:"Hard"})]}),Object(b.jsx)("span",{className:"custom-arrow"})]})}),Object(b.jsx)("div",{className:"custom-select",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:"category-span",children:"category:"}),Object(b.jsxs)("select",{value:t,onChange:n,children:[Object(b.jsx)("option",{value:"",children:"Any Category"}),u.length>0?u.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)})):null]}),Object(b.jsx)("span",{className:"custom-arrow"})]})})]})},O=(n(20),function(e){var t=e.question,n=e.totalQuestions,c=e.answers,s=e.checkAnswer,r=e.questionNumber,a=e.userAnswer;return Object(b.jsxs)("div",{className:"question-card",children:[Object(b.jsxs)("p",{className:"number",children:["Question: ",r," / ",n]}),Object(b.jsx)("p",{className:"question",dangerouslySetInnerHTML:{__html:t}}),Object(b.jsx)("div",{className:"answers",children:c.map((function(e){return Object(b.jsx)("button",{className:"answer ".concat((null===a||void 0===a?void 0:a.correctAnswer)===e&&(null===a||void 0===a?void 0:a.answer)===e?"correct":(null===a||void 0===a?void 0:a.answer)===e?"clicked-button":(null===a||void 0===a?void 0:a.correctAnswer)===e?"correct":""),disabled:!!a,value:e,onClick:s,dangerouslySetInnerHTML:{__html:e}},e)}))})]})}),p=n(9),h=function(){var e=Object(l.a)(i.a.mark((function e(t,n,c){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(c);case 3:return e.next=5,e.sent.json();case 5:if(0!==(s=e.sent).response_code){e.next=11;break}return t(""),e.abrupt("return",s.results.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{answers:(t=[].concat(Object(o.a)(e.incorrect_answers),[e.correct_answer]),Object(o.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 11:1===s.response_code&&(t("no results for this category"),n(!0));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),t("something went wrong please try again"),n(!0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("easy"),a=Object(j.a)(r,2),u=a[0],p=a[1],f=Object(c.useState)([]),m=Object(j.a)(f,2),v=m[0],x=m[1],w=Object(c.useState)(0),g=Object(j.a)(w,2),y=g[0],N=g[1],S=Object(c.useState)(0),k=Object(j.a)(S,2),C=k[0],_=k[1],q=Object(c.useState)(!0),A=Object(j.a)(q,2),D=A[0],F=A[1],M=Object(c.useState)([]),T=Object(j.a)(M,2),I=T[0],L=T[1],Q=Object(c.useState)(!1),E=Object(j.a)(Q,2),H=E[0],B=E[1],J=Object(c.useState)(!1),P=Object(j.a)(J,2),z=P[0],Y=P[1],G=Object(c.useState)(""),K=Object(j.a)(G,2),R=K[0],U=K[1],V="https://opentdb.com/api.php?amount=10".concat(n?"&category=".concat(n):"","&difficulty=").concat(u,"&type=multiple"),W=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),F(!1),e.next=4,h(U,F,V);case 4:t=e.sent,x(t),_(0),N(0),L([]),Y(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"title",children:"Quiz app"}),D&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{selectCategory:function(e){s(e.target.value)},selectedCategory:n,selectDifficulty:function(e){p(e.target.value)},selectedDifficulty:u}),Object(b.jsx)("button",{className:"start",onClick:W,children:"start"})]}),D||H||z?null:Object(b.jsxs)("p",{className:"score",children:["Score: ",C]}),z?Object(b.jsx)("div",{className:"loading-spinner"}):null,D&&R?Object(b.jsx)("h1",{className:"error",children:R}):null,!D&&H?Object(b.jsxs)("h2",{className:"final-score",children:["Your score was ",C]}):null,H?Object(b.jsx)("button",{className:"restart",onClick:function(){B(!1),F(!0)},children:"\u21ba"}):null,Object(b.jsxs)("div",{className:"question-card-wrapper",children:[!D&&!z&&v.length>0&&!H?Object(b.jsx)(O,{totalQuestions:10,question:v[y].question,answers:v[y].answers,checkAnswer:function(e){if(!D){var t=e.currentTarget.value,n=v[y].correct_answer===t;n&&_((function(e){return e+1}));var c={question:v[y].question,answer:t,correct:n,correctAnswer:v[y].correct_answer};L((function(e){return[].concat(Object(o.a)(e),[c])}))}9===y&&B(!0)},questionNumber:y+1,userAnswer:I?I[y]:null}):null,D||I.length!==y+1||9===y?null:Object(b.jsx)("button",{className:"next",onClick:function(){var e=y+1;10===e?F(!0):N(e)},children:"next"})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.d3996d87.chunk.js.map