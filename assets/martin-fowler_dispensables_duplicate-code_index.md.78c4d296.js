import{_ as r,c as D,b as s,d as o,w as n,a as t,e as l,r as a,o as F}from"./app.5c0e4cd3.js";const x=JSON.parse('{"title":"Duplicate Code","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/dispensables/duplicate-code/index.md"}'),y={name:"martin-fowler/dispensables/duplicate-code/index.md"},A=t('<h1 id="duplicate-code" tabindex="-1">Duplicate Code <a class="header-anchor" href="#duplicate-code" aria-hidden="true">#</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/duplicate-code" target="_blank" rel="noopener noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-hidden="true">#</a></h2><p>Terdapat bagian code yang sama atau mirip.</p><p>Kadang kesamaan terlihat jelas sehingga mudah di-refactor. Namun terkadang, harus putar otak untuk membuat beberapa bagian code yang mirip menjadi lebih generic.</p><p>Satu hal yang bisa menjadi <em>rule of thumb</em> adalah <a href="https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)" target="_blank" rel="noopener noreferrer">Rule of Three</a>. Bila bagian code sudah di copy-paste tiga kali, ini sudah menjadi lampu merah untuk segera dilakukan refactor.</p>',6),C=l("Pada contoh kasus di "),i=l("Foo.java"),d=l(" terdapat banyak bagian code yang duplikat di method bar, baz, dan qux."),u=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"package"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"fowler"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"dispensables"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"duplicate_code"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"before"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Foo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"bar"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//clear screen")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"26"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print = 3x")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Bar"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print = 3x")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"baz"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//clear screen")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"26"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print = 3x")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Baz"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print = 3x")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"qux"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//clear screen")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"26"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print = 3x")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Qux"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print = 3x")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),b=t(`<h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-hidden="true">#</a></h2><p>Terjadi <a href="https://sourcemaking.com/refactoring/extract-method" target="_blank" rel="noopener noreferrer">extract method</a> di banyak tempat. Selain itu, <code>for</code> yang serupa tetapi tidak sama juga diakali dengan cara di-extract namun ditambahi variabel sehingga bisa digunakan di ketiga fungsi tersebut.</p><div class="language-java"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fowler</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">dispensables</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">duplicate_code</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">clearScreen</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">printWithBorder</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">baz</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">clearScreen</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">printWithBorder</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Baz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">qux</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">clearScreen</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">printWithBorder</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Qux</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printWithBorder</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> text</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">printNTimes</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">		System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">		System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">printNTimes</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">		System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clearScreen</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printNTimes</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,3);function h(m,E,f,_,g,v){const p=a("github-url"),e=a("Tab"),c=a("Tabs");return F(),D("div",null,[A,s("p",null,[C,o(p,{to:"before/Foo.java"},{default:n(()=>[i]),_:1}),d]),o(c,null,{default:n(()=>[o(e,{name:"Foo",text:"Foo.java","max-height":350},{default:n(()=>[u]),_:1})]),_:1}),b])}var k=r(y,[["render",h]]);export{x as __pageData,k as default};
