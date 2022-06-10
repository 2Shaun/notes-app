- when running `ssh tommy@157.245.254.196`, you are ssh'ing into a public IP (DNS is not referenced)

# Recursive Resolver 
- root nameserver -> TLD nameserver -> authoritative nameserver
- these seem to have a descending order of TTL (when the DNS will try to update its record)
- ISPs sometimes do not respect TTL (it uses their bandwidth and their money)
- you can reproduce what a recursive resolver does by `dig @1.1.1.1 +trace github.com`
## 1.1.1.1
- you can configure your router to use this as a recursive resolver
- a recursive resolver (also called a authoritative nameserver provider) and served by anycast
- provides anycast to 2 of the 13 root nameservers

1. Root server (really a cluster)
- 13 of these clusters
- you have no control over the root server used to resolve your domain

2. TLD server
**domain registrar** - lets you purchase domain names
- when a domain name is purchased, the domain registrar gives the name of the authoritative nameserver to the TLD 
  - this gives you a lot of control over the authoritative nameservers used to resolve your domain
  - you should not use your domain registrar as your authoritative nameserver because if your authoritative nameserver goes down, you can use registrar to change it
**top-level domain** - after last dot in URL. there are generic (.com, .org, .edu, etc.) and country level (.us, .cn, etc.)
  - this gives you SOME control over the TLDs used to resolve your domain
- handled by IANA (Internet Assigned Numbers Authority)
- godaddy is a domain registrar
  - it lets you manage DNS records (nameserver), but you probably should use another platform for that


3. Authoritative Nameservers (aka nameservers)
- can be obtained by `host -t ns [URL]`, a `WHOIS`, and `dig` query
- last step in resolving a URL (A record) or new domain name (CNAME record). CNAMES prompt the recursive resolver to procedure a dns lookup again until an A record is reached
- Cloudflare distributes these with Anycast routing
- any one Cloudflare authority is likely loadbalanced and it takes time for an update to propagate
**anycast** - one IP address to multiple servers. the server which is geographically closer to the requester will provide a response
- these are cached by recursive resolvers, so you may need to wait for TTLs to expire before seeing effects of changing 

## DNS Zones
- each DNS zone has autonomy over all leaf nodes (hosts) or until another zone starts

## Reverse DNS (finding name for IP address)
- ARPA

