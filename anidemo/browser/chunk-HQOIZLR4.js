import{c as g,d as c,g as _,h as x,j as d}from"./chunk-CATICV5Q.js";import{k as b,l as S,m as w}from"./chunk-5OLW3BSY.js";import{Fa as h,Ja as f,Qa as l,Ta as e,Ua as n,Y as C,Ya as v,Z as P,Za as p,_a as O,gb as i,ib as M,va as r}from"./chunk-PLTF5HLD.js";function k(t,u){t&1&&(e(0,"div",7)(1,"h4"),i(2,"Sliding Panel Content"),n(),e(3,"p"),i(4,"This panel slides in from the left and out to the left."),n()()),t&2&&l("@slideInOut",void 0)}function y(t,u){if(t&1){let o=v();e(0,"div",8),i(1),e(2,"button",9),p("click",function(){let a=C(o).index,m=O();return P(m.removeNotification(a))}),i(3,"\xD7"),n()()}if(t&2){let o=u.$implicit;l("@slideUpDown",void 0),r(),M(" ",o," ")}}var D=(()=>{class t{constructor(){this.showSlidePanel=!1,this.notifications=["New message received","Task completed successfully","System update available"]}togglePanel(){this.showSlidePanel=!this.showSlidePanel}removeNotification(o){this.notifications.splice(o,1)}addNotification(){this.notifications.push(`Notification ${this.notifications.length+1}`)}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-slide-animations"]],decls:15,vars:2,consts:[[1,"slide-examples"],[1,"example-section"],[3,"click"],[1,"panel-container"],["class","slide-panel",4,"ngIf"],[1,"notifications-list"],["class","notification",4,"ngFor","ngForOf"],[1,"slide-panel"],[1,"notification"],[1,"remove-btn",3,"click"]],template:function(s,a){s&1&&(e(0,"div",0)(1,"section",1)(2,"h3"),i(3,"Slide Panel"),n(),e(4,"button",2),p("click",function(){return a.togglePanel()}),i(5,"Toggle Panel"),n(),e(6,"div",3),f(7,k,5,1,"div",4),n()(),e(8,"section",1)(9,"h3"),i(10,"Notifications (Slide Up/Down)"),n(),e(11,"button",2),p("click",function(){return a.addNotification()}),i(12,"Add Notification"),n(),e(13,"div",5),f(14,y,4,2,"div",6),n()()()),s&2&&(r(7),l("ngIf",a.showSlidePanel),r(7),l("ngForOf",a.notifications))},dependencies:[w,b,S],styles:[".slide-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]{margin-bottom:30px}.slide-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px}.slide-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;background:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.slide-examples[_ngcontent-%COMP%]   .example-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0056b3}.slide-examples[_ngcontent-%COMP%]   .panel-container[_ngcontent-%COMP%]{position:relative;height:200px;margin:20px 0;overflow:hidden}.slide-examples[_ngcontent-%COMP%]   .panel-container[_ngcontent-%COMP%]   .slide-panel[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background:#f8f9fa;padding:20px;border-radius:4px;box-shadow:0 2px 8px #0000001a}.slide-examples[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]{margin-top:20px}.slide-examples[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 15px;background:#f8f9fa;margin:8px 0;border-radius:4px;box-shadow:0 2px 4px #0000000d}.slide-examples[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]{padding:4px 8px;background:#dc3545;font-size:18px;line-height:1}.slide-examples[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover{background:#c82333}"],data:{animation:[g("slideInOut",[x("void",_({transform:"translateX(-100%)"})),d("void => *",[c("0.3s ease-out")]),d("* => void",[c("0.3s ease-in")])]),g("slideUpDown",[x("void",_({transform:"translateY(20px)",opacity:0})),d("void => *",[c("0.4s ease-out")]),d("* => void",[c("0.4s ease-in")])])]}})}}return t})();export{D as SlideAnimationsComponent};
