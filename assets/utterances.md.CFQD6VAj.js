import{_ as i,c as a,a3 as t,o as n}from"./chunks/framework.cY_EENHy.js";const d=JSON.parse('{"title":"utterances","description":"","frontmatter":{"title":"utterances","date":"2024-07-05T00:00:00.000Z","updated":"2024-07-05T00:00:00.000Z","categories":"评论区","tags":["Document","utterances"]},"headers":[],"relativePath":"utterances.md","filePath":"utterances.md"}'),e={name:"utterances.md"};function h(p,s,l,r,k,E){return n(),a("div",null,s[0]||(s[0]=[t(`<h3 id="utterances-🔮" tabindex="-1">utterances 🔮 <a class="header-anchor" href="#utterances-🔮" aria-label="Permalink to &quot;utterances 🔮&quot;">​</a></h3><p>基于 GitHub issue 构建的轻量级<strong>评论小部件</strong></p><p>可以将 GitHub issue用于博客评论、wiki 页面等</p><p><strong>下面是我的博客应用<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>的效果图</strong></p><p><img src="https://imgur.la/images/2024/07/05/_20240705083909.png" alt="数据类型与基础"></p><h3 id="运作方式" tabindex="-1">运作方式 <a class="header-anchor" href="#运作方式" aria-label="Permalink to &quot;运作方式&quot;">​</a></h3><p>加载 <a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a> 时，GitHub issue 搜索API用于查找与页面关联的问题</p><p>如果我们找不到与页面匹配的问题，没问题，utterances-bot 将在有人第一次发表评论时自动创建问题</p><p>若要发表评论，用户需要授权 utterance app 使用 GitHub OAuth 流代表他们发布</p><p>或者，用户可以直接在 GitHub issue 发表评论</p><h3 id="应用方式" tabindex="-1">应用方式 <a class="header-anchor" href="#应用方式" aria-label="Permalink to &quot;应用方式&quot;">​</a></h3><h4 id="官方脚本挂载" tabindex="-1">官方脚本挂载 <a class="header-anchor" href="#官方脚本挂载" aria-label="Permalink to &quot;官方脚本挂载&quot;">​</a></h4><p>以下是如何应用<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>到你的网页上的脚本标签</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://utteranc.es/client.js&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //引入Utterances客户端库的JavaScript脚本。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        repo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-name/your-repo&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //应替换为您的GitHub仓库的名称，格式通常是用户名/仓库名。这指定了Utterances应该使用哪个仓库创建issue来存储评论</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        issue-term</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pathname&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //这是Utterances用来匹配issue的搜索条件，pathname意味着评论将基于当前页面的URL路径进行匹配</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github-light&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //设定评论框使用的主题。这里指定的是GitHub Light主题，Utterances也允许使用其他主题如github-dark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        crossorigin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //一个安全特性，指示浏览器在请求跨域脚本时不带任何cookies，用于保护用户数据隐私。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>async: 表示脚本异步加载，不会被阻塞在当前的文档解析，可以在解析HTML时提前加载脚本</strong></p><h4 id="vue脚本挂载" tabindex="-1">vue脚本挂载 <a class="header-anchor" href="#vue脚本挂载" aria-label="Permalink to &quot;vue脚本挂载&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这行指定了一个使用TypeScript写的Vue组件脚本，lang=&quot;ts&quot;说明脚本使用TypeScript，而setup是Vue 3的Composition API的关键字</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { onMounted } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //导入Vue的onMounted生命周期钩子，该钩子在组件挂载后调用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onMounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//定义onMounted钩子的回调函数，在组件挂载到DOM后执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> utterScript</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//创建一个新的&lt;script&gt;元素</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://utteranc.es/client.js&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //设置&lt;script&gt;元素的src属性，指向Utterances的JavaScript文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.async </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.crossOrigin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;anonymous&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //设置async和crossOrigin属性，确保脚本异步加载并跨域</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;repo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;your-name/your-repo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设置Utterances使用的GitHub仓库。请替换为你自己的用户名和用户仓库路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;issue-term&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pathname&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//pathname意味着评论将基于当前页面的URL路径进行匹配</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;label&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utterances&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    utterScript.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;theme&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;preferred-color-scheme&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设定评论框使用的主题，使Utterances评论框的主题与用户操作系统的颜色模式相匹配</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 通过CSS选择器.comment查询DOM元素，这是Utterances将被注入的位置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> commentContainer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.comment&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (commentContainer)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        commentContainer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(utterScript) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//判断如果找到了元素，将Utterances脚本元素添加到该元素下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>整个代码块定义了一个Vue组件，使用TypeScript并利用Vue 3的setup函数，以编程方式动态地创建和插入<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>评论框</p><p>这个组件在组件加载完成后，将自动挂载<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>评论系统，无需手动添加HTML脚本标记</p><p>这种方法使得集成更加灵活，并且能够更好地与Vue组件的生命周期和其他特性集成</p><h3 id="utterances结论评价" tabindex="-1">utterances结论评价 <a class="header-anchor" href="#utterances结论评价" aria-label="Permalink to &quot;utterances结论评价&quot;">​</a></h3><p><strong><a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>是一个现代的、基于GitHub仓库的评论系统，它提供了一些显著的优势和潜在的局限</strong></p><h4 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h4><ol><li><p><strong>集成简单</strong>：<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>可以通过简单的JavaScript脚本标签嵌入到网页中，易于设置和集成</p></li><li><p><strong>基于GitHub Issues</strong>：利用了现有的GitHub Issues基础设施，为开发者和用户提供了熟悉的交互界面</p></li><li><p><strong>实时更新</strong>：与GitHub Issues同步，评论状态和讨论会实时反映在仓库的Issues页面上</p></li><li><p><strong>安全</strong>：作为静态脚本加载，无需担心服务器端的代码执行，增强了安全性</p></li><li><p><strong>主题定制</strong>：支持多种主题，包括暗黑模式，能够适应不同用户的偏好</p></li><li><p><strong>跨平台</strong>：适用于各种静态站点生成器和Web框架，如Jekyll、Hexo、Vue.js等</p></li><li><p><strong>社区支持</strong>：由于建立在GitHub上，<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>有活跃的社区支持和不断更新的特性</p></li></ol><h4 id="局限" tabindex="-1">局限 <a class="header-anchor" href="#局限" aria-label="Permalink to &quot;局限&quot;">​</a></h4><ol><li><p><strong>依赖GitHub</strong>：由于完全依赖于GitHub，如果GitHub服务出现问题，<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>也会受到影响</p></li><li><p><strong>功能限制</strong>：与传统评论系统相比，<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>的功能可能相对有限，例如缺少一些高级的评论管理和分析工具</p></li><li><p><strong>隐私考虑</strong>：尽管<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>不收集个人信息，但所有评论都存储在GitHub Issues中，用户需要注意个人信息的暴露</p></li><li><p><strong>自定义程度</strong>：与一些高度可定制的评论系统相比，<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>的自定义程度可能较低</p></li><li><p><strong>可能的性能影响</strong>：加载外部脚本可能会稍微影响页面加载时间，尤其是在网络条件不佳的情况下</p></li></ol><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h4><p>总体而言，<a href="https://utteranc.es/" target="_blank" rel="noreferrer">utterances</a>是一个轻量级且用户友好的选择，特别是对于那些已经使用GitHub并希望在其项目或博客上添加评论系统的开发者<br> 对于需要更多高级功能或深度定制的场景，可能需要考虑其他解决方案</p><p>::: zh-CN <strong>如果你发现这篇指南有用，或者有改进建议，请随时联系我们或参与讨论。</strong>🎉 🎉 🎉 :::</p><p>::: en *<strong>If you find this guide useful or have suggestions for improvements, please feel free to contact us or join the discussion.</strong>🎉 🎉 🎉 :::</p>`,30)]))}const o=i(e,[["render",h]]);export{d as __pageData,o as default};
