(this["webpackJsonpreact-lessons"]=this["webpackJsonpreact-lessons"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={main:"Form_main__3zji4",input:"Form_input__1Rhcp",button:"Form_button__7o8gO",radio:"Form_radio__22Dl_",checkbox:"Form_checkbox__2OMcS"}},,function(e,t,n){e.exports={counter:"Counter_counter__Sgvhz",value:"Counter_value__1m3d_",control:"Counter_control__Byjg4",global:"Counter_global__3_W3I"}},,function(e,t,n){e.exports={box:"ColorPicker_box__1klLV",big:"ColorPicker_big__1sMYF",red:"ColorPicker_red__1LVCx",container:"ColorPicker_container__1I131",title:"ColorPicker_title__WC387",option:"ColorPicker_option__TuOCs",active:"ColorPicker_active__3KCJ5"}},,,,,,function(e){e.exports=JSON.parse('[{"label":"red","color":"#F44336"},{"label":"green","color":"#4CAF50"},{"label":"blue","color":"#2196F3"},{"label":"grey","color":"#607D8B"},{"label":"pink","color":"#E91E63"},{"label":"indigo","color":"#3F51B5"}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-2","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false},{"id":"id-4","text":"TEXT-1","completed":false},{"id":"id-5","text":"TEXT-2","completed":true},{"id":"id-6","text":"TEXT-3","completed":false},{"id":"id-7","text":"TEXT-4","completed":false}]')},function(e){e.exports=JSON.parse('[{"label":"Tab 1","content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."},{"label":"Tab 2","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{"label":"Tab 3","content":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."}]')},,,,,,,,function(e,t,n){e.exports={TodoList:"TodoList_TodoList__1PRND",TodoList__item:"TodoList_TodoList__item__3_YvZ",TodoList__text:"TodoList_TodoList__text__16t_D"}},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(13),r=n.n(a),i=n(1),c=n.n(i),l=n(19),s=n(9),u=n(2),d=n(3),h=n(5),b=n(4),p=n(8),j=n.n(p),m=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(o.jsxs)("div",{className:j.a.control,children:[Object(o.jsx)("button",{type:"button",onClick:n,children:"\u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 1"}),Object(o.jsx)("button",{type:"button",onClick:t,children:"\u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 1"})]})},f=function(e){var t=e.value;return Object(o.jsx)("span",{className:j.a.value,children:t})},v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:0},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.value;return Object(o.jsx)(i.Fragment,{children:Object(o.jsxs)("div",{className:j.a.counter,children:[Object(o.jsx)("h2",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),Object(o.jsx)(f,{value:e}),Object(o.jsx)(m,{onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})]})})}}]),n}(i.Component);v.defaultProps={initialValue:0};var g=v,O=n(7),x=n(10),y=n.n(x),_=n(14),C=n.n(_),k=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={activeOptionIdx:0,activeColor:e.props.label},e.changeState=function(t){e.setState({activeOptionIdx:t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeOptionIdx,n=this.props.options,a=n[t].label;"".concat(y.a.active);return console.log("lable",{label:a}),Object(o.jsxs)("div",{className:y.a.container,children:[Object(o.jsx)("h2",{className:y.a.title,children:"Color Picker"}),Object(o.jsxs)("p",{children:[" \u0412\u044b\u0431\u0440\u0430\u043d \u0446\u0432\u0435\u0442: ",a]}),Object(o.jsx)("div",{children:n.map((function(t,n){var a=t.label,r=t.color;return Object(o.jsx)("button",{className:C()("".concat(y.a.option),Object(O.a)({},"".concat(y.a.active),n===e.state.activeOptionIdx)),style:{backgroundColor:r},onClick:function(){e.changeState(n,a)}},a)}))})]})}}]),n}(i.Component),T=n(16);n(26),n(27);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function L(e,t){var n=e.title,o=e.titleId,a=I(e,["title","titleId"]);return i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?i.createElement("title",{id:o},n):null,S,N)}var D=i.forwardRef(L),E=(n.p,n(20)),M=(n(28),function(e){var t=e.children,n=e.text,a=e.onClick,r=Object(E.a)(e,["children","text","onClick"]);return Object(o.jsxs)("button",Object(s.a)(Object(s.a)({type:"button",className:"IconButton",onClick:a},r),{},{children:[n,t]}))});M.defaultProps={onClick:function(){return null},children:null};var F=M;function P(e){var t=e.options,n=e.onDelete,a=e.onToggleCompleted,r=t.text,i=t.completed;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:i,onChange:a}),Object(o.jsx)("p",{className:"TodoList__text",children:r}),Object(o.jsx)(F,{onClick:n,children:Object(o.jsx)(D,{width:"40",height:"40",fill:"#fff"})})]})}var V=function(e){var t=e.todos,n=e.onDeleteTodo,a=e.onToggleCompleted;return Object(o.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.text,i=e.completed;return Object(o.jsx)("li",{className:C()("TodoList__item",{"TodoList__item--completed":i}),children:Object(o.jsx)(P,{options:{id:t,text:r,completed:i},onDelete:function(){return n(t)},onToggleCompleted:function(){return a(t)}})},t)}))})},A=n(17);n(29);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),J=i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function z(e,t){var n=e.title,o=e.titleId,a=R(e,["title","titleId"]);return i.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?i.createElement("title",{id:o},n):null,H,J)}var K=i.forwardRef(z),W=(n.p,function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).handleChange=function(e){o.setState({message:e.currentTarget.value})},o.handleSubmit=function(e){e.preventDefault(),o.props.onSubmit(o.state.message),o.setState({message:""})},o.state={message:""},o}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(o.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(o.jsx)(F,{type:"submit",className:"TodoEditor__button",children:Object(o.jsx)(K,{width:"40",height:"40",fill:"#fff"})})]})}}]),n}(i.Component)),X=n(11),U=n.n(X),Y=function(e){var t=e.value,n=e.onChange;return Object(o.jsxs)("label",{children:["\u0444\u0438\u043b\u044c\u0442\u0440\u0442 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(o.jsx)("input",{value:t,onChange:n})]})},q=n(6),Z=n.n(q),G=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",tag:"",experience:"junior",licence:!1},e.nameInputId=U.a.generate(),e.tagInputId=U.a.generate(),e.handLicenseChange=function(t){console.log(t.currentTarget.checked),e.setState({licence:t.currentTarget.checked})},e.handleChange=function(t){var n=t.currentTarget,o=n.name,a=n.value;e.setState(Object(O.a)({},o,a))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",tag:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:Z.a.main,onSubmit:this.handleSubmit,children:[Object(o.jsxs)("label",{htmlFor:this.nameInputId,children:["Firstname:",Object(o.jsx)("input",{className:Z.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(o.jsxs)("label",{htmlFor:this.tagInputId,children:["Lastname:",Object(o.jsx)("input",{className:Z.a.input,type:"text",name:"tag",value:this.state.tag,onChange:this.handleChange,id:this.tagInputId})]}),Object(o.jsx)("p",{children:"Development Level: "}),Object(o.jsx)("input",{className:Z.a.radio,type:"radio",name:"experience",value:"junior",checked:"junior"===this.state.experience,onChange:this.handleChange})," ","junior",Object(o.jsx)("input",{className:Z.a.radio,type:"radio",name:"experience",value:"middle",checked:"middle"===this.state.experience,onChange:this.handleChange})," ","Middle",Object(o.jsx)("input",{className:Z.a.radio,type:"radio",name:"experience",value:"senior",checked:"senior"===this.state.experience,onChange:this.handleChange})," ","Senior",Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:Z.a.checkbox,type:"checkbox",name:"licence",checked:this.state.licence,onChange:this.handLicenseChange})," ",'Agree with Conditionals (Submit button appears after "checked")']}),Object(o.jsx)("button",{className:Z.a.button,type:"submit",disabled:!this.state.licence,children:"Submit"})]})}}]),n}(i.Component),Q=(n(38),document.querySelector("#modal-root")),$=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(a.createPortal)(Object(o.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(o.jsx)("div",{className:"Modal__content",children:this.props.children})}),Q)}}]),n}(i.Component),ee=(n(39),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={time:new Date},e.intervalId=null,e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){return e.setState({time:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"Clock__face",children:this.state.time.toLocaleTimeString()})}}]),n}(i.Component)),te=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={activeTabIdx:0},e.setActiveTabIdx=function(t){e.setState({activeTabIdx:t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;console.log("Re-render @ ".concat(Date.now()));var t=this.state.activeTabIdx,n=this.props.items,a=n[t];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:n.map((function(t,n){return Object(o.jsx)("button",{type:"button",onClick:function(){return e.setActiveTabIdx(n)},children:t.label},t.label)}))}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:a.label}),Object(o.jsx)("p",{children:a.content})]})]})}}]),n}(i.PureComponent),ne=n(18),oe=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:A,inputValue:"",filter:"",showModal:!1},e.handleInputChange=function(t){console.log(t.currentTarget.value),e.setState({inputValue:t.currentTarget.value}),console.log(e.state.inputValue)},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}}))},e.addTodo=function(t){var n={id:U.a.generate(),text:t,completed:!1};e.setState((function(e){var t=e.todos;return{todos:[n].concat(Object(l.a)(t))}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.todos,o=t.filter.toLowerCase();return n.filter((function(e){return e.text.toLowerCase().includes(o)}))},e.getCompletedTodoCount=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos"));e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.todos,o=t.todos;t!==this.state&&localStorage.setItem("todos",JSON.stringify(n)),n.length>o.length&&0!==o.length&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,a=e.showModal,r=(e.inputValue,this.getVisibleTodos(),t.filter((function(e){return e.completed}))),i=this.getCompletedTodoCount();return console.log(r.length),console.log(i),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F,{onClick:this.toggleModal,"aria-label":"add todo",children:Object(o.jsx)(K,{width:"40",height:"40",fill:"#fff"})}),Object(o.jsx)(G,{onSubmit:this.onSubmitHandler}),Object(o.jsx)(G,{onSubmit:this.onSubmitHandler}),Object(o.jsx)(g,{initialValue:""}),Object(o.jsx)(k,{options:T}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:",t.length]}),Object(o.jsxs)("p",{children:["\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445:",i]}),Object(o.jsx)(Y,{value:n,onChange:this.changeFilter}),Object(o.jsx)(V,{todos:this.getVisibleTodos(),onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]}),Object(o.jsx)("div",{children:a&&Object(o.jsxs)($,{onClose:this.toggleModal,children:[Object(o.jsx)("h1",{children:"Hi this is ....... "}),Object(o.jsx)(ee,{}),Object(o.jsx)(te,{items:ne}),Object(o.jsx)(F,{onClick:this.toggleModal,children:Object(o.jsx)(D,{width:"40",height:"40",fill:"#fff"})}),Object(o.jsx)(W,{onSubmit:this.addTodo})]})})]})}}]),n}(i.Component);n(40);r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(oe,{})}),document.getElementById("root"))}],[[41,1,2]]]);
//# sourceMappingURL=main.a56a7393.chunk.js.map