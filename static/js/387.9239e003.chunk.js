"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var c,o,a,i=e(885),r=e(791),u=e(739),f=e(168),s=e(444),l=s.ZP.img(c||(c=(0,f.Z)(["\n  max-width: 75px;\n  height: 100%;\n  margin-right: 20px;\n"]))),h=s.ZP.li(o||(o=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n"]))),p=s.ZP.p(a||(a=(0,f.Z)(["\n  font-weight: 700;\n  margin-bottom: 5px;\n"]))),d=e(511),g=e(870),m=e(184),x=function(){console.log("CAST");var t=(0,r.useState)([]),n=(0,i.Z)(t,2),e=n[0],c=n[1],o=(0,u.UO)().id;return(0,r.useEffect)((function(){0===e.length&&(0,g.IQ)(o,c)}),[o,e]),(0,m.jsx)("ul",{children:0!==e.length&&e.map((function(t){return(0,m.jsxs)(h,{children:[(0,m.jsx)(l,{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):d,alt:"profile img"}),(0,m.jsxs)("div",{children:[(0,m.jsx)(p,{children:t.name}),(0,m.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})}},870:function(t,n,e){e.d(n,{FP:function(){return i},IQ:function(){return u},Jh:function(){return f},TP:function(){return r},dT:function(){return a}});var c=e(44),o="babda8599831afaa2c30cb95eedbc1fe";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var a=function(t){c.ZP.get("trending/movie/day?api_key=".concat(o)).then((function(n){t(n.data.results)})).catch((function(t){return console.log(t)}))},i=function(t,n){c.ZP.get("search/movie?query=".concat(t,"&api_key=").concat(o)).then((function(t){n(t.data.results)})).catch((function(t){return console.log(t)}))},r=function(t,n,e,a){c.ZP.get("movie/".concat(t,"?api_key=").concat(o)).then((function(t){n(t.data),a(e.genres.map((function(t){return t.name+", "})))})).catch((function(t){return console.log(t)}))},u=function(t,n){c.ZP.get("movie/".concat(t,"/credits?api_key=").concat(o)).then((function(t){n(t.data.cast)})).catch((function(t){return console.log(t)}))},f=function(t,n){c.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(o)).then((function(t){0!==t.data.total_results&&n(t.data.results)})).catch((function(t){return console.log(t)}))}},511:function(t,n,e){t.exports=e.p+"static/media/default.profile.d2c82f79e01f7ce50439.png"}}]);
//# sourceMappingURL=387.9239e003.chunk.js.map