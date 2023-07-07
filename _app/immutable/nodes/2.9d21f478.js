import{s as he,n as Z,f as O}from"../chunks/scheduler.63274e7e.js";import{S as ve,i as de,g as u,h,j as g,f as v,k as c,a as ee,y as we,s as k,m as H,c as M,n as N,z as ue,l as A,x as s,o as J,r as se,u as ne,v as ie,d as oe,t as ce,w as fe}from"../chunks/index.e7bc0057.js";import{e as ae,B as Ie}from"../chunks/ButtonRow.76b59325.js";import{l as Y,u as le}from"../chunks/livedata.ce12ea8c.js";function be(a,e,i){const l=a.slice();return l[2]=e[i],l}function De(a){let e,i,l,t,o,n,r,f,P,z,d,w,m,D=a[2].title+"",L,C,V,E,_=a[2].channelTitle+"",T,G,$,S,j="Live now",x,b,p=a[2].timeLive+"",R,U,I,B=a[2].concurrentViewers+"",F,K,Q;return{c(){e=u("div"),i=u("a"),l=u("img"),n=k(),r=u("div"),f=u("img"),z=k(),d=u("div"),w=u("p"),m=u("a"),L=H(D),V=k(),E=u("p"),T=H(_),G=k(),$=u("div"),S=u("p"),S.textContent=j,x=k(),b=u("p"),R=H(p),U=k(),I=u("p"),F=H(B),K=H(" viewers"),Q=k(),this.h()},l(y){e=h(y,"DIV",{class:!0});var q=g(e);i=h(q,"A",{href:!0});var me=g(i);l=h(me,"IMG",{src:!0,alt:!0}),me.forEach(v),n=M(q),r=h(q,"DIV",{style:!0});var te=g(r);f=h(te,"IMG",{class:!0,style:!0,alt:!0,src:!0}),z=M(te),d=h(te,"DIV",{class:!0});var W=g(d);w=h(W,"P",{class:!0});var ge=g(w);m=h(ge,"A",{style:!0,target:!0,href:!0});var _e=g(m);L=N(_e,D),_e.forEach(v),ge.forEach(v),V=M(W),E=h(W,"P",{class:!0});var pe=g(E);T=N(pe,_),pe.forEach(v),G=M(W),$=h(W,"DIV",{style:!0});var X=g($);S=h(X,"P",{class:!0,"data-svelte-h":!0}),ue(S)!=="svelte-5a0x59"&&(S.textContent=j),x=M(X),b=h(X,"P",{class:!0});var $e=g(b);R=N($e,p),$e.forEach(v),U=M(X),I=h(X,"P",{style:!0,class:!0});var re=g(I);F=N(re,B),K=N(re," viewers"),re.forEach(v),X.forEach(v),W.forEach(v),te.forEach(v),Q=M(q),q.forEach(v),this.h()},h(){O(l.src,t=a[2].thumbnail)||c(l,"src",t),c(l,"alt","thumbnail"),c(i,"href",o=a[2].videolink),c(f,"class","channelicon svelte-15qdm09"),A(f,"margin","auto 0"),c(f,"alt","thumbnail"),O(f.src,P=a[2].channelThumbnail)||c(f,"src",P),A(m,"color","white"),c(m,"target","_blank"),c(m,"href",C=a[2].videolink),c(w,"class","vidtitle2 svelte-15qdm09"),c(E,"class","channelname svelte-15qdm09"),c(S,"class","live svelte-15qdm09"),c(b,"class","svelte-15qdm09"),A(I,"color","grey"),A(I,"padding-left","7px"),c(I,"class","svelte-15qdm09"),A($,"display","flex"),c(d,"class","worddiv svelte-15qdm09"),A(r,"display","flex"),A(r,"flex-direction","rowl"),c(e,"class","div svelte-15qdm09")},m(y,q){ee(y,e,q),s(e,i),s(i,l),s(e,n),s(e,r),s(r,f),s(r,z),s(r,d),s(d,w),s(w,m),s(m,L),s(d,V),s(d,E),s(E,T),s(d,G),s(d,$),s($,S),s($,x),s($,b),s(b,R),s($,U),s($,I),s(I,F),s(I,K),s(e,Q)},p(y,q){q&1&&!O(l.src,t=y[2].thumbnail)&&c(l,"src",t),q&1&&o!==(o=y[2].videolink)&&c(i,"href",o),q&1&&!O(f.src,P=y[2].channelThumbnail)&&c(f,"src",P),q&1&&D!==(D=y[2].title+"")&&J(L,D),q&1&&C!==(C=y[2].videolink)&&c(m,"href",C),q&1&&_!==(_=y[2].channelTitle+"")&&J(T,_),q&1&&p!==(p=y[2].timeLive+"")&&J(R,p),q&1&&B!==(B=y[2].concurrentViewers+"")&&J(F,B)},d(y){y&&v(e)}}}function qe(a){let e,i=ae(a[0]),l=[];for(let t=0;t<i.length;t+=1)l[t]=De(be(a,i,t));return{c(){e=u("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=h(t,"DIV",{class:!0});var o=g(e);for(let n=0;n<l.length;n+=1)l[n].l(o);o.forEach(v),this.h()},h(){c(e,"class","outerdiv svelte-15qdm09")},m(t,o){ee(t,e,o);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(t,[o]){if(o&1){i=ae(t[0]);let n;for(n=0;n<i.length;n+=1){const r=be(t,i,n);l[n]?l[n].p(r,o):(l[n]=De(r),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=i.length}},i:Z,o:Z,d(t){t&&v(e),we(l,t)}}}function ke(a){if(Math.floor(a)>=10)return"for "+a.toString().substring(0,2)+" hours";if(Math.floor(a)>1)return"for "+a.toString().substring(0,1)+" hours";if(Math.floor(a)==1)return"for "+a.toString().substring(0,1)+" hour";if(Math.floor(a)==0)return a=a/100*60,"for "+a.toString().substring(2,4)+" mins"}function Me(a,e,i){let l=new Date;for(let t=0;t<Y.length;t++){let o=Y[t].actualStartTime,n=new Date(o);Y[t].localTime=n.toISOString().substring(11,19);const r=Math.abs(l.getTime()-n.getTime())/36e5;Y[t].timeLive=ke(r)}return[Y]}class Ve extends ve{constructor(e){super(),de(this,e,Me,qe,he,{})}}function Ee(a,e,i){const l=a.slice();return l[2]=e[i],l}function Se(a){let e,i,l,t,o,n,r,f,P,z,d,w,m,D=a[2].title+"",L,C,V,E,_=a[2].channelTitle+"",T,G,$,S=a[2].timeDiff+"",j,x;return{c(){e=u("div"),i=u("a"),l=u("img"),n=k(),r=u("div"),f=u("img"),z=k(),d=u("div"),w=u("p"),m=u("a"),L=H(D),V=k(),E=u("p"),T=H(_),G=k(),$=u("p"),j=H(S),x=k(),this.h()},l(b){e=h(b,"DIV",{class:!0});var p=g(e);i=h(p,"A",{href:!0});var R=g(i);l=h(R,"IMG",{src:!0,alt:!0}),R.forEach(v),n=M(p),r=h(p,"DIV",{style:!0});var U=g(r);f=h(U,"IMG",{class:!0,style:!0,alt:!0,src:!0}),z=M(U),d=h(U,"DIV",{class:!0});var I=g(d);w=h(I,"P",{class:!0});var B=g(w);m=h(B,"A",{style:!0,target:!0,href:!0});var F=g(m);L=N(F,D),F.forEach(v),B.forEach(v),V=M(I),E=h(I,"P",{class:!0});var K=g(E);T=N(K,_),K.forEach(v),G=M(I),$=h(I,"P",{class:!0});var Q=g($);j=N(Q,S),Q.forEach(v),I.forEach(v),U.forEach(v),x=M(p),p.forEach(v),this.h()},h(){O(l.src,t=a[2].thumbnail)||c(l,"src",t),c(l,"alt","thumbnail"),c(i,"href",o=a[2].videolink),c(f,"class","channelicon svelte-15qdm09"),A(f,"margin","auto 0"),c(f,"alt","thumbnail"),O(f.src,P=a[2].channelThumbnail)||c(f,"src",P),A(m,"color","white"),c(m,"target","_blank"),c(m,"href",C=a[2].videolink),c(w,"class","vidtitle2 svelte-15qdm09"),c(E,"class","channelname svelte-15qdm09"),c($,"class","channelname svelte-15qdm09"),c(d,"class","worddiv svelte-15qdm09"),A(r,"display","flex"),A(r,"flex-direction","rowl"),c(e,"class","div svelte-15qdm09")},m(b,p){ee(b,e,p),s(e,i),s(i,l),s(e,n),s(e,r),s(r,f),s(r,z),s(r,d),s(d,w),s(w,m),s(m,L),s(d,V),s(d,E),s(E,T),s(d,G),s(d,$),s($,j),s(e,x)},p(b,p){p&1&&!O(l.src,t=b[2].thumbnail)&&c(l,"src",t),p&1&&o!==(o=b[2].videolink)&&c(i,"href",o),p&1&&!O(f.src,P=b[2].channelThumbnail)&&c(f,"src",P),p&1&&D!==(D=b[2].title+"")&&J(L,D),p&1&&C!==(C=b[2].videolink)&&c(m,"href",C),p&1&&_!==(_=b[2].channelTitle+"")&&J(T,_),p&1&&S!==(S=b[2].timeDiff+"")&&J(j,S)},d(b){b&&v(e)}}}function Te(a){let e,i,l=ae(a[0]),t=[];for(let o=0;o<l.length;o+=1)t[o]=Se(Ee(a,l,o));return{c(){e=u("main"),i=u("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=h(o,"MAIN",{});var n=g(e);i=h(n,"DIV",{class:!0});var r=g(i);for(let f=0;f<t.length;f+=1)t[f].l(r);r.forEach(v),n.forEach(v),this.h()},h(){c(i,"class","outerdiv svelte-15qdm09")},m(o,n){ee(o,e,n),s(e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,null)},p(o,[n]){if(n&1){l=ae(o[0]);let r;for(r=0;r<l.length;r+=1){const f=Ee(o,l,r);t[r]?t[r].p(f,n):(t[r]=Se(f),t[r].c(),t[r].m(i,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},i:Z,o:Z,d(o){o&&v(e),we(t,o)}}}function ye(a){if(Math.floor(a)>=100)return"Starts in "+a.toString().substring(0,3)+" hours";if(Math.floor(a)>=10)return"Starts in "+a.toString().substring(0,2)+" hours";if(Math.floor(a)>1)return"Starts in "+a.toString().substring(0,1)+" hours";if(Math.floor(a)==1)return"Starts in "+a.toString().substring(0,1)+" hour";if(Math.floor(a)==0)return a=a/100*60,"Starts in "+a.toString().substring(2,4)+" minutes"}function Ae(a,e,i){let l=new Date;for(let t=0;t<le.length;t++){let o=le[t].scheduledStartTime,n=new Date(o);const r=Math.abs(l.getTime()-n.getTime())/36e5;let f=ye(r);le[t].timeDiff=f}return[le]}class Ce extends ve{constructor(e){super(),de(this,e,Ae,Te,he,{})}}function Pe(a){let e,i,l,t,o,n,r,f,P="Live!",z,d,w,m,D,L="Upcoming Streams",C,V,E;return t=new Ie({}),d=new Ve({}),V=new Ce({}),{c(){e=u("main"),i=u("div"),l=u("div"),se(t.$$.fragment),o=k(),n=u("div"),r=u("div"),f=u("h1"),f.textContent=P,z=k(),se(d.$$.fragment),w=k(),m=u("div"),D=u("h1"),D.textContent=L,C=k(),se(V.$$.fragment),this.h()},l(_){e=h(_,"MAIN",{});var T=g(e);i=h(T,"DIV",{class:!0});var G=g(i);l=h(G,"DIV",{class:!0});var $=g(l);ne(t.$$.fragment,$),$.forEach(v),o=M(G),n=h(G,"DIV",{style:!0});var S=g(n);r=h(S,"DIV",{});var j=g(r);f=h(j,"H1",{style:!0,"data-svelte-h":!0}),ue(f)!=="svelte-1glkk4q"&&(f.textContent=P),z=M(j),ne(d.$$.fragment,j),j.forEach(v),w=M(S),m=h(S,"DIV",{});var x=g(m);D=h(x,"H1",{style:!0,"data-svelte-h":!0}),ue(D)!=="svelte-1an84hq"&&(D.textContent=L),C=M(x),ne(V.$$.fragment,x),x.forEach(v),S.forEach(v),G.forEach(v),T.forEach(v),this.h()},h(){c(l,"class","side svelte-lsjznb"),A(f,"text-align","center"),A(D,"text-align","center"),A(n,"margin-left","140px"),c(i,"class","sidepanel svelte-lsjznb")},m(_,T){ee(_,e,T),s(e,i),s(i,l),ie(t,l,null),s(i,o),s(i,n),s(n,r),s(r,f),s(r,z),ie(d,r,null),s(n,w),s(n,m),s(m,D),s(m,C),ie(V,m,null),E=!0},p:Z,i(_){E||(oe(t.$$.fragment,_),oe(d.$$.fragment,_),oe(V.$$.fragment,_),E=!0)},o(_){ce(t.$$.fragment,_),ce(d.$$.fragment,_),ce(V.$$.fragment,_),E=!1},d(_){_&&v(e),fe(t),fe(d),fe(V)}}}class ze extends ve{constructor(e){super(),de(this,e,null,Pe,he,{})}}export{ze as component};