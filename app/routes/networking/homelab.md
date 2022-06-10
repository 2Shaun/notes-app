My Range
10.100.0.1 - 10.100.15.254

OPNsense LAN
10.100.0.1 - 10.100.0.254

vmbr0 10.100.1.1

10.100.0.2/24
iface ensp4s0 inet manaul


auto vmbr0
iface vmbr0 inet static
    address 10.100.0.2/24
    gateway 10.100.0.1
    bridge-ports ensp4s0
    bridge-stp off
    bridge-fd 0
    
# commands to add virtual interface to rancher
`sudo ip link add link eth0 name eth0.2 type vlan id 2`
`sudo ip link set eth0.2 up`
`sudo ip addr add dev eth0.2 10.100.1.3/24`