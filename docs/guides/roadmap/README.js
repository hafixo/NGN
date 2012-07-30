Ext.data.JsonP.roadmap({"guide":"<h1>NGN Roadmap</h1>\n\n<h2>Unknown Release Version</h2>\n\n<p>Add the following base classes:</p>\n\n<p><strong>Core Server Types</strong></p>\n\n<ul>\n<li>NGN.core.TcpServer</li>\n<li>NGN.core.DnsServer</li>\n<li>NGN.core.FtpServer</li>\n<li>NGN.core.TelnetServer</li>\n<li><a href=\"#!/api/NGN.core.SmtpServer\" rel=\"NGN.core.SmtpServer\" class=\"docClass\">NGN.core.SmtpServer</a></li>\n<li>NGN.core.MailServer (extends <a href=\"#!/api/NGN.core.SmtpServer\" rel=\"NGN.core.SmtpServer\" class=\"docClass\">NGN.core.SmtpServer</a>)</li>\n<li>NGN.core.Cluster (mixin?)</li>\n</ul>\n\n\n<p><strong>Core Data Libraries</strong></p>\n\n<ul>\n<li>NGN.date.Date, NGN.date.Month, NGN.date.Year, NGN.date.Day, NGN.date.Week</li>\n</ul>\n\n\n<p><em>perhaps include datejs?</em>\n<em>Add commonly used funcitonality like DateAdd(), DateDiff(), etc.</em></p>\n\n<p><strong>Application Helpers</strong></p>\n\n<ul>\n<li>NGN.app.EventBus</li>\n</ul>\n\n\n<p><strong>Simplified Server-2-Server Networking</strong></p>\n\n<ul>\n<li>NGN.net.Connection</li>\n</ul>\n\n\n<p><strong>Simplified Servers/Clients</strong></p>\n\n<ul>\n<li>NGN.ftp.Server</li>\n<li>NGN.ftp.Client</li>\n<li>NGN.dns.Server</li>\n<li>NGN.web.Proxy</li>\n<li>NGN.web.Socket</li>\n</ul>\n\n\n<p><strong>Web Authentication Strategies</strong></p>\n\n<ul>\n<li><a href=\"#!/api/NGN.web.auth.Strategy\" rel=\"NGN.web.auth.Strategy\" class=\"docClass\">NGN.web.auth.Strategy</a></li>\n<li>NGN.web.auth.OAuth</li>\n<li>NGNX.web.auth.Facebook</li>\n<li>NGNX.web.auth.Twitter</li>\n<li>NGNX.web.auth.LinkedIn</li>\n<li>NGNX.web.auth.Github</li>\n<li>NGNX.web.auth.Foursquare</li>\n<li>NGNX.web.auth.Dwolla</li>\n<li>NGN.web.auth.Group</li>\n<li>NGN.web.auth.Role</li>\n<li>NGN.web.auth.Permission</li>\n</ul>\n\n\n<p><strong>New Datasource Connectors</strong></p>\n\n<ul>\n<li>NGN.datasource.SQL (generic RDBMS base connection)</li>\n<li>NGN.datasource.MySql</li>\n<li>NGN.datasource.PostgreSql</li>\n<li>NGN.datasource.Oracle</li>\n<li>NGN.datasource.SqlServer</li>\n<li>NGN.datasource.Azure</li>\n<li>NGN.datasource.CouchDB</li>\n<li>NGN.datasource.Neo4j</li>\n<li>NGN.datasource.Cassandra</li>\n<li>NGN.datasource.Hadoop</li>\n</ul>\n\n\n<p><em>Optional Generic Connectors?</em></p>\n\n<ul>\n<li>NGN.datasource.Document (NoSQL)</li>\n<li>NGN.datasource.Graph (NoSQL)</li>\n<li>NGN.datasource.KeyValue (NoSQL)</li>\n<li>NGN.datasource.XML</li>\n<li>NGN.datasource.JSON</li>\n<li>NGN.datasource.Memory (Object store?)</li>\n</ul>\n\n\n<h3>Common Extension Library</h3>\n\n<ul>\n<li><a href=\"#!/api/NGNX.Person\" rel=\"NGNX.Person\" class=\"docClass\">NGNX.Person</a></li>\n<li>NGNX.Group</li>\n<li>NGNX.Account</li>\n<li>NGNX.Actor</li>\n<li>NGNX.Device</li>\n<li>NGNX.Template</li>\n<li>NGNX.Organization</li>\n<li><a href=\"#!/api/NGNX.Email\" rel=\"NGNX.Email\" class=\"docClass\">NGNX.Email</a></li>\n<li>NGNX.Address (street address)</li>\n<li>NGNX.PhoneNumber</li>\n<li>NGNX.Location (generic geographic location)</li>\n<li>NGNX.Date</li>\n</ul>\n\n\n<p><em>Potential Geographic Library</em></p>\n\n<ul>\n<li>NGNX.Country</li>\n<li>NGNX.Region</li>\n<li>NGNX.City</li>\n<li>NGNX.PostalCode</li>\n</ul>\n\n\n<p><em>Service Wrappers?</em>\n* NGNX.service.Stripe\n* NGNX.service.Facebook\n* NGNX.service.Twitter\n* NGNX.service.LinkedIn\n* NGNX.service.Foursquare\n* NGNX.service.Dwolla\n* NGNX.service.<strong>Sendgrid</strong>\n* NGNX.service.Loggly\n* NGNX.service.Bitly\n* NGNX.service.Github\n* NGNX.service.Bitbucket\n...</p>\n\n<h1>CLI Commands</h1>\n\n<p><code>ngn --extend ngn</code> Create a stub for a new NGN class.\n<code>ngn --extend ngnx</code> Create a stub for a new NGNX class.\n<code>ngn --extend api</code> Create a stubb for a new extension API class.\n<code>ngn --extend api --uml /path/to/file</code> Create a stub library for a new API, based on a UML file.\n<code>ngn --create template</code> Create a new NGN project using a template.</p>\n\n<h1>Wishlist</h1>\n\n<p>Support loading a \"map\" object for HttpServer routes instead of just passing in a string of file paths.</p>\n\n<h3>Supporting Apps</h3>\n\n<p>It would be nice to have the following syntax for building apps:</p>\n\n<pre><code>NGN.app('configReference',function(){\n    // Application Logic, similar to onReady\n});\n</code></pre>\n\n<p><code>configReference</code> would be a string, object, local file, or URI. When using a string, it assumes a master controller (NGN Admin)\nwould manage configurations. It would therefore connect to the master controller, retrieve the configuration from it, and load it.\nUsing an object would be the manual equivalent. Passing a file would be the semi-manual equivalent, and passing a URI would\nassume the response is a loadable configuration. Of course, no configuration could be passed as well (i.e. configReference is optioanl).\nUsing this approach, the callback function would be called once all of the configuration is complete.</p>\n\n<p>This approach would enable the ability to store things like server connections, log settings, app settings, and a bunch of other stuff.\nThis would be great for generalized settings, like using a common mail server/fallback mail server across every app, or specifying a\ncommon datasource used for caching. By supporting remote configurations, it would be possible to maintain clusters from a centralized\nconfiguration server.</p>\n\n<p>Ultimately, this concept is based on a desire to create a management application. It's inspired by ColdFusion, specifically the concept\nof a web-based administrator that allows for registering DSN's and other common services. This, of course, is probably much further down\nthe road. It should be noted that this kind of management system is a considerable amount of work. This portion may need to be commercialized\nto support ongoing development... if NGN reaches this point.</p>\n\n<h3>Managing Apps Efficiently</h3>\n\n<p>NGN supports extensions, i.e. devs can write their own API's by extending <code>NGN</code> or <code>NGNX</code>. It should be possible to only load the libraries\na dev wants/needs to reduce overhead. If the app doesn't require NGNX, it should not be loaded. If multiple extension APIs are created,\nonly load the ones the app needs.</p>\n\n<p>This could be part of a app configuration, but that doesn't really reduce overhead. Elements of the namespace can be deleted after NGN is\ninitialized, but this only minimizes what is already a small memory footprint. For more performant startup, it would be better to simply\nnot load what isn't required.</p>\n\n<p>Perhaps a CLI tool to parse a project and return non-required classes would be sufficient. By providing developers a copy/paste list of\nexcluded features, the development overhead could be minimized for those seeking more performant initialization sequences.</p>\n\n<h3>Simple Global-ish Functionality</h3>\n\n<p>A library of common functions that can be used throughout the application could shrink dev time and make code more readable/managable.\nIt would be nice to shrink the namespace so not everything has to be <code>NGN.whatever()</code>. However, most of the useful characters are already\nused by other libraries like JQuery and Underscore. Perhaps <code>&amp;</code> or <code>@</code>? Something like <code>@.dateDiff(date1,date2)</code>?</p>\n\n<ul>\n<li>NGN.isArray(), NGN.isString(), NGN.isNumber(), NGN.isDate, NGN.isBoolean(), NGN.isSimple(), etc.</li>\n<li>NGN.dump() --> For generating JSON screen dumps (otherwise use eyes/inspect)</li>\n<li>NGN.dateDiff(), NGN.dateCompare(), etc.</li>\n</ul>\n\n\n<h1>To-Do</h1>\n\n<ul>\n<li>Guide on creating your own custom extensions &amp; how to generate documentation for it.</li>\n<li>Clas System guide.</li>\n</ul>\n\n","title":"Roadmap"});