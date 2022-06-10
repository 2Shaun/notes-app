# Wireguard
- gives a virtual interface which is assigned a private key and can be administered via `ip`
- virtual interface, e.g. `wg0`, is assigned private keys and public keys for whom will be communicating
- stateless from the administration perspective: administrator does not need to worry about connections, key exchanges, etc.
- peers exchange public keys much like OpenSSH
- layer 3 only
- cryptokey routing table is defined by public key and subnet association (perhaps /32 CIDR length)
- `wg0` will be listening on a UDP port
- the cryptokey routing table may not contain an internet endpoint when routing ALL traffic. if the source for a public key is 0.0.0.0/0, ALL packets will be routed to that internet endpoint, regardless of source
- if `wg0` receives a packet which is decrypted from a peer (public key in the cryptokey routing table), it will route traffic to the address of the source
  - this roaming benefit only seems useful for the telecommuter. the telecommuter still needs a static IP for the destination tunnel
- `wg0` will drop outgoing/incoming packets when it cannot find a cryptokey peer for a destination/source (ICMP no route to host/???)
- if the received packet is not IP, it is dropped
- `wg0` has a receive queue for incoming packets not dropped
- when `wg0` encrypts a packet with a public key, it is only decryptable with that peer's private key
- peer's have remote endpoints (IP + UDP port)

## Example server configuration
```
[Interface]
PrivateKey = yAnz5TF+lXXJte14tji3zlMNq+hd2rYUIgJBgB3fBmk=
ListenPort = 51820

[Peer]
PublicKey = xTIBA5rboUvnH4htodjb6e697QjLERt1NAB4mZqp8Dg=
AllowedIPs = 10.192.122.3/32, 10.192.124.1/24

[Peer]
PublicKey = TrMvSoP4jYQlY6RIzBgbssQqY3vxI2Pi+y71lOWWXX0=
AllowedIPs = 10.192.122.4/32, 192.168.0.0/16

[Peer]
PublicKey = gN65BkIKy1eCE9pP1wdc8ROUtkHLF2PfAqYdyYBz6EA=
AllowedIPs = 10.10.10.230/32
```
- `[Peer]`s in the server configuration represent inputs for encryption algos and destination IPs for which the server will send packets. When sending packets, `wg0` will lookup the public key of a destination IP. When receiving packets, it will decrypt then look up source IP in the cryptorouting table and compare it with the packets source IP.
- by setting `AllowedIPs` to 0.0.0.0/0 for a `PublicKey`, the packet will only be successfully decrypted if that (roaming) IP has the associated private key

If you're connected at Barnes and Noble, a packet may be transmitted on the `wg0` interface. The crypto key routing table is consulted to find the public key used for encryption. It seems like the packet will have two destinations? The public IP of my VPN device and the private IP of the peer?

## Principles of a Secure VPN
- **authenticated** peers and IP addresses they're allowed to use as a source
