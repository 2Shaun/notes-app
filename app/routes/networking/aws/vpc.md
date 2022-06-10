**instance** - can be thought of as a VM
**route table** - defines where traffic from subnets and gateways in the VPC are directed. these can be directed to an instance, virtual network gateway, nat gateway, internet gateway, VPC peer, or any VPC endpoint. these can be populated dynamically by BGP peers
- traffic flow between AWS regions can be thought of as internet transit traffic, although some uses AWS private backbone
- e.g. imagine an AWS customer has an internal network of size 192.168.0.0/16. they can create a VPC of size 172.31.0.0/18, configure their "Customer Gateway" information, and the new on premises router has the following entries:
192.168.0.0/16........stay here
172.31.0.0/18.........AWS

# VPC
- given to an account by default (with an internet gateway)
- user created VPCs do not have internet gateways by default
- region level (multiple datacenters in one geographical region)
- made up of multiple subnets within one CIDR block (say /16)
- can be thought of as a virtual datacenter
- there is VPC peering
- similar to an Azure VNet
- instances in separate VPCs need VPN connectivity or VPC peering
- can have security groups
- comes with a main route table
- everything in a VPC has layer 2 (link) accessibility with each other. (this is typically handled differently on prem where virtual routing and forwarding (VRF) is needed
**VRF** - "layer 3 VLAN", fragment routing table into multiple virtual routing tables
- data transfer between AZs has a cost
- inbound traffic from internet is free but outbound is not

# subnets
- AZ level
- given a route table (**main route table** by default)
- given a network access control list (ACL)
- aws uses 5 addresses from the subnet
- private: have no direct route to the internet and typically have a default route to a NAT gateway or virtual private gateway (to on-premises)
- public: typically have a default route to an internet gateway

# security groups
- at the instance level
- layer 4 (transport, TCP/UDP etc, demuxes based on port) distributed firewall
- whitelist only (implicit deny)

# acl
- "layer 2" (no layer 2 in VPCs)
- you can block ports but it applies to the entire subnet
- stateless
- cannot reference instances

**elastic IP (EIP)** - a public static ip address that can be applied to another instance after it is say destroyed (this would typically release a public IP). multiple EIPs can be assigned to one elastic network interface (ENI). only have a cost if not assigned, if multiple are assigned to one instance, 
**ENI** - can be freely moved between instances in the same subnet. multiple ENIs can be assigned to one instance, enabling routing software to be ran on the instance

# VPN
- have an hourly charge

# NAT
- external interface (outside) receives ingress traffic and internal interface (inside) receives egress traffic
- allows a LAN to use a set of IP addresses for interal traffic and a second set of addresses for external traffic
# PAT
- each computer on the LAN is translated to the same IP address but different port number assignment
- state can only be established when an egress attempt is made
# NAT Gateway
- **single AZ** (internet and virtual private gateways are HA across the region)

**non-routable addresses** - not routable on the internet. your router COULD pass packets destined for an RFC 1918 address on the internet, but your ISP will drop them
**stateful filtering** - a NAT router may whitelist a particular IP and terminate any connections which send forged packets. one side of the TCP connection will notice and wipe state

# Virtual Private Gateway (VGW)
- terminates VPN tunnels
- propates BGP routes (encapsulated by VPN)
