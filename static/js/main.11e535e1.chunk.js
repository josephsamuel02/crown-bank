(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{51:function(e,c,t){},69:function(e,c,t){},80:function(e,c,t){"use strict";t.r(c);var r=t(1),s=t.n(r),a=t(11),j=t.n(a),i=(t(69),t(26)),n=t(12),l=t(15),b=(t(51),t(110)),d=t(114),o=t(117),x=t(21),O=t(0),u=t(3),h=function(){var e=Object(r.useState)(!1),c=Object(l.a)(e,2),t=c[0],s=c[1];return Object(u.jsxs)("div",{className:"LandingPage",children:[Object(u.jsxs)(O.b.Provider,{value:{color:"rgb(99, 21, 145)",size:"100px"},children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"welcome",children:Object(u.jsx)("p",{className:"welcometext",children:"welcome to the bank that treats you as royalty you are."})}),Object(u.jsx)(b.a,{className:"App",children:Object(u.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(u.jsx)(d.a,{children:"Stared (*) fields are compulsory"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{variant:"outlined",label:"Account Name",color:"primary",required:!0,fullWidth:!0}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{label:"Email",variant:"outlined",color:"primary",required:!0,fullWidth:!0}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{label:"Account Number",variant:"outlined",type:"number",color:"primary",fullWidth:!0}),Object(u.jsx)("br",{}),t&&Object(u.jsx)("div",{className:"alart",children:"please enter a valid login details or create a new account"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{id:"login",onClick:function(e){return function(e){e.preventDefault(),s(!0)}(e)},children:"Login"}),Object(u.jsx)("br",{}),Object(u.jsx)(i.b,{to:"/RegisterUser",children:Object(u.jsx)("button",{id:"register",children:"Register new user"})})]})}),Object(u.jsxs)("div",{className:"cardsbox",children:[Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"Best banking experience "}),Object(u.jsxs)("p",{className:"cardicon",children:[Object(u.jsx)(x.e,{})," "]})]}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"Be in charge of your finances"}),Object(u.jsx)("p",{className:"cardicon",children:Object(u.jsx)(x.b,{})})]}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"We execute the commands of your finger tips"}),Object(u.jsxs)("p",{className:"cardicon",children:["  ",Object(u.jsx)(x.f,{})," "]})]}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"We are waiting for you"}),Object(u.jsxs)("p",{className:"cardicon",children:[Object(u.jsx)(x.a,{})," "]})]})]}),Object(u.jsxs)("div",{id:"regbox",children:[Object(u.jsx)("br",{}),Object(u.jsx)(i.b,{to:"/RegisterUser",children:Object(u.jsx)("button",{className:"reg",children:"Join us"})})]})]}),Object(u.jsx)("br",{})]})},p=t(41),m=t(28),f=t(56),v=t(55),y=s.a.createContext(),N=function(e){Object(f.a)(t,e);var c=Object(v.a)(t);function t(){var e;Object(p.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=c.call.apply(c,[this].concat(s))).state={bankname:"Crown Bank",userinfo:[{name:"Joseph Samuel",email:"samueljda01@gmail.com",phone:"09056974667",gender:"male",address:"3, adefolu drive allen ikeja",birthday:"21/06/1995",accNo:"1224549032"}]},e.addUserinfo=function(c){e.setState((function(){return{userinfo:[c]}}))},e}return Object(m.a)(t,[{key:"render",value:function(){return Object(u.jsx)(y.Provider,{value:{state:this.state,addUserinfo:this.addUserinfo},children:this.props.children})}}]),t}(r.PureComponent),g=function(){var e=Object(r.useContext)(y),c=Object(r.useState)([]),t=Object(l.a)(c,2),s=t[0],a=t[1],j=Math.random(200);return Object(r.useEffect)((function(){a(e.state.userinfo)}),[e]),Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsxs)(O.b.Provider,{value:{},children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"welcome",children:Object(u.jsx)("p",{className:"welcometext",children:"welcome to the bank that treats you as royalty you are."})}),s.map((function(e){return Object(u.jsxs)("div",{id:"profile",children:[Object(u.jsx)("p",{id:"name",children:e.name}),Object(u.jsxs)("p",{id:"email",children:[Object(u.jsx)(x.c,{style:{color:"rgb(99, 21, 145)",fontSize:"20px"}}),"   ",e.email]}),Object(u.jsxs)("p",{id:"phone",children:[Object(u.jsx)(x.d,{style:{color:"rgb(99, 21, 145)",fontSize:"20px"}}),"    ",e.phone]}),Object(u.jsxs)("div",{id:"personal",children:[Object(u.jsxs)("p",{id:"gender",children:["Gender: ",e.gender]}),Object(u.jsxs)("p",{id:"birthday",children:["Birthday: ",e.birthday]}),Object(u.jsxs)("p",{id:"address",children:["Address: ",e.address]}),Object(u.jsxs)("p",{id:"accNo",children:["Account No: ",e.accNo]})]}),Object(u.jsxs)("p",{id:"accBal",children:["Account balance:",Object(u.jsx)("span",{style:{color:"rgb(41, 201, 41)"},children:"$ 2,431.14"})]})]},j)})),Object(u.jsxs)("div",{className:"cardsbox",children:[Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"Best banking experience "}),Object(u.jsxs)("p",{className:"cardicon",children:[Object(u.jsx)(x.e,{style:{color:"rgb(99, 21, 145)",fontSize:"100px"}})," "]})]}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"Be in charge of your finances"}),Object(u.jsx)("p",{className:"cardicon",children:Object(u.jsx)(x.b,{style:{color:"rgb(99, 21, 145)",fontSize:"100px"}})})]}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"We execute the commands of your finger tips"}),Object(u.jsxs)("p",{className:"cardicon",children:["  ",Object(u.jsx)(x.f,{style:{color:"rgb(99, 21, 145)",fontSize:"100px"}})," "]})]}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:"We are waiting for you"}),Object(u.jsxs)("p",{className:"cardicon",children:[Object(u.jsx)(x.a,{style:{color:"rgb(99, 21, 145)",fontSize:"100px"}})," "]})]})]})]}),Object(u.jsx)("br",{})]})},R=t(81),S=t(119),w=t(115),k=t(118),A=t(116),C=function(){var e=Object(r.useContext)(y),c=Object(r.useState)("/RegisterUser"),t=Object(l.a)(c,2),s=t[0],a=t[1],j=Object(r.useState)(!1),n=Object(l.a)(j,2),x=n[0],O=n[1],h=Object(r.useRef)(),p=Object(r.useRef)(),m=Object(r.useRef)(),f=Object(r.useRef)(),v=Object(r.useRef)(),N=Object(r.useRef)(),g=Object(u.jsx)("div",{className:"alart",children:" * this field is requird"});return Object(u.jsxs)(b.a,{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(R.a,{fontSize:"small",color:"textSecondary",children:"CREATE AN ACCOUNT"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(u.jsx)(d.a,{children:" Stared (*) fields are required "}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{variant:"outlined",label:"Full Name",color:"primary",fullWidth:!0,required:!0,inputRef:h}),x&&g,Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{label:"Email",type:"email",variant:"outlined",color:"primary",fullWidth:!0,required:!0,inputRef:p}),x&&g,Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{label:"Phone",variant:"outlined",type:"number",color:"primary",required:!0,fullWidth:!0,inputRef:m}),x&&g,Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{children:"Gender"}),Object(u.jsxs)(S.a,{children:[Object(u.jsx)(w.a,{inputRef:f,value:"male",control:Object(u.jsx)(k.a,{}),label:"Male"}),Object(u.jsx)(w.a,{value:"female",control:Object(u.jsx)(k.a,{}),label:"Female"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{label:"Residential Adress",variant:"outlined",color:"primary",fullWidth:!0,inputRef:v}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{children:"Date of Birth"}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{type:"date",variant:"outlined",color:"primary",fullWidth:!0,required:!0,inputRef:N}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsxs)(i.b,{to:s,children:[" ",Object(u.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return function(){var c={name:h.current.value,email:p.current.value,phone:m.current.value,gender:f.current.value,address:v.current.value,birthday:N.current.value};h.current.value&&p.current.value&&""!==m.current.value?(e.addUserinfo(c),a("/Home")):(a("/RegisterUser"),O(!0))}()},children:"Submit"})," "]}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),"   ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})]})},W=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("h1",{className:"header",children:"Crowns Bank"})}),Object(u.jsxs)(n.c,{children:[Object(u.jsx)(n.a,{exact:!0,path:"/",children:Object(u.jsx)(h,{})}),Object(u.jsx)(n.a,{exact:!0,path:"/RegisterUser",children:Object(u.jsx)(C,{})}),Object(u.jsx)(n.a,{exact:!0,path:"/Home",children:Object(u.jsx)(g,{})})]})]})})};j.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{children:Object(u.jsx)(W,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.11e535e1.chunk.js.map