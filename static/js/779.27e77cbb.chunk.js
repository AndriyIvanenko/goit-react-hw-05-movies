"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var c,o,a,i=e(885),r=e(870),u=e(791),s=e(739),l=e(168),f=e(444),h=f.ZP.li(c||(c=(0,l.Z)(["\n  margin-bottom: 30px;\n"]))),d=f.ZP.h4(o||(o=(0,l.Z)(["\n  font-size: 14px;\n  margin-bottom: 10px;\n"]))),g=f.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 12px;\n"]))),p=e(184),m=function(){console.log("REVIEWS");var n=(0,u.useState)([]),t=(0,i.Z)(n,2),e=t[0],c=t[1],o=(0,s.UO)().id;return(0,u.useEffect)((function(){if(0===e.length){var n=new AbortController;return(0,r.Jh)(o,c,n),function(){return n.abort()}}}),[o,e]),(0,p.jsx)("div",{children:0!==e.length?e.map((function(n){return(0,p.jsx)("ul",{children:(0,p.jsxs)(h,{children:[(0,p.jsx)(d,{children:n.author}),(0,p.jsx)(g,{children:n.content})]},n.id)})})):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})})}},870:function(n,t,e){e.d(t,{FP:function(){return i},IQ:function(){return u},Jh:function(){return s},TP:function(){return r},dT:function(){return a}});var c=e(44),o="babda8599831afaa2c30cb95eedbc1fe";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var a=function(n,t){c.ZP.get("trending/movie/day?api_key=".concat(o),{signal:t.signal}).then((function(t){n(t.data.results)})).catch((function(n){return console.log(n)}))},i=function(n,t,e){c.ZP.get("search/movie?query=".concat(n,"&api_key=").concat(o),{signal:e.signal}).then((function(n){t(n.data.results)})).catch((function(n){return console.log(n)}))},r=function(n,t,e,a){c.ZP.get("movie/".concat(n,"?api_key=").concat(o),{signal:a.signal}).then((function(n){t(n.data);var c=[];n.data.genres.map((function(n){return c.push(n.name)})),e(c)})).catch((function(n){return console.log(n)}))},u=function(n,t,e){c.ZP.get("movie/".concat(n,"/credits?api_key=").concat(o),{signal:e.signal}).then((function(n){0!==n.data.cast.length&&t(n.data.cast)})).catch((function(n){return console.log(n)}))},s=function(n,t,e){c.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(o),{signal:e.signal}).then((function(n){0!==n.data.total_results&&t(n.data.results)})).catch((function(n){return console.log(n)}))}}}]);
//# sourceMappingURL=779.27e77cbb.chunk.js.map