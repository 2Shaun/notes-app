# Chapter 1

**end-to-end** argument - argues that any error control, encryption, delivery acknowledgment, should be handled by the applications/users only, not the wire. never try to guess what the application will likely need
**hop-by-hop** protocol - used by e2e systems and every intermediate system
**multiplexing** - uninterrupted incoming packets to one source from multiple sources

- TDM (time-division multiplexing) is when time is allocated for packets from a specific source, providing more predictability at the cost of inefficiency when the source is not sending
- static multiplexing is when space is allocated for packets from a source

## VC (virtual circuit) / X.25

- switch contains:
  1. preflow state (connection information) set using signaling protocol
     - establishment
     - clearing
     - status
- packets contain: 2. LCN (logical channel number)
  - these two decide what switch the packet will travel to next

**packet** - used for connection-oriented protocols (TCP)
**datagram** - all information needed for journey from source to destination is contained in the packet and not in the switch (very popular in the early forms of the internet because no signaling protocols are needed) (UDP)
**m-bit checksum** - sent alongside packets as a sum of all m bit groups. the receiver adds all m-bit groups, AND complements the result with the checksum, if 0 is the final result, no error was detected
**fate sharing** - communication only fails if one of the endpoints fails (not the network connection). this is important because most endpoints have more than one path to each other
**protocol architecture** - how a protocol suite (collection of related protocols) divides up tasks
**PDU (protocol data unit)** - object passed from layer to layer

Link layer : frame \{
mac.src
mac.dst # for demuxing
type: IPv4 | IPv6 | ARP
Network layer : \{
id : Protocol[IP]
ip.src
ip.dst

        Transport layer : datagram/packet \{
            id: Protocol[TCP, UDP]
            port.src
            port.dst
            Application layer : data \{}
        }

}
}
each layer also contains a protocol identifier about the encapsulated PDU to demux

Switch function : mac.dst -> port
this is done via a forwarding table **not an ARP table!**
if no port is found in the forwarding table, flooding (**not broadcasting!**) frame to all ports on the tagged VLAN except src.port

**forwarding** - determining the next hop to reach the destination IP  
**port** - non physical binding locations which applications can accept packets.

- well known 0 - 1024
  - should not be used unless offerring a well known service
- registered 1025 - 49151
  - used usually for custom applications
  - these typically need to be known by the client, whereas the server does not need to know the ephemeral port used by the client
- dynamic 49152 - 65000 - should be used for ephemeral or client side ports
  **server** - an application which handles requests
  **client** - an application which makes requests
