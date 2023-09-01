"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{1828:function(n,e,r){r.r(e),r.d(e,{default:function(){return dn}});var t,o,a,i,c,s,d,p,l,x,u,g,f,h,b,m=r(2791),Z=r(9439),v=r(9434),w=r(6916),j=function(n){return n.filter},y=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},z=function(n){return n.contacts.items},C=function(n){return n.sortByName},N=(0,w.P1)([z,j,C],(function(n,e,r){var t=e.toLowerCase();switch(r){case!1:return n.filter((function(n){return n.name.toLowerCase().includes(t,0)}));case!0:return n.filter((function(n){return n.name.toLowerCase().includes(t,0)})).sort((function(n,e){return n.name.localeCompare(e.name)}));default:return n}})),A=function(){var n=(0,v.v9)(z),e=(0,v.v9)(k),r=(0,v.v9)(y),t=(0,v.v9)(j),o=(0,v.v9)(C);return{contacts:n,error:e,isLoading:r,filter:t,visibleContacts:(0,v.v9)(N),sorted:o}},L=r(168),S=r(225),E=S.Z.form(t||(t=(0,L.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 900px;\n  padding: 20px;\n  font-weight: 600;\n  color: #f06292;\n  /* border: 3px solid rgba(216, 116, 225, 1); */\n  border-radius: 10px;\n  background-color: rgba(230, 242, 255, 0.7);\n  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);\n  font-style: italic;\n"]))),F=S.Z.input(o||(o=(0,L.Z)(["\n  height: 40px;\n  width: 210px;\n  font-size: 20px;\n  padding: 0 10px;\n  border: none;\n  border-radius: 20px;\n  margin-left: 20px;\n  margin-right: auto;\n  &:focus {\n    outline-color: #f06292;\n  }\n"]))),I=S.Z.label(a||(a=(0,L.Z)(["\n  font-size: 30px;\n  text-align: center;\n"]))),_=S.Z.button(i||(i=(0,L.Z)(["\n  padding: 7px 25px;\n  display: flex;\n  align-items: center;\n  /* height: 50px; */\n  /* background-color: #f06292; */\n  border: 2px solid #f06292;\n  color: #f06292;\n  font-size: 20px;\n  color: #f06292;\n  border-radius: 25px;\n\n  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);\n  &:hover {\n    background-color: #f06292;\n    color: white;\n  }\n"]))),B=r(3634),D=r(7932),M=r(184),P=function(){var n=(0,m.useState)(""),e=(0,Z.Z)(n,2),r=e[0],t=e[1],o=(0,m.useState)(""),a=(0,Z.Z)(o,2),i=a[0],c=a[1],s=A().contacts,d=(0,v.I0)();return(0,M.jsxs)(E,{onSubmit:function(n){if(n.preventDefault(),s.find((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contacts")),!1;d((0,D.B)(!1)),d((0,B.uK)({name:r,number:i})),t(""),c("")},children:[(0,M.jsx)(I,{htmlFor:"inputName",children:"Name"}),(0,M.jsx)(F,{type:"text",name:"name",value:r,id:"inputName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){return t(n.target.value)},placeholder:"Enter name"}),(0,M.jsx)(I,{htmlFor:"inputNumber",children:"Number"}),(0,M.jsx)(F,{type:"tel",name:"number",value:i,id:"inputNumber",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){return c(n.target.value)},placeholder:"Enter phone number"}),(0,M.jsx)(_,{type:"submit",children:"Add contact"})]})},R=r(1634),q=S.Z.div(c||(c=(0,L.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 900px;\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 30px;\n  color: #f06292;\n  padding: 20px;\n  /* border: 3px solid rgba(216, 116, 225, 1); */\n  border-radius: 10px;\n  background-color: rgba(230, 242, 255, 0.7);\n  box-shadow: 2px 3px 4px 2px rgba(20, 20, 20, 0.5);\n  font-style: italic;\n"]))),J=S.Z.input(s||(s=(0,L.Z)(["\n  margin-left: 10px;\n  width: 210px;\n  font-size: 20px;\n  height: 40px;\n  border: none;\n  border-radius: 20px;\n  padding: 0 15px;\n  &:focus {\n    outline-color: #f06292;\n  }\n"]))),K=S.Z.label(d||(d=(0,L.Z)(["\n  margin-right: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),T=(S.Z.input(p||(p=(0,L.Z)(["\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n"]))),r(190)),G=function(){var n=A(),e=n.filter,r=n.isSorted,t=(0,v.I0)();return(0,M.jsxs)(q,{children:[(0,M.jsxs)(K,{children:["Find contact by Name",(0,M.jsx)(J,{type:"text",name:"filter",value:e,onChange:function(n){return function(n){return t((0,R.T)(n.target.value))}(n)},placeholder:"Enter search name"})]}),(0,M.jsxs)(K,{children:["[A-Z]",(0,M.jsx)(T.Z,{type:"checkbox",checked:r,onChange:function(n){return t((0,D.B)(n.target.checked))},sx:{"& .MuiSvgIcon-root":{fontSize:28},color:"rgba(240, 98, 146, 1)","&.Mui-checked":{color:"rgba(240, 98, 146, 1)"}}})]})]})},O=S.Z.li(l||(l=(0,L.Z)(["\n  margin: 0;\n  padding: 15px 0;\n  display: flex;\n  /* width: 800px; */\n  justify-content: space-between;\n  align-items: center;\n  font-style: italic;\n  font-size: 20px;\n  font-weight: 400;\n  border-bottom: 2px solid black;\n\n  /* background-color: rgba(200, 210, 210, 0.7);\n  &:nth-child(2n + 1) {\n    background-color: rgba(200, 220, 220, 0.7);\n  } */\n"]))),$=S.Z.button(x||(x=(0,L.Z)(["\n  padding: 5px 25px;\n  display: flex;\n  align-items: center;\n  color: #f06292;\n  /* background-color: #f06292; */\n  /* font-size: 20px; */\n  border: 2px solid #f06292;\n  border-radius: 25px;\n  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);\n  &:hover {\n    background-color: #f06292;\n    color: white;\n  }\n"]))),H=S.Z.p(u||(u=(0,L.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: #f06292;\n  width: 380px;\n  margin: 0;\n"]))),Q=S.Z.p(g||(g=(0,L.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: #f06292;\n  margin-right: auto;\n  margin: 0;\n"])));function U(n){var e=n.contact,r=(0,v.I0)(),t=e.name,o=e.number,a=e.id;return(0,M.jsxs)(O,{children:[(0,M.jsxs)(H,{children:[t," :"]}),(0,M.jsx)(Q,{children:o}),(0,M.jsx)($,{type:"button",onClick:function(){return r((0,B.GK)(a))},children:"Delete"})]})}var V=S.Z.ul(f||(f=(0,L.Z)(["\n  padding: 0 20px;\n  margin: 0;\n  overflow-y: scroll;\n  height: calc(100vh - 450px);\n"]))),W=S.Z.div(h||(h=(0,L.Z)(["\n  width: 900px;\n  height: calc(100vh - 440px);\n  padding: 5px;\n  /* border: 3px solid rgba(216, 116, 225, 1); */\n  border-radius: 10px;\n  background-color: rgba(230, 242, 255, 0.7);\n  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);\n"]))),X=S.Z.p(b||(b=(0,L.Z)(["\n  text-align: center;\n  font-size: 30px;\n"])));function Y(){var n=(0,v.I0)(),e=A().visibleContacts;return(0,m.useEffect)((function(){n((0,B.yF)("/contacts"))}),[n]),(0,M.jsx)(W,{children:(0,M.jsxs)(V,{children:[0===e.length&&(0,M.jsx)(X,{children:"There are no contacts for your search"}),e.map((function(n){return(0,M.jsx)(U,{contact:n,id:n.id},n.id)}))]})})}(0,r(9256).vJ)(nn||(nn=(0,L.Z)(["\n\n* {\n      \n       margin:0;\n\n       padding:0;\n\n       box-sizing:border-box;\n\n       font-family: 'Droid Sans' sans-serif;\n         \n       }"])));var nn,en,rn,tn,on=S.Z.div(en||(en=(0,L.Z)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* background-color: rgba(232, 116, 225, 0.2); */\n  background-image: linear-gradient(\n      rgba(50, 47, 66, 0.2),\n      rgba(50, 47, 66, 0.2) 100%\n    ),\n    url('https://cdn.pixabay.com/photo/2015/11/10/14/33/hawaii-1037024_1280.jpg');\n  background-size: cover;\n  height: 100vh;\n"]))),an=S.Z.h1(rn||(rn=(0,L.Z)(["\n  font-size: 32px;\n  color: rgba(50, 50, 50, 0.5);\n  border-radius: 17px;\n  padding: 0 20px;\n  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);\n"]))),cn=S.Z.h2(tn||(tn=(0,L.Z)(["\n  font-size: 32px;\n  color: rgba(50, 50, 50, 0.5);\n  border-radius: 17px;\n  padding: 0 20px;\n  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);\n"]))),sn=r(1356),dn=function(){var n=(0,v.v9)(y),e=(0,v.v9)(k);return(0,M.jsxs)(on,{children:[(0,M.jsx)(an,{children:"Phonebook"}),(0,M.jsx)(P,{}),(0,M.jsx)(cn,{children:"Contacts"}),(0,M.jsx)(G,{}),e&&(0,M.jsxs)("b",{children:["ERROR: ",e]}),n&&(0,M.jsx)(sn.a,{}),(0,M.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=828.a1e52c87.chunk.js.map