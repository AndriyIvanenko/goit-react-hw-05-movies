"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[570],{570:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var o,r,i,a,c,s,l,d,u,f,p,g,h,x=e(885),m=e(739),b=e(168),Z=e(87),v=e(444),j=v.ZP.div(o||(o=(0,b.Z)(["\n  padding-top: 16px;\n  margin-bottom: 20px;\n  border-top: 2px solid lightgrey;\n"]))),P=v.ZP.h3(r||(r=(0,b.Z)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n"]))),k=v.ZP.ul(i||(i=(0,b.Z)(["\n  margin-top: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  list-style: none;\n  border-bottom: 2px solid lightgrey;\n"]))),w=v.ZP.li(a||(a=(0,b.Z)(["\n  margin-bottom: 5px;\n"]))),y=(0,v.ZP)(Z.rU)(c||(c=(0,b.Z)(["\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 500;\n  color: blue;\n\n  &:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]))),_=e(184),z=function(){var n=(0,m.TH)();return(0,_.jsxs)(j,{children:[(0,_.jsx)(P,{children:"Additional information"}),(0,_.jsxs)(k,{children:[(0,_.jsx)(w,{children:(0,_.jsx)(y,{to:"cast",state:{from:n.state.from},children:"Cast"})}),(0,_.jsx)(w,{children:(0,_.jsx)(y,{to:"reviews",state:{from:n.state.from},children:"Reviews"})})]})]})},C=e(791),S=v.ZP.button(s||(s=(0,b.Z)(["\n  padding: 5px;\n  margin-bottom: 20px;\n  padding-right: 10px;\n\n  /* border: 1px solid #cf2828; */\n  border: none;\n  border-radius: 3px;\n  font-size: 18px;\n  font-weight: 500;\n  background-color: #dfdfdf;\n\n  &:hover {\n    background-color: #fc3838;\n    color: #fff;\n    cursor: pointer;\n  }\n"]))),T=v.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),U=v.ZP.img(d||(d=(0,b.Z)(["\n  max-width: 300px;\n  height: 100%;\n  margin-right: 20px;\n"]))),O=v.ZP.p(u||(u=(0,b.Z)(["\n  font-size: 16px;\n  margin-bottom: 20px;\n"]))),A=v.ZP.h2(f||(f=(0,b.Z)(["\n  margin-bottom: 5px;\n  font-size: 28px;\n"]))),F=v.ZP.p(p||(p=(0,b.Z)(["\n  margin-bottom: 30px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),G=v.ZP.h4(g||(g=(0,b.Z)(["\n  margin-bottom: 5px;\n  font-size: 20px;\n"]))),H=v.ZP.p(h||(h=(0,b.Z)(["\n  font-size: 16px;\n"]))),J=e(870),R=e(793),q=function(){var n=(0,C.useState)({}),t=(0,x.Z)(n,2),e=t[0],o=t[1],r=(0,C.useState)([]),i=(0,x.Z)(r,2),a=i[0],c=i[1],s=(0,m.UO)().id,l=(0,m.s0)(),d=(0,m.TH)();return(0,C.useEffect)((function(){var n=new AbortController;return(0,J.TP)(s,o,c,n),function(){return n.abort()}}),[s]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S,{type:"button",onClick:function(n){"button"===n.target.type&&l(d.state.from)},children:"\u2190 Go back"}),(0,_.jsxs)(T,{children:[(0,_.jsx)(U,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"poster"}),"{}"!==JSON.stringify(e)&&(0,_.jsxs)("div",{children:[(0,_.jsxs)(A,{children:[e.title||e.name," (",e.release_date.slice(0,4),")"]}),(0,_.jsxs)(F,{children:["User Score: ",Math.round(10*e.vote_average),"%"]}),(0,_.jsx)(G,{children:"Overview"}),(0,_.jsx)(O,{children:e.overview}),(0,_.jsx)(G,{children:"Genres:"}),(0,_.jsx)(H,{children:a.join(", ")})]})]}),(0,_.jsx)(z,{}),(0,_.jsx)(C.Suspense,{fallback:(0,_.jsx)(R.a,{}),children:(0,_.jsx)(m.j3,{})})]})}},870:function(n,t,e){e.d(t,{FP:function(){return a},IQ:function(){return s},Jh:function(){return l},TP:function(){return c},dT:function(){return i}});var o=e(44),r="babda8599831afaa2c30cb95eedbc1fe";o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(n,t){o.ZP.get("trending/movie/day?api_key=".concat(r),{signal:t.signal}).then((function(t){n(t.data.results)})).catch((function(n){return console.log(n)}))},a=function(n,t,e){o.ZP.get("search/movie?query=".concat(n,"&api_key=").concat(r),{signal:e.signal}).then((function(n){t(n.data.results)})).catch((function(n){return console.log(n)}))},c=function(n,t,e,i){o.ZP.get("movie/".concat(n,"?api_key=").concat(r),{signal:i.signal}).then((function(n){t(n.data);var o=[];n.data.genres.map((function(n){return o.push(n.name)})),e(o)})).catch((function(n){return console.log(n)}))},s=function(n,t,e){o.ZP.get("movie/".concat(n,"/credits?api_key=").concat(r),{signal:e.signal}).then((function(n){0!==n.data.cast.length&&t(n.data.cast)})).catch((function(n){return console.log(n)}))},l=function(n,t,e){o.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(r),{signal:e.signal}).then((function(n){0!==n.data.total_results&&t(n.data.results)})).catch((function(n){return console.log(n)}))}}}]);
//# sourceMappingURL=570.552e6cb5.chunk.js.map