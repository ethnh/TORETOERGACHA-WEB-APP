import{H as d,L as i,r as e,o as u,c as h,a as o,w as f,F as p,b as t,t as c,g as l}from"./app.dc8eb5b8.js";import{U as b}from"./UserLayout.19cf6f55.js";import{F as g}from"./toastify.5ab8cc9b.js";import{G as x}from"./GachaButtons.2edef7d1.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PlayIcon.3fc1ad8a.js";const y={components:{Head:d,UserLayout:b,Footer:g,Link:i,GachaButtons:x},props:{errors:Object,gachas:Object,category_share:Object},data(){return{}},methods:{format_number(n){return String(n).replace(/(.)(?=(\d{3})+$)/g,"$1,")}}},v={class:"absolute w-full h-full overflow-y-auto"},B={class:"md:w-[760px] w-full mx-auto bg-white md:py-6 py-0"},G={class:"mx-auto relative w-full md:max-w-[430px]"},L={class:"flex justify-end p-6 absolute top-0 w-full"},j={class:"rounded-full py-0.5 w-fit px-4 text-sm border-2 border-white bg-white items-center flex align-center"},k=t("span",{class:"font-semibold text-sm"},"\u6B8B\xA0\xA0",-1),F={class:"font-semibold text-sm"},H={class:"text-sm"},U=t("img",{src:"/images/icon_cash.png",class:"w-5 h-5"},null,-1),N={class:"font-semibold text-sm"},O=t("span",{class:"text-sm"},"PT",-1),V=["src"],C={class:"absolute w-full",style:{bottom:"60px"}};function S(n,T,s,D,E,a){const r=e("Head"),m=e("GachaButtons"),_=e("UserLayout");return u(),h(p,null,[o(r,{title:"\u30AC\u30C1\u30E3"}),o(_,null,{default:f(()=>[t("div",v,[t("div",B,[t("div",G,[t("div",L,[t("button",j,[k,t("span",F,c(a.format_number(s.gachas.data[0].count_rest)),1),t("span",H,"/"+c(a.format_number(s.gachas.data[0].count_card)),1),l(" \xA0\xA0\xA0\xA0 "),U,l("\xA0\xA0 "),t("span",N,c(a.format_number(s.gachas.data[0].point)),1),O])]),t("img",{src:s.gachas.data[0].image,class:"block w-full mb-[140px]"},null,8,V)])])]),t("div",C,[o(m,{gacha:s.gachas.data[0]},null,8,["gacha"])])]),_:1})],64)}const K=w(y,[["render",S]]);export{K as default};