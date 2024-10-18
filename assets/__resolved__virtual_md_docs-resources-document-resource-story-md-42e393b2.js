const html = '<h1 id="document-resource" tabindex="-1">Document Resource <a class="header-anchor" href="#document-resource" aria-hidden="true">#</a></h1>\n<p>Document Resource is a wrapper on top of <a href="/frappe-ui/story/docs-resources-resource-story-js" data-route="true">Resource</a> for\nworking with a single document. This feature only works with a Frappe Framework\nbackend as of now.</p>\n<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2>\n<p>Create a document resource by specifying <code>doctype</code> and <code>name</code> of the record. It\nwill be fetched automatically. The <code>todo.doc</code> is the document object with all\nthe fields of the document. Along with this, you get <code>todo.setValue</code> and\n<code>todo.delete</code> resources.</p>\n<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #7EE787">div</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">v-if</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;todo.doc&quot;</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #7EE787">div</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">      &lt;</span><span style="color: #7EE787">h1</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">        {{ todo.description }}</span></span>\n<span class="line"><span style="color: #C9D1D9">      &lt;/</span><span style="color: #7EE787">h1</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">      &lt;</span><span style="color: #FFA198; font-style: italic">Badge</span><span style="color: #C9D1D9">&gt;{{ todo.status }}&lt;/</span><span style="color: #FFA198; font-style: italic">Badge</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;/</span><span style="color: #7EE787">div</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #7EE787">Button</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">@click</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;todo.setValue.submit({ status: &#39;Closed&#39; })&quot;</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">      Mark as Closed</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;/</span><span style="color: #7EE787">Button</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #7EE787">Button</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">@click</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;todo.sendEmail.submit({ email: todo.owner })&quot;</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">      Send email</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;/</span><span style="color: #7EE787">Button</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #7EE787">div</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">script</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">setup</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { createDocumentResource, Button } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;frappe-ui&#39;</span></span>\n<span class="line"><span style="color: #FF7B72">let</span><span style="color: #C9D1D9"> todo </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">createDocumentResource</span><span style="color: #C9D1D9">({</span></span>\n<span class="line"><span style="color: #C9D1D9">  doctype: </span><span style="color: #A5D6FF">&#39;ToDo&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  name: </span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  whitelistedMethods: {</span></span>\n<span class="line"><span style="color: #C9D1D9">    sendEmail: </span><span style="color: #A5D6FF">&#39;send_email&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  },</span></span>\n<span class="line"><span style="color: #C9D1D9">})</span></span>\n<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">script</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<h2 id="options-api" tabindex="-1">Options API <a class="header-anchor" href="#options-api" aria-hidden="true">#</a></h2>\n<p>You can also define resources if you are using Options API. You need to register\nthe <code>resourcesPlugin</code> first.</p>\n<p><strong>main.js</strong></p>\n<pre><code class="language-js"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">js</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { resourcesPlugin } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;frappe-ui&#39;</span></span>\n<span class="line"><span style="color: #C9D1D9">app.</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(resourcesPlugin)</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<p>In your .vue file, you can declare all your resources under the resources key as\nfunctions. The resource object will be available on <code>this.$resources.[name]</code>. In\nthe following example, <code>this.$resources.todo</code> is the resource object.</p>\n<p><strong>Component.vue</strong></p>\n<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">script</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #FF7B72">export</span><span style="color: #FFA657"> </span><span style="color: #FF7B72">default</span><span style="color: #FFA657"> {</span></span>\n<span class="line"><span style="color: #FFA657">  </span><span style="color: #C9D1D9">resources: {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">todo</span><span style="color: #C9D1D9">() {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">        type: </span><span style="color: #A5D6FF">&#39;document&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        doctype: </span><span style="color: #A5D6FF">&#39;ToDo&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        name: </span><span style="color: #A5D6FF">&#39;1&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      }</span></span>\n<span class="line"><span style="color: #C9D1D9">    },</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span><span style="color: #FFA657">,</span></span>\n<span class="line"><span style="color: #FFA657">}</span></span>\n<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">script</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<h2 id="list-of-options-and-api" tabindex="-1">List of Options and API <a class="header-anchor" href="#list-of-options-and-api" aria-hidden="true">#</a></h2>\n<p>Here is the list of all options and APIs that are available on a list resource.</p>\n<h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3>\n<pre><code class="language-js"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">js</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">let</span><span style="color: #C9D1D9"> todo </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">createDocumentResource</span><span style="color: #C9D1D9">({</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// name of the doctype</span></span>\n<span class="line"><span style="color: #C9D1D9">  doctype: </span><span style="color: #A5D6FF">&#39;ToDo&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// name of the record</span></span>\n<span class="line"><span style="color: #C9D1D9">  name: </span><span style="color: #A5D6FF">&#39;&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// define doc methods to use as resources</span></span>\n<span class="line"><span style="color: #C9D1D9">  whitelistedMethods: {</span></span>\n<span class="line"><span style="color: #C9D1D9">    sendEmail: </span><span style="color: #A5D6FF">&#39;send_email&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  },</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// the above configuration enables the following API</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// todo.sendEmail.submit()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// events</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// error can occur from failed request</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">onError</span><span style="color: #C9D1D9">(</span><span style="color: #FFA657">error</span><span style="color: #C9D1D9">) {},</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// on successful response</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">onSuccess</span><span style="color: #C9D1D9">(</span><span style="color: #FFA657">data</span><span style="color: #C9D1D9">) {},</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// transform data before setting it</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">transform</span><span style="color: #C9D1D9">(</span><span style="color: #FFA657">doc</span><span style="color: #C9D1D9">) {</span></span>\n<span class="line"><span style="color: #C9D1D9">    doc.open </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">false</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> doc</span></span>\n<span class="line"><span style="color: #C9D1D9">  },</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// other events</span></span>\n<span class="line"><span style="color: #C9D1D9">  delete: {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">onSuccess</span><span style="color: #C9D1D9">() {},</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">onError</span><span style="color: #C9D1D9">() {},</span></span>\n<span class="line"><span style="color: #C9D1D9">  },</span></span>\n<span class="line"><span style="color: #C9D1D9">  setValue: {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">onSuccess</span><span style="color: #C9D1D9">() {},</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">onError</span><span style="color: #C9D1D9">() {},</span></span>\n<span class="line"><span style="color: #C9D1D9">  },</span></span>\n<span class="line"><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3>\n<p>A document resource is made up of multiple individual resources. In our running\nexample, the resource object that fetches the document is at <code>todos.get</code>. So all\nthe <a href="/frappe-ui/story/docs-resources-resource-story-js" data-route="true">properties of a resource</a> are available on this\nobject. Similarly, there are resources for <code>setValue</code>, and <code>delete</code>.</p>\n<pre><code class="language-js"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">js</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">let</span><span style="color: #C9D1D9"> todo </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">createDocumentResource</span><span style="color: #C9D1D9">({</span><span style="color: #FF7B72">...</span><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">todo.doc </span><span style="color: #8B949E">// doc returned from request</span></span>\n<span class="line"><span style="color: #C9D1D9">todo.</span><span style="color: #D2A8FF">reload</span><span style="color: #C9D1D9">() </span><span style="color: #8B949E">// reload the doc</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// update options</span></span>\n<span class="line"><span style="color: #C9D1D9">todo.</span><span style="color: #D2A8FF">update</span><span style="color: #C9D1D9">({</span></span>\n<span class="line"><span style="color: #C9D1D9">  doctype: </span><span style="color: #A5D6FF">&#39;&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  name: </span><span style="color: #A5D6FF">&#39;&#39;</span></span>\n<span class="line"><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">todo.get </span><span style="color: #8B949E">// doc resource</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.get.loading </span><span style="color: #8B949E">// true when data is being fetched</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.get.error </span><span style="color: #8B949E">// error that occurred from making the request</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.get.promise </span><span style="color: #8B949E">// promise object of the request, can be awaited</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// resource to set value(s) on the document</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.setValue</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.setValue.</span><span style="color: #D2A8FF">submit</span><span style="color: #C9D1D9">({</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">// field value pairs to set</span></span>\n<span class="line"><span style="color: #C9D1D9">    status: </span><span style="color: #A5D6FF">&#39;Closed&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    description: </span><span style="color: #A5D6FF">&#39;Updated description&#39;</span></span>\n<span class="line"><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// same as setValue but debounced</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.setValueDebounced</span></span>\n<span class="line"><span style="color: #8B949E">// will run once after 500ms</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.setValueDebounced.</span><span style="color: #D2A8FF">submit</span><span style="color: #C9D1D9">({</span></span>\n<span class="line"><span style="color: #C9D1D9">    description: </span><span style="color: #A5D6FF">&#39;Updated description&#39;</span></span>\n<span class="line"><span style="color: #C9D1D9">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// resource to delete the document</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.delete</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.delete.</span><span style="color: #D2A8FF">submit</span><span style="color: #C9D1D9">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #8B949E">// if whitelistedMethods is defined</span></span>\n<span class="line"><span style="color: #8B949E">// you get a resource for each whitelisted method</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.sendEmail</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.sendEmail.submit</span></span>\n<span class="line"><span style="color: #C9D1D9">todos.sendEmail.loading</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n';
const frontmatter = {};
const relativePath = "docs/resources/Document Resource.story.md";
export {
  frontmatter,
  html,
  relativePath
};
