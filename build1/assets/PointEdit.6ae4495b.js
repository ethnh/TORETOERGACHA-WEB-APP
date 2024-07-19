import{H as x,u as p,r as b,o as i,c as l,a as _,w as v,F as y,b as t,d as w,e as u,v as c,t as d,f as a}from"./app.dc8eb5b8.js";import{A as k}from"./Admin.6860733d.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.5ab8cc9b.js";const j={components:{Head:x,AdminLayout:k},props:{errors:Object,auth:Object,category_share:Object,point:Object},data(){return{url:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.form.post(route("admin.point.update"))},previewImage(o){const e=o.target.files[0];this.url=URL.createObjectURL(e)}},setup(o){return{form:p({id:o.point.id,title:o.point.title,point:o.point.point,amount:o.point.amount,image:"",category_id:o.category_share.cat_id})}},mounted(){this.url=this.point.image}},L={class:"pt-6 md:px-2 px-4"},O=t("h1",{class:"mb-2 text-lg font-bold"},"\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165 \u7DE8\u96C6",-1),U=t("hr",{class:"mb-8"},null,-1),A={class:"mb-4"},C=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30BF\u30A4\u30C8\u30EB\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09",-1),H={key:0,class:"text-red-500 text-sm mt-1"},B={class:"mb-4"},F=t("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u91D1\u984D\uFF08\u534A\u89D2\u6570\u5B57\uFF09",-1),I={key:0,class:"text-red-500 text-sm mt-1"},N={class:"mb-4"},D=t("label",{for:"point",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30DD\u30A4\u30F3\u30C8\uFF08\u534A\u89D2\u6570\u5B57\uFF09",-1),E={key:0,class:"text-red-500 text-sm mt-1"},M={class:"mb-8"},R=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",-1),S={class:"text-center w-full"},P=["src"],T={key:0,class:"text-red-500 text-sm mt-1"},q=t("div",{class:"mb-8 text-center"},[t("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function z(o,e,s,n,f,m){const h=b("Head"),g=b("AdminLayout");return i(),l(y,null,[_(h,{title:"\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165 \u7DE8\u96C6"}),_(g,null,{default:v(()=>[t("div",L,[O,U,t("form",{onSubmit:e[4]||(e[4]=w(r=>m.submit(),["prevent"]))},[t("div",A,[C,u(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>n.form.title=r),id:"text1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,n.form.title]]),s.errors.title?(i(),l("div",H,d(s.errors.title),1)):a("",!0)]),t("div",B,[F,u(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>n.form.amount=r),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,n.form.amount]]),s.errors.amount?(i(),l("div",I,d(s.errors.amount),1)):a("",!0)]),t("div",N,[D,u(t("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>n.form.point=r),id:"point",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,n.form.point]]),s.errors.point?(i(),l("div",E,d(s.errors.point),1)):a("",!0)]),t("div",M,[R,t("div",S,[f.url?(i(),l("img",{key:0,src:f.url,class:"inline-block mt-4 h-52"},null,8,P)):a("",!0)]),t("input",{onChange:e[3]||(e[3]=(...r)=>m.previewImage&&m.previewImage(...r)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),s.errors.image?(i(),l("div",T,d(s.errors.image),1)):a("",!0)]),q],32)])]),_:1})],64)}const W=V(j,[["render",z]]);export{W as default};