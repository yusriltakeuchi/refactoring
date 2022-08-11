import{_ as i,c as l,b as e,d as t,w as n,a as r,e as a,r as o,o as d}from"./app.34f80447.js";const F=JSON.parse('{"title":"Data Class","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/dispensables/data-class/index.md"}'),c={name:"martin-fowler/dispensables/data-class/index.md"},_=r('<h1 id="data-class" tabindex="-1">Data Class <a class="header-anchor" href="#data-class" aria-hidden="true">#</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/data-class" target="_blank" rel="noopener noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-hidden="true">#</a></h2><p>Bila class hanya cuma sebagai <em>dumb data holders</em>, class bisa dipertimbangkan untuk dibuang dengan cara digabung dengan class lain. <em>Dumb data holders</em> berarti class ini hanya memiliki field dan fungsi setter getter saja.</p><p>Ketika produk baru awal-awal di-code, sangat wajar bila banyak class yang belum memiliki behavior (baru isi data saja). Namun, bila produk sudah makin berkembang, namun masih ada suatu class yang hanya berisi setter/getter, sudah sinyal kuat untuk dilakukan refactor.</p>',5),h=a("Pada contoh kasus "),u=a("FullName.java"),m=a(", class hanya berisi setter getter untuk field "),p=e("code",null,"firstName",-1),b=a(" dan "),f=e("code",null,"lastName",-1),g=a("."),k=e("h2",{id:"penyelesaian",tabindex:"-1"},[a("Penyelesaian "),e("a",{class:"header-anchor",href:"#penyelesaian","aria-hidden":"true"},"#")],-1),v=a("Semua field dari FullName "),y=a("dipindahkan]("),N=e("a",{href:"https://sourcemaking.com/refactoring/move-method",target:"_blank",rel:"noopener noreferrer"},"https://sourcemaking.com/refactoring/move-method",-1),j=a(") ke [User.java"),x=a(". Kemudian class FullName dihapus.");function P(S,w,T,C,V,D){const s=o("github-url");return d(),l("div",null,[_,e("p",null,[h,t(s,{to:"before/FullName.java"},{default:n(()=>[u]),_:1}),m,p,b,f,g]),k,e("p",null,[v,t(s,{to:"after/User.java"},{default:n(()=>[y,N,j]),_:1}),x])])}var $=i(c,[["render",P]]);export{F as __pageData,$ as default};