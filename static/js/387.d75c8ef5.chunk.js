"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var c,a,i,o=e(885),r=e(791),u=e(739),l=e(168),s=e(444),f=s.ZP.img(c||(c=(0,l.Z)(["\n  max-width: 75px;\n  height: 100%;\n  margin-right: 20px;\n"]))),g=s.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n"]))),h=s.ZP.p(i||(i=(0,l.Z)(["\n  font-weight: 700;\n  margin-bottom: 5px;\n"]))),d=e(511),p=e(870),m=e(184),b=function(){console.log("CAST");var n=(0,r.useState)([]),t=(0,o.Z)(n,2),e=t[0],c=t[1],a=(0,u.UO)().id;return(0,r.useEffect)((function(){if(0===e.length){var n=new AbortController;return(0,p.IQ)(a,c,n),function(){return n.abort()}}}),[a,e]),(0,m.jsx)("ul",{children:0!==e.length&&e.map((function(n){return(0,m.jsxs)(g,{children:[(0,m.jsx)(f,{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):d,alt:"profile img"}),(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{children:n.name}),(0,m.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))})}},870:function(n,t,e){e.d(t,{FP:function(){return o},IQ:function(){return u},Jh:function(){return l},TP:function(){return r},dT:function(){return i}});var c=e(44),a="babda8599831afaa2c30cb95eedbc1fe";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(n,t){c.ZP.get("trending/movie/day?api_key=".concat(a),{signal:t.signal}).then((function(t){n(t.data.results)})).catch((function(n){return console.log(n)}))},o=function(n,t,e){c.ZP.get("search/movie?query=".concat(n,"&api_key=").concat(a),{signal:e.signal}).then((function(n){t(n.data.results)})).catch((function(n){return console.log(n)}))},r=function(n,t,e){c.ZP.get("movie/".concat(n,"?api_key=").concat(a),{signal:e.signal}).then((function(n){t(n.data)})).catch((function(n){return console.log(n)}))},u=function(n,t,e){c.ZP.get("movie/".concat(n,"/credits?api_key=").concat(a),{signal:e.signal}).then((function(n){t(n.data.cast)})).catch((function(n){return console.log(n)}))},l=function(n,t,e){c.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(a),{signal:e.signal}).then((function(n){0!==n.data.total_results&&t(n.data.results)})).catch((function(n){return console.log(n)}))}},511:function(n,t,e){n.exports=e.p+"static/media/default.profile.d2c82f79e01f7ce50439.png"}}]);
//# sourceMappingURL=387.d75c8ef5.chunk.js.map