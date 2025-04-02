import{_ as o,c as i,o as t,ag as r}from"./chunks/framework.DPDPlp3K.js";const a="/assets/architecture.RdXjQMBz.png",m=JSON.parse('{"title":"Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"hacker-docs/architecture.md","filePath":"hacker-docs/architecture.md"}'),c={name:"hacker-docs/architecture.md"};function s(n,e,l,d,u,h){return t(),i("div",null,e[0]||(e[0]=[r('<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><p>Our backends can be divided into 3 main parts:</p><ol><li>Definition services</li></ol><ul><li><code>lexify</code> - generates word definitions <ul><li>uses llm to generate definition</li><li>stores definition in mongodb</li><li>uses word storage to check if word is correct</li></ul></li><li><code>vocalize</code> - responsible for word pronunciation <ul><li>uses llm to generate word pronunciation</li><li>stores pronunciation in s3</li></ul></li><li><code>imagify</code> - generates images of words <ul><li>uses AI to generate image</li><li>stores image in s3</li></ul></li></ul><p>Those services work independently of users and are not aware of most db collections.</p><p>You can use them not only by <code>API</code> but also as <code>CLI</code>. Thanks to <code>hexagonal architecture</code> they are easy to test and extend (for example to queue interface like <code>NATS</code>).</p><ol start="2"><li>API</li></ol><p>Only <code>HTTP</code> based communication is allowed and in most cases requires <code>JWT</code> token, so interacting with <code>API</code> you are acting as user saved in <code>db</code>.</p><ol start="3"><li>Auxilary</li></ol><ul><li><code>video</code>, this service waiting for new videos requests defined by users in API and then return stream with ready video to save for <code>API</code>.</li></ul><p>These services can&#39;t be running without <code>API</code> and fully relay on it.</p><p><img src="'+a+'" alt="architecture.png"></p>',12)]))}const f=o(c,[["render",s]]);export{m as __pageData,f as default};
