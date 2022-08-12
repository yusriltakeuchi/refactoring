import{_ as c,c as r,d as a,w as e,a as p,b as l,e as s,r as t,o as A}from"./app.a0c4e4e4.js";const T=JSON.parse('{"title":"Parallel Inheritance Hierarchies","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/change-preventers/parallel-inheritance-hierarchies/index.md"}'),C={name:"martin-fowler/change-preventers/parallel-inheritance-hierarchies/index.md"},y=p("",8),D=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"abstract"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Shape2D"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"protected"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," width"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"protected"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," height"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"getWidth"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," width"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"void"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"setWidth"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," width"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF"}},"this."),l("span",{style:{color:"#A6ACCD"}},"width "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," width"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"getHeight"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," height"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"void"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"setHeight"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," height"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF"}},"this."),l("span",{style:{color:"#A6ACCD"}},"height "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," height"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),i=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Rectangle"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"extends"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Shape2D"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),F=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Triangle"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"extends"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Shape2D"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),d=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"RectangleAreaCalculator"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"implements"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"AreaInterface"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"private"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"Rectangle"),l("span",{style:{color:"#A6ACCD"}}," r"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"RectangleAreaCalculator"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#C792EA"}},"Rectangle"),l("span",{style:{color:"#A6ACCD"}}," r"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		super"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF"}},"this."),l("span",{style:{color:"#A6ACCD"}},"r "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," r"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"@"),l("span",{style:{color:"#C792EA"}},"Override")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"area"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," r"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"getWidth"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"*"),l("span",{style:{color:"#A6ACCD"}}," r"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"getHeight"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),h=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"TriangleAreaCalculator"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"implements"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"AreaInterface"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"private"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"Triangle"),l("span",{style:{color:"#A6ACCD"}}," t"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"TriangleAreaCalculator"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#C792EA"}},"Triangle"),l("span",{style:{color:"#A6ACCD"}}," t"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		super"),l("span",{style:{color:"#89DDFF"}},"();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF"}},"this."),l("span",{style:{color:"#A6ACCD"}},"t "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," t"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"@"),l("span",{style:{color:"#C792EA"}},"Override")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"area"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," t"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"getHeight"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"*"),l("span",{style:{color:"#A6ACCD"}}," t"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"getWidth"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"/"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"2"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),u=l("h2",{id:"penyelesaian",tabindex:"-1"},[s("Penyelesaian "),l("a",{class:"header-anchor",href:"#penyelesaian","aria-hidden":"true"},"#")],-1),g=l("p",null,[s("Kita pindahkan logika perhitungan area agar digabung saja ke dalam "),l("code",null,"Shape2D"),s(".")],-1),m=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Rectangle"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"extends"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Shape2D"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"@"),l("span",{style:{color:"#C792EA"}},"Override")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"area"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," height "),l("span",{style:{color:"#89DDFF"}},"*"),l("span",{style:{color:"#A6ACCD"}}," width"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),E=l("div",{class:"language-java"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Triangle"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"extends"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Shape2D"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"@"),l("span",{style:{color:"#C792EA"}},"Override")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C792EA"}},"public"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"float"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"area"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"		"),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#A6ACCD"}}," height "),l("span",{style:{color:"#89DDFF"}},"*"),l("span",{style:{color:"#A6ACCD"}}," width "),l("span",{style:{color:"#89DDFF"}},"/"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"2"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1);function _(b,k,f,v,B,j){const n=t("Tab"),o=t("Tabs");return A(),r("div",null,[y,a(o,null,{default:e(()=>[a(n,{name:"Shape2D",text:"Shape2D.java"},{default:e(()=>[D]),_:1}),a(n,{name:"Rectangle",text:"Rectangle.java"},{default:e(()=>[i]),_:1}),a(n,{name:"Triangle",text:"Triangle.java"},{default:e(()=>[F]),_:1}),a(n,{name:"RectangleAreaCalculator",text:"RectangleAreaCalculator.java"},{default:e(()=>[d]),_:1}),a(n,{name:"TriangleAreaCalculator",text:"TriangleAreaCalculator.java"},{default:e(()=>[h]),_:1})]),_:1}),u,g,a(o,null,{default:e(()=>[a(n,{name:"Rectangle",text:"Rectangle.java"},{default:e(()=>[m]),_:1}),a(n,{name:"Triangle",text:"Triangle.java"},{default:e(()=>[E]),_:1})]),_:1})])}var S=c(C,[["render",_]]);export{T as __pageData,S as default};