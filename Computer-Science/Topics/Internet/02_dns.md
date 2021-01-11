# DNS or Domain Name Service

## Domain Names and Address Resolution

- The **DNS** or **Domain Name Service** is a distributed database which keeps track of computer's names and their corresponding IP addresses on the internet.
- Many computers connected to the Internet host part of the DNS database and the software that allows others to access it. These computers are known as DNS servers.
- No DNS server contains the entire database, they only contain a subset of it.
- If a DNS server does not contain the domain name requested by another computer, the DNS server re-directs the requesting computer to another DNS server.

![Diagram 6, How Does the Internet Work?, Stanford at stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag6.gif)

- The Domain Name Service is structure as a hierarchy similar to the IP routing hierachy. The computer requesting a name resolution will be re-directed 'up' the hierarchy until a DNS server is found that can resolve the domain name in the request.

- When an Internet connection is setup, one primary and one or more secondary DNS servers are usually specified as part of the installation. This way, any Internet applications that need domain name resolutuion will be able to funtion correctly.
- When is input a web address into a web browser, the browser first connects to your primary DNS server.
- After obtaining the IP address for the domain name you entered, the browser then connects to the target computer and requests the web page you wanted.

## Resources

- [How Does the Internet Work?, Stanford at stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
