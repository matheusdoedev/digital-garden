# How the web works

- The moment when a website address is typed on browser, a lot of different steps happen:
  - The URL gets resolved
  - A Request is sent to the server of the website
  - The response of the servier is parsed
  - The page is rendered and displayed

![How web works](https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_1000/v1/academind.com/content/tutorials/how-the-web-works/how-the-web-works-big-picture)

## Step 1 - URL Gets Resolved

- The website code is obviously not stored on your machine and hence needs to be fetched from another computer where it is stored. This “other computer” is called a “server”. Because it serves some purpose, in our case, it serves the website.
- You enter “academind.com” (that is called “a **domain**”) but actually, the server which hosts the source code of a website, is identified via **IP (= Internet Protocol)** addresses. **The browser sends a “request” (see step 2) to the server with the IP address you entered (indirectly - you of course entered “academind.com”)**.

### DNS Server

- There's a special type of server ou there in the internet that are so called "name server" or "**DNS server**" (where DNS = "**Domain Name System**").
- The job of these DNS servers is to **translate domains to IP addresses**.

## Step 2 - Request Is Sent

- With the IP address resolved, the browser goes ahead and makes a request to the server with that IP address.
- The browser bundles up a bunch of information (What's the exact URL? Which kind of request should be made? Should metadata be attached) and sends that data package to the IP address.

![A Request](https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_1000/v1/academind.com/content/tutorials/how-the-web-works/request-package)

- The data is sent via the "HyperText Transfer Protocol" (known as "HTTP") - a standardized protocol which defines what a request (and response) has to look like, which data may be included (and in which form) and how the request will be submitted.
- The server then handles the request appropriately and returns a so called “response”. A “response” is a technical thing and kind of similar to a “request”. It’s basically a “request” in the opposite direction.
- Like a request, a response can contain data, metadata etc. When requesting a page, the response will contain the code that is required to render the page onto the screen, or data like json, files, images etc.

![A Response](https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_1.0,g_center,w_1000/v1/academind.com/content/tutorials/how-the-web-works/response-package)

- Some servers are programmed to generate websites dynamically based on the request (e.g. a profile page that contains your personal data), other servers return pre-generated HTML pages (e.g. a news page). Or both is done - for different parts of a webpage.
- There also is a third alternative: Websites that are pre-generated but that change their appearance and data in the browser.

## Step 3 - Response Is Parsed

- The browser receives the response sent by the server. This alone, doesn't display anything on the screen though. Instead, the next step is that the browser parses the response. Just as the server did it with the request. Again, the standardization enforced by HTTP helps of course.
- The browser checks the data and metadata that's enclosed in the response. And based on that, it decides what to do.

## Step 4 - Page Is Displayed

- The browser goes through the HTML data returned by the server and builds a website based on that.

## Resources

- [How The Web Works, Maximilian Schwarzmüller on academind.com](https://academind.com/tutorials/how-the-web-works/)
- [How The Web Works, Academind channel on YouTube](https://www.youtube.com/watch?v=hJHvdBlSxug&feature=youtu.be)
