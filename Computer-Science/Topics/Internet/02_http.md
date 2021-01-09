# Application Protocols - HTTP

## HTTP and the World Wide Web

- The application protocol that makes the web work is **Hypertext Transfer Protocol** or **HTTP**.
- HTTP is the protocol that web browsers and web servers use to communicate with each other over the Internet.
- It is an application level protocol because it sits on top of the TCP layer in the protocol stack and is used by specific applications to talk to one another. In this case the applications are web browsers and web servers.

- HTTP is a connectionless text based protocol.
- Client (web browsers) send requests to web servers for web elements such as web pages and images.
- After the request is serviced by a server, the connection between client and server across the Internet is disconnected.
- A new connection must be made for each request.
- Most protocols are connection oriented. This means that the two computers communicating with each other keep the connection open over the Internet.
- HTTP does not however. Before an HTTP request can be made by a client, a new connection must be made to the server.

### When is type a URL into a web browser, this is what happens

1. If the URL contains a domain name, the browser first connects to a domain name server and retrieves the corresponding IP address for the web server.
1. The web browser connects to the web server and sends an HTTP request (via the protocol stack) for the desired web page.
1. The web server receives the request and checks for the desired page. If the page exists, the web server sends it. If the server cannot find the requested page, it will send an HTTP 404 error message.
1. The web browser receives the page back and the connection is closed.
1. The browser then parses through the page and looks for other page elements it needs to complete the web page. These usually include images, applets, etc.
1. For each element needed, the browser makes additional connections and HTTP requests to the server for each element.
1. When the browser has finished loading all images, applets, etc. the page will be completely loaded in the browser window.

## Resources

- [How Does the Internet Work?, Stanford at stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
