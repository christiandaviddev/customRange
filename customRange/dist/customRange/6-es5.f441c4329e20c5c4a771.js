!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ubMR:function(t,r,a){"use strict";a.r(r),a.d(r,"FixedValuesRangeModule",function(){return m});var i,u,o,c=a("ofXK"),s=a("tyNb"),l=a("LRne"),b=a("vkgz"),f=a("JIr8"),d=a("fXoL"),g=a("dRiO"),p=a("3Pt+"),v=a("j8Zf"),h=[{path:"",component:(i=function(){function t(n){e(this,t),this.filterProductsService=n}var r,a,i;return r=t,(a=[{key:"ngOnInit",value:function(){this.getPriceValues()}},{key:"getPriceValues",value:function(){var e=this;this.filterProductsService.getPricesValues().pipe(Object(b.a)(function(n){var t;return e.values=null!==(t=null==n?void 0:n.values)&&void 0!==t?t:[]}),Object(f.a)(function(e){return Object(l.a)(e)})).subscribe()}}])&&n(r.prototype,a),i&&n(r,i),t}(),i.\u0275fac=function(e){return new(e||i)(d.Hb(g.a))},i.\u0275cmp=d.Bb({type:i,selectors:[["ngc-fixed-values-range"]],decls:7,vars:6,consts:[["name","range",3,"values","type","ngModel","ngModelChange"]],template:function(e,n){1&e&&(d.Kb(0,"h3"),d.Zb(1,"Fixed values range:"),d.Jb(),d.Kb(2,"form"),d.Kb(3,"ngc-range",0),d.Qb("ngModelChange",function(e){return n.rangeValues=e}),d.Jb(),d.Jb(),d.Kb(4,"p"),d.Zb(5),d.Sb(6,"json"),d.Jb()),2&e&&(d.xb(3),d.Ub("values",n.values)("type","fixed")("ngModel",n.rangeValues),d.xb(2),d.ac("rangeValues: ",d.Tb(6,4,n.rangeValues),""))},directives:[p.h,p.e,p.f,v.a,p.d,p.g],pipes:[c.e],styles:[""]}),i)}],y=((u=function n(){e(this,n)}).\u0275mod=d.Fb({type:u}),u.\u0275inj=d.Eb({factory:function(e){return new(e||u)},imports:[[s.c.forChild(h)],s.c]}),u),w=a("PCNd"),m=((o=function n(){e(this,n)}).\u0275mod=d.Fb({type:o}),o.\u0275inj=d.Eb({factory:function(e){return new(e||o)},imports:[[c.b,y,p.b,w.a]]}),o)}}])}();