import{b as s}from"./chunk-GKVMCAI3.js";import"./chunk-CATICV5Q.js";import{m as d}from"./chunk-5OLW3BSY.js";import{Fa as c,Qa as p,Ta as t,Ua as e,Za as l,gb as n,va as a}from"./chunk-PLTF5HLD.js";var h=(()=>{class i{constructor(){this.cardState="front"}toggleFlip(){this.cardState=this.cardState==="front"?"back":"front"}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-flip-card"]],decls:12,vars:1,consts:[[1,"flip-container"],[1,"card",3,"click"],[1,"front"],[1,"back"]],template:function(o,r){o&1&&(t(0,"div",0)(1,"div",1),l("click",function(){return r.toggleFlip()}),t(2,"div",2)(3,"h3"),n(4,"Click to Flip"),e(),t(5,"p"),n(6,"Front Content"),e()(),t(7,"div",3)(8,"h3"),n(9,"Back Side"),e(),t(10,"p"),n(11,"Back Content"),e()()()()),o&2&&(a(),p("@flipState",r.cardState))},dependencies:[d],styles:[".flip-container[_ngcontent-%COMP%]{perspective:1000px;margin:20px}.card[_ngcontent-%COMP%]{position:relative;width:300px;height:200px;cursor:pointer;transform-style:preserve-3d}.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;backface-visibility:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:8px;box-shadow:0 4px 8px #0000001a}.front[_ngcontent-%COMP%]{background:#fff}.back[_ngcontent-%COMP%]{background:#f8f9fa;transform:rotateY(180deg)}"],data:{animation:[s]}})}}return i})();export{h as FlipCardComponent};
