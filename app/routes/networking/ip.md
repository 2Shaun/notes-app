**iptables** - handles NATing, aka ingress packets which were sent to your public IP but need to be assigned to a host in the private network
**route** - handles packet forwarding, aka modifying the source of a packet and sending it to a different interface

# `ip a`

# `ip r`

# nmcli

## Router

- _create_ a LAN and manage it
- manage data _leaving_ the LAN
- manage multiple networks
- store IP addresses
- contain wireless radios for Wifi

## Switch

- manage data _within_ the LAN
- store MAC addresses

## MAC Addresses (Layer 2 Data link layer)

- MAC address corresponds to the network card (NIC/network adapter)
- the signals from layer 1 are given structure and which MAC addresses should listen to the message
- has a lookup table IP address \<-> MAC address (**ARP** - address resolution protocol)
  - switches use packet sniffing or ARP to identify which mac addresses are connected to each switch port
  - if the IP address in the header of the incoming data does not have an associated MAC address (lookup table miss), it will wrap the data in the default gateway MAC address. it seems like the data then is routed to the ISP router's MAC address
  - you can see the ARP cache by typing `arp` in the terminal
- network drivers unpack this layer and the network card sends data to the OS
- since all ethernet adapters have a MAC address of `ff:ff:ff:ff:ff:ff` (broadcast address)
- **DHCP** (Dynamic Host Configuration Protocol) servers use MAC addresses to assign IP addresses
  - DHCP servers offer IP addresses to NICs upon boot. these IP addresses are not granted permanently but are leased

## IP Addresses (Layer 3 Network layer)

### Classless Inter-Domain Routing (CIDR) notation

- notice how IP addresses are made up of 8 bits between `.`'s
  - the numbers after slashes are multiples of 8, representing how many bits are allocated for the network prefix.
    - e.g., `192.168.1.0/24`, refers to the hosts from `192.168.1.0` to `192.168.1.255`
- routers serve as a boundary between different subnetworks
  - a packet must go through a router if the routing prefix of the source and destination are different
  - subnet masks are important because they yield the routing prefix via a bitwise AND
- `192.168` addresses are assigned by the DHCP (router)
- `169.254` addresses are self-assigned when a DHCP server cannot be found
- every device connected to the router has the same public ip but different private ip
- an ISP provides a globally unique IP address to the external side of your router
  - note that this can change, which presents a problem if you want external users to access your network remotely
  - this is what you see when you search "what's my IP address"
- on the internal side of your router, you will have typically have one IP address used for administrating the device

## TCP/UDP (Layer 4 Transport layer)

- once the OS receives a packet from the network card, it decides which port the package should go to
- ports correspond to services/applications
- application developers decide whether it is listening on a TCP or UDP port
- there is a UDP port 80 and a TCP port 80
- TCP does error checking and resends packets (blocks) if there is an error
- TCP holds up the receiving machine whereas UDP does not
- TCP uses syn and ack to establish handshakes
- DNS (port 53) uses UDP to translate strings to CIDR: `google.com` \<-> `95.84.45.53`
- DHCP uses UDP to translate CIDR to MAC: `95.84.45.53` \<-> `2c:f0:d4:ec:49:d4`
- HTTP, FTP, SMTP, POP3, IMAP4 all use TCP ports
  - TCP has larger headers because it contains source/destination
  - which scenarios are apps not aware of the source? UDP?
- RDP uses TCP port 3389 and UDP port 3389

## Interfaces

- `lo` stands for loopback, which tests network cards
- typically an interface only has one IP address, but it's possible for an interface to have multiple IP addresses via aliasing

## Scope

`scope link` - can be used only within a LAN

`mtu` - maximum transfer unit
