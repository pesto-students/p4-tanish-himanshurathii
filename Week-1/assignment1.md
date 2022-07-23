Q. When a user enters an URL in the browser, how does the browser fetch the desired result ?

step 1:- You enter a URL into a web browser
step 2:-The browser looks up the IP address for the domain name via DNS
step 3:-The browser sends a HTTP request to the server
step 4:-The server sends back a HTTP response
step 5:-The browser begins rendering the HTML
step 6:-The browser sends requests for additional objects embedded in HTML (images, css, JavaScript) and repeats steps 3-5.
step 7:-Once the page is loaded, the browser sends further async requests as needed.

     When you type “https://twitter.com” into your browser the first thing that happens is a Domain Name Server (DNS) matches “MRFtyre.com” to an IP address. Then the browser sends an HTTP request to the server and the server sends back an HTTP response. The browser begins rendering the HTML on the page while also requesting any additional resources such as CSS, JavaScript, images, etc. Each subsequent request completes a request/response cycle and is rendered in turn by the browser. Then once the page is loaded some sites will make further asynchronous requests.

![alt text](https://miro.medium.com/max/1400/0*_hl4umuWpka99kML.png)

Q. What is the main functionality of the browser?

A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them

Q. High Level Components of a browser :-

a)The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
b)The browser engine: marshals actions between the UI and the rendering engine.
c)The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
d)Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
e)UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
f)JavaScript interpreter. Used to parse and execute JavaScript code.
g)Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=741)

Q. Rendering engine and its use:-

This component is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface

The four basic steps include:

1.  The requested HTML page is parsed in chunks, including the external CSS files and in style elements,the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”
2.  Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
3.  the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
4.  The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.
    ![alt text](https://3fxtqy18kygf3on3bu39kh93-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)

Q. Parsers (HTML, CSS, etc)

Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run. The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree
The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree.
When the browser encounters CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.JavaScript parsing is done during compile time or whenever the parser is invoked, such as during a call to a method.

Q. Script Processors

The Script processor allows you to specify your own processor logic for a simple processor using JavaScript or Groovy. The script is entered as an option on the script processor

Q. Tree construction

The browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node. To construct the render tree, the browser roughly does the following: Starting at the root of the DOM tree, traverse each visible node
![alt text](https://download.huihoo.com/google/gdgdevkit/DVD1/developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png)
Q. Order of script processing

The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a `<script>` tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

Q. Layout and Painting

The layout (also called reflow) peace will be in charge to calculate the positions and dimensions of each node on the screen. The layout will be in charge to calculate the Box Model like it shows the Chrome dev tool
![alt text](https://miro.medium.com/max/736/1*Zn6GitJgGX5kZkSTBgmoIA.png)
we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as “painting”, “rasterizing.” or “repainting”
