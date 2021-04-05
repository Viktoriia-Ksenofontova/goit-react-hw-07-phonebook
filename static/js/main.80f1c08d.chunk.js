(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={form:"ContactForm_form__26enc",formLabel:"ContactForm_formLabel__2nY2g",formInput:"ContactForm_formInput__2iiXa",formBtn:"ContactForm_formBtn__3kGdG"}},19:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__33bTs",listItem:"ContactsList_listItem__2FiB6",Btn:"ContactsList_Btn__3eDDd"}},24:function(t,e,n){t.exports={section:"Section_section__2PkR_",sectionTitle:"Section_sectionTitle__25wl9"}},25:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__2bWgL",filterInput:"Filter_filterInput__3F6sO"}},37:function(t,e,n){t.exports={spinnerContainer:"Loader_spinnerContainer__3kTPJ"}},45:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),s=(n(44),n(45),n(8)),u=n(9),i=n(11),l=n(10),b=n(7),d=n(4),f=n(91),j=n(13),h=n.n(j),O=n(17),m=n.n(O),p=n(2),C=Object(p.b)("contacts/fetchContactsRequest"),v=Object(p.b)("contacts/fetchContactsSuccess"),x=Object(p.b)("contacts/fetchContactsError"),_=Object(p.b)("contacts/addContactRequest"),g=Object(p.b)("contacts/addContactSuccess"),I={fetchContactsRequest:C,fetchContactsSuccess:v,fetchContactsError:x,addContactRequest:_,addContactError:Object(p.b)("contacts/addContactError"),addContactSuccess:g,deleteContactRequest:Object(p.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(p.b)("contacts/deleteContactSuccess"),deleteContactError:Object(p.b)("contacts/deleteContactError"),changeFilter:Object(p.b)("contacts/changeFilter")};m.a.defaults.baseURL="http://localhost:4000";var y=function(){return function(t){t(I.fetchContactsRequest()),m.a.get("/contacts").then((function(e){var n=e.data;return t(I.fetchContactsSuccess(n))})).catch((function(e){return t(I.fetchContactsError(e))}))}},S=function(t){return function(e){e(I.addContactRequest()),m.a.post("/contacts",t).then((function(t){var n=t.data;return e(I.addContactSuccess(n))})).catch((function(t){return e(I.addContactError(t))}))}},N=function(t){return function(e){e(I.deleteContactRequest()),m.a.delete("/contacts/".concat(t)).then((function(){return e(I.deleteContactSuccess(t))})).catch((function(t){return e(I.deleteContactError(t))}))}},F=n(18),L=function(t){return t.contacts.items},E=function(t){return t.contacts.loading},R=function(t){return t.contacts.filter},k=function(t){return t.contacts.error},q=Object(F.a)([L,R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),P=n(12),T=n(1),w=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=Object(f.a)(),t.numberInputId=Object(f.a)(),t.handleInputChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name,c=t.props,a=c.items,r=c.formSubmitHandler;if(a.find((function(t){return t.name===n})))return P.b.info("".concat(n," is already in contacts."),{position:P.b.POSITION.TOP_CENTER});r(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(T.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(T.jsxs)("label",{htmlFor:this.nameInputId,className:h.a.formLabel,children:["Name",Object(T.jsx)("input",{className:h.a.formInput,type:"text",placeholder:"Enter name",name:"name",value:e,onChange:this.handleInputChange,id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(T.jsxs)("label",{htmlFor:this.numberInputId,className:h.a.formLabel,children:["Number",Object(T.jsx)("input",{className:h.a.formInput,type:"tel",placeholder:"Enter telephone number",name:"number",value:n,onChange:this.handleInputChange,id:this.numberInputId,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(T.jsx)("button",{type:"submit",className:h.a.formBtn,children:"Add contact"}),Object(T.jsx)(P.a,{})]})}}]),n}(c.Component);w.defaultProps={items:[]};var B=Object(b.b)((function(t){return{items:L(t)}}),(function(t){return{formSubmitHandler:function(e){return t(S(e))}}}))(w),A=n(19),D=n.n(A),z=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact;return e.length>0?Object(T.jsx)("ul",{className:D.a.contactsList,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(T.jsxs)("li",{className:D.a.listItem,children:[Object(T.jsxs)("p",{className:"name",children:[c,": ",Object(T.jsx)("span",{children:a})]}),Object(T.jsx)("button",{className:D.a.Btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))}):Object(T.jsx)("h3",{children:"You haven't contacts"})}}]),n}(c.Component);z.defaultProps={contacts:[]};var J=Object(b.b)((function(t){return{contacts:q(t)}}),(function(t){return{onDeleteContact:function(e){return t(N(e))},fetchContacts:function(){return t(y())}}}))(z),M=n(24),Z=n.n(M),G=function(t){var e=t.title,n=t.children;return Object(T.jsxs)("div",{className:Z.a.section,children:[Object(T.jsx)("h2",{className:Z.a.sectionTitle,children:e}),n]})};G.defaultProps={title:""};var H=G,Y=n(25),U=n.n(Y),W=Object(f.a)(),X=function(t){var e=t.value,n=t.onChange;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("label",{htmlFor:W,className:U.a.filterLabel,children:["Find contacts by name",Object(T.jsx)("input",{className:U.a.filterInput,type:"text",name:"filter",value:e,onChange:n,id:W})]})})};X.defaultProps={value:""};var $=Object(b.b)((function(t){return{value:R(t)}}),(function(t){return{onChange:function(e){return t(I.changeFilter(e.target.value))}}}))(X),K=n(36),Q=n.n(K),V=(n(87),n(37)),tt=n.n(V),et=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(T.jsx)("div",{className:tt.a.spinnerContainer,children:Object(T.jsx)(Q.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})})}}]),n}(c.Component),nt=(n(88),n(89),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.error;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"App",children:[Object(T.jsxs)(H,{title:"Phonebook",children:[Object(T.jsx)(B,{}),this.props.isLoading&&Object(T.jsx)(et,{})]}),Object(T.jsxs)(H,{title:"Contacts",children:[Object(T.jsx)($,{}),Object(T.jsx)(J,{})]}),Object(T.jsx)(P.a,{})]}),t&&P.b.error("".concat(t),{position:P.b.POSITION.TOP_CENTER})]})}}]),n}(c.Component));nt.defaultProps={error:null,isLoading:!1};var ct,at,rt,ot=Object(b.b)((function(t){return{isLoading:E(t),error:k(t)}}))(nt),st=n(16),ut=n(5),it=I.fetchContactsRequest,lt=I.fetchContactsSuccess,bt=I.fetchContactsError,dt=I.addContactRequest,ft=I.addContactError,jt=I.addContactSuccess,ht=I.deleteContactRequest,Ot=I.deleteContactSuccess,mt=I.deleteContactError,pt=Object(p.c)([],(ct={},Object(d.a)(ct,lt,(function(t,e){return e.payload})),Object(d.a)(ct,jt,(function(t,e){return[].concat(Object(st.a)(t),[e.payload])})),Object(d.a)(ct,Ot,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),ct)),Ct=Object(p.c)(!1,(at={},Object(d.a)(at,dt,(function(){return!0})),Object(d.a)(at,jt,(function(){return!1})),Object(d.a)(at,ft,(function(){return!1})),Object(d.a)(at,ht,(function(){return!0})),Object(d.a)(at,Ot,(function(){return!1})),Object(d.a)(at,mt,(function(){return!1})),Object(d.a)(at,it,(function(){return!0})),Object(d.a)(at,lt,(function(){return!1})),Object(d.a)(at,bt,(function(){return!1})),at)),vt=Object(p.c)("",Object(d.a)({},I.changeFilter,(function(t,e){return e.payload}))),xt=Object(p.c)(null,(rt={},Object(d.a)(rt,ft,(function(t,e){return[].concat(Object(st.a)(t),[e.payload])})),Object(d.a)(rt,mt,(function(t,e){return[].concat(Object(st.a)(t),[e.payload])})),Object(d.a)(rt,bt,(function(t,e){return[e.payload]})),rt)),_t=Object(ut.c)({items:pt,filter:vt,loading:Ct,error:xt}),gt=n(38),It=n.n(gt),yt=n(14),St=[].concat(Object(st.a)(Object(p.d)({serializableCheck:{ignoredActions:[yt.a,yt.f,yt.b,yt.c,yt.d,yt.e]}})),[It.a]),Nt=Object(p.a)({reducer:{contacts:_t},middleware:St});o.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(b.a,{store:Nt,children:Object(T.jsx)(ot,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.80f1c08d.chunk.js.map