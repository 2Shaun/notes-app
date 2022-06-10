**routing domain** - a set of routers operating on the same protocol accessible within a corporate network.

**BGP (border gateway protocol)** - routers (bordering networks) communicate via a TCP annoucement protocol

**BGP neighbors** - peers

**edge routers** - exchange eBGP advertisements with other edge routers (peers)

**ARP**
- Layer 2 construct

## VLAN
**trunk/tagged port** - tags outgoing ethernet frames and untags incoming ethernet frames
**access/untagged port** - sends and receives traffic with no VLAN tag
- Layer 2 construct
- tags are applied to network frames
- these tags allow frames to travel as if on seperate networks but are physically in the same network with no additional cabling 
- net0 on testvm01 was an access port

- vmbr0 is a virtual switch
- 10.100.1.1 was the gateway for vlan2
- 

**VRF (Virtual routing and forwarding)**
- Layer 3 construct
- "virtual routers" on one router

**Subnet**
- Layer 3 construct

## QEMU/KVM

### Mode
#### NAT
To reduce the amount of public IPs, public IPs can be mapped to private IPs using NATs (one to many). NAT is applied in a vnet by mapping the hosts IP address to the virtual switch, e.g., `virbr0`. 

#### Routed
Host machine acts as a router and all virtual machines are in a subnet. In this mode, a static route must be configured since no other hosts are aware of the subnet.


You may provide a list of IPs that the virtual 