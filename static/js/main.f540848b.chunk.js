(this.webpackJsonpmultiform=this.webpackJsonpmultiform||[]).push([[0],{29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r,c,l=t(0),o=t.n(l),a=t(19),i=t.n(a),s=(t(29),t(10)),p=t(2),d=t(3),u=t(4),b=u.a.div(r||(r=Object(d.a)(["\n    p\n    {\n        font-size: 13px;\n        color: #B8B8D4;\n    }\n    h1\n    {\n        margin: 0;\n        padding: 0;\n        font-size: 26px;\n    }\n    hr\n    {\n        height: 1px;\n        border: 0;\n        background-color: #16195C;\n        margin: 30px 0;\n    }\n\n    label \n    {\n        font-size: 13px;\n\n        input \n        {\n            display: block;\n            margin-top: 7px;\n            box-sizing: border-box;\n            width: 100%;\n            padding: 20px 10px;\n            border: 2px solid #25CD89;\n            border-radius: 10px;\n            color: #FFF;\n            outline: 0;\n            font-size: 15px;\n            background-color: #02044A;\n        }\n    }\n\n    button\n    {\n        background-color: #25CD89;\n        color: #FFF;\n        font-size: 14px;\n        font-weight: bold;\n        padding: 20px 40px;\n        border: 0;\n        border-radius: 30px;\n        cursor: pointer;\n        margin-top: 30px;\n    }\n"]))),x=t(24),j=t(9),h=t(1),g={currentStep:0,name:"",level:0,email:"",github:""},m=Object(l.createContext)(void 0);!function(e){e[e.setCurrentStep=0]="setCurrentStep",e[e.setName=1]="setName",e[e.setLevel=2]="setLevel",e[e.setEmail=3]="setEmail",e[e.setGithub=4]="setGithub"}(c||(c={}));var f,O,v,y,w,E,C,k,z,F,B,S,P=function(e,n){switch(n.type){case c.setCurrentStep:return Object(j.a)(Object(j.a)({},e),{},{currentStep:n.payload});case c.setName:return Object(j.a)(Object(j.a)({},e),{},{name:n.payload});case c.setLevel:return Object(j.a)(Object(j.a)({},e),{},{level:n.payload});case c.setEmail:return Object(j.a)(Object(j.a)({},e),{},{email:n.payload});case c.setGithub:return Object(j.a)(Object(j.a)({},e),{},{github:n.payload});default:return e}},D=function(e){var n=e.children,t=Object(l.useReducer)(P,g),r=Object(x.a)(t,2),c={state:r[0],dispatch:r[1]};return Object(h.jsx)(m.Provider,{value:c,children:n})},L=function(){var e=Object(l.useContext)(m);if(void 0===e)throw new Error("useForm precisa ser usado dentro do FormProvider");return e},I=u.a.div(f||(f=Object(d.a)(["\n    background-color: #02044A;\n    color: #FFF;\n    min-height: 100vh;\n"]))),M=u.a.div(O||(O=Object(d.a)(["\n    margin: auto;\n    max-width: 980px;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]))),A=u.a.div(v||(v=Object(d.a)(["\n    flex: 1;\n    display: flex;\n"]))),N=u.a.div(y||(y=Object(d.a)(["\n    width: 250px;\n    border-right: 1px solid #15195C;\n"]))),q=u.a.div(w||(w=Object(d.a)(["\n    flex: 1;\n    padding-left: 40px;\n    padding-top: 40px;\n"]))),G=u.a.div(E||(E=Object(d.a)(["\n    padding: 25px 0;\n    border-bottom: 1px solid #16195C;\n\n    h1\n    {\n        margin: 0;\n        padding: 0;\n        font-size: 28px;\n    }\n\n    p\n    {\n        font-size: 14px;\n        color: #B8B8D4;\n    }\n"]))),R=function(){return Object(h.jsxs)(G,{children:[Object(h.jsx)("h1",{children:"Cadastro de Desenvolvedor"}),Object(h.jsx)("p",{children:"Fa\xe7a seu cadastro e receba vagas de emprego"})]})},V=u.a.div(C||(C=Object(d.a)(["\n    margin: 30px 0;\n    cursor: pointer;\n\n    a\n    {\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n    }\n"]))),J=u.a.div(k||(k=Object(d.a)(["\n    flex: 1;\n    margin-right: 20px;\n"]))),X=u.a.div(z||(z=Object(d.a)(["\n    text-align: right;\n    font-weight: bold;\n    margin-bottom: 5px;\n    font-size: 15px;\n    color: #FFF;\n"]))),Q=u.a.div(F||(F=Object(d.a)(["\n    text-align: right;\n    font-size: 13px;\n    color: #B8B8D4;\n"]))),_=u.a.div(B||(B=Object(d.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])),(function(e){return e.active?"#25CD89":"#494A7C"})),H=u.a.div(S||(S=Object(d.a)(["\n    width: 6px;\n    height: 6px;\n    border: 3px solid #494A7C;\n    border-radius: 50%;\n    margin-left: 30px;\n    margin-right: -6px;\n    background-color: ","\n"])),(function(e){return e.active?"#25CD89":"02044A"}));function K(){return(K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function T(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var U=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M480,309.333c0-15.125-31.168-70.912-46.72-97.813c1.451-7.68,4.053-25.237,4.053-51.52c0-45.547-60.288-160-202.667-160 C94.869,0,32,106.048,32,181.333c0,53.248,31.445,107.819,56.725,151.616c14.72,25.515,28.608,49.621,28.608,61.717 c0,27.157-44.16,80.981-61.184,99.435c-2.859,3.115-3.627,7.616-1.92,11.499c1.707,3.904,5.525,6.4,9.771,6.4h234.667 c5.888,0,10.368-3.115,10.368-9.003c3.776-7.616,41.664-28.075,76.672-33.813c26.283-4.288,62.272-10.197,62.272-42.517 c0-14.059-4.864-21.312-8.085-26.112c-2.155-3.221-2.581-4.011-3.904-5.973c5.909,0.832,11.179-3.413,11.904-9.259 c0.277-2.261-0.171-4.459-1.173-6.336l8.789-8.789c2.859-2.859,3.861-7.083,2.581-10.923l-7.125-21.376 C463.253,333.675,480,324.971,480,309.333z"}))),W=l.createElement("g",null),Y=l.createElement("g",null),Z=l.createElement("g",null),$=l.createElement("g",null),ee=l.createElement("g",null),ne=l.createElement("g",null),te=l.createElement("g",null),re=l.createElement("g",null),ce=l.createElement("g",null),le=l.createElement("g",null),oe=l.createElement("g",null),ae=l.createElement("g",null),ie=l.createElement("g",null),se=l.createElement("g",null),pe=l.createElement("g",null);function de(e,n){var t=e.title,r=e.titleId,c=T(e,["title","titleId"]);return l.createElement("svg",K({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,U,W,Y,Z,$,ee,ne,te,re,ce,le,oe,ae,ie,se,pe)}var ue=l.forwardRef(de);t.p;function be(){return(be=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function xe(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var je=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M452.611,24.82c-3.605-2.844-8.314-3.877-12.781-2.813L229.16,72.4L18.49,22.008c-4.466-1.065-9.176-0.032-12.781,2.813 C2.104,27.666,0,32.005,0,36.597v333.899c0,6.94,4.761,12.974,11.511,14.589c2.241,0.536,213.117,50.985,214.402,51.27 c1.589,0.353,3.276,0.368,3.246,0.368h0.001c1.126,0,2.555-0.188,3.489-0.411l214.161-51.227c6.75-1.615,11.51-7.648,11.51-14.589 V36.597C458.32,32.005,456.216,27.665,452.611,24.82z M212.161,318.549c-1.927,8.056-10.019,13.025-18.078,11.1L43.098,293.533 c-8.057-1.928-13.026-10.021-11.099-18.078s10.02-13.023,18.078-11.1l150.985,36.115 C209.119,302.398,214.088,310.492,212.161,318.549z M212.161,253.049c-1.927,8.056-10.019,13.025-18.078,11.1L43.098,228.033 c-8.057-1.928-13.026-10.021-11.099-18.078s10.02-13.023,18.078-11.1l150.985,36.115 C209.119,236.898,214.088,244.992,212.161,253.049z M212.161,187.549c-1.927,8.056-10.019,13.025-18.078,11.1L43.098,162.533 c-8.057-1.928-13.026-10.021-11.099-18.078s10.02-13.023,18.078-11.1l150.985,36.115 C209.119,171.398,214.088,179.492,212.161,187.549z M416.062,293.533l-150.985,36.115c-8.058,1.926-16.151-3.042-18.078-11.1 c-1.927-8.057,3.042-16.15,11.099-18.078l150.985-36.115c8.059-1.924,16.151,3.042,18.078,11.1 C429.088,283.512,424.119,291.605,416.062,293.533z M416.062,228.033l-150.985,36.115c-8.058,1.926-16.151-3.042-18.078-11.1 c-1.927-8.057,3.042-16.15,11.099-18.078l150.985-36.115c8.059-1.925,16.151,3.042,18.078,11.1 C429.088,218.012,424.119,226.105,416.062,228.033z M416.062,162.533l-150.985,36.115c-8.058,1.926-16.151-3.042-18.078-11.1 c-1.927-8.057,3.042-16.15,11.099-18.078l150.985-36.115c8.059-1.926,16.151,3.042,18.078,11.1 C429.088,152.512,424.119,160.605,416.062,162.533z"}))),he=l.createElement("g",null),ge=l.createElement("g",null),me=l.createElement("g",null),fe=l.createElement("g",null),Oe=l.createElement("g",null),ve=l.createElement("g",null),ye=l.createElement("g",null),we=l.createElement("g",null),Ee=l.createElement("g",null),Ce=l.createElement("g",null),ke=l.createElement("g",null),ze=l.createElement("g",null),Fe=l.createElement("g",null),Be=l.createElement("g",null),Se=l.createElement("g",null);function Pe(e,n){var t=e.title,r=e.titleId,c=xe(e,["title","titleId"]);return l.createElement("svg",be({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 458.32 458.32",style:{enableBackground:"new 0 0 458.32 458.32"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,je,he,ge,me,fe,Oe,ve,ye,we,Ee,Ce,ke,ze,Fe,Be,Se)}var De=l.forwardRef(Pe);t.p;function Le(){return(Le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ie(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var Me=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"m194.8,286.5l46.8,51.6c7.8,8.5 22.6,8.5 30.4,0l46.8-51.6 119.8,128.7h-363.6l119.8-128.7zm-27.5-30.3l-115,123.5v-250.4l115,126.9zm89.5,38l-178.9-197.4h357.7l-178.8,197.4zm204.3-164.9v250.4l-115-123.5 115-126.9zm19.4-73.3h-449c-11.3,0-20.5,9.1-20.5,20.4v359.2c0,11.3 9.2,20.4 20.5,20.4h448.9c11.3,0 20.5-9.1 20.5-20.4v-359.2c0.1-11.3-9.1-20.4-20.4-20.4z"})));function Ae(e,n){var t=e.title,r=e.titleId,c=Ie(e,["title","titleId"]);return l.createElement("svg",Le({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",xmlnsXlink:"http://www.w3.org/1999/xlink",enableBackground:"new 0 0 512 512",ref:n,"aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,Me)}var Ne,qe,Ge,Re,Ve,Je,Xe,Qe=l.forwardRef(Ae),_e=(t.p,function(e){var n=e.title,t=e.description,r=e.icon,c=e.path,l=e.active;return Object(h.jsx)(V,{children:Object(h.jsxs)(s.b,{to:c,children:[Object(h.jsxs)(J,{children:[Object(h.jsx)(X,{children:n}),Object(h.jsx)(Q,{children:t})]}),Object(h.jsxs)(_,{active:l,children:["profile"===r&&Object(h.jsx)(ue,{fill:"white",width:24,height:24}),"book"===r&&Object(h.jsx)(De,{fill:"white",width:24,height:24}),"mail"===r&&Object(h.jsx)(Qe,{fill:"white",width:24,height:24})]}),Object(h.jsx)(H,{active:l})]})})}),He=function(e){var n=e.children,t=L().state;return Object(h.jsx)(I,{children:Object(h.jsxs)(M,{children:[Object(h.jsx)(R,{}),Object(h.jsxs)(A,{children:[Object(h.jsxs)(N,{children:[Object(h.jsx)(_e,{title:"Pessoal",description:"Se identifique",icon:"profile",path:"/",active:1===t.currentStep}),Object(h.jsx)(_e,{title:"Profissional",description:"Seu nivel",icon:"book",path:"/step2",active:2===t.currentStep}),Object(h.jsx)(_e,{title:"Contato",description:"Como te achar",icon:"mail",path:"/step3",active:3===t.currentStep})]}),Object(h.jsx)(q,{children:n})]})]})})},Ke=function(){var e=Object(p.e)(),n=L(),t=n.state,r=n.dispatch;Object(l.useEffect)((function(){r({type:c.setCurrentStep,payload:1})}),[]);return Object(h.jsx)(He,{children:Object(h.jsxs)(b,{children:[Object(h.jsx)("p",{children:"Passo 1/3"}),Object(h.jsx)("h1",{children:"Vamos come\xe7ar com seu nome"}),Object(h.jsx)("p",{children:"Preencha o campo abaixo com o seu nome completo."}),Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{children:["seu nome completo",Object(h.jsx)("input",{type:"text",autoFocus:!0,value:t.name,onChange:function(e){r({type:c.setName,payload:e.target.value})}})]}),Object(h.jsx)("button",{onClick:function(){""!==t.name?e.push("/step2"):alert("Preencha os dados.")},children:"Pr\xf3ximo"})]})})},Te=u.a.div(Ne||(Ne=Object(d.a)(["\n    p\n    {\n        font-size: 13px;\n        color: #B8B8D4;\n    }\n    h1\n    {\n        margin: 0;\n        padding: 0;\n        font-size: 26px;\n    }\n    hr\n    {\n        height: 1px;\n        border: 0;\n        background-color: #16195C;\n        margin: 30px 0;\n    }\n\n    label \n    {\n        font-size: 13px;\n\n        input \n        {\n            display: block;\n            margin-top: 7px;\n            box-sizing: border-box;\n            width: 100%;\n            padding: 20px 10px;\n            border: 2px solid #25CD89;\n            border-radius: 10px;\n            color: #FFF;\n            outline: 0;\n            font-size: 15px;\n            background-color: #02044A;\n        }\n    }\n\n    button\n    {\n        background-color: #25CD89;\n        color: #FFF;\n        font-size: 14px;\n        font-weight: bold;\n        padding: 20px 40px;\n        border: 0;\n        border-radius: 30px;\n        cursor: pointer;\n        margin-top: 30px;\n    }\n\n    .backButton\n    {\n        font-size: 16px;\n        text-decoration: none;\n        padding: 20px 40px;\n        color: #B8B8D4;\n    }\n"]))),Ue=u.a.div(qe||(qe=Object(d.a)(["\n    display: flex;\n    border: 2px solid ",";\n    border-radius: 10px;\n    padding: 20px;\n    margin-bottom: 15px;\n    align-items: center;\n\n    &:hover\n    {\n        border: 2px solid #496459;\n    }\n"])),(function(e){return e.selected?"#25CD89":"#16195C"})),We=u.a.div(Ge||(Ge=Object(d.a)(["\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background-color: #191A59;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n"]))),Ye=u.a.div(Re||(Re=Object(d.a)(["\n    flex: 1;\n    margin-left: 20px;\n"]))),Ze=u.a.div(Ve||(Ve=Object(d.a)(["\n    font-size: 17px;\n    font-weight: bold;\n    margin-bottom: 7px;\n"]))),$e=u.a.div(Je||(Je=Object(d.a)(["\n    font-size: 14px;\n    color: #B8B8D4;\n"]))),en=function(e){var n=e.title,t=e.description,r=e.icon,c=e.selected,l=e.onClick;return Object(h.jsxs)(Ue,{onClick:l,selected:c,children:[Object(h.jsx)(We,{children:r}),Object(h.jsxs)(Ye,{children:[Object(h.jsx)(Ze,{children:n}),Object(h.jsx)($e,{children:t})]})]})},nn=function(){var e=Object(p.e)(),n=L(),t=n.state,r=n.dispatch;Object(l.useEffect)((function(){""===t.name?e.push("/"):r({type:c.setCurrentStep,payload:2})}),[]);var o=function(e){r({type:c.setLevel,payload:e})};return Object(h.jsx)(He,{children:Object(h.jsxs)(Te,{children:[Object(h.jsx)("p",{children:"Passo 2/3"}),Object(h.jsxs)("h1",{children:[t.name,", o que melhor descreve voc\xea ?"]}),Object(h.jsx)("p",{children:"Escolha a op\xe7\xe3o que melhor condiz com seu estado atual, profissionalmente."}),Object(h.jsx)("hr",{}),Object(h.jsx)(en,{title:"Sou iniciante",description:"Comecei a programar h\xe1 menos de 2 anos",icon:"\ud83e\udd73",selected:0===t.level,onClick:function(){return o(0)}}),Object(h.jsx)(en,{title:"Sou programador",description:"J\xe1 programo h\xe1 2 anos ou mais",icon:"\ud83d\ude0e",selected:1===t.level,onClick:function(){return o(1)}}),Object(h.jsx)(s.b,{className:"backButton",to:"/",children:"Voltar"}),Object(h.jsx)("button",{onClick:function(){""!==t.name?e.push("/step3"):alert("Preencha os dados.")},children:"Pr\xf3ximo"})]})})},tn=u.a.div(Xe||(Xe=Object(d.a)(["\n    p\n    {\n        font-size: 13px;\n        color: #B8B8D4;\n    }\n    h1\n    {\n        margin: 0;\n        padding: 0;\n        font-size: 26px;\n    }\n    hr\n    {\n        height: 1px;\n        border: 0;\n        background-color: #16195C;\n        margin: 30px 0;\n    }\n\n    label \n    {\n        font-size: 13px;\n        display: block;\n        margin-bottom: 20px;\n\n        input \n        {\n            display: block;\n            margin-top: 7px;\n            box-sizing: border-box;\n            width: 100%;\n            padding: 20px 10px;\n            border: 2px solid #25CD89;\n            border-radius: 10px;\n            color: #FFF;\n            outline: 0;\n            font-size: 15px;\n            background-color: #02044A;\n        }\n    }\n\n    button\n    {\n        background-color: #25CD89;\n        color: #FFF;\n        font-size: 14px;\n        font-weight: bold;\n        padding: 20px 40px;\n        border: 0;\n        border-radius: 30px;\n        cursor: pointer;\n        margin-top: 30px;\n    }\n\n    .backButton\n    {\n        font-size: 16px;\n        text-decoration: none;\n        padding: 20px 40px;\n        color: #B8B8D4;\n    }\n"]))),rn=function(){var e=Object(p.e)(),n=L(),t=n.state,r=n.dispatch;Object(l.useEffect)((function(){""===t.name?e.push("/"):r({type:c.setCurrentStep,payload:3})}),[]);return Object(h.jsx)(He,{children:Object(h.jsxs)(tn,{children:[Object(h.jsx)("p",{children:"Passo 3/3"}),Object(h.jsxs)("h1",{children:["Legal ",t.name,", aonde te encontramos ?"]}),Object(h.jsx)("p",{children:"Preencha com seus contatos para conseguimos entrar em contato"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{children:["Qual seu e-mail ?",Object(h.jsx)("input",{type:"email",value:t.email,onChange:function(e){r({type:c.setEmail,payload:e.target.value})}})]}),Object(h.jsxs)("label",{children:["Qual seu github ?",Object(h.jsx)("input",{type:"url",value:t.github,onChange:function(e){r({type:c.setGithub,payload:e.target.value})},placeholder:"Coloque a url do seu perfil"})]}),Object(h.jsx)(s.b,{className:"backButton",to:"/step2",children:"Voltar"}),Object(h.jsx)("button",{onClick:function(){""!==t.email&&""!==t.github?console.log(t):alert("Preencha os dados")},children:"Finalizar Cadastro"})]})})},cn=function(){return Object(h.jsxs)(s.a,{children:[Object(h.jsx)(p.a,{path:"/",exact:!0,component:Ke}),Object(h.jsx)(p.a,{path:"/step2",component:nn}),Object(h.jsx)(p.a,{path:"/step3",component:rn})]})},ln=function(){return Object(h.jsx)(D,{children:Object(h.jsx)(cn,{})})};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(ln,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f540848b.chunk.js.map