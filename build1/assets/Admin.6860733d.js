import{C as S,S as F,F as N,f as z,o as j,N as R,V as X,r as A,a as P,b as E,v as W,I as q,g as G,c as H,_ as J,m as d,T as K}from"./toastify.5ab8cc9b.js";import{L as y,h as r,r as a,o as l,c as u,a as n,w as i,b as e,t as p,F as Q,i as U,f as h,j as b,g as x,n as Y,k as Z,l as $}from"./app.dc8eb5b8.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const V={components:{Link:y},props:{},data(){return{category_share:r().props.value.category_share,is_gacha:0,url_gacha:"",url_dp:""}},mounted(){this.is_gacha=r().props.value.branch_is_gacha,this.url_dp=route("main.dp")+this.category_share.cat_route_appendix,this.url_gacha=route("main")+this.category_share.cat_route_appendix}};function ee(s,o,k,C,t,M){return null}const te=w(V,[["render",ee]]),se={components:{Category:S,Branch:te,Sidebar:F,Footer:N,TransitionRoot:z,TransitionChild:j,Dialog:R,DialogOverlay:X,XMarkIcon:A,ChevronLeftIcon:P,Bars3Icon:E,Link:y,Menu:W,MenuButton:q,MenuItems:G,MenuItem:H,Logo:J},data(){return{sidebarOpened:!1,isDialogMessage:!1,dialogMessage:"",dialogTitle:"",page_title:"",user:{},point_value:0,dp_value:0,point_link:route("user.point"),hide_cat_bar:"",hide_back_btn:"",show_result_bg:"",show_notification:0,result_bg_image:"url(/images/result_bg.png)",show_banner:null}},mounted(){let s=route().current();for(let o=0;o<d.length;o++)if(s.includes(d[o].route_name)){this.page_title=d[o].title;break}this.user=r().props.value.auth.user,this.user&&(this.point_value=this.user.point,this.dp_value=this.user.dp,this.user.type==1&&(this.point_link=route("admin.point"))),this.gacha_button=r().props.value.gacha_button,this.hide_cat_bar=r().props.value.hide_cat_bar,this.hide_back_btn=r().props.value.hide_back_btn,this.show_result_bg=r().props.value.show_result_bg,this.show_notification=r().props.value.show_notification,this.show_banner=r().props.value.show_banner},computed:{flash(){return r().props.value.flash}},watch:{flash:function(s,o){s.type=="notification"&&this.notification(s.message),s.type=="dialog"&&(this.dialogMessage=s.message,this.dialogTitle=s.title,this.isDialogMessage=!0),s.data&&s.data.user&&(this.point_value=s.data.user.point,this.dp_value=s.data.user.dp)}},methods:{format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},notification(s){s&&K({text:s,duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!1,className:"toastify-content newClass",onClick:function(){}}).showToast()},back(){window.history.back()}}},oe={class:"flex min-h-screen text-neutral-700 text-base underline-offset-2 font-medium"},ne={class:"flex flex-col relative z-10 h-full w-64 bg-gray-100 border-l border-neutral-200 ml-auto"},ae=e("div",{class:"p-4"},null,-1),ie={class:"flex-1 overflow-y-auto"},re={class:"flex flex-col text-neutral-700 rounded relative z-20 top-20 w-fit min-w-64 px-4 bg-neutral-50 border-l border-neutral-200 m-auto w-96 max-w-full"},le={class:"pt-3 pb-1 px-1 text-center font-bold"},ce={class:"px-4 text-sm text-center"},ue=e("br",null,null,-1),_e=e("hr",{class:"mt-3"},null,-1),de={class:"min-h-screen w-full flex flex-col"},pe={class:"flex-shrink-0 w-full"},he={key:0,class:"bg-red-600 text-sm py-1 text-white"},fe=e("div",{class:"md:w-[760px] w-full mx-auto md:px-0 px-1"},"3\u67081\u65E5(\u6C34)19\u301C20\u6642\u3088\u308A\u3001\u30B5\u30A4\u30C8\u5185\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u3092\u884C\u3044\u307E\u3059\u3002\u3054\u8FF7\u60D1\u304A\u639B\u3051\u81F4\u3057\u307E\u3059\u304C\u3001\u4F55\u5352\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u7533\u3057\u4E0A\u3052\u307E\u3059\u3002",-1),me=[fe],ge={class:"flex justify-center xl:px-8 px-0 py-6"},ve={class:"md:w-[760px] w-full flex md:px-0 px-2 mx-auto justify-center"},be={class:"flex items-center flex-1 pr-4"},xe={class:"flex-shrink-0 flex items-center"},ye={class:"flex items-center py-1 px-3"},we=e("img",{src:"/images/icon_cash.png",class:"h-6 mr-2"},null,-1),ke={class:"font-bold"},Ce=e("div",{class:"flex items-center bg-[#60493d] px-2.5"},[e("span",{class:"text-lg"},"+")],-1),Me={class:"relative flex-shrink-0 flex items-center"},Te={key:1,class:"md:w-[760px] w-full flex justify-center mx-auto"},De=["href"],Oe=["src"],Be={class:"w-full flex-1 relative"},Ie={class:"absolute w-full h-full overflow-y-auto"},Le={class:"relative min-h-full"};function Se(s,o,k,C,t,M){const T=a("XMarkIcon"),D=a("Sidebar"),_=a("TransitionChild"),f=a("DialogOverlay"),m=a("Dialog"),g=a("TransitionRoot"),O=a("Logo"),v=a("Link"),B=a("Branch"),I=a("Category"),L=a("Footer");return l(),u("div",oe,[n(g,{show:t.sidebarOpened,class:"h-full"},{default:i(()=>[n(m,{open:t.sidebarOpened,onClose:o[1]||(o[1]=c=>t.sidebarOpened=!1),class:"fixed h-full inset-0 z-40"},{default:i(()=>[n(_,{enter:"transition ease-in-out duration-200 transform","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-x-0","leave-to":"translate-x-full",as:"template"},{default:i(()=>[e("div",ne,[e("button",{onClick:o[0]||(o[0]=c=>t.sidebarOpened=!1),class:"absolute top-2 right-2 mt-8 mr-8 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none",type:"button",value:"Close sidebar"},[n(T,{class:"h-5 w-5"})]),ae,e("div",ie,[n(D)])])]),_:1}),n(_,{enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:i(()=>[n(f,{class:"fixed inset-0"})]),_:1})]),_:1},8,["open"])]),_:1},8,["show"]),n(g,{show:t.isDialogMessage,class:"h-full"},{default:i(()=>[n(m,{open:t.isDialogMessage,onClose:o[3]||(o[3]=c=>t.isDialogMessage=!1),class:"fixed h-full inset-0 z-40"},{default:i(()=>[n(_,{enter:"transition ease-in-out duration-200 transform","enter-from":"translate-y-full","enter-to":"translate-y-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-y-0","leave-to":"translate-y-full",as:"template"},{default:i(()=>[e("div",re,[e("div",le,p(t.dialogTitle),1),e("div",ce,[(l(!0),u(Q,null,U(t.dialogMessage.split("<br>"),c=>(l(),u("span",null,[x(p(c)+" ",1),ue]))),256))]),_e,e("button",{onClick:o[2]||(o[2]=c=>t.isDialogMessage=!1),class:"cursor-pointer p-2 text-cyan-500 text-center text-base focus-visible:outline-0"}," Ok ")])]),_:1}),n(_,{enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:i(()=>[n(f,{class:"fixed inset-0 bg-neutral-600 h-full bg-opacity-50"})]),_:1})]),_:1},8,["open"])]),_:1},8,["show"]),e("div",de,[e("div",pe,[t.show_notification?(l(),u("div",he,me)):h("",!0),e("div",ge,[e("div",ve,[e("div",be,[n(O)]),e("div",xe,[n(v,{href:t.point_link,class:"flex text-center text-sm text-white mr-4 rounded-md bg-[#896858] overflow-hidden"},{default:i(()=>[e("div",ye,[we,e("span",ke,p(t.point_value)+"\xA0PT",1)]),Ce]),_:1},8,["href"])]),e("div",Me,[this.user?(l(),u("img",{key:0,onClick:o[4]||(o[4]=c=>t.sidebarOpened=!0),class:"w-8 h-8 inline cursor-pointer",src:"/images/dopakun.png"})):(l(),b(v,{key:1,href:s.route("login"),class:"h-8 border-solid border-neutral-600 hover:bg-[#896858] border rounded-md py-1 px-5 text-sm text-black hover:text-white"},{default:i(()=>[x("\u30ED\u30B0\u30A4\u30F3")]),_:1},8,["href"]))])])]),n(B),t.show_banner?(l(),u("div",Te,[e("a",{href:t.show_banner.link_url,target:"_blank"},[e("img",{class:"w-full",src:t.show_banner.image},null,8,Oe)],8,De)])):h("",!0),t.hide_cat_bar?h("",!0):(l(),b(I,{key:2}))]),e("main",Be,[e("div",Ie,[e("div",Le,[e("div",{class:Y({"md:w-[760px]":!t.show_result_bg,"w-full mx-auto footer_padding bg-no-repeat bg-cover":!0})},[e("div",{style:Z([t.show_result_bg?{backgroundImage:t.result_bg_image}:{},"min-height: calc( 100vh - 336px )"]),class:"bg-no-repeat bg-cover bg-center"},[$(s.$slots,"default")],4)],2),n(L)])])])])])}const je=w(se,[["render",Se]]);export{je as A,te as B};