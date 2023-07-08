import{s as me,n as te,f as X}from"../chunks/scheduler.63274e7e.js";import{S as _e,i as ge,g as c,h as d,y as U,a as le,f,r as se,s as $,j as p,u as ne,c as D,k as u,l as k,x as e,v as oe,d as ce,t as de,w as ue,z as pe,m as F,n as J,o as Z}from"../chunks/index.22826ed8.js";import{B as be,e as ve}from"../chunks/ButtonRow.9cb1d9e7.js";function ye(r){let t,n='<div style="height: 100vh;"><div class="videochatbox svelte-pxb7sr"><iframe class="iframeinner svelte-pxb7sr" width="1060" height="596" id="ytvidembed" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe> <iframe height="596" id="chatbox" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></div>';return{c(){t=c("main"),t.innerHTML=n},l(a){t=d(a,"MAIN",{"data-svelte-h":!0}),U(t)!=="svelte-141dov7"&&(t.innerHTML=n)},m(a,m){le(a,t,m)},p:te,i:te,o:te,d(a){a&&f(t)}}}class we extends _e{constructor(t){super(),ge(this,t,null,ye,me,{})}}function he(r,t,n){const a=r.slice();return a[2]=t[n],a}function fe(r){let t,n,a,m,_,v,i,b,H,Y,h,V,I=r[2].title+"",N,q,y,P=r[2].channelTitle+"",L,S,w,x,W="Live now",B,T,o=r[2].timeLive+"",s,j,l,M=r[2].concurrentViewers+"",z,g,A,G;return{c(){t=c("div"),n=c("button"),a=c("img"),_=$(),v=c("div"),i=c("img"),Y=$(),h=c("div"),V=c("p"),N=F(I),q=$(),y=c("p"),L=F(P),S=$(),w=c("div"),x=c("p"),x.textContent=W,B=$(),T=c("p"),s=F(o),j=$(),l=c("p"),z=F(M),g=F(" viewers"),G=$(),this.h()},l(C){t=d(C,"DIV",{class:!0});var E=p(t);n=d(E,"BUTTON",{id:!0,onclick:!0});var K=p(n);a=d(K,"IMG",{src:!0,alt:!0}),_=D(K),v=d(K,"DIV",{style:!0});var Q=p(v);i=d(Q,"IMG",{id:!0,class:!0,style:!0,alt:!0,src:!0}),Y=D(Q),h=d(Q,"DIV",{class:!0});var O=p(h);V=d(O,"P",{class:!0});var ae=p(V);N=J(ae,I),ae.forEach(f),q=D(O),y=d(O,"P",{class:!0});var ie=p(y);L=J(ie,P),ie.forEach(f),S=D(O),w=d(O,"DIV",{style:!0});var R=p(w);x=d(R,"P",{class:!0,"data-svelte-h":!0}),U(x)!=="svelte-5a0x59"&&(x.textContent=W),B=D(R),T=d(R,"P",{class:!0});var re=p(T);s=J(re,o),re.forEach(f),j=D(R),l=d(R,"P",{style:!0,class:!0});var ee=p(l);z=J(ee,M),g=J(ee," viewers"),ee.forEach(f),R.forEach(f),O.forEach(f),Q.forEach(f),K.forEach(f),G=D(E),E.forEach(f),this.h()},h(){X(a.src,m=r[2].thumbnail)||u(a,"src",m),u(a,"alt","thumbnail"),u(i,"id",b=r[2].videolink),u(i,"class","channelicon svelte-jla3iy"),k(i,"margin","auto 0"),u(i,"alt","thumbnail"),X(i.src,H=r[2].channelThumbnail)||u(i,"src",H),u(V,"class","vidtitle2 svelte-jla3iy"),u(y,"class","channelname svelte-jla3iy"),u(x,"class","live svelte-jla3iy"),u(T,"class","svelte-jla3iy"),k(l,"color","grey"),k(l,"padding-left","7px"),u(l,"class","svelte-jla3iy"),k(w,"display","flex"),u(h,"class","worddiv svelte-jla3iy"),k(v,"display","flex"),k(v,"flex-direction","rowl"),u(n,"id",A=r[2].id),u(n,"onclick","embedvid(this.id)"),u(t,"class","div svelte-jla3iy")},m(C,E){le(C,t,E),e(t,n),e(n,a),e(n,_),e(n,v),e(v,i),e(v,Y),e(v,h),e(h,V),e(V,N),e(h,q),e(h,y),e(y,L),e(h,S),e(h,w),e(w,x),e(w,B),e(w,T),e(T,s),e(w,j),e(w,l),e(l,z),e(l,g),e(t,G)},p(C,E){E&1&&!X(a.src,m=C[2].thumbnail)&&u(a,"src",m),E&1&&b!==(b=C[2].videolink)&&u(i,"id",b),E&1&&!X(i.src,H=C[2].channelThumbnail)&&u(i,"src",H),E&1&&I!==(I=C[2].title+"")&&Z(N,I),E&1&&P!==(P=C[2].channelTitle+"")&&Z(L,P),E&1&&o!==(o=C[2].timeLive+"")&&Z(s,o),E&1&&M!==(M=C[2].concurrentViewers+"")&&Z(z,M),E&1&&A!==(A=C[2].id)&&u(n,"id",A)},d(C){C&&f(t)}}}function xe(r){let t,n,a,m,_,v,i,b,H="Watch",Y,h,V,I,N="Select Stream",q,y,P="Click stream to watch",L,S,w,x,W=`function embedvid(element_id){\r
          document.getElementById("ytvidembed").src = "https://www.youtube.com/embed/" + element_id;\r
          document.getElementById("chatbox").src = "https://www.youtube.com/live_chat?v=" + element_id + "&embed_domain=local_host:5173/index3.html";\r
      }`,B;m=new be({}),h=new we({});let T=ve(r[0].live),o=[];for(let s=0;s<T.length;s+=1)o[s]=fe(he(r,T,s));return{c(){t=c("main"),n=c("div"),a=c("div"),se(m.$$.fragment),_=$(),v=c("div"),i=c("div"),b=c("h1"),b.textContent=H,Y=$(),se(h.$$.fragment),V=$(),I=c("h1"),I.textContent=N,q=$(),y=c("h3"),y.textContent=P,L=$(),S=c("div");for(let s=0;s<o.length;s+=1)o[s].c();w=$(),x=c("script"),x.textContent=W,this.h()},l(s){t=d(s,"MAIN",{});var j=p(t);n=d(j,"DIV",{class:!0});var l=p(n);a=d(l,"DIV",{class:!0});var M=p(a);ne(m.$$.fragment,M),M.forEach(f),_=D(l),v=d(l,"DIV",{style:!0});var z=p(v);i=d(z,"DIV",{});var g=p(i);b=d(g,"H1",{style:!0,"data-svelte-h":!0}),U(b)!=="svelte-p9a8o9"&&(b.textContent=H),Y=D(g),ne(h.$$.fragment,g),V=D(g),I=d(g,"H1",{style:!0,"data-svelte-h":!0}),U(I)!=="svelte-rzlxb7"&&(I.textContent=N),q=D(g),y=d(g,"H3",{style:!0,"data-svelte-h":!0}),U(y)!=="svelte-6iad6i"&&(y.textContent=P),L=D(g),S=d(g,"DIV",{class:!0});var A=p(S);for(let G=0;G<o.length;G+=1)o[G].l(A);A.forEach(f),w=D(g),x=d(g,"SCRIPT",{"data-svelte-h":!0}),U(x)!=="svelte-1x68tut"&&(x.textContent=W),g.forEach(f),z.forEach(f),l.forEach(f),j.forEach(f),this.h()},h(){u(a,"class","side svelte-jla3iy"),k(b,"text-align","center"),k(I,"text-align","center"),k(y,"padding-left","150px"),u(S,"class","outerdiv svelte-jla3iy"),k(v,"margin-left","140px"),u(n,"class","sidepanel svelte-jla3iy")},m(s,j){le(s,t,j),e(t,n),e(n,a),oe(m,a,null),e(n,_),e(n,v),e(v,i),e(i,b),e(i,Y),oe(h,i,null),e(i,V),e(i,I),e(i,q),e(i,y),e(i,L),e(i,S);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(S,null);e(i,w),e(i,x),B=!0},p(s,[j]){if(j&1){T=ve(s[0].live);let l;for(l=0;l<T.length;l+=1){const M=he(s,T,l);o[l]?o[l].p(M,j):(o[l]=fe(M),o[l].c(),o[l].m(S,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=T.length}},i(s){B||(ce(m.$$.fragment,s),ce(h.$$.fragment,s),B=!0)},o(s){de(m.$$.fragment,s),de(h.$$.fragment,s),B=!1},d(s){s&&f(t),ue(m),ue(h),pe(o,s)}}}function Ce(r){if(Math.floor(r)>=10)return"for "+r.toString().substring(0,2)+" hours";if(Math.floor(r)>1)return"for "+r.toString().substring(0,1)+" hours";if(Math.floor(r)==1)return"for "+r.toString().substring(0,1)+" hour";if(Math.floor(r)==0)return r=r/100*60,"for "+r.toString().substring(2,4)+" mins"}function Ee(r,t,n){let{data:a}=t,m=new Date;for(let _=0;_<a.live.length;_++){let v=a.live[_].actualStartTime,i=new Date(v);a.live[_].localTime=i.toISOString().substring(11,19);const b=Math.abs(m.getTime()-i.getTime())/36e5;a.live[_].timeLive=Ce(b)}return r.$$set=_=>{"data"in _&&n(0,a=_.data)},[a]}class De extends _e{constructor(t){super(),ge(this,t,Ee,xe,me,{data:0})}}export{De as component};