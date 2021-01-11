# How does web browsers work ?

- A browser is a software application used to locate, retrieve and display content on the World Wide Web, including Web pages, images, video and other files.
- As a client/server model, the browser is the client run on a computer that contacts the Web server and requests information.
- The Web server sends the information back to the Web browser which displays the results on the computer or other Internet-enabled device that supports a browser.

## High-level architecture of browser

[![Main components of the browser, from Monica Raghuwanshi on Medium](https://miro.medium.com/max/499/1*RL0pnuf_hmLJ76oY6DViZw.png)](https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509)

### The User Interface

- The User Interface is the space where User interacts with the browser.

### The Browser Engine

- Works as a bridge between the User Interface and the rendering engine.
- According to the inputs from various user interfaces, it queries and manipulates the rendering engine.

### The Rendering Engine

- The rendering engine is responsible for rendering the requested web page on the browser screen.
- The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface.

### Networking

- Component of the browser which retrieves the URLs using the commom internet protocols of HTTP or FTP.
- The networking component handles all aspects of Internet communication and security.

### JavaScript Interpreter

- It is the component of the browser which interprets and executes the javascript code embedded in a website.
- The interpreted results are sent to the rendering engine for display.

### UI Backend

- UI backend is used for drawing basic widgets like combo boxes and windows.

### Data Persistence/Storage

- This is a persistence layer. Browsers support storage mechanisms such as localStorage, Indexed DB, WebSQL and FileSysem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences.

## Rendering engine

- The networking layer will start sending the contents of the requested documents to rendering engine in chunks of 8KBs.

[![Rendering engine basic flow, from Monica Raghuwanshi on Medium](https://miro.medium.com/max/600/1*cfQpu6Xvb7e9IiH4CCuiCg.png)](https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509)

### Content tree or DOM tree

- The rendering engine parses the chunks of HTML document and convert the elements to DOM nodes in a tree called the **content tree** or the **DOM tree**. It also parses both the external CSS files as well in style elements.

### Render tree

- While the DOM tree is being constructed, the browser constructs another tree, the **render tree**. This tree is of visual elements in the order in which they will be displayed.
- It is the visual representation of the document.
- The purpose of this tree is to enable painting the contents in their correct order.

### Layout process

- When the renderer is created and added to the tree, it does not have a position and size.
- The process of calculating these values is called layout or reflow. This means giving each node the exact coordinates where it should appear on the screen.

### Painting

- In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen.
- Painting uses the UI backend layer.

## References

- [How does web browsers work?, from Monica Raghuwanshi on Medium](https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509)
