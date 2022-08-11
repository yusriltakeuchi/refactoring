import{_ as l,c as p,b as o,d as e,w as c,a,e as s,r as t,o as r}from"./app.34f80447.js";const f=JSON.parse('{"title":"Dead Code","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/dispensables/dead-code/index.md"}'),D={name:"martin-fowler/dispensables/dead-code/index.md"},i=a(`<h1 id="dead-code" tabindex="-1">Dead Code <a class="header-anchor" href="#dead-code" aria-hidden="true">#</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/dead-code" target="_blank" rel="noopener noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-hidden="true">#</a></h2><p>Bagian code yang tidak akan tersentuh ketika sistem dijalankan. Contoh yang paling mudahnya adalah sebagai berikut:</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(true)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">halo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>System.out.println(&quot;halo&quot;);</code> tidak akan pernah dijalankan karena fungsi <code>foo</code> akan selalu <code>return</code> duluan.</p><p>Bila Anda menggunakan IDE yang bagus, dead code biasanya akan diberi warning. Misalnya di Eclipse, code System.out.println diatas akan diberikan warning dengan simbol lampu kuning yang memberitahu line of code ini adalah dead code.</p><p>Bahkan untuk beberapa bahasa pemrograman tertentu, contohnya Golang, dead code bukan sekadar warning. Bila ada dead code program tidak bisa di-build.</p>`,8),y=s("Terkadang, dead code tidak nampak sejelas itu. Contohnya di class "),C=s("PriceCalculator.java"),F=s("."),A=a(`<p>Bayangkan awalnya requirement dari client adalah: diskon diberikan 10% bila harga kurang dari 10.000, jika lebih, diskon 20%. Terbentuklah code berikut:</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> price</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> isDiscount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isDiscount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">price </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">      discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> discountPrice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Tiba-tiba, requirement dari client berubah. Client meminta diskon diketok rata 15%.</p><p>Entah mengapa, programmer tidak menghapus if yang pertama. Ia langsung menambahkan di bagian bawah sebelum return. Secara requirement, ini tidak masalah. Diskon akan selalu 15%.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> price</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> isDiscount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isDiscount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">price </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">      discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isDiscount</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> discountPrice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-hidden="true">#</a></h2><p>Setelah membaca code di bagian <code>before</code>, Anda tentunya menyadari bahwa bagian code ini adalah dead code yang tersembunyi.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isDiscount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">price </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    discountPrice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Bagian ini memang dijalankan, namun variabel <code>discountPrice</code> akan selalu ditimpa di line of code selanjutnya. Sehingga bagian ini aman untuk dibuang.</p>`,9);function d(u,h,m,b,g,_){const n=t("github-url");return r(),p("div",null,[i,o("p",null,[y,e(n,{to:"before/PriceCalculator.java"},{default:c(()=>[C]),_:1}),F]),A])}var P=l(D,[["render",d]]);export{f as __pageData,P as default};