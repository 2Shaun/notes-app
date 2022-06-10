## Edge Device

- edge server, router, routing switch

  **edge server** - can store static assets such as HTML, images, and Javascript bundles. this shortens the time and distance of a request so that it may not have to travel across the internet backbone

- networks, by definition, must communicate via an edge device
- if edge devices are not placed in strategic locations, traffic can "trombone" long distances and come back to a destination network that is geographically close to the source network
- Cloudflare is considered to be a network of edge servers

### Security

- WAF

### Reliability

- one of the largest networks of edge servers
- anycast allows for many devices to respond to requests

### Speed

- caching
- if IP addresses are neighbors with your network, the response will come back faster than travelling a backbone

## IP Addresses

- BYOIP - cloudflare will announce your IP on its edge servers
- Cloudflare's IPs make up
