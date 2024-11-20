import{_ as i,c as a,a3 as n,o as e}from"./chunks/framework.cY_EENHy.js";const o=JSON.parse('{"title":"Flame","description":"","frontmatter":{"title":"Flame","date":"2024-11-17T00:00:00.000Z","updated":"2024-11-18T00:00:00.000Z","categories":"Dart","tags":["多平台","Dart","游戏开发","Flutter"]},"headers":[],"relativePath":"Flame.md","filePath":"Flame.md"}'),l={name:"Flame.md"};function p(h,s,t,k,d,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="如何用flutter框架与flame引擎打造全平台游戏" tabindex="-1">如何用flutter框架与Flame引擎打造全平台游戏 <a class="header-anchor" href="#如何用flutter框架与flame引擎打造全平台游戏" aria-label="Permalink to &quot;如何用flutter框架与Flame引擎打造全平台游戏&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>最近在写题的时候遇到一个棘手的问题，如何用dart语言快速开发一个2d平面游戏，查询许多资料后才发现官方有这样的一个游戏引擎来协助开发，本文是对这个Flame游戏引擎的简单介绍</p><h3 id="关于flame" tabindex="-1">关于Flame <a class="header-anchor" href="#关于flame" aria-label="Permalink to &quot;关于Flame&quot;">​</a></h3><p>Flame是一个模块化的Flutter游戏引擎，为游戏提供了一套完整的解决方案。它使用了Flutter提供的强大基础设施，但简化了构建项目所需的代码。</p><p>它为您提供了一个简单而有效的游戏循环实现，以及游戏中可能需要的必要功能。例如：输入、图像、精灵图、精灵表、动画、碰撞检测和一个组件系统，我们称之为Flame Component System（简称FCS）。</p><p>我们还提供了扩展Flame功能的独立包：</p><p>flame_audio：使用AudioPlayers软件包提供音频功能 flame_forge2d：使用我们自己的Box2D端口Forge2D提供物理功能 flame_tiled：整合了tiled包 您可以选择任何您需要的部分，因为它们都是独立的和模块化的。</p><h3 id="安装方式" tabindex="-1">安装方式 <a class="header-anchor" href="#安装方式" aria-label="Permalink to &quot;安装方式&quot;">​</a></h3><p>Flame是基于flutter的一个插件，所以我们只需要在pub.dev获取最新版本并添加到依赖 通过在pubspec.yaml中放入以下内容，将pub包作为您的依赖项：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  flame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2.1</span></span></code></pre></div><h3 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h3><p>Flame 为您的项目提供了一个建议的结构，其中包括标准 Flutterassets 目录以及两个子目录：<code>audio</code>和<code>images</code></p><p>如果使用以下示例代码：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  FlameAudio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;explosion.mp3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Flame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.images.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;player.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Flame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.images.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;enemy.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Flame 期望在其中找到文件的文件结构是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└── assets</span></span>
<span class="line"><span>    ├── audio</span></span>
<span class="line"><span>    │   └── explosion.mp3</span></span>
<span class="line"><span>    └── images</span></span>
<span class="line"><span>        ├── enemy.png</span></span>
<span class="line"><span>        └── player.png</span></span></code></pre></div><p>或者，您可以将audio文件夹拆分为两个子文件夹，一个music用于sfx。</p><p>不要忘记将这些文件添加到您的pubspec.yaml文件中：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flutter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  assets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">assets/audio/explosion.mp3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">assets/images/player.png</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">assets/images/enemy.png</span></span></code></pre></div><p>如果您想改变这个结构，可以使用prefix参数创建您自己的AssetsCache、 ImagesCache、AudioCache和SoundPool实例，而不是使用由Flame提供的全局实例</p><h3 id="游戏循环" tabindex="-1">游戏循环 <a class="header-anchor" href="#游戏循环" aria-label="Permalink to &quot;游戏循环&quot;">​</a></h3><h4 id="flamegame" tabindex="-1">FlameGame <a class="header-anchor" href="#flamegame" aria-label="Permalink to &quot;FlameGame&quot;">​</a></h4><p><code>FlameGame</code>是Flame中最基本和最常用的<code>Game</code>类。</p><p><code>FlameGame</code>是一个基于<code>Game</code>类实现的组件。基本上它有一个组件列表，并且通过更新和渲染调用所有已经被添加到游戏的组件。</p><p>这个组件系统被我们称之为 Flame Component System，简称FCS。</p><p>每次游戏需要调整大小时，例如当方向改变，<code>FlameGame</code>会调用所有组件调整大小的方法，并且会将这些信息传递给摄像头和视口。</p><p><code>FlameGame.camera</code>控制空间坐标中的哪个点应该在屏幕的左上角（它的默认值是[0,0]，就像一个普通的Canvas）。</p><p>下面是一个 FlameGame 实现的例子：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyCrate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SpriteComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 创建一个渲染尺寸为16*16的crate.png精灵图组件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  MyCrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), anchor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Anchor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.center);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @override</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Future</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sprite </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Sprite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crate.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onGameResize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gameSize) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onGameResize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gameSize);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 我们不需要在构造函数中设置位置，我们可以直接在这里设置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 因为它将在第一次呈现之前被调用一次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gameSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyGame</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FlameGame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @override</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Future</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyCrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myGame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyGame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  runApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    GameWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      game</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myGame,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>注意：如果您在构建方法中实例化您的游戏，那么每次重新构建Flutter树时，您的游戏都会重新构建，这通常比您想要的更加频繁。为避免这种情况，您可以先创建一个游戏实例，然后在您的组件结构中引用它，就像在上面的示例中所做的那样。</p><p>要从<code>FlameGame</code>的列表中删除组件，可以使用<code>remove</code>或<code>removeAll</code>方法。如果您只想删除一个组件，可以使用第一种方法，如果您想删除一个组件列表，可以使用第二种方法。</p><p>任何调用了<code>remove()</code>方法的组件也将被删除，您只需执行<code>yourComponent.remove()</code>;</p><h4 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h4><p><img src="https://ilgnefz.github.io/flame-cn/images/component-lifecycle.png" alt="图片"> 当一个游戏第一次被添加到Flutter组件树时，以下生命周期方法将依次被调用：<code>onGameResize</code>，<code>onLoad</code>和<code>onMount</code>。在此之后，它继续每次来回调用<code>update</code>和<code>render</code>，直到组件从树中删除。一旦<code>GameWidget</code>从树中移除，<code>onRemove</code>就会被调用，就像从组件树中移除一个普通组件一样</p><h4 id="调试模式" tabindex="-1">调试模式 <a class="header-anchor" href="#调试模式" aria-label="Permalink to &quot;调试模式&quot;">​</a></h4><p>Flame的<code>FlameGame</code>类提供了一个名为<code>debugMode</code>的变量，默认为<code>false</code>。当它被设置为<code>true</code>时来启用游戏组件的调试功能。请注意，此变量的值在添加到游戏中时会传递给其组件，所以如果您在运行时更改debugMode，默认情况下不会影响已添加的组件</p><h4 id="更改背景颜色" tabindex="-1">更改背景颜色 <a class="header-anchor" href="#更改背景颜色" aria-label="Permalink to &quot;更改背景颜色&quot;">​</a></h4><p>要想改变您的<code>FlameGame</code>的背景颜色，您必须重写<code>backgroundColor()</code></p><p>在下面的示例中，背景颜色设置为完全透明，因此您可以看到<code>GameWidget</code>背后的小部件。默认为不透明黑色</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyGame</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FlameGame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @override</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Color</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backgroundColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x00000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>请注意，在游戏运行时，背景颜色无法动态变化。但是如果您想动态地改变它，您可以只画一个背景来覆盖整个画布</p><h4 id="singlegameinstance-mixin" tabindex="-1">SingleGameInstance mixin <a class="header-anchor" href="#singlegameinstance-mixin" aria-label="Permalink to &quot;SingleGameInstance mixin&quot;">​</a></h4><p>如果您正在制作一个单机游戏应用程序，可以将可选的<code>SingleGameInstance</code>通过mixin应用到您的游戏中。这是一种构建游戏时的常见场景：一个全屏的<code>GameWidget</code>托管了一个单一的<code>Game</code>实例</p><p>添加这个<code>mixin</code>可以在某些场景中提供性能优势。特别是，即使父组件尚未挂载，组件的<code>onLoad</code>方法也保证在将其添加到父组件时启动。因此， <code>await</code> 时在<code>parent.add(component)</code>上，始终保证组件加载完成</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyGame</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FlameGame</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SingleGameInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="低级游戏api" tabindex="-1">低级游戏API <a class="header-anchor" href="#低级游戏api" aria-label="Permalink to &quot;低级游戏API&quot;">​</a></h4><p><img src="https://ilgnefz.github.io/flame-cn/images/game-mixin.png" alt="图片"><code>Game minix</code>是一个低级API，可以在当您想要实现如何构建游戏引擎的功能时使用。比如，<code>Game</code>不实现任何<code>update</code>或<code>render</code>的功能。</p><p><code>Loadable</code> minxi有<code>onLoad</code>、<code>onMount</code>和<code>onRemove</code>几个生命周期方法。当游戏被加载 + 安装或删除时，这些方法会从 <code>GameWidget</code> (或者其他父类)中调用。只有在第一次将类添加到父类时才调用 <code>onLoad</code>，但是<code>onMount</code>(在<code>onLoad</code>之后被调用)会在每次被添加到一个新的父类时被调用。当类从父类中移除时，将调用<code>onRemove</code>。</p><p>注意：<code>Game</code>mixin允许更自由的实现任何事物，但如果您使用它，您也会错过它的所有内置功能。</p><p>下面是一个<code>Game</code>实现的例子:</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyGameSubClass</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Game</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dt) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myGame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyGameSubClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  runApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    GameWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      game</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myGame,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,52)]))}const c=i(l,[["render",p]]);export{o as __pageData,c as default};
