import{a as _}from"./chunk-GKVMCAI3.js";import{c as C,d as x,e as v}from"./chunk-LTZGX3IG.js";import"./chunk-CATICV5Q.js";import{k as g,m as f}from"./chunk-5OLW3BSY.js";import{Fa as m,Ja as s,Qa as a,Ta as i,Ua as r,Va as c,fb as d,gb as l,ib as h,nb as u,va as o}from"./chunk-PLTF5HLD.js";var P=n=>[n];function S(n,M){if(n&1&&(i(0,"a",6),l(1),r()),n&2){let t=M.$implicit;a("routerLink",u(2,P,t.path)),o(),h(" ",t.name," ")}}var O=(()=>{class n{constructor(){this.examples=[{path:"fade",name:"Fade Animations"},{path:"slide",name:"Slide Animations"},{path:"stagger",name:"Stagger Animations"},{path:"route-transitions",name:"Route Transitions"},{path:"flip-card",name:"Flip Card"},{path:"expandable-panel",name:"Expandable Panel"},{path:"animated-list",name:"Animated List"}]}prepareRoute(t){return!t||!t.isActivated?"none":t.activatedRoute.url}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=m({type:n,selectors:[["app-animations-showcase"]],decls:7,vars:2,consts:[["outlet","outlet"],[1,"animations-container"],[1,"examples-nav"],["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],[1,"content"],[1,"route-container"],["routerLinkActive","active",3,"routerLink"]],template:function(e,p){if(e&1&&(i(0,"div",1)(1,"nav",2),s(2,S,2,4,"a",3),r(),i(3,"div",4)(4,"div",5),c(5,"router-outlet",null,0),r()()()),e&2){let A=d(6);o(2),a("ngForOf",p.examples),o(2),a("@routeAnimations",p.prepareRoute(A))}},dependencies:[f,g,C,x,v],styles:[".animations-container[_ngcontent-%COMP%]{padding:20px}.animations-container[_ngcontent-%COMP%]   .examples-nav[_ngcontent-%COMP%]{display:flex;gap:20px;margin-bottom:30px}.animations-container[_ngcontent-%COMP%]   .examples-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 16px;text-decoration:none;color:#333;border-radius:4px;transition:all .3s ease}.animations-container[_ngcontent-%COMP%]   .examples-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#f0f0f0}.animations-container[_ngcontent-%COMP%]   .examples-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#007bff;color:#fff}.animations-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px;border-radius:8px;background:#fff;box-shadow:0 2px 8px #0000001a;position:relative;min-height:400px;overflow:hidden}.animations-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .route-container[_ngcontent-%COMP%]{position:relative;width:100%;min-height:400px}"],data:{animation:[_]}})}}return n})();var T=[{path:"",component:O,children:[{path:"fade",loadComponent:()=>import("./chunk-SFYW4AZY.js").then(n=>n.FadeAnimationsComponent)},{path:"slide",loadComponent:()=>import("./chunk-HQOIZLR4.js").then(n=>n.SlideAnimationsComponent)},{path:"stagger",loadComponent:()=>import("./chunk-FRQCCJUP.js").then(n=>n.StaggerAnimationsComponent)},{path:"route-transitions",loadComponent:()=>import("./chunk-TNOQZZ4K.js").then(n=>n.RouteTransitionsComponent)},{path:"flip-card",loadComponent:()=>import("./chunk-6ZUJRFQO.js").then(n=>n.FlipCardComponent)},{path:"expandable-panel",loadComponent:()=>import("./chunk-WLQLWSQL.js").then(n=>n.ExpandablePanelComponent)},{path:"animated-list",loadComponent:()=>import("./chunk-22J42Y5B.js").then(n=>n.AnimatedListComponent)},{path:"",redirectTo:"fade",pathMatch:"full"}]}];export{T as ANIMATIONS_ROUTES};
