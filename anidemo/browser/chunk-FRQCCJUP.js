import{c as C,d as p,g as s,j as v,k as c,l as d}from"./chunk-CATICV5Q.js";import{k as O,l as M,m as b}from"./chunk-5OLW3BSY.js";import{Fa as h,Ja as l,Qa as a,Ta as i,Ua as e,Za as x,_a as _,gb as r,ib as u,va as o}from"./chunk-PLTF5HLD.js";function P(t,g){if(t&1&&(i(0,"div",7),r(1),e()),t&2){let n=g.$implicit;o(),u(" ",n," ")}}function I(t,g){if(t&1&&(i(0,"div",5),l(1,P,2,1,"div",6),e()),t&2){let n=_();a("@listAnimation",void 0),o(),a("ngForOf",n.listItems)}}function S(t,g){if(t&1&&(i(0,"div",10),r(1),e()),t&2){let n=g.$implicit;o(),u(" ",n," ")}}function A(t,g){if(t&1&&(i(0,"div",8),l(1,S,2,1,"div",9),e()),t&2){let n=_();a("@gridAnimation",void 0),o(),a("ngForOf",n.gridItems)}}var T=(()=>{class t{constructor(){this.showList=!0,this.showGrid=!0,this.listItems=["Item 1","Item 2","Item 3","Item 4","Item 5"],this.gridItems=Array.from({length:9},(n,m)=>`Grid ${m+1}`)}toggleList(){this.showList=!this.showList}toggleGrid(){this.showGrid=!this.showGrid}static{this.\u0275fac=function(m){return new(m||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-stagger-animations"]],decls:13,vars:2,consts:[[1,"stagger-examples"],[1,"example-section"],[3,"click"],["class","list-container",4,"ngIf"],["class","grid-container",4,"ngIf"],[1,"list-container"],["class","list-item",4,"ngFor","ngForOf"],[1,"list-item"],[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"]],template:function(m,f){m&1&&(i(0,"div",0)(1,"section",1)(2,"h3"),r(3,"Staggered List Items"),e(),i(4,"button",2),x("click",function(){return f.toggleList()}),r(5,"Toggle List"),e(),l(6,I,2,2,"div",3),e(),i(7,"section",1)(8,"h3"),r(9,"Grid Items"),e(),i(10,"button",2),x("click",function(){return f.toggleGrid()}),r(11,"Toggle Grid"),e(),l(12,A,2,2,"div",4),e()()),m&2&&(o(6),a("ngIf",f.showList),o(6),a("ngIf",f.showGrid))},dependencies:[b,O,M],styles:[".stagger-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]{margin-bottom:30px}.stagger-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px}.stagger-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;background:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-bottom:15px}.stagger-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0056b3}.stagger-examples[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{padding:15px;background:#f8f9fa;margin:8px 0;border-radius:4px;box-shadow:0 2px 4px #0000000d}.stagger-examples[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:15px;padding:15px 0}.stagger-examples[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{padding:20px;background:#f8f9fa;border-radius:4px;text-align:center;box-shadow:0 2px 4px #0000000d}"],data:{animation:[C("listAnimation",[v("* => *",[c(":enter",[s({opacity:0,transform:"translateY(20px)"}),d(100,[p("0.3s ease-out",s({opacity:1,transform:"translateY(0)"}))])],{optional:!0}),c(":leave",[d(100,[p("0.3s ease-in",s({opacity:0,transform:"translateY(20px)"}))])],{optional:!0})])]),C("gridAnimation",[v("* => *",[c(":enter",[s({opacity:0,transform:"scale(0.8)"}),d(50,[p("0.3s ease-out",s({opacity:1,transform:"scale(1)"}))])],{optional:!0}),c(":leave",[d(50,[p("0.3s ease-in",s({opacity:0,transform:"scale(0.8)"}))])],{optional:!0})])])]}})}}return t})();export{T as StaggerAnimationsComponent};
