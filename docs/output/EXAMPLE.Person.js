Ext.data.JsonP.EXAMPLE_Person({"component":false,"html_meta":{},"tagname":"class","extends":"NGNX.Person","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":false,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"EXAMPLE.Person","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"addEventListeners","id":"method-addEventListeners"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"emit","id":"method-emit"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireError","id":"method-fireError"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"on","id":"method-on"},{"tagname":"method","owner":"EXAMPLE.Person","meta":{},"name":"sayHello","id":"method-sayHello"}],"event":[],"property":[{"tagname":"property","owner":"NGN.core","meta":{"protected":true},"name":"_emitter","id":"property-_emitter"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"dataProperties","id":"property-dataProperties"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"displayname","id":"property-displayname"},{"tagname":"property","owner":"NGNX.Person","meta":{"readonly":true},"name":"exists","id":"property-exists"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"firstname","id":"property-firstname"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"id","id":"property-id"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"image","id":"property-image"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"lastname","id":"property-lastname"},{"tagname":"property","owner":"NGNX.Person","meta":{"readonly":true},"name":"login","id":"property-login"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"modified","id":"property-modified"},{"tagname":"property","owner":"NGNX.Person","meta":{},"name":"primaryemail","id":"property-primaryemail"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a><div class='subclass '><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='docClass'>NGNX.Person</a><div class='subclass '><strong>EXAMPLE.Person</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Person.html#EXAMPLE-Person' target='_blank'>Person.js</a></div><div class='dependency'><a href='source/Person3.html#EXAMPLE-Person' target='_blank'>Person.js</a></div></pre><div class='doc-contents'><p>This is an example of a custom API. Developers can build their own API's\nusing the NGN and NGNX libraries as a base.</p>\n\n<p>An example of using this code in a node process would be:</p>\n\n<pre><code>    require('ngn');\n\n    var person = new <a href=\"#!/api/EXAMPLE.Person\" rel=\"EXAMPLE.Person\" class=\"docClass\">EXAMPLE.Person</a>();\n</code></pre>\n\n<p><em>Outputs:</em></p>\n\n<pre><code>    I am person 2.0\n</code></pre>\n\n<p>Make sure you view the source (hover over <a href=\"#!/api/EXAMPLE.Person\" rel=\"EXAMPLE.Person\" class=\"docClass\">EXAMPLE.Person</a> at the top of the page) to see how this extension is created. You may be\nsurprised by how little code there is. Most of it is documentation.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_emitter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-property-_emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-property-_emitter' class='name expandable'>_emitter</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>An event emitter for the class. ...</div><div class='long'><p>An event emitter for the class. Used internally.</p>\n</div></div></div><div id='property-dataProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-dataProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-dataProperties' class='name not-expandable'>dataProperties</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'><p>An array of property names populated by a \"get()\"</p>\n</div><div class='long'><p>An array of property names populated by a \"get()\"</p>\n</div></div></div><div id='property-displayname' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-displayname' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-displayname' class='name not-expandable'>displayname</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The name by which the person prefers to be referred to as.</p>\n</div><div class='long'><p>The name by which the person prefers to be referred to as.</p>\n</div></div></div><div id='property-exists' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-exists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-exists' class='name not-expandable'>exists</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'><p>Identifies that the person has been looked up in the database and determined to either exist or not.</p>\n</div><div class='long'><p>Identifies that the person has been looked up in the database and determined to either exist or not.</p>\n</div></div></div><div id='property-firstname' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-firstname' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-firstname' class='name expandable'>firstname</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Given name. ...</div><div class='long'><p>Given name.</p>\n<p>Defaults to: <code>{value: &quot;Unknown&quot;, enumerale: true, writable: true}</code></p></div></div></div><div id='property-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-id' class='name not-expandable'>id</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The ID of the person (as defined by Application)</p>\n</div><div class='long'><p>The ID of the person (as defined by Application)</p>\n</div></div></div><div id='property-image' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-image' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-image' class='name not-expandable'>image</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>Currently returns the FB pic or gravatar URL.</p>\n</div><div class='long'><p>Currently returns the FB pic or gravatar URL.</p>\n</div></div></div><div id='property-lastname' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-lastname' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-lastname' class='name expandable'>lastname</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Surname ...</div><div class='long'><p>Surname</p>\n<p>Defaults to: <code>{value: &quot;Unknown&quot;, enumerale: true, writable: true}</code></p></div></div></div><div id='property-login' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-login' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-login' class='name expandable'>login</a><span> : NGN.app.Login</span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'>The login used to authenticate the user. ...</div><div class='long'><p>The login used to authenticate the user. This is <code>null</code>\nuntil an authentication method is executed.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-modified' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-modified' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-modified' class='name not-expandable'>modified</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'><p>Indicates one or more data properties has changed.</p>\n</div><div class='long'><p>Indicates one or more data properties has changed.</p>\n</div></div></div><div id='property-primaryemail' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGNX.Person' rel='NGNX.Person' class='defined-in docClass'>NGNX.Person</a><br/><a href='source/Person2.html#NGNX-Person-property-primaryemail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Person-property-primaryemail' class='name not-expandable'>primaryemail</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The primary email account of the person.</p>\n</div><div class='long'><p>The primary email account of the person.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EXAMPLE.Person'>EXAMPLE.Person</span><br/><a href='source/Person3.html#EXAMPLE-Person-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/EXAMPLE.Person-method-constructor' class='name expandable'>EXAMPLE.Person</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>This constructor is bare, except for a single console output when the object is created. ...</div><div class='long'><p>This constructor is bare, except for a single console output when the object is created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEventListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Error error]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Error (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the NGN#BUS.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sayHello' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EXAMPLE.Person'>EXAMPLE.Person</span><br/><a href='source/Person3.html#EXAMPLE-Person-method-sayHello' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EXAMPLE.Person-method-sayHello' class='name expandable'>sayHello</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Say hello. ...</div><div class='long'><p>Say hello.</p>\n</div></div></div></div></div></div></div>","private":null,"name":"EXAMPLE.Person","aliases":{},"superclasses":["Class","NGN.core","NGNX.Person"],"requires":[],"id":"class-EXAMPLE.Person","subclasses":[],"files":[{"href":"Person.html#EXAMPLE-Person","filename":"Person.js"},{"href":"Person3.html#EXAMPLE-Person","filename":"Person.js"}]});