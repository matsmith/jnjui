jnjui
=====

*JNJUI* is a library of user interface patterns and components for use on Johnson and Johnson internal web applications.

===Usage===
				
*JNJUI* is intended to be included as-is, and extended or modified in your project's CSS or JavaScript. This will ensure that future updates and bugfixes to the project can be integrated as smoothly as possible. If you'd like to browse the unminified source, check out the src directory, but for production, use the packaged files in dist.

*Required:* Include the <strong>JNJUI</strong> CSS file in your document.

<code>&lt;link rel=&quot;stylesheet&quot; href=&quot;dist/assets/stylesheets/jnjui.css&quot; /&gt;</code>

*Optional:* If you're using the sidebar drawer, <a href="#accordion">accordion</a> or <a href="#modals">modal</a> components, include the relevant JavaScript files.

<code>
						&lt;script src=&quot;dist/vendor/javascripts/jquery.js&quot;&gt;&lt;/script&gt;<br />
						&lt;script src=&quot;dist/vendor/javascripts/qbox.js&quot;&gt;&lt;/script&gt;<br />
						&lt;script src=&quot;dist/assets/javascripts/jnj-accordion.js&quot;&gt;&lt;/script&gt;<br />
						&lt;script src=&quot;dist/assets/javascripts/jnj-drawer.js&quot;&gt;&lt;/script&gt;<br />
</code>


For support in IE8 or below, include the HTML5shiv in conditional comments.

					<pre><code>&lt;!--[if lte ie 8]&gt;
&lt;script src=&quot;dist/vendor/javascripts/html5shiv.js&quot;&gt;&lt;/script&gt;
&lt;![endif]--&gt;</code></pre>

=====Browser Support=====

Full support in the latest versions of:
				<ul>
					<li>Chrome</li>
					<li>Internet Explorer</li>
					<li>Firefox</li>
					<li>Safari</li>
					<li>Safari for iOS</li>
					<li>Android</li>
				</ul>

Basic support is included for Internet Explorer 8, but there aren't any extraneous JavaScript polyfills included to patch support for features like media queries, form placeholders, box shadows or the like.
