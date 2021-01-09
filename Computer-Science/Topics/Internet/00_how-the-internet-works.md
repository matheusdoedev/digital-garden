# How Does the Internet Work?

## Internet Addresses

- Because the Internet is a global network of computers, each computer connected to the Internet **must** have a unique address. Internet addresses are in the form **nnn.nnn.nnn.nnn** where nnn must be a number from 0 - 255. This address is known as an **IP address**. (IP stands for Internet Protocol)
- If you connect to the Internet through an Internet Service Provider (ISP), you are usually assigned a temporary IP address for the duration of your dial-in session.
- If you connect to the Internet from a local area network (LAN), your computer might have a permanent IP address or it might obtain a temporary one from a DHCP (Dynamic Host Configuration Protocol) server.
- In any case, if you are connected to the Internet, your computer has a unique IP address.

![Diagram 1, How Does the Internet Work?, Stanford at stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag1.gif)

## Protocol Stacks and Packets

- A computer transmite data in internet through the use of a **protocol stack**.
- Every computer needs one to communicate on the Internet and it is usually built into the computer's operating system.
- The protocol stack used on the Internet is refered to as the TCP/IP protocol stack.
- The TCP/IP stack looks like this:

| Protocol Layer                | Comments                                                          |
| ----------------------------- | ----------------------------------------------------------------- |
| Application Protocols Layer   | Protocols specific to applications such as WWW, e-mail, FTP, etc. |
| Transmission Control Protocol | TCP directs packets                                               |
| Internet Protocol Layer       | IP directs packets to a specific computer using an IP address     |
| Hardware Layer                | Converts binary packet data to network signals and back.          |

![Diagram 2, How Does the Internet Work?, Stanford at stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag2.gif)

1. The message would start at the top of the protocol stack on your computer and work it's way downward.
1. If the message to be sent is long, each stack layer that the message passes through may break the message up into smaller chunks of data. This is because data sent over the Internet (and most computer networks) are sent in manageables chunks. On the Internet, these chunks of data are known as **packets**.
1. The packets would go through the Application Layer and continue to the TCP layer. Each packet is assigned a **port number**.
1. After going through the TCP layer, the packets proceed to the IP layer. This is where each packet receives it's destination address.
1. Now that our message packets have a port number and an IP address, they are ready to be sent over the Internet. The hardware layer takes care of turning our packets containing the alphabetic text of our message into electronic signals and transmitting them over the phone line.
1. On the other end of the phone line your ISP has a direct connection to the Internet. The **ISPs router** examines the destination address in each packet and determines where to send it. Often, the packet's next stop is another router.
1. Eventually, the packets reach computer 5.6.7.8. Here, the packets start at the bottom of the destination computer's TCP/IP stack and work upwards.
1. As the packets go upwards through the stack, all routing data that the sending computer's stack added (such as IP address and port number) is stripped from the packets.
1. When the data reaches the top of the stack, the packets have been re-assembled into their original form, "Hello computer 5.6.7.8!"

## Resources

- [How Does the Internet Work?, Stanford at stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
