(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1kiTO",label:"ContactForm_label__15E5g",input:"ContactForm_input__3SXzk",btnSubmit:"ContactForm_btnSubmit__18pEw"}},function(t,e,n){t.exports={list:"ContactList_list__20Xmh",item:"ContactList_item__2x9Vx",name:"ContactList_name__1_x5s",number:"ContactList_number__YHr2_",button:"ContactList_button__1oXxM"}},,,,,function(t,e,n){t.exports={label:"Filter_label__1Bwhk",input:"Filter_input__1ag-H",span:"Filter_span__1wcNd"}},,,function(t,e,n){t.exports={container:"Container_container__1xn4e"}},,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(19),n(13)),o=n(4),l=n(5),u=n(7),m=n(6),b=n(11),h=n.n(b),d=n(0),j=function(t){var e=t.children;return Object(d.jsx)("div",{className:h.a.container,children:e})},p=n(12),f=n(23),O=n(2),_=n.n(O),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(f.a)(),t.numberInputId=Object(f.a)(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsx)("label",{className:_.a.label,htmlFor:this.nameInputId,children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:this.nameInputId,value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:_.a.input,required:!0}),Object(d.jsx)("label",{className:_.a.label,htmlFor:this.numberInputId,children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",id:this.numberInputId,value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:_.a.input,required:!0}),Object(d.jsx)("button",{type:"submit",className:_.a.btnSubmit,children:"Add contact"})]})})}}]),n}(a.Component),C=x,v=n(8),g=n.n(v),N=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:g.a.label,children:[Object(d.jsx)("span",{className:g.a.span,children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",className:g.a.input,value:e,onChange:n})]})},S=n(3),I=n.n(S),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(d.jsx)("ul",{className:I.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{className:I.a.item,children:[Object(d.jsx)("p",{className:I.a.name,children:a}),Object(d.jsx)("p",{className:I.a.number,children:c}),Object(d.jsx)("button",{type:"button",className:I.a.button,onClick:function(){n(e)},children:"Delete"})]},e)}))})},F=(n(21),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){if(console.log(e),t.state.contacts.find((function(t){return e.name.toLowerCase()===t.name.toLowerCase()})))alert("".concat(e.name," is already in contacts"));else{var n={id:Object(f.a)(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(i.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(j,{children:[Object(d.jsx)("h1",{className:"title",children:"Phonebook"}),Object(d.jsx)(C,{onSubmit:this.formSubmitHandler}),Object(d.jsx)("h2",{className:"title",children:"Contacts"}),Object(d.jsx)(N,{value:t,onChange:this.changeFilter}),Object(d.jsx)(y,{contacts:e,onDeleteContact:this.deleteContact})]})})})}}]),n}(a.Component)),k=F;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.904e9378.chunk.js.map