import{s as Y,f as G}from"../chunks/scheduler.63274e7e.js";import{S as Z,i as ee,g as v,r as te,s as $,h as f,j as E,u as ae,f as _,c as A,y as le,k as u,l as C,a as X,x as r,v as re,d as se,t as ie,w as ne,z as oe,m as z,n as H,o as N}from"../chunks/index.22826ed8.js";import{B as ce,e as Q}from"../chunks/ButtonRow.9cb1d9e7.js";function U(i,e,s){const a=i.slice();return a[2]=e[s],a}function W(i){let e,s,a,p,h,D,o,c,T,V,d,y,m,n=i[2].title+"",t,I,l,S,M=i[2].channelTitle+"",k,P,w,q=i[2].timeLive+"",x,j;return{c(){e=v("div"),s=v("a"),a=v("img"),D=$(),o=v("div"),c=v("img"),V=$(),d=v("div"),y=v("p"),m=v("a"),t=z(n),l=$(),S=v("p"),k=z(M),P=$(),w=v("p"),x=z(q),j=$(),this.h()},l(b){e=f(b,"DIV",{class:!0});var g=E(e);s=f(g,"A",{href:!0});var O=E(s);a=f(O,"IMG",{src:!0,alt:!0}),O.forEach(_),D=A(g),o=f(g,"DIV",{style:!0});var B=E(o);c=f(B,"IMG",{class:!0,style:!0,alt:!0,src:!0}),V=A(B),d=f(B,"DIV",{class:!0});var L=E(d);y=f(L,"P",{class:!0});var R=E(y);m=f(R,"A",{style:!0,target:!0,href:!0});var F=E(m);t=H(F,n),F.forEach(_),R.forEach(_),l=A(L),S=f(L,"P",{class:!0});var J=E(S);k=H(J,M),J.forEach(_),P=A(L),w=f(L,"P",{class:!0,style:!0});var K=E(w);x=H(K,q),K.forEach(_),L.forEach(_),B.forEach(_),j=A(g),g.forEach(_),this.h()},h(){G(a.src,p=i[2].thumbnail)||u(a,"src",p),u(a,"alt","thumbnail"),u(s,"href",h=i[2].videolink),u(c,"class","channelicon svelte-1diulpp"),C(c,"margin","auto 0"),u(c,"alt","thumbnail"),G(c.src,T=i[2].channelThumbnail)||u(c,"src",T),C(m,"color","white"),u(m,"target","_blank"),u(m,"href",I=i[2].videolink),u(y,"class","vidtitle2 svelte-1diulpp"),u(S,"class","channelname svelte-1diulpp"),u(w,"class","channelname svelte-1diulpp"),C(w,"color","grey"),u(d,"class","worddiv svelte-1diulpp"),C(o,"display","flex"),C(o,"flex-direction","rowl"),u(e,"class","div svelte-1diulpp")},m(b,g){X(b,e,g),r(e,s),r(s,a),r(e,D),r(e,o),r(o,c),r(o,V),r(o,d),r(d,y),r(y,m),r(m,t),r(d,l),r(d,S),r(S,k),r(d,P),r(d,w),r(w,x),r(e,j)},p(b,g){g&1&&!G(a.src,p=b[2].thumbnail)&&u(a,"src",p),g&1&&h!==(h=b[2].videolink)&&u(s,"href",h),g&1&&!G(c.src,T=b[2].channelThumbnail)&&u(c,"src",T),g&1&&n!==(n=b[2].title+"")&&N(t,n),g&1&&I!==(I=b[2].videolink)&&u(m,"href",I),g&1&&M!==(M=b[2].channelTitle+"")&&N(k,M),g&1&&q!==(q=b[2].timeLive+"")&&N(x,q)},d(b){b&&_(e)}}}function ue(i){let e,s,a,p,h,D,o,c,T="Archives",V,d,y;p=new ce({});let m=Q(i[0].archive),n=[];for(let t=0;t<m.length;t+=1)n[t]=W(U(i,m,t));return{c(){e=v("main"),s=v("div"),a=v("div"),te(p.$$.fragment),h=$(),D=v("div"),o=v("div"),c=v("h1"),c.textContent=T,V=$(),d=v("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=f(t,"MAIN",{});var I=E(e);s=f(I,"DIV",{class:!0});var l=E(s);a=f(l,"DIV",{class:!0});var S=E(a);ae(p.$$.fragment,S),S.forEach(_),h=A(l),D=f(l,"DIV",{style:!0});var M=E(D);o=f(M,"DIV",{});var k=E(o);c=f(k,"H1",{style:!0,"data-svelte-h":!0}),le(c)!=="svelte-dxue45"&&(c.textContent=T),V=A(k),d=f(k,"DIV",{class:!0});var P=E(d);for(let w=0;w<n.length;w+=1)n[w].l(P);P.forEach(_),k.forEach(_),M.forEach(_),l.forEach(_),I.forEach(_),this.h()},h(){u(a,"class","side svelte-1diulpp"),C(c,"text-align","center"),u(d,"class","outerdiv svelte-1diulpp"),C(D,"margin-left","140px"),u(s,"class","sidepanel svelte-1diulpp")},m(t,I){X(t,e,I),r(e,s),r(s,a),re(p,a,null),r(s,h),r(s,D),r(D,o),r(o,c),r(o,V),r(o,d);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(d,null);y=!0},p(t,[I]){if(I&1){m=Q(t[0].archive);let l;for(l=0;l<m.length;l+=1){const S=U(t,m,l);n[l]?n[l].p(S,I):(n[l]=W(S),n[l].c(),n[l].m(d,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=m.length}},i(t){y||(se(p.$$.fragment,t),y=!0)},o(t){ie(p.$$.fragment,t),y=!1},d(t){t&&_(e),ne(p),oe(n,t)}}}function de(i){let e=i.toString().split(".")[0];if(Math.floor(e)>=24)return i=i/24,"Stream ended "+i.toString().split(".")[0]+" days ago";if(Math.floor(e)>1)return"Streamed ended "+e+" hours ago";if(Math.floor(e)==1)return"Streamed ended "+e+" hour ago";if(Math.floor(e)==0)return i=i/100*60,"Streamed ended "+i.toString().substring(2,4)+" mins ago"}function he(i,e,s){let{data:a}=e,p=new Date;for(let h=0;h<a.archive.length;h++){let D=a.archive[h].actualEndTime,o=new Date(D);a.archive[h].localTime=o.toISOString().substring(11,19);const c=Math.abs(p.getTime()-o.getTime())/36e5;a.archive[h].timeLive=de(c)}return i.$$set=h=>{"data"in h&&s(0,a=h.data)},[a]}class _e extends Z{constructor(e){super(),ee(this,e,he,ue,Y,{data:0})}}export{_e as component};