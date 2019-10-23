(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=(a(11),a(1)),u=a(5),i=a(4),s=a.n(i),m=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(u.a)(e),[{title:t.book.title,author:t.book.author,id:s()()}]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.id}));default:return e}},b=Object(n.createContext)(),d=function(e){var t=Object(n.useReducer)(m,[],(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),a=Object(c.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),r.a.createElement(b.Provider,{value:{books:o,dispatch:l}},e.children)},p=function(){var e=Object(n.useContext)(b).books;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"books"},"\ud83d\udcda")," ","Book List"),r.a.createElement("p",null,"Currently you have ",e.length," books to get through.."))},E=function(e){var t=e.book,a=Object(n.useContext)(b).dispatch;return r.a.createElement("li",{onClick:function(){return a({type:"REMOVE_BOOK",id:t.id})}},r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"author"},t.author))},f=function(){var e=Object(n.useContext)(b).books;return e.length?r.a.createElement("div",{className:"book-list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(E,{book:e,key:e.id})})))):r.a.createElement("div",{className:"empty"},"No books to read. Use the form below to add new book.")},h=function(){var e=Object(n.useContext)(b).dispatch,t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],l=a[1],u=Object(n.useState)(""),i=Object(c.a)(u,2),s=i[0],m=i[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:o,author:s}}),l(""),m("")}},r.a.createElement("input",{type:"text",placeholder:"Book title",value:o,onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"Author",value:s,onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Add New Book"}))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b9f27866.chunk.js.map