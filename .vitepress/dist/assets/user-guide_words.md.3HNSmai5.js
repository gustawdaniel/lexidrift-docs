import{_ as s,c as a,o,ag as t}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"Word Definitions","description":"","frontmatter":{},"headers":[],"relativePath":"user-guide/words.md","filePath":"user-guide/words.md"}'),e={name:"user-guide/words.md"};function p(i,n,l,u,r,q){return o(),a("div",null,n[0]||(n[0]=[t(`<h1 id="word-definitions" tabindex="-1">Word Definitions <a class="header-anchor" href="#word-definitions" aria-label="Permalink to &quot;Word Definitions&quot;">​</a></h1><p>App contains list of words sorted by frequency of usage in any supported language.</p><p>Langauges:</p><ul><li>English</li><li>German</li><li>Spanish</li><li>Polish</li><li>Russian</li></ul><p>To learn them we&#39;re asking LLM model for concise definition, translation and examples with images promprs.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`using \${style} style define \${lang} word &quot;\${word}&quot;, next to definition and example add prompt that ilustrate example in flux model, you can give one ore more examples, respond in json, print only json, nothing more, structure:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;word&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;translation&quot;: {</span></span>
<span class="line"><span>    &quot;en&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;de&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;es&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;pl&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;ru&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;definition&quot;: {</span></span>
<span class="line"><span>    &quot;en&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;de&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;es&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;pl&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;ru&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;examples&quot;: [{</span></span>
<span class="line"><span>    &quot;part_of_speech&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;en&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;de&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;es&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;pl&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;ru&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;image_prompt&quot;: &quot;&quot;</span></span>
<span class="line"><span>  }]</span></span>
<span class="line"><span>}\`</span></span></code></pre></div><p>We use another service to convert prompts into images and texts into naturally sounding voices.</p><p>Thanks to these data you can see card of word when you can learn about it.</p><hr><p>These definitions are good but not perfect, so we will add possibility to correct them in app. Now please sent all corrections to <a href="mailto:gustaw.daniel@gmail.com" target="_blank" rel="noreferrer">gustaw.daniel@gmail.com</a></p>`,10)]))}const m=s(e,[["render",p]]);export{d as __pageData,m as default};
