**forward proxy** - aka tunnel or gateway
- proxies can be used to provide client anonymity, but may cause information from original request to be lost
- IP address of client is used for location-dependent content, debugging, and statistics
- `X-Forwarded-For` (XFF), tells the server which IP address the proxy is forwarding for (can be a security risk)
- `X-Forwarded-Host` (XFH), same as XFF except identifies a domain
# `mitmweb`
- when running `mitmweb`, it gives the port of the interface, `8081` by default, and the proxy server, `8080` by default
- for http, all REST requests are just sent to and forwarded from the proxy
- a `CONNECT` request
- from the perspective of your client apps, after setting the HTTP proxy to the port of `mitmproxy`, from now on, `mitmproxy` is the server for all HTTPS connections
## MAC OSX notes
- proxy is configured in System Preferences -> Network -> Advanced... -> Proxies
- you had to put the mitm root cert in the system "Keychain Access" for some Apple apps to work, like Apple Music