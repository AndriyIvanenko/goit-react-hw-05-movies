"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{47:function(n,t,e){e.d(t,{e:function(){return d}});var o,r,c=e(168),a=e(444),i=e(87),u=a.ZP.li(o||(o=(0,c.Z)(["\n  margin-bottom: 2px;\n"]))),s=(0,a.ZP)(i.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: blue;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),l=e(739),f=e(184),d=function(n){var t=n.list;console.log("MOVIE LIST");var e=(0,l.TH)();return(0,f.jsx)("ul",{children:t.map((function(n){return(0,f.jsx)(u,{children:(0,f.jsx)(s,{to:"/movies/".concat(n.id),state:{from:e},children:n.title||n.name})},n.id)}))})}},870:function(n,t,e){e.d(t,{FP:function(){return a},IQ:function(){return u},Jh:function(){return s},TP:function(){return i},dT:function(){return c}});var o=e(44),r="babda8599831afaa2c30cb95eedbc1fe";o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(n,t){o.ZP.get("trending/movie/day?api_key=".concat(r),{signal:t.signal}).then((function(t){n(t.data.results)})).catch((function(n){return console.log(n)}))},a=function(n,t,e){o.ZP.get("search/movie?query=".concat(n,"&api_key=").concat(r),{signal:e.signal}).then((function(n){t(n.data.results)})).catch((function(n){return console.log(n)}))},i=function(n,t,e,c){o.ZP.get("movie/".concat(n,"?api_key=").concat(r),{signal:c.signal}).then((function(n){t(n.data);var o=[];n.data.genres.map((function(n){return o.push(n.name)})),e(o)})).catch((function(n){return console.log(n)}))},u=function(n,t,e){o.ZP.get("movie/".concat(n,"/credits?api_key=").concat(r),{signal:e.signal}).then((function(n){0!==n.data.cast.length&&t(n.data.cast)})).catch((function(n){return console.log(n)}))},s=function(n,t,e){o.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(r),{signal:e.signal}).then((function(n){0!==n.data.total_results&&t(n.data.results)})).catch((function(n){return console.log(n)}))}},436:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var o,r,c,a,i=e(885),u=e(791),s=e(739),l=e(168),f=e(444),d=f.ZP.main(o||(o=(0,l.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),g=f.ZP.form(r||(r=(0,l.Z)(["\n  border: 1px solid grey;\n  border-radius: 4px;\n  width: fit-content;\n  overflow: hidden;\n"]))),h=f.ZP.input(c||(c=(0,l.Z)(["\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n"]))),p=f.ZP.button(a||(a=(0,l.Z)(["\n  border: none;\n  background-color: #dfdfdf;\n  height: 26px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #fc3838;\n    color: #fff;\n  }\n"]))),m=e(184),v=function(n){var t=n.onFormSubmit;console.log("FORM");var e=(0,u.useState)(""),o=(0,i.Z)(e,2),r=o[0],c=o[1];return(0,m.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(r),c("")},children:[(0,m.jsx)("label",{htmlFor:"searchRequest"}),(0,m.jsx)(h,{type:"text",autoComplete:"off",name:"searchRequest",value:r,onChange:function(n){c(n.currentTarget.value)}}),(0,m.jsx)(p,{type:"submit",children:"search"})]})},b=e(47),x=e(870),Z=function(){console.log("------ MOVIES ------");var n=(0,u.useState)([]),t=(0,i.Z)(n,2),e=t[0],o=t[1],r=(0,u.useState)(""),c=(0,i.Z)(r,2),a=c[0],l=c[1],f=(0,s.UO)(),g=(0,s.s0)();(0,u.useEffect)((function(){if(""!==a){var n=new AbortController;return(0,x.FP)(a,o,n),function(){n.abort()}}}),[a]);return(0,m.jsxs)(d,{children:["{}"===JSON.stringify(f)&&(0,m.jsx)(v,{onFormSubmit:function(n){l(n),g("?query=".concat(n))}}),0!==e.length&&"{}"===JSON.stringify(f)&&(0,m.jsx)(b.e,{list:e}),(0,m.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=436.e2baa60e.chunk.js.map