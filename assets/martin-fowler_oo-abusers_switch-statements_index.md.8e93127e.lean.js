import{_ as r,c as D,b as s,d as o,w as a,a as p,e as l,r as c,o as y}from"./app.a0c4e4e4.js";const as=JSON.parse('{"title":"Switch Statements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"},{"level":2,"title":"Revisi Martin Fowler","slug":"revisi-martin-fowler"},{"level":2,"title":"ShapeFactory","slug":"shapefactory"}],"relativePath":"martin-fowler/oo-abusers/switch-statements/index.md"}'),F={name:"martin-fowler/oo-abusers/switch-statements/index.md"},C=p("",5),i=l("Lihat class "),A=l("ShapePrinter.java"),d=l(" dan "),u=l("CharNeededCounter.java"),h=l("."),_=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"ShapePrinter"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," shape"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"shape"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"equalsIgnoreCase"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"square"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},")){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"*"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"shape"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"equalsIgnoreCase"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"triangle"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},")){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<="),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"*"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"invalid shape"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),f=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"CharNeededCounter"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"count"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," shape"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"shape"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"equalsIgnoreCase"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"square"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},")){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," size "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"shape"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"equalsIgnoreCase"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"triangle"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},")){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"(("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"/"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),m=p("",8),g=l("Kita memiliki dua type code. "),b=s("code",null,"square",-1),k=l(" dan "),E=s("code",null,"triangle",-1),S=l(". Oleh karena itu, kita buat class "),v=l("Shape.java"),j=l(" sebagai abstract class yang memiliki fungsi "),w=s("code",null,"charNeeded",-1),T=l(" dan "),q=s("code",null,"print",-1),P=l(", lalu "),z=l("Triangle.java"),x=l(" dan "),B=l("Square.java"),N=l(" meng-extends class "),I=s("code",null,"Shape",-1),O=l("."),V=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"abstract"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Shape"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"protected"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Shape"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"size "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"abstract"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"abstract"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"charNeeded"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),R=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Square"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Shape"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Square"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++)"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j"),s("span",{style:{color:"#89DDFF"}},"++)"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"*"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"charNeeded"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," size "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Triangle"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Shape"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Triangle"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i "),s("span",{style:{color:"#89DDFF"}},"<="),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"for"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," i"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," j"),s("span",{style:{color:"#89DDFF"}},"++){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"*"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"charNeeded"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"(("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"/"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),M=p("",6),H=l("User tetap akan meng-input string melalui console. Oleh karena itu, kita perlu menyiapkan sebuah class "),J=l("Factory"),K=l(" untuk membuat class Shape dari string yang diinput."),L=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"ShapeFactory"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Shape"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"create"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," shape"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," size"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"throws"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Exception"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"shape"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"equalsIgnoreCase"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"triangle"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"))"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Triangle"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"shape"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"equalsIgnoreCase"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"square"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"))"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Square"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"throw"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Exception"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"invalid shape"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),U=s("p",null,[l("Harusnya Anda menyadari bahwa terjadi violasi OCP disini. Bila class "),s("code",null,"Circle"),l(" dibuat, maka if di Factory bertambah. Hal ini dimaklumi karena OCP hanya dilanggar satu kali saja di dalam Factory (tidak akan dilanggar lagi di tempat lain) dan memang terpaksa dilakukan karena input dari user adalah string. Ibaratkan Factory disini berperan sebagai anti-corruption layer.")],-1),G=s("p",null,[l("Di beberapa bahasa pemrograman, ada cara spesifik untuk mengakali menghilangkan if-else pada class Factory, contohnya untuk Java: "),s("a",{href:"https://www.javacodegeeks.com/2014/10/factory-without-if-else.html",target:"_blank",rel:"noopener noreferrer"},"https://www.javacodegeeks.com/2014/10/factory-without-if-else.html"),l(".")],-1);function Q(W,X,Y,Z,ss,ls){const e=c("github-url"),n=c("Tab"),t=c("Tabs");return y(),D("div",null,[C,s("p",null,[i,o(e,{to:"before/ShapePrinter.java"},{default:a(()=>[A]),_:1}),d,o(e,{to:"before/CharNeededCounter.java"},{default:a(()=>[u]),_:1}),h]),o(t,null,{default:a(()=>[o(n,{name:"ShapePrinter",text:"ShapePrinter.java"},{default:a(()=>[_]),_:1}),o(n,{name:"CharNeededCounter",text:"CharNeededCounter.java"},{default:a(()=>[f]),_:1})]),_:1}),m,s("p",null,[g,b,k,E,S,o(e,{to:"after/Shape.java"},{default:a(()=>[v]),_:1}),j,w,T,q,P,o(e,{to:"after/Shape.java"},{default:a(()=>[z]),_:1}),x,o(e,{to:"after/Square.java"},{default:a(()=>[B]),_:1}),N,I,O]),o(t,null,{default:a(()=>[o(n,{name:"Shape",text:"Shape.java"},{default:a(()=>[V]),_:1}),o(n,{name:"Square",text:"Square.java"},{default:a(()=>[R]),_:1}),o(n,{name:"Triangle",text:"Triangle.java"},{default:a(()=>[$]),_:1})]),_:1}),M,s("p",null,[H,o(e,{to:"after/ShapeFactory"},{default:a(()=>[J]),_:1}),K]),o(t,null,{default:a(()=>[o(n,{name:"Price",text:"Price.java"},{default:a(()=>[L]),_:1})]),_:1}),U,G])}var es=r(F,[["render",Q]]);export{as as __pageData,es as default};