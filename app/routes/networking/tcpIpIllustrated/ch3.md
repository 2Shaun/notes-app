- IEEE 802 is a standards committee (made up of 802.1 - 802.12) dedicated to LAN/PAN (personal area network)/MAN (metropolitan area networks). 802 has no technical significance
  - **logical link control (llc)** is common among all 802 standards
**link layer** - send and receive IP datagrams for the IP module. it also carries ARP
wired LANs - ethernet (802.3 standards), a shared ethernet segment
MAN - (802.16 and 802.21) cable TV and DSL connections
wired voice network - telephone lines with modems
wireless LAN (WLAN) - wi-fi (802.11). frame format and general interface borrowed from 802.3. make use of CSMA/CA (collision avoidance)
**tunneling** - when link layer protocols are carried inside other link or higher-level protocols
**maximum transmission unit (MTU)** - max frame size to be sent over the link layer. note that this implies frames are a variable size
- variable size frames allow for Q-tagging (VLAN tagging). VLAN tagged frames are known as envelopes
**carrier sense multi-access with collision detection (CSMA/CD)** - access method. type of **media access control (MAC)** protocol. since ethernet segments are shared, ethernet interfaces *independently* use a distributed algo to determine when to send data. if a collision is detected, the interface will wait a random amount of time (uniform distribution) then use exponential backoff until a collision is not detected. *one* frame is travelling at a time.
**full-duplex** - CSMA/CD is not used here. data is sent and received simulataneously. this access method is common for switches
**uplink port** - cascades frames to another switch, forming a larger Ethernet LAN

## Ethernet frame
- the time between encoded (clock recovery) bits per nic is variable
- the clock is recovered by the time between the preamble (0xAA) and the start frame delimeter (SFD) (0xAB)
**MAC Address** - aka link-layer address, physical address, 802 address, hardware address. 48-bit
- a physical address of ff:ff:ff:ff:ff:ff indicates a broadcast
- the Type field doubles as a length but also for demuxing the inner packet
- half-duplex operations require an extension to the frame to make sure CSMA/CD works properly
**inter-packet gap (IGP)** - is required in some specs to allow for error correcting and to interleave packets
- two hosts on the same switch with different VLANs require a router between them (unless it is a combination switch/router)
**trunking** - when multiple VLANs span multiple switches. a VLAN tag must be present when it goes to the other switch, otherwise it may broadcast
- the method of VLAN tagging and using QoL identifiers is defined in an extention of 802.1 called 802.1p/q
- QoL ID defines priority of the packet
- `vconfig` can manipulate 802.1p/q information
  - this wasn't found on MAC OS, you may just be able to use the `.` notation to add a virtual interface 
**link aggregation** - allows for *bonding* of interfaces for increased performance and reliability
- `modprobe` allows you to `BOND` two interfaces, creating a `MASTER` bond interface with the two aggregated NICs as `SLAVE`s. sophisticated load-balancing can be implemented or one `SLAVE` may act as backup to another: Wi-Fi interface as backup to an Ethernet interface
**autonegotiation** - how interfaces communicate speed and duplex config. *duplex mismatch* can occur if autonegotiation is disabled on one interface and/or there is a difference in duplex config
- wake-up capabilities will configure power levels based on frequency of incoming packets
- if multiple hosts/stations are sending to the same port of a switch, frame buffering may occur. Ethernet `PAUSE` messages can be used to implement *flow control* 
- switches can be thought of as high-performance bridges
- switches themselves have MAC addresses
- switches learn MAC addresses by looking at `mac.src` of incoming packets. a port is mapped to that IP address in the *filtering database*
- in an extended lan, several MAC addresses may be applied to one port (maybe also if you are changing the NIC attached to a port)
- `brctl` is used to turn a computer with multiple NICs into a bridge. `brctl showmacs` will display the *filtering db* aka *forwarding db*
- an entry in the filtering db is removed after its aging timer has reached its limit
- flooding (sending frames to every port except the source) allow the network to still function (with overhead) even if the forwarding db is empty
- when multiple bridges are cross-connected, filtering dbs may oscillate during flooding as it receives packets with the same `mac.src` from multiple ports
- a spanning tree is all that is needed to connect multiple switches. the act of disabling redunant connections outside of the spanning tree is part of the rapid spanning tree protocol (RSTP). these spanning trees are maintained (upon MAC address changes, cable changes, etc.) with bridge protocol data units (BPDUs). bridge tree is grown from the root bridge. since there are many possible spanning trees, the implementation typically factors in link speeds
- bridge port states:
  - blocking
  - listening 
  - learning
  - forwarding
  - disabled
  - `brctl` disables STP by default under the assumption that topologies are simple, enabled with `brctl stp br0 on`
  - STP recalculation is expensive, so MVRP was developed to update filtering DBs based on changes in VLAN topology
  ## Wi-Fi (802.11)
  - basically wireless ethernet
  - an access point and its connected stations are called a basic service set (BSS)
  - BSS's are connected by a distribution service (DS)
  - the collection of BSS's and the DS make up and extended service set (ESS)
  **management frames** - probe request, used to scan networks. limitations are placed to ensure that 802.11 traffic is not transmitted on frequencies licensed by medical/govt equipment.
  ### Frequency Bands
  2.4GHz - larger range, slower speeds
  5.0GHz - smaller range, faster speeds
  **band** - set of channels which operate around the same frequency. channel 1 of the 2.4GHz band may operate at a frequency of 2.401 GHz - 2.423 GHz. Notice the channel range of 22MHz