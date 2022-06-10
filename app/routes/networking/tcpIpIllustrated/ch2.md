- IPv4 is represented in dotted-quad notation where each octet (8-bit) represents a fourth of the IP address
- there are 32-bits in an IPv4 address
- each IPv6 block represents 16 bits, so the last two blocks written in dotted-quad notation (prefixed by `::`) represent an IPv4-*compatible* IPv6 address
- there are 128 bits in an IPv6 address
- EUI-64 format uses the MAC address in its calculation to produce a IPv6 address, but may have privacy risks. this portion is known as the interface ID (IID)
- `::` can represent any number of zero blocks, `0000`, in an IPv6 address
- the `::ffff:` prefix can represent an IPv4-*mapped* IPv6 address
- IPv6 also have scope prefixes:
  - node-local (same computer)
  - link-local (same network link)
  - global (internet-wide)
- subnet masking arose with the scaling problems of IPv4 Class structure, it was natural to think of how to choose where the "Net Number" and "Host" number began
- if an org is given a class B (128.32.x.x) and the network admin sets subnets 128.32.1.0/24 and 128.32.2.0/24, 1 and 2 are subnet numbers
- subnet masks are purely a local matter to the site
- routers use subnet masks to determine where the network part ends (and where the host part begins)
- when written in CIDR notation, the IP address is usually the minimum one in the subnet
- the broadcast address for a subnet is the maximum
- CIDR masks are visible to the global internet (but it is very similar to VLSM otherwise)
- prefix length = mask length 
- 10/8, 172.16/12, and 192.168/16 are considered non-routable addresses
- 64:ff9b::/96 is a well-known prefix which can be used for automatic translation from IPv6 to IPv4
- it's useful knowing multiples of 16 for IPv6 prefix notation
- an IPv4 multicast address (aka group address) identifies a group of host interfaces. theoretically, the group could be the entire internet (global scope)
- a sender does not generally know which or how many hosts received a multicast packet (unless it replies), as software controls whether they are part of a multicast group 
## Internet Society (ISOC)
**Internet Assigned Number Authority (IANA)** - allocating address space for protocols
**Internet Engineering Task Force (IETF)** - making things work, "in charge"
**channel** - group address and single sender address
**any source multicast (ASM)** - group members accept datagrams from any sender
**single source multicast (SSM)** - channel specifies one sender
/24 is a "short prefix" with "more addresses"
**autonomous system number (ASN)** - used in routing protocols among ISPs to aggregate routes and apply routing policies. note that a single ASN may correspond to multiple sites
**unicast-prefix-based multicast (UBM)** - has a 234 prefix with 24 bits (/24 or shorter prefix) allocated for a unicast address space. note that this requires global cooperation if the unicast address space is global
## Multicast scopes (where datagrams are sent)
- node - same computer
- link - same subnet
- site - same site
- global - internet, may be used for routing protocols, address allocation, and wanting to join a global group
**network time protocol (NTP)** - syncing time between hosts using an algo and multicast
**rendezvous point (RP)** - a router responsible for routing multicast datagrams
**anycast** - finding *a* (not *the*) computer which provides a service. **internet** routers will advertise the same unicast route from multiple locations. useful for finding DNS servers, rendezvous points, and 6to4 tunnels
**Number Resource Organization (NRO)** - comprised of Regional Internet Registries (RIRs) responsible for protecting unallocated IP resource pool. they typically distribute large blocks to ISPs, which in turn allocate to customers
**provier aggregatable (PA) addresses** - an address space given to the user by the provider. as the name implies, they are numerically adjacent. switching providers however requires the customer to do the unpleasant experience of renumbering (provider lock)
**provider independent (PI) addresses** - an address space owned by a user directly. ISPs may not route for this space however because they are not aggregatable (not numerically adjacent) and make routing difficult
**`WHOIS` query** - gain info about an IP address and the allocated space for which it is contained
**routing policy specification language (RPSL)** - published by ISPs and used by network admins to prevent routing instability
- when you say "firewall", you may be referring to the enterprise border/perimeter firewall, internal/core NAT firewall (on the DMZ but must go through perimeter fw), firewall between VMs, or OS level firewall
  - DMZs need not sit between the core fw and the perimeter fw. not having any core network accessible to the DMZ is indeed a type of security stronger than a fw
- address spaces must be advertised to ISPs, which they then advertise to the rest of the internet. ISPs generally advertise to the internet in large aggregated blocks (/8's and /16's). If an ISP cannot aggregate an address block, the **longest matching prefix** algorithm forces traffic to small blocks (/24's, /25's, /26's, and smaller).
- IP addresses serve as an *identifier* (name) and a *locator* (address understood by routing system)