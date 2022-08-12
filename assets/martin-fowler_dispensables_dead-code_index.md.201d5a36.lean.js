import{_ as r,c as i,b as s,d as l,w as n,a as t,e as a,r as o,o as D}from"./app.5c0e4cd3.js";const x=JSON.parse('{"title":"Dead Code","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/dispensables/dead-code/index.md"}'),y={name:"martin-fowler/dispensables/dead-code/index.md"},C=t("",8),F=a("Terkadang, dead code tidak nampak sejelas itu. Contohnya di class "),A=a("PriceCalculator.java"),d=a("."),u=s("p",null,"Bayangkan awalnya requirement dari client adalah: diskon diberikan 10% bila harga kurang dari 10.000, jika lebih, diskon 20%. Terbentuklah code berikut:",-1),_=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"calculate"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," price"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"boolean"),s("span",{style:{color:"#A6ACCD"}}," isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"price "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10000"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.1"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.2"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," discountPrice"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"})])])],-1),h=s("p",null,"Tiba-tiba, requirement dari client berubah. Client meminta diskon diketok rata 15%.",-1),m=s("p",null,"Entah mengapa, programmer tidak menghapus if yang pertama. Ia langsung menambahkan di bagian bawah sebelum return. Secara requirement, ini tidak masalah. Diskon akan selalu 15%.",-1),b=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"calculate"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," price"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"boolean"),s("span",{style:{color:"#A6ACCD"}}," isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"price "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10000"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.1"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.2"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"isDiscount"),s("span",{style:{color:"#89DDFF"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.15"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," discountPrice"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"})])])],-1),g=t("",4);function f(k,P,v,T,j,E){const p=o("github-url"),e=o("Tab"),c=o("Tabs");return D(),i("div",null,[C,s("p",null,[F,l(p,{to:"before/PriceCalculator.java"},{default:n(()=>[A]),_:1}),d]),u,l(c,null,{default:n(()=>[l(e,{name:"PriceCalculator",text:"PriceCalculator.java"},{default:n(()=>[_]),_:1})]),_:1}),h,m,l(c,null,{default:n(()=>[l(e,{name:"PriceCalculator",text:"PriceCalculator.java"},{default:n(()=>[b]),_:1})]),_:1}),g])}var w=r(y,[["render",f]]);export{x as __pageData,w as default};
