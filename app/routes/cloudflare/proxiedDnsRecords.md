# Proxied DNS Record

- FQDN to resolve to a Cloudflare anycast IP address
  **anycast** - an IP address is mapped to several devices
- hides origin server (backend service) IP
- Cloudflare must verify ownership before it can proxy a domain
  - it is recommended to roll the IP afterwards as, while the record is pending, your IP address is exposed
- requests appear to come from Cloudflare, so you must allow Cloudflare IPs to make requests
- only A, AAAA, and CNAME records may be proxied
- Windows authentication is not allowed if Cloudflare is proxying the domain (Kerberos violates HTTP/1.1 spec)
- even though you may use Cloudflare DNS, if your origin is not proxied, users are still connecting directly to the origin server. if the origin is proxied, users are connected to the Cloudflare edge server

- How does Cloudflare know the origin IP when proxying?
