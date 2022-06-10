R1 (router) wants to communicate with Host A:
1. check routing table. host A's IP address is in a subnet which maps to local
2. check ARP table. if not, it will broadcast (MAC address FF:FF:FF:FF:FF:FF) "who is xxx.xxx.xxx.xxx"
3. host A receives broadcast arp request and sends it mac address (note host A also recieves the router's interface in the data frame and adds it to its own arp table)
4. once both hosts know each other's MAC addresses, communication can occur
- switches switch on the same network
- switches and bridges are essentially invisible to routers
- routers have only two interfaces: a WAN interface and an interface to the **switch module** on the box
# EdgeMASTER
- a VLAN is a layer 2 (MAC address) construct for switches
- a subnet is a layer 3 (IP address) construct
- switches will only broadcast when there's an ARP table miss
## LAGs
- treat two links (cables) as one
## VLAN tags
- untagged (access) ports send and receive untagged frames
- 
## 

# PoE ++ 
- good for poe powered for flex (poe switch that's powered by poe)

