- how can a machine express interest in 230.0.0.4 (multicast group representation)? specifically the two keycloak machines that are replicating
  - `230.0.0.4` -> `01-00-5e-00-00-04`
  - the routers are responsible for replicating and deciding group members
  - a host can join a multicast group by sending an Internet Group Management Protocol (IGMP) message to the first hop router
  - it's a many to one relationship between IPs -> MAC
    - there is one unique MAC for every IP but not vice versa
  - a layer 2 frame 
- you typically don't know the source of a multicast packet (what would Wireshark src column say?)
# vs. Replicated Unicast
- source machine only needs to create one packet
- better bandwidth usage
# vs. Broadcast
- destination machines don't receive unwanted packets (only subscribers will receive packets)
- better bandwidth usage
# Layer 3 (IP Address)
## Class D
- flat IP address (no subnetting)
    - the sub-ranges are sometimes written to appear like subnets (CIDR notation) but it is just a shorthand
## Local Network Control Block (224.0.0.0/24)
- not supposed to go off of **VLAN**
## Source-Specific
- source known
## 239.0.0.
# Layer 2 (MAC Address)
- **ARP** was need for a legal layer 2 frame
- source IP was unicast (HTTP request, very familiar)
  - MAC address of source or gateway
- destination IP also needs a MAC address
  - that destination (group) must have a MAC address
  - a receiver (subscriber) should expect packets from a consistent MAC address
- the subscription of a receiver to a specific Layer 3 (IP) address is usually done at the application layer
- NIC (network interface card) needs to be be "tuned" to the layer 3 packet and layer 2 frame
**MAC OUI** - first 24 of a MAC address (usually something about the vendor, but not in this case)
