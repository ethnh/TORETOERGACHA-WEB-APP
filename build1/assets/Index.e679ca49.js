import{H as _,L as p,r as n,o as r,c as i,a as c,w as m,F as l,b as t,i as x,t as d}from"./app.dc8eb5b8.js";import{A as b}from"./Admin.6860733d.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.5ab8cc9b.js";const g={components:{Head:_,AdminLayout:b,Link:p},data(){return{is_busy:!1,is_admin:!1,purchase_uri:"user.point.purchase"}},props:{errors:Object,auth:Object,category_share:Object,points:Object},methods:{checkout(o){this.is_busy=!0;const a={id:o};axios.post(route("user.point.checkouturl"),a).then(e=>{this.is_busy=!1,(e.status==201||e.status==200)&&e.data.status?(console.log(e.data.status),window.location.href=e.data.url):alert("\u30B5\u30FC\u30D0\u30FC\u304C\u6DF7\u307F\u5408\u3063\u3066\u304A\u308A\u307E\u3059\u3002\u5C11\u3057\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002")}).catch(e=>{this.is_busy=!1})}},mounted(){this.auth.user&&this.auth.user.type==1&&(this.is_admin=!0,this.purchase_uri="test.user.point.purchase")}},w={class:"pt-6 md:px-2 px-4",style:{"min-height":"400px"}},j=t("h1",{class:"mb-10 font-bold text-center text-lg underline underline-offset-8 mb-4"},"\xA0\xA0\xA0\u30DD\u30A4\u30F3\u30C8\u3092\u8CFC\u5165\u3059\u308B\xA0\xA0\xA0",-1),v={class:"grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:px-9 px-3 justify-center gap-4 pb-8"},k=["href"],L={class:"text-center flex justify-center w-full"},A=["src"],H={class:"flex-1 flex flex-wrap w-full px-2 justify-between gap-2 items-center min-h-[3rem] relative bg-[#896858]",style:{"z-index":"1"}},O={class:"text-xs flex items-center justify-center text-white font-bold text-center flex-1"},B={class:"flex-1 flex justify-center"},C={class:"rounded-full py-0.3 h-fit bg-white px-3 font-bold text-xs"};function F(o,a,e,N,u,V){const f=n("Head"),h=n("AdminLayout");return r(),i(l,null,[c(f,{title:"\u30DD\u30A4\u30F3\u30C8\u3092\u8CFC\u5165\u3059\u308B"}),c(h,null,{default:m(()=>[t("div",w,[j,t("div",v,[(r(!0),i(l,null,x(e.points.data,(s,$)=>(r(),i("a",{href:o.route(u.purchase_uri,{id:s.id}),class:"flex flex-col justify-between cursor-pointer border-2 border-solid border-gray-200 bg-white text-center relative rounded-lg overflow-hidden"},[t("div",L,[t("img",{class:"inline-block object-cover w-full -my-[10%]",src:s.image},null,8,A)]),t("div",H,[t("span",O,d(s.title),1),t("div",B,[t("button",C," \xA5\xA0"+d(s.amount_str),1)])])],8,k))),256))])])]),_:1})],64)}const S=y(g,[["render",F]]);export{S as default};