(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(2),i=n.n(s),o=n(6),r=n(8),c=n(9),d=n(3),l=n(13),u=n(11),m=n(4),p=n.n(m),h=n(12),j=n(10),y=n(1),f=function(t){var e=t.items,n=t.handleEdit,a=t.deleteItem;return e.length?Object(y.jsx)(j.a,{easing:"ease-in-out",duration:350,children:e.map((function(t){return Object(y.jsxs)("div",{className:p.a.displayTodo,children:[Object(y.jsx)("input",{type:"text",className:p.a.displayTodoInput,onChange:function(e){return n(e,t.key)},value:t.text}),Object(y.jsx)(h.a,{size:22,className:p.a.displayTodoX,onClick:function(){return a(t.key)}})]},t.key)}))}):Object(y.jsx)("p",{style:{display:"flex",fontFamily:"sans-serif",fontSize:"25px",justifyContent:"center",alignItems:"center",height:"300px",color:"#e3d8f1"},children:"No Todo Yet, Add Todo"})},b=n(5),x=n.n(b),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;Object(r.a)(this,n),(a=e.call(this,t)).deleteItem=function(t){var e=a.state.items.filter((function(e){return e.key!==t}));a.setState({items:e}),localStorage.setItem("Items",JSON.stringify(e))},a.handleEdit=function(t,e){var n=a.state.items.map((function(n){return n.key===e&&(n.text=t.target.value),n})).filter((function(t){return""!==t.text}));a.setState({items:n}),localStorage.setItem("Items",JSON.stringify(n))},a.handleSubmit=function(t){t.preventDefault(),""!==a.state.currentItem.text?(a.setState({items:[].concat(Object(o.a)(a.state.items),[a.state.currentItem]),currentItem:{text:"",key:""}}),localStorage.setItem("Items",JSON.stringify([].concat(Object(o.a)(a.state.items),[a.state.currentItem])))):alert("chl chl ave")};var s=localStorage.getItem("Items");return a.state=s?{items:Object(o.a)(JSON.parse(s)),currentItem:{text:"",key:""}}:{items:[],currentItem:{text:"",key:""}},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"render",value:function(){var t=this.state,e=t.currentItem,n=t.items;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:x.a.mainCont,children:[Object(y.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(y.jsx)("input",{className:x.a.inputField,placeholder:"Enter Todo",type:"text",value:e.text,onChange:this.handleChange}),Object(y.jsx)("button",{className:x.a.addBtn,type:"submit",children:"Add"})]}),Object(y.jsx)(f,{deleteItem:this.deleteItem,handleEdit:this.handleEdit,items:n})]})})}}]),n}(a.Component),I=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(O,{})})};i.a.render(Object(y.jsx)(I,{}),document.getElementById("root"))},4:function(t,e,n){t.exports={displayTodo:"TodoDisplay_displayTodo__wLVRR",displayTodoInput:"TodoDisplay_displayTodoInput__1pATW",displayTodoX:"TodoDisplay_displayTodoX__1sT8w"}},5:function(t,e,n){t.exports={mainCont:"Todo_mainCont__3aFj1",inputField:"Todo_inputField__1CMzf",addBtn:"Todo_addBtn__w7R7_"}}},[[19,1,2]]]);
//# sourceMappingURL=main.8d673ca0.chunk.js.map